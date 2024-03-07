import { ApolloProvider } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache: cache,
  uri: 'http://localhost:4000/',
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
