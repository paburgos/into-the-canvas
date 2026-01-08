import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { productService } from "@/services/productService";

export const metadata = {
    title: "Shop | Into The Canvas",
    description: "Browse original oil paintings and prints by Alison Friend.",
};

export default async function ShopPage() {
    const products = await productService.getAllProducts();

    return (
        <main className="min-h-screen bg-background pb-24">
            <Navbar />

            {/* Header */}
            <div className="pt-32 pb-12 text-center container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">The Collection</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore the full range of original works and limited edition prints.
                </p>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <Link
                        href={`/products/${product.id}`}
                        key={product.id}
                        className="group cursor-pointer block"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4 transition-all duration-300 group-hover:shadow-lg">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {!product.available && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <span className="bg-white text-black px-3 py-1 text-sm font-bold uppercase">Sold Out</span>
                                </div>
                            )}
                        </div>
                        <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                            {product.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {product.currency} ${product.price}
                        </p>
                        <p className="text-xs text-primary/60 mt-1 uppercase tracking-wider">{product.category}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
