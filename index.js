// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
var $btnOne = document.querySelector("#button1");
//var dropDownVal = document.querySelector(".btn").innerText;

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

//Change the text of the button after selecting from dropdown menu
$(".dropdown-menu li a").click(function() {
    $(this).parents(".input-group-btn").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".input-group-btn").find('.btn').val($(this).data('value'));
    //dropDownVal = document.querySelector(".btn").innerText;
    //console.log(dropDownVal);
});

// Set filteredSightings to sightingsData initially
var filteredSightings = dataSet;

// renderTable renders the filteredSightings to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredSightings.length; i++) {
    // Get get the current sightings object and its fields
    var sightings = filteredSightings[i];
    var fields = Object.keys(sightings);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the sightings object, create a new cell at set its inner text to be the current value at the current sightings's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sightings[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterSightings = $dateTimeInput.value.trim().toLowerCase();

  var dropDownVal = document.querySelector(".btn").innerText.trim();
  // Set filteredSightings to an array of all sightingses whose "state" matches the filter
  console.log(dropDownVal);

  if (dropDownVal == "Date/Time") {

    filteredSightings = dataSet.filter(function(sightings) {
        var sightingsState = sightings.datetime.toLowerCase();

        // If true, add the sightings to the filteredSightings, otherwise don't add it to filteredSightings
        return sightingsState === filterSightings;
    });

    renderTable();

   } else if (dropDownVal == "City") {
        filteredSightings = dataSet.filter(function(sightings) {
            var sightingsState = sightings.city.toLowerCase();

            // If true, add the sightings to the filteredSightings, otherwise don't add it to filteredSightings
            return sightingsState === filterSightings;
        });

    renderTable();

    } else if (dropDownVal == "State") {
        filteredSightings = dataSet.filter(function(sightings) {
            var sightingsState = sightings.state.toLowerCase();

            // If true, add the sightings to the filteredSightings, otherwise don't add it to filteredSightings
            return sightingsState === filterSightings;
        });

    renderTable();
    } else if (dropDownVal == "Country") {
        filteredSightings = dataSet.filter(function(sightings) {
            var sightingsState = sightings.country.toLowerCase();

            // If true, add the sightings to the filteredSightings, otherwise don't add it to filteredSightings
            return sightingsState === filterSightings;
        });

    renderTable();
    } else if (dropDownVal == "Shape") {
        filteredSightings = dataSet.filter(function(sightings) {
            var sightingsState = sightings.shape.toLowerCase();

            // If true, add the sightings to the filteredSightings, otherwise don't add it to filteredSightings
            return sightingsState === filterSightings;
        });

    renderTable();
    }
}

// Render the table for the first time on page load
//renderTable();


//1/1/2010 
//Benton