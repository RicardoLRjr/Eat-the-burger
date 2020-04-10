$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var eatenQuery = $(this).data("eaten");
  
      var beenEaten = {
        devoured: eatenQuery
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: beenEaten
      }).then(
        function() {
          console.log("Eaten status:", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[burger_name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created a burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });