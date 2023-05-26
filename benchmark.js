function dateSub(old_date, new_date) {
    return new_date - old_date;
}

function getTimeSub(old_date, new_date) {
    return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
    let date_1 = new Date("2020-01-01");
    let date_2 = new Date();

    let srart = Date.now();

    for(let i = 0; i < 100000; i++){
        callback_func(date_1, date_2);
    }
    return Date.now() - srart;
}

console.log("dateSub :" +benchmark(dateSub) + "ms"); 
console.log("dateSub :" +benchmark(getTimeSub) + "ms"); 