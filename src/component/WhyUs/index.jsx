import "./style.css"
import icon1 from "../../assets/fi_thumbs-up.png"
import icon2 from "../../assets/fi_tag.png"
import icon3 from "../../assets/fi_clock.png"
import icon4 from "../../assets/fi_award.png"
import WhyCard from "../WhyCard"

let Card = [
    {img: icon1,
     title: "Mobil Lengkap",
     description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"},
    {img: icon2,
     title: "Harga Murah",
     description: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"},
    {img: icon3,
    title: "Layanan 24 Jam",
    description: "Siap melayani kebutuhan anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"},
    {img: icon4,
    title: "Sopir Profesional",
    description: "Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu tepat waktu"},
]
function WhyUs () {
    return (
    <div id="WhyUs" className="container-bg-3">
        <div className="content-questional-1">
            <h1>Why Us?</h1>
            <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>  
        <div className="information">
            {Card.map((card, id) => (
                <WhyCard 
                    key={id}
                    img={card.img}
                    title={card.title}
                    description={card.description}
                    />
            ))}
        </div>
    </div>
    )
}
export default WhyUs