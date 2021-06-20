import React from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';

interface ReactQueryProps{
    children:React.ReactNode
}
const queryClient = new QueryClient()
const  ReactQuery:React.FC<ReactQueryProps>=(props)=> {
    return (
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    );
}

export default ReactQuery;