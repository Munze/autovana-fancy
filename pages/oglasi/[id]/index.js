import { useRouter } from 'next/router'
import Link from 'next/link'


export default function PostPage() {
  const router = useRouter()
  const id = router.query.id 

  return (
    <>
      <div>
        <div>Breadcrumbs</div>
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
  )
}