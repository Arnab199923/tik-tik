import Post from "./Post";
import User from "./User";
import Comment from "./Comment";
import PostedBy from "./PostedBy";

export default createSchema({
    name: 'default',
    types:schemaTypes.contact([
        Post,User,Comment,PostedBy
    ])
}
    
)