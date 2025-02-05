const salary = 85000;
const isBCS = false; 
const height = 60;

if(salary > 20000 && isBCS == true && height >= 65) {
    console.log("Baba shupatro");
} else if(salary > 80000 || isBCS == true || height >=70) {
    console.log("JI baba kobul");
} else if((salary > 20000 && height >= 65) || isBCS == true) {
    console.log("Chole apatoto");
} else {
    console.log("bhaag tui mokbul");
}