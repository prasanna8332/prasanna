var personPanel = {};

personPanel.view = 'views/personPanel.html';

  personPanel.init = function () {
    personPanel.createChildren;
    personPanel.createView;
    personPanel.prepopulate;
  }

  personPanel.createChildren = function () {}

  personPanel.createView = function () {
    document.getElementById('personList').innerHTML = service.doRead(personListPanel.view);
    document.getElementById('personInformation').innerHTML = service.doRead(personInformationPanel.view);
  }

  personPanel.prepopulate = function () {
    personListpanel.prepopulate;
  }
  