import { Response, Request } from "express";

export default class StudentController {
  getStudents = async (_: Request, res: Response) => {
    try {
      // const payload = await AppDataSource.manager.find(Student);
      res.json({ status: "success", payload });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", error: "view console" });
    }
  };

  getStudentById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      // const payload = await AppDataSource.manager.findOneBy(Student, { id });
      if (!payload) {
        return res.status(404).json({ status: "error", message: "not found" });
      }
      res.json({ status: "success", payload });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", error: "view console" });
    }
  };

  createStudent = async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, age } = req.body;
      if (!firstName || !lastName || !age) {
        return res
          .status(400)
          .json({ status: "error", error: "missing fields" });
      }
      // const student = new Student();
      // student.firstName = firstName;
      // student.lastName = lastName;
      // student.age = Number(age);
      //
      // await AppDataSource.manager.save(student);
      return res.json({ status: "created", student_id: student.id });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: "error", error: "view console" });
    }
  };

  updateStudent = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const { firstName, lastName, age } = req.body;
      // const student = await AppDataSource.manager.findOneBy(Student, { id })
      if (!student) {
        return res.status(404).json({ status: "error", message: "not found" });
      }
      if (!firstName && !lastName && !age) {
        return res
          .status(400)
          .json({ status: "error", message: "missing almost 1 field" });
      }
      // if(firstName) student.firstName = firstName;
      // if(lastName) student.lastName = lastName;
      // if(age) student.age = age;
      // await AppDataSource.manager.save(student)
      res.json({ status: "updated", student });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: "error", error: "view console" });
    }
  };

  deleteStudent = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      // const student = await AppDataSource.manager.findOneBy(Student, { id })
      if (!student) {
        return res.status(404).json({ status: "error", message: "not found" });
      }
      // const response = await AppDataSource.manager.remove(student);
      res.json({ status: "deleted", response });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: "error", error: "view console" });
    }
  };
}
