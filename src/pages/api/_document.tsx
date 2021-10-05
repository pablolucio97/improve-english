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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}