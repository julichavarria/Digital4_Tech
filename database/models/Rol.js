module.exports = (sequelize, DataTypes) => {
    let alias ="Rol";
    let cols={
         id:{
             type:DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         nombre_rol:{
             type:DataTypes.STRING,
             allowNull: false
         }
    };
    
    let config={
     tableName: "roles", 
     timestamps: false
 };
     const Rol =sequelize.define(alias, cols, config)
     return Rol;
 };
 