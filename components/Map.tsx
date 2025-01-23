import { HtmlContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints';
import React from 'react';

interface MapProps {
    src: string;
    className?: string;
}

const Map: React.FC<MapProps> = ({ src, className }) => {
    return <img src={src} className={className} alt="Map" />;
};

export default Map;