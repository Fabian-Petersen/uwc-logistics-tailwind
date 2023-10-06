import Wrapper from "../../styleWrappers/stylesBookingTableMenu";
import { useGlobalContext } from "../../contextAPI";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BookingTableMenu = ({ row = {} }) => {
  const { openBookingTableMenu, setOpenBookingTableMenu, setRowInfo } =
    useGlobalContext();
  const navigate = useNavigate();

  //$ Only close the menu half a second after the onMouseLeave event was called.
  const handleClose = () => {
    setTimeout(() => {
      setOpenBookingTableMenu(false);
    }, 500);
  };

  const handleCancel = () => {
    console.log(row);
    // mutateCancel(row);
    console.log("click cancel");
  };

  const handleUpdate = () => {
    // console.log(row);
    setRowInfo(row);
    navigate("/createbooking");
  };

  const handleReturn = () => {
    setRowInfo(row);
    navigate("/return");
    console.log("click return");
  };

  return (
    <Wrapper>
      <ul
        className={openBookingTableMenu ? "container" : "hidden"}
        onMouseLeave={handleClose}
      >
        <li>
          <button onClick={handleCancel}>Cancel</button>
        </li>
        <li>
          <button onClick={handleUpdate}>Update</button>
        </li>
        <li>
          <button onClick={handleReturn}>Return</button>
        </li>
      </ul>
    </Wrapper>
  );
};

BookingTableMenu.propTypes = {
  row: PropTypes.object,
};

export default BookingTableMenu;
