export const useProductStore = defineStore('product', {
  state: () => ({
    productsLoading: false,
    categoriesLoading: false,
    products: [],
    categories: [],
  }),
  actions: {
    setState(state, value) {
      this[state] = value;
    },
    setProducts(products) {
      this.products = products;
    },
    setCategories(categories) {
      this.categories = categories;
    },
    async fetchProducts(limit, sort) {
      this.setState('productsLoading', true);
      try {
        const data = await $fetch('/api/products', {
          params: {
            limit,
            sort,
          },
        });

        if (data) {
          this.setProducts(data);
        }
      } catch (error) {
        this.setProducts([]);
      } finally {
        this.setState('productsLoading', false);
      }
    },
    async fetchCategories(limit, sort) {
      this.setState('categoriesLoading', true);
      try {
        const data = await $fetch('/api/products/categories', {
          params: {
            limit,
            sort,
          },
        });

        if (data) {
          this.setCategories(data);
        }
      } catch (error) {
        this.setCategories([]);
      } finally {
        this.setState('categoriesLoading', false);
      }
    },
  },
});
