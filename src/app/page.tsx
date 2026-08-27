import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d9bbf9] via-[#ecbbf1] to-[#fbcfe8] flex flex-col overflow-hidden relative">
      <Navbar />
      <Hero />
    </div>
  );
}
