import h from "axios";
class d extends Error {
  constructor(t, s, e) {
    super(s), this.status = t, this.code = e, this.name = "ApiException";
  }
}
class l {
  constructor(t, s = 1e4) {
    this.axiosInstance = h.create({
      baseURL: t,
      timeout: s,
      headers: {
        "Content-Type": "application/json"
      }
    }), this.setupInterceptors();
  }
  setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (t) => {
        const s = this.getAuthToken();
        return s && (t.headers.Authorization = `Bearer ${s}`), t;
      },
      (t) => Promise.reject(t)
    ), this.axiosInstance.interceptors.response.use(
      (t) => t.data,
      (t) => {
        var o, i, c, p, u;
        const s = ((o = t.response) == null ? void 0 : o.status) || 500, e = ((c = (i = t.response) == null ? void 0 : i.data) == null ? void 0 : c.message) || t.message || "An error occurred", a = (u = (p = t.response) == null ? void 0 : p.data) == null ? void 0 : u.code;
        throw new d(s, e, a);
      }
    );
  }
  getAuthToken() {
    return typeof window < "u" ? localStorage.getItem("authToken") : null;
  }
  buildConfig(t) {
    return {
      headers: t == null ? void 0 : t.headers,
      params: t == null ? void 0 : t.params,
      timeout: t == null ? void 0 : t.timeout
    };
  }
  async get(t, s) {
    return this.axiosInstance.get(t, this.buildConfig(s));
  }
  async post(t, s, e) {
    return this.axiosInstance.post(t, s, this.buildConfig(e));
  }
  async put(t, s, e) {
    return this.axiosInstance.put(t, s, this.buildConfig(e));
  }
  async delete(t, s) {
    return this.axiosInstance.delete(t, this.buildConfig(s));
  }
}
class C {
  constructor(t) {
    this.httpClient = t;
  }
  async getAllProducts() {
    return (await this.httpClient.get("/products")).data || [];
  }
  async getProductById(t) {
    return (await this.httpClient.get(`/products/${t}`)).data;
  }
  async searchProducts(t) {
    return (await this.httpClient.get(
      `/suggestions?searchQuery=${encodeURIComponent(t)}`
    )).data || [];
  }
  async getFilteredProducts(t) {
    const s = new URLSearchParams();
    t.searchQuery && s.append("search", t.searchQuery), t.colors && t.colors.length > 0 && s.append("colors", t.colors.join(",")), t.sortOrder && s.append("sort", t.sortOrder);
    const e = s.toString(), a = e ? `/products?${e}` : "/products";
    return (await this.httpClient.get(a)).data || [];
  }
}
class m {
  constructor(t) {
    this.httpClient = t;
  }
  async getCart() {
    return (await this.httpClient.get("/cart")).data || { items: [], totalPrice: 0, totalItems: 0 };
  }
  async addToCart(t) {
    return (await this.httpClient.post("/cart", t)).data || { items: [], totalPrice: 0, totalItems: 0 };
  }
  async removeFromCart(t, s) {
    return (await this.httpClient.post("/cart/remove", {
      productId: t,
      quantity: s
    })).data || { items: [], totalPrice: 0, totalItems: 0 };
  }
}
class y {
  constructor(t) {
    this.httpClient = t;
  }
  async updatePassword(t) {
    await this.httpClient.put("/user/password", t);
  }
}
class r {
  constructor() {
    const t = typeof window < "u" ? "/api" : `http://localhost:${process.env.PORT || 3001}/api`;
    this.httpClient = new l(t), this.products = new C(this.httpClient), this.cart = new m(this.httpClient), this.user = new y(this.httpClient);
  }
  static getInstance() {
    return r.instance || (r.instance = new r()), r.instance;
  }
}
export {
  d as ApiException,
  l as AxiosHttpClient,
  m as CartRepository,
  C as ProductRepository,
  y as UserRepository,
  r as default
};
