$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var eatenQuery = $(this).data("eaten");
      console.log("you clicked an eat button")
      var beenEaten = {
        devoured: eatenQuery
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: beenEaten
      }).then(
        function() {
          console.log("Eaten status:", eatenQuery);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[burger_name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created a burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });