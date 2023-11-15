import React, { useEffect, useRef } from 'react'
import './CashFlow.css'
import { select, scaleBand, axisBottom, stack, scaleLinear, max } from 'd3'

const CashFlow = () => {
    // Range 30-100
    const randomNum = () => Math.floor(Math.random() * (100-30 + 1) + 30)

    const data = [
        { month: 'August', in: randomNum(), out: randomNum() },
        { month: 'September', in: randomNum(), out: randomNum() },
        { month: 'October', in: randomNum(), out: randomNum() },
        { month: 'November', in: randomNum(), out: randomNum() },
        { month: 'December', in: randomNum(), out: randomNum() },
        { month: 'January', in: randomNum(), out: randomNum() },
    ]
    const keys = ['in', 'out'];
    const colors = {
        in: "rgba(0, 128, 0, 0.671)",
        out: "rgb(8, 153, 117)",
      };

    const svgRef = useRef()

    useEffect(() => {
        const svg = select(svgRef.current);
        const stackGenerator = stack().keys(keys);
        const layers = stackGenerator(data);
        const extent = [0, max(layers, layer => max(layer, sequence => sequence[1]))]

        const xScale = scaleBand()
            .domain(data.map((d) => d.month))
            .range([0, 690])

        const yScale = scaleLinear()
            .domain(extent)
            .range([265, 0])

        const xAxis = axisBottom(xScale)
        xAxis(select('.x-axis-3').style('transform', 'translateY(270px)'))

        svg
            .selectAll('.layer')
            .data(layers)
            .join('g')
            .attr('class', 'layer')
            .attr('fill', layer => colors[layer.key])
            .selectAll('rect')
            .data(layer => layer)
            .join('rect')
            .attr('x', (sequence) => xScale(sequence.data.month) + 43)
            .attr('y', (sequence) => yScale(sequence[1]))
            .attr('width', 30)
            .attr('height', sequence => yScale(sequence[0]) - yScale(sequence[1]))
        
    })

    return (
        <div className="cashflow">
            <div className='cashflow__topContainer'>
                <div className='cashflow__headingContainer'>
                    <h2 className='cashflow__heading'>Total cash flow</h2>
                </div>
                <div className='cashflow__inoutContainer'>
                    <div className='cashflow__box_1'></div>
                    <p className='cashflow__text_1'>In</p>
                    <div className='cashflow__box_2'></div>
                    <p className='cashflow__text_2'>Out</p>
                </div>
            </div>
            <div className="cashflow__bottomContainer">
                <svg ref={svgRef} className="cashflow__stackedChart_container">
                    <g className='x-axis-3' />
                </svg>
            </div>
        </div>
    )
}

export default CashFlow