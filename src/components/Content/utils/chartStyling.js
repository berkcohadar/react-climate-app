export default function createGradient(ctx, area) {
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
                    size: 13,
                },
            },
            grid: {
                color: "#606060"
            }
        },
        x: {
            ticks: {
                color: "white",
                font: {
                    size: 13
                },
            },
            grid: {
                color: "#606060"
            }
        }
    }
}