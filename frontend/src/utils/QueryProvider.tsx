'use client'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import React from 'react';

type tanstackPropsType = {
    children:React.ReactNode
}
const client = new QueryClient();

const QueryProvider = ({children}:tanstackPropsType) => {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default QueryProvider;

