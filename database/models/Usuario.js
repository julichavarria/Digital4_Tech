module.exports = (sequelize, DataTypes) => {
   let alias ="Usuario";
   let cols={
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull: false
        },
        apellido:{
            type:DataTypes.STRING,
            allowNull: false    
        },
        usuario:{
            type:DataTypes.STRING,
            allowNull: false    
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false    
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false    
        },
        rol_id:{
            type:DataTypes.INTEGER,
            
        },
        avatar:{
            type:DataTypes.STRING,
            allowNull: false    
        },
   };
   
   let config={
    tableName: "usuarios", 
    timestamps: false
};
    const Usuario =sequelize.define(alias, cols, config)
    return Usuario;
};
