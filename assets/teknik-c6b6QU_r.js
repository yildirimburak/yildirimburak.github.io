import{a as e,d as t,g as n,h as r,i,l as a,m as o,o as s,p as c,s as l,t as u,u as d}from"./navigation-DWS_va2u.js";var f=u();document.querySelectorAll(`[data-lang-btn]`).forEach(e=>{e.addEventListener(`click`,()=>s(e.dataset.langBtn))}),document.querySelector(`[data-print-btn]`)?.addEventListener(`click`,()=>{window.print()});var p=document.querySelector(`[data-spec-swatches]`),m=document.querySelector(`[data-spec-active]`),h=document.querySelector(`[data-xsec-rows]`),g=document.querySelector(`[data-tech-uses]`),_=document.querySelector(`[data-tech-docs]`);t.forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`spec-sw`,t.dataset.code=e.code,t.innerHTML=`
    <img src="${i.thumb(e.code)}" alt="${e.code}" width="48" height="48" loading="lazy" />
    <span>${e.code.replace(`CNT`,``)}</span>
  `,t.addEventListener(`click`,()=>l(e.code)),p?.appendChild(t)});function v(t){document.documentElement.lang=t,document.title=n(t,`tech.meta.title`),document.querySelector(`meta[name="description"]`)?.setAttribute(`content`,n(t,`tech.meta.desc`)),document.querySelectorAll(`[data-t]`).forEach(e=>{e.textContent=n(t,e.dataset.t)}),document.querySelectorAll(`[data-lang-btn]`).forEach(e=>{e.setAttribute(`aria-pressed`,String(e.dataset.langBtn===t))});let r=`/?lang=${t}`;if(document.querySelectorAll(`[data-home-href]`).forEach(t=>t.setAttribute(`href`,r+`&yuzey=`+e().pattern+(t.dataset.homeHash||``))),f.render(t),h){let e=[`xsec-bar--tile`,`xsec-bar--adh`,`xsec-bar--cu`,`xsec-bar--sub`];h.innerHTML=``,o.forEach((n,r)=>{let i=document.createElement(`div`);i.className=`xsec-row`,i.innerHTML=`
        <div class="xsec-bar ${e[r]}" ${r===0?`data-xsec-tile`:``}></div>
        <span style="font-variant-numeric:tabular-nums;font-size:12px;font-weight:600;color:var(--amber-soft)">${n.num}</span>
        <div>
          <strong style="display:block;font-size:15.5px;font-weight:600">${n[t].name}</strong>
          <span style="font-size:13.5px;color:var(--text-2)">${n[t].role}</span>
        </div>
        <span style="font-variant-numeric:tabular-nums;font-size:12px;color:var(--text-3)">${n[t].gauge}</span>
      `,h.appendChild(i)})}g&&(g.innerHTML=``,c.forEach(e=>{let n=document.createElement(`li`);n.innerHTML=`
        <strong style="display:block;font-size:15.5px;color:var(--text-1);margin-bottom:4px"><span style="color:var(--amber-soft)">${e.num}</span> · ${e[t].title}</strong>
        <span>${e[t].desc}</span>
      `,g.appendChild(n)})),_&&(_.innerHTML=``,d.forEach(e=>{let n=document.createElement(`a`);n.className=`tech-doc`,n.href=e.href,n.target=`_blank`,n.rel=`noopener`,n.innerHTML=`
        <img src="${e.thumb}" alt="" width="54" height="70" loading="lazy" />
        <div>
          <span style="font-variant-numeric:tabular-nums;font-size:11px;font-weight:600;letter-spacing:0.05em;color:var(--amber-soft)">${e.code}</span>
          <strong style="display:block;font-size:15px;font-weight:600">${e[t].title}</strong>
          <span style="font-size:13px;color:var(--text-3)">${e[t].sub}</span>
        </div>
        <span class="doc-pill__arrow" aria-hidden="true">↗</span>
      `,_.appendChild(n)}))}var y=new URLSearchParams(location.search).get(`yuzey`);y&&l(y);function b(e){document.querySelectorAll(`[data-home-href]`).forEach(t=>t.setAttribute(`href`,`/?lang=${e.lang}&yuzey=${e.pattern}${t.dataset.homeHash||``}`));let t=r(e.pattern,e.lang);p?.querySelectorAll(`.spec-sw`).forEach(t=>{t.classList.toggle(`is-active`,t.dataset.code===e.pattern),t.setAttribute(`aria-pressed`,String(t.dataset.code===e.pattern))}),m&&(m.innerHTML=`<strong>${e.pattern} · ${t.name}</strong> <span>— ${t.familyLabel} · 600 × 600 mm</span>`);let n=document.querySelector(`[data-xsec-tile]`);n&&(n.style.backgroundImage=`url('${i.thumb(e.pattern)}')`)}var x=e();v(x.lang),b(x),a((e,t)=>{t===`lang`&&v(e.lang),b(e)});