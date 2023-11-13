import "./style.css"
import { Link } from "react-router-dom"

function CTABanner () {
    return (
        <div class="container-bg-5">
        <div class="content-bg-5">
            <div class="content-5">
                <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div class="button-3">
                <Link to={`/searchcar`}>
                <button className="klik">Mulai Sewa Mobil</button>
                </Link>
            </div>
        </div>
    </div>
    )
}
export default CTABanner
