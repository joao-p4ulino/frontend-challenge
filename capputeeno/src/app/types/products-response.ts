import {Product} from "@/app/types/product";

export interface ProductsFeatchResponse {
    data: {
        allProducts: Product[]
    }
}