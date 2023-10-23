import projectsRoutes from './routes/projects.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import express from 'express'

const app = express()
//middlewares
app.use(express.json())

//routes
app.use(projectsRoutes)
app.use(tasksRoutes)


export default app