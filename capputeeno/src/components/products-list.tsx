"use client"

import {ProductCard} from "@/components/product-card";
import styled from "styled-components";
import {useProducts} from "@/hooks/useProducts";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;
  
  margin-top: 32px;
`

interface ProductsListProps {

}

export function Productslist(props: ProductsListProps) {
    const {data} = useProducts();
    return (
        <ListContainer>
            {data?.map(product => <ProductCard
                key={product.id}
                title={product.name}
                price={product.price_in_cents}
                image={product.image_url}
                id={product.id}
            />
        )}
        </ListContainer>
    )
}