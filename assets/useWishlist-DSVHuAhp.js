import{b as d,c as h,d as p,r as a,e as b,f as k,i as v,g as W,h as g,k as $}from"./index-IYNABAAa.js";const f=s=>({id:s.id,name:s.name,price:s.price,image:s.image,description:s.description}),I=f,x=s=>{const n=d(l=>l.cart.value),t=h(),c=p(),{id:e}=I(s),o=a.useCallback(()=>{t(b(s))},[s,t]),i=a.useCallback(()=>{t(k(e))},[e,t]),u=a.useCallback(()=>{t(v(e))},[e,t]),r=a.useCallback(()=>{t(W(e))},[e,t]),m=a.useMemo(()=>n.some(l=>l.id===e),[n,e]),C=a.useCallback(()=>{m?c("/Tech-Sphere/cart"):o()},[c,o]);return{addItemInCart:o,removeItemFromCart:i,incrementItemCount:u,decrementItemCount:r,isItemInCart:m,handleCartAction:C}},w=x,A=s=>{const n=d(r=>r.wishlist.value),t=h(),{id:c}=I(s),e=a.useCallback(()=>{t(g(s))},[s,t]),o=a.useCallback(()=>{t($(c))},[c,t]),i=a.useMemo(()=>n.some(r=>r.id===c),[n,c]);return{handleWishlistAction:()=>{i?o():e()},isItemInWishlist:i}},F=A;export{F as a,I as b,w as u};
