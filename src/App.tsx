import './App.css';
import { TableContextProvider } from './contexts/TableContext';
import { Codes } from './components/codes';
import { Table } from './components/table';
import { ColorSelector } from './components/colorSelector';
import { useCallback, useState } from 'react';
import { ColorPicker } from './components/colorPicker';

const COLORS = ['white', 'black', 'cyan', 'magenta', 'yellow', 'red', 'green', 'blue', 'gray', 'lightgray'];
const ROWS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const COLS = 'ABCDEFGHIJKLMNOPRST'.split('');
const INITIAL_COLORS = COLORS.slice(0, 5);

function App() {
	const [editedIndex, setEditedIndex] = useState<number | null>(null);

  const onColorPickerClose = useCallback(() => {
    setEditedIndex(null);
  }, []);

  return (
    <div className='App'>
      <TableContextProvider columns={COLS} rows={ROWS} initialColors={INITIAL_COLORS}>
        <div className='LeftPane'>
          <Table rows={ROWS} columns={COLS}/>
          <Codes/>
        </div>
        <div className='RightPane'>
          <ColorSelector onEditStart={setEditedIndex} />
        </div>
        {editedIndex != null ? <ColorPicker editedIndex={editedIndex} onClose={onColorPickerClose} allColors={COLORS}/> : null}
      </TableContextProvider>
    </div>
  );
}

export default App;
