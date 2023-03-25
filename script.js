
// let ageValue=prompt("Yoshingizni kiriting");
// function myFunction(){
    // let ages =[14,18,20,39,45,50,56];
    // let value=ages.reduce((a,b)=>(a+b)/ages.length);
    // if(ageValue >= value){
        // console.log(ageValue-value);
    // }else{
        // console.log(value-ageValue);
    // }
    // 
// };
// 
// myFunction();


// Ekub-Ekuk

let elOne=document.querySelector("#one");
let elSecond=document.querySelector("#second");
let elBtn=document.querySelector("#btn");
let elEkub=document.querySelector("#ekub");
let elEkuk=document.querySelector("#ekuk");

elBtn.addEventListener("click",function(e){
    e.preventDefault();
    
    let a = elOne.value;
    let b = elSecond.value;
    
    
function ekub(a,b){
    if(a==0){
        console.log(b);
    }else if(b==0){
        console.log(a);
    }else if(a==b){
        console.log(a);
    }else if(a>b){
        console.log((a-b,b)) ;
    }else{
        console.log ((a,b-a));
    };


};
ekub(a,b);
   
function ekuk(a,b){
    console.log(Math.abs(a*b));
}
ekuk(a,b);
 
      
});

