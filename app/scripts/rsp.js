var rsp = {};

rsp.view = 'views/rsp.html';

rsp.createChildren = function () {
    personPanel.createChildren();
}

rsp.createView = function () {
    return;
}

rsp.prepopulate = function () {
    return;
}

rsp.listenEvents = function () {
    eventManager.subscribe("entitySelected", rsp.eventFunction);
}

rsp.eventFunction = function(eventData) {
    var entity = (eventData === 'person') ? personPanel : addressPanel;
    document.getElementById('panel').innerHTML = service.load(entity.view);
    entity.init();
}

rsp.setDefault = function () {
    return;
}