import { Response, Request } from "express";
import { AppDataSource } from "../data-source.js";
import { Student } from "../entity/Student.js";

export default class StudentController {
  
  getStudents = async (req: Request, res: Response) => {
    try {
      const payload = await AppDataSource.manager.find(Student);
      res.json({ status: "success", payload });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", error: "view console" });
    }
  }

  getStudentById() {}

  updateStudent() {}

  deleteStudent() {}
}
