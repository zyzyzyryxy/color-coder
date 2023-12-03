import './App.css';
import { TableContextProvider } from './contexts/TableContext';
import { Codes } from './components/codes';
import { Table } from './components/table';
import { ColorSelector } from './components/colorSelector';

const COLORS = ['white', 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow'];
const ROWS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const COLS = 'ABCDEFGHIJKLMNOPRST'.split('');
const INITIAL_COLORS = COLORS.slice(0, 4);

function App() {
  return (
    <div className='App'>
      <TableContextProvider columns={COLS} rows={ROWS} initialColors={INITIAL_COLORS}>
        <div className='LeftPane'>
          <Table rows={ROWS} columns={COLS}/>
          <Codes/>
        </div>
        <div className='RightPane'>
          <ColorSelector/>
        </div>
      </TableContextProvider>
    </div>
  );
}

export default App;
