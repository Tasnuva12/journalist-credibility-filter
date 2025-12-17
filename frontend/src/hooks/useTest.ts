import { useQuery } from "@tanstack/react-query";
import { fetchTest } from "../lib/apis";

export function useTest() {
  return useQuery({
    queryKey: ["test"],
    queryFn: fetchTest,
  });
}
