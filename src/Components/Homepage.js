import React, { useState} from "react";
import { useNavigate } from "react-router-dom";



function Homepage({setLinkGetter}){
    const [search, setSearch] = useState("")
    let searchNoSpace = search.includes(" ")? search.replaceAll(" ", "%20") : search


    //Search bar
    function handleTyping(e){
        setSearch(e.target.value)
        }

    //Search category selector
    const [searchCategory, setSearchCategory] = useState("complexSearch")

    const [queryType, setQueryType] = useState(true)
    

    let link = `https://api.spoonacular.com/recipes/${searchCategory}?${process.env.REACT_APP_KEY}&${queryType? `query=${searchNoSpace}` : `titleMatch=${searchNoSpace}`}`
    
    function handleSelector(e){
        if(e.target.value === "search"){
            setQueryType(true)
            setSearchCategory("complexSearch")

        } else if (e.target.value === "autocomplete") {
             setQueryType(true)
             setSearchCategory("autocomplete")

        } else if (e.target.value === "exact"){
            setSearchCategory("complexSearch")
            setQueryType(false)
            
        }
        
    }
     
    

    //Fetch request, after data is set
   
    
    const navigate = useNavigate()

    //I suppose you don't need to have e.preventDefault with React Router, it redirects you to page 2 which is populated with search
    function handleSubmit(e){
        e.preventDefault()
        setLinkGetter(link)
        navigate(`/search`)
        
        
        
    
    }

    //Give select and input a required attribute

    return(
        <div>
        <h1>Welcome!</h1>
        <form onSubmit={handleSubmit} id="form1">
            <div>
            <label>Pick a search category: </label>
            <select onInput={handleSelector}>
                <option value="search">Regular</option>
                <option value="exact">Title match</option>
                <option value="autocomplete">Autocomplete</option>
                
            </select>
            </div>
        
            <div>
                <input type="text" onChange={handleTyping}></input>
            </div>

            <button >Search</button>
        </form>
        
        
        </div>
    )
}

export default Homepage
