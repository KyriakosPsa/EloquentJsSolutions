/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
let triangleChar = "#";
// With for loop
triangleChar = "#"
for (let counter = 0; counter < 7 ; counter += 1){
    console.log(triangleChar);
    triangleChar += "#";
}

// With While loop
triangleChar ="#"
while (triangleChar.length < 8){
    console.log(triangleChar);
    triangleChar += "#";
}