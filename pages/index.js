import Head from "next/head";
import { HomePageSearch } from "../components/HomePageSearch";
import { CarListLayout } from "../components/layouts/CarListLayout";



// const brend = brendovi
const model = [
  { label: "Audi", value: "1" },
  { label: "Alfa Romeo", value: "2" },
  { label: "Abarth", value: "3" },
  { label: "BMW", value: "4" },
  { label: "Daewoo", value: "5", disabled: true },
  { label: "Dodge", value: "6" },
  { label: "Dacia", value: "7" },
  { label: "Lada", value: "8" },
  { label: "Fiat", value: "9" },
];
const stanje = [
  { label: "Novo", value: "1" },
  { label: "Polovno", value: "2" },
  { label: "Osteceno", value: "3" },
];

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Autovana</title>
        <meta name="description" content="Autovana - najbolje mesto za pretragu ponuda automobila" />
        <meta name="theme-color" content="#1E34E0" ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto my-3">
        <div
          className="invisible md:visible bg-blue-300/10 bg-cover md:bg-cover rounded-md shadow-sm"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1484136540910-d66bb475348d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2153&q=80)",
          }}
        >
          <HomePageSearch  />
        </div>
        <CarListLayout />
      </div>
    </div>
  );
}
