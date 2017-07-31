$(document).ready(function() {
    createGrid(16); // creates the grid;

    $('button').click(function() {
      $('.pixel').removeClass('color'); // reset the color
    });
});


$(document).on("mouseenter", ".pixel", function() {

  /**
   * Changes the color of the pixel when the mouse pointer entered
   * the pixel area.
   */
  $(this).addClass("color");
});


/**
 * This functions creates a grid of divs.
 * Receives the variable gridLength that defines the size of the grid.
 */
function createGrid(gridLength) {
  for (var i = 0; i < gridLength; i++) {
    var $row = $('<div class="row"></div>'); // creates a pixel row

    for (var j = 0; j < gridLength; j++) {

      var $pixel = $('<div class="pixel"></div>'); // creates a pixel

      $row.append($pixel); // add pixel to row
    }

    $('.container').append($row); // add row to container
  }
};
