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
    const [queryType, setQueryType] = useState(true)
    function handleSearch(e){
        if(e.target.value === "search"){
            setQueryType(true)
            
        } else if (e.target.value === "exact"){
            setQueryType(false)
            
        }
        
    }


    function handleDiet(e){
        setDietChoice(`&diet=${e.target.value}`)

    }

    function handleIntolerance(e){
        setIntoleranceChoice(`&intolerances=${e.target.value}`)
        
    }
    

    function handleCuisine(e){
        setCuisineChoice(`&cuisine=${e.target.value}`)
    }
    
    const [diet, setDiet] = useState(false)
    const [dietChoice, setDietChoice] = useState('&diet=keto')
    const [intolerance, setIntolerance] = useState(false)
    const [intoleranceChoice, setIntoleranceChoice] = useState('&intolerances=soy')
    const [cuisine, setCuisine] = useState(false)
    const [cuisineChoice, setCuisineChoice] = useState('&cuisine=african')

    let link = `https://api.spoonacular.com/recipes/complexSearch?${process.env.REACT_APP_KEY}&number=100&${queryType? `query=${searchNoSpace}` : `titleMatch=${searchNoSpace}`}${diet ? dietChoice : ''}${intolerance? intoleranceChoice : ''}${cuisine ? cuisineChoice : ''}`
    

  
   
    function handleRandom(e){
    e.preventDefault()
    setLinkGetter(`https://api.spoonacular.com/recipes/random?${process.env.REACT_APP_KEY}&number=10`)
    navigate('/search')
    }
     
    

    //Fetch request, after data is set
   
    
    const navigate = useNavigate()

    //I suppose you don't need to have e.preventDefault with React Router, it redirects you to page 2 which is populated with search
    function handleSubmit(e){
        e.preventDefault()
        setLinkGetter(link)
        navigate(`/search`)
        
   
    }


    function toFavorites(e){
        e.preventDefault()
        navigate(`/favorites`)
    }


    



    return(
        <div>
        <h1>Welcome!</h1>
        <form onSubmit={handleSubmit} id="form1">
            <div>
            <label>Pick a search category: </label>
            <select onInput={handleSearch}>
                <option value="search">Regular</option>
                <option value="exact">Title match</option>
                
            </select>
            </div>
        
            <div>
                <input type="text" onChange={handleTyping}></input>
            </div>
            <div className="checkboxes">
                <label htmlFor="diet">Diet</label>
                <input onClick={()=> {setDiet(!diet)}} id="diet" type="checkbox"></input>
                {diet === true ? 
                <select onInput={handleDiet}>
                    <option value="keto">Keto</option>
                    <option value="gluten free">Gluten free</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="vegan">Vegan</option>
                
                </select> 
                : null}

                <label htmlFor="intolerances">Intolerances</label>
                <input onClick={()=>{setIntolerance(!intolerance)}} id="intolerances" type="checkbox"></input>
                {intolerance === true ?
                <select onInput={handleIntolerance}>
                   
                    <option value="soy">Soy</option>
                    <option value="egg">Egg</option>
                    <option value="dairy">Dairy</option>
                    <option value="wheat">Wheat</option>
                    <option value="grain">Grain</option>
                    <option value="peanut">Peanut</option>
                    <option value="gluten">Gluten</option>
                    <option value="sesame">Sesame</option>
                    <option value="seafood">Seafood</option>
                    <option value="sulfite">Sulfite</option>
                    <option value="tree nut">Tree nut</option>
                    <option value="shellfish">Shellfish</option>
                    
                    
                </select>
                :null}

                <label htmlFor="cuisine">Cuisine</label>
                <input onClick={()=> {setCuisine(!cuisine)}} id="cuisine" type="checkbox"></input>
                {cuisine === true ?
                <select onChange={handleCuisine}>
                    <option value="african">African</option>
                    <option value="american">American</option>
                    <option value="british">British</option>
                    <option value="cajun">Cajun</option>
                    <option value="caribbean">Caribbean</option>
                    <option value="chinese">Chinese</option>
                    <option value="eastern european">Eastern European</option>
                    <option value="european">European</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="greek">Greek</option>
                    <option value="indian">Indian</option>
                    <option value="irish">Irish</option>
                    <option value="italian">Italian</option>
                    <option value="japanese">Japanese</option>
                    <option value="jewish">Jewish</option>
                    <option value="korean">Korean</option>
                    <option value="latin american">Latin American</option>
                    <option value="mediterranean">Mediterranean</option>
                    <option value="mexican">Mexican</option>
                    <option value="middle eastern">Middle Eastern</option>
                    <option value="nordic">Nordic</option>
                    <option value="southern">Southern</option>
                    <option value="spanish">Spanish</option>
                    <option value="thai">Thai</option>
                    <option value="vietnamese">Vietnamese</option>

                    
                </select>
                :null}

            </div>
            
            <button>Search</button>
            




        </form>
        <button onClick={handleRandom}>Random</button>
        <button onClick={toFavorites}>Favorites</button>
        </div>
    )
}

export default Homepage
