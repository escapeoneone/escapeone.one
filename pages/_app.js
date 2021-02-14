import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <div dangerouslySetInnerHTML={`
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-54K6D9WN1F"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
    
        gtag('config', 'G-54K6D9WN1F');
      </script>
  <!-- Yandex.Metrika counter -->
  <script type="text/javascript" >
     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
     ym(72405547, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
     });
  </script>
  <noscript><div><img src="https://mc.yandex.ru/watch/72405547" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  <!-- /Yandex.Metrika counter -->`}></div>
    <script data-ad-client="ca-pub-3624282771754825" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <Component {...pageProps} />
  </>
}

export default MyApp
