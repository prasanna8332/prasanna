var app = {};

var init = function () {
    app.createChildren();
    app.createView();
    app.prepopulate();
    app.listenEvents();
    app.setDefault();
}

app.createChildren = function () {
    lsp.createChildren();
    rsp.createChildren();
}

app.createView = function () {
    document.getElementById('lsp').innerHTML = service.load(lsp.view);
    document.getElementById('rsp').innerHTML = service.load(rsp.view);
}

app.prepopulate = function () {
    lsp.prepopulate();
    rsp.prepopulate();
}

app.listenEvents = function () {
    lsp.listenEvents();
    rsp.listenEvents();
}

app.setDefault = function () {
    lsp.setDefault();
    rsp.setDefault();
}
