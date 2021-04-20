function callendar() {
    cal = new Date();
    days = cal.getDay();
    months = cal.getMonth();
    dates = cal.getDate();
    year = cal.getFullYear();

    document.querySelector('.callendar').innerHTML =
        nameDays(days) + ', ' + dates + ' ' + nameMonths(months) + ', ' + year;
}

setInterval(callendar, 1000);



function nameDays(a) {
    let b;
    switch (a) {
        case 0:
            b = 'Sun';
            break;
        case 1:
            b = 'Mon';
            break;
        case 2:
            b = 'Tue';
            break;
        case 3:
            b = 'Wed';
            break;
        case 4:
            b = 'Thurs';
            break;
        case 5:
            b = 'Fri';
            break;
        case 6:
            b = 'Sat';
            break;
    }
    return b;
}


function nameMonths(x) {
    let z;
    switch (x) {
        case 0:
            z = 'Jan';
            break;
        case 1:
            z = 'Feb';
            break;
        case 2:
            z = 'Mar';
            break;
        case 3:
            z = 'Apr';
            break;
        case 4:
            z = 'May';
            break;
        case 5:
            z = 'Jun';
            break;
        case 6:
            z = 'Jul';
            break;
        case 7:
            z = 'Aug';
            break;
        case 8:
            z = 'Sept';
            break;
        case 9:
            z = 'Oct';
            break;
        case 10:
            z = 'Nov';
            break;
        case 11:
            z = 'Dec';
            break;
    }
    return z;
}