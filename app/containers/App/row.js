import React from 'react';

const rowStyle = {
  display: 'inline',
  'margin-right': '10px'
};

const rowChildStyle = {
  display: 'inline-block',
};

export default function (data) {
  return (<div style={rowStyle}>
    <div style={rowChildStyle}>{data.name}</div>
    <div style={rowChildStyle}>{data.ip}</div>
    <div>xxxxxxxxxx</div>
  </div>);
}
