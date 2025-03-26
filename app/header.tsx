import { Avatar, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid
      container
      sx={{
        pl: 15,
        pr: 15,
        pt: 3,
        pb: 3,
        zIndex: 2,
        position: "relative",
        backgroundColor: "#007ade",
      }}
    >
      <Grid container item alignItems={"center"} flex={5}>
        <Typography className="text-header">STAYKUY</Typography>
      </Grid>
      <Grid container item flex={3} justifyContent={"center"} alignItems={"center"} spacing={3}>
        <Grid item>
          <Typography className="text-header" fontSize={"13.5px"}>
            My Booking
          </Typography>
        </Grid>
        <Grid item>
          <Typography className="text-header" fontSize={"13.5px"}>
            Wishlist
          </Typography>
        </Grid>
        <Grid item>
          <Typography className="text-header" fontSize={"13.5px"}>
            Blog
          </Typography>
        </Grid>
        <Grid item>
          <Typography className="text-header" fontSize={"13.5px"}>
            Help
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        flex={1}
        justifyContent={"flex-end"}
        alignItems={"center"}
        spacing={1}
      >
        <Grid item>
          <Avatar>H</Avatar>
        </Grid>
        <Grid item>
          <Typography className="text-header" fontSize={"13.5px"}>
            Help
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
