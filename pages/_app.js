import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';

import Analytics from '../components/analytics';

import * as gtag from '../lib/gtag';
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    };

  }, [router.events]);

  return (
    <ThemeProvider>
      <Component {...pageProps } />
      <Analytics />
    </ThemeProvider>
  );
}