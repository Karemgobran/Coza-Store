import "./About.css"

export function About() {
    return (
        <div className="products" id="products">
            <div className="container">
                <div className="product-header">
                    <h2>Mobile Products</h2>
                    <a href="#">GO TO SHOP</a>
                </div>
                <div className="boxes page">
                    <div className="box">
                        <div className="image">
                            <img src="/src/image/insta-item1.jpg" alt="" />
                            <div className="cart">
                                <p>ADD TO CART</p>
                                <i className="bx bxs-cart"></i>
                            </div>
                        </div>
                        <div className="content">
                            <a href="#">IPHONE 10</a>
                            <span>$980</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="/src/image/insta-item2.jpg" alt="" />
                            <div className="cart">
                                <p>ADD TO CART</p>
                                <i className="bx bxs-cart"></i>
                            </div>
                        </div>
                        <div className="content">
                            <a href="#">IPHONE 10</a>
                            <span>$980</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="/src/image/insta-item3.jpg" alt="" />
                            <div className="cart">
                                <p>ADD TO CART</p>
                                <i className="bx bxs-cart"></i>
                            </div>
                        </div>
                        <div className="content">
                            <a href="#">IPHONE 10</a>
                            <span>$980</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="/src/image/insta-item4.jpg" alt="" />
                            <div className="cart">
                                <p>ADD TO CART</p>
                                <i className="bx bxs-cart"></i>
                            </div>
                        </div>
                        <div className="content">
                            <a href="#">IPHONE 10</a>
                            <span>$980</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="/src/image/insta-item4.jpg" alt="" />
                            <div className="cart">
                                <p>ADD TO CART</p>
                                <i className="bx bxs-cart"></i>
                            </div>
                        </div>
                        <div className="content">
                            <a href="#">IPHONE 10</a>
                            <span>$980</span>
                        </div>
                    </div>
                </div>
                <div className="dotet">
                    <span id="nxt-btn"></span>
                    <span className="current" id="pre-btn"></span>
                </div>
            </div>
        </div>
    )
}