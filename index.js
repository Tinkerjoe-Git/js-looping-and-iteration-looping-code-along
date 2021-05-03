// // Code your solutions in this file
// writeCards(["Ada", "Brendan", "Ali"], "birthday");

// function writeCards(arr, str) {
//     let thankyou = []
//     for (let i = 0; i < arr.length; i = i + 1) {
//         thankyou.push(("Thank you, " + arr[i] + ", for the wonderful " + str + " gift!"));
//     }
//     return thankyou;
// }

function writeCards(arr, str) {
    let i = 0;
    let thankyou = []
    while (i < arr.length) {
        thankyou.push(("Thank you, " + arr[i] + ", for the wonderful " + str + " gift!"));
        i = i + 1;
    }
    return thankyou;
}

function countDown(number) {
    for(let i=number; i>=0; i=i-1){
        console.log(i);
    }

}
