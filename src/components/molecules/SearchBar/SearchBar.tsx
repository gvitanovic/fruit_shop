'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { useDebounce } from 'use-debounce';
import { useProductSuggestions } from '../../../hooks/useProducts';

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

export const SearchBar = ({ onSearch, placeholder = 'Search products...' }: SearchBarProps) => {
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeSuggestion, setActiveSuggestion] = useState(-1);
    const [debouncedQuery] = useDebounce(query, 300);

    const { data: suggestions = [], isLoading } = useProductSuggestions(
        debouncedQuery,
        showSuggestions && debouncedQuery.length > 2
    );

    const comboboxId = 'search-combobox';
    const listboxId = 'search-listbox';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
            setShowSuggestions(false);
            setActiveSuggestion(-1);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        onSearch(suggestion);
        setShowSuggestions(false);
        setActiveSuggestion(-1);
    };

    const clearSearch = () => {
        setQuery('');
        onSearch('');
        setShowSuggestions(false);
        setActiveSuggestion(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!showSuggestions || suggestions.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setActiveSuggestion(prev =>
                    prev < suggestions.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setActiveSuggestion(prev =>
                    prev > 0 ? prev - 1 : suggestions.length - 1
                );
                break;
            case 'Enter':
                e.preventDefault();
                if (activeSuggestion >= 0) {
                    handleSuggestionClick(suggestions[activeSuggestion]);
                } else if (query.trim()) {
                    handleSubmit(e);
                }
                break;
            case 'Escape':
                setShowSuggestions(false);
                setActiveSuggestion(-1);
                break;
        }
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Element;
            if (!target.closest('[data-search-container]')) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="relative w-full max-w-md" data-search-container>
            <form onSubmit={handleSubmit} className="flex">
                <div className="relative flex-1">
                    <Input
                        id={comboboxId}
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setShowSuggestions(true);
                            setActiveSuggestion(-1);
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                        className="pr-8"
                        onFocus={() => query.length > 2 && setShowSuggestions(true)}
                        role="combobox"
                        aria-expanded={showSuggestions && suggestions.length > 0}
                        aria-haspopup="listbox"
                        aria-owns={listboxId}
                        aria-activedescendant={
                            activeSuggestion >= 0 ? `suggestion-${activeSuggestion}` : undefined
                        }
                        aria-autocomplete="list"
                        aria-label="Search for products"
                    />
                    {query && (
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={clearSearch}
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                            aria-label="Clear search"
                        >
                            <X className="w-4 h-4" aria-hidden="true" />
                        </Button>
                    )}
                </div>
                <Button
                    type="submit"
                    className="ml-2"
                    aria-label="Search"
                >
                    <Search className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">Search</span>
                </Button>
            </form>

            {/* Suggestions dropdown */}
            {showSuggestions && (query.length > 2) && (
                <div
                    id={listboxId}
                    role="listbox"
                    aria-label="Search suggestions"
                    className="absolute top-full left-0 right-0 z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
                >
                    {isLoading ? (
                        <div
                            className="p-3 text-center text-gray-500"
                            role="status"
                            aria-live="polite"
                        >
                            Loading suggestions...
                        </div>
                    ) : suggestions.length > 0 ? (
                        suggestions.map((suggestion, index) => (
                            <button
                                key={index}
                                id={`suggestion-${index}`}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className={`w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${index === activeSuggestion ? 'bg-gray-100' : ''
                                    }`}
                                role="option"
                                aria-selected={index === activeSuggestion}
                            >
                                {suggestion}
                            </button>
                        ))
                    ) : (
                        <div
                            className="p-3 text-center text-gray-500"
                            role="status"
                        >
                            No suggestions found
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
