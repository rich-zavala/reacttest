import React from 'react';
import Row from './row';
import ipservices from '../../services/ipservices';

function renderRow() {
  let r = [];
  console.log(ipservices());
  let ips = ipservices();
  for (let i in ips) {
    let obj = {
      name: i,
      ip: ips[i]
    };
    r.push(<Row key={i} {...obj}></Row>);
  }
  return r;
};

export default function Tabla() {
  return (
    <div>
      <p>Is alive!</p>
      <div className='tabla'>
        {renderRow()}
      </div>
    </div>
  );
}