import React ,{useState,useEffect}from 'react';
import './RecentSales.css';
import CardFilter from '../CardFilter/CardFilter';
import RecentSalesTable from './RecentSalesTable/RecentSalesTable';

function RecentSales() {
    const [items,setItems]=useState([]);
    const [filter,setFilter]=useState('Today');
    const handleFilterChange=filter=>{
        setFilter(filter);
    };
    const fetchData=()=>{

        fetch('http://localhost:4002/recentsales').then(res=>res.json())
        .then(data=>{
            setItems(data);
            console.log(data);
            console.log('ssss');
        }).catch(e=>console.log(e.message));
    };
    useEffect(()=>{
        fetchData();

    },[]);
  return (
    <div className="card recent-sales overflow-auto">
        <CardFilter filterchange={handleFilterChange}/>
        <div className="card-body">
            <h5 className="card-title">
                Recent Sales <span>|{filter}</span> 
            </h5>
            <RecentSalesTable items={items}/>
        </div>
    </div>
  )
}

export default RecentSales;