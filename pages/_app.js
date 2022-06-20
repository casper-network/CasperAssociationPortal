/* eslint-disable react/self-closing-comp */
import { createContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import 'animate.css';
import '../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/custom-animation.scss';
import '../styles/custom.scss';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import appReducer from '../shared/redux-saga/app-reducers';
import appMiddleware from '../shared/redux-saga/app-middleware';
import { DialogProvider } from '../components/partials/dialog';
import AppResolver from '../components/layouts/app-resolver';
import { fetchUserInfo, setCollapsed } from '../shared/redux-saga/auth/actions';
import AppLoading from '../components/layouts/app-loading';
import { SnackBarProvider } from '../components/partials/snack-bar';
import { getToken } from '../helpers/api/auth.service';

const middleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(middleware));

middleware.run(appMiddleware);

const Container = props => {
  const dispatch = useDispatch();
  const fetchUserInfoResponse = useSelector(
    state => state.authReducer.fetchUserInfo
  );
  const [token, setToken] = useState(1);

  const resizeHandler = () => {
    const width = window.innerWidth;
    if (width >= 992) {
      dispatch(setCollapsed({ isCollapsed: false }));
    } else {
      dispatch(setCollapsed({ isCollapsed: true }));
    }
  };

  useEffect(() => {
    resizeHandler();
    setToken(getToken());
    if (getToken()) {
      dispatch(fetchUserInfo(() => {}));
    }
    window.addEventListener('resize', resizeHandler);
  }, []);

  return (fetchUserInfoResponse.process > 1 || !token) && <>{props.children}</>;
};

export const AppContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  return (
    <Provider store={store}>
      <Head>
        <title>Casper Association Portal</title>
        <link rel="icon" href="/faviconNew.svg" />
        <meta name="description" content="Casper Association Portal" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PHQC53L');
            `,
          }}
        ></Script>
      </Head>
      <AppContext.Provider value={{ loading, setLoading }}>
        <DialogProvider>
          <SnackBarProvider>
            <Container>
              {loading && <AppLoading />}
              <Component {...pageProps} />
            </Container>
            <AppResolver />
          </SnackBarProvider>
        </DialogProvider>
      </AppContext.Provider>
    </Provider>
  );
}

export default MyApp;
