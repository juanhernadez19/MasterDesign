import ProductCard from "./components/ProductCard"
import products from "./data/products"
import { useState } from "react";

function App() {
    
return (
 
<div>

    <div className="fondo">
     <h1>MasterDesign</h1>
     <div className="catalog">

{products.map(product => (

<ProductCard key={product.id} product={product} />

))}

</div>

<div className="foot-container">

<h2 className="foot">En busca de tu estilo personalizado?</h2>
<a
href={`https://wa.me/573228329420?text=Hola, me gustaria hablarte de un estilo personalizado`}
target="_blank"
>
<button>Dime de que trata</button>

</a>


</div>

</div>
</div>

)

}

export default App
  