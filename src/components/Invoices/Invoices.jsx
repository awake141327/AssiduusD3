import React, { useRef, useEffect, useState } from 'react'
import './Invoices.css'
import { select, axisBottom, scaleBand } from 'd3'

const Invoices = () => {
    // Range 50-250
    const randomNum = () => Math.floor(Math.random() * (250-50 + 1) + 50)
    const [data, setData] = useState([
        { name: 'Older', value: randomNum() },
        { name: 'Jan 01-08', value: randomNum() },
        { name: 'Jan 09-16', value: randomNum() },
        { name: 'Jan 17-24', value: randomNum() },
        { name: 'Jan 25-31', value: randomNum() },
        { name: 'Future', value: randomNum() },
    ])
    const svgRef = useRef();
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        const svg = select(svgRef.current);

        const xScale = scaleBand()
            .domain(data.map((d) => d.name))
            .range([0, 690])
        
        const xAxis = axisBottom(xScale).ticks(data.length)
        xAxis(select('.x-axis-2').style('transform', 'translateY(270px)'))

        svg
            .selectAll('.bar')
            .data(data)
            .join('rect')
            .style('transform', 'scale(1,-1)')
            .attr('class', 'bar')
            .attr('x', (d) => xScale(d.name) + 43)
            .attr('y', -265)
            .attr('width', 30)
            .attr('rx', 10)
            .attr('fill', 'rgba(0, 128, 0, 0.671)')
            .transition()
            .attr('height', d => 280 - d.value)
        })


    return (
        <div className="invoices">
            {isClicked ? <Modal state={() => setIsClicked()}/> : ''}
            <div className='invoices__cardContainer'>
                <div className="invoices__topContainer">
                    <div className="invoices__headingContainer">
                        <h2 className="invoices__heading">Invoices owed to you</h2>
                    </div>
                    <div className='invoices__buttonContainer'>
                        <button className='invoices__button' onClick={() => setIsClicked(prev => !prev)}>New Sales Invoice</button>
                    </div>
                </div>
                <div className="invoices__bottomContainer">
                    <svg ref={svgRef} className='invoices__barChart_container'>
                        <g className='x-axis-2' />
                    </svg>
                </div>
            </div>
        </div>
    )
}

const Modal = ({state}) => {
    return (
        <div className="modal__container">
            <dialog open className="modal__center">
                <button className="close_btn" onClick={() => state(false)}>x</button>
                <button className="upload__button">Upload File</button>
            </dialog>
        </div>
    )
}

export default Invoices