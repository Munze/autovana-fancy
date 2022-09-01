import { useRouter } from "next/router";
import Link from "next/link";
import Breadcrumb from "../../../components/navigation/Breadcrumb";
import { BreadcrumbItem } from "../../../components/navigation/BreadcrumbItem";

export default function PostPage() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <div>
        <div className="ml-10">
          <h1 className="mx-1 md:mx-2 lg:mx-3 mt-3 text-md md:text-md">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/agencije-cene">Agencije</BreadcrumbItem>
            </Breadcrumb>
          </h1>
        </div>
        <div className="container flex">
          <div className="w-4/5">Car data</div>
          <div className="w-1/5">Car Image</div>
        </div>
        <h1>Oglas: {id}</h1>
        <ul>
          <li>
            <Link href={`/oglasi/${3}`}>
              <a>First comment</a>
            </Link>
          </li>
          <li>
            <Link href={`/oglasi/${4}`}>
              <a>Second comment</a>
            </Link>
          </li>
        </ul>
        <p>Hello, I'm the {router.asPath} page</p>
      </div>
    </>
  );
}
