const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getAllTasks = async (req, res) =>{
    const tasks = await prisma.task.findMany()
    if(tasks){
        res.send(tasks)
    }else{
        res.send('No tasks found')
    }
    
}

module.exports = {
    getAllTasks
}