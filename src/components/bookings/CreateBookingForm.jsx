import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormRowInput from "../features/FormRowInput";
import FormRowSelect from "../features/FormRowSelect";

// import vehicles from "../../assets/data/vehicleData";

const vehicles = [];
const CreateBookingForm = () => {
  const navigate = useNavigate();
  console.log(vehicles);
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/bookings");
  };

  // Insrt useForm hook here
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit} className="formStyle">
      <h2 className="section-title">Book a vehicle</h2>
      <div className="flex flex-col gap-2">
        <FormRowSelect
          name="model"
          myArray={vehicles}
          labelText="Select Vehicle"
          // defaultValues={rowInfo.model}
          // onChange={(e) => setVehicleSelected(e.target.value)}
          // itemSelected={vehicleSelected}
          // setItemSelected={setVehicleSelected}
          register={register}
          errors={errors}
        />
        <FormRowSelect
          name="registration"
          myArray={vehicles}
          labelText="Select Registration"
          // defaultValues={rowInfo.registration}
          // itemSelected={vehicleSelected}
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex_column">
          <FormRowInput
            type="date"
            name="start_date"
            labelText="Start Date"
            inputType="input"
            // defaultValues={rowInfo.start_date}
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex flex-col gap-1">
          <FormRowInput
            type="date"
            name="return_date"
            labelText="Return Date"
            inputType="input"
            // defaultValues={rowInfo.return_date}
            register={register}
            errors={errors}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex_column">
          <FormRowInput
            type="time"
            name="start_time"
            labelText="Start Time"
            inputType="input"
            // defaultValues={rowInfo.start_time}
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex_column">
          <FormRowInput
            type="time"
            name="return_time"
            labelText="Return Time"
            inputType="input"
            // defaultValues={rowInfo.return_time}
            register={register}
            errors={errors}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-3">
        <FormRowInput
          type="text"
          name="reason"
          labelText="Reason"
          inputType="textArea"
          className=""
          // defaultValues={rowInfo.reason}
          register={register}
          errors={errors}
        />
      </div>
      <button
        type="submit"
        className=" bg-blue-500 text-white tracking-wider btn-sm w-full rounded-sm"
      >
        SUBMIT
        {/* {isEditBooking ? "Edit Booking" : "Submit Booking"} */}
      </button>
    </form>
  );
};

export default CreateBookingForm;
