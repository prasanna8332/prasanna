var personInfo = {};
var formElements = ['id', 'firstName', 'lastName', 'email', 'birthDate'];
var formElementsLength = formElements.length;
var information;

personInfo.view = 'views/personInfo.html';

personInfo.createChildren = function () {
    return;
}

personInfo.createView = function () {
    return;
}

personInfo.prepopulate = function () {
    return;
}

personInfo.listenEvents = function () {
    eventManager.subscribe('recordSelected', personInfo.onSelectRecord);
    eventManager.subscribe('recordAdded', personInfo.onAddRecord);

    document.getElementById('resetElement').addEventListener('click',
        function () { personInfo.onResetForm(); });
    document.getElementById('submitElement').addEventListener('click',
        function () { personInfo.onSubmitForm(); });
}

personInfo.setDefault = function () {
    return;
}

personInfo.onSelectRecord = function (info) {
    for (var i = 0; i < formElementsLength; i++) {
        document.getElementById(formElements[i]).value = info[formElements[i]];
    }
    information = info;
}

personInfo.onAddRecord = function () {
    for (var i = 0; i < formElementsLength; i++) {
        document.getElementById(formElements[i]).value = "";
    }
}

personInfo.onResetForm = function () {
    var personId = document.getElementById('id').value;
    for (var i = 0; i < formElementsLength; i++) {
        if (personId === '') {
            document.getElementById(formElements[i]).value = '';
        } else {
            document.getElementById(formElements[i]).value
                = information[formElements[i]];
        }
    }
}

personInfo.onSubmitForm = function () {
    var info = [];
    for (var i = 0; i < formElementsLength; i++) {
        info[formElements[i]] = document.getElementById(formElements[i]).value;
    }
    eventManager.broadcast('formSubmited', info);
}
