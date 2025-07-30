import { useQuery as s, useQueryClient as a, useMutation as u } from "@tanstack/react-query";
import t from "@fruit-shop/infrastructure";
const d = () => s({
  queryKey: ["cart"],
  queryFn: () => t.getInstance().cart.getCart(),
  retry: 1,
  staleTime: 30 * 1e3,
  // 30 seconds
  placeholderData: {
    items: [],
    totalPrice: 0,
    totalItems: 0
  }
}), i = () => {
  const e = a();
  return u({
    mutationFn: (r) => t.getInstance().cart.addToCart(r),
    onSuccess: () => {
      e.invalidateQueries({ queryKey: ["cart"] });
    }
  });
}, y = () => {
  const e = a();
  return u({
    mutationFn: ({ productId: r, quantity: n }) => t.getInstance().cart.removeFromCart(r, n),
    onSuccess: () => {
      e.invalidateQueries({ queryKey: ["cart"] });
    }
  });
}, l = () => s({
  queryKey: ["products"],
  queryFn: () => t.getInstance().products.getAllProducts(),
  staleTime: 30 * 60 * 1e3,
  // 30 minutes cache
  gcTime: 30 * 60 * 1e3,
  // Keep in cache for 30 minutes after component unmount
  retry: 1,
  placeholderData: []
}), m = (e) => {
  var n;
  const r = [
    "products",
    "filtered",
    e.searchQuery || "",
    ((n = e.colors) == null ? void 0 : n.join(",")) || "",
    e.sortOrder || "name-asc"
  ];
  return s({
    queryKey: r,
    queryFn: () => t.getInstance().products.getFilteredProducts(e),
    staleTime: 30 * 60 * 1e3,
    // 30 minutes cache
    gcTime: 30 * 60 * 1e3,
    // Keep in cache for 30 minutes after component unmount
    retry: 1,
    placeholderData: []
  });
}, g = (e) => s({
  queryKey: ["product", e],
  queryFn: () => t.getInstance().products.getProductById(e),
  enabled: !!e,
  staleTime: 30 * 60 * 1e3,
  // 30 minutes cache
  gcTime: 30 * 60 * 1e3
  // Keep in cache for 30 minutes after component unmount
}), p = (e, r = !0) => s({
  queryKey: ["suggestions", e],
  queryFn: () => t.getInstance().products.searchProducts(e),
  enabled: r && e.length > 2,
  staleTime: 30 * 60 * 1e3,
  // 30 minutes cache
  gcTime: 30 * 60 * 1e3,
  // Keep in cache for 30 minutes after component unmount
  retry: 1,
  placeholderData: []
}), q = () => u({
  mutationFn: (e) => t.getInstance().user.updatePassword(e)
});
export {
  i as useAddToCart,
  d as useCart,
  m as useFilteredProducts,
  g as useProduct,
  p as useProductSuggestions,
  l as useProducts,
  y as useRemoveFromCart,
  q as useUpdatePassword
};
