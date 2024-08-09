import{j as e,F as t,a as m,P as i}from"./index-BBRHdr90.js";import{u as h,a as p,b as u}from"./useWishlist-BhRVMsjG.js";function g({productDetails:s}){const{isItemInCart:r,handleCartAction:a}=h(s),{handleWishlistAction:n,isItemInWishlist:d}=p(s),{id:l,name:o,price:c,image:x}=u(s);return e.jsxs("div",{className:"relative w-64 max-w-[80vw] p-4 pt-10 rounded-2xl shadow-product-card-shadow overflow-hidden duration-300",children:[e.jsx("button",{className:"absolute top-3 right-3 hover:opacity-70",onClick:n,children:e.jsx(t,{icon:"fa-solid fa-heart",className:`${d?"text-red-500":"text-slate-400"} h-6`})}),e.jsx("img",{src:x,alt:o,className:"block m-auto h-60 max-w-full"}),e.jsxs("div",{className:"my-4 tracking-wider",children:[e.jsxs("div",{className:"px-3",children:[e.jsx("p",{className:"font-bold text-xl text-indigo-900 text-ellipsis overflow-hidden text-nowrap whitespace-nowrap",children:o}),e.jsxs("p",{className:"my-2 text-lg font-bold text-indigo-900",children:["₹ ",c.toLocaleString()]})]}),e.jsx("button",{className:"bg-indigo-900 p-2 my-3 w-full flex flex-row items-center justify-center gap-2 text-white font-semibold rounded-3xl hover:bg-white hover:text-indigo-900 border-2 border-indigo-900 duration-200",onClick:a,children:r?e.jsxs(e.Fragment,{children:["Go to Cart",e.jsx(t,{icon:"fa-solid fa-cart-shopping"})]}):e.jsxs(e.Fragment,{children:["Add To Cart",e.jsx(t,{icon:"fa-solid fa-cart-plus"})]})}),e.jsxs(m,{to:`/Tech-Sphere/products/${l}`,className:"bg-indigo-900 p-2 my-3 flex items-center justify-center gap-2 text-white font-semibold rounded-3xl hover:bg-white hover:text-indigo-900 border-2 border-indigo-900 duration-200",children:["View Details",e.jsx(t,{icon:"fa-solid fa-circle-info"})]})]})]})}g.propTypes={productDetails:i.shape({name:i.string.isRequired,price:i.number.isRequired,image:i.string.isRequired}).isRequired};export{g as default};
