import React, { Suspense } from 'react';

const Customer = React.lazy(()=>import('./Customer'));
const Admin = React.lazy(()=>import('./Admin'));

export default (props)=> {
  if(props.user === 'admin')
  {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Admin/>
        </Suspense>
    );
  }
  else if(props.user === 'customer'){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Customer/>
        </Suspense>
    );
  }
  else{
    return <div>Invalid User</div>
  }
}