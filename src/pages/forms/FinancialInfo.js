import React, { useState } from "react";
import { FormLabel, FormControlLabel, FormControl, RadioGroup, Radio, Typography } from "@mui/material";
import { Grid, TextField, Select, MenuItem, Slider, Button} from "@mui/material";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import Checkbox from "@mui/material";
import ListItemText from "@mui/material";


const defaultValues = {
    hhIncome: "",
    religion: "",
    dialect: "",
    ethnicity: "",
    relationship: "",
    status: "",
    sourceOfIncome: "",
    otherSource: "",
    soloparent: "",
    voter: "",
    income: 0,
    favoriteNumber: 0,
  };

// FOR ENVIRONMENT CONSTRAINTS
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // FOR ENVIRONMENT CONSTRAINT
const environment = [
  'None',
  'Flooded',
  'Landslide',
  'Illegal Dumping',
  'Clogged Canals',
  'Air Pollution',
  'Polluted Water',
  'Toxic Waste',
  'Sea level rise',
  'Siltation',
  'Smoke Belching establishment',
  'Soil Erosion',
  'Damage Dike River',
  'Forest Fire',
];
function getStyles(name, constraintName, theme) {
    return {
      fontWeight:
      constraintName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

//   // FOR LIVESTOCK AND POULTRY
// const livestockpoultry = [
//     'None',
//     'Pig',
//     'Cow',
//     'Sheep',
//     'Chicken',
//     'Goat',
//     'Carabao',
//     'Others',
// ];

// function getStylesPoultry(poultry, poultryName, theme) {
//     return {
//       fontWeight:
//       poultryName.indexOf(poultry) === -1
//           ? theme.typography.fontWeightRegular
//           : theme.typography.fontWeightMedium,
//     };
// }
  


const FinancialInfo = () => {

    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  // FOR MULTIPLE SELECT
  const theme = useTheme();
  const [constraintName, setConstraints, poultryName, setPoultry] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setConstraints(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    // setPoultry(
    //     // On autofill we get a stringified value.
    //     typeof value === 'string' ? value.split(',') : value,
    //   );
  };

  return (
    <Grid container direction='column' alignItems='center' sx={{ width: '1000px', height: 1200, border: '1px solid red', borderRadius: 3 }}>
        <Grid item sx={{ paddingTop: 5}}>
            <Typography variant="h4" color="black" align="center" sx={{ fontFamily: 'Helvetica', fontWeight: 200 }}>
				For Households Financial Information Table
			</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h7" color="black" align='center' sx={{ fontFamily: 'Helvetica' }}>
				Please fill in all the required fields correctly.
			</Typography>
        </Grid>

        <form onSubmit={handleSubmit}>
            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "30px" }} />
                        <TextField
                            id="name-input"
                            name="hhIncome"
                            label="Household Head Income"
                            type="number"
                            sx={{ width: 830 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "23px" }} />
                    <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-simple-select-label">Main Source of Power</InputLabel>
                            <Select
                                name="sourceOfPower"
                                value={formValues.sourceOfPower}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Main Source of Power" />}
                                >
                                <MenuItem value="1">Household Head</MenuItem>
                                <MenuItem value="2">Spouse</MenuItem>
                                <MenuItem value="3">Son/Daughter</MenuItem>
                                <MenuItem value="4">Son/Daughter-in-Law</MenuItem>
                                <MenuItem value="5">Brother/Sister</MenuItem>
                                <MenuItem value="6">Grandchild</MenuItem>
                                <MenuItem value="7">Parents</MenuItem>
                                <MenuItem value="8">Niece/Nephew</MenuItem>
                                <MenuItem value="9">Other Relatives</MenuItem>
                                <MenuItem value="10">Non-Relative</MenuItem>
                                <MenuItem value="11">Boarder</MenuItem>
                                <MenuItem value="12">Domestic Helper</MenuItem>
                                <MenuItem value="13">Common Law/Live-in</MenuItem>
                            </Select>
                        </FormControl>

                    <Grid sx={{ width: 13, height: 20 }}/>

                    <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-simple-select-label">Main Source of Cooking</InputLabel>
                            <Select
                                name="sourceOfCooking"
                                value={formValues.sourceOfCooking}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Main Source of Cooking" />}
                                >
                                <MenuItem value="1">Single</MenuItem>
                                <MenuItem value="2">Married</MenuItem>
                                <MenuItem value="3">Widow/Widower</MenuItem>
                                <MenuItem value="4">Divorced/Separated</MenuItem>
                                <MenuItem value="5">Unknown</MenuItem>
                            </Select>
                        </FormControl>
                </Grid>            
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "23px" }} />
                    <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-simple-select-label">Sanitary Facilities</InputLabel>
                            <Select
                                name="sanitaryfac"
                                value={formValues.sourceOfPower}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Sanitary Facilities" />}
                                >
                                <MenuItem value="1">Water sealed</MenuItem>
                                <MenuItem value="2">Without toilet</MenuItem>
                                <MenuItem value="3">Antipolo</MenuItem>
                            </Select>
                        </FormControl>

                    <Grid sx={{ width: 13, height: 20 }}/>

                    <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-simple-select-label">Water Source</InputLabel>
                            <Select
                                name="waterSource"
                                value={formValues.waterSource}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Water Source" />}
                                >
                                <MenuItem value="1">Water District</MenuItem>
                                <MenuItem value="2">Peddling</MenuItem>
                                <MenuItem value="3">Jetmatic</MenuItem>
                                <MenuItem value="4">Communal Faucet</MenuItem>
                                <MenuItem value="5">Spring</MenuItem>
                                <MenuItem value="4">Deepwell</MenuItem>
                                <MenuItem value="5">Bawasa</MenuItem>
                            </Select>
                        </FormControl>
                </Grid>            
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "23px" }} />
                    <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-simple-select-label">Durability of House</InputLabel>
                            <Select
                                name="durabilityOfHouse"
                                value={formValues.durabilityOfHouse}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Durability of House" />}
                                >
                                <MenuItem value="1">Concrete</MenuItem>
                                <MenuItem value="2">Semi-Concrete</MenuItem>
                                <MenuItem value="3">Light Materials</MenuItem>
                                <MenuItem value="2">Shanty</MenuItem>
                                <MenuItem value="3">Salvage Materials</MenuItem>
                            </Select>
                        </FormControl>

                    <Grid sx={{ width: 13, height: 20 }}/>

                    <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-simple-select-label">Lot Occupancy</InputLabel>
                            <Select
                                name="lotOccupancy"
                                value={formValues.lotOccupancy}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Lot Occupancy" />}
                                >
                                <MenuItem value="1">Owned</MenuItem>
                                <MenuItem value="2">Mortgage</MenuItem>
                                <MenuItem value="3">Rented</MenuItem>
                                <MenuItem value="4">Rent-Free w/ consent of owner</MenuItem>
                                <MenuItem value="5">Informal Settler</MenuItem>
                            </Select>
                        </FormControl>
                </Grid>            
            </Grid>

            {/* <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "23px" }} />
                    <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-simple-select-label">Solid Waste Management</InputLabel>
                            <Select
                                name="wasteManagement"
                                value={formValues.wasteManagement}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Solid Waste Management" />}
                                >
                                <MenuItem value="1">Collected</MenuItem>
                                <MenuItem value="2">Thrown Anywhere</MenuItem>
                                <MenuItem value="3">Burning</MenuItem>
                                <MenuItem value="2">Burying</MenuItem>
                                <MenuItem value="3">Recycled</MenuItem>
                                <MenuItem value="3">Compose Pit</MenuItem>
                            </Select>
                        </FormControl>

                    <Grid sx={{ width: 13, height: 20 }}/>

                    <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-simple-select-label">Environment Constraint</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={constraintName}
                                onChange={handleChange}
                                input={<OutlinedInput id="select-multiple-chip"  label="Environment Constraint" />}
                                renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                                </Box>
                                )}
                                MenuProps={MenuProps}
                                >
                                {environment.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, constraintName, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                </Grid>            
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "23px" }} />
                    <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-simple-select-label">Solid Waste Management</InputLabel>
                            <Select
                                name="wasteManagement"
                                value={formValues.wasteManagement}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Solid Waste Management" />}
                                >
                                <MenuItem value="1">Collected</MenuItem>
                                <MenuItem value="2">Thrown Anywhere</MenuItem>
                                <MenuItem value="3">Burning</MenuItem>
                                <MenuItem value="2">Burying</MenuItem>
                                <MenuItem value="3">Recycled</MenuItem>
                                <MenuItem value="3">Compose Pit</MenuItem>
                            </Select>
                        </FormControl>

                    <Grid sx={{ width: 13, height: 20 }}/>

                    <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-simple-select-label">Environment Constraint</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={poultryName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                                >
                                {livestockpoultry.map((poultry) => (
                                    <MenuItem key={poultry} value={poultry} >
                                        <Checkbox checked={getStylesPoultry} />
                                        <ListItemText primary={poultry} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                </Grid>            
            </Grid> */}

        <Grid item sx={{ paddingTop: 5 }}>
            <Typography variant="h7" color="black" align='center' sx={{ fontFamily: 'Helvetica', paddingLeft: 4 }}>
				Household Disaster Information Table
			</Typography>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "23px" }} />
                    <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-simple-select-label">Durability of House</InputLabel>
                            <Select
                                name="durabilityOfHouse"
                                value={formValues.durabilityOfHouse}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Durability of House" />}
                                >
                                <MenuItem value="1">Concrete</MenuItem>
                                <MenuItem value="2">Semi-Concrete</MenuItem>
                                <MenuItem value="3">Light Materials</MenuItem>
                                <MenuItem value="2">Shanty</MenuItem>
                                <MenuItem value="3">Salvage Materials</MenuItem>
                            </Select>
                        </FormControl>

                    <Grid sx={{ width: 13, height: 20 }}/>
                </Grid>            
            </Grid>
        </Grid>

            <Grid container direction='row' justifyContent='flex-end' sx={{ paddingTop:5 }}>
                <Button variant="contained" type="submit" style={{ backgroundColor: 'primary' }}>
                    Submit
                </Button>       
            </Grid>
            
        </form>
    </Grid>
    
  )
}

export default FinancialInfo


