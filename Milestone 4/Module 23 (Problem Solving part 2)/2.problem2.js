/*
    product => wood size in cft 
    chair => 3cft 
    table = > 10cft 
    bed => 50cft

    create a function called `woodQuantityCalc` that takes the quantity of chair table and bed and return how 
    many cft wood do i need 
*/

function woodQuantityCalc(chair = 0, table = 0, bed = 0) {
    return chair * 3 + table * 10 + bed * 50  
}

console.log(woodQuantityCalc(0,0,1));