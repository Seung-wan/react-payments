var C=Object.defineProperty;var d=(a,r)=>C(a,"name",{value:r,configurable:!0});import{j as e}from"./jsx-runtime-cd98d61a.js";import{r as v}from"./index-a38f3d31.js";import{m as l}from"./card-39c8a02a.js";import{B as n}from"./Box-136d9405.js";import{B as q}from"./Button-a951684c.js";function i({type:a,isShowAlias:r,onClick:t,selectedCard:c,cardNumber:m,cardOwnerName:o,cardExpiration:u,cardAlias:p}){const{name:x,color:s}=c,{num1:_,num2:N,num3:f,num4:h}=m,{month:j,year:b}=u,y=v.useMemo(()=>({backgroundColor:s}),[s]);return e.jsx(n,{display:"flex-col",className:"card-box",children:e.jsxs(q,{onClick:t,children:[e.jsxs("div",{className:`${a}-card`,style:y,children:[e.jsx("div",{className:"card-top",children:e.jsx("span",{className:`card-text__${a}`,children:x})}),e.jsx("div",{className:"card-middle",children:e.jsx("div",{className:`${a}-card__chip`})}),e.jsxs("div",{className:"card-bottom",children:[e.jsx("div",{className:"card-bottom__number",children:e.jsxs("span",{className:`card-text__${a}`,children:[_," - ",N," - ",l(f)," - ",l(h)]})}),e.jsxs("div",{className:"card-bottom__info",children:[e.jsx("span",{className:`card-text__${a} card-text__ellipsis__${a}`,children:o}),e.jsxs("span",{className:`card-text__${a}`,children:[j," / ",b]})]})]})]}),r&&e.jsx(n,{className:"mt-2",children:p})]})})}d(i,"Card");try{i.displayName="Card",i.__docgenInfo={description:"",displayName:"Card",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'}]}},isShowAlias:{defaultValue:null,description:"",name:"isShowAlias",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},selectedCard:{defaultValue:null,description:"",name:"selectedCard",required:!0,type:{name:"SelectedCard"}},cardNumber:{defaultValue:null,description:"",name:"cardNumber",required:!0,type:{name:"CardNumber"}},cardOwnerName:{defaultValue:null,description:"",name:"cardOwnerName",required:!0,type:{name:"string"}},cardExpiration:{defaultValue:null,description:"",name:"cardExpiration",required:!0,type:{name:"CardExpiration"}},cardAlias:{defaultValue:null,description:"",name:"cardAlias",required:!0,type:{name:"string"}}}}}catch{}export{i as C};
//# sourceMappingURL=Card-5cd0c24d.js.map