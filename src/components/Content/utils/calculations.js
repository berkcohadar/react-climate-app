/*
Start => 2021-02-01
End => 2022-10-30
*/

// use useMemo. Calculate again WHEN month is changed.
// Chart => Last month - Last 6 months - Last 12 months
import GustDirectionData from "../../../assets/static/aus-gustdir.json"
import GustSpeedData from "../../../assets/static/aus-gustspeed.json"
import MaxTempData from "../../../assets/static/aus-temp-max.json"
import MinTempData from "../../../assets/static/aus-temp-min.json"

const DATE_FORMAT = "YYYY-MM-DD"

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

// date => "YYYY-MM-DD"
// period =>
//     1: "Last month",
//     6: "Last 6 months",
//     12: "Last 12 months"
export const calculateMonthlyAverage = (exp, location, period) => {
    const tempDate = new Date("2022-11-01");

    const results = {
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
            },
        ]
    }

    switch (exp) {
        case "avgMonthlyMaxTemp":
            for (let step = 0; step < period; step++) {
                tempDate.setDate(0);
                var total = 0;
                var days = 0;
                while (tempDate.getDate() != 1) {
                    tempDate.setDate(tempDate.getDate() - 1);
                    var tempDateString = tempDate.toISOString().split('T')[0];
                    var degree = MaxTempData[location].data[tempDateString]
                    if (degree) {
                        total += Number(degree.split(" ")[0]);
                        days += 1;
                    }
                }
                results.labels.push(months[tempDate.getMonth()]);
                results.datasets[0].data.push((total / days).toFixed(2))
            }

            return results;

        case "avgMonthlyMinTemp":
            for (let step = 0; step < period; step++) {
                tempDate.setDate(0);
                var total = 0;
                var days = 0;
                while (tempDate.getDate() != 1) {
                    tempDate.setDate(tempDate.getDate() - 1);
                    var tempDateString = tempDate.toISOString().split('T')[0];
                    var degree = MinTempData[location].data[tempDateString]
                    if (degree) {
                        total += Number(degree.split(" ")[0]);
                        days += 1;
                    }
                }
                results.labels.push(months[tempDate.getMonth()]);
                results.datasets[0].data.push((total / days).toFixed(2))
            }

            return results;

        case "avgMonthlyGustSpeed":
            for (let step = 0; step < period; step++) {
                tempDate.setDate(0);
                var total = 0;
                var days = 0;
                while (tempDate.getDate() != 1) {
                    tempDate.setDate(tempDate.getDate() - 1);
                    var tempDateString = tempDate.toISOString().split('T')[0];
                    var degree = GustSpeedData[location].data[tempDateString]
                    if (degree) {
                        total += Number(degree.split(" ")[0]);
                        days += 1;
                    }
                }
                results.labels.push(months[tempDate.getMonth()]);
                results.datasets[0].data.push((total / days).toFixed(2))
            }

            return results;

        case "avgMonthlyGustDirection":
            return;

        default:
            return;
    }
}