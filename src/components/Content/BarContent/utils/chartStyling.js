export const plugins = [{
    afterLayout: chart => {
        let ctx = chart["$context"].chart.ctx
        let chartArea = chart.chartArea;
        let dataset = chart.data.datasets[0];
        ctx.save();
      
        dataset.backgroundColor = dataset.data.map(v => {
            let gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0.0, '#1d2f70');
            gradient.addColorStop(0.5, '#3251c1');
            gradient.addColorStop(1.0, '#7c91dd');
            return gradient;
        });
      ctx.restore();
    }
  }]

export const optionsDir = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        r: {
            angleLines: {
                color: "#eee",
            },
            grid: {
                color: "#eee"
            },
            ticks: {
                backdropColor: "rgba(0,0,0,0.25)",
                color: "white",
                z: "999",
            },
            pointLabels: {
                font: {
                    size: 14,
                },
                color: "white"
            }
        },
    }

}

export const optionsDarkDir = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        r: {
            angleLines: {
                color: "#888",
            },
            grid: {
                color: "#888"
            },
            ticks: {
                backdropColor: "rgba(255,255,255,0.1)",
                color: "white",
                z: "999",
            },
            pointLabels: {
                font: {
                    size: 14,
                },
                color: "white"
            }
        },
    }

}

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        y: {
            ticks: {
                color: "white",
                font: {
                    size: 14,
                },
            },
            grid: {
                color: "#eee"
            }
        },
        x: {
            ticks: {
                color: "white",
                font: {
                    size: 14
                },
            },
            grid: {
                color: "#eee"
            }
        }
    }
}

export const optionsDark = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        y: {
            ticks: {
                color: "white",
                font: {
                    size: 14,
                },
            },
            grid: {
                color: "#888"
            }
        },
        x: {
            ticks: {
                color: "white",
                font: {
                    size: 14
                },
            },
            grid: {
                color: "#888"
            }
        }
    }
}

export const titles = {
    "avgMonthlyMaxTemp": "Monthly Average TMAX",
    "avgMonthlyMinTemp": "Monthly Average TMIN",
    "avgMonthlyGustSpeed": "Monthly Average Gust Speed",
    "avgMonthlyGustDirection": "Weighted Gust Direction"
}

export const descriptions = {
    "avgMonthlyMaxTemp": "Average of maximum daily temperatures by month (°C)",
    "avgMonthlyMinTemp": "Average of minimum daily temperatures by month (°C)",
    "avgMonthlyGustSpeed": "Average daily gust speeds by month (km/h)",
    "avgMonthlyGustDirection": "Weights of gust directions"
}

export function createGradientFire(ctx, area) {
    const color1 = "#b22c2c";
    const color2 = "#D14545";
    const color3 = "#f57a00";
    const color4 = "#FF9933";
    const color5 = "#ffb870";

    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(0, color1);
    gradient.addColorStop(0.25, color2);
    gradient.addColorStop(0.50, color3);
    gradient.addColorStop(0.75, color4);
    gradient.addColorStop(1, color5);

    return gradient;
}

export async function createGradientDark(ctx, area) {

    const color1 = "#1d2f70";
    const color3 = "#3251c1";
    const color5 = "#7c91dd";

    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(0, color1);
    gradient.addColorStop(0.50, color3);
    gradient.addColorStop(1, color5);

    return gradient;

}

export function createGradientOcean(ctx, area) {

    const color1 = "#087EE1";
    // const color2 = "#087EE1";
    const color3 = "#05E8BA";
    // const color4 = "#05E8BA";
    const color5 = "#0ef9ca";

    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(0, color1);
    // gradient.addColorStop(0.25, color2);
    gradient.addColorStop(0.50, color3);
    // gradient.addColorStop(0.75, color4);
    gradient.addColorStop(1, color5);


    return gradient;
}