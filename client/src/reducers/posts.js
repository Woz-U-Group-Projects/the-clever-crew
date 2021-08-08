//importing in index.js combineReducers
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);   //ternary operator. action.payload is the updated .. output is an array because it's a map
            case 'DELETE':
             return posts.filter((post) => post._id === action.payload);   
     default:
         return posts;

    }
}