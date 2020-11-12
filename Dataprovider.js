import React, { createContext,useState } from "react"
let Datacontext = createContext()
  
let Dataprovider = (props)=>{
    let [products,setproducts] = useState([
      
        {
          id: 0,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/z9tyx5rre7m61-PK/image;s=1080x1080",
          name: "honda civic",
          price: 400000,
          Description: "honde civic car modal 2020 new branded product for sale for the first time in karachi" ,
          sellername : "amjad",
          location : "shadman town , shadman no # 2 , karachi",
          number : "03121242728",
          from : "karachi",
          count: 1
        },
        {
          id: 1,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/wle9swamc4qq1-PK/image;s=1080x1080",
          name: "T-shirt",
          price: 1200,
          Description: "T-shirt onlu in 2020 new branded product for sale for the first time in karachi" ,
          sellername : "liaqat bhai",
          location : "malir cant , near liaqat market ,  airport , karachi",
          number : "5278273823",
          from : "karachi",
          count : 1
        },
        {
          id: 2,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/ncg3y5w770qc1-PK/image;s=1080x1080",
          name: "samsung A-30 PTA approved",
          price: 16000,
          Description: "samsung PTA-approved only in 16000 in sarina market , mobail will be in blue color",
          sellername : "amin",
          location : " malir cant , near liaqat market ,  airport , lahore ",
          number : "9812398907",
          from : "lahore",
          count : 1
        },
        {
          id: 3,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/r4d9r3pjwmm42-PK/image;s=1080x1080",
          name: "Solar invertor and solar panel",
          price: 80000,
          Description: "it will provide you electric energy even when the light is gone condition is very good second hand solar panel with working functionalities",
          sellername : "abdullah mehboob",
          location : " malir cant , near liaqat market ,  airport , peshawar ",
          number : "9812398907",
          from : "peshawar",
          count : 1
        },
        {
          id: 4,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/i9y3oez0ncxo1-PK/image;s=1080x1080",
          name: "Toyota Fortuner (Get on installments)",
          price: 1100000,
          Description: "We deal in Everything you need i.e. Cars, Trucks, Commercial Vehicle, Earth Moving Equipment & House, Shops, Plots etc! Complete Your Dream with the help of Financing with BUTT & SONS (PVT) LTD.",
          sellername : "Butt & Sons (PVT) Ltd",
          location : " DHA Phase 2, Karachi, Sindh",
          number : "0387288872",
          from : "karachi",
          count : 1
        },
        {
          id: 5,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/7xulsv1qp2bg3-PK/image;s=1080x1080",
          name: "2019 unique 125 age 16 month",
          price: 60000,
          Description: "We deal in Everything you need i.e. Cars, Trucks, Commercial Vehicle, Earth Moving Equipment & House, Shops, Plots etc! Complete Your Dream with the help of Financing with BUTT & SONS (PVT) LTD.",
          sellername : "kashif ramazan",
          location : " Korangi, Karachi, Sindh",
          number : "47798389902",
          from : "karachi",
          count : 1
        },
        {
          id: 6,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/u247ubjb009o2-PK/image;s=1080x1080",
          name: "Lenovo Tablet with special discount FREE SPEAKER",
          price: 14000,
          Description: "If you are looking for a good and economical tablet with warranty and complete accessories, place your order now!!",
          sellername : "ahsan",
          location : "Tariq Road, Karachi, Sindh",
          number : "47798389902",
          from : "karachi",
          count : 1
        },
        {
          id: 7,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/j1l7576csts82-PK/image;s=1080x1080",
          name: "Get Suzuki ciaz 2020 on easy monthly installments",
          price: 1400000,
          Description: "If you are looking for a good and economical tablet with warranty and complete accessories, place your order now!!",
          sellername : "madhia shah",
          location : "Nawabshah, Sindh, Pakistan",
          number : "47798389902",
          from : "karachi",
          count : 1
        },
        {
          id: 8,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/dt4lpandj7pt3-PK/image;s=1080x1080",
          name: "Get best sofass for your bedroom or daigroom",
          price: 14000,
          Description: "If you are looking for a good and economical sofas with warranty and complete accessories, place your order now!!",
          sellername : "hashir ud-din",
          location : "Nawabshah, punjab, rawalpindi",
          number : "78213448799",
          from : "rawalpindi",
          count : 1
        },
        {
          id: 9,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/fzw7js2gv0x13-PK/image;s=1080x1080",
          name: "toshiba Laptop",
          price: 20000,
          Description: "Full HD 240Hz Gaming Laptop",
          sellername : "abdullah mehboob",
          location : "Jacobabad, Sindh, Pakistan",
          number : "56553422323",
          from : "Jacobabad",
          count : 1
        },
        {
          id: 10 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/iwofvh9snpuu2-PK/image;s=1080x1080",
          name: "ps4 with in quality",
          price: 34000,
          Description: "SMART BOX T9 4GB+64GB",
          sellername : "fizza sehare",
          location : "Korangi, Karachi, Sindh",
          number : "56553422323",
          from : "Karachi",
          count : 1
        },
        {
          id: 11 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/l9yu7dx21jd23-PK/image;s=1080x1080",
          name: "Patient Bed",
          price: 5000,
          Description: "Patient Bed/ Medical Bed/ Hospital Bed/ Surgical Bed/ Extremely Heavy",
          sellername : "mehboob fareed khan",
          location : "Garden West, Karachi, Sindh",
          number : "6453422323",
          from : "Karachi",
          count : 1
        },
        {
          id: 12 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/xwm9edgakcr93-PK/image;s=1080x1080",
          name: "mehran bikar car",
          price: 800000,
          Description: "Suzuki Mehran VXR Ab Asaan Mahana Adaegi Me",
          sellername : "saad rashid",
          location : "University Road, Karachi, Sindh",
          number : "3213123123",
          from : "Karachi",
          count : 1
        },
        {
          id: 13 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/tp9ct8o3m6fa1-PK/image;s=1080x1080",
          name: "apple new searis",
          price: 23321,
          Description: "apple mobail will be in good quality",
          sellername : "maaz mehboob",
          location : "University Road, Karachi, Sindh",
          number : "3213123123",
          from : "Karachi",
          count : 1
        },
        {
          id: 14 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/64iox8dm1xxp2-PK/image;s=1080x1080",
          name: "samsung new series",
          price: 15000,
          Description: "samsung new mobail phone with all accessories and in good quality ",
          sellername : "amjad sab",
          location : "gujarawala , lahore",
          number : "78723872939",
          from : "lahore",
          count : 1
        },
        {
          id: 15 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/66h7wbczslhh1-PK/image;s=1080x1080",
          name: "A4 audionic tech headphone ( full bass )",
          price: 1200,
          Description: "this headphone is fully featured with new technology like full bass boosted and nothing more",
          sellername : "amir khan",
          location : "pindi , islamabad",
          number : "04272837281",
          from : "islamabad",
          count : 1
        },
        {
          id: 16 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/dqj00iudqvly1-PK/image;s=1080x1080",
          name: "paper shredder",
          price: 4999,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "sarim faisal",
          location : "nazimabad , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 17 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/dcwfpedsl8xd2-PK/image;s=1080x1080",
          name: "bed set",
          price: 90000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "maaz mehboob",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 18 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/co97hko1od5g3-PK/image;s=1080x1080",
          name: "non-electric mini dispancer",
          price: 3000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 19 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/za29vz845gm41-PK/image;s=1080x1080",
          name: "gaming chair",
          price: 20000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 20 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/47wy6lnlc3yf3-PK/image;s=1080x1080",
          name: "brand new colora",
          price: 450000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 21 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/0tzybc21xpfm1-PK/image;s=1080x1080",
          name: "get suzuki cultus vxr",
          price: 700000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 22 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/qy9zlrk591uw1-PK/image;s=1080x1080",
          name: "toyota aqua",
          price: 1700000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 23 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/n4eakou116ni-PK/image;s=1080x1080",
          name: "2 bed , 2 bath - 900 sqaure feet",
          price: 1700000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 24 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/m6szy5xuz8a02-PK/image;s=1080x1080",
          name: "bicycle",
          price: 8000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 25 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/7f2gtd27y3wg1-PK/image;s=1080x1080",
          name: "e-champion finger plus oximeter",
          price: 1200,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 26 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/td9p8zx6tu5y1-PK/image;s=1080x1080",
          name: "get toyota passo",
          price: 56000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 27 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/qpyboswoplnc3-PK/image;s=1080x1080",
          name: "get toyota colora axio",
          price: 700000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 28 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/n5clmpg45rvc2-PK/image;s=1080x1080",
          name: "get honda civic",
          price: 8000000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        
        {
          id: 29 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/7kbzc3aztlwl2-PK/image;s=1080x1080",
          name: "samsung note 4",
          price: 8000000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 30 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/4atrb8knmjdq2-PK/image;s=1080x1080",
          name: "casual T-shirts",
          price: 600,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        {
          id: 31 ,
          image:
            "https://apollo-singapore.akamaized.net/v1/files/zlhuccxd67fi3-PK/image;s=1080x1080",
          name: "apple iphone 12 pro (256 GB)",
          price: 270000,
          Description: "paper shredder is used to shred papers in good quality it will also work without electricity for 2 hours",
          sellername : "tehreem fatima",
          location : "malir , karachi",
          number : "08772812878",
          from : "karachi",
          count : 1
        },
        
      ]
      )
      let addcart = (id)=>{
        let check = cart.every(item => {
          return item.id !== id
        })
        if(check){
          let data = products.filter(product => {
            return product.id === id
          })
          setcart([...cart,...data])
        }
        else{
          console.log("null");
        }
      }
      let [state, setstate123] = useState({
        islogedin: false,
        isphotourl: false,
        name: "",
      });

      let addfav = (id)=>{
        let check = fav.every(item => {
          return item.id !== id
        })
        if(check){
          let data = products.filter(product => {
            return product.id === id
          })
          setfav([...fav,...data])
        }
        else{
          alert("product has already been added to the favourite section")
        } 
      }
      
      let [fav,setfav] = useState([])
      let [cart,setcart] = useState([])

      let value = {
          products : [products,setproducts],
          cart : [cart,setcart],
          addcart:addcart,
          loginauth : [state, setstate123],
          fav : [fav,setfav],
          addfav,addfav
      }
    return(
        <Datacontext.Provider value={value}>
            {props.children}
        </Datacontext.Provider>
    )
}
export default Dataprovider
export {Datacontext}