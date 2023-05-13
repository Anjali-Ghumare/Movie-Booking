const express = require('express');
const adminRouter = express.Router();

const { addAdmin, adminLogin, getAdmins, getAdminByID } = require('../Controllers/adminController');

adminRouter.post('/signup', addAdmin);
adminRouter.post("/login", adminLogin);
adminRouter.get('/',getAdmins);
adminRouter.get("/:id", getAdminByID);

module.exports = adminRouter