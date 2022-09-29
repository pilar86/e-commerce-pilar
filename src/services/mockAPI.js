const data = [
    {
        id: 1,
        title:"Bálsamo Labial 01",
        price: 1600,
        stock:10,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/lips2.jpg",
    },
    {
        id: 2,
        title:"Bálsamo Labial 02",
        price: 1600,
        stock:12,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/lips3.jpg",
    },
    {
        id: 3,
        title:"Bálsamo Labial 03",
        price: 1600,
        stock:8,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/lips4.jpg",
    },
    {
        id: 4,
        title:"Bálsamo Labial 04",
        price: 1600,
        stock:15,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/lips5.jpg",
    },
    {
        id: 5,
        title:"Bálsamo Labial 05",
        price: 1600,
        stock:12,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/lips6.jpg",
    },
    {
        id: 6,
        title:"Bálsamo Labial 06",
        price: 1600,
        stock:12,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/lips7.jpg",
    },
    {
        id: 7,
        title:"Esencia Aromaterapia",
        price: 950,
        stock:19,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/oil1.jpg",
    },
    {
        id: 8,
        title:"Esencia Aromaterapia",
        price: 950,
        stock:15,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/oil2.jpg",
    },
    {
        id: 9,
        title:"Esencia Aromaterapia",
        price: 950,
        stock:15,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/oil3.jpg",
    },
    {
        id: 10,
        title:"Esencia Aromaterapia",
        price: 950,
        stock:15,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/oil4.jpg",
    },
    {
        id: 11,
        title:"Esencia Aromaterapia",
        price: 950,
        stock:8,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/oil5.jpg",
    },
    {
        id: 12,
        title:"Esencia Aromaterapia",
        price: 950,
        stock:8,
        category: "cosmetics",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/oil6.jpg",
    },
    {
        id: 13,
        title:"jabón corporal",
        price: 600,
        stock:10,
        category: "body",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/soap1.jpg",
    },
    {
        id: 14,
        title:"jabón corporal",
        price: 600,
        stock:6,
        category: "body",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/soap2.jpg",
    },
    {
        id: 15,
        title:"jabón corporal",
        price: 600,
        stock:10,
        category: "body",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/soap3.jpg",
    },
    {
        id: 16,
        title:"jabón corporal",
        price: 600,
        stock:12,
        category: "body",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/soap4.jpg",
    },
    {
        id: 17,
        title:"jabón corporal",
        price: 600,
        stock:12,
        category: "body",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/soap5.jpg",
    },
    {
        id: 18,
        title:"jabón corporal",
        price: 600,
        stock:8,
        category: "body",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/soap6.jpg",
    },
    {
        id: 19,
        title:"jabón corporal",
        price: 600,
        stock:9,
        category: "body",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/soap7.jpg",
    },
    {
        id: 20,
        title:"jabón corporal",
        price: 600,
        stock:9,
        category: "body",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/soap8.jpg",
    },
    {
        id: 21,
        title:"jabón corporal",
        price: 600,
        stock:10,
        category: "body",
        detail: "producto 100% origen vegetal",
        img: "/assets/productos/img/soap9.jpg",
    },

]

export default function getItems(){
    return new Promise ((resolve, reject) => {
        setTimeout( ()=>{
            resolve(data)
        },1500)
    });
}

export function getSingleItem(idItem) {
    return new Promise ((resolve, reject)=> {
        let itemFind = data.find((item) => {
            console.log("find", item.id, idItem);
            return item.id === parseInt(idItem);
        });

        if (itemFind) resolve(itemFind);
        else reject(new Error("producto no encontrado"));
    });
}

export function getItemsByCategory (categoria) {
    return new Promise ((resolve, reject) => {

        let itemFind = data.filter((item) => {
            return item.category === categoria;
        });
        setTimeout ( ()=> {
            if (itemFind) resolve (itemFind);
            else reject(new Error ("producto no encontrado"));
        },1200)
        });
    }


/* SIMULANDO una conexion a una BASE de DATOS (simular 1 demora en devolver los datos utilizando 1promesa xq es algo asíncrono)

-Cuando tenga/implemente 1 DB real voy a poder poner en la funcion (en este caso -getItems- con todo el código q tiene adentro que ahora es simulado), la funcionalidad real que tng la base de datos.

-y no ir a cambiar c/u de los componentes 
- resolve y reject - No son palabrasreservadas.

export function getSingleItem() {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> {
            resolve (data[12]);
        },1100);
    })
}
*/ 