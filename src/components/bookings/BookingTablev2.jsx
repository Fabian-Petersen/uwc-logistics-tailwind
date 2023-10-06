import Wrapper from "../../styleWrappers/stylesBookingTable";
import { format } from "date-fns";
import DataTable from "react-data-table-component";
import { toast } from "react-hot-toast";
import useBookingsQuery from "./useBookingsQuery";
import Spinner from "../features/Spinner";
// import useDeleteBookings from "./useDeleteBookings";
// import useUpdateBookings from "./useDeleteBookings";
// import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contextAPI";
// import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/data/icons";
import BookingTableMenu from "./BookingTableMenu";

const BookingTablev2 = () => {
  const { data = [], isLoading, error } = useBookingsQuery();
  // const { mutate: mutateDelete } = useDeleteBookings();
  // const { mutate: mutateUpdate } = useUpdateBookings();
  const {
    // updateBooking,
    // setUpdateBooking,
    openBookingTableMenu,
    setOpenBookingTableMenu,
    // setRowInfo,
    // rowInfo,
  } = useGlobalContext();
  // const navigate = useNavigate();

  const { faEllipsisVertical } = icons;

  const handleOpenMenu = (row) => {
    setOpenBookingTableMenu(row);
    // setRowInfo(row);
    // console.log(rowInfo);
    // toast.success("Succuessfully Updated");
    // setUpdateBooking();
  };

  //loop over the dates and format using date-fns

  if (data) {
    data.forEach((obj) => {
      obj.created_at = format(new Date(obj.created_at), "yyyy/MM/dd");
      // (obj.start_date = format(new Date(obj.start_date), "dd/MM/yyyy")),
      // (obj.return_date = format(new Date(obj.return_date), "dd/MM/yyyy"));
    });
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (data.length === 0) {
    return <h2>You have made no bookings to view</h2>;
  }

  if (error) {
    return <h2>Error loading bookings....</h2>;
  }

  // const newBookings = [];

  if (!data) {
    toast.error("data cannot be retrieved");
    return <h2>Data Cannot Be Retrieved</h2>;
  }

  // ================================================== Construct the columns for using the react data table with the newBookings array ========================= //

  const columns = [
    {
      name: "Created",
      selector: (row) => row.created_at,
      sortable: true,
    },
    {
      name: "Vehicle",
      selector: (row) => row.model,
    },
    {
      name: "Registration",
      selector: (row) => row.registration,
    },
    {
      name: "Reason",
      selector: (row) => row.reason,
    },
    {
      name: "Start Date",
      selector: (row) => row.start_date,
      sortable: true,
    },
    {
      name: "Return Date",
      selector: (row) => row.return_date,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <div className="action_menu_container">
            <button
              className="bookings_menu_icon"
              onClick={() => handleOpenMenu(row)}
            >
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
            {openBookingTableMenu === row && <BookingTableMenu row={row} />}
          </div>
        );
      },
      // ignoreRowClick: true,
      // allowOverflow: true,
      // button: true,
      width: "8rem",
    },
  ];

  return (
    <Wrapper>
      <DataTable
        columns={columns}
        data={data}
        pagination
        className="table_global"
        customStyles={customStyles}
        selectableRows
      />
    </Wrapper>
  );
};

const customStyles = {
  rows: {
    style: { width: "100%" },
  },

  headCells: {
    style: {
      fontSize: "1.5rem",
      fontWeight: "700",
      backgroundColor: "rgba(10, 110, 189, 0.85)",
      color: "#fff;",
      padding: "1.2rem",
    },
  },
  header: {
    style: {
      backgroundColor: "rgba(10, 110, 189, 0.85)",
    },
  },
  pagination: {
    backgroundColor: "transparent",
  },
  cells: {
    style: { backgroundColor: "#f8f6f4" },
  },
};

export default BookingTablev2;
