function pageInit()
{
    try
    {
   //On page init display the currently logged in User's profile information.

   // Set variables
   var userName = nlapiGetUser();        // entity id of the current user
   var userRole = nlapiGetRole();        // id of the current user's role
   var userDept = nlapiGetDepartment();  // id of the current user's department
   var userLoc = nlapiGetLocation();     // id of the current user's location

   //  Display information
  // alert("Current User Information" + "\n\n" +
    //   "Name: " + userName + "\n" +
    //   "Role: " + userRole + "\n" + 
    //  "Dept: " + userDept + "\n" +
     //  "Loc: " + userLoc
     //  );
   catch(err)
   {
     nlapiLogExecution("ERROR","error occured:"+err")
    }
}