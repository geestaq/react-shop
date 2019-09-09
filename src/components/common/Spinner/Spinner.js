import React from 'react';
import { Grid } from 'svg-loaders-react';
import './Spinner.scss';

const Spinner = () => (
  <div className="spinner text-center"><Grid fill="#7f7f7f" fillOpacity="1" /></div>
);

export default Spinner;
