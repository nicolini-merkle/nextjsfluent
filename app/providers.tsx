'use client';

import React from 'react'
import {useServerInsertedHTML} from "next/navigation";
import {
    createDOMRenderer,
    FluentProvider,
    RendererProvider,
    renderToStyleElements,
    SSRProvider,
    webDarkTheme, webLightTheme, teamsDarkTheme, teamsLightTheme, teamsHighContrastTheme,
} from '@fluentui/react-components';

export function Providers({ children }: { children: React.ReactNode }) {
    const [renderer] = React.useState(() => createDOMRenderer());
    const didRenderRef = React.useRef(false);

    useServerInsertedHTML(() => {
        if (didRenderRef.current) {
            return;
        }
        didRenderRef.current = true;
        return <>{renderToStyleElements(renderer)}</>;
    });

    return (
        <RendererProvider renderer={renderer}>
            <SSRProvider>
                <FluentProvider theme={teamsDarkTheme}>
                    {children}
                </FluentProvider>
            </SSRProvider>
        </RendererProvider>
    );
}
