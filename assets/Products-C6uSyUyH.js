const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProductCard-lT5i33UG.js","assets/index-JGUwIxsB.js","assets/index-D-MWq9pS.css","assets/useWishlist-kBWbBCE8.js","assets/Error-BxjHcZ16.js"])))=>i.map(i=>d[i]);
import{r as t,j as e,F as p,L as i,S as n,_ as c}from"./index-JGUwIxsB.js";import{u as f}from"./useStoreItems-BadtVDfz.js";function m({search:s}){const r=t.useRef();return e.jsx("div",{className:"bg-white w-full sticky top-[72px] z-40 py-5",children:e.jsxs("label",{htmlFor:"search",className:"flex flex-row items-center justify-center text-lg  text-indigo-950 mx-auto w-fit",children:[e.jsx("input",{type:"text",id:"search",placeholder:"Type here to search",className:"py-1 px-2 border border-indigo-800 rounded-l-lg max-w-[70vw]",ref:r,onChange:()=>s(r.current.value)}),e.jsx("button",{className:"py-1 px-2 border border-l-0 border-indigo-950 rounded-r-lg bg-indigo-950 text-white hover:bg-indigo-700 duration-200",onClick:()=>s(r.current.value),children:e.jsx(p,{icon:"fa-solid fa-magnifying-glass"})})]})})}const h=t.lazy(()=>c(()=>import("./ProductCard-lT5i33UG.js"),__vite__mapDeps([0,1,2,3]))),g=t.lazy(()=>c(()=>import("./Error-BxjHcZ16.js"),__vite__mapDeps([4,1,2])));function w(){const{products:s,status:r}=f(),[l,a]=t.useState([...s]),d=t.useCallback(o=>{if(!o)a(s);else{const u=s.filter(x=>x.name.toLowerCase().startsWith(o.toLowerCase()));a(u)}},[s,a]);switch(r){case n.LOADING:return e.jsx(i,{});case n.ERROR:return e.jsx(t.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(g,{})});default:return e.jsxs(e.Fragment,{children:[e.jsx(m,{search:d}),e.jsx("div",{className:"flex flex-row flex-wrap items-stretch justify-center gap-10 mt-5 mb-10 lg:gap-20",children:e.jsx(t.Suspense,{fallback:e.jsx(i,{}),children:l.length>0?l.map(o=>e.jsx(h,{productDetails:o},o.id)):e.jsx("p",{className:"text-2xl font-semibold text-indigo-900",children:"No products found"})})})]})}}export{w as default};
