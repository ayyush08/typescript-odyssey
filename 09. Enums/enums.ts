enum seatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    INTERNATIONAL
}

const akSeat = seatChoice.AISLE;
const akSeat2 = seatChoice.INTERNATIONAL;
const akSeat3 = seatChoice[2];
console.log(akSeat, akSeat2, akSeat3); // 0 3 'WINDOW' - because enums are indexed starting from 0 by default, but you can change this by setting the first value to a different number.



enum seats {
    AISLE = "aisle",
    MIDDLE="middle",
    WINDOW=10,
    INTERNATIONAL // this will be 11 because the previous value was 10 a previous value was set to a number and the next value was not set to a number so it will be incremented by 1 automatically
}


const ahnd = seats.AISLE;

export {}; // this is used to prevent TS from throwing an error that there are no exports. We don't need exports in this file. We just need to see the output of the code.
