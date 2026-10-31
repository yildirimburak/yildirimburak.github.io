import{a as e,c as t,f as n,h as r,l as i,n as a,o,p as s,r as c,s as l,t as u,u as d}from"./navigation-B5n_tOTE.js";var f=u();document.querySelectorAll(`[data-lang-btn]`).forEach(e=>{e.addEventListener(`click`,()=>n(e.dataset.langBtn))}),document.querySelector(`[data-print-btn]`)?.addEventListener(`click`,()=>{window.print()});var p=document.querySelector(`[data-spec-swatches]`),m=document.querySelector(`[data-spec-active]`),h=document.querySelector(`[data-xsec-rows]`),g=document.querySelector(`[data-tech-uses]`),_=document.querySelector(`[data-tech-docs]`);c.forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`spec-sw`,t.dataset.code=e.code,t.innerHTML=`
    <img src="${i.thumb(e.code)}" alt="${e.code}" width="48" height="48" loading="lazy" />
    <span>${e.code.replace(`CNT`,``)}</span>
  `,t.addEventListener(`click`,()=>s(e.code)),p?.appendChild(t)});function v(n){document.documentElement.lang=n,document.title=t(n,`tech.meta.title`),document.querySelector(`meta[name="description"]`)?.setAttribute(`content`,t(n,`tech.meta.desc`)),document.querySelectorAll(`[data-t]`).forEach(e=>{e.textContent=t(n,e.dataset.t)}),document.querySelectorAll(`[data-lang-btn]`).forEach(e=>{e.setAttribute(`aria-pressed`,String(e.dataset.langBtn===n))});let r=`/?lang=${n}`;if(document.querySelectorAll(`[data-home-href]`).forEach(e=>e.setAttribute(`href`,r)),f.render(n),h){let e=[`xsec-bar--tile`,`xsec-bar--adh`,`xsec-bar--cu`,`xsec-bar--sub`];h.innerHTML=``,o.forEach((t,r)=>{let i=document.createElement(`div`);i.className=`xsec-row`,i.innerHTML=`
        <div class="xsec-bar ${e[r]}" ${r===0?`data-xsec-tile`:``}></div>
        <span style="font-variant-numeric:tabular-nums;font-size:12px;font-weight:600;color:var(--amber-soft)">${t.num}</span>
        <div>
          <strong style="display:block;font-size:15.5px;font-weight:600">${t[n].name}</strong>
          <span style="font-size:13.5px;color:var(--text-2)">${t[n].role}</span>
        </div>
        <span style="font-variant-numeric:tabular-nums;font-size:12px;color:var(--text-3)">${t[n].gauge}</span>
      `,h.appendChild(i)})}g&&(g.innerHTML=``,e.forEach(e=>{let t=document.createElement(`li`);t.innerHTML=`
        <strong style="display:block;font-size:15.5px;color:var(--text-1);margin-bottom:4px"><span style="color:var(--amber-soft)">${e.num}</span> · ${e[n].title}</strong>
        <span>${e[n].desc}</span>
      `,g.appendChild(t)})),_&&(_.innerHTML=``,a.forEach(e=>{let t=document.createElement(`a`);t.className=`tech-doc`,t.href=e.href,t.target=`_blank`,t.rel=`noopener`,t.innerHTML=`
        <img src="${e.thumb}" alt="" width="54" height="70" loading="lazy" />
        <div>
          <span style="font-variant-numeric:tabular-nums;font-size:11px;font-weight:600;letter-spacing:0.05em;color:var(--amber-soft)">${e.code}</span>
          <strong style="display:block;font-size:15px;font-weight:600">${e[n].title}</strong>
          <span style="font-size:13px;color:var(--text-3)">${e[n].sub}</span>
        </div>
        <span class="doc-pill__arrow" aria-hidden="true">↗</span>
      `,_.appendChild(t)}))}function y(e){let t=l(e.pattern,e.lang);p?.querySelectorAll(`.spec-sw`).forEach(t=>{t.classList.toggle(`is-active`,t.dataset.code===e.pattern),t.setAttribute(`aria-pressed`,String(t.dataset.code===e.pattern))}),m&&(m.innerHTML=`<strong>${e.pattern} · ${t.name}</strong> <span>— ${t.familyLabel} · 600 × 600 mm</span>`);let n=document.querySelector(`[data-xsec-tile]`);n&&(n.style.backgroundImage=`url('${i.thumb(e.pattern)}')`)}var b=d();v(b.lang),y(b),r((e,t)=>{t===`lang`&&v(e.lang),y(e)});