import React, { useRef, useEffect, useState } from 'react'
import './CheckingAcc.css'
import { select, line, curveCardinal, axisBottom, scaleLinear} from 'd3'

const CheckingAcc = () => {
    // Range - 30 to 250
    const randomNum = () => Math.floor(Math.random() * (250-30 + 1) + 30)
    const [data, setData] = useState([randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum()])
    const svgRef = useRef();

    const handleChange = () => {
        setData([randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum()])
    }

    useEffect(() => {
        const svg = select(svgRef.current);

        const myLine = 
            line()
                .x((value, index) => index * 115)
                .y((value) => value)
                .curve(curveCardinal);
        
        const xScale = scaleLinear()
            .domain([9, 18])
            .range([0, 690]);

            const xAxis = axisBottom(xScale).ticks(10);
            xAxis(svg.select(".x-axis-1").style('transform', 'translateY(270px)'))
                
        svg
            .selectAll(".line")
            .data([data])
            .join("path")
            .attr("d", value => myLine(value))
            .attr('class', 'line')
            .attr("stroke", "rgba(0, 128, 0, 0.671)")
            .attr("fill", "none")
            .attr("stroke-width", 2)
    }, [data])

    return (
        <div className="checkingAcc">
            <div className='checkingAcc__cardContainer'>
                <div className="checkingAcc__topContainer">
                    <div className="checkingAcc__headingContainer">
                        <h2 className="checkingAcc__heading">Checking account</h2>
                    </div>
                    <div className="checkingAcc__selectors">
                        <select className="checkingAcc__selector" onChange={handleChange}>
                            <option>Manage</option>
                            <option>Change</option>
                            <option>Operation</option>
                            <option>Data</option>
                        </select>
                        <select className='checkingAcc__selector' onChange={handleChange}>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </div>
                </div>
                <div className="checkingAcc__bottomContainer">
                    <svg ref={svgRef} className='checkingAcc__lineChart_container'>
                        <g className='x-axis-1' />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CheckingAcc