'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
    const [mounted, setMounted] = useState(false);
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setMounted(true);

        // Create portal element if it doesn't exist
        let element = document.getElementById('portal-root');
        if (!element) {
            element = document.createElement('div');
            element.id = 'portal-root';
            document.body.appendChild(element);
        }

        setPortalElement(element);

        return () => setMounted(false);
    }, []);

    if (!mounted || !portalElement) {
        return null;
    }

    return createPortal(children, portalElement);
};
