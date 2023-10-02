// import VehiclesTable from "../components/vehicles/VehiclesTable";
// import { useGlobalContext } from "../contextAPI";
// import CreateVehicleModalMulti from "../components/vehicles/CreateVehicleModalMulti";

const Vehicles = () => {
  // const { openVehicleModal } = useGlobalContext();
  const openVehicleModal = false;
  return (
    // {openVehicleModal ? <CreateVehicleModalMulti /> : ""}
    <main className={openVehicleModal ? "openModal" : "section_global"}>
      {/* <h1 className={openVehicleModal ? "openModal" : "section_title_global"}>
        Vehicles
      </h1> */}
      {/* <VehiclesTable /> */}
    </main>
  );
};

export default Vehicles;
