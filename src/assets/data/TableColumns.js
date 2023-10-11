const bookingTableColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "created",
    headerName: "Created",
    minWidth: 150,
    maxWidth: 250,
  },
  {
    field: "Reason",
    headerName: "Reason",
    minWidth: 300,
    maxWidth: 500,
  },
  {
    field: "driver",
    headerName: "Driver",
    minWidth: 200,
    maxWidth: 300,
  },
  {
    field: "start_time",
    headerName: "Time Booked",
    type: "time",
    minWidth: 150,
    maxWidth: 250,
  },
  {
    field: "end_time",
    headerName: "Time Return",
    minWidth: 150,
    maxWidth: 250,
  },
];

const vehicleTableColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "brand",
    headerName: "Brand",
    minWidth: 150,
    maxWidth: "250",
  },
  {
    field: "model",
    headerName: "Model",
    minWidth: 150,
    maxWidth: 250,
  },
  {
    field: "registration",
    headerName: "Registration",
    minWidth: 150,
    maxWidth: 250,
  },
  {
    field: "vin",
    headerName: "Vin Number",
    minWidth: 300,
    maxWidth: 500,
  },
  {
    field: "department",
    headerName: "Department",
    minWidth: 250,
    maxWidth: 350,
  },
  {
    field: "year",
    headerName: "Year",
    minWidth: 150,
    maxWidth: 250,
  },
  {
    field: "transmission",
    headerName: "Transmission",
    minWidth: 150,
    maxWidth: 250,
  },
  {
    field: "fuel",
    headerName: "Fuel Type",
    minWidth: 150,
    maxWidth: 250,
  },
];

export { bookingTableColumns, vehicleTableColumns };
