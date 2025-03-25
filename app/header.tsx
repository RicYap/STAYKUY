import { Avatar, Grid, Typography } from "@mui/material";

export default function Home() {
    return (
        <Grid container sx={{ pl:10, pr: 10, pt:3, pb: 3, zIndex:2, position:"relative", backgroundColor:"#007ade"}}>
            <Grid container item alignItems={"center"} flex={4}>
                <Typography className="text-header">STAYKUY</Typography>
            </Grid>
            <Grid container item flex={2}>
                <Grid container item flex={2} alignItems={"center"} justifyContent={"center"}>
                    <Typography className="text-header" fontSize={"13.5px"}>My Booking</Typography>
                </Grid>
                <Grid container item flex={1} alignItems={"center"} justifyContent={"center"}>
                    <Typography className="text-header" fontSize={"13.5px"}>Wishlist</Typography>
                </Grid>
                <Grid container item flex={1} alignItems={"center"} justifyContent={"center"}>
                    <Typography className="text-header" fontSize={"13.5px"}>Blog</Typography>
                </Grid>
                <Grid container item flex={1} alignItems={"center"} justifyContent={"center"}>
                    <Typography className="text-header" fontSize={"13.5px"}>Help</Typography>
                </Grid>
            </Grid>
            <Grid container item flex={2} spacing={2} justifyContent={"flex-end"}>
                <Grid container item flex={1} justifyContent={"flex-end"}>
                    <Avatar>H</Avatar>
                </Grid>
                <Grid container item flex={1} alignItems={"center"}>
                    <Typography className="text-header" fontSize={"13.5px"}>Help</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
  }