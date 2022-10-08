// now creating the reducers for the posts 
const reducer = (posts = [], action)=>{

    switch(action.type)
    {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE' :
            return posts;
        default : 
            return posts;
    }
}

// exporting this reducer to be used outside 
export default reducer;