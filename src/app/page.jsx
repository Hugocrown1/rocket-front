import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Featured />
      </main>
    </>
  );
}
