import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('02/03', 1800),
  createData('03/03', 300),
  createData('04/03', 600),
  createData('05/03', 800),
  createData('06/03', 1500),
  createData('07/03', 0),
  createData('08/03', 0),
  createData('09/03', 2400),
  createData('10/03', 3000),
  createData('11/03', 3000),

];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Gastos totales por día (Últimos 10 días)</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
            Importe ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={true}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}