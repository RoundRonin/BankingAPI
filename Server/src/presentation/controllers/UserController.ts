import { Request, Response } from 'express';
import UserBank from '../../domain/models/UserBank';
import User from '../../domain/models/User';
import Bank from '../../domain/models/Bank';

export const getUserBanks = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const userBanks = await UserBank.findAll({
            where: { userId },
            include: [{ model: Bank }],
        });

        if (userBanks.length > 0) {
            const banks = userBanks.map(userBank => userBank.getDataValue('Bank'));
            // Access the Bank instance res.status(200).json(banks);
        } else {
            res.status(404).json({ message: 'No banks found for user' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

// export const getUserBanks = async (req: Request, res: Response) => {
//     const { userId } = req.params;
//     try {
//         const userBanks = await UserBank.findAll({
//             where: { userId },
//             include: [{ model: Bank }],
//         });

//         if (userBanks.length > 0) {
//             const banks = userBanks.map(ub => ub.Bank);
//             res.status(200).json(banks);
//         } else {
//             res.status(404).json({ message: 'No banks found for user' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Internal server error', error });
//     }
// };

export const deleteUserBank = async (req: Request, res: Response) => {
    const { userId, bankId } = req.params;
    try {
        const deletedCount = await UserBank.destroy({
            where: { userId, bankId },
        });

        if (deletedCount) {
            res.status(200).json({ message: 'Bank removed from user' });
        } else {
            res.status(404).json({ message: 'User or bank not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};