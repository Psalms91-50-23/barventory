import React from "react"
import { ResponsiveBar } from '@nivo/bar'

function Graph (props)  {

    const { historyData } = props
    console.log(historyData)
    return (
        <>
            <h1>I'm a Graph</h1>
            <ResponsiveBar
                data={ historyData }
                keys={['fullBottles']}
                indexBy="reportDate"

                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.25}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                valueFormat={{ format: '', enabled: false }}
                colors={{ scheme: 'nivo' }}
            />
        </>
    )
}

export default Graph