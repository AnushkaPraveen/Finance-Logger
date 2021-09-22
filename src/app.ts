import { Invoice } from "./classses/Invoice.js";
import { ListTemplate } from "./classses/ListTemplate.js";
import { Payment } from "./classses/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne:HasFormatter;
let docTwo:HasFormatter;

docOne=new Invoice('yoshi','web worl',200);
docTwo=new Payment('mari','hello world',300);

let docs:HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);






const form=document.querySelector('.new-item-form') as HTMLFormElement;

const type=document.querySelector('#type') as HTMLSelectElement;
const tofrom=document.querySelector('#tofrom') as HTMLInputElement;
const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;

const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul);

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    let doc:HasFormatter;
    if(type.value==='invoice'){
        doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }else{ doc=new Payment(tofrom.value,details.value,amount.valueAsNumber);
    }
    
   list.render(doc,type.value,'end');
    
})
