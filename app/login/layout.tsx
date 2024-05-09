export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="bg-background text-foreground">
        <div className="min-h-screen flex flex-col items-center">{children}</div>
      </section>
    );
  }
  