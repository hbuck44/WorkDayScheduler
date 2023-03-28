$(document).ready(function() {
    // Get current date and time using Day.js library
    var currentDate = dayjs().format('dddd, MMMM D');
    var currentHour = dayjs().format('H');
  
    // Display current date at the top of the page
    $('#currentDay').text(currentDate);
  
    // Loop through each time block and add the appropriate class based on the current hour
    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
      if (blockHour < currentHour) {
        $(this).removeClass('present future');
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past future');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past present');
        $(this).addClass('future');
      }
    });
  
    // Save button click event handler
    $('.saveBtn').on('click', function() {
      var description = $(this).siblings('.description').val().trim();
      var hour = $(this).parent().attr('id').split('-')[1];
  
      localStorage.setItem(hour, description);
    });
  
    // Load saved data from local storage
    $('.time-block').each(function() {
      var hour = $(this).attr('id').split('-')[1];
      var description = localStorage.getItem(hour);
  
      $(this).find('.description').val(description);
    });
  });
  