//ASSIGNMENT NO # 2.....CALLBACK AND PROMISSES
//PROMISSES
//PROMISSES:Promises are objects. Each promise object has a then method. The then method of the promise object accepts a function as a first parameter. If we call the then method of a promise, the callback function will be executed once the promise gets resolved.

//SIMPLE EXAMPLES..
 
function someTask(num: number){
    let promiseObj :Promise<string> = new Promise((resolve,reject)=>{

        if(num >3 ){
        resolve("Promises are resolved here...");
        }
        else{
            reject("Promises are rejected here...")
        }
    });

    return promiseObj;
}


function task2(){
    let promiseObj :Promise<string> = new Promise((resolve,reject)=>{
        reject("task2 Promises are rejeted here...");
    });

    return promiseObj;
}

let response = someTask(6);

response.then((text:string)=>{
console.log("then of values..", text);
return task2();
}).then((text:string)=>{
    console.log("then of task2..", text);
})
.catch((err)=>{
    console.log("This is catch..", err);
})
 console.log("Response...", response);//Expected utput...then of values.. Promises are resolved here.../This is catch.. task2 Promises are resolved here..

  // =============================         TASKS.........===========================================

//1- //car maintenance
//2- //do some Grocery
//3- //Laundry Dress 
//4 -// Attend event
       function carMaintenance1(){
      console.log("I leave my car at 9 in workshop");

    let result : Promise<string> = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Car is fixed...");
            resolve("Your car is ready");
        }, 2000);
    })
    
    return result;
 }
 
function GroceryItems(){
    let purchaseItem: Promise<string> =new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("For Grocery")
            resolve("pick grocery items")
        }, 300);
        })
        return purchaseItem;
    }
function pickDress1(){
    let promise : Promise<string> = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Your Dress is ready"); 
            resolve("pick your dress")
        }, 400);
    })
    return promise;
  
}
function EventAttend(){
    let Event : Promise<string> = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Attend the Event"); 
            resolve("Going for attend event")
        }, 500);
    })
     return Event
  
}

let mechanicResponse = carMaintenance1();


mechanicResponse.
then((text:string)=>{
    console.log("Mechanic Response...",text);
    return GroceryItems();
})
.then((text:string)=>{
    console.log(" Grocery Shop..",text);
    return pickDress1()
})
.then((text:string)=>{
    console.log("Laundry response..",text);
    return EventAttend()
})
.then((text:string)=>{
    console.log("event is pending..",text);
})
.catch((err:any)=>{
    console.log("Error",err);
});
//============================================================================================================


//======================Callback==============================================================================

//Defination:A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
//SIMPLE EXAMPLES

  function task1(anyfunction : any){
        console.log("do something");
        anyfunction("we are passing values to callback");
    }


    task1(function secondtask(text:string){
        console.log("this is a callback function.. ",text);
    })
//==============================================================
function child(homework:any) {
    console.log("plz prepare tea")
    homework("tea is ready")
    
}
child (function father(message:any){
      console.log("child's telling",message)
})
//===================================================================

//====================================CALLBACK HELL============================================

//simple examples

function mechanical_Pump_Maintinance() {
        setTimeout(() => {
            console.log("make sure you have proper toolkit")
        setTimeout(() => {
            console.log("Disconnect the removing the main parts")
            setTimeout(() => {
                console.log(" remove coupling bolt")
                setTimeout(() => {
                    console.log("remove the coupling from shaft")
                    setTimeout(() => {
                        console.log("open the nut & bolt of the casing")
                        setTimeout(() => {
                            console.log("remove the upper casing carefully")
                            setTimeout(() => {
                                console.log("remove the lower casing carefully")
                                setTimeout(() => {
                                    console.log("inspection the shaft")
                                    setTimeout(() => {
                                        console.log("remove the bearing")
                                        setTimeout(() => {
                                            console.log("remove slleve nut")
                                            setTimeout(() => {
                                                console.log("remove the impellor")
                                                setTimeout(() => {
                                                    console.log("remove the mechanicalseal after removing bering")
                                                    setTimeout(() => {
                                                        console.log("clean all removing parts")
                                                        setTimeout(() => {
                                                            console.log("purchase damaged part")
                                                            setTimeout(() => {
                                                                console.log("then start assembly")
                                                                setTimeout(() => {
                                                                    console.log("Assemble the partstepwise opposite to removing step")
                                                                }, 10);
                                                            }, 900);
                                                        }, 200);
                                                    }, 300);
                                                }, 100);
                                            }, 200);
                                        }, 300);
                                    }, 200);
                                }, 5000);
                            }, 5000);
                        }, 1000);
                    }, 1000);
                },3000);
            }, 2000);
        }, 1000);
    }, 1000);
    }


mechanical_Pump_Maintinance();



//=======================================================================================================================================