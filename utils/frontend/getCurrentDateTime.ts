

export const getCurrentDateTime = () => {
    // Create a new Date object
    var currentDateTime = new Date();

    // Get the year, month, and day
    var year = currentDateTime.getFullYear();
    var month = currentDateTime.getMonth() + 1; // Months are zero-indexed, so add 1
    var day = currentDateTime.getDate();

    // Get the hours, minutes, and seconds
    var hours = currentDateTime.getHours();
    var minutes = currentDateTime.getMinutes();
    var seconds = currentDateTime.getSeconds();

    // Format the date as YYYY-MM-DD
    var formattedDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;

    // Format the time as HH:MM:SS
    var formattedTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    // Return the formatted date and time
    return formattedDate + ' ' + formattedTime;
}
