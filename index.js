import{a as d,S as f,i as a}from"./assets/vendor-lDhL-8I6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="42434028-6957339565ff307ea1e8da0af";async function g(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:o}).then(r=>r.data).catch(r=>{throw new Error("Error fetching images")})}function h(s){const{webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:n,downloads:u}=s;return`
    <li class="gallery-item">
    <a href="${r}">
      <img src="${o}" alt="${i}" />
      </a>
      <div class="info">
        <p><strong>Likes</strong><br>${e}</p>
        <p><strong>Views</strong><br>${t}</p>
        <p><strong>Comments</strong><br>${n}</p>
        <p><strong>Downloads</strong><br>${u}</p>
      </div>
    </li>
  `}let c=null;function y(s,o){const r=s.map(h).join("");o.innerHTML=r,c?c.refresh():c=new f(".gallery a",{captionsData:"alt",captionDelay:250})}const L=document.querySelector(".form"),b=document.querySelector('input[name="search-text"]'),l=document.querySelector(".gallery");L.addEventListener("submit",s=>{s.preventDefault();const o=b.value.trim();if(o===""){a.error({message:"Please enter a search term!",position:"topRight"});return}l.innerHTML="",loader.classList.remove("hidden"),g(o).then(r=>{if(loader.classList.add("hidden"),r.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(r.hits,l)}).catch(r=>{loader.classList.add("hidden"),a.error({message:"Something went wrong. Try again later.",position:"topRight"}),console.error(r)})});
//# sourceMappingURL=index.js.map
