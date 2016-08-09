function storageAvailable(type) {
  try {
    var storage = window[type], x = '__test__';
    storage.setItem(x,x);
    storage.removeItem(x);
    return true;
  }catch(e){
    return false;
  }
}


//Check for login_token in storage and returns it if it exists, else returns false
export function checkLogin (){
  if(storageAvailable('localStorage')){
    var loginToken = localStorage.getItem('login_token');
  }else{
    if(storageAvailable('sessionStorage')){
      var loginToken = sessionStorage.getItem('login_token');
    }
  }
  if(loginToken){
    return loginToken;
  }else{
    return false;
  }
}

export function storeToken(token){
  if(storageAvailable('localStorage')){
    localStorage.setItem('login_token', 'JWT ' + token);
  }else{
    if(storageAvailable('sessionStorage')){
      sessionStorage.setItem('login_token', 'JWT ' + token);
    }
  }
  checkLogin();
}