import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <div className="product-list container">
      
      <h2>Product List</h2>

      {/* //* all elements of the shopping list will be here */}
      {props.allProducts
      .filter((eachProduct) => {
        if (eachProduct.name.startsWith(props.searchInputValue)) {
          return true // incluye el producto y renderizalo
        } else {
          return false // no lo incluyas ni lo renderices
        }
      })
      .map((eachProduct, index) => {
        return (
          <ProductCard key={index} eachProduct={eachProduct} setAllProducts={props.setAllProducts} index={index}/>
        )
      })}

    </div>
  )
}

export default ProductList