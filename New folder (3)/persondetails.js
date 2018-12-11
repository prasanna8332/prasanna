
function CreateTableFromJSON() {
var details = [
            {
                "ID": "1",
                "firstName": "prasanna",
		"lastName": "kumar",
                "email": "prasannakumar8332"
		
                
            },
             {
                "ID": "2",
                "firstName": "naveen",
		"lastName": "kumar",
                "email": "naveenkumar8332"
		
                
            }, 
		{
                "ID": "3",
                "firstName": "hari",
		"lastName": "kumar",
                "email": "harikumar8332"
		
                
            },
		 {
                "ID": "4",
                "firstName": "venkat",
		"lastName": "kumar",
                "email": "venkatkumar8332"
                
		
                
            }
        ]
 
       var col = [];
        for (var i = 0; i < details.length; i++) {
            for (var key in details[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }


        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < details.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = details[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
               }
	var table = document.getElementById('table');
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                         //rIndex = this.rowIndex;
                         document.getElementsByTagName("ID").value = this.cells[0].innerHTML;
			document.getElementsByTagName("firstName").value = this.cells[1].innerHTML;
                         document.getElementsByTagName("lastName").value = this.cells[2].innerHTML;
                        document.getElementsByTagName("email").value = this.cells[3].innerHTML;

                    };
                }



function CreateAddressTableFromJSON() {
var details = [
            {
                "ID": "1",
                "street": "a street",
		"city": "chennai",
                "pincode": "601199"
		
                
            },
             {
                "ID": "2",
                "street": "B street",
		"city": "chennai",
                "pincode": "601199"
		
                
            }, {
                "ID": "3",
                "street": "C street",
		"city": "chennai",
                "pincode": "601199"
		
                
            }, {
                "ID": "4",
                "street": "d street",
		"city": "chennai",
                "pincode": "601199"
		
                
            }
        ]
 
       var col = [];
        for (var i = 0; i < details.length; i++) {
            for (var key in details[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var col = [];
        for (var i = 0; i < details.length; i++) {
            for (var key in details[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < details.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = details[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
               }
	var table = document.getElementById('table');
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                         //rIndex = this.rowIndex;
                         document.getElementById("ID").value = this.cells[0].innerHTML;
			document.getElementById("firstName").value = this.cells[1].innerHTML;
                         document.getElementById("lastName").value = this.cells[2].innerHTML;
                        dument.getElementById("email").value = this.cells[3].innerHTML;

                    };
                }