import React, { useState } from 'react';
import { Button } from '@mantine/core';
import CustomDrawer from './Drawer'; // Import CustomDrawer component

export default function Appbutton() { // Add title here
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  return (
    <>   
      <Button onClick={() => setIsDrawerOpened(true)}>Create new project</Button>
      <CustomDrawer isOpen={isDrawerOpened} onClose={() => setIsDrawerOpened(false)} />
    </> 

  );
}