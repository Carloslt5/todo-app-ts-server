import express from 'express'
import { getKanbanCards, createKanbanCards, updateKanbanCards, deleteKanbanCards } from './../controllers/kanban.controllers'
const router = express.Router()

router.get('/:boardId/getKanbanCards', getKanbanCards)
router.post('/:boardId/createKanbanCards', createKanbanCards)
router.put('/:boardId/updateKanbanCards', updateKanbanCards)
router.delete('/:boardId/deleteKanbanCards/:kanbanCardId', deleteKanbanCards)

export default router