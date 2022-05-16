import Head from 'next/head'

export default function HeadTag({children}) {
    return (
        <Head>
          <meta charSet="utf-8" />
          {children}
          <link rel="icon" href='/img/logo.svg' type="image/svg" />
          <meta name="description" content="I'm Abraham Espinosa, a Tech passionate and Frontend Developer" />
          <meta name="keywords" content="Abraham, Espinosa, Web, Frontend, Developer, Software, Mérida, Ciudad del Carmen, Website, Portfolio, Web Developer, Abraham Espinosa Mendoza" />
          <meta property="og:url" content="https://abrahamespinosa.mx" />
          <meta property="og:title" content="Abraham Espinosa | Frontend Developer" />
          <meta property="og:image" content="https://abrahamespinosa.mx/img/logo.png" />
          <meta property="og:description" content="I'm Abraham Espinosa, a Tech passionate and Frontend Developer" />
        </Head>
    )
}