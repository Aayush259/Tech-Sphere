import{b as u,c as h,d as p,r as l,e as C,f as v,i as W,g,h as $,k as f}from"./index-BBRHdr90.js";const x=t=>({id:t.id,name:t.name,price:t.price,image:t.image,description:t.description}),I=x,A=t=>{const n=u(r=>r.cart.value),s=h(),a=p(),{id:e}=I(t),c=()=>{s(C(t))},i=()=>{s(v(e))},m=()=>{s(W(e))},o=()=>{s(g(e))},d=l.useMemo(()=>n.some(r=>r.id===e),[n,e]);return{addItemInCart:c,removeItemFromCart:i,incrementItemCount:m,decrementItemCount:o,isItemInCart:d,handleCartAction:()=>{d?a("/Tech-Sphere/cart"):c()}}},F=A,E=t=>{const n=u(o=>o.wishlist.value),s=h(),{id:a}=I(t),e=()=>{s($(t))},c=()=>{s(f(a))},i=l.useMemo(()=>n.some(o=>o.id===a),[n,a]);return{handleWishlistAction:()=>{i?c():e()},isItemInWishlist:i}},M=E;export{M as a,I as b,F as u};
