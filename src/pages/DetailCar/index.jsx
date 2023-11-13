import "./style.css"
import React, {useEffect, useState} from "react"
import axios from "axios"
import Navbar from "../../component/Navbar"
import Footer from "../../component/Footer"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const DetailCar = () => {
    const [detailCar, setDetailCar] = useState ({})
    const param = useParams()

    useEffect (() => {
        handleGetUser()
    }, [])

    const handleGetUser = () => {
        axios
        .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
        .then((res) => {
            console.log(res)
            setDetailCar(res.data)
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
        <Navbar/>
        <div className="container-user">
            <div className="text-detail">
                <h1>Tentang Paket</h1>
                <h1>Include</h1>
                <ul>
                    <li><p>Apa saja yang termasuk dalam paket misal durasi max 12 jam</p></li>
                    <li><p>Sudah termasuk bensin selama 12 jam </p></li> 
                    <li><p>Sudah termasuk Tiket Wisata Sudah termasuk pajak</p></li> 
                </ul>
                <h1>Exclude</h1>
                <ul>
                    <li><p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p></li>
                    <li><p>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam </p></li>
                    <li><p>Tidak termasuk akomodasi penginapan</p></li>
                </ul>
                <h1>Refund, Rescheduled, Overtime</h1>
                <ul>
                    <li><p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p></li>
                    <li><p>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</p></li>
                    <li><p>Tidak termasuk akomodasi penginapan </p></li>
                    <li><p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p></li>
                    <li><p>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</p></li>
                    <li><p>Tidak termasuk akomodasi penginapan </p></li>
                    <li><p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p></li>
                    <li><p>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam </p></li>
                    <li><p>Tidak termasuk akomodasi penginapan</p></li>
                </ul>
            </div>
            <div className="detail-param">
                <img className="image-1" src={detailCar.image}/>
                <h1>{detailCar.name}</h1>
            <div className="detail-param-1">
                <i className="fa fa-users" aria-hidden="true"></i>
                <h1>6-8 orang</h1>
            </div>
            <div className="total-price">
                <h1>Total</h1>
                <h1>{detailCar.price}</h1>
            </div>
            </div>
        </div>
        <Link to={`/searchcar`}>
        <button className="button">Back</button>
        </Link>
        <Footer/>
        </>
    )
}
export default DetailCar
