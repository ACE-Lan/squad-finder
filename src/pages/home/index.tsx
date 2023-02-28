import { styled } from '@/styles/styles'

// <Link prefetch={false}> to navigate

const H1 = styled('h1', {
  background: '$black',
  color: 'White',
})

export default function Home(props: any) {
  return (
    <>
      <H1>Hello Word</H1>
      <div>{props.list}</div>
    </>
  )
}

