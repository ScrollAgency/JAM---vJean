import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

// Import the CSS required for SupabaseUppyUploader globally
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleRouteChange = () => {
            // Force a re-render to fix hydration issues
            router.replace(router.asPath);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);

    if (!isMounted) {
        return null; // Render nothing on the server
    }

    return <Component {...pageProps} />;
}

export default MyApp;