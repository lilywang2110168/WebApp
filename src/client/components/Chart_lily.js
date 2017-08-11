import React from 'react';

class Chart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.female);
        console.log(this.props.male);

        let  chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text:"Gender Distribution"
            },
            animationEnabled: true,

            data: [
                {
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "{y} - #percent %",

                    legendText: "{indexLabel}",
                    dataPoints: [
                        {  y: this.props.female, indexLabel: "Female" },
                        {  y: this.props.male, indexLabel: "Male" },
                    ]
                }
            ]
        });
        chart.render();
    }

    render() {
        return<div id="chartContainer"> </div>;
    }

}

export default Chart;