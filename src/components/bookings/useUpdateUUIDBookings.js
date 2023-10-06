import supabase from "../../config/supabaseClient";
import { useMutation } from "@tanstack/react-query";
import useAllBookingsQuery from "./useAllBookingsQuery";

const useUpdateUUIDBookings = () => {
  //$ 1. Get the data of all the bookings in the database using the allbookings hook.
  const { data: allBookings = [] } = useAllBookingsQuery();

  //$ 2. Get the id from the bookings table to insert the UUID to be updated.
  const arrayOfIds = allBookings.map((booking = 0) => booking?.id);
  const lastBookingId = Math.min(...arrayOfIds);
  console.log(lastBookingId);
  //$ 3. Use the mutate function to update the data once a booking is made and pass the uuid into the hook from the createBooking page. The uuid is from the login token of the user.
  const { mutate = 0 } = useMutation(
    async (uuid) => {
      const { data, error } = await supabase
        .from("booking")
        .update({ user_id: uuid })
        .eq("id", lastBookingId + 1)
        .single();

      if (error) {
        console.error(error.message);
      }
      return data;
    },
    {
      onError: (err) => {
        console.log(err.message);
      },
    }
  );
  return { mutate };
};

export default useUpdateUUIDBookings;
