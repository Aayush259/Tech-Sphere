const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProductCard-Dk2muT4f.js","assets/index-C1jp3ioY.js","assets/index-u2YmacFB.css","assets/useWishlist-DdfLFfE_.js","assets/Error-DA9z5xFY.js"])))=>i.map(i=>d[i]);
import{j as s,r,L as t,S as a,_ as o}from"./index-C1jp3ioY.js";import{u as d}from"./useStoreItems-C8iV3Whg.js";const i=r.lazy(()=>o(()=>import("./ProductCard-Dk2muT4f.js"),__vite__mapDeps([0,1,2,3]))),l=r.lazy(()=>o(()=>import("./Error-DA9z5xFY.js"),__vite__mapDeps([4,1,2])));function p(){const{products:u,status:c}=d();switch(c){case a.LOADING:return s.jsx(t,{});case a.ERROR:return s.jsx(r.Suspense,{fallback:s.jsx(t,{}),children:s.jsx(l,{})});default:return s.jsx(r.Suspense,{fallback:s.jsx(t,{}),children:u.slice(3,6).map(e=>s.jsx(i,{productDetails:e},e.id))})}}export{p as default};
