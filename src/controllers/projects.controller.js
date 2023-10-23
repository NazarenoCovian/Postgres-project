import {Project} from '../models/Project.js'
import {Task} from '../models/Task.js'

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
    console.log(projects)
    res.json(projects)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }

}

export const createProject = async (req, res) => {
    try {
        const {name,priority, description}= req.body
        const newProject = await Project.create({
            name,priority, description
        })
    res.json(newProject)
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

export const updateProject = async (req, res) => {
    const {id}= req.params
    const {name,priority, description}= req.body
    try {
        const project = await Project.findByPk(id)
        const updatedProject = await project.update({
            name,priority, description
        })
        res.json(updatedProject)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
export const deleteProject = async (req, res) => {
    const {id}= req.params
    try {
        const project = await Project.destroy({
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

export const getProjectTasks = async (req, res) => {
    const {id}= req.params
    try {
        const tasks = await Task.findAll({
            where:{
                projectId:id
            }
        })
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
