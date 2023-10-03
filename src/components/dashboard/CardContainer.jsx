import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardData from "../../assets/data/cardData";
// import useBookingsQuery from "../../components/bookings/useBookingsQuery";
// import useVehiclesQuery from "../../components/vehicles/useVehiclesQuery";

const CardContainer = () => {
  // const { data: bookings } = useBookingsQuery();
  // const { data: vehicles } = useVehiclesQuery();

  return (
    <div className="flex flex-wrap p-4 gap-4">
      {cardData.map((card, index) => {
        const { name, stat, icon } = card;
        return (
          <div key={index} className="card flex-grow">
            <span className="flex justify-center items-center relative before:content-[''] before:p-4 before:absolute before:w-12 before:h-12 before:rounded-full before:border-2 before:border-base-content">
              <FontAwesomeIcon className="w-6 h-6" icon={icon} />
            </span>
            <div className="flex gap-2 justify-center">
              <h3 className="text-[1rem]">{name} :</h3>
              <p className="text-[1rem]">{stat}</p>
            </div>

            {/* <p>{(bookings && bookings.length) || 0}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
