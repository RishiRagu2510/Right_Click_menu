import React, { useState } from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";
const RightClick = () => {
  const [contextMenu, setContextMenu] = useState(null);
  const handleContextMenu = (e) => {
    setContextMenu(e.currentTarget);
  };
  return (
    <div onContextMenu={handleContextMenu}>
      <ContextMenu id="my-context-menu">
        <MenuItem onClick={() => alert("Item 1 clicked")}>Item 1</MenuItem>
        <MenuItem onClick={() => alert("Item 2 clicked")}>Item 2</MenuItem>
        <MenuItem onClick={() => alert("Item 3 clicked")}>Item 3</MenuItem>
      </ContextMenu>
    </div>
  );
};
export default RightClick;