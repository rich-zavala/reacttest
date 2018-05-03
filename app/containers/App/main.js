import React from 'react';
import Row from './row';
import ipservices from '../../services/ipservices';

function renderRow() {
  let r = [];
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
    <table>
      {renderRow()}
    </table>
  );
}