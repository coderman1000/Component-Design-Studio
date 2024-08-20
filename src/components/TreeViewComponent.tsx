// components/TreeViewComponent.js

import React from 'react';
import { ExpandMore, ChevronRight, Folder, InsertDriveFile } from '@mui/icons-material';
import { List, ListItem, ListItemText, Collapse, IconButton } from '@mui/material';

const CustomTreeItem = ({ node, depth = 0 }) => {
    const [open, setOpen] = React.useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div style={{ paddingLeft: depth * 16 }}>
            <ListItem button onClick={handleToggle}>
                <IconButton>
                    {open ? <ExpandMore /> : <ChevronRight />}
                </IconButton>
                {Array.isArray(node.children) ? <Folder /> : <InsertDriveFile />}
                <ListItemText primary={node.name} style={{ marginLeft: 8 }} />
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {Array.isArray(node.children) && (
                    <List component="div" disablePadding>
                        {node.children.map((childNode) => (
                            <CustomTreeItem key={childNode.id} node={childNode} depth={depth + 1} />
                        ))}
                    </List>
                )}
            </Collapse>
        </div>
    );
};

const TreeViewComponent = ({ folderStructure }) => {
    return (
        <List>
            {folderStructure.map((tree) => (
                <CustomTreeItem key={tree.id} node={tree} />
            ))}
        </List>
    );
};

export default TreeViewComponent;
