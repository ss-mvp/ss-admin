import React, { useState, useEffect } from 'react';
import WinnerModal from './WinnerModal'


export function WinnerBar({ winner}) {
    console.log('winnerbar', winner)
  return (
    <>
      <tr>
        <td>{winner.codename}</td>
        <td>{winner.score}</td>
        <td style={{ marginLeft: '30%', display: 'flex' }}>
          <button
            className="btn btn-outline-primary m-2 px-4"
            data-toggle="modal"
            data-target={`#storyModal ${winner.id}`}
          >
            View
          </button>
          <WinnerModal key={winner.id} winner={winner} />

        </td>
      </tr>
    </>
  );
}
