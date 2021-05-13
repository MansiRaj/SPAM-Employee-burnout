const Row=(state="",action)=>{

    switch (action.type)
    {
        case "SELECTROW":
            return(action.payload);
        default:
            return("");
    }
}
export default Row;