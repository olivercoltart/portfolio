import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-8 py-section">
      <p className="font-mono text-label text-muted mb-4">404</p>
      <h1 className="text-heading font-black tracking-tight mb-6">
        Page Not Found
      </h1>
      <p className="text-body text-muted mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button href="/">Go Home</Button>
    </main>
  );
}
