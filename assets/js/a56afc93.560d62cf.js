"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["469"],{9128:function(e,n,o){o.r(n),o.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>t,assets:()=>s,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"app/developer/backend/DBPolifemo/TabellaGroups","title":"TabellaGroups","description":"","source":"@site/docs/app/developer/backend/DBPolifemo/TabellaGroups.md","sourceDirName":"app/developer/backend/DBPolifemo","slug":"/app/developer/backend/DBPolifemo/TabellaGroups","permalink":"/docs/app/developer/backend/DBPolifemo/TabellaGroups","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/app/developer/backend/DBPolifemo/TabellaGroups.md","tags":[],"version":"current","frontMatter":{},"sidebar":"polifemo","previous":{"title":"schermate","permalink":"/docs/app/design/schermate"},"next":{"title":"TabelleArticle","permalink":"/docs/app/developer/backend/DBPolifemo/TabelleArticle"}}'),a=o("6773"),r=o("6070");let l={},i=void 0,s={},c=[];function p(e){let n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mermaid",children:"classDiagram\n\nclass Gruppo {\n  String class\n  ENUM office\n  int primary key id\n  ENUM degree\n  ENUM school\n  String id_link\n  ENUM language\n  char type\n  String year\n  ENUM platform\n  int permanent_id \n  datetime LastUpdateInviteLinkTime\n  ENUM Linkfunzionante\n}\n\nclass office{\n  <<enumeration>>\n  Bovisa\n  Como\n  Cremona\n  Lecco\n  Leonardo\n}\n\nclass degree{\n  <<enumeration>>\n  LT\n  LM\n  LM\n}\n\nclass school{\n  <<enumeration>>\n  ICAT\n  DES\n  3I\n  ICAT+3I\n  AUIC\n}\n\nclass language{\n  <<enumeration>>\n  ITA\n  ENG\n}\n\nclass type{\n  <<enumeration>>\n  S\n  C\n  E\n}\n\nclass platform{\n  <<enumeration>>\n  WA\n  TG\n  FB\n}\n\nclass Linkfunzionante{\n  <<enumeration>>\n  Y\n  N\n}\n"})})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},6070:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return l}});var t=o(1699);let a={},r=t.createContext(a);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);