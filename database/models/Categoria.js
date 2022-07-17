module.exports = (sequelize, DataTypes) => {
    let alias ="Categoria";
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
     tableName: "categorias", 
     timestamps: false
 };
     const Categoria =sequelize.define(alias, cols, config)
     return Categoria;
 };
 