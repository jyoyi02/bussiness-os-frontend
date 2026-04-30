import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

function Demo() {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>My awesome app</title>

                <ColorSchemeScript />
            </head>
            <body>{/* Your app here */}</body>
        </html>
    );
}

export default Demo;