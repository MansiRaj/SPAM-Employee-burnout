const Search=(state="",action)=>{

    switch (action.type)
    {
        case "SEARCHING":
            return(action.payload);
        default:
            return("");
    }
}

export default Search;