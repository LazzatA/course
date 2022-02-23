function loginCheck(){
  try {
    let email = document.querySelector('#Email').value
    let acc = JSON.parse(localStorage.getItem(email))
    if (acc.pass !== document.querySelector('#Password').value){
      throw new Error("Email or password is incorrect!" + document.querySelector('audio').play())
    }
    const currentObject = {
      nick: acc.nick
    }
    localStorage.setItem('currentObject', JSON.stringify(currentObject))
  }
  catch (e){
    document.querySelector('audio').play()
    alert("Email or password is incorrect!")
    
  }
  window.close();
}