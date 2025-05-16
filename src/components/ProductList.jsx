import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <div className="product-list container">
      
      <h2>Product List</h2>

      {/* //* all elements of the shopping list will be here */}
      {props.allProducts.map((eachProduct, index) => {
        return (
          <ProductCard key={index} eachProduct={eachProduct}/>
        )
      })}

    </div>
  )
}

export default ProductList