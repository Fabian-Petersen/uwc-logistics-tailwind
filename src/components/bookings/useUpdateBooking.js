import { toast } from "react-hot-toast";
import supabase from "../../config/supabaseClient";
import { useMutation } from "@tanstack/react-query";

const useUpdateBooking = () => {
  //$ 1. Get the data of all the bookings made by the user in the database using the useBookingsQuery hook.
  // const { data: userBookings = [] } = useBookingsQuery();

  //$ 2. Get the id from the bookings table to insert the id of the column to be deleted.

  //$ 3. Use the mutate function to delete the data from the booking table once a user clicks on the cancel button.
  const { mutate } = useMutation(
    async (editData) => {
      console.log("hook data:", editData);
      const { data, error } = await supabase
        .from("booking")
        .update(editData)
        .eq("id", editData.id)
        .single();

      if (error) {
        console.error(error.message);
        toast.error("Your update was unsuccessful");
      }
      return data;
    },
    {
      onSuccess: (data) => {
        if (!data) {
          toast.success("Your booking was successfully updated");
        }
      },
    }
  );

  return { mutate };
};

export default useUpdateBooking;
