import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

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
      const newAppState = { ...app }
      const newCountdownState = { ...countdown }

      newAppState.isLoaded = true
      newCountdownState.message = router.query.m || ""
      newCountdownState.queryDate = router.query.t || ""

      setApp(newAppState)
      setCountdown(newCountdownState)

  }, [router.isReady])

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
    setRouter(newState)
  }

  function setRouter(state) {
    if (!!state) {
      let staet = countdown
    }
    router.push;
    let newQueryString = "";
    if (state.queryDate || state.message)
      newQueryString += "/?";
    if (state.queryDate && state.message) {
      newQueryString += `t=${state.queryDate}`;
      newQueryString += `&m=${state.message}`;
    } else if (state.queryDate) {
      newQueryString += `t=${state.queryDate}`;
    } else if (state.message) {
      newQueryString += `&m=${state.message}`;
    }

    router.push(newQueryString, undefined, { shallow: true });
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
      setMessage
    },
  };

  return <AppContext.Provider value={exports}>{children}</AppContext.Provider>;
}
