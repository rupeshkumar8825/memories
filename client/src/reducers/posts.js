// now creating the reducers for the posts 
const reducer = (posts = [], action)=>{

    switch(action.type)
    {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE' :
            return [...posts, action.payload];
        case 'UPDATE':
            // here we are updating just the post that was updated using the update button for this purpose 
            // here we are using the map function to do this 
            return (posts.map((post) => post._id == action.payload._id ? action.payload : post));
        default : 
            return posts;
    }
}

// exporting this reducer to be used outside 
export default reducer;