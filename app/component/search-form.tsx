"use client";

import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface City {
  id: number;
  name: string;
  country: string;
}

interface SearchFormProps {
  cities: City[];
  onSearch: (searchData: any) => Promise<any>;
}

export const SearchForm = ({ cities, onSearch }: SearchFormProps) => {
  const [date, setDate] = useState<Dayjs | null>(null);

  const [searchData, setSearchData] = useState({
    cityId: "",
    date: "",
    rooms: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await onSearch(searchData);

      console.log("Search successful:", result);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

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
                value={searchData.cityId}
                onChange={(e) =>
                  setSearchData({ ...searchData, cityId: e.target.value })
                }
              >
                <MenuItem disabled value="">
                  <em>Pilih nama hotel/destinasi/kota menginap</em>
                </MenuItem>
                {cities.map((city) => (
                  <MenuItem key={city.id} value={city.id}>
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
                value={date}
                onChange={(newDate: Dayjs | null) => {
                  setDate(newDate);
                  setSearchData({
                    ...searchData,
                    date: dayjs(newDate).format("YYYY-MM-DD"),
                  });
                }}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item flex={1.5}>
            <TextField
              size="small"
              fullWidth
              placeholder="Masukan Jumlah Tamu dan Kamar"
              value={searchData.rooms}
              onChange={(e) =>
                setSearchData({
                  ...searchData,
                  rooms: e.target.value,
                })
              }
            />
          </Grid>
          <Grid container item flex={0.5} alignItems={"center"}>
            <Button
              variant="contained"
              size="small"
              fullWidth
              onClick={(e) => handleSubmit(e)}
            >
              Cari Hotel
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item flex={0.3} />
    </Grid>
  );
};
