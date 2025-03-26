"use client";

import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface City {
  id: number;
  name: string;
  country: string;
}

interface SearchFormProps {
  cities: City[];
}

export const SearchForm = ({ cities }: SearchFormProps) => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [totalGuest, setTotalGuest] = useState<string>("");

  return (
    <Grid container mt={1.5}>
      <Grid item flex={0.3} />
      <Grid
        container
        item
        flex={2}
        spacing={1}
        sx={{ p: 3, borderRadius: 5, backgroundColor: "white" }}
      >
        <Grid container>
          <Grid item flex={1.5}>
            <Typography fontSize={"15px"}>
              Pilih Kota/Nama Hotel/Destinasi
            </Typography>
          </Grid>
          <Grid item flex={1.5}>
            <Typography fontSize={"15px"}>Tanggal Menginap</Typography>
          </Grid>
          <Grid item flex={1.5}>
            <Typography fontSize={"15px"}>Jumlah Tamu dan Kamar</Typography>
          </Grid>
          <Grid item flex={0.5} />
        </Grid>
        <Grid container spacing={2}>
          <Grid item flex={1.5}>
            <FormControl fullWidth>
              <Select
                displayEmpty
                size="small"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <MenuItem disabled value="">
                  <em>Pilih nama hotel/destinasi/kota menginap</em>
                </MenuItem>
                {cities.map((city) => (
                  <MenuItem key={city.id} value={city.name}>
                    {city.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item flex={1.5}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ boxSizing: "small" }}
                format="DD-MM-YYYY"
                minDate={dayjs()}
                value={selectedDate}
                onChange={(newDate: Dayjs | null) => setSelectedDate(newDate)}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item flex={1.5}>
            <TextField
              size="small"
              fullWidth
              placeholder="Masukan Jumlah Tamu dan Kamar"
              value={totalGuest}
              onChange={(e) => setTotalGuest(e.target.value)}
            />
          </Grid>
          <Grid container item flex={0.5} alignItems={"center"}>
            <Button variant="contained" size="small" fullWidth onClick={()=>localStorage.setItem()}>
              Cari Hotel
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item flex={0.3} />
    </Grid>
  );
};
