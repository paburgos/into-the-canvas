import { Navbar } from "@/components/navbar";

export const metadata = {
    title: "About Alison Friend | Into The Canvas",
    description: "Learn more about the artist Alison Friend.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <Navbar />

            <div className="container mx-auto px-4 pt-32 max-w-3xl space-y-8 text-center md:text-left">
                <h1 className="text-4xl font-bold">About the Artist</h1>

                <div className="aspect-video relative rounded-xl overflow-hidden bg-gray-200">
                    <img
                        src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2671&auto=format&fit=crop"
                        alt="Artist Studio"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                        Welcome to Alison Friend&apos;s world of animals, a singular and very special place crafted by an artist with a unique gift for capturing &quot;character&quot; in its purest form. Using oil paint, techniques of the Old Masters, and an imagination like no other, Alison creates portraits where animals come alive with personality and charm.
                    </p>
                    <p>
                        With their big expressive eyes, endearing habits, and childlike pleasures, her characters seem all too human yet fantastically animal.
                    </p>
                    <p>
                        Alison is a storyteller at heart. Each piece invites the viewer into a whimsical world where animals take centre stage. With a distinct blend of humour and warmth, Alison&apos;s work offers a quiet reminder of the magic and joy found in the everyday.
                    </p>
                </div>
            </div>
        </main>
    );
}
