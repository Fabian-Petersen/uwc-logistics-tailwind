import supabase from "../../config/supabaseClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useGlobalContext } from "../../contextAPI";

const useVehiclesQuery = () => {
  const { token } = useGlobalContext();
  const queryClient = useQueryClient();

  //$ The text must be capitalised for the database else it will return an empty array if the departments dont match

  const getVehicles = async (department) => {
    const { data, error } = await supabase
      .from("vehicles_actual")
      .select("*")
      .eq("department", department);

    if (error) {
      console.error(error);
      throw new Error("vehicles could not be loaded");
    }

    if (data) {
      // console.log(data);
    }

    return data;
  };

  const department = token?.user?.user_metadata?.department || [];

  const departmentCaps =
    department.charAt(0).toUpperCase() + department.slice(1);

  // getVehicles(departmentCaps);

  const { isLoading, error, data, isError } = useQuery({
    queryKey: ["vehiclesActual"],
    queryFn: () => getVehicles(departmentCaps),
  });

  //$ Prefetching the Vehicles Data
  queryClient.prefetchQuery({
    queryKey: ["vehiclesActual"],
    queryFn: () => getVehicles(departmentCaps),
  });

  return { isLoading, error, data, isError };
};

export default useVehiclesQuery;
