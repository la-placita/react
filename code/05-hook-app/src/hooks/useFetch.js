import { useEffect, useState } from "react";

const cache = {};
export const useFetch = (url) => {
    const [data, setData] = useState({
        data: "Hola Mundo",
        isLoading: true,
        hasError: null,
        error: null
    });
    console.log({cache});
    useEffect(() => {
        setData({
            data,
            isLoading: true,
            hasError: null,
            error: null
        });
        if (cache[url]) {
            setData({
                data: cache[url],
                isLoading: false,
                hasError: false
            });
            return;
        }

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Error fetching data from ' + url);
                return res.json()
            })
            .then(data => {
                setData({
                    data,
                    isLoading: false,
                    hasError: false
                });
                cache[url] = data;
            })
            .catch(error => {
                setData({
                    data,
                    isLoading: false,
                    hasError: true,
                    error: error.message
                });
            });
    }, [url]);

    return {
        data: data.data,
        isLoading: data.isLoading,
        hasError: data.hasError,
    }
}