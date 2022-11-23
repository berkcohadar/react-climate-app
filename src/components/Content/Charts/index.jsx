import React from 'react'
import Chart from "./Chart";

export default function Charts({ city, period }) {
    const datas = [
        "avgMonthlyMaxTemp",
        "avgMonthlyMinTemp",
        "avgMonthlyGustSpeed",
        "avgMonthlyGustDirection"
    ]
    return (
        <div className="charts-grid">
            {datas.map((dataType, index) => (
                <Chart dataType={dataType} city={city} period={period} index={index} />
            ))}
        </div>
    )
}
