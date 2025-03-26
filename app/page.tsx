import { Box,  Grid, Typography } from "@mui/material"; 
import Header from "./header"; // Adjust the import according to your directory structure
import { SearchForm } from "./component/search-form";

interface City {
  id: number;
  name: string;
  country: string;
}

async function GetListCities(): Promise<City[]> {
  const res = await fetch("https://ota-gin.onrender.com/api/v1/cities"); 
  const data = await res.json();
  return data.data as City[];
}

const Home = async () => {
  const cities = await GetListCities();
  console.log("data", cities);

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

        <SearchForm cities={cities}/>
        
      </Grid>
    </Box>
  );
}

export default Home