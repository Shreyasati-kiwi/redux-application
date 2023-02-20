import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="add-to-cart">
                <img src='https://media.istockphoto.com/id/1400586811/vector/web.jpg?s=1024x1024&w=is&k=20&c=EtHJfnZVt4P0Xc355iTjtgoPKEa_dCHVUB22O461H4U=' alt='cart'/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662424611/Croma%20Assets/Communication/Mobiles/Images/229924_kqcwz2.png/mxw_1440,f_auto" alt='iphone'/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                   <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
