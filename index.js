"use strict";

// const { Drawer } = require("flowbite");

// const { Modal } = require("flowbite");

// const { Modal } = require("flowbite");

// const h1 = document.querySelector("div");
// console.dir(h1);
// h1.innerText = h1.innerText + " Hindustan hamara";

// const { data } = require("autoprefixer");

// const { off } = require("process");

// const divs = document.querySelectorAll(".para1");
// console.dir(divs);

// for(let idx=0;idx<=divs.length;idx++)
// {
//     divs[idx].innerText += ` Hindustan hamara ${idx}`;
// }

// let var1;
// function ansGuess() {
// let var2 = prompt("How many days is it going to take for Pritam to learn web development?");
// var1 = var2;
// };

// console.log(var1);
// ansGuess();

// if(var1 == '3')
// {
//     alert("Right answer");
// }
// else
// {
//     alert("Please guess the answer");
//     ansGuess();
// }

// let div = document.querySelector("div");
// div.addEventListener("click",function()
// {
//     div.innerHTML="Churo is great";
// })


// const btn = document.getElementsByClassName("btn");
// var cFlag = 0;
// console.log(btn);
// // let idx=0;
// // console.log(btn[idx].innerHTML);
// // for(let idx=0;idx<btn.length;idx++)
// // for(idx off)
// // {
//     // console.log(btn[idx].innerHTML);
//     // btn[idx].innerHTML="Churo is not great";
//     // let cFlag = 0;
//     // console.log(`${cFlag} is being called`);
//     document.body.addEventListener("click",function(evt)
//     {
//         console.log(evt.target.className.includes("btn"))
//         if(evt.target.className.includes("btn"))
//         {
//             evt.target.innerHTML="O";
//         }
//     });
// class railwayForm{
//     constructor(givenName)
//     {
//         this.name = givenName;
//     }
//     sumbit()
//     {
//         alert("Form is submitted");
//     }
//     cancel()
//     {
//         alert(this.name + " Form is cancelled");
//     }
// };
// class PatnaRailway extends railwayForm{
//     constructor(givenName, TrainNum)
//     {
//         super(givenName);   
        
//         this.givenName = givenName;
//         this.TrainNum = TrainNum;
//         alert(`${givenName} is called for train num : ${TrainNum}`);
//     }
//     bookTicket(givenName, TrainNum1)
//     {
//         let promptValue = prompt(`${givenName} is booking tickets for train num : ${this.TrainNum} Press Yes/No`);
//         alert(promptValue + " Form is cancelled");
//     }
// }

// let Pritam = new PatnaRailway("Pritam", 193206);
// let Ritesh = new railwayForm("Ritesh");

// // Pritam.display("Pritam");
// Ritesh.cancel();
// Pritam.sumbit();
// Pritam.bookTicket("Pritam", 193206);

// *****************  async ********************** //
// const datas = [
//     {name : "Ritesh" , occupation : "Software Engineer" , city : "Patna"},
//     {name : "Rahul" , occupation : "Manager" , city : "Delhi"}
// ];

// datas.push({name : "vivek" , occupation : "M.L.A", city : "Jaya"});

// // function getDatas(){
// //     setTimeout(() => {
//         let output = "";
//         datas.forEach((data,index) =>{
//             output += `<li>${data.name}, is ${data.occupation} who lives in ${data.city} </li>`;
//         })
//         document.body.innerHTML=output;
// //     }, 5000)
// // };


// const newdata = {name : "Chandan" , occupation : "Dentist" , city : "Patna"};


// // getDatas();

// datas.push(newdata);

// // (newdata) =>
// // {
// //     setTimeout(() =>
// //     {datas.push(newdata);}
// //     , 2000);
// // };

// var modal = document.getElementById('login-popup');
// console.log(modal);

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     console.log(window.onclick);
//     if (event.target == modal) {
//         // alert(`${event.target} + ${modal}`);
//         modal.style.display = 'none';
//     }
// }



// ********************************************************//
var e = document.getElementById('login-popup');
//  var close = document.getElementById('closebox1');

e.addEventListener('click', function(){
  if(e.style.display == 'flex')
  {
  console.log(e.style.display );
    e.style.display = 'none';
  }
  else
    e.style.display = 'block';
});
// console.log(modal);
var Contact = document.getElementById('Contact-popup');
// console.log(Contact);
window.onclick = function(event1) {
    if (event1.target == Contact) {
        // alert(event1.target);
        console.log(event1.target);
        console.log(Contact);
        console.log(Contact.style.display);
        Contact.style.display = "none";
        console.log(Contact.style.display);
    }

}

// set the drawer menu element
const $targetEl = document.getElementById('drawer-navigation');
console.log($targetEl.style);
// options with default values
const options = {
    placement: 'right',
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
    onHide: () => {
        console.log('drawer is hidden');
    },
    onShow: () => {
        console.log('drawer is shown');
    },
    onToggle: () => {
        console.log('drawer has been toggled');
    },
};

// instance options object
const instanceOptions = {
  id: 'drawer-navigation',
  override: true
};
const drawer = new Drawer($targetEl, options, instanceOptions);
// show the drawer
// drawer.hide();


// Cards Selection   *******************

// function multiplyNode(node, count, deep) {
//     for (var i = 0, copy; i < count - 1; i++) {
//         copy = node.cloneNode(deep);
//         node.parentNode.insertBefore(copy, node);
//         // console.log("What's happening");
//     }
// }

// multiplyNode(document.querySelector('.card'), 8, true);


// const parent = document.querySelectorAll('.card');

// // parent[0].querySelector('.first').querySelector(':scope > .second').innerText = 'Tag1';
// // parent[1].querySelector('.first').querySelector(':scope > .second').innerText = 'Tag2';
// // parent[2].querySelector('.first').querySelector(':scope > .second').innerText = 'Tag3';
// // parent[3].querySelector('.first').querySelector(':scope > .second').innerText = 'Tag4';
// // parent[4].querySelector('.first').querySelector(':scope > .second').innerText = 'Tag5';
// document.getElementById('test').innerHTML = `<img src=`+"https://flowbite.com/docs/images/logo.svg"+` class=`+"h-8"+` alt=`+"Flowbite Logo"+` />`;
// parent[4].querySelector('.first').querySelector(':scope > .second').innerHTML = `<img src=`+"https://flowbite.com/docs/images/logo.svg"+` class=`+"h-8"+` alt=`+"Flowbite Logo"+` />`;
// // parent[0].querySelector('.first').querySelector(':scope > .second').querySelector(':scope > .third').innerText = `1`;
// // parent[1].querySelector('.first').querySelector(':scope > .second').querySelector(':scope > .third').innerText = `2`;
// // parent[2].querySelector('.first').querySelector(':scope > .second').querySelector(':scope > .third').innerText = `3`;
// // parent[3].querySelector('.first').querySelector(':scope > .second').querySelector(':scope > .third').innerText = `4`;
// // parent[4].querySelector('.first').querySelector(':scope > .second').querySelector(':scope > .third').innerText = `5`;


// // Cards Selection ends   *******************


// // const divs = document.querySelectorAll(".card");
// // console.log(divs);
// // const fChild = document.querySelectorAll(".first");
// // console.log(fChild);
// // const fnChild = document.querySelectorAll(":scope > .second");
// // console.log(fnChild[1]);
// // console.log(Contact.style.display);

