import { useQuery } from "react-query";
import { CityService } from "../api/CityService";

interface UseCityReturn {
  country: string | undefined;
  region: string | undefined;
  city: string | undefined;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export const useCity = (): UseCityReturn => {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryFn: () => CityService.fetch(),
    queryKey: ["city"],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    staleTime: Infinity,
  });

  return {
    country: data?.country,
    region: data?.regionName,
    city: data?.city,
    isError,
    isLoading,
    isSuccess,
  };
};
