let number=document.querySelector('#number')

let people=Number(number.innerText); 

let money=document.querySelector('#amount')

const bill=document.querySelector('.inputB')

const tip=document.querySelector('.inputT')

function mone (){
    const billamount= Number(bill.value);
    const tippercent= Number(tip.value)/100;
    const tipamount= billamount * tippercent
    const total= tipamount+ billamount;
    const prsntotal= total/ people;

    money.innerText= `₹${prsntotal.toFixed(2)}`
}

function increase(){
    people++;
    number.innerText=people;
    mone();
};

function decrease(){
    if(people<=1){
        return
    }
    people--;
    number.innerText=people;
    mone();
};
