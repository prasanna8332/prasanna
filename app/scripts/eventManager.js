var eventManager = {};
eventManager.listener = new Map();

eventManager.subscribe = function (eventName, eventFunction) {
    eventManager.listener.set(eventName, eventFunction);
}

eventManager.broadcast = function (eventName, entitySelected) {
    var eventFunction = eventManager.listener.get(eventName);
    eventFunction(entitySelected);
}
