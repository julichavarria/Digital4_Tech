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
     const Categoria =sequelize.define(alias, cols, config);

     Categoria.associate = function (modelos){
        Categoria.hasMany(modelos.Producto,
        {
        as:"producto",
        foreignKey:"categoria_id"
        }
        );
    };

     return Categoria;
 };
 