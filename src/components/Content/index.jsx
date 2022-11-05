import React, { useEffect, useMemo, useRef, useState } from "react";
import { calculateMonthlyAverage } from "./utils/calculations";
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import createGradient, { options } from "./utils/chartStyling";

export default function Content() {
    const chartRef = useRef(null)
    const [date, setDate] = useState("2022-11-01")
    const dataTemp = useMemo(() => calculateMonthlyAverage("avgMonthlyMaxTemp", "Amberley", date, 6), [date])

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) {
            return;
        }
        dataTemp.datasets[0].backgroundColor = createGradient(chart.ctx, chart.chartArea);
        dataTemp.datasets[0].borderRadius = 100;
        dataTemp.datasets[0].barPercentage = .35;
    }, []);

    return (
        <div className="charts-grid">
            <div className="temperature-chart">
                <div className="chart-title">
                    <span className="chart-title-image"></span>
                    <span className="chart-title-text"> Monthly Average Temperature</span>
                </div>
                <div style={{minHeight:"300px", width:"100%"}}>
                    <Bar ref={chartRef} options={options} data={dataTemp} />
                </div>
            </div>
            <div className="temperature-chart">
                <div className="chart-title">
                    <span className="chart-title-image"></span>
                    <span className="chart-title-text"> Monthly Average Temperature</span>
                </div>
                <div style={{minHeight:"300px", width:"100%"}}>
                    <Bar ref={chartRef} options={options} data={dataTemp} />
                </div>
            </div>
            <div className="temperature-chart">
                <div className="chart-title">
                    <span className="chart-title-image"></span>
                    <span className="chart-title-text"> Monthly Average Temperature</span>
                </div>
                <div style={{minHeight:"300px", width:"100%"}}>
                    <Bar ref={chartRef} options={options} data={dataTemp} />
                </div>
            </div>
            <div className="temperature-chart">
                <div className="chart-title">
                    <span className="chart-title-image"></span>
                    <span className="chart-title-text"> Monthly Average Temperature</span>
                </div>
                <div style={{minHeight:"300px", width:"100%"}}>
                    <Bar ref={chartRef} options={options} data={dataTemp} />
                </div>
            </div>
        </div>
    );
}



    // HOOK
    // const { data, loading, error } = useFetch(
    //     "https://api.dclimate.net/apiv3/australia-station-history/Adelaide_Airport/TMAX"
    // );