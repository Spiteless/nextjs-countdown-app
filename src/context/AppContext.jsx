import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";

const AppContext = React.createContext();

export function useCountdown() {
  return useContext(AppContext);
}

const initialApp = {
  isLoaded: false,
};
const initialCountdown = {
  message: "",
  queryDate: "",
};

export function CountdownProvider({ children }) {
  const router = useRouter();

  const [app, setApp] = useState(initialApp);
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const newAppState = { ...app };
    const newCountdownState = { ...countdown };

    newAppState.isLoaded = true;
    newCountdownState.message = router.query.m || "";
    newCountdownState.queryDate = router.query.t || "";

    setApp(newAppState);
    setCountdown(newCountdownState);
  }, [router.isReady]);

  function clearMessage(currentState) {
    const newState = { ...currentState };
    newState.message = "";
    setCountdown(newState);
  }

  function setMessage(message) {
    const newState = { ...countdown };
    newState.message = message;
    setCountdown(newState);
  }

  function clearDate(currentState) {
    const newState = { ...currentState };
    newState.queryDate = "";
    setCountdown(newState);
  }

  function clearAll(currentState) {
    const newState = { ...currentState };
    newState.queryDate = "";
    newState.message = "";
    setCountdown(newState);
    setRouter(newState);
  }

  function setRouter(state) {
    if (!!state) {
      let state = countdown;
    }

    const queryObj = {}
      
    if (state.queryDate) queryObj.t = state.queryDate
    if (state.message) queryObj.m = state.message

    let query = "/?" + queryString.stringify(queryObj)

    router.push(query, undefined, { shallow: true });
  }

  const exports = {
    app: app,
    setApp: setApp,
    countdown: countdown,
    setCountdown: setCountdown,
    funcs: {
      clearMessage: clearMessage,
      clearDate: clearDate,
      clearAll: clearAll,
      setRouter,
      setMessage,
    },
  };

  return <AppContext.Provider value={exports}>{children}</AppContext.Provider>;
}
