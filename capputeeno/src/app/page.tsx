"use client"

import Image from 'next/image'
import styles from './page.module.css'
import {FilterBar} from "@/components/filter-bar";
import {Productslist} from "@/components/products-list";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ProductCard} from "@/components/product-card";

export default function Home() {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            <main className={styles.main}>
                <FilterBar/>
                <Productslist/>
            </main>
        </QueryClientProvider>

    )
}
