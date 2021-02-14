import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-54K6D9WN1F"></script>
  <script>{
    () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      gtag('config', 'G-54K6D9WN1F');
    }
}</script>
    <script data-ad-client="ca-pub-3624282771754825" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <Component {...pageProps} />
  </>
}

export default MyApp
