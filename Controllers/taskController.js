const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getAllTasks = async (req, res) =>{
    const tasks = await prisma.task.findMany()
    if(tasks){
        res.json(tasks)
    }else{
        res.json('No tasks found')
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
        res.json('New task added')
    }
    else{
        res.json('failed to add new task')
    }
}

const getTaskById = async (req,res) =>{
    const getTask = await prisma.task.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if(getTask){
        res.json(getTask)
    }else{
        res.json('No task by that id')
    }
}

const deleteById = async (req,res) =>{
    const taskToDelete = await prisma.task.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if(taskToDelete){
        res.json('Task deleted')
    }else{
        res.json('Failed to deleted task')
    }
}

const updateTask = async (req, res) =>{
    const {title} = req.body
    const task = await prisma.task.update({
        where: {
            id: +req.params.id
        },
        data:{
            title
        }
    })
    if(task){
        res.json('Task Updated')
    }else{
        res.json('Failed to update task')
    }
}
    // const deleteAllTasks = async (req,res) =>{
    //     const tasks = await prisma.task.deleteMany()
    //     if(tasks){
    //         res.json('All tasks deleted')
    //     }else{
    //         res.json('failed to delete all tasks')
    //     }
    // }
    const deleteAllTasks = async (req, res) => {
        try {
          const result = await prisma.task.deleteMany();
          
          if (result.count > 0) {
            // If there were tasks to delete and they were successfully deleted
            res.status(200).json({ message: 'All tasks deleted successfully' });
          } else {
            // No tasks found to delete
            res.status(404).json({ message: 'No tasks found to delete' });
          }
        } catch (error) {
          // Log the error and send a 500 response
          console.error('Error deleting tasks:', error);
          res.status(500).json({ error: 'Failed to delete all tasks' });
        }
      };
      

module.exports = {
    getAllTasks,
    addNewTask,
    getTaskById,
    deleteById,
    updateTask,
    deleteAllTasks
}