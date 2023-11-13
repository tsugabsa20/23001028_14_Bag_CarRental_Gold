import "./style.css"
import { Link } from "react-router-dom"
import Mercedes from "../../assets/Mercedes.png"



function Cars ({ShowButton}) {
    return (
        <div className="container-bg-1">
    <div className="content">
        <div className="content-1">
            <h2>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h2>
        </div>
        <div className="content-2">
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam</p>
        </div>
        <div className="button-1">
            <Link to={`/searchcar`}>
            {ShowButton&&<button className="klik">Mulai Sewa Mobil</button>}
            </Link>
        </div>
    </div>
    <div className="cars-image">
        <img class="cars" src={Mercedes} alt="Mercedes" />
    </div>
</div>

    )
}
export default Cars
