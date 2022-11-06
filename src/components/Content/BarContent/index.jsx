import React, { useEffect, useMemo, useRef, useState } from "react";
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { calculateMonthlyAverage } from "../utils/calculations";
import createGradient, { options } from "../utils/chartStyling";

export default function BarContent({ title, dataType, city, period }) {
    const chartRef = useRef(null);
    const data = useMemo(() => calculateMonthlyAverage(dataType, city, period), [city, period]);

    useEffect(() => {
        const chartRefCurrent = chartRef.current;

        if (!chartRefCurrent) {
            return;
        }

        data.datasets[0].backgroundColor = createGradient(chartRefCurrent.ctx, chartRefCurrent.chartArea);
        data.datasets[0].borderRadius = 100;
        data.datasets[0].barPercentage = .35;

    }, [data]);

    return (
        <div className="temperature-chart">
            <div className="chart-title">
                <span className="chart-title-image"></span>
                <span className="chart-title-text">{title}</span>
            </div>
            <div style={{ minHeight: "300px", width: "100%" }}>
                <Bar ref={chartRef} options={options} data={data} />
            </div>
        </div>
    )
}
