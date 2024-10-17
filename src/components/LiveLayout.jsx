import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './Canvas';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function LiveLayout() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: 'white' }}>
          {/* Sidebar (hidden on mobile) */}
          <div className="col-lg-3 d-none d-lg-block">
            <Dashboard/>
          </div>
          {/* Main content */}
          <div className="col-lg-9 col-12">
            <div className="row">
              <div className="col-12">
              
              </div>
            </div>
            <div>
              <div className="row" style={{ overflowX: 'hidden' }}>
                <div className="col-12 col-md-12 grid-margin">
                  <div className="col-12 d-flex justify-content-center align-items-center m-2 text-center">
                    <h1 className="text-center mt-3" style={{ justifyContent: 'center' }}>
                      Live Station Mapping 
                    </h1>
                  </div>
                  <div className="cardn m-">
                    <div className="card-body">
                      <div className="row">
                        {/* Sidebar (for DnD) */}
                        <div className="col-md-3">
                          <Sidebar />
                        </div>
                        {/* Canvas Area */}
                        <div className="col-md-9 shadow" >
                          <Canvas />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer">
          <div className="container-fluid clearfix">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
             
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            AquaBox Control and Monitor System <br />
              © <a href="https://ebhoom.com" target="_blank">Ebhoom</a> 2022
            </span>
          </div>
        </footer>
      </div>
    </DndProvider>
  );
}

export default LiveLayout;