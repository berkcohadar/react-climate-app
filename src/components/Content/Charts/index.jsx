import React from 'react'
import Chart from "components/Content/Chart";

export default function Charts({ city, period }) {
    const datas = [
        "avgMonthlyMaxTemp",
        "avgMonthlyMinTemp",
        "avgMonthlyGustSpeed",
        "totalDaysGustDirection"
    ]
    return (
        <div className="charts-grid">
            {datas.map((dataType, index) => (
                <Chart dataType={dataType} city={city} period={period} index={index} />
            ))}
        </div>
    )
}
