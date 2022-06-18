import * as React from 'react';
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
import { Link, navigate } from '@mui/material';

import HouseholdForm from '../forms/HouseholdForm';
import ResidentForm from '../forms/ResidentForm';

const MenuList = (activePage) => {

  // const pages = [
  //   {
  //     id: 1,
  //     pageName: 'ResidentForm',
  //     location: '../forms/ResidentForm',
  //     activeColor: activePage === 1 ? true : false
  //   },
  //   {
  //     id: 2,
  //     pageName: 'HouseholdForm',
  //     location: '../forms/HouseholdForm',
  //     activeColor: activePage === 2 ? true : false
  //   },

  // ];

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
        sx={{ width: '250px', height: 600 , bgcolor: '#f5f5f5'}}
        component="nav"
        aria-labelledby="nested-list-subheader" 
    >
    <ListItemButton component={Link} to="../forms/ResidentForm">
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
        <ListItemButton onClick={handleClick} sx={{ pl: 4, paddingLeft: 15 }}>
          <ListItemText primary="Resident" />
        </ListItemButton>
        <ListItemButton onClick={handleClick} component={Link} href="../forms/ResidentForm" sx={{ pl: 4, paddingLeft: 15 }}>
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

    
      
      {/* <ListItemButton key={id} onclick={()=>{navigate(location)}}
        >
        {pageName}
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Records" />
        </ListItemButton> */}

    <ListItemButton>
      <ListItemIcon>
        <AssessmentIcon sx={{ color: '#800000' }}/>
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>

    <ListItemButton component={Link} to="/404">
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