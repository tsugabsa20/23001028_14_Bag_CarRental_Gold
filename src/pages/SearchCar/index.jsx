import React, {useEffect, useState} from "react";
import Navbar from "../../component/Navbar";
import Cars from "../../component/Cars";
import Footer from "../../component/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css"

const SearchCar = () => {
    const [isName, setName] = useState([])
    const [category, setCategory] =useState("")
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState("")
    const [isFilter, setIsFilter] = useState(false)
    const [nameCar, setNameCar] = useState("")

    useEffect (() => {
        handleGetUser(nameCar, category, price, status)
    }, [])

    const handleGetUser = (dataName, categoryData, priceCar, statusNow) => {
        axios
        .get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${dataName}&category=${categoryData}&price=${priceCar}&status${statusNow}`)
        .then((res) => {
            console.log(res)
            setName(res.data.cars)
        })
        .catch((err) => console.log(err))
    }
    const changeName = (e) => {
        setNameCar(e.target.value)
    }
    const changeCategory = (e) => {
        setCategory(e.target.value)
    }
    const changePrice = (e) => {
        setPrice(e.target.value)
    }
    const changeStatus = (e) => {
        setStatus(e.target.value)
    }
    const handleSubmit = () => {
        handleGetUser(nameCar, category, price, status)
        setIsFilter(true)
    }
    const handleReset = () => {
        setNameCar("")
        setCategory("")
        setPrice("")
        setStatus("")
        handleGetUser("", "", "", "")
        setIsFilter(false)

    }
    return (
    <div>
        <Navbar/>
        <Cars/>
        <div className="background-pg">   
            <div className="container-pg-1">
                <div className="carName">
                    <div className="text-1">
                        <p>Nama Mobil</p>
                        <input value={nameCar} id="search" onChange={changeName} placeholder="Ketik Nama/Tipe Mobil"></input>
                    </div>
                    <div className="text-2">
                        <p>Kategori</p>
                        <select value={category} id="type" onChange={changeCategory}>
                            <option value={""}>Masukkan Kapasitas Mobil</option>
                            <option value={"small"}>2-4 orang</option>
                            <option value={"medium"}>4-6 orang</option>
                            <option value={"large"}>6-8 orang</option>
                        </select>
                    </div>
                    <div className="text-3">
                        <p>Harga</p>
                        <select value={price} id="money" onChange={changePrice}>
                            <option value={""}>Masukkan Harga Sewa Sehari</option>
                            <option value={"minPrice=200000&maxPrice=400000"}>{"<400000"}</option>
                            <option value={"minPrice=30000&maxPrice=60000"}>{"200000-400000"}</option>
                            <option value={"minPrice=500000&maxPrice=700000"}>{">400000"}</option>
                        </select>
                    </div>
                    <div className="text-4">
                        <p>Disewa</p>
                        <select value={status} id="rent" onChange={changeStatus}>
                            <option value={""}>Status</option>
                            <option value={"true"}>Rented</option>
                            <option value={"false"}>Not Rented</option>
                        </select>
                    </div>
                <button onClick={isFilter ? handleReset : handleSubmit }className="click" >{isFilter ? "Reset" : "Cari Mobil"}</button>  
                </div>
            </div>
        </div> 
            <div className="container-pg-2">
                {!isName.length?(
                <h1 className="No-car">Mobil tidak ada</h1>
                ):(
                    isName.map((car, id) => (
                        <div key={id}>
                    <div className="border-car">
                        <img className="image-car" src={car.image}/>
                        <h5 className="text-1">{car.name}</h5>
                        <h4 className="text-2">{`Rp.${car.price} / hari`}</h4>
                        <p className="text-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus aliquid ullam architecto quod neque placeat atque</p>
                    <Link to={`/detailcar/${car.id}`}>
                    <button  className="click-2">Pilih</button>
                    </Link>
                    </div>
                </div>
                ))
                )}
                {}
            </div>
       
        <Footer/>  
    </div>
      
    )

}
export default SearchCar
