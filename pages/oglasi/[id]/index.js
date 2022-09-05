import { useRouter } from "next/router";
import Link from "next/link";
import Breadcrumb from "../../../components/navigation/Breadcrumb";
import { BreadcrumbItem } from "../../../components/navigation/BreadcrumbItem";
import Image from "next/image";



export default function PostPage({ data }) {
  const router = useRouter();
  const id = router.query.id;
  const model=data[0]
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
            <div className="w-4/5">
              <p className="font-bold">{model.trim}</p>
              <p className="font-bold">{model.make}</p>
              <p className="font-bold">{model.body}</p>
              <p className="font-bold">{model.drive}</p>
              <p className="font-bold">{model.gearbox}</p>
              <p className="font-bold">{model.engine_type}</p>
            </div>
            <div className="w-2/5 md:w-1/5 mr-3 md:mr-0">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUtXQMylZWIaR8GYpusI0mg6jk_oGydNQWYIlX0vL4RSV_XYgActhlUV9ZczVrw5IZZk&usqp=CAU"
                height="150px"
                width="225px%"
              />
            </div>
          </div>
          <h1>Oglas: {id}</h1>
          <ul>
            <li>
              <Link href={`/oglasi/${3}`} passHref>
                <a>First comment</a>
              </Link>
            </li>
            <li>
              <Link href={`/oglasi/${0}`}>
                <a>Second comment</a>
              </Link>
            </li>
          </ul>
          <p>Hello, I'm the {router.asPath} page</p>
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
    paths: [{params:{id:'123'}}],
    fallback: false, // can also be true or 'blocking'
  };
}
