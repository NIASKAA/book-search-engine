import gql from "graphql-tag"

export const Get_Me = gql`
{
    me {
        _id
        email
        username
        savedBooks {
            bookId
            authors
            description
            title
            image 
            link
        }
    }
}`