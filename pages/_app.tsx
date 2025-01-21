import { AppProps } from 'next/app';
import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import { PlasmicRootProvider, initPlasmicLoader } from '@plasmicapp/loader-nextjs';

// Charger les variables d'environnement depuis .env
const PLASMIC_PROJECT_ID = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID!;
const PLASMIC_API_TOKEN = process.env.NEXT_PUBLIC_PLASMIC_API_TOKEN!;

const plasmicLoader = initPlasmicLoader({
    projects: [
        {
            id: PLASMIC_PROJECT_ID,
            token: PLASMIC_API_TOKEN,
        },
    ],
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PlasmicRootProvider loader={plasmicLoader} loadingFallback={<div>Loading...</div>}>
            <Component {...pageProps} />
        </PlasmicRootProvider>
    );
}

export default MyApp;
