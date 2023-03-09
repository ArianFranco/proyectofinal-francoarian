import { useEffect } from "react"

const Loading = () => {
  useEffect(() => {
    return () => {
      console.log('La lista ya cargo')
    }
  }, [])
  return <h1>LOADING...</h1>
}
export default Loading
