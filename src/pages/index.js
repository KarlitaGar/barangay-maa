import * as React from "react"
import Menu from "../components/menuItems/MenuBar"
import MenuList from "../components/menuItems/MenuList"
import SingleParentForm from "./forms/SingleParentForm"
import ResidentForm from "./forms/ResidentForm"
import FinancialInfo from "./forms/FinancialInfo"
import LandingLogIn from "../components/logIn/LandingLogIn"
import PwdForm from "./forms/PwdForm"
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
          <Grid container direction='row'>
            <Grid item>
              <MenuList />
            </Grid>
             <Grid sx={{ width:20 }}/>
             <Grid item sx={{ padding: 3 }}> 
              <FinancialInfo />
            </Grid>
             
          </Grid>
        
      </Grid>
    </Grid>
  )
}

export default IndexPage
