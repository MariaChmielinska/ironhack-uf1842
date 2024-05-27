// ¿En tu páis de origen es normal dejar propina?

//0. addEventlistener to button
let button = document.querySelector("#calculate");
button.addEventListener("click",calculate);

function calculate(){
    console.log("Button to calculate works!");

    //1. 
    const billAmount = document.querySelector("#bill-amount").value;
    console.log("billAmount showing: ", billAmount);
    console.log("billAmount showing type: ", typeof(billAmount));
    
    //2.
    const percentageTip = document.querySelector("#percentage-tip").value;
    console.log("show TIP", percentageTip);
    console.log("show TIP type", typeof(percentageTip));

    //3.
    const tipAmount = document.querySelector("#tip-amount"); // Field of tip amount
    console.log(tipAmount);
    console.log(tipAmount.value);
    tipAmount.value = ((billAmount * percentageTip) / 100).toFixed(2);
    console.log("tipAmount.value: ", tipAmount.value);

    //4. 
    let total = document.querySelector("#total");
    console.log("total: ", total);
    total.value = (Number(billAmount) + Number(tipAmount.value)).toFixed(2);
    console.log("total: ", total.value);

    
}

