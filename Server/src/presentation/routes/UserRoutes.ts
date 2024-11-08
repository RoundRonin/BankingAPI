import { Router } from 'express';
import { getUserBanks, deleteUserBank } from '../controllers/UserController';

const router = Router();

router.get('/:userId/banks', getUserBanks);
router.delete('/:userId/bank', deleteUserBank);

export default router;
