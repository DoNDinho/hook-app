import { useEffect, useState } from 'react';

const localCache = {};

const initialState = {
  data: null,
  isLoading: true,
  hasError: false,
  error: null,
};

export function useFetch(url) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setLoadingState();
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState(initialState);
  };

  const getFetch = async () => {
    if (localCache[url]) {
      console.log('Usando cache');
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });

      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);
    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText,
        },
      });
      return;
    }

    const data = await response.json();
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
