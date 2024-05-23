import { TStudent } from './student.interface'
import { Student } from './student.model'

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await Student.create(student)
  const student = new Student(studentData)
  if (await student.isUserExist(studentData.id)) {
    throw new Error('User Already Exists!')
  }
  const result = await student.save()
  return result
}

const getAllStudentFromDB = async () => {
  const result = await Student.find()
  return result
}

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
  return result
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
}
