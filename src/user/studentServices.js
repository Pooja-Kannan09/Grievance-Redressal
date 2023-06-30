var studentModel = require('./studentModel');
var complaintModel=require('./complaintModel');
var solutionModel=require('./solutionModel');
var stock=require('./Stock');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createStudentDBService = (studentDetails) => {
   return new Promise(function myFn(resolve, reject) {

       var studentModelData = new studentModel();

       studentModelData.name = studentDetails.name;
       studentModelData.email = studentDetails.email;
       studentModelData.password = studentDetails.password;
       var encrypted = encryptor.encrypt(studentDetails.password);
       studentModelData.password = studentDetails.password;

       studentModelData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });

   });

}
/*
module.exports.createSolutionDBService = (studentDetails) => {
   return new Promise(function myFn(resolve, reject) {

       var studentModelData = new complaintModel();

       studentModelData.complaintID = studentDetails.cid;
       studentModelData.c_email = studentDetails.email;
       studentModelData.c_subject = studentDetails.subject;
       studentModelData.c_dept = studentDetails.dept;
       studentModelData.c_content=studentDetails.content;
       studentModelData.solution=studentDetails.solution;

       studentModelData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });

   });

}
*/
module.exports.loginuserDBService = (studentDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      studentModel.findOne({ email: studentDetails.email},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               
 
               if(result.password== studentDetails.password)
               {
                  resolve({status: true,msg: "Validated Successfully"});
                  if(result.email="admin@gmail.com"){
                     resolve({status: true,msg: "Validated Successfully"});

                  }
               }
               else
               {
                  reject({status: false, msg: "Validated failed"});
               }
            }
            else
            {
               reject({status: false,msg: "Error Detailssss"});
            }
 
         }
      
      });
      
   });
}

//complaint
module.exports.createComplaintDBService = (studentDetails) => {
   return new Promise(function myFn(resolve, reject) {

       var complaintModelData = new complaintModel();
       complaintModelData.complaintID = 'c'+studentDetails.complaintID;
      
       complaintModelData.c_email = studentDetails.email;
       complaintModelData.c_subject = studentDetails.subject;
       complaintModelData.c_dept = studentDetails.dept;
       complaintModelData.c_content=studentDetails.content;
       var stat='pending';
       complaintModelData.c_status =stat;
       complaintModelData.solution='yet to resolve';
       complaintModelData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });

   });

}

module.exports.getDataFromDBService = () => {
 
   return new Promise(function checkURL(resolve, reject) {
       complaintModel.find({}, function returnData(error, result) {
           if (error) {
               reject(false);
           } else {
               resolve(result);
           }
       });
   });
}

module.exports.getCusDataFromDBService = () => {
 
   return new Promise(function checkURL(resolve, reject) {
       studentModel.find({}, function returnData(error, result) {
           if (error) {
               reject(false);
           } else {
               resolve(result);
           }
       });
   });
}

module.exports.getStatusFromDBService = () => {
 
    return new Promise(function checkURL(resolve, reject) {
        solutionModel.findOne({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
 }

//delete

module.exports.delCustomer =(studentDetails) =>{
    return new Promise(function myFn(resolve, reject)
   {
      
    studentModel.deleteOne({email:studentDetails.email}).then(function getresult(result,errorvalue)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild "});
            console.log({status: false, msg: "Invaild "});
         }
         else
         {
            
                  resolve({status: true,msg: "deleted Successfully"});
                  console.log({status: true, msg: "deleted successfully"});
              
         }
            
      });
      
   });
}

//solution
module.exports.createSolutionService = (studentDetails) => {
    return new Promise(function myFn(resolve, reject) {
 
        var studentModelData = new solutionModel();
 
        studentModelData.cid = studentDetails.cid;
        studentModelData.rc_complaint = studentDetails.rc_complaint;
        //studentModelData.c_subject = studentDetails.subject;
        //studentModelData.c_dept = studentDetails.dept;
        //studentModelData.c_content=studentDetails.content;
        studentModelData.rc_solution=studentDetails.rc_solution;
 
        studentModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }

module.exports.createStock = (studentDetails) => {


   return new Promise(function myFn(resolve, reject) {

       var stockData = new stock();

       stockData.name = studentDetails.name;
       stockData.id = studentDetails.id;
       stockData.quantity = studentDetails.quantity;
       stockData.amount = studentDetails.amount;
       stockData.man_date= studentDetails.man_date;
       stockData.exp_date = studentDetails.exp_date;
       

       stockData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });

   });

}

module.exports.delStock = (studentDetails)=>
{
   console.log("priya");
   return new Promise(function myFn(resolve, reject)
   {
      
      stock.deleteOne({id:studentDetails.id}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild "});
            console.log({status: false, msg: "Invaild "});
         }
         else
         {
            
                  resolve({status: true,msg: "deleted Successfully"});
                  console.log({status: false, msg: "deleted successfully"});
              
         }
            
      });
      
   });
}


module.exports.getMusicService = (studentDetails)=> 
{
   return new Promise(function myFn(resolve, reject) 
   {
      musicModel.findOne({ name: studentDetails.name},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {

            if(result !=undefined &&  result !=null)
            {
                  console.log(result.song);
                  resolve({status: true,msg: "Student Validated Successfully"});
               
            }
            else
            {
               reject({status: false,msg: "Student Error Detailssss"});
            }

         }
      
      });
      
   });
}
module.exports.getDataByIdDBService = (Details) => {
 
   return new Promise(function checkURL(resolve, reject) {
       stock.findOne({id:Details.id}, function returnData(error, result) {
           if (error) {
               reject(false);
           } else {
               console.log(Number(result.quantity));
               resolve(result);
           }
       });
   });
}

module.exports.update = (studentDetails) => {    
   console.log(studentDetails);
   return new Promise(function myFn(resolve, reject) {
       complaintModel.updateOne({complaintID:studentDetails.complaintID},{$set:{c_status:"solved"}}, function returnData(error, result) {
         if(error)
         {
            reject(false);
         }
         else
         {
            resolve(result);
         }
       });
   });
}