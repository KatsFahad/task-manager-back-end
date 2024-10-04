const {PrismaClient} = require('@prisma/client')
const prisma  = new PrismaClient()

const getAllUsers = async (req,res) =>{
    const users = await prisma.user.findMany()

    if(users){
        res.json(users)
    }else{
        res.json('No Users found')
    }
}

module.exports = {
    getAllUsers
}