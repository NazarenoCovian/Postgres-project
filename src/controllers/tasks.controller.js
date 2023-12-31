import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll()
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const createTask = async (req, res) => {
    try {
        const {name, done, projectId}=req.body
        const newTask = await Task.create({
            name, done, projectId
        })
        res.json(newTask)
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const updateTask = async (req, res) => {
    const {id}= req.params
    const {name, done, projectId}=req.body
    try {
        const task = await Task.findByPk(id)
        const updatedTask = await task.update({
            name, done, projectId
        })
        res.json(updatedTask)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

export const deleteTask = async (req, res) => {
    const {id}= req.params
    try {
        const task = await Task.destroy({
            where:{
                id
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}