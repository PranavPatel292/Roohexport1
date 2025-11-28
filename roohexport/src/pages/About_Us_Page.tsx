import { AuroraText } from "@/components/ui/aurora-text";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-stone-50 font-sans text-stone-800">
      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* --- HERO SECTION --- 
            Matches the top image in your screenshot with centered text 
        */}
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop"
            alt="Artisan working on fabric"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/90" />

          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col font-bold items-center justify-center text-center p-6">
            <h1 className="text-5xl md:text-7xl  font-serif text-white mb-4 tracking-tight">
              Our <AuroraText>Story</AuroraText>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-lg font-light">
              A legacy of craftsmanship, passion, and timeless beauty.
            </p>
          </div>
        </div>

        {/* --- TEXT CONTENT --- 
            Matches the clean text layout from the second screenshot
        */}
        <div className="max-w-4xl mx-auto px-8 py-16 md:py-24 space-y-16 md:space-y-24">
          {/* Section 1: The Legacy */}
          <section>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
              The Kaftan Legacy
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                Founded over two decades ago, our journey began as a small
                atelier where passion met craftsmanship. Specializing in
                exclusive silk and linen weaves, we sought to create pieces that
                capture moments of brilliance and timeless elegance.
              </p>
              <p>
                Today, we continue that tradition, creating garments that don't
                just adorn, but tell stories, celebrate milestones, and become
                part of your most cherished summer memories.
              </p>
            </div>
          </section>

          {/* Section 2: Our Craft */}
          <section>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
              Our Craft
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                Every piece begins with a vision and evolves through the skilled
                hands of our master artisans. We combine time-honored techniques
                with contemporary design sensibilities, ensuring each creation
                is both timeless and modern.
              </p>
              <p>
                From hand-selecting the finest fabrics to the final stitch, we
                oversee every step with meticulous attention to detail. Our
                commitment to quality means that each kaftan is not just
                clothing—it's an heirloom in the making.
              </p>
            </div>
          </section>

          {/* Section 3: Sustainability */}
          <section>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
              Sustainability & Ethics
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                We believe luxury should never come at the expense of our planet
                or its people. That's why we source our materials responsibly,
                working only with suppliers who share our commitment to ethical
                practices and environmental stewardship.
              </p>
            </div>
          </section>
        </div>

        {/* Minimal Footer (Consistent with your other pages) */}
        <footer className="mt-auto border-t border-stone-200 bg-white p-8 text-center text-stone-500 text-sm">
          <p>
            © 2024 Kaftan Collection. Timeless elegance, handcrafted with
            passion.
          </p>
        </footer>
      </main>
    </div>
  );
}
