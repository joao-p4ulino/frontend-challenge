"use client"

import {FilterByType} from "@/components/filter-by-type";
import styled from "styled-components";

interface FilterBarProps {

}

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
`

export function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            <FilterByType/>
        </FilterContainer>
    )
}