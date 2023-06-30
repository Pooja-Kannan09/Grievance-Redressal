 var studentService = require('./studentServices');

var createStudentControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await studentService.createStudentDBService(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "Student created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await studentService.loginuserDBService(req.body);
        if (result.status) {
            console.log("hello");
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

//complaint
var createComplaintControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await studentService.createComplaintDBService(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "Complaint submitted successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating complaint" });
    }
}
catch(err)
{
    console.log(err);
}
}

var createSolutionControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await studentService.createSolutionDBService(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "Student created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

//table
var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await studentService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

//customer
var getCusDataConntrollerfn = async (req, res) =>
{
    var customer = await studentService.getCusDataFromDBService();
    res.send({ "status": true, "data": customer });
}
 var getStatusConntrollerfn = async (req, res) =>
 {
     var stat = await studentService.getStatusFromDBService();
     res.send({ "status": true, "data": stat });
 }

//delete cus

var removeCusDataControllerfn =async (req, res) =>
{
    var result = null;
    try {
        
        result = await studentService.delCustomer(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}


//add complaint
var addsolutionControllerfn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await studentService.createSolutionService(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "complaint submitted successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}


//update status
var updateStatusConntrollerfn = async (req, res) =>
{
    
    console.log(req.body);
    
    var result = await studentService.update(req.body);
 
     if (result) {
        res.send({ "status": true, "message": "Status Updated"} );
     } else {
         res.send({ "status": false, "message": "Status Update Failed" });
     }
}
var getDataByIDConntrollerfn = async (req, res) =>
{
    var empolyee = await studentService.getDataByIdDBService(req.body);
    res.send({ "status": true, "data": empolyee  });
}


module.exports = { createStudentControllerFn,loginUserControllerFn,createComplaintControllerFn,
    createSolutionControllerFn,updateStatusConntrollerfn,getDataByIDConntrollerfn,getDataConntrollerfn,
    getCusDataConntrollerfn,getStatusConntrollerfn,removeCusDataControllerfn,addsolutionControllerfn};