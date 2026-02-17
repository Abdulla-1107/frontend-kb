import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "./api";

export const useProduct = (props?: any) => {
  const queryClient = useQueryClient();

  const getProduct = useQuery({
    queryKey: ["products"], // ✅ "products" (ko'plik)
    queryFn: () =>
      api.get("/product", { params: props }).then((res) => {
        console.log("API response:", res.data, typeof res.data); // ← shu qatorni qo'shing
        return res.data;
      }),
  });
  const createProduct = useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await api.post("/product", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] }); // ✅
    },
  });

  const deleteProduct = useMutation({
    mutationFn: async (id: string) => {
      const { data } = await api.delete(`/product/${id}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] }); // ✅
    },
  });
  const getProductById = (id: string) =>
    useQuery({
      queryKey: ["product", id],
      queryFn: () => api.get(`/product/${id}`).then((res) => res.data),
    });

  return { getProduct, createProduct, deleteProduct, getProductById };
};
