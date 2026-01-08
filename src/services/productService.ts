import { products, Product } from "@/data/products";

export const productService = {
    getAllProducts: async (): Promise<Product[]> => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 100));
        return products;
    },

    getProductsByCategory: async (category: "Originals" | "Prints"): Promise<Product[]> => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        return products.filter((p) => p.category === category);
    },

    getProductById: async (id: string): Promise<Product | undefined> => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        return products.find((p) => p.id === id);
    },
};
