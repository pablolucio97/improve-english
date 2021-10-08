import GlobalStyles from '../styles/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import {americanTheme} from '../themes/main'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={americanTheme}>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
