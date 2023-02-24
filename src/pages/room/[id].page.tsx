import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

export default function Room() {
  const { query } = useRouter()

  return <h1>Room {query.id}</h1>
}

export const getServerSideProps: GetServerSideProps<any, {id: string}> = async ({
  params
}) => {
  const paramsId = params?.id

  console.log(paramsId)

  return {
    props: {
      users: [1, 2, 3],
    },
  }
}
