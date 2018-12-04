function validateEmail() {
    var email = document.getElementById('get-email').value;
    var filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!filter.test(email)) {
      // alert(email);
    alert("please enter an valid email id");
    // return false;
 }
}