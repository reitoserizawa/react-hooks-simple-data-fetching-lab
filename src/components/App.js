import React, {useState, useEffect} from "react"

function App() {

    const [dataLoaded, setData] = useState(false)

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(r => r.json())
        .then(data => setData(data))}
        ,[]
    )
    
    return (
        <div>
        {dataLoaded? <img src={dataLoaded.message} alt="A Random Dog"></img> : <p>Loading</p>}
        </div>
    )

}

export default App