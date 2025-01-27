import React from 'react';

interface FooterLinkProps {
    href: string;
    text: string;
    className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
    return (
        <a href={href} className="footer-link">
            {text}
        </a>
    );
};

export default FooterLink;