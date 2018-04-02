$( document ).ready(function() {
    // Handler for .ready() called.

    $("#summer").click(function() {         //use a class, since your ID gets mangled
        $(".main").addClass("summer");      //add the class to the clicked element
    });

    $("#winter").click(function() {         //use a class, since your ID gets mangled
        $(".main").addClass("winter");      //add the class to the clicked element
    });

    $(".home-btn").click(function() {            //use a class, since your ID gets mangled
        $(".main").removeClass("summer winter");           //add the class to the clicked element
    });





});


 
  