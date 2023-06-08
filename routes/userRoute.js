import express from "express";
import { createUser, allUser, deleteUser, updateUser } from "../controller/userController.js";

const router = express.Router();


router.route("/users").get(allUser)
router.route("/user/new").post(createUser)
router.route("/user/:id").get(deleteUser).put(updateUser)





export default router;