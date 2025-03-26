import { Box, Grid, Typography } from "@mui/material";
import Header from "./header";
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

  const handleSearch = async (searchData: any) => {
    "use server";

    try {
      const queryParams = new URLSearchParams();

      if (searchData.cityId) queryParams.append("city_id", searchData.cityId);
      if (searchData.date)
        queryParams.append("date", searchData.date);
      if (searchData.rooms)
        queryParams.append("rooms_count", searchData.rooms.toString());

      const url = `https://ota-gin.onrender.com/api/v1/hotels/search?${queryParams.toString()}`;

      console.log("url", url);
      

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Search result:", result);
      return result;
    } catch (error) {
      console.error("Error during search:", error);
      throw error;
    }
  };

  return (
    <Box className="background">
      <Box className="overlay" />

      <Header />

      <Grid container sx={{ top: "30vh", position: "absolute", zIndex: 2 }}>
        <Grid container justifyContent={"center"}>
          <Typography className="text-header" fontSize={"30px"}>
            Staycation menjadi lebih mudah hanya dengan satu klik
          </Typography>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Typography className="text-header" fontSize={"30px"}>
            dan dapatkan banyak promo menarik
          </Typography>
        </Grid>

        <SearchForm cities={cities} onSearch={handleSearch} />
      </Grid>
    </Box>
  );
};

export default Home;
