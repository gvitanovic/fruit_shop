'use client';

import { ProductFilters, ProductColor, SortOrder } from '../../../domain/entities/Product';
import { Label } from '../../atoms/Label/Label';
import { Select } from '../../atoms/Select/Select';
import { Button } from '../../atoms/Button/Button';

interface ProductFiltersProps {
    filters: ProductFilters;
    onFiltersChange: (filters: ProductFilters) => void;
}

export const ProductFiltersComponent = ({ filters, onFiltersChange }: ProductFiltersProps) => {
    const colors: { value: ProductColor; label: string }[] = [
        { value: 'green', label: 'Green' },
        { value: 'orange', label: 'Orange' },
        { value: 'yellow', label: 'Yellow' },
    ];

    const sortOptions: { value: SortOrder; label: string }[] = [
        { value: 'name-asc', label: 'Alphabetically (A-Z)' },
        { value: 'name-desc', label: 'Alphabetically (Z-A)' },
        { value: 'price-asc', label: 'Price (Low-High)' },
        { value: 'price-desc', label: 'Price (High-Low)' },
        { value: 'discount-desc', label: 'Discount (Highest first)' },
    ];

    const handleColorToggle = (color: ProductColor) => {
        const newColors = filters.colors.includes(color)
            ? filters.colors.filter(c => c !== color)
            : [...filters.colors, color];

        onFiltersChange({ ...filters, colors: newColors });
    };

    const handleSortChange = (sortOrder: SortOrder) => {
        onFiltersChange({ ...filters, sortOrder });
    };

    const clearFilters = () => {
        onFiltersChange({
            colors: [],
            sortOrder: 'name-asc',
            searchQuery: filters.searchQuery, // Keep search query
        });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            {/* Sort Options */}
            <div className="space-y-2">
                <Label htmlFor="sort">Sort By</Label>
                <Select
                    id="sort"
                    value={filters.sortOrder}
                    onChange={(e) => handleSortChange(e.target.value as SortOrder)}
                >
                    {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Select>
            </div>

            {/* Color Filters */}
            <div className="space-y-2">
                <Label>Filter by Color</Label>
                <div className="space-y-2">
                    {colors.map(color => (
                        <label key={color.value} className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filters.colors.includes(color.value)}
                                onChange={() => handleColorToggle(color.value)}
                                className="rounded border-gray-300"
                            />
                            <div className="flex items-center space-x-2">
                                <div
                                    className={`w-4 h-4 rounded-full ${color.value === 'green' ? 'bg-green-500' :
                                            color.value === 'orange' ? 'bg-orange-500' :
                                                'bg-yellow-500'
                                        }`}
                                />
                                <span>{color.label}</span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Clear Filters */}
            <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full"
            >
                Clear Filters
            </Button>
        </div>
    );
};
