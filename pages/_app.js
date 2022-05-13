import '@ivteplo/utilities.css/build/main.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="column fill font-system justify-center items-center">
      <Component {...pageProps} />
    </div>
  )
}
