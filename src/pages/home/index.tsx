import { styled } from '@/styles/styles'

// <Link prefetch={false}> to navigate

// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
