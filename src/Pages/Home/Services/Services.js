import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc,setIsAsc] = useState(true)
    const [search,setSearch] =  useState('');
    const searchRef = useRef();

    useEffect(()=>{
        fetch(`https://smart-car-server-snowy.vercel.app/services?search=${search}&order=${isAsc?'asc':'desc'}`)
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[isAsc,search])

    const handleSearch = ()=>{
        setSearch(searchRef.current.value);
    }

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur repellat itaque iste voluptates, vel a? Alias pariatur temporibus repellendus exercitationem!</p>
                <input ref={searchRef} type="search" className='input input-bordered input-sm' /><button onClick={handleSearch}>Search</button>
                <button className='btn btn-ghost bg-red-100 ' onClick={()=>setIsAsc(!isAsc)}>{isAsc?'low-high':'high-low'}</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service=><ServiceCard
                    key={service.service_id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;