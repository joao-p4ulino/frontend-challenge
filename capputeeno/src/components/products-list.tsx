"use client"

import {useProducts} from "@/hooks/useProducts";

interface ProductsListProps {

}
export function Produclist(props : ProductsListProps) {
    const { data } = useProducts();
    return(
        <div></div>
    )
}