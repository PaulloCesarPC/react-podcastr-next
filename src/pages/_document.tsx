import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                </Head>
                <link rel="shortcut icon" href="favicon.png" type="image/png"/>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
//É chamado somente 1 vez na aplicação por isso é bom por as fontes.