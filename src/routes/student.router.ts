import { Router } from "express";
import StudentController from "../controllers/student.controller.js";
 
const router = Router();
const studentContrller = new StudentController();

router.get("/students", studentContrller.getStudents);
router.get("/students/:id", studentContrller.getStudentById);
router.post("/students", studentContrller.createStudent);
router.put("/students/:id", studentContrller.updateStudent);
router.delete("/students/:id", studentContrller.deleteStudent);

export default router;
