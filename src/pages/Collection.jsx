import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [sortType, setSortType] = useState('relavent');

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      productsCopy = productsCopy.filter(item => item.category === category);
    }

    if (subCategory) {
      productsCopy = productsCopy.filter(item => item.subCategory === subCategory);
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 pt-10 border-t">

      {/* Filter Options */}
      <div className="min-w-64 sm:min-w-72 bg-white p-6 shadow-lg rounded-lg">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="text-xl cursor-pointer flex items-center justify-between gap-2 font-semibold text-gray-700 mb-5"
        >
          FILTERS
          <img
            className={`h-4 transition-transform ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Toggle filter"
          />
        </p>

        {/* Category Filter */}
        <div className={`border-t pt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="text-sm font-medium text-gray-600 mb-3">CATEGORIES</p>
          <select
            className="w-full p-2 border-2 border-gray-300 rounded-md text-sm"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Protein">Protein</option>
            <option value="Gainer">Gainer</option>
            <option value="Muscle Builders">Muscle Builders</option>
          </select>
        </div>

        {/* SubCategory Filter */}
        <div className={`border-t pt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="text-sm font-medium text-gray-600 mb-3">TYPE</p>
          <select
            className="w-full p-2 border-2 border-gray-300 rounded-md text-sm"
            value={subCategory}
            onChange={e => setSubCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Whey Protein">Whey Protein</option>
            <option value="Whey Isolate">Whey Isolate</option>
            <option value="Mass Gainer">Mass Gainer</option>
            <option value="Weight Gainer">Weight Gainer</option>
            <option value="Creatine">Creatine</option>
            <option value="Pre-workout">Pre-workout</option>
          </select>
        </div>
      </div>

      {/* Right Side: Products */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-5">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          
          {/* Product Sort */}
          <select
            onChange={e => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-4 py-2 rounded-md shadow-md"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
