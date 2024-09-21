import "./Home.css"

export function Home() {
    return (
        <div className="section">
            <div className="container">
                <div className="page">
                    <div className="page-one">
                        <div className="banner-content">
                            <h1>YOUR PRODUCTS ARE GREAT</h1>
                            <button className="btn">SHOP PROUDUCT</button>
                        </div>
                        <div className="image">
                            <img src="/src/image/banner-image.png" alt="" />
                        </div>
                    </div>
                    <div className="page-two">
                        <div className="banner-content">
                            <h1>TECHNOLOGY HACK YOU WANT GET</h1>
                            <button className="btn">SHOP PROUDUCT</button>
                        </div>
                        <div className="image">
                            <img src="/src/image/banner-image.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="chevron">
                <i className="bx bx-chevron-left" id="nxt-btn"></i>
                <i className="bx bx-chevron-right" id="pre-btn"></i>
            </div>
        </div>
    )
}