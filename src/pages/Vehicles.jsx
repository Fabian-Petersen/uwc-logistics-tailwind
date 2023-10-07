// import VehiclesTable from "../components/vehicles/VehiclesTable";
import { useGlobalContext } from "../contextAPI";
// import CreateVehicleModalMulti from "../components/vehicles/CreateVehicleModalMulti";

const Vehicles = () => {
  const { openVehicleModal } = useGlobalContext();

  return (
    <main className="border border-red-500">
      {/* {openVehicleModal ? <CreateVehicleModalMulti /> : ""} */}
      <h1 className={openVehicleModal ? "openModal" : "section-title"}>
        Vehicles
      </h1>
      <section className={openVehicleModal ? "openModal" : "section_global"}>
        {/* <VehiclesTable /> */}
      </section>
    </main>
  );
};

export default Vehicles;
