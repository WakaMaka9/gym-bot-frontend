import ReactDOM from 'react-dom/client'
import { App } from '@/App'
import './init'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
    <BrowserRouter basename={process.env.SUBPATH_PREFIX_URL}>
        <App />
    </BrowserRouter>
)