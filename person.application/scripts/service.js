var service = {};

service.doRead = function (url) {
    var response;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            response =  this.responseText;
        }
    };
    request.open("GET", url, false);
    request.send();
    return response;
}
