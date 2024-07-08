// Minimum Number of Moves to Seat Everyone

function minimumMovesToSeat(seats: number[], students: number[]): number {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    let totalMoves = 0;

    for (let i = 0; i < seats.length; i++) {
        totalMoves = totalMoves + Math.abs(seats[i] - students[i]);      
    }

    return totalMoves;
}

const seats = [3, 1, 5];
const students = [2, 7, 4];
console.log(minimumMovesToSeat(seats, students));