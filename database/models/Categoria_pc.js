module.exports = (sequelize, DataTypes) => {
    let alias ="Categoria_pc";
    let cols={
         id:{
             type:DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         marca:{
             type:DataTypes.STRING,
             allowNull: false
         },
         logo:{
             type:DataTypes.STRING,
             allowNull: false    
         }      
    };
    
    let config={
     tableName: "categorias_pc", 
     timestamp: false
 };
     const Categoria_pc =sequelize.define(alias, cols, config)
     return Categoria_pc;
 };
 