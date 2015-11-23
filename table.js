$(document).ready(function () {

var dataNumber = 0;
var dataBank = new Array();

    $.getJSON('filteredData.json', function(obj) {
        //  document.getElementById("foo").textContent = obj.members[0].userTags[0]; 
        //displayData();
            for(i = 0; i < obj.members.length; i++){
                dataBank[i] = new Array;
                dataBank[i][0] = obj.members[i].id;
                dataBank[i][1] = obj.members[i].user;
                dataBank[i][2] = obj.members[i].dateTaken;
                dataBank[i][3] = obj.members[i].dateUploaded;
                dataBank[i][4] = obj.members[i].captureDevice;
                dataBank[i][5] = obj.members[i].title;
                dataBank[i][6] = obj.members[i].description;
                dataBank[i][7] = obj.members[i].userTags;
                dataBank[i][8] = obj.members[i].machineTags;
                dataBank[i][9] = obj.members[i].geo;
                dataBank[i][10] = obj.members[i].pageURL;
                dataBank[i][11] = obj.members[i].downloadURL;
                dataBank[i][12] = obj.members[i].extension;
                dataBank[i][13] = obj.members[i].favorites;
                dataBank[i][14] = obj.members[i].comments;          
            }


            body = document.getElementsByTagName('body')[0];
            tab = document.createElement('table');
            for (row=0; row < dataBank.length; row++){
                tr = document.createElement('tr');
                for (col=0; col < dataBank[row].length; col++){
                    td = document.createElement('td');
                    tn = document.createTextNode(dataBank[row][col]);
                    td.appendChild(tn);
                    tr.appendChild(td);
                }
                tab.appendChild(tr);
            }
            body.appendChild(tab);
 })



var body, tab, tr, td, tn, row, col;
body = document.getElementsByTagName('body')[0];
tab = document.createElement('table');
for (row=0; row < dataBank.length; row++){
    tr = document.createElement('tr');
    for (col=0; col < dataBank[row].length; col++){
        td = document.createElement('td');
        tn = document.createTextNode(dataBank[row][col]);
        td.appendChild(tn);
        tr.appendChild(td);
    }
    tab.appendChild(tr);
}
body.appendChild(tab);

});