import supabase from "../../config/supabaseClient";
import { useGlobalContext } from "../../contextAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const useBookingsQuery = () => {
  const { setCreateNewBooking } = useGlobalContext();

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    async (newData) => {
      const { data, error } = await supabase.from("booking").insert(newData);

      if (error) {
        console.log(error.message);
        toast.error("Your booking was unsuccessful");
      }

      if (data) {
        console.log(data);
      }

      return data;
    },
    {
      onSuccess: (data) => {
        if (data !== null) {
          toast.success("Your Booking Was Successful");
          // setTimeout(() => navigate("/bookings"), 3000);
          setCreateNewBooking("");
          // navigate("/dashboard");
        }
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },
    }
  );
  return { mutate };
};

export default useBookingsQuery;
