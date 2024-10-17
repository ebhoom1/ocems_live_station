import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import Dashboard from './components/Dashboard';
import LiveLayout from './components/LiveLayout';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    {/*   <Dashboard/>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <Canvas />
      </div> */}
      <LiveLayout/>
    </DndProvider>
  );
}

export default App;
