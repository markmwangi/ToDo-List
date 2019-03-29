$(document).ready(function() {
  let check = '<input type="checkbox" class="check" />';

  //Enter key listener
  $("#list-item").on("keydown", function(event) {
    event.which == 13 ? update() : false;
  });

  //Button listener for the add button
  $("#add-btn").click(function() {
    update();
  });

  //Validates input and adds it to container
  function update() {
    let listItem = $("#list-item").val();
    listItem = listItem.replace(
      /<(|\/|[^>\/bi]|\/[^>bi]|[^\/>][^>]+|\/[^>][^>]+)>/g,
      ""
    );
    if (listItem.trim() != "") {
      let add = `<span class="items">${check}${listItem}</span>`;
      add = $(add).hide();
      $(".container").append(add);
      $(".container .items").show(400);
      $("#list-item").val("");
    }
  }

  //Removes checked off items from list
  $("#clear-btn").click(function() {
    $(".check:checked").each(function() {
      item = $(this).parent();
      $(item)
        .hide("puff")
        .delay(100)
        .queue(function() {
          $(this).remove();
        });
    });
  });

  //Changes symbol to delete symbol on hover
  $(".container").on("click", ".check", function(event) {
    parent = $(this).parent();
    if (this.checked) {
      parent.css({ textDecoration: "line-through", color: "#999" });
    } else {
      parent.css({ textDecoration: "none", color: "whitesmoke" });
    }
  });
});
