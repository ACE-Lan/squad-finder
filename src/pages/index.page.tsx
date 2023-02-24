import { GetServerSideProps } from 'next'

export { default } from './home'

// getServerSide only informations for SEO load image use lib "blur2hash"
export const getServerSideProps: GetServerSideProps = async () => {
  console.log('rodou')

  return {
    props: {
      list: [1, 2, 3],
    },
  }
}

// staticProps only in production

// export const getStaticProps: GetStaticProps = async () => {
//     await new Promise((resolve) => {
//       setTimeout(resolve, 5000);
//     });

//     console.log('rodou')

//     return {
//       props: {
//         list: [1, 2, 3],
//       },
//       revalidate: 60 * 60 * 2 = 2horas
//     };
//   };
