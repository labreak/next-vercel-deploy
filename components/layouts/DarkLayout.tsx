import { FC,PropsWithChildren } from "react";



export const DarkLayout : FC<PropsWithChildren> = ({children}) => {
  return (
    <div style={{
        backgroundColor:'blue',
        padding:'10px',
        borderRadius:'5px'

}}>
<h3>Blue Layout</h3>
<div>
{children}
</div>

</div>

  );
};
