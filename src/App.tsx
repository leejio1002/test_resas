import React from 'react';
import './App.css';
import Prefectures from './components/organism/Prefectures';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Suspense } from 'react';
import Analysis from './components/organism/Analysis';
import Header from './components/molecules/header/header.component';
import Spinner from './components/atoms/loadingSpinner/spinner.component';
function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Header text="人口統計資料" />
        <Prefectures />
        <Analysis />
      </Suspense>
    </Provider>
  );
}

export default App;
