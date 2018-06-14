var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var myObj = new object();
  
  myObj[key] = value;
  
  return myObj;
}
