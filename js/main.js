/*-----------интервалы--------------*/

/*-----------интервал с ограничением------*/
// var counter = 0;

// var id = setInterval(my_func, 1000);

// function my_func(){
//     counter++;
//     console.log("Counter: " + counter);

//     if(counter == 3)
//     clearInterval(id)
// }


/*--------бесконечный интервал-------*/

// setInterval(function(){
//         counter++;
//         console.log("Прошло секунд: " + counter);

// }, 1000);



/*----------------таймер один раз через 2 сек----------*/

setTimeout(function(){
    console.log("Timer is working!");
}, 2000);