var m=Object.defineProperty;var M=(l,a)=>m(l,"name",{value:a,configurable:!0});import{j as _}from"./jsx-runtime-cd98d61a.js";import{r as e}from"./index-a38f3d31.js";const A={INPUT:{COMMON:{INVALID_NAME:l=>`input element에 지정되지 않은 name이 주입되었습니다. [injected name with '${l}']`,INVALID_VALUE:"유효하지 않은 값이 입력되었습니다."},EXPIRATION:{INVALID_MONTH:"유효하지 않은 월이 입력되었습니다.",INVALID_YEAR:"유효하지 않은 년이 입력되었습니다."}},PROVIDER:{INVALID_SCOPE:"유효한 Provider 내부에서만 훅을 사용할 수 있습니다."}},S={isModalOpen:!0,selectedCard:{name:"",color:""},setSelectedCard:()=>null,카드사가선택된:!1,resetSelectedModal:()=>null,handleClickOpenModal:()=>null,handleClickCloseModal:()=>null,handleClickCard:()=>null},E=e.createContext(S);function p({children:l}){const[a,t]=e.useState(!0),[o,r]=e.useState({name:"",color:""}),n=o.name!=="",d=e.useCallback(()=>{t(!0)},[]),s=e.useCallback(()=>{t(!1)},[]),c=e.useCallback(()=>{r({name:"",color:""}),t(!0)},[]),i=e.useCallback(({name:C,color:u})=>{!C||!u||(r({name:C,color:u}),t(!1))},[]),I=e.useMemo(()=>({isModalOpen:a,selectedCard:o,setSelectedCard:r,카드사가선택된:n,resetSelectedModal:c,handleClickOpenModal:d,handleClickCloseModal:s,handleClickCard:i}),[a,o,n,c,d,s,i]);return _.jsx(E.Provider,{value:I,children:l})}M(p,"CardSelectModalProvider");try{p.displayName="CardSelectModalProvider",p.__docgenInfo={description:"",displayName:"CardSelectModalProvider",props:{}}}catch{}export{E as C,A as E};
//# sourceMappingURL=CardSelectModalProvider-85a74e2a.js.map