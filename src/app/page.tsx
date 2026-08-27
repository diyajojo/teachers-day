import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        {/* The rest of the page is plain as requested */}
        <div className="max-w-2xl text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif text-pink-400">
            Welcome to Teacher's Day
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            A beautiful, plain section to honor and celebrate our wonderful teachers.
          </p>
        </div>
      </main>
    </div>
  );
}
