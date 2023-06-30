var express = require('express');
const stock= require('../src/user/Stock');
var studentController = require('../src/user/studentControler');
const router = express.Router();

router.route('/student/login').post(studentController.loginUserControllerFn);
router.route('/student/create').post(studentController.createStudentControllerFn);
router.route('/student/filecomplaint').post(studentController.createComplaintControllerFn);
router.route('/student/createSolution').post(studentController.createSolutionControllerFn);
router.route('/user/getAll').get(studentController.getDataConntrollerfn);
router.route('/user/getStatus').get(studentController.getStatusConntrollerfn);
router.route('/customer/getAll').get(studentController.getCusDataConntrollerfn);
router.route('/remove').post(studentController.removeCusDataControllerfn);
router.route('/addSolution').post(studentController.addsolutionControllerfn);
router.route('/update').post(studentController.updateStatusConntrollerfn);

module.exports = router;
