type Props ={
  params:Promise<{seo: string}>
}

import React from 'react'
type Todo ={
id : number
}
export const dynamicParams=false
export async function generateStaticParams(){
  const response =await fetch('https://jsonplaceholder.typicode.com/todos')
  const data : Todo[]= await response.json()
  console.log(data)
  return data.map(({ id }) => ({seo:id.toString()}))};

export default async function Seo({params} :Props){
    const {seo} =await params;
  return (
    <div >
      <h1> seo : {seo} </h1>
    </div> 
  )
}


