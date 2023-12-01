import React from 'react';
import './App.css';
import { TableContextProvider } from './TableContext';
import { Codes } from './components/Codes';
import { Table } from './components/Table';

const COLORS = ['white', 'magenta', 'red', 'yellow', 'green', 'blue'];
const ROWS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const COLS = 'ABCDEFGHIJKLMNOPRST'.split('');

function App() {
  return (
    <TableContextProvider columns={COLS} rows={ROWS} colors={COLORS}>
      <Table rows={ROWS} columns={COLS}/>
      <Codes/>
    </TableContextProvider>
  );
}

export default App;
