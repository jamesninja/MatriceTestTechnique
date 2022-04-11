function  ip_Validator(ipAddress)
 {
     ip= "64.233.161.147";
    let regEx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if(ip.match(regEx))
      {
          
       return console.log("valid");
      }
    else
      {
     return  console.log("Please enter a valid ip Address.");
    
      }
 }    
 
  ip_Validator()