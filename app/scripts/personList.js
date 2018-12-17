var personList = {};
var record;
var personArray;
var headers;

personList.view = 'views/personList.html';

personList.createChildren = function () {
    return;
}

personList.createView = function () {
    return;
}

personList.prepopulate = function () {

    var persons = service.load('assets/person.json');
    personArray = JSON.parse(persons);
    record = service.load('assets/recordTemplate.html');
    var personArrayLength = personArray.length;
    var personTable = document.getElementById('personTable');
    headers = [];
    for (var column in personArray[0]) {
        headers.push(column);
    }

    for (var i = 0; i < personArrayLength; i++) {
        var replaceRecord = record.replace('%id%', personArray[i][headers[0]])
                                  .replace('%firstName%', personArray[i][headers[1]])
                                  .replace('%lastName%', personArray[i][headers[2]])
                                  .replace('%mailId%', personArray[i][headers[3]])
                                  .replace('%birthDate%', personArray[i][headers[4]])
                                  .replace('recordTemplate', personArray[i][headers[3]])
                                  .replace('deleteElement', 'deleteRecord' + personArray[i][headers[0]]);
        personTable.innerHTML += replaceRecord;
    }
}

personList.listenEvents = function () {

    var personArrayLength = personArray.length;
    for (var i = 0; i < personArrayLength; i++) {
        var recordId = personArray[i][headers[3]];
        var deleteElementsId = 'deleteRecord' + (i + 1);
        document.getElementById(recordId).addEventListener('click',
            function () {
                personList.onSelectRecord(this);
            }
        );
        document.getElementById(deleteElementsId).addEventListener('click',
            function () {
                personList.onDeleteRecord(this);
            }
        );
    }
    document.getElementById('addElement').addEventListener('click',
        function () {
            eventManager.broadcast('recordAdded')
        }
    );
    eventManager.subscribe('formSubmited', personList.onSubmitForm);
}

personList.setDefault = function () {
    var personDetails = [];
    var headersLength = headers.length;
    var personTable = document.getElementById('personTable');
    for (var i = 0; i < headersLength; i++) {
        personDetails[headers[i]] = personTable.rows[1].cells[i].innerHTML;
    }
    eventManager.broadcast('recordSelected', personDetails);
}

personList.onSelectRecord = function (selectedRecord) {
    var personDetails = [];
    var headersLength = headers.length;
    for (var i = 0; i < headersLength; i++) {
        personDetails[headers[i]] = selectedRecord.cells[i].innerHTML;
    }
    eventManager.broadcast('recordSelected', personDetails);
}

personList.onDeleteRecord = function (selectedRecord) {
    alert('Confirm?');
    var index = selectedRecord.parentNode.parentNode.rowIndex;
    document.getElementById('personTable').deleteRow(index);
}

personList.onSubmitForm = function (info) {
    var validatePerson = personList.validate(info);
    var personArrayLength = personArray.length;
    var headersLength = headers.length;
    var personTable = document.getElementById("personTable");
    var personId = info[headers[0]];

    if (validatePerson != false) {
        for (var i = 0; i < personArrayLength; i++) {
            for (var j = 1; j < headersLength; j++) {
                if (personArray[i][headers[0]] == personId) {
                    personTable.rows[i + 1].cells[j].innerHTML = info[headers[j]];
                }
            }
        }
    }

    // if (personId == '') {
        // personId = personTable.rows.length;
        // var addRecord = record.replace('%id%', personId)
                              // .replace('%firstName%', info[headers[1]])
                              // .replace('%lastName%', info[headers[2]])
                              // .replace('%mailId%', info[headers[3]])
                              // .replace('%birthDate%', info[headers[4]])
                              // .replace('recordTemplate', info[headers[3]])
                              // .replace('deleteElement', 'deleteRecord' + info[headers[0]]);
        // personTable.innerHTML += addRecord;
    // }

    if (personId == '') {
        var newRecord = personTable.insertRow(personTable.length);
        personId = (personTable.rows.length - 1);
        var newCell = newRecord.insertCell(0);
        newCell.innerHTML = personId;
        newCell = newRecord.insertCell(1);
        newCell.innerHTML = info[headers[1]];
        newCell = newRecord.insertCell(2);
        newCell.innerHTML = info[headers[2]];
        newCell = newRecord.insertCell(3);
        newCell.innerHTML = info[headers[3]];
        newCell = newRecord.insertCell(4);
        newCell.innerHTML = info[headers[4]];
        newCell = newRecord.insertCell(5);
        newCell.innerHTML = '<button id="deleteRecord' + personId + '">Delete</button>';
    }
}

personList.validate = function (info) {
    var headersLength = headers.length;
    for (var i = 1; i < headersLength; i++) {
        if (info[headers[i]] === "") {
            alert('Enter all the informations');
            return false;
        }
    }
}
