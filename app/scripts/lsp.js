var lsp = {};

lsp.view = 'views/lsp.html';

lsp.createChildren = function () {
    return;
}

lsp.createView = function () {
    return;
}

lsp.prepopulate = function () {
    return;
}

lsp.listenEvents = function () {
    document.getElementById('person').addEventListener('click',
        function () {
            eventManager.broadcast('entitySelected', 'person');
        }
    );
    document.getElementById('address').addEventListener('click',
        function () {
            eventManager.broadcast('entitySelected', 'address');
        }
    );
}

lsp.setDefault = function () {
    eventManager.broadcast('entitySelected', 'person');
}
