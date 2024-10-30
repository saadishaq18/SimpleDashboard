import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title, ArcElement, BarElement } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title, ArcElement, BarElement);

export const Input = ({ label, name, register, error, ...rest }) => {
    return (
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <input className="form-control" {...register(name)} {...rest} />
        {error && <div className="text-danger mt-1">{error.message}</div>}
      </div>
    );
  };

export const Button = ({ label, ...rest }) => {
    return (
      <button className="btn btn-primary" {...rest}>
        {label}
      </button>
    );
  };

export const Select = ({ label, name, options, register, error, ...rest }) => {
    return (
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <select className="form-control" {...register(name)} {...rest}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <div className="text-danger mt-1">{error.message}</div>}
      </div>
    );
  };
  
  export const Chart = ({ type, data, options }) => {
    switch (type) {
      case 'line':
        return <Line data={data} options={options} height={50} width={400}/>;
      case 'bar':
        return <Bar data={data} options={options} height={50} width={400}/>;
      default:
        return null;
    }
  };