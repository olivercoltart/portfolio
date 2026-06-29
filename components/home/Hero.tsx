import Button from "@/components/ui/Button";
import Portrait from "@/components/home/Portrait";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-section">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-4xl">
          <p className="text-label font-medium tracking-widest uppercase text-muted mb-6">
            Software Engineer &amp; Product Developer
          </p>
          <h1 className="text-display font-black tracking-tighter leading-none mb-8">
            Oliver
            <br />
            Coltart
          </h1>
          <p className="text-subhead text-muted leading-relaxed max-w-2xl mb-10">
            A driven fullstack engineer with experience across the entire software development lifecycle,
            from speaking to customers and planning a solution, to building the final product.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/projects">View Projects</Button>
            <Button href="/about" variant="secondary">
              About Me
            </Button>
          </div>
        </div>
        <Portrait />
      </div>
    </section>
  );
}
