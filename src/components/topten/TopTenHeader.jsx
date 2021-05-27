import React from 'react';

const TOP_TEN_HEADERS = ['User', `Actions`, 'Squad Score'];

export function TopTenHeader({ votes }) {
  return (
    <>
      <thead>
        <tr>
          {TOP_TEN_HEADERS.map((el, ind) => (
            <th key={ind}>{el}</th>
          ))}
        </tr>
      </thead>
    </>
  );
}
