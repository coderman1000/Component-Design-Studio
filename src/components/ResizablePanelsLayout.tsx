// components/ResizablePanelsLayout.js

import React from 'react';
import DockView, { DockPanel, DockTab } from 'dockview';
import 'dockview/dist/dockview.css';
import { IconButton } from '@mui/material';
import { Folder, InsertDriveFile } from '@mui/icons-material';
import TreeViewComponent from './TreeViewComponent';

const ResizablePanelsLayout = () => {
    const folderStructure = [
        {
            id: 'root',
            name: 'Root Folder',
            children: [
                { id: 'child1', name: 'Folder 1', children: [{ id: 'file1', name: 'File 1' }] },
                { id: 'child2', name: 'Folder 2', children: [{ id: 'file2', name: 'File 2' }] },
            ],
        },
    ];

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* DockView Container */}
            <DockView
                style={{ height: '100%', width: '100%' }}
                defaultLayout={{
                    type: 'row',
                    children: [
                        {
                            type: 'column',
                            children: [
                                { type: 'component', component: 'left-panel' },
                                { type: 'component', component: 'center-panel' },
                                { type: 'component', component: 'bottom-panel' }
                            ]
                        },
                        { type: 'component', component: 'right-panel' }
                    ]
                }}
            >
                <DockPanel name="left-panel" minSize={200} defaultSize={300}>
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flex: 1, overflow: 'auto' }}>
                            <TreeViewComponent folderStructure={folderStructure} />
                        </div>
                        <div style={{ height: 100, background: '#d7d7d7' }}>
                            <h4>Bottom Panel (Left)</h4>
                            <p>Additional content area...</p>
                        </div>
                    </div>
                </DockPanel>

                <DockPanel name="center-panel" minSize={100}>
                    <div style={{ padding: '10px', background: '#e9ecef', height: '100%' }}>
                        <h4>Center Panel</h4>
                        <p>Main content area...</p>
                    </div>
                </DockPanel>

                <DockPanel name="bottom-panel" minSize={100}>
                    <div style={{ padding: '10px', background: '#d7d7d7', height: '100%' }}>
                        <h4>Bottom Panel</h4>
                        <p>Additional content area...</p>
                    </div>
                </DockPanel>

                <DockPanel name="right-panel" minSize={200} defaultSize={300}>
                    <div style={{ padding: '10px', background: '#f4f4f4', height: '100%' }}>
                        <h4>Right Panel</h4>
                        <p>Content goes here...</p>
                    </div>
                </DockPanel>
            </DockView>
        </div>
    );
};

export default ResizablePanelsLayout;
