import { Router } from 'express';
import verifyToken from '../../helpers/verifyToken';
import Controller from './role.controller';

const role: Router = Router();
const controller = new Controller();

// Retrieve all Users
role.get('/' ,controller.findRoles);
role.delete('/:id', controller.remove)

export default role;
