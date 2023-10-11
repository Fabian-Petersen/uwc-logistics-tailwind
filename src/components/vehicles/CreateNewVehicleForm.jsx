import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormRowInput from "../features/FormRowInput";
import FormRowSelect from "../features/FormRowSelect";
import { toast } from "react-toastify";

//Import Vehicle Details
import departments from "../../assets/data/departments";
import { fuel, transmission } from "../../assets/data/vehicleData";

// import vehicles from "../../assets/data/vehicleData";

const CreateNewVehicleForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Vehicle Created Successfully");
    navigate("/vehicles_list");
  };

  // Insert useForm hook here
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit} className="formStyle">
      <h2 className="section-title">Create New Vehicle</h2>
      <div className="flex flex-col gap-2">
        <FormRowSelect
          name="department"
          myArray={departments}
          labelText="Department"
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex_column">
          <FormRowInput
            type="text"
            name="brand"
            labelText="Brand"
            inputType="input"
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex flex-col gap-1">
          <FormRowInput
            type="text"
            name="model"
            labelText="Model"
            inputType="input"
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex flex-col gap-1">
          <FormRowInput
            type="text"
            name="vin"
            labelText="Vin Number"
            inputType="input"
            register={register}
            errors={errors}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex_column">
          <FormRowInput
            type="date"
            name="year"
            labelText="Year"
            inputType="input"
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex_column">
          <FormRowInput
            type="text"
            name="registration"
            labelText="Registration"
            inputType="input"
            register={register}
            errors={errors}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-3">
        <div className="flex flex-col gap-2">
          <FormRowSelect
            name="fuel"
            myArray={fuel}
            labelText="Fuel"
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex flex-col gap-2">
          <FormRowSelect
            name="transmission"
            myArray={transmission}
            labelText="Transmission"
            register={register}
            errors={errors}
          />
        </div>
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

export default CreateNewVehicleForm;
