var lsp = {};

lsp.view = 'views/lsp.html';

lsp.createChildren = function () {}

lsp.createView = function () {}

lsp.listenEvents = function () {
  document.getElementById('personElement').addEventListener('click',
    function () {
      eventManager.broadcast('entitySelected', 'personElement')
    }
  );

  document.getElementById('addressElement').addEventListener('click',
    function () {
      eventManager.broadcast('entitySelected', 'addressElement')
    }
  );
}