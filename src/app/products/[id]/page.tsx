import { Navbar } from "@/components/navbar";
import { productService } from "@/services/productService";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Check, Truck } from "lucide-react";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    const products = await productService.getAllProducts();
    return products.map((product) => ({
        id: product.id,
    }));
}

export async function generateMetadata({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await productService.getProductById(id);
    if (!product) return { title: "Product Not Found" };

    return {
        title: `${product.title} | Into The Canvas`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await productService.getProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background pb-24">
            <Navbar />

            <div className="container mx-auto px-4 pt-32">
                <Link
                    href="/shop"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Shop
                </Link>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image */}
                    <div className="relative aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.title}</h1>
                            <p className="text-xl text-primary/80">{product.currency} ${product.price}</p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                {product.description}
                            </p>

                            <ul className="space-y-2 text-sm text-muted-foreground border-y py-4">
                                <li className="flex items-center">
                                    <Check className="w-4 h-4 mr-2 text-green-600" />
                                    {product.category}
                                </li>
                                {product.dimensions && (
                                    <li className="flex items-center">
                                        <span className="w-4 h-4 mr-2 flex items-center justify-center font-bold text-xs border rounded-full">D</span>
                                        {product.dimensions}
                                    </li>
                                )}
                                <li className="flex items-center">
                                    <Truck className="w-4 h-4 mr-2" />
                                    Worldwide Shipping Available
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4">
                            {product.available ? (
                                <Button size="lg" className="w-full md:w-auto text-lg px-8 py-6">
                                    Add to Cart
                                </Button>
                            ) : (
                                <Button size="lg" variant="secondary" disabled className="w-full md:w-auto text-lg px-8 py-6">
                                    Sold Out
                                </Button>
                            )}
                            <p className="text-xs text-muted-foreground mt-4 text-center md:text-left">
                                Secure checkout powered by Stripe (Mock)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
