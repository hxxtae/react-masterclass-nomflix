"use strict";(self.webpackChunknomflix=self.webpackChunknomflix||[]).push([[234],{6234:function(n,e,i){i.r(e),i.d(e,{default:function(){return G}});var t,r,a,l,o,s=i(1413),d=i(9439),c=i(2791),u=i(3791),h=i(8931),x=i(7259),p=i(6863),g=i(1621),f=i(6420),m=i(168),v=i(5751),j=i(1220),k=v.ZP.div(t||(t=(0,m.Z)(["\n  position: relative;\n  padding-top: ","px;\n  margin: 0px 4% 100px;\n"])),j.Mz),Z=i(1314),b=v.ZP.section(r||(r=(0,m.Z)(["\n  position: absolute;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n  background-color: ",";\n\n  "," {\n    font-size: 10px;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor}),(0,Z.BC)("mobile")),C=v.ZP.div(a||(a=(0,m.Z)(["\n  padding: 0 20px;\n  margin-bottom: 10%;\n"]))),y=v.ZP.p(l||(l=(0,m.Z)(["\n  margin-bottom: 20px;\n"]))),S=v.ZP.ul(o||(o=(0,m.Z)(["\n  padding-left: 40px;\n  margin: 20px 0;\n  line-height: 1.2;\n  \n  li {\n    list-style: disc;\n  }\n"]))),w=i(184);var P,T,L=function(n){var e=n.searchText;return(0,w.jsx)(b,{children:(0,w.jsxs)(C,{children:[(0,w.jsx)(y,{children:'Your search for "'.concat(e,'" did not have any matches.')}),(0,w.jsx)(y,{children:"Suggestions:"}),(0,w.jsxs)(S,{children:[(0,w.jsx)("li",{children:"Try different keywords"}),(0,w.jsx)("li",{children:"Looking for a movie or TV show?"}),(0,w.jsx)("li",{children:"Try using a movie, TV show title, an actor or director"}),(0,w.jsx)("li",{children:"Try a genre, like comedy, romance, sports, or drama"})]})]})})},E=v.ZP.h2(P||(P=(0,m.Z)(["\n  display: block;\n  font-size: 30px;\n  font-weight: bold;\n  \n  &:nth-of-type(1) {\n    padding-top: 50px;\n  }\n"]))),M=v.ZP.ul(T||(T=(0,m.Z)(["\n  padding: 50px 0px;\n  display: grid;\n  gap: 4vw 0.4vw;\n  grid-template-columns: repeat(6, 1fr);\n\n  "," {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])),(0,Z.BC)("tablet"),(0,Z.BC)("mobile")),U=i(5562);var B=function(n){var e=n.title,i=n.isLoading,t=n.datas,r=n.kind,a=n.detailClick;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(E,{children:e}),(0,w.jsx)(M,{children:i?(0,w.jsx)(f.eM,{}):null===t||void 0===t?void 0:t.map((function(n,e){return n.backdrop_path?(0,w.jsx)(U.Z,{data:n,kind:r,detailClick:a},n.id+e):null}))})]})};var G=function(){var n=(0,h.TH)(),e=new URLSearchParams(n.search).get("keyword")||"",i=(0,c.useState)(g.tG),t=(0,d.Z)(i,2),r=t[0],a=t[1],l=(0,c.useState)(g.gx.Search),o=(0,d.Z)(l,2),m=o[0],v=o[1],j=g.EG.movie.search(e),Z=(0,p.DU)(j,(function(){return x.h.getMovieSearchAll(e)})),b=Z.isLoading,C=Z.datas,y=g.EG.tv.search(e),S=(0,p.DU)(y,(function(){return x.h.getTvSearchAll(e)})),P=S.isLoading,T=S.datas,E=b||P,M=(0,c.useCallback)((function(n){null!==n&&void 0!==n&&n.id&&(v(g.gx.Search),a((function(e){return(0,s.Z)((0,s.Z)({},e),n)})))}),[]),U=(0,c.useCallback)((function(n){null!==n&&void 0!==n&&n.id&&(v(g.PU.Search),a((function(e){return(0,s.Z)((0,s.Z)({},e),n)})))}),[]),G=(0,c.useCallback)((function(){a((function(n){return(0,s.Z)((0,s.Z)({},n),g.tG)}))}),[]);return(0,c.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,w.jsx)(u.M,{children:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(k,{children:[(0,w.jsx)(B,{title:"MOVIE",isLoading:b,datas:C,kind:g.gx.Search,detailClick:M}),(0,w.jsx)(B,{title:"SERIES",isLoading:P,datas:T,kind:g.PU.Search,detailClick:U}),!E&&!(null!==C&&void 0!==C&&C.length)&&!(null!==T&&void 0!==T&&T.length)&&(0,w.jsx)(L,{searchText:e})]}),!!r.id&&(0,w.jsx)(f.BM,{children:(0,w.jsx)(f.O6,{data:r,kind:m,closeDetail:G})})]})})}}}]);
//# sourceMappingURL=234.cec03058.chunk.js.map