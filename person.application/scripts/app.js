var app = {};

var init = function () {
  app.createChildren();
  app.createView();
  app.listenEvents();
}

app.createChildren = function () {
  lsp.createChildren()
  rsp.createChildren();
}

app.createView = function () {
  document.getElementById('lsp').innerHTML = service.doRead(lsp.view);
  document.getElementById('rsp').innerHTML = service.doRead(rsp.view);
}

app.listenEvents = function () {
  lsp.listenEvents();
  rsp.listenEvents();
}

