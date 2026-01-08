export interface Product {
    id: string;
    title: string;
    price: number;
    currency: string;
    image: string;
    category: "Originals" | "Prints";
    description: string;
    available: boolean;
    dimensions?: string;
}

export const products: Product[] = [
    {
        id: "1",
        title: "Dog Only Knows",
        price: 450,
        currency: "USD",
        image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=2574&auto=format&fit=crop",
        category: "Originals",
        description: "An expressive portrait of a thoughtful dog, capturing the wisdom in his eyes. Oil on canvas.",
        available: true,
        dimensions: "12x16 inches",
    },
    {
        id: "2",
        title: "The Late Shift",
        price: 380,
        currency: "USD",
        image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2698&auto=format&fit=crop",
        category: "Originals",
        description: "A whimsical study of a cat working late into the night. Rich in texture and narrative.",
        available: true,
        dimensions: "10x12 inches",
    },
    {
        id: "3",
        title: "Morning Routine",
        price: 120,
        currency: "USD",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2698&auto=format&fit=crop",
        category: "Prints",
        description: "Limited edition print of the beloved 'Morning Routine' painting. Signed by the artist.",
        available: true,
        dimensions: "A3",
    },
    {
        id: "4",
        title: "Quiet Contemplation",
        price: 550,
        currency: "USD",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop",
        category: "Originals",
        description: "Soft lighting illuminates the subject in this peaceful composition. Oil on board.",
        available: true,
        dimensions: "16x20 inches",
    },
];
