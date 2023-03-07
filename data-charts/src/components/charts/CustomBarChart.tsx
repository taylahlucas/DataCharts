import React from 'react';
import { Chart } from "react-google-charts";
import { UnitData } from '../../utils/interfaces';
import { chartXTitle, chartYTitle } from '../../utils/strings';

interface CustomBarChartProps {
  data?: UnitData[];
};

const chartOptions = {
  title: chartXTitle,
  chartArea: { width: "50%" },
  hAxis: {
    title: "Name"
  },
  vAxis: {
    title: "Value",
    minValue: 0
  }
};

class CustomBarChart extends React.Component<CustomBarChartProps> {
  render() {
    const { data } = this.props;
    const chartArray: (string | number)[][] = [[chartXTitle, chartYTitle]]
    data?.forEach(item => chartArray.push([`${item.name} (${item.unit})`, item.value]))
    return (
      <Chart
        chartType={'Bar'}
        width="400px"
        height="400px"
        data={chartArray}
        options={chartOptions} 
      />
    );
  };
};

export default React.memo(CustomBarChart);