"use client"

import {FilterBar} from "@/components/filter-bar";
import {Productslist} from "@/components/products-list";
import styled from "styled-components";
import {DefaultPageLayout} from "@/components/default-page-layout";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {

    return (
        <DefaultPageLayout>
            <PageWrapper>
                <FilterBar/>
                <Productslist/>
            </PageWrapper>
        </DefaultPageLayout>
    )
}
