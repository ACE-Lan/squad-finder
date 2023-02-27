import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

export default function Room() {
  const { isFallback } = useRouter()
  const { query } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return <h1>Room {query.id}</h1>
}

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string }
> = async ({ params }) => {
  const paramsId = params?.id

  console.log(paramsId)

  return {
    props: {
      users: [1, 2, 3],
    },
  }
}

// if i need use staticProps with params
// use staticPaths to identify params

// export const getStaticPaths: GetStaticPaths = async () => {

//   return {
//     paths: [
//       {
//         params: {id: '123'}
//       }
//     ],
//     fallback: false, -> fallback true for new params
//   }
// }
