
function getScore(die) {
    let six = 0, five = 0, four = 0, three = 0, two = 0, one = 0;
    let i = 0;
    while (i < 5) {
        if (die[i] == 6) { six++; }
        if (die[i] == 5) { five++; }
        if (die[i] == 4) { four++; }
        if (die[i] == 3) { three++; }
        if (die[i] == 2) { two++; }
        if (die[i] == 1) { one++; }
        i++;
    }
    let roll = 0;
    if (one > 2) { roll += 1000; one -= 3; }
    if (six > 2) { roll += 600; }
    if (five > 2) { roll += 500; five -= 3; }
    if (four > 2) { roll += 400; }
    if (three > 2) { roll += 300; }
    if (two > 2) { roll += 200; }
    roll += one * 100;
    roll += five * 50;
    return roll;
}
console.log(getScore([2, 3, 5, 1, 1]))