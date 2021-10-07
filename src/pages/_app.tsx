import GlobalStyles from '../styles/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import {americanTheme} from '../themes/main'
import {PostsProvider} from '../context/PostContext'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={americanTheme}>
      <PostsProvider>
      <GlobalStyles/>
      <Component {...pageProps} />
      </PostsProvider>
    </ThemeProvider>
  )
}

export default MyApp
