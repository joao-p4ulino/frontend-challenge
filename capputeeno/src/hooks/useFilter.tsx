import {useContext} from "react";
import {FilterContext} from "@/app/contexts/filter-context";

export function useFilter() {
    return useContext(FilterContext)
}