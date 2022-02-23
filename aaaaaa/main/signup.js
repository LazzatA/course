/**************************  Check *******************************/
/******** Nickname Check ***********/
function isNullNick() {
   return document.querySelector('#Nickname').value.length >= 4
}
/******* Password Check ******/
function isNum(val) {
   return !isNaN(val)
}
function checkCase(val) {
   let u = val.toUpperCase();
   return (val.toLowerCase() === u ? -1 : (val === u ? 1 : 0));
}
function checkPassword() {
   let checkUpper = false;
   let checkLower = false;
   let checkDigit = false;
   let x = document.getElementById('Password').value;
   if (x.length > 7) {
      for (let i = 0; i < x.length; i++) {
         if (isNum(x[i])) {
            checkDigit = true;
         }
         else if (checkCase(x[i]) === 0) {
            checkLower = true;
         }
         else if (checkCase(x[i]) === 1) {
            checkUpper = true;
         }
      }
   }
   return checkUpper && checkLower && checkDigit;

}
function isEmailExist(){
  let email = document.querySelector('#Email').value
  return localStorage.getItem(email) === null;

}
/********************************************************/
// let inputs = document.querySelectorAll('input')
// const isEmpty = str => !str.trim().length;
// let counter = 0
// const len = inputs.length
// for (let input of inputs) {
//   input.addEventListener("input", function() {
//     if( isEmpty(this.value) ) {
//       console.log("Empty")
//       document.querySelector('button').disabled = true
//     } else {
//       counter++
//       if (counter === len) {
//         document.querySelector('button').disabled = false
//         console.log(`NAME value is: ${this.value}`);
//       }
//     }
//   });
// }
// let inputs = document.querySelectorAll('input')
// $(document).on("change", "inputs", function (e) {
//   var $inputs = $("input:text");
//   checkinputs($inputs);
// });
//
// function checkinputs($inputs) {
//   let counter = 0
//   let len = $inputs.length
//   console.log(this.value + " " + len)
//   $inputs.each(function () {
//     if (this.value === null || this.value === ''){
//       $("button").disabled = true
//     }
//     else{
//       counter++
//       console.log(this.value + " " + len)
//       if (counter === len){
//         $("button").disabled = false}
//     }
//   });
// }
// const password = document.querySelector('#Password').value
// const nickname = document.querySelector('#Nickname').value
// const email = document.querySelector('#Email').value
// const passConfirm = document.querySelector('#Confirm').value
// if (password !== null && nickname !== null && passConfirm !==null && email !== null) {
//   document.querySelector("button").disabled = false
// }
/********************************************************/
  function check() {
    const pass = checkPassword()
    const nick = isNullNick()
    const confirm = (document.querySelector('#Confirm').value === document.querySelector('#Password').value)
    const password = document.querySelector('#Password').value
    const nickname = document.querySelector('#Nickname').value
    const email = document.querySelector('#Email').value
    const passConfirm = document.querySelector('#Confirm').value
    let chekedNick = ''
    let chekedPass = ''
    let is$are = ''
    let counter = -1;
    let EmailExist = isEmailExist()
    if (!nick) {
      chekedNick = 'Nickname (min 4 letters)'
      counter++
    }
    if (!pass && counter === -1) {
      chekedPass = 'Password '
      counter++
    } else if (!pass && counter !== 1) {
      chekedPass = ', password '
      counter++
    }
    if (counter > 0) {
      is$are = ' are '
    } else if (counter === 0) {
      is$are = ' is '
    }
    let correct = ''
    if (!pass || !nick) {
      correct = 'incorrect!'
    }
    let matches = ''
    if (!confirm) {
      matches = "Passwords don't match!"
    }
    if (checkPassword() && isNullNick() && confirm && EmailExist) {
      const currentObject = {
        nick: document.querySelector('#Nickname').value,
      }
      const personAccount = {
        nick: document.querySelector('#Nickname').value,
        pass: document.querySelector('#Password').value,
      }
      localStorage.setItem('currentObject', JSON.stringify(currentObject))
      localStorage.setItem(document.querySelector('#Email').value, JSON.stringify(personAccount))
    }
    else {
      if (!EmailExist && document.querySelector('#Email').value !== '') {
        alert('Email exist!')
      } else if (checkPassword() && isNullNick() && !confirm) {
      } else {
        alert(chekedNick + chekedPass + is$are + correct + '\n' + matches)
      }
    }

}
/***********************************************************************/
