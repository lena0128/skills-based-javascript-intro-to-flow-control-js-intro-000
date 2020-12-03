function basicTeenager(age) {
  var age;
if(age >= 13 && age <= 19) {
  return "You are a teenager!";
} else {
  return "You are not a teenager!";
}
}

function teenager(age) {

}

function ageChecker(age) {
 if(age >= 13 && age <= 19) {
   return "You are a teenager!";
 } else if(age <= 12) {
   return "You are a kid";
 } else if(age > 19) {
   return "You are a grownup"
 }
}

function ternaryTeenager(age) {
age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
case 13:
return "ou are a teenager";
break;
case 14:
return "ou are a teenager";
break;
case 15:
return "ou are a teenager";
break;
case 16:
return "ou are a teenager";
break;
case 17:
return "ou are a teenager";
break;
case 18:
return "ou are a teenager";
break;
case 19:
return "ou are a teenager";
break;
default:
return "You have an age";
}
