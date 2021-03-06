import Document, { Head, Main, NextScript, Html } from 'next/document'

export default class MyDocument extends Document {

    static async getInitialProps(ctx:any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
      }

    render() {
        return (
            <Html>
                <Head>
                    <title>Improve English | Home</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}