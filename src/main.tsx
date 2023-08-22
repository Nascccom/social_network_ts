import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from "./App.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {HashRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
      <Provider store={store}>
          <App />
      </Provider>
  </HashRouter>,
)
