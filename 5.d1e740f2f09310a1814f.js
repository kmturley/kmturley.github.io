(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{L6id:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),i=t("pMnS"),o=t("ZYCi"),r=t("Ip0R"),s=t("7Cbb"),a=t("a18t"),c=t("fECr"),g=t("AytR"),b=t("eokG"),d=function(){function l(l){this.api=l}return l.prototype.ngOnInit=function(){var l=this;console.log("HomeComponent"),this.api.get(""+g.a.API_URL+g.a.SHEET_ID+"?includeGridData=true","articles").subscribe(function(n){l.articles=n}),this.api.get(""+g.a.API_URL+g.a.SHEET_ID+"?includeGridData=true","awards").subscribe(function(n){l.awards=n}),this.api.get(""+g.a.API_URL+g.a.SHEET_ID+"?includeGridData=true","brands").subscribe(function(n){l.brands=n}),this.api.get(""+g.a.API_URL+g.a.SHEET_ID+"?includeGridData=true","projects").subscribe(function(n){l.projects=n})},l}(),p=e.mb({encapsulation:0,styles:[[".section-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.services[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]{margin-top:2rem}.services[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]{align-items:center;border-bottom:.15rem solid #d4bb98;display:flex;margin-top:.8rem}.services[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{align-self:flex-start;margin:0 1.5rem .5rem 0;width:3rem}.services[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 .5rem}.services[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]:last-child{border-bottom:none}@media (min-width:64rem){.service-list[_ngcontent-%COMP%]{align-items:flex-start;display:flex}.service-list[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]{border-bottom:none;border-right:.15rem solid #d4bb98;padding-right:1rem;margin-right:1.5rem}.service-list[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]:last-child{border:none;margin-right:0;padding-right:0}}.projects[_ngcontent-%COMP%]{background-color:#333}.projects[_ngcontent-%COMP%]   .section-inner[_ngcontent-%COMP%]{padding-bottom:0}.projects[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff}.projects[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]{height:15rem}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]{position:relative;transition:-webkit-transform .1s ease-out;transition:transform .1s ease-out;transition:transform .1s ease-out,-webkit-transform .1s ease-out;z-index:1}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#fff;bottom:0;color:#333;left:0;padding:.5rem .75rem;position:absolute;z-index:1}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%]{font-size:1.1em;line-height:1.5em}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]:hover{-webkit-transform:scale(1.1);transform:scale(1.1);z-index:2}.projects[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;height:10rem}.articles[_ngcontent-%COMP%]{background-color:#efefef}.articles[_ngcontent-%COMP%]   .section-inner[_ngcontent-%COMP%]{padding-bottom:0}.articles[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]{height:9rem}.articles[_ngcontent-%COMP%]   .article[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 10px rgba(0,0,0,.15);color:#333;line-height:1.5em;max-width:15rem;padding:1rem;position:relative;text-decoration:none;transition:-webkit-transform .1s ease-out;transition:transform .1s ease-out;transition:transform .1s ease-out,-webkit-transform .1s ease-out;vertical-align:top;white-space:normal;z-index:1}.articles[_ngcontent-%COMP%]   .article[_ngcontent-%COMP%]:hover{-webkit-transform:scale(1.1);transform:scale(1.1);z-index:2}.articles[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{bottom:.75rem;position:absolute;right:.75rem;z-index:1}.brands[_ngcontent-%COMP%]{background-color:#333}.brands[_ngcontent-%COMP%]   .section-inner[_ngcontent-%COMP%]{padding-bottom:0}.brands[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .brands[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff}.brands[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]{height:9rem}.brands[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:4rem;margin-right:3rem}.brands[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   img.lazy-loaded[_ngcontent-%COMP%]{max-width:6rem}.awards[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]{height:8rem}.awards[_ngcontent-%COMP%]   .award[_ngcontent-%COMP%]{color:#555;font-size:.8rem;margin-top:0;text-decoration:none;vertical-align:middle}.awards[_ngcontent-%COMP%]   .award[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.awards[_ngcontent-%COMP%]   .award[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:4rem;margin-right:3rem}.awards[_ngcontent-%COMP%]   .award[_ngcontent-%COMP%]   img.lazy-loaded[_ngcontent-%COMP%]{max-width:6rem}"]],data:{}});function m(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,8,"a",[["class","carousel-item project"]],[[8,"title",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.wb(l,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e.nb(1,671744,null,0,o.l,[o.k,o.a,r.g],{routerLink:[0,"routerLink"]},null),(l()(),e.ob(2,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,1,"strong",[["class","project-name"]],null,null,null,null,null)),(l()(),e.Cb(4,null,["",""])),(l()(),e.ob(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(6,null,["",""])),(l()(),e.ob(7,0,null,null,1,"img",[["appLazyLoadImage",""],["src","../assets/projects/placeholder.jpg"]],[[8,"alt",0]],null,null,null,null)),e.nb(8,81920,null,0,s.a,[e.k,e.B],{srcLazy:[0,"srcLazy"]},null)],function(l,n){l(n,1,0,n.context.$implicit.path),l(n,8,0,n.context.$implicit.images[0])},function(l,n){l(n,0,0,n.context.$implicit.description,e.wb(n,1).target,e.wb(n,1).href),l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.client),l(n,7,0,n.context.$implicit.name)})}function C(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,2,"a",[["class","carousel-item article"],["rel","noopener"],["target","_blank"]],[[8,"href",4],[8,"title",0]],null,null,null,null)),(l()(),e.Cb(1,null,[" "," "])),(l()(),e.ob(2,0,null,null,0,"img",[["alt","open"],["class","link"],["src","../assets/link.svg"]],null,null,null,null,null))],null,function(l,n){l(n,0,0,n.context.$implicit.url,n.context.$implicit.name),l(n,1,0,n.context.$implicit.name)})}function h(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,2,"a",[["class","carousel-item brand"],["rel","noopener"],["target","_blank"]],[[8,"href",4],[8,"title",0]],null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"img",[["appLazyLoadImage",""],["src","../assets/brands/placeholder.jpg"]],[[8,"alt",0]],null,null,null,null)),e.nb(2,81920,null,0,s.a,[e.k,e.B],{srcLazy:[0,"srcLazy"]},null)],function(l,n){l(n,2,0,n.context.$implicit.images[0])},function(l,n){l(n,0,0,n.context.$implicit.url,n.context.$implicit.name),l(n,1,0,n.context.$implicit.name)})}function O(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,4,"a",[["class","carousel-item award"],["rel","noopener"],["target","_blank"]],[[8,"href",4],[8,"title",0]],null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"img",[["appLazyLoadImage",""],["src","../assets/awards/placeholder.jpg"]],[[8,"alt",0]],null,null,null,null)),e.nb(2,81920,null,0,s.a,[e.k,e.B],{srcLazy:[0,"srcLazy"]},null),(l()(),e.ob(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Cb(4,null,["",""]))],function(l,n){l(n,2,0,n.context.$implicit.images[0])},function(l,n){l(n,0,0,n.context.$implicit.url,n.context.$implicit.description),l(n,1,0,n.context.$implicit.name),l(n,4,0,n.context.$implicit.year)})}function _(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,1,"app-header",[["image","true"],["subtitle","14 years experience creating cutting-edge digital experiences in partnership with top brands."],["title","Digital Strategist, Creative Thinker & Technologist"]],null,null,null,a.b,a.a)),e.nb(1,114688,null,0,c.a,[],{image:[0,"image"],subtitle:[1,"subtitle"],title:[2,"title"]},null),(l()(),e.ob(2,0,null,null,19,"div",[["class","section services"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,18,"div",[["class","section-inner"]],null,null,null,null,null)),(l()(),e.ob(4,0,null,null,1,"h3",[["class","underline"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Skills"])),(l()(),e.ob(6,0,null,null,15,"div",[["class","service-list"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,4,"div",[["class","service"]],null,null,null,null,null)),(l()(),e.ob(8,0,null,null,1,"img",[["alt","Lightbulb"],["appLazyLoadImage",""],["src","../assets/skills/placeholder.jpg"],["srcLazy","../assets/skills/lightbulb.svg"]],null,null,null,null,null)),e.nb(9,81920,null,0,s.a,[e.k,e.B],{srcLazy:[0,"srcLazy"]},null),(l()(),e.ob(10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Uncovering unmet market needs and inventing products & services with impact."])),(l()(),e.ob(12,0,null,null,4,"div",[["class","service"]],null,null,null,null,null)),(l()(),e.ob(13,0,null,null,1,"img",[["alt","Route"],["appLazyLoadImage",""],["src","../assets/skills/placeholder.jpg"],["srcLazy","../assets/skills/route.svg"]],null,null,null,null,null)),e.nb(14,81920,null,0,s.a,[e.k,e.B],{srcLazy:[0,"srcLazy"]},null),(l()(),e.ob(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Transforming teams & processes to cope with our ever-changing world."])),(l()(),e.ob(17,0,null,null,4,"div",[["class","service"]],null,null,null,null,null)),(l()(),e.ob(18,0,null,null,1,"img",[["alt","Products"],["appLazyLoadImage",""],["src","../assets/skills/placeholder.jpg"],["srcLazy","../assets/skills/products.svg"]],null,null,null,null,null)),e.nb(19,81920,null,0,s.a,[e.k,e.B],{srcLazy:[0,"srcLazy"]},null),(l()(),e.ob(20,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Designing and building secure, scalable digital products & services quickly."])),(l()(),e.ob(22,0,null,null,10,"div",[["class","section projects"]],null,null,null,null,null)),(l()(),e.ob(23,0,null,null,6,"div",[["class","section-inner"]],null,null,null,null,null)),(l()(),e.ob(24,0,null,null,5,"div",[["class","section-title"]],null,null,null,null,null)),(l()(),e.ob(25,0,null,null,1,"h3",[["class","underline"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Projects"])),(l()(),e.ob(27,0,null,null,2,"a",[["routerLink","projects"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.wb(l,28).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e.nb(28,671744,null,0,o.l,[o.k,o.a,r.g],{routerLink:[0,"routerLink"]},null),(l()(),e.Cb(-1,null,["view all"])),(l()(),e.ob(30,0,null,null,2,"div",[["class","carousel"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,m)),e.nb(32,278528,null,0,r.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ob(33,0,null,null,6,"div",[["class","section articles"]],null,null,null,null,null)),(l()(),e.ob(34,0,null,null,2,"div",[["class","section-inner"]],null,null,null,null,null)),(l()(),e.ob(35,0,null,null,1,"h3",[["class","underline"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Articles"])),(l()(),e.ob(37,0,null,null,2,"div",[["class","carousel"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,C)),e.nb(39,278528,null,0,r.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ob(40,0,null,null,6,"div",[["class","section brands"]],null,null,null,null,null)),(l()(),e.ob(41,0,null,null,2,"div",[["class","section-inner"]],null,null,null,null,null)),(l()(),e.ob(42,0,null,null,1,"h3",[["class","underline"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Partners"])),(l()(),e.ob(44,0,null,null,2,"div",[["class","carousel"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,h)),e.nb(46,278528,null,0,r.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ob(47,0,null,null,6,"div",[["class","section awards"]],null,null,null,null,null)),(l()(),e.ob(48,0,null,null,2,"div",[["class","section-inner"]],null,null,null,null,null)),(l()(),e.ob(49,0,null,null,1,"h3",[["class","underline"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Awards"])),(l()(),e.ob(51,0,null,null,2,"div",[["class","carousel"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,O)),e.nb(53,278528,null,0,r.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,1,0,"true","14 years experience creating cutting-edge digital experiences in partnership with top brands.","Digital Strategist, Creative Thinker & Technologist"),l(n,9,0,"../assets/skills/lightbulb.svg"),l(n,14,0,"../assets/skills/route.svg"),l(n,19,0,"../assets/skills/products.svg"),l(n,28,0,"projects"),l(n,32,0,t.projects),l(n,39,0,t.articles),l(n,46,0,t.brands),l(n,53,0,t.awards)},function(l,n){l(n,27,0,e.wb(n,28).target,e.wb(n,28).href)})}function f(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,1,"app-home",[],null,null,null,_,p)),e.nb(1,114688,null,0,d,[b.a],null,null)],function(l,n){l(n,1,0)},null)}var P=e.kb("app-home",d,f,{},{},[]),M=t("PCNd");t.d(n,"HomeModuleNgFactory",function(){return v});var v=e.lb(u,[],function(l){return e.ub([e.vb(512,e.j,e.bb,[[8,[i.a,P]],[3,e.j],e.x]),e.vb(4608,r.k,r.j,[e.u,[2,r.s]]),e.vb(1073742336,o.m,o.m,[[2,o.t],[2,o.k]]),e.vb(1073742336,r.b,r.b,[]),e.vb(1073742336,M.a,M.a,[]),e.vb(1073742336,u,u,[]),e.vb(1024,o.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})}}]);