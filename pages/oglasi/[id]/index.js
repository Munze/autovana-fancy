import { useRouter } from "next/router";
import Link from "next/link";
import Breadcrumb from "../../../components/navigation/Breadcrumb";
import { BreadcrumbItem } from "../../../components/navigation/BreadcrumbItem";
import Image from "next/image";
import Carusel from "../../../components/cards/Carousel";

export default function PostPage({ data }) {
  const router = useRouter();
  const id = router.query.id;
  const model = data[0];
  return (
    <>
      <div className="w-full bg-white">
        <div className="flex flex-wrap container mx-auto">
          <div className="left-0">
            <h1 className="">
              <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/agencije-cene">
                  Automobili
                </BreadcrumbItem>
                <BreadcrumbItem href="/agencije-cene">Toyota</BreadcrumbItem>
                <BreadcrumbItem href="/">Auris</BreadcrumbItem>
              </Breadcrumb>
            </h1>
          </div>
          <div className="container flex mt-3">
            <div className="w-3/5 md:w-4/5 grid grid-cols-1 md:grid-cols-3 md:grid-flow-row-dense">
              <p className="font-bold">{model.trim}</p>
              <p className="font-bold">{model.make}</p>
              <p className="font-bold">{model.body}</p>
              <p className="font-bold">{model.drive}</p>
              <p className="font-bold">{model.gearbox}</p>
              <p className="font-bold">{model.engine_type}</p>
            </div>
            <div className="w-2/5 xs:w-1/5 mr-3 xs:mr-0">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUtXQMylZWIaR8GYpusI0mg6jk_oGydNQWYIlX0vL4RSV_XYgActhlUV9ZczVrw5IZZk&usqp=CAU"
                height="150px"
                width="225px%"
              />
            </div>
          </div>
          <div className="flex mx-3 my-2 max-w-[95%]">
            <div className="w-7/12 shadow-xs">
              <Carusel />
            </div>
            <div className="w-5/12 bg-gray-200 mx-2 rounded-md shadow-xs p-4 space-y-2 relative">
              <p className="font-bold text-3xl">Kontaktirajte prodavca</p>
              <p className="font-normal font-sans text-xl">
                Pozovite 011-123-4567
              </p>
              <footer className="absolute bottom-0 pb-3 mx-2">
              <p className="font-thin text-xs">
                By clicking here, you authorize Cars.com and its
                sellers/partners to contact you by text/calls which may include
                marketing and be by autodialer. Calls may be prerecorded. You
                also agree to our Privacy Statement. Consent is not required to
                purchase goods/services.
              </p>
            </footer>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://databases.one/api/?format=json&select=detail&make_id=16&model_id=1895&generation_id=418&trim_id=5620&api_key=80f5277bc597457b3992203bf"
  );
  const data = await res.json();

  return {
    props: {
      data: data.result,
    },
  };
}

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  return {
    paths: [{ params: { id: "123" } }],
    fallback: false, // can also be true or 'blocking'
  };
}
