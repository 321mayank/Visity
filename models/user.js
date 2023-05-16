
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
      
        docID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        number: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
     
    
    })

    return user
}