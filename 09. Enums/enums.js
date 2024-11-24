var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
    seatChoice[seatChoice["INTERNATIONAL"] = 3] = "INTERNATIONAL";
})(seatChoice || (seatChoice = {}));
var akSeat = seatChoice.AISLE;
var akSeat2 = seatChoice.INTERNATIONAL;
var akSeat3 = seatChoice[2];
console.log(akSeat, akSeat2, akSeat3); // 0 3 'WINDOW'
