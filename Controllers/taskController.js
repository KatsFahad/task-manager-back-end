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

const addNewTask = async (req,res) =>{
    const {title} = req.body
    if(title){
        const task = await prisma.task.create({
            data: {
                title
            }
        })
        res.send('New task added')
    }
    else{
        res.send('failed to add new task')
    }
}

const getTaskById = async (req,res) =>{
    const getTask = await prisma.task.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if(getTask){
        res.send(getTask)
    }else{
        res.send('No task by that id')
    }
}

module.exports = {
    getAllTasks,
    addNewTask,
    getTaskById
}