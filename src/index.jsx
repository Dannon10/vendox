import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/Store.js'
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
    </BrowserRouter>
    </Provider>
)
