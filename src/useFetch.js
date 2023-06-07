import {useState, useEffect} from 'react'
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setiIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data for tht resource')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setiIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setiIsPending(false)
                    setError(err.message)
                })
                }) 
            }, [url])

            return{ data, isPending, error}
}

export default useFetch;