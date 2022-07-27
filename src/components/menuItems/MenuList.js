
import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Link, navigate} from '@mui/material';

import ResidentForm from "../../pages/forms/ResidentForm";
import HouseholdForm from "../../pages/forms/HouseholdForm";

const MenuList = (activePage) => {

  const pages = [
    {
      id: 1,
      pageName: 'ResidentForm',
      location: '/ResidentForm',
      activeColor: activePage === 1 ? true : false
    },
    {
      id: 2,
      pageName: 'HouseholdForm',
      location: '/HouseholdForm',
      activeColor: activePage === 2 ? true : false
    },

  ];

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };


  return (
    <List 
        sx={{ width: '250px', height: 600 , bgcolor: '#f5f5f5'}}
        component="nav" 
    >

    <ListItemButton component={Link} to="HouseholdForm">
      <ListItemIcon>
        <DashboardIcon sx={{ color: '#800000' }}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <ArticleIcon sx={{ color: '#800000' }}/>
      </ListItemIcon>
      <ListItemText primary="Census Forms" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>

    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton onClick={handleListItemClick} sx={{ pl: 4, paddingLeft: 15 }}>
          <ListItemText primary="Resident" />
        </ListItemButton>
        <ListItemButton onClick={handleListItemClick} component={Link} href="../forms/ResidentForm" sx={{ pl: 4, paddingLeft: 15 }}>
          <ListItemText primary="Household" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4, paddingLeft: 15 }}>
          <ListItemText primary="Single Parent" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4, paddingLeft: 15 }}>
          <ListItemText primary="PWD" />
        </ListItemButton>
      </List>
    </Collapse>

    
      {/* {pages.map(({id,pageName,activeColor, location}) => (
        <ListItemButton key={id} onclick={()=>{navigate(location)}}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Records" />
        </ListItemButton>

      ))} */}
      
    <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
      <ListItemIcon>
        <AssessmentIcon sx={{ color: '#800000' }}/>
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>

    <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="SOM Analysis" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Events" />
    </ListItemButton>

  </List>
  )
}

export default MenuList