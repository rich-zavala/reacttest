import React from 'react';
export default function (data) {
  return (
    <tr className="row">
      <td>{data.name}</td>
      <td>{data.ip}</td>
    </tr>);
}
