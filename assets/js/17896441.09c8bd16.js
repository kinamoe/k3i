(self.webpackChunkkiii=self.webpackChunkkiii||[]).push([[918],{8070:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var n=a(7294),r=a(6742),i=a(4973);var l=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},s=a(2263),o=a(907),c=a(9306);var d={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function m(e){var t=d[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.versionMetadata,r=(0,s.Z)().siteConfig.title,i=(0,o.gA)({failfast:!0}).pluginId,l=(0,c.J)(i).savePreferredVersionName,d=(0,o.Jo)(i),v=d.latestDocSuggestion,h=d.latestVersionSuggestion,E=null!=v?v:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(m,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:h.label,to:E.path,onClick:function(){return l(h.name)}})))}var h=function(e){var t=e.versionMetadata;return"none"===t.banner?n.createElement(n.Fragment,null):n.createElement(v,{versionMetadata:t})},E=a(1217);function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function p(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function g(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement(n.Fragment,null,n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(p,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var b=a(571),_=a(6146),N=a(6159),L=a(6010),k="docItemContainer_33ec",Z="lastUpdated_3DPF",U="docItemCol_3FnS";var T=function(e){var t,a=e.content,r=e.versionMetadata,i=a.metadata,s=a.frontMatter,c=s.image,d=s.keywords,m=s.hide_title,u=s.hide_table_of_contents,v=i.description,f=i.title,p=i.editUrl,T=i.lastUpdatedAt,y=i.formattedLastUpdatedAt,w=i.lastUpdatedBy,A=(0,o.gA)({failfast:!0}).pluginId,C=(0,o.gB)(A).length>1,B=!m&&void 0===a.contentTitle;return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:f,description:v,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,L.Z)("col",(t={},t[U]=!u,t))},n.createElement(h,{versionMetadata:r}),n.createElement("div",{className:k},n.createElement("article",null,C&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",r.label),n.createElement("div",{className:"markdown"},B&&n.createElement(N.N,null,f),n.createElement(a,null)),(p||T||w)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},p&&n.createElement(_.Z,{editUrl:p})),n.createElement("div",{className:(0,L.Z)("col",Z)},(T||w)&&n.createElement(g,{lastUpdatedAt:T,formattedLastUpdatedAt:y,lastUpdatedBy:w})))),n.createElement(l,{metadata:i}))),!u&&a.toc&&n.createElement("div",{className:"col col--3"},n.createElement(b.Z,{toc:a.toc}))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(7294),r=a(4973),i=a(2122),l=a(9756),s=a(6010),o="iconEdit_2_ui",c=["className"],d=function(e){var t=e.className,a=(0,l.Z)(e,c);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(d,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:function(e,t,a){"use strict";a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(9756),r=a(2122),i=a(7294),l=a(6010),s=a(4973),o=a(9306),c="enhancedAnchor_2LWZ",d="h1Heading_27L5",m=["id"],u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0,className:d}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,r=e.id,d=(0,n.Z)(e,m),u=(0,o.LU)().navbar.hideOnScroll;return r?i.createElement(t,d,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(a={},a[c]=!u,a)),id:r}),d.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,d)});var t}},571:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010);var i=function(e,t,a){var r=(0,n.useState)(void 0),i=r[0],l=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],d=c.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===m&&(i&&i.classList.remove(t),c.classList.add(t),l(c),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},l="tableOfContents_35-E",s="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return i(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);