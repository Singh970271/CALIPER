import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Doctordata } from '../Redux/Doctor/action';


const Filter = () => {
  
const dispatch=useDispatch() 

const[searchParams,setSearchParams]=useSearchParams();

 const urlCategory= searchParams.getAll('category');
 const urlSort=searchParams.get('sortBy'); 

  const [category,setCategory]=useState(urlCategory || [])

  const[sortBy,setSortBy]=useState(urlSort || "")


  const handleChekbook=(e)=>{
    const option =e.target.value;
    let newCategory=[...category]
    if(category.includes(option)){
  newCategory.splice(newCategory.indexOf(option),1);
    }

    else{
      newCategory.push(option)
    }
     setCategory(newCategory)
  };
 

  const handleSort=(e)=>{    
    setSortBy(e.target.value)
   }


  useEffect(()=>{    
   if(category){
  setSearchParams({category:category});
 dispatch(Doctordata({params:{category}}))  

   }
  },[category,dispatch,setSearchParams])
  

  useEffect(()=>{    
    if(sortBy){

      const params= {
        category:searchParams.getAll('category'),
        sortBy,
      };
      let getPatients={
        params:{
          category:searchParams.getAll("category"),
          _sort: "age",
          _oder:sortBy
         
        }
      };
      setSearchParams(params)
      dispatch(Doctordata(getPatients));
    }
  },[searchParams,setSearchParams,sortBy,dispatch])
   


  //console.log(searchParams)

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <div>
          <input type="checkbox" value="Male" defaultChecked={category.includes('Male')} onChange={handleChekbook}/>
          <label>Male</label>
        </div>
        <div>
          <input type="checkbox" value='Female' defaultChecked={category.includes('Female')} onChange={handleChekbook}/>
          <label>Female</label>
        </div>
    
      </div>

    
      <h3>Sort</h3>
      <select onChange={handleSort}>
        <option value="age" name="sortBy" defaultChecked={sortBy==="age"}>{""}ASCENDING</option>
        <option value="age" name="sortBy" defaultChecked={sortBy==="age"}>{""}DESCENDING</option>
      </select>
    </div>
  )
}

export default Filter