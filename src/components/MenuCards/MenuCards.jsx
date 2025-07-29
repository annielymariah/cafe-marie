export default function MenuCards({ type }) {
  const coffeeList = [
    {
      name: "Expresso",
      price: 5.9,
      img: "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fHww",
    },
    {
      name: "Cappuccino",
      price: 8.5,
      img: "https://plus.unsplash.com/premium_photo-1670445287762-372300cdcb77?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Latte",
      price: 9.2,
      img: "https://plus.unsplash.com/premium_photo-1723672888715-d0bcf7a5edee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    },
    {
      name: "Mocha",
      price: 10.0,
      img: "https://plus.unsplash.com/premium_photo-1723478443774-19ead8ee7ce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUzfHx8ZW58MHx8fHx8",
    },
    {
      name: "Macchiato",
      price: 7.8,
      img: "https://plus.unsplash.com/premium_photo-1729097011349-e82a3e4f8af8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8",
    },
    {
      name: "Americano",
      price: 6.5,
      img: "https://plus.unsplash.com/premium_photo-1674407009848-4da7a12b6b25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc0fHx8ZW58MHx8fHx8",
    },
  ];

  const cakeList = [
    {
      name: "Bolo de Chocolate",
      price: 25.9,
      img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Bolo Red Velvet",
      price: 32.5,
      img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Bolo de Cenoura",
      price: 22.9,
      img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Cheesecake",
      price: 28.0,
      img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Bolo de Limão",
      price: 24.5,
      img: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb24lMjBjYWtlfGVufDB8fDB8fHww",
    },
    {
      name: "Bolo Floresta Negra",
      price: 35.0,
      img: "https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const products = type === "coffee" ? coffeeList : cakeList;

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {products.map((product, index) => (
        <div className="col" key={index}>
          <div className="card card-menu">
            <img
              src={product.img}
              className="card-img-top"
              alt={product.name}
              onError={(e) => {
                e.target.src = "";
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price.toFixed(2)}R$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
