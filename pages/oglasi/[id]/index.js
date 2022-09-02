import { useRouter } from "next/router";
import Link from "next/link";
import Breadcrumb from "../../../components/navigation/Breadcrumb";
import { BreadcrumbItem } from "../../../components/navigation/BreadcrumbItem";
import Image from "next/image";

export default function PostPage() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <div className="w-full bg-white">
        <div className="flex flex-wrap container mx-auto">
          <div className="left-0">
            <h1 className="">
              <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/agencije-cene">Automobili</BreadcrumbItem>
                <BreadcrumbItem href="/agencije-cene">Toyota</BreadcrumbItem>
                <BreadcrumbItem href="/">Auris</BreadcrumbItem>
              </Breadcrumb>
            </h1>
          </div>
          <div className="container flex">
            <div className="w-4/5">Car data</div>
            <div className="w-1/5">
              <Image
              src="https://3dmdb.com/t/563164.jpg"
             height="150px"
             width="150px"
              />
            </div>
          </div>
          <h1>Oglas: {id}</h1>
          <ul>
            <li>
              <Link href={`/oglasi/${3}`}>
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
