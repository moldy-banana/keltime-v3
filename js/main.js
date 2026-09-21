function pleaseDate() {

    var monthStr = ""; 
    var weekdayStr = "";
    var days = new Array("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
    var cDays = new Array("星期天" , "星期一" , "星期二" , "星期三" , "星期四" , "星期五" ,"星期六");

    var months = new Array("january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december");
    var cMonths = new Array(" 一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月");

    
    var now = new Date();
    const year = now.getFullYear();
     monthStr +=  months[now.getMonth()];
    document.getElementById("month").innerHTML = monthStr + " " + year;

    weekdayStr +=  days[now.getDay()];
    document.getElementById("weekday").innerHTML = weekdayStr;



    setInterval(pleaseDate, 10000);

}

function pleaseDayDate() {
    var dayDateStr = ""; 
    var dayDate = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31");
    var now = new Date(); 
    dayDateStr += dayDate[now.getDate()]; 
    document.getElementById("date-day").innerHTML = dayDateStr; 
        setInterval(pleaseDayDate, 10000);


}
pleaseDayDate();
pleaseDate();