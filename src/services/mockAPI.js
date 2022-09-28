const data = [
    {
        id: 1,
        title:"Bálsamo Labial 01",
        price: 1600,
        stock:100,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/lips2.jpg",
    },
    {
        id: 2,
        title:"Bálsamo Labial 02",
        price: 1600,
        stock:100,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/lips3.jpg",
    },
    {
        id: 3,
        title:"Bálsamo Labial 03",
        price: 1600,
        stock:100,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/lips4.jpg",
    },
    {
        id: 4,
        title:"Bálsamo Labial 04",
        price: 1600,
        stock:100,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/lips5.jpg",
    },
    {
        id: 5,
        title:"Bálsamo Labial 05",
        price: 1600,
        stock:100,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/lips6.jpg",
    },
    {
        id: 6,
        title:"Bálsamo Labial 06",
        price: 1600,
        stock:100,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/lips7.jpg",
    },
    {
        id: 7,
        title:"Esencia para Baños/Aromaterapia",
        price: 950,
        stock:80,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/oil1.jpg",
    },
    {
        id: 8,
        title:"Esencia para Baños/Aromaterapia",
        price: 950,
        stock:80,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/oil2.jpg",
    },
    {
        id: 9,
        title:"Esencia para Baños/Aromaterapia",
        price: 950,
        stock:80,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/oil3.jpg",
    },
    {
        id: 10,
        title:"Esencia para Baños/Aromaterapia",
        price: 950,
        stock:80,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/oil4.jpg",
    },
    {
        id: 11,
        title:"Esencia para Baños/Aromaterapia",
        price: 950,
        stock:80,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/oil5.jpg",
    },
    {
        id: 12,
        title:"Esencia para Baños/Aromaterapia",
        price: 950,
        stock:80,
        category: "cosmetics",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/oil6.jpg",
    },
    {
        id: 13,
        title:"jabón corporal",
        price: 600,
        stock:100,
        category: "body",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/soap1.jpg",
    },
    {
        id: 14,
        title:"jabón corporal",
        price: 600,
        stock:100,
        category: "body",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/soap2.jpg",
    },
    {
        id: 15,
        title:"jabón corporal",
        price: 600,
        stock:100,
        category: "body",
        detail: "producto 100% de origen vegetal",
        img: "/assets/productos/img/soap3.jpg",
    },

]

export default function getItems(){
    return new Promise ((resolve, reject) => {
        setTimeout( ()=>{
            resolve(data)
        },1500)
    });
}

export function getSingleItem() {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> {
            resolve (data[1]);
        },1500);
    })
}