// Number of Employees Who Meet the Target

function numberOfEmployeesWhoMeetTarget(hours: number[], target: number): number | null {
    if (hours.length === 0) {
        return null;
    }

    let numberOfEmployees = 0;

    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            numberOfEmployees++;
        }
    }

    return numberOfEmployees;
}

const hours = [0, 1, 2, 3, 4];
const target = 2;
console.log(numberOfEmployeesWhoMeetTarget(hours, target));