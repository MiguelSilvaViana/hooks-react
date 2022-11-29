import React, { useEffect, useState } from 'react'

export default (url, method = 'get') => {

    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(function () {
        fetch(url, {method})
            .then(res => res.json())
            .then(json => setResponse({
                data: json,
                loading: false
            }))

    }, [url, method]) // se a url mudar ou passar um metodo diferente ai ele renderiza novamente

    return response

}