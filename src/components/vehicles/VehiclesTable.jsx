import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import vehiclesMockData from "../../assets/data/vehiclesMockData";
import { vehicleTableColumns } from "../../assets/data/TableColumns";

const VehiclesTable = () => {
  return (
    <div className="tableHeader md:w-[70rem] md:mx-auto h-[90%]">
      <header className="section-title">List of Vehicles</header>

      <DataGrid
        rows={vehiclesMockData}
        columns={vehicleTableColumns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 15, 25]}
        autoPageSize
        pagination
        pageSize={10}
        rowsPerPageOptions={[10, 15, 20]}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
};

export default VehiclesTable;
