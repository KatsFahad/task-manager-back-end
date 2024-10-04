const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const taskRouter = require('./Routes/taskRouter')
const userRouter = require('./Routes/userRouter')

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get('/', (req,res)=>{
  res.send('CRUD OPERATIONS')
})

app.use('/tasks', taskRouter)

app.use('/users', userRouter)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost${PORT}`);
});
