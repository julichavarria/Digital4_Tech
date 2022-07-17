module.exports = (sequelize, DataTypes) => {
    let alias ="Producto";
    let cols={
         id:{
             type:DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         titulo:{
             type:DataTypes.STRING,
             allowNull: false
         },
         imagen:{
             type:DataTypes.STRING,
             allowNull: false    
         },
         categoria_id:{
             type:DataTypes.INTEGER,
             allowNull: false    
         },
         procesador:{
             type:DataTypes.STRING,
             allowNull: false    
         },
         mother:{
             type:DataTypes.STRING,
             allowNull: false    
         },
         video:{
             type:DataTypes.STRING,
             
         },
         ram:{
             type:DataTypes.STRING,
             allowNull: false    
         },
         disco:{
            type:DataTypes.STRING,
            allowNull: false    
        },
        gabinete:{
            type:DataTypes.STRING,
            allowNull: false    
        },
        fuente:{
            type:DataTypes.STRING,
            allowNull: false    
        },
        precio:{
            type:DataTypes.INTEGER,
            allowNull: false    
        },
    };
    
    let config={
     tableName: "productos", 
     timestamps: false
 };
     const Producto =sequelize.define(alias, cols, config);
     
     Producto.associate = function(modelos){
        Producto.belongsTo(modelos.Categoria,
        {
        as:"categorias",
        foreignKey: "categoria_id"
        }
        );
    };
    
     return Producto;
 };
 