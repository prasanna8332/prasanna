var personPanel = {};

personPanel.view = 'views/personPanel.html';

personPanel.init = function () {
    personPanel.createChildren();
    personPanel.createView();
    personPanel.prepopulate();
    personPanel.listenEvents();
    personPanel.setDefault();
}

personPanel.createChildren = function () {
    personList.createChildren();
    personInfo.createChildren();
}

personPanel.createView = function () {
    document.getElementById('personList').innerHTML
        = service.load(personList.view);
    document.getElementById('personInfo').innerHTML
        = service.load(personInfo.view);
}

personPanel.prepopulate = function () {
    personList.prepopulate();
    personInfo.prepopulate();
}

personPanel.listenEvents = function () {
    personList.listenEvents();
    personInfo.listenEvents();
}

personPanel.setDefault = function () {
    personList.setDefault();
    personInfo.setDefault();
}