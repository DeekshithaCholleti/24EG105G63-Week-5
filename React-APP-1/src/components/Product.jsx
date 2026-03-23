function Product(props) {
  const { productObj } = props;

  return (
    <div className="border-2 m-5 rounded-2xl">
      <h1 className="text-2xl text-black">{productObj.title}</h1>
      <p className="font-bold">{productObj.price}</p>
    </div>
  );
}
export default Product;