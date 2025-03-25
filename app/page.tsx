// pages/index.tsx (or any other page)
import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"; 
import Header from "./header"; // Adjust the import according to your directory structure
// import { useState } from "react";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";

// Server-side fetching function

interface Cities{
  id: number,
  name: string,
  country: string,
}

const Home = async () => {
  const res = await fetch("https://ota-gin.onrender.com/api/v1/cities"); // Replace with your API endpoint
    const data = await res.json();
    const cities : Cities[] = data.data;
    console.log("data", cities);
    
  // const [selectedCity, setSelectedCity] = useState<string>("");
  // const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  // const [totalGuest, setTotalGuest] = useState<string>("");

  return (
    <Box className="background">
      <Box className="overlay" />
      
      <Header />

      <Grid container sx={{top:"30vh", position:"absolute", zIndex:2}}>
        <Grid container justifyContent={"center"}>
          <Typography className="text-header" fontSize={"30px"}>Staycation menjadi lebih mudah hanya dengan satu klik</Typography>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Typography className="text-header" fontSize={"30px"}>dan dapatkan banyak promo menarik</Typography>
        </Grid>

        <Grid container mt={1.5}>
          <Grid item flex={0.3}/>
          <Grid container item flex={2} spacing={1} sx={{p:3, borderRadius:5, backgroundColor:"white"}} >
            <Grid item flex={1.5}>
              <Grid container>
                <Typography fontSize={"15px"}>Pilih Kota/Nama Hotel/Destinasi</Typography>
              </Grid>
              <Grid container mt={0.5}>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    size="small"
                    // value={selectedCity}
                    // onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <MenuItem disabled value="">
                      <em>Pilih nama hotel/destinasi/kota menginap</em>
                    </MenuItem>
                    {cities.map((city)=>(
                      <MenuItem key={city.id} value={city.name}>{city.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {/* <Grid item flex={1}>
              <Grid container>
                <Typography fontSize={"15px"}>Tanggal Menginap</Typography>
              </Grid>
              <Grid container mt={0.5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}> 
                  <DatePicker
                    sx={{boxSizing:"small"}}
                    format="DD-MM-YYYY"
                    minDate={dayjs()}
                    value={selectedDate}
                    onChange={(newDate: Dayjs | null) => setSelectedDate(newDate)}
                    slotProps={{ textField: { size:"small", fullWidth:true } }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid> */}
            {/* <Grid item flex={1}>  
              <Grid container>
                <Typography fontSize={"15px"}>Jumlah Tamu dan Kamar</Typography>
              </Grid>
              <Grid container mt={0.5}>
                <TextField size="small" fullWidth placeholder="Masukan Jumlah Tamu dan Kamar" value={totalGuest} onChange={(e) => setTotalGuest(e.target.value)} />
              </Grid>
            </Grid> */}
            <Grid container item flex={0.5} alignItems={"center"}>
              <Button variant="contained" size="small" fullWidth>
                Cari Hotel
              </Button>
            </Grid>
          </Grid>
          <Grid item flex={0.3}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home