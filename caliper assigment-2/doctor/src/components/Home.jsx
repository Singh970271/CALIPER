import { Box, Button, Input, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addDoctorFailure, addDoctorRequest, addDoctorSuccess, Doctordata } from "../Redux/Doctor/action";
import Filter from './Filter';
//import { Input } from '@chakra-ui/react'
 export const Home = () => {

    const doctor=useSelector((store)=>store.doctor.doctor)
    const dispatch=useDispatch()
   const [patients,setPatients] = useState([]);
  const [form,setForm]= useState({
    name: "",
    age: "",
    gender: "",
   Medicine:"",
   quantity:""  

  });

  const handleOnchange=(e)=>{
    let{name,value}=e.target;
    setForm({...form,[name]:value});
  }
  
useEffect(()=>{
dispatch(Doctordata())
},[])


   const creatPatients =()=>{
         dispatch(addDoctorRequest()) 
    axios.post("http://localhost:8040/data",form)
      .then((r)=>dispatch(addDoctorSuccess()))
       .then(()=>dispatch(Doctordata()))
      .catch((e)=>dispatch(addDoctorFailure(e)))
  }
  return (
   
<Box w={"80%"} height={"100vh"} margin={"auto"} mt={10} >
  <Box w={'300px'} h={"300px"} mb={'50px'} margin={"auto"} border={"1px solid #hhh"}>
  <Input placeholder='Name' name="name" value={form.name} onChange={handleOnchange}/>
  <Input placeholder='age'  name="age"value={form.age}  onChange={handleOnchange}/>
  <Input placeholder='gender' name="gender"value={form.gender}  onChange={handleOnchange}/>
  <Input placeholder='Medicine' name="Medicine"value={form.Medicine}  onChange={handleOnchange}/>
  <Input placeholder='Quantiry' name="quantity"value={form.quantity}  onChange={handleOnchange}/>

 <Button onClick={creatPatients}>Create</Button>
  </Box>
<TableContainer>
  <Table variant='simple'>
    <TableCaption>Patients details</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th>Gender</Th>
        <Th>MEDICINE</Th>
        <Th>QUANTITY</Th>
        </Tr>
    </Thead>
    <Tbody>
      {doctor.map((e)=>{
        return(
          <Tr 
            key={e.id}>
            <Th>{e.name}</Th>
            <Th>{e.age}</Th>
            <Th>{e.gender}</Th>
            <Th>{e.Medicine}</Th>
            <Th>{e.quantity}</Th>
          </Tr>
        )
      })}
    </Tbody>
  </Table>
</TableContainer>
<Filter/>
    </Box>
    
  )
 }
