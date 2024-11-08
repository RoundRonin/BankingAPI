import { Model, DataTypes } from 'sequelize';
import sequelize from '../../infrastructure/database';
import User from './User';
import Bank from './Bank';

class UserBank extends Model {
    public userId!: number;
    public bankId!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserBank.init({
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        primaryKey: true,
    },
    bankId: {
        type: DataTypes.INTEGER,
        references: {
            model: Bank,
            key: 'id',
        },
        primaryKey: true,
    },
}, {
    sequelize,
    tableName: 'user_banks',
});

User.belongsToMany(Bank, { through: UserBank });
Bank.belongsToMany(User, { through: UserBank });

export default UserBank;
