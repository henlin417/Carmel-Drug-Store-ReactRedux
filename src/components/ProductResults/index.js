import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import Product from './Product';
import FormSelect from './../forms/FormSelect';
import LoadMore from './../LoadMore';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductResults = ({ }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(
      fetchProductsStart({ filterType })
    )
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>
          No search results.
        </p>
      </div>
    );
  }

  const configFilters = {
    defaultValue: filterType,
    options: [{
      name: 'Show all',
      value: ''
    }, {
      name: 'Zoom',
      value: 'zoom'
    }, {
      name: 'Dr. Dean Edell',
      value: 'dr. dean edell'
    }, {
      name: 'Studio',
      value: 'studio'
    }, {
      name: 'Bonny Doon Farm',
      value: 'bonny doon farm'
    }, {
      name: 'Sierraa Essentials',
      value: 'sierra essentials'
    }, {
      name: 'Geo F. Trumper',
      value: 'geo f. trumper'
    }, {
      name: 'Royall Lyme',
      value: 'royall lyme'
    }, {
      name: 'Marvis Toothpaste',
      value: 'marvis toothpaste'
    }, {
      name: 'Taylor of Old Bond Street',
      value: 'taylor of old bond street'
    }, {
      name: 'MAJA',
      value: 'maja'
    }, {
      name: 'SpaCell',
      value: 'spacell'
    }, {
      name: 'Vitabath',
      value: 'vitabath'
    }, {
      name: 'Speert Combs',
      value: 'speert combs'
    }, {
      name: 'Mason Pearson Comb & Brush',
      value: 'mason pearson'
    }, {
      name: 'Kent Comb',
      value: 'kent comb'
    }],
    handleChange: handleFilter
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data
      })
    )
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="products">

      <h1>
        Browse Products
      </h1>

      <FormSelect {...configFilters} />

      <div className="productResults">
        {data.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if (!productThumbnail || !productName ||
            typeof productPrice === 'undefined') return null;

          const configProduct = {
            ...product
          };

          return (
            <Product key={pos} {...configProduct} />
          );
        })}
      </div>

      {!isLastPage && (
        <LoadMore {...configLoadMore} />
      )}

    </div>
  );
};

export default ProductResults;
