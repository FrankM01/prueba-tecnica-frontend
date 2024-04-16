import { useState, useEffect } from 'react';
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((jsonData) => {
                const formattedData = jsonData.object.map(item => {
                    const date = new Date(item.fechaNacimiento);
                    const formattedDate = date.toLocaleDateString('es-ES');
                    return {
                        ...item,
                        fechaNacimiento: formattedDate
                    };
                });
                // console.log(formattedData);
                setData(formattedData);
            })
            .finally(() => setLoading(false));
    },[url]);

    return { data,loading };
}
