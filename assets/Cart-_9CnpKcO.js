const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CartItem-CKE5nQFT.js","assets/index-BBRHdr90.js","assets/index-u2YmacFB.css","assets/useWishlist-BhRVMsjG.js","assets/PlaceOrderWindow-DH-7Fxdu.js"])))=>i.map(i=>d[i]);
import{b as c,j as e,r,L as a,_ as l}from"./index-BBRHdr90.js";const i=r.lazy(()=>l(()=>import("./CartItem-CKE5nQFT.js"),__vite__mapDeps([0,1,2,3]))),o=r.lazy(()=>l(()=>import("./PlaceOrderWindow-DH-7Fxdu.js"),__vite__mapDeps([4,1,2])));function n(){const t=c(s=>s.cart.value);return e.jsxs("div",{className:"lg:flex lg:flex-row lg:justify-center",children:[e.jsx("div",{className:"mb-40 lg:max-w-[60vw] lg:px-10",children:e.jsx(r.Suspense,{fallback:e.jsx(a,{}),children:t.length>0?t.map(s=>e.jsx(i,{productDetails:s},s.id)):e.jsx("div",{className:"text-xl md:text-2xl font-semibold my-20 text-center text-indigo-900",children:"Your cart is empty."})})}),t.length>0?e.jsx(r.Suspense,{fallback:e.jsx(a,{}),children:e.jsx(o,{cartItems:t})}):""]})}export{n as default};
