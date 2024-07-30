import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { UserModel } from "./UserModel.js";

export const ComentarioModal = sequelize.define(
    "comentarios",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        comentario:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        timestamps: false,
    }
);

UserModel.hasMany(ComentarioModal, { foreignKey: "user_id" });
ComentarioModal.belongsTo(UserModel, { foreignKey: "user_id" });
