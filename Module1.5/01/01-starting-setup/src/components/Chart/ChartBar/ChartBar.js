import React from "react";
import './ChartBar.css'


export default function ChartBar({ label, max, value, maxValue }){

    let barFillHeight = '0%'


    if( maxValue > 0){
        barFillHeight = Math.round((value / maxValue) * 100) + '0%'
    }
    const styles = {
        height: barFillHeight
    }


    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={ styles }>
                   
                </div>
            </div> 
            <div className="chart-bar__label">
                { label }
            </div>
        </div>
    )

}