import axios from 'axios'

class BMSService{
   executeLoginService(data){
       return axios.post('http://localhost:9090/api/login',data);
   }

   executeRegisterService(val){

    let data  = {
      "name" : val.name,
      "username" : val.username,
      "password" : val.password ,
      "depositamount" : val.depositamount,
      "guardiantype" : val.guardiantype,
     "guardianname" : val.guardianname,
     "address" :val.address,
     "citizenship" : val.citizenship,
     "country" : val.country,
     "state" : val.state,
     "email" : val.email,
     "gender" : val.gender,
     "maritialstatus" : val.maritialstatus,
     "contactno" : val.contactno,
     "dob" : val.dob,
     "regdate" : val.regdate,
     "accounttype" : val.accounttype,
     "branchname" : val.branchname,
     "citizenstatus" : val.citizenstatus,
     "prooftype": val.prooftype,
     "documentno": val.documentno,
     "refaccountname": val.refaccountname,
     "refaccountno": val.refaccountno,
     "refaccountaddress": val.refaccountaddress
    }
if(val['id']){
  
  data = {
    ...data, 
    "registeredId": val.registeredId
  } 
}
       return axios.post('http://localhost:9090/api/register',data)

   }
    
   executeCustomerGerService(registeredId){
    return axios.get(`http://localhost:9090/api/register/${registeredId}`) 
   }

   handleSuccess(data){
    console.log(data)
    return data;
  };

  handleError(data){
  console.log(data)
  };



executeProfileService(val,registeredId){

  let data  = {
    "name" : val.name,
    "username" : val.username,
    "password" : val.password ,
    "depositamount" : val.depositamount,
    "guardiantype" : val.guardiantype,
   "guardianname" : val.guardianname,
   "address" :val.address,
   "citizenship" : val.citizenship,
   "country" : val.country,
   "state" : val.state,
   "email" : val.email,
   "gender" : val.gender,
   "maritialstatus" : val.maritialstatus,
   "contactno" : val.contactno,
   "dob" : val.dob,
   "regdate" : val.regdate,
   "accounttype" : val.accounttype,
   "branchname" : val.branchname,
   "citizenstatus" : val.citizenstatus,
   "prooftype": val.prooftype,
   "documentno": val.documentno,
   "refaccountname": val.refaccountname,
   "refaccountno": val.refaccountno,
   "refaccountaddress": val.refaccountaddress
  }
// if(val['id']){

// // data = {
// //   ...data, 
// //   "registeredId": val.registeredId
// // } 
// }
     return axios.put(`http://localhost:9090/api/register/${registeredId}`,data)

 }
}

export default new BMSService();