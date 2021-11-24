import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import reducer from "../reducer/index.reducer";
import rootSaga from "../sagas/index.saga";
import '../styles/globals.css';

const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
