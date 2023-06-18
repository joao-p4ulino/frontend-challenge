"use client"

import {createContext, ReactNode, useState} from "react";
import {FilterType} from "@/app/types/filter-type";
import exp from "constants";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)

    return(
        <FilterContext.Provider
            value={{
                search,
                page, type,
                setSearch,
                setType,
                setPage
            }}>
            {children}
        </FilterContext.Provider>
    )
}