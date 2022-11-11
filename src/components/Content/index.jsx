import React, { useState } from "react";
import BarContent from "./BarContent";
import ChartsHeader from "./ChartsHeader";

export default function Content() {
    const [city, setCity] = useState("Amberley");
    const [period, setPeriod] = useState(4);
    const datas = [
        "avgMonthlyMaxTemp",
        "avgMonthlyMinTemp",
        "avgMonthlyGustSpeed",
        "avgMonthlyGustDirection"
    ]

    return (
        <>
            <ChartsHeader city={city} setCity={setCity} title="Australia Climate Charts" />
            <div className="charts-grid">
                {datas.map((dataType, index) => (
                    <BarContent dataType={dataType} city={city} period={period} index={index} />
                ))}
            </div>
        </>
    );
}
