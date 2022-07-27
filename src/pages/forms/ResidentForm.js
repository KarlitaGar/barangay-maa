import React, { useState } from "react";
import { FormLabel, FormControlLabel, FormControl, RadioGroup, Radio, Typography } from "@mui/material";
import { Grid, TextField, Select, MenuItem, Slider, Button} from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';


const defaultValues = {
    mname: "",
    lname: "",
    ename: "",
    fname: "",
    address: "",
    gender: "",
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
  
const ResidentForm = () => {

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

  return (
    <Grid container direction='column' alignItems='center' sx={{ width: '1000px', height: 950, border: '1px solid red', borderRadius: 3 }}>
        <Grid item sx={{ paddingTop: 5}}>
            <Typography variant="h4" color="black" align="center" sx={{ fontFamily: 'Helvetica', fontWeight: 200 }}>
				For Residents
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
                        name="lname"
                        label="Last Name"
                        type="text"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                    <Grid sx={{ width: 30, height: 20 }}/>
                    <TextField
                        id="name-input"
                        name="fname"
                        label="First Name"
                        type="text"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "30px" }} />
                    <TextField
                        id="name-input"
                        name="mname"
                        label="Middle Name"
                        type="text"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                    <Grid sx={{ width: 30, height: 20 }}/>
                    <TextField
                        id="name-input"
                        name="ename"
                        label="Extended Name"
                        type="text"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>

                <Grid item>
                    <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "30px" }} />
                        <TextField
                            id="name-input"
                            name="address"
                            label="Address"
                            type="text"
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
                        <InputLabel id="demo-simple-select-label">Relationship to Household Head</InputLabel>
                            <Select
                                name="relationship"
                                value={formValues.relationship}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Relationship to Household Head" />}
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
                        <InputLabel id="demo-simple-select-label">Civil Status</InputLabel>
                            <Select
                                name="status"
                                value={formValues.status}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Civil Status" />}
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
                    <div style={{ width: "30px" }} />
                    <FormControl sx={{ width: 400 }}>
                    <InputLabel id="demo-simple-select-label">Differently Able</InputLabel>
                        <Select
                        name="pwd"
                        value={formValues.pwd}
                        onChange={handleInputChange}
                        input={<OutlinedInput label="Differently Able" />}
                        >
                        <MenuItem value="1">None</MenuItem>
                        <MenuItem value="2">Communication Disability</MenuItem>
                        <MenuItem value="3">Visual Disability</MenuItem>
                        <MenuItem value="4">Learning Disability</MenuItem>
                        <MenuItem value="5">Chronic Illness</MenuItem>
                        <MenuItem value="6">Intellectual Disability</MenuItem>
                        <MenuItem value="7">Orthopedic Disability</MenuItem>
                        <MenuItem value="8">Mental/Psychological Disability</MenuItem>
                        <MenuItem value="9">Psychosocial Disability</MenuItem>
                        </Select>
                    </FormControl>

                    <Grid sx={{ width: 30, height: 20 }}/>
                    
                    <TextField
                        id="name-input"
                        name="religion"
                        label="Religion"
                        type="text"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "30px" }} />
                    <TextField
                        id="name-input"
                        name="sourceOfIncome"
                        label="Source of Income"
                        type="text"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                    <Grid sx={{ width: 30, height: 20 }}/>
                    <TextField
                        id="name-input"
                        name="otherIncome"
                        label="Other Source of Income"
                        type="text"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "30px" }} />
                    <TextField
                        id="income"
                        name="income"
                        label="Income per Month"
                        type="number"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />

                    <Grid sx={{ width: 30, height: 20 }}/>

                    <FormControl>
                        <FormLabel>Solo Parent</FormLabel>
                            <RadioGroup
                            name="soloparent"
                            value={formValues.soloparent}
                            onChange={handleInputChange}
                            row
                            >
                            <FormControlLabel
                                key="1"
                                value="1"
                                control={<Radio size="small" />}
                                label="No"
                            />
                            <FormControlLabel
                                key="2"
                                value="2"
                                control={<Radio size="small" />}
                                label="Yes"
                            />
                            </RadioGroup>
                        </FormControl>

                        <Grid sx={{ width: 50, height: 20 }}/>

                        <FormControl>
                            <FormLabel>Registered Voter</FormLabel>
                            <RadioGroup
                            name="voter"
                            value={formValues.voter}
                            onChange={handleInputChange}
                            row
                            >
                            <FormControlLabel
                                key="1"
                                value="1"
                                control={<Radio size="small" />}
                                label="No"
                            />
                            <FormControlLabel
                                key="2"
                                value="2"
                                control={<Radio size="small" />}
                                label="Yes"
                            />
                            </RadioGroup>
                        </FormControl>
                </Grid>
            </Grid>


            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "30px" }} />
                    <TextField
                        id="name-input"
                        label="Native Ethnicity"
                        type="text"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                    <Grid sx={{ width: 30, height: 20 }}/>
                    <TextField
                        id="name-input"
                        label="Native Dialect"
                        type="text"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
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

export default ResidentForm