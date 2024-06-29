"use client"

import { useState, useMemo, useCallback } from 'react';
import { debounce } from '@/utils/debounce';
import Link from 'next/link';

interface IProps {
    products: any[]
}

const SearchBar = ({ products }: IProps) => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = useCallback((value: any) => {
        if (value.length > 0) {
            const filteredResults: any[] = products?.filter((product: { title: string; }) => product.title.toLowerCase().includes(value.toLowerCase())).slice(0, 5); // limit to 5 results
            setResults(filteredResults);
        } else {
            setResults([]);
        }
    }, [products]);

    const debouncedSearch = useMemo(() => debounce(handleSearch, 300), [handleSearch]);

    const onChange = (event: any) => {
        const value = event.target.value;
        setQuery(value);
        debouncedSearch(value);
    };

    return (
        <div className="relative mx-auto pb-5">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    value={query}
                    onChange={onChange}
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                    placeholder="Search Products.."
                    required
                />
            </div>
            <ul className="mt-2 absolute z-10 w-full bg-slate-400">
                {results?.map(product => (
                    <li key={product.id} className="p-2 border-b border-gray-200 dark:border-gray-700">
                        <Link href={`/product/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchBar