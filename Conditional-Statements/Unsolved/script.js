// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 30;
var expression1 = x < 25;
var expression2 = x > 50;

// TODO: Write Your JavaScript Code Here
 if (expression1 && expression2) {
     console.log("True ✅ True ✅");
 }
 else if (expression1) {
     console.log("True ✅ False ❌");
 }
 else if (expression2) {
     console.log("False ❌ True ✅");
 }
 else {
     console.log("False ❌ False ❌");
 }








// * It is done when the message "True ✅ True ✅" is logged when both `expression1` and `expression2` are true.

// * It is done when the message "True ✅ False ❌" is logged when `expression1` is true.

// * It is done when the message "False ❌ True ✅" is logged when `expression2` is true.

// * It is done when the message "False ❌ False ❌" is logged when both `expression1` and `expression2` are false.