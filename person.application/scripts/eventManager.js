var eventManager = {};
eventManager.subscribers = new Map();

eventManager.subscribe = function (eventName, eventListener) {
  eventManager.subscribers.set(eventName, eventListener);
}

eventManager.broadcast = function (eventName, data) {
  var eventListener = eventManager.subscribers.get(eventName);
  eventListener(data);
}
