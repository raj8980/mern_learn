function dateMethods(){
    const currentDate=new Date();
    console.log("Current Date : ",currentDate);

    console.log("Date : ",currentDate.getDate());
    console.log("Month : ",currentDate.getMonth());
    console.log("Year : ",currentDate.getFullYear());
    console.log("Hour : ",currentDate.getHours());
    console.log("Minutes : ",currentDate.getMinutes());
    console.log("Seconds : ",currentDate.getSeconds());

    currentDate.setFullYear(2025);
    console.log("Year : ",currentDate.getFullYear());   
    
    currentDate.setMonth(5);
    console.log("Month : ",currentDate.getMonth());

    const newDate = new Date(2026, 9, 12);
    console.log("date : ",newDate);

}

dateMethods();