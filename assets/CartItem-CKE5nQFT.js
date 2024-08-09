import{j as e,F as r,P as i}from"./index-BBRHdr90.js";import{u,a as p,b as h}from"./useWishlist-BhRVMsjG.js";function f({productDetails:s}){const{incrementItemCount:n,decrementItemCount:a,removeItemFromCart:d}=u(s),{handleWishlistAction:l,isItemInWishlist:c}=p(s),{name:t,price:m,image:x}=h(s),o=s.count;return e.jsxs("div",{className:"shadow-product-card-shadow overflow-hidden max-w-[90vw] m-auto rounded-2xl flex flex-row items-center justify-center gap-4 py-4 px-3 flex-grow my-8",children:[e.jsx("img",{src:x,alt:t,className:"w-24 md:w-32 max-h-full"}),e.jsxs("div",{className:"flex-grow text-sm md:text-xl text-indigo-900",children:[e.jsx("p",{className:"font-semibold",children:t}),e.jsxs("p",{className:"font-semibold text-green-500",children:["₹ ",(m*o).toLocaleString()]}),e.jsxs("div",{className:"flex flex-row gap-2 items-center my-2",children:[e.jsx("button",{className:"hover:opacity-75 duration-200",onClick:a,children:e.jsx(r,{icon:"fa-solid fa-minus",className:"text-white bg-indigo-900 rounded-full h-4 w-4 p-[1.5px]"})}),e.jsx("p",{className:"font-semibold",children:o}),e.jsx("button",{className:"hover:opacity-75 duration-200",onClick:n,children:e.jsx(r,{icon:"fa-solid fa-plus",className:"text-white bg-indigo-900 rounded-full h-4 w-4 p-[1.5px]"})})]}),e.jsxs("div",{className:"my-1 flex flex-row flex-wrap items-center justify-center gap-2",children:[e.jsx("button",{className:"flex-grow py-1 px-2 border border-indigo-900 uppercase duration-200 bg-indigo-900 hover:bg-white text-white hover:text-indigo-900 rounded-xl min-w-fit",onClick:d,children:"Remove from cart"}),e.jsx("button",{className:"flex-grow py-1 px-2 border border-indigo-900 uppercase duration-200 bg-white hover:bg-indigo-900 text-indigo-900 hover:text-white rounded-xl min-w-fit",onClick:l,children:c?"Remove from wishlist":"Add to wishlist"})]})]})]})}f.propTypes={productDetails:i.shape({name:i.string.isRequired,price:i.number.isRequired,image:i.string.isRequired,count:i.number.isRequired}).isRequired};export{f as default};
