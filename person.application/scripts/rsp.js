var rsp = {};

rsp.createChildren = function () {
  personPanel.createChildren();
}

rsp.view = 'views/rsp.html';

rsp.createView = function () {}

rsp.listenEvents = function () {
  eventManager.subscribe('entitySelected', rsp.entitySelected);
}

rsp.entitySelected = function (data) {
  var entity = (data === 'personElement') ? personPanel : addressPanel;
  document.getElementById('panel').innerHTML = service.doRead(entity.view);
  entity.init();
  }
