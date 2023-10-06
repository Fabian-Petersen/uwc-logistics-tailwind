import { useGlobalContext } from "../../contextAPI";
import { useNavigate } from "react-router-dom";
// import useReturnVehicle from "./useReturnVehicle";
import { toast } from "react-toastify";

const ReturnForm = () => {
  const { vehicles, token, setReturnVehicle, rowInfo } = useGlobalContext();

  // const { mutate: returnMutate } = useReturnVehicle();
  const navigate = useNavigate();

  //   const returnData = {
  //     booking_id: 1209,
  //     vehicle_id: "61",
  //     user_id: token?.user?.id,
  //     actual_end_date: "2023-07-13",
  //     actual_end_time: "14:30:00",
  //     status: "returned",
  //     end_km: "123543",
  //   };

  const handleChange = (e) => {
    setReturnVehicle((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
        user_id: token?.user.id,
        booking_id: rowInfo.id,
        vehicle_id: rowInfo.vehicle_id,
        status: "returned",
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("return successful");
    // returnMutate(returnVehicle, {
    //   onSuccess: (data) => {
    //     if (data) {
    //       toast.success("return successful");
    //     }
    //   },
    // });
    setReturnVehicle("");
    navigate("/bookings");
  };

  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <h2 className="section-title">Return Vehicle</h2>
      <div className="labelInputGroup">
        <div className="labelInputGroup">
          <label>Select Vehicle</label>
          <select
            name="vehicle"
            id="vehicles"
            placeholder="select vehicle"
            onChange={handleChange}
          >
            <option value="blank"></option>
            {vehicles.map((vehicle) => {
              const { id, registration } = vehicle;
              return (
                <option
                  key={id}
                  name="vehicle"
                  value={registration}
                  onChange={handleChange}
                >
                  {registration}
                </option>
              );
            })}
          </select>
        </div>
        <div className="labelInputGroup">
          <label htmlFor="end_km">End Kilometers</label>
          <input name="end_km" onChange={handleChange} />
        </div>
      </div>
      <div className="labelInputGroup mb-5">
        <div className="labelInputGroup">
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="actual_end_date" onChange={handleChange} />
        </div>
        <div className="labelInputGroup">
          <label htmlFor="endTime">End Time</label>
          <input type="time" name="actual_end_time" onChange={handleChange} />
        </div>
      </div>
      <button type="submit" className="formButton">
        Submit
      </button>
    </form>
  );
};

export default ReturnForm;
