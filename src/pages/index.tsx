import Head from 'next/head'
import Header from '~/components/Header'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Home - Rank Math Test</title>
      </Head>

      <div className="mx-auto">
        <Header />
      </div>
    </div>
  )
}
