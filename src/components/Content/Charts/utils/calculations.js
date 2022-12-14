import GustDirectionData from "assets/static/aus-gustdir.json"
import GustSpeedData from "assets/static/aus-gustspeed.json"
import MaxTempData from "assets/static/aus-temp-max.json"
import MinTempData from "assets/static/aus-temp-min.json"

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

export const calculateMonthlyAverage = (exp, location, period) => {
    const tempDate = new Date("2022-11-01");
    const results = {
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
                borderRadius: 100,
                barPercentage: .35
            },
        ]
    }
    var total = 0;
    var days = 0;

    switch (exp) {
        case "avgMonthlyMaxTemp":
            for (let step = 0; step < period; step++) {
                tempDate.setDate(0);
                total = 0;
                days = 0;
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
            results.labels.reverse()
            results.datasets[0].data.reverse()
            return results;

        case "avgMonthlyMinTemp":
            for (let step = 0; step < period; step++) {
                tempDate.setDate(0);
                total = 0;
                days = 0;
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
            results.labels.reverse()
            results.datasets[0].data.reverse()
            return results;

        case "avgMonthlyGustSpeed":
            for (let step = 0; step < period; step++) {
                tempDate.setDate(0);
                total = 0;
                days = 0;
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
            results.labels.reverse()
            results.datasets[0].data.reverse()
            results.datasets[0]["borderColor"] = '#3251c1';
            return results;

        case "totalDaysGustDirection":
            var directions = {}
            for (let step = 0; step < period; step++) {
                tempDate.setDate(0);
                while (tempDate.getDate() != 1) {
                    tempDate.setDate(tempDate.getDate() - 1);
                    var tempDateString = tempDate.toISOString().split('T')[0];
                    var dir = GustDirectionData[location].data[tempDateString]
                    if (dir) {
                        if(directions[dir])
                            directions[dir] += 1;
                        else 
                        directions[dir] = 1;
                    }
                }
            }
            
            results.labels = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
            results.datasets[0].data = results.labels.map(item => {
                if (directions[item]) return directions[item]
                return 0;
            });
            return results;

        default:
            return;
    }
}
