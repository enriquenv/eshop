import ProductDetails from './ProductDetails';

export default function ProductPage() {

  return (
    <main>
      <ProductDetails productData={product} resetFetch={reset} />
    </main>
  );
}
