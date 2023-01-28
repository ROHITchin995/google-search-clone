import { useState, useEffect } from 'react'

const CONTEXT_KEY = "027f72849c06c4c0b"
const API_KEY = process.env.REACT_APP_API_KEY;
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null)

  useEffect(() => {

    const fetchData = async ()=>{
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
      .then(response => response.json())
      .then(result =>{
        setData(result)
      })
    }
    fetchData().then(res=>{
      console.log(res)
      }).catch(error=>{
        console.log(error);
      })
  }, [term])
  
  return {data}
}
export default useGoogleSearch;
