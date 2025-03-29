import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div className="w-full p-0 m-0">
      <main className="w-full min-h-[40vh] bg-[#e9ebe9] flex justify-center pt-10">
        <p className="text-4xl font-semibold text-center text-red-600">
          This is the main body
        </p>
      </main>
      <Footer />
    </div>
  );
}
