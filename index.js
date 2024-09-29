const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const taskRouter = require('./Routes/taskRouter')

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use('/tasks', taskRouter)

const PORT = 4300;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost${PORT}`);
});
