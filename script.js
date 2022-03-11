let text = "Keyword myFunction";
let pattern = /myFunction/i;
let result = text.match(pattern); //The match() method returns null if no match is found. 

// document.getElementById("demo").innerHTML = result;


let pattern2 = /nameInput/i;
let pattern3 = /is/g;
let pattern4 = /is/gi;

//shift f3 you can replace a pattern.

// A global, case-insensitive search for "is":
// Using the RegExp function exec():

let text1 = "Is this all there is?";
let result1 = /is/gi.exec(text);




$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var nameInput = $("input#name").val();
        var emailInput = $("input#email").val();
        var phonenumberInput = $("input#phonenumber").val();
        var ageInput = $("input#age").val();
        var websiteInput = $("input#website").val();
        var experienceInput = $("input#experience").val();
        $(".name").text(nameInput);
        $(".email").email(emailInput);
        $(".phonenumber").number(phonenumberInput);
        $(".age").number(ageInput);
        $(".website").url(websiteInput);
        $(".experience").url(experienceInput);

        $("#story").show();
        
        event.preventDefault();
    });
 });