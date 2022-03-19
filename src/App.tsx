import React, { Component } from 'react'
import "./App.css";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import faker from "@faker-js/faker";
import { Box, Container, AppBar, Toolbar, Typography, Grid, styled, Paper, Button } from "@mui/material";
import Select from 'react-select'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Chart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line data={data} options={options} />;
}

function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test Econ React-MUI App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function TestSelect() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return ( <Select options={options} /> );
}

function App() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      {TopBar()}
      {/* <header className="App-header">
          <title>
            Me
          </title>
        </header> */}

      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          {Chart()}
          asd
          asd
          asd
          <Button variant="contained" color="primary"> asd </Button>
        </Grid>
        <Grid item xs={6}>
          {TestSelect()}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
