var main = function() {
    alert("Hello!");
    console.log("Hello console");
    $("body").append("<br> <br> <p>test</p>");

    // Some vars
    var num = 10;
    var str = "string";
    $("body").append(num + "<br>");
    $("body").append(str + "<br>");

    // An array
    var myArray = ["Butovens", "Gina", "Tim", "Umesh", "Yuliya"];
    $("body").append(myArray[3] + "<br>");
    // $("body").append(myArray + "<br>");

    // A for loop
    for (i = 0; i < myArray.length; i++) {
        $("body").append(myArray[i] + "<br>");
    }

    // A function
    function addBling(toBeBlinged) {
        $("body").append("~~~~~$$$$$ " + toBeBlinged + " $$$$$~~~~~<br>");
    }
    for (i = 0; i < myArray.length; i++) {
        addBling(myArray[i]);
    }

    // Show Google function
    function showGoogle() {
        window.open("http://www.google.com");
    }

    // Write some text to text field
    function sayPups() {
        document.getElementById("catspups").value = "Puppies";
    }

    // Test if else
    function ifElseTest() {
        if (document.getElementById("catspups").value === "password") {
            alert("Welcome to the magic kingdom...");
            window.open("https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/900/360/90/wdpromedia.disney.go.com/media/wdpro-assets/parks-and-tickets/destinations/magic-kingdom/magic-kingdom-00-full.jpg?12032013080923");
        } else {
            alert("Fail!");
        }
    }

    // Messing around with JQuery
    $("#myheader").append(" --- Now with JQuery!");
    $(".blue").fadeOut(100);
    $(".blue").fadeIn(100);
    $("#myButt").click(function() {
        $(".red").fadeOut(3000);
        $(".red").fadeIn(3000);
    });
    $(".red").animate({
        height: "200px",
        width: "150px"
    }, 500);

};

$(document).ready(main);