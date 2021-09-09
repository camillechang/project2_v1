//format data to output style
export function getWeatherData(list) {
    let items = [];
    console.log("getWeatherData------:", list);
    list.forEach((item) => {
        const { dt_txt } = item;
        if (dt_txt.includes("00:00:00")) {//filter date
            // console.log("----2--");
            console.log("dt_txt:", dt_txt); //date 2021-09-04 00:00:00

            const { main } = item.weather[0];
            console.log(main); //weather Rain

            const { temp } = item.main;
            console.log(temp); //temp 24.53

            let dataItem =
            {
                date: getDayofWeek(dt_txt),
                weather: main,
                temperature: getTemp(temp),
            };
            items.push(dataItem);
        }
    });

    console.log("getWeatherData--items----:", items);
    return items;
};

const getDayofWeek = (date) => {
    // date = "2021-09-04 00:00:00";
    let newDate = date.split(" ");
    let dt = new Date(newDate[0]);
    console.log("getDay() : " + dt.getDay());

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let dayName = days[dt.getDay()];
    console.log("dayName() : " + dayName);
    return dayName;
};

const getTemp = (temp1) => {
    // temp1="24.53";
    let temp = parseFloat(temp1);
    let currentTemp = temp.toFixed(1);
    console.log("temp : " + currentTemp);
    return currentTemp;
};


