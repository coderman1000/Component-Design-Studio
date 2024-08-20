// components/ResizablePanelsLayout.js

import React, { useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { IconButton, Button } from '@mui/material';
import { Minimize, ChevronLeft, ChevronRight, ExpandMore, ExpandLess } from '@mui/icons-material';
import TreeViewComponent from './TreeViewComponent';

const ResizablePanelsLayout = () => {
    const [showLeftPanel, setShowLeftPanel] = useState(true);
    const [showRightPanel, setShowRightPanel] = useState(true);
    const [showBottomPanel, setShowBottomPanel] = useState(true);
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
        <div style={{ height: '100vh', display: 'flex' }}>
            <PanelGroup direction="horizontal">
                {/* Left Panel */}
                {showLeftPanel && (
                    <Panel minSize={10}>
                        <div style={{ padding: '10px', background: '#f4f4f4', height: '100%', position: 'relative' }}>
                            <IconButton
                                style={{ position: 'absolute', top: 10, right: 10 }}
                                onClick={() => setShowLeftPanel(false)}
                            >
                                <Minimize />
                            </IconButton>
                            <PanelGroup direction="vertical">
                                <Panel defaultSize={60} minSize={10}>
                                    <div style={{ padding: '10px', background: '#ffffff', height: '100%' }}>
                                        <TreeViewComponent folderStructure={folderStructure} />
                                    </div>
                                </Panel>
                                <PanelResizeHandle>
                                    <div style={separatorStyleHorizontal} />
                                </PanelResizeHandle>
                                <Panel defaultSize={40} minSize={10}>
                                    <div style={{ padding: '10px', background: '#d7d7d7', height: '100%' }}>
                                        <h4>Bottom Panel (Left)</h4>
                                        <p>Additional content area...</p>
                                    </div>
                                </Panel>
                            </PanelGroup>
                        </div>
                    </Panel>
                )}

                {/* Left Panel Separator */}
                {showLeftPanel && <PanelResizeHandle><div style={separatorStyle} /></PanelResizeHandle>}

                {/* Center Panel */}
                <Panel>
                    <PanelGroup direction="vertical">
                        <Panel>
                            <div style={{ padding: '10px', background: '#e9ecef', height: '100%' }}>
                                <h4>Center Panel</h4>
                                <p>Main content area...</p>
                            </div>
                        </Panel>
                        {showBottomPanel && <PanelResizeHandle><div style={separatorStyleHorizontal} /></PanelResizeHandle>}
                        {showBottomPanel && (
                            <Panel minSize={10}>
                                <div style={{ padding: '10px', background: '#d7d7d7', height: '100%', position: 'relative' }}>
                                    <IconButton
                                        style={{ position: 'absolute', top: 10, right: 10 }}
                                        onClick={() => setShowBottomPanel(false)}
                                    >
                                        <Minimize />
                                    </IconButton>
                                    <h4>Bottom Panel</h4>
                                    <p>Additional content area...</p>
                                </div>
                            </Panel>
                        )}
                    </PanelGroup>
                </Panel>

                {/* Right Panel Separator */}
                {showRightPanel && <PanelResizeHandle><div style={separatorStyle} /></PanelResizeHandle>}

                {/* Right Panel */}
                {showRightPanel && (
                    <Panel minSize={10}>
                        <div style={{ padding: '10px', background: '#f4f4f4', height: '100%', position: 'relative' }}>
                            <IconButton
                                style={{ position: 'absolute', top: 10, right: 10 }}
                                onClick={() => setShowRightPanel(false)}
                            >
                                <Minimize />
                            </IconButton>
                            <h4>Right Panel</h4>
                            <p>Content goes here...</p>
                        </div>
                    </Panel>
                )}
            </PanelGroup>

            {/* Restore Buttons */}
            {!showLeftPanel && (
                <Button
                    variant="contained"
                    color="primary"
                    style={{ ...restoreButtonStyle, left: 0 }}
                    startIcon={<ChevronRight />}
                    onClick={() => setShowLeftPanel(true)}
                >
                    Show Left Panel
                </Button>
            )}
            {!showBottomPanel && (
                <Button
                    variant="contained"
                    color="primary"
                    style={{ ...restoreButtonStyle, bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
                    startIcon={<ExpandLess />}
                    onClick={() => setShowBottomPanel(true)}
                >
                    Show Bottom Panel
                </Button>
            )}
            {!showRightPanel && (
                <Button
                    variant="contained"
                    color="primary"
                    style={{ ...restoreButtonStyle, right: 0 }}
                    startIcon={<ChevronLeft />}
                    onClick={() => setShowRightPanel(true)}
                >
                    Show Right Panel
                </Button>
            )}
        </div>
    );
};

// Separator styles for vertical separators (left/right)
const separatorStyle = {
    width: '5px',
    background: 'linear-gradient(180deg, #ccc, #888)',
    cursor: 'col-resize',
    transition: 'background 0.3s',
};

// Separator styles for horizontal separator (center/bottom)
const separatorStyleHorizontal = {
    height: '5px',
    background: 'linear-gradient(90deg, #ccc, #888)',
    cursor: 'row-resize',
    transition: 'background 0.3s',
};

// Restore button style
const restoreButtonStyle = {
    position: 'absolute',
    top: 10,
    zIndex: 1000,
};

export default ResizablePanelsLayout;
