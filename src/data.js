export const navlinks = [
 {
    link: "#home",
    text: "Home",
 },
 {
    link: "#product",
    text: "Products",
 },
 {
    link: "#about",
    text: "About",
 },
{
    link: "#gallery",
    text: "Gallery",
},
{
    link: "#contact",
    text: "Contact",
},
];

export const featuredProducts = [
  {
    id: 1,
    title: "Hoodie",
    price: "$10.99",
    reviews: 54,
    img_link: "black.jpg",
  },
  {
    id: 2,
    title: "Hoodie",
    price: "$50",
    reviews: 54,
    img_link: "Boots.jpg",
  },
  {
    id: 3,
    title: "Hoodie",
    price: "$10.99",
    reviews: 54,
    img_link: "Gloves.jpg",
  },
  {
    id: 4,
    title: "Hoodie",
    price: "$10.99",
    reviews: 54,
    img_link: "Jacket.jpg",
  },
  {
    id: 5,
    title: "Hoodie",
    price: "$100",
    reviews: 54,
    img_link: "Scarf.jpg",
  },
  {
    id: 6,
    title: "Hoodie",
    price: "$8.99",
    reviews: 54,
    img_link: "Sweater.jpg",
  },
];

export const companyLink = [
 {
    link: "/",
    text: "Blog",
 },
 {
    link: "/",
    text: "Policy",
 },
 {
    link: "/",
    text: "Terms & Conditions",
 },
 {
    link: "/",
    text: "Customer Feed",
 },
 {
    link: "/",
    text: "Careers",
 },

];

// <div className='w-full aspect-square flex flex-col items-center justify-center  bg-gray-800 p-4' key={product.id}>
      
// <img src={product.img_link} alt={product.img_link} className="w-full h-40  object-cover " /> 


// <h3 className='text-lg font-bold'>{product.name}</h3>

// <p className='mt-2'>{product.description}</p>

// <p className='mt-4 font-semibold'>${product.price }</p>
//  </div>
{/* <div className='w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-14 '>
{featuredProduct.map((product) => (
  <div key={product.id}>
  <h2>{product.name}</h2>
  <p>{product.description}</p>
  <span>{product.price}</span>
  </div>
  ))}

</div> */}