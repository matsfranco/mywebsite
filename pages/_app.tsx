import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

    <Script id="gaScript" strategy="lazyOnload"> {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
      });
    `}
    </Script>

    <Script id="msClarityScript" strategy="lazyOnload"> {`
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "db8cfs8j6i");
    `}
    </Script>

    <script type="text/javascript"> </script>
      <NextNProgress color="#E5383B"/>
      <Component {...pageProps} />
  
  </>)




  
}
