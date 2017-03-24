// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function(){
	var fruitList ="";
    var myFruit = document.querySelector("#fruits");		

	fruitList += "<ol>";
	for(var i = 0; i < fruits.length; i++){
        	fruitList += "<li>" + fruits[i] + "</li>";
	}
	fruitList += "</ol>";

    myFruit.innerHTML += fruitList;

    var myDirectory = document.querySelector("#directory");
    var directoryList ="";

    directoryList += "<ul>";
	for(var i = 0; i < directory.length; i++){
        if(directory[i].type === "file"){
            directoryList += "<li>" + directory[i].name + "</li>";
        }
        if(directory[i].type === "directory"){
            directoryList += "<li>" + directory[i].name + "</li>";
        //    for(var i = 0; i < directory[i].files.length; i++){
        //        directoryList += "<li>" + directory[i].files[i].name + "</li>";
        //    }
        }
	}
	directoryList += "</ul>";

	myDirectory.innerHTML += directoryList;

};
