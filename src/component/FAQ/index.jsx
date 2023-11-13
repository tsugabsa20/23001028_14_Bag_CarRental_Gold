import "./style.css"

function FAQ () {
    return (
        <div id="FAQ" class="container-bg-6">
        <div class="content-6">
            <div class="content-6-text">
                <h3>Frequently Asked Question</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div class="select-class">
                <select class="form-select" aria-label="Small select example">
                    <option selected>Apa saja syarat yang dibutuhkan?</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Small select example">
                    <option selected>Berapa hari minimal sewa mobil lepas Kunci</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Small select example">
                    <option selected>Berapa hari sebelumnya sebaiknya booking sewa mobil?</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Small select example">
                    <option selected>Apakah ada biaya antar - Jemput</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Small select example">
                    <option selected>Bagaimana jika mengalami kecelakaan?</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    </div>
    )
}
export default FAQ