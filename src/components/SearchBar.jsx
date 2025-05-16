
function SearchBar(props) {

  

  const handleSearch = (event) => {
    props.setSearchInputValue(event.target.value)

    // props.setAllProducts((estadoActual) => {
    //   const nuevoEstado = estadoActual.filter((eachProduct) => {
    //     return eachProduct.name.startsWith(event.target.value)
    //   })
    //   return nuevoEstado
    // })

  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input type="text" onChange={handleSearch} value={props.searchInputValue}/>

    </div>
  )
}

export default SearchBar