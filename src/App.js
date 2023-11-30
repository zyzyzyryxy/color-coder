import { useState } from 'react';
import './App.css';

const colors = ['white', 'magenta', 'red', 'yellow', 'green', 'blue'];
const ROWS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const COLS = 'ABCDEFGHIJKLMNOPRST'.split('');

function App() {
  const [cells, setCells] = useState(new Array(COLS.length * ROWS.length).fill(0));

  return (
    <div className='App'>
      <div className='Row'>
        <div className='Col' style={{backgroundColor: 'lightgray'}}/>
        {COLS.map(c => (<div className='Col' style={{backgroundColor: 'lightgray'}}>{c}</div>))}
      </div>
      <div className='Table'>
        {ROWS.map(r => (
          <div className='Row'>
            <div className='Col' style={{backgroundColor: 'lightgray'}}>{r}</div>
            {COLS.map((c, cidx) => {
              console.log(r, cidx);
              const idx = cidx * ROWS.length + r - 1;
              return (
                <div
                  className='Col'
                  style={{backgroundColor: colors[cells[idx]]}}
                  onClick={() => {
                    setCells(prev => prev.with(idx, (prev[idx] + 1) % colors.length));
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className='Codes'>
        {colors.map((c, cidx) => {
          if (cidx === 0) return;

          const coords = cells.reduce((acc, cc, idx) => {
            const col = Math.floor(idx / ROWS.length);
            const row = idx % ROWS.length;
            if (cc === cidx) acc.push(COLS[col] + ROWS[row]);
            return acc;
          }, []);
          console.log(cells);
          console.log(coords);
          return (
            <div style={{color: c}}>{coords.join(' ')}</div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
