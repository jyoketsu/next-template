import { Footer } from "./footer";
import { Header } from "./header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-svh flex flex-col">
      <Header />

      <main className="flex-1 px-6">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
