import { Search, Filter, X } from 'lucide-react';

const Filters = ({
  searchTerm,
  setSearchTerm,
  showFilters,
  setShowFilters,
  selectedPrices,
  togglePriceFilter,
  selectedCategories,
  toggleCategoryFilter,
  priceRanges,
  categories
}) => {
  return (
    <>
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white shadow-sm hover:bg-gray-50"
        >
          <Filter className="w-5 h-5 text-gray-600" />
          <span>Filters</span>
        </button>

        {/* Desktop Filters */}
        <div className="hidden md:flex flex-wrap items-center gap-2 bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-sm font-medium text-gray-600">Price:</span>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => togglePriceFilter(range)}
              className={`px-3 py-1 text-sm rounded-full transition ${
                selectedPrices.some(r => r.label === range.label)
                  ? 'bg-red-100 text-red-700 border border-red-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {range.label}
            </button>
          ))}

          <span className="text-sm font-medium text-gray-600 ml-4">Category:</span>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => toggleCategoryFilter(category)}
              className={`px-3 py-1 text-sm rounded-full transition ${
                selectedCategories.includes(category)
                  ? 'bg-red-100 text-red-700 border border-red-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="md:hidden bg-white p-4 rounded-lg shadow border border-gray-200 mb-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Filters</h3>
            <button onClick={() => setShowFilters(false)}>
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700">Price Range</h4>
            <div className="space-y-2 mt-2">
              {priceRanges.map(range => (
                <label key={range.label} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedPrices.some(r => r.label === range.label)}
                    onChange={() => togglePriceFilter(range)}
                    className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-700">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700">Category</h4>
            <div className="space-y-2 mt-2">
              {categories.map(category => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategoryFilter(category)}
                    className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filters;
