import React, { useState } from 'react'
import { FormLabel, FormControlLabel, FormControl, RadioGroup, Radio, Typography, Box } from "@mui/material";
import { Grid, TextField, Select, MenuItem, Slider, Button} from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

const defaultValues = {
    circumstance: "",
    needs: "",
    resources: "",
    assessment: "",
    recommendation: "",
    action: "",
  };

const SingleParentForm = () => {

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
				For Single Parent
			</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h7" color="black" align='center' sx={{ fontFamily: 'Helvetica' }}>
				Please fill in all the required fields correctly.
			</Typography>
        </Grid>


        <form onSubmit={handleSubmit} position='center'>
           
            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "30px" }} />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="circumstance"
                            label="Circumstance"
                            multiline
                            maxRows={5}
                            type="text"
                            sx={{ width: 730 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "30px" }} />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="needs"
                            label="Needs"
                            multiline
                            maxRows={4}
                            type="text"
                            sx={{ width: 730 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "30px" }} />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="resources"
                            label="Family Resources"
                            multiline
                            maxRows={4}
                            type="text"
                            sx={{ width: 730 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "30px" }} />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="assessment"
                            label="Assessment"
                            multiline
                            maxRows={4}
                            type="text"
                            sx={{ width: 730 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "30px" }} />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="recommendation"
                            label="Recommendation"
                            multiline
                            maxRows={4}
                            type="text"
                            sx={{ width: 730 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "30px" }} />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="action"
                            label="Action Taken"
                            multiline
                            maxRows={4}
                            type="text"
                            sx={{ width: 730}}
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

export default SingleParentForm