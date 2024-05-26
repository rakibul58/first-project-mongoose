import express from 'express'
import { StudentControllers } from './student.controller'

const router = express.Router()

router.get('/', StudentControllers.getAllStudents)

router
  .route('/:studentId')
  .get(StudentControllers.getSingleStudent)
  .delete(StudentControllers.deleteStudent)

export const StudentRoutes = router
