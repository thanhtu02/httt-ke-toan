import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale } from 'chart.js';
import { DataContext } from "../context/dataContext";
import dataStock from "../api/bctc/stock.json";

const CandlestickChart = () => {
    const { detail } = useContext(DataContext);
    const dataset = dataStock[detail];

    if (!dataset) {
        return null;
    }

    const chartData = {
        labels: dataset.map(item => item.Date),
        datasets: [{
            label: 'Giá Close',
            data: dataset.map(item => item.Close),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        }]
    };

    return (
        <>
            <Line
                data={chartData}
                options={{
                    scales: {
                        x: {
                            type: 'category', // Use category scale for x-axis
                        },
                        y: {
                            type: 'linear', // Use linear scale for y-axis
                            position: 'left',
                        },
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: "bottom"
                        },
                        title: {
                            display: true,
                            text: "Close"
                        },
                    }
                }}
            />
        </>
    );
}

export default CandlestickChart;
