// Import everything needed to use the `useQuery` hook

import { useQuery, gql } from '@apollo/client';

export const GET_BOOKS = gql`
query ExampleQuery {
 books {
   title
 }
}
`;
export  function Books() {
   
    const { loading, error, data } = useQuery(GET_BOOKS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return data.books.map(({ title }) => (
        <div key={title}>
            <p>{title}</p>
            <br />
        </div>
    ));
}