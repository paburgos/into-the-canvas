import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import Link from "next/link";
import { productService } from "@/services/productService";

export default async function Home() {
  const products = await productService.getAllProducts();
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20">
      <Navbar />
      <HeroSection />

      {/* Featured Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Creations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fresh from the easel. Explore the newest additions to the collection,
            featuring Alison&apos;s signature wit and warmth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {!product.available && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-white text-black px-3 py-1 text-sm font-bold uppercase">Sold Out</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
              <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground">
                {product.currency} ${product.price}
              </p>
              <p className="text-sm text-primary/70 mt-1">{product.category}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop" className="text-primary underline hover:text-primary/80 offset-4 decoration-2">
            View All Works
          </Link>
        </div>
      </section>

      {/* Story/About Teaser */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square relative overflow-hidden rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2671&auto=format&fit=crop"
              alt="Artist at work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Meet Alison</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Alison Friend is a storyteller at heart. Each piece invites the viewer into a whimsical world
              where animals take center stage. With a distinct blend of humor and warmth,
              Alison&apos;s work offers a quiet reminder of the magic and joy found in the everyday.
            </p>
            <Link href="/about" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors">
              Read Full Biography
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter / Footer placeholder */}
      <footer className="py-12 border-t text-center">
        <p className="text-sm text-muted-foreground">© 2026 Alison Friend. Into The Canvas.</p>
      </footer>
    </main>
  );
}
