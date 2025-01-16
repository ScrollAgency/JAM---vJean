import type { AppProps } from 'next/app';
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import { PlasmicRootProvider, initPlasmicLoader } from "@plasmicapp/loader-nextjs";

const PLASMIC_PROJECT_ID = "f7DE9y7qp46fyCw5nuY8f9"; // Replace with your Plasmic Project ID
const PLASMIC_API_TOKEN = "MbfTgnLngWKW6r2sjjKszD0QR0IEyjlKb6jfrxGaXXvu2ahBO3RaSu8TdfJCVSazD06yVW3tXJeOldNd0kw"; // Replace with your Plasmic API Token

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
        <PlasmicRootProvider loader={plasmicLoader}>
            <Component {...pageProps} />
        </PlasmicRootProvider>
    );
}

export default MyApp;
