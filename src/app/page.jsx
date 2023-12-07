import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <div className="flex flex-col my-16 gap-2 justify-center items-center">
          <h2 className="font-bold text-4xl text-center">DESTACADOS</h2>
          <div className="w-[100px] bg-black h-[5px] rounded-md"></div>
        </div>
        <Featured />
      </main>
    </>
  );
}
