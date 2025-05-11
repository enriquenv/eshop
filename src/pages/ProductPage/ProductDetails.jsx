export default function ProductDetails({ productData }) {
  if (!productData) return null;
  return (
    <section>
      <h2>{productData.name}</h2>
      <img src={productData.imageUrl} alt={productData.name} style={{ maxWidth: '400px' }} />
      <p>Price: ${productData.price}</p>
      <p>Available: {productData.quantity}</p>
      <p>Variants:</p>
    </section>
  );
}