const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProductDetailCard-pjz9YP-l.js","assets/index-BBRHdr90.js","assets/index-u2YmacFB.css","assets/useWishlist-BhRVMsjG.js","assets/Error-DrwqlouG.js"])))=>i.map(i=>d[i]);
import{r as s,u as x,j as t,L as r,S as f,_ as n}from"./index-BBRHdr90.js";import{u as _}from"./useStoreItems-tR8lc5KE.js";const p=s.lazy(()=>n(()=>import("./ProductDetailCard-pjz9YP-l.js"),__vite__mapDeps([0,1,2,3]))),j=s.lazy(()=>n(()=>import("./Error-DrwqlouG.js"),__vite__mapDeps([4,1,2])));function E(){const{products:e,status:a}=_(),[o,u]=s.useState(null),{productId:c}=x(),d=s.useCallback(()=>{const i=e.findIndex(l=>l.id===c);i!==-1&&u(e[i])},[e,c,u]);switch(s.useEffect(()=>{d()},[e,a,d]),a){case f.ERROR:return t.jsx(s.Suspense,{fallback:t.jsx(r,{}),children:t.jsx(j,{})});default:return t.jsx("div",{className:"min-h-[80vh] flex items-center justify-center",children:o?t.jsx(s.Suspense,{fallback:t.jsx(r,{}),children:t.jsx(p,{productDetail:o})}):t.jsx(r,{})})}}export{E as default};
