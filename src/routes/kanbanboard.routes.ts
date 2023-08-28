import express from 'express'
import { isAuthenticated } from '../middlewares/verifyToken.middleware'
import { getKanbanBoard, getOneKanbanBoard, createKanbanBoard, updateKanbanBoard, addProjectToKanban, deleteKanbanBoard } from '../controllers/kanban.controllers'

const router = express.Router()

router.get('/getKanbanBoard', isAuthenticated, getKanbanBoard)
router.get('/getOneKanbanBoard/:kanbanBoardId', isAuthenticated, getOneKanbanBoard)
router.post('/createKanbanBoard', isAuthenticated, createKanbanBoard)
router.put('/updateKanbanBoard/:KanbanBoardId', isAuthenticated, updateKanbanBoard)
router.put('/addProjectToKanban/:KanbanBoardId', isAuthenticated, addProjectToKanban)
router.delete('/deleteKanbanBoard/:KanbanBoardId', isAuthenticated, deleteKanbanBoard)

export default router