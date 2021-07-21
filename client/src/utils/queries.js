import gql from "graphql-tag"

export const GetMe = gql`
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