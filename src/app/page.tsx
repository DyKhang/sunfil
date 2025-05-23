import { Footer } from "@/components/Footer";
import { Header } from "@/components/header/Header";
import { Main } from "@/components/Main";
import { Voucher } from "@/components/Voucher";

export default function Home() {
  return (
    <>
      <Voucher />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
