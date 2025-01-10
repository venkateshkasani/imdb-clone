import { useRouter } from "next/router"

const page = () => {
  const router = useRouter();
  const query = router.query.movieName;
  return (
    <div>Dynamic page of {query}</div>
  )
}

export default page