export function activeDay()
{
    var friday = new Date(2019, 5, 17);
    var saturday = new Date(2019, 5, 18);
    var sunday = new Date(2019, 5, 19);
    
    var today = new Date();

    if(friday.getTime() > today.getTime()){
        return 0;
    } else if (saturday.getTime() > today.getTime()){
        return 1;
    } else if (sunday.getTime() > today.getTime()){
        return 2
    } else {
        return 0;
    }
}