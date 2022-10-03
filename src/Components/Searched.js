import {React,useState,useEffect} from 'react'


function Searched({link}){
    const[data, setData] = useState([])
    useEffect(()=>{
        fetch (link)
        .then(res => res.json())
        .then(info => {
            setData(info)
           
        })
    },[])
    console.log(data.results) //THIS SHOWS THE ARRAY OF RECIPES

    return(
    
        <div>
        
        </div>
    )
}


export default Searched

//you can bring the data from homepage, then pass it down as a prop HERE, then break it down with .map(), 
//then in a child component make a card for each map (.map(()=> return <Card />))