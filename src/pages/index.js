import * as React from "react"
import Menu from "../components/menubar/MenuBar"
import MenuList from "../components/menubar/MenuList"
import SingleParentForm from "../components/forms/SingleParentForm"
import HouseholdForm from "../components/forms/HouseholdForm"
import ResidentForm from "../components/forms/ResidentForm"
import LandingLogIn from "../components/logIn/LandingLogIn"
import PwdForm from "../components/forms/PwdForm"
import { Grid } from "@mui/material"
import '../components/styles/style.css'
// markup
const IndexPage = () => {
  return (
    
    <Grid container direction='column' alignItem='center'>
       <Grid item sx={{ width:"100%" }}>
        <Menu />
      </Grid>
      <Grid item sx={{ width:"100%" }}>
          {/* <Grid container direction='row'>
            <Grid item>
              <MenuList />
            </Grid>
             <Grid sx={{ width:20 }}/>
             <Grid item sx={{ padding: 3 }}>  */}
              <LandingLogIn />
            {/* </Grid>
            
          </Grid> */}
        
      </Grid>
    </Grid>
  )
}

export default IndexPage
