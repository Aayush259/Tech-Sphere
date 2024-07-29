import { useEffect, useState } from "react";

const useFetch = (url) => {

    // States for data, loading, and error.
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {

        // New abort controller.
        const controller = new AbortController();

        // Fetching data from API and updating states accordingly.
        (async () => {

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, { signal: controller.signal });

                // If response is not ok, throw error.
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            };
        })();

        return () => {
            if (controller) {
                controller.abort();
            };
        }
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
