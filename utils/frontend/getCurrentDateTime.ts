

export const getCurrentDateTime = () => {
    // Create a new Date object
    var currentDateTime = new Date();

    // Get the year, month, day, hours, minutes, and seconds
    var year = currentDateTime.getFullYear();
    var month = currentDateTime.getMonth(); // Months are zero-indexed
    var day = currentDateTime.getDate();
    var hours = currentDateTime.getHours();
    var minutes = currentDateTime.getMinutes();
    var seconds = currentDateTime.getSeconds();

    // Get the short name of the day of the week
    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dayOfWeekIndex = currentDateTime.getDay();
    var shortDayOfWeek = daysOfWeek[dayOfWeekIndex];

    // Get the short name of the month
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var shortMonth = months[month];

    // Format the date as YYYY-MM-DD
    var formattedDate = year + '-' + (month < 9 ? '0' : '') + (month + 1) + '-' + (day < 10 ? '0' : '') + day;

    // Format the time as HH:MM:SS
    var formattedTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    // Return the formatted date, day of the week, month, and time
    return shortDayOfWeek + ' ' + shortMonth + ' ' + dayOfWeekIndex + ' ' + formattedTime;
};
