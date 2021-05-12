// Fix my method

function myFunction() {
  var myObject = {
    objProperty: "string",
    objMethod: function() {
      return myObject.objProperty;
    }
  }
  
  return myObject;
};
