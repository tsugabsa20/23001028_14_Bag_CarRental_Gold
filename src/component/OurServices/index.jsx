import "./style.css"
import girl from "../../assets/img_service.png"
import checklist from "../../assets/fi_check.png"

let looping = [
    {description : "Sewa Mobil dengan Supir di Bali 12 Jam"
    },
    {description : "Sewa Mobil Lepas Kunci di Bali 24 Jam"
    },
    {description : "Sewa Mobil Jangka Panjang Bulanan"
    },
    {description : "Gratis Antar - Jemput Mobil di Bandara"
    },
    {description : "Layanan Airport Transfer / Drop In out"
    },
]

function OurServices () {
    return (
    <div id="OurServices" className="container-bg-2">
        <div className="container-content-2">
            <div className="girl-image">
                <img src={girl} alt="girl-image" />
            </div>
            <div className="content-car-2">
                <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <div className="tick-addition">
            {looping.map((data, id) => (
                <p key={id}>
                    <span>
                        <img src={checklist} />
                    </span>
                    <p>{data.description}</p>
                </p>
            ))}
            </div>
        </div>  
    </div>
</div>
    )
}
export default OurServices

   