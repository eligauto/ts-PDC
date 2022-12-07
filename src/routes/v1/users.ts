import { Router } from "express";
import { getUsers, getUser, register, putUser, deleteUser } from "../../controllers/userControllers";

const router = Router();

router.get('/',         getUsers);

router.get('/:id',      getUser);

router.post('/',        register);

router.put('/:id',      putUser);

router.delete('/:id',   deleteUser);

export default router;