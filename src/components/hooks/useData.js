import { useEffect, useState } from "react"

const useData = ()=>{
          const [blogs , setBlogs] = useState([])
          useEffect(() => {
                    fetch('BlogApi.json')
                    .then(res => res.json())
                    .then(data => setBlogs(data))
          }, []);

          return [blogs , setBlogs];
}

export default useData;