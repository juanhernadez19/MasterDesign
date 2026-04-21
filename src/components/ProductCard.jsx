function ProductCard({product}) {

return (

<div className="product">

<img src={product.image} />

<h3>{product.name}</h3>

<p>${product.price}</p>

<a
href={`https://wa.me/573228329420?text=${encodeURIComponent(`Hola! Me interesa la *${product.name}* (Ref: #${product.id}) - Precio: $${product.price}. ¿Está disponible?`)}`}
target="_blank"
>

<button>Comprar por WhatsApp</button>

</a>

</div>

)

}

export default ProductCard