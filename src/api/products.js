const products = [
    {
        nombre: "Aguamarina",
        tag: "3D Models",
        descripcion: "Obra seriada 7/10",
        precio: 10000,
        imagen:
            "https://studiodevel.com/wp-content/uploads/elementor/thumbs/Aguamarina-4-scaled-pvpwwuxxv9jkolysj3o2s5glv8pz4kk8ymw1r87f3u.jpg",
        id: 0,
        categoria: "obras",
        stock: 10,
    },
    {
        nombre: "Jade Bicolor",
        tag: "3D Models",
        descripcion: "Obra seriada 8/10",
        precio: 12200,
        imagen:
            "https://studiodevel.com/wp-content/uploads/elementor/thumbs/Jade-4-scaled-pvpwwuxxv9jkolysj3o2s5glv8pz4kk8ymw1r87f3u.jpg",
        id: 1,
        categoria: "obras",
        stock: 10,
    },
    {
        nombre: "Nazca",
        tag: "3D Models",
        descripcion: "Obra seriada 9/10",
        precio: 11000,
        imagen:
            "https://studiodevel.com/wp-content/uploads/elementor/thumbs/Nazca-2-scaled-pvpwwvvs23kv07xfdm2pcn82gmlcc9nzarjj8i60xm.jpg",
        id: 2,
        categoria: "obras",
        stock: 10,
    },
    {
        nombre: "Maceta Adularia",
        tag: "3D Models",
        descripcion: "Objeto Studio Devel",
        precio: 10000,
        imagen:
            "https://studiodevel.com/wp-content/uploads/elementor/thumbs/Maceta-Adularia-min-pvpwwtztxl7ta02sgf0w8gnrndfxd4pc3r5emeu8cw.png",
        id: 3,
        categoria: "objetos",
        stock: 10,
    },

    {
        nombre: "Set Copal",
        tag: "3D Models",
        descripcion: "Objeto Studio Devel",
        precio: 15000,
        imagen:
            "https://studiodevel.com/wp-content/uploads/elementor/thumbs/Set-copal-min-pvpwwtztxl8y76rd4kdtaobsf2cbwwnpaq52obw6g0.png",
        id: 4,
        categoria: "objetos",
        stock: 10,
    },
    {
        nombre: "Lámpara Dammar",
        tag: "3D Models",
        descripcion: "Objeto Studio Devel",
        precio: 25000,
        imagen:
            "https://studiodevel.com/wp-content/uploads/elementor/thumbs/Lampara-Dammar-min-pvpwwtztxl8y76rd4kdtaobsf2cbwwnpaq52obw6g0.png",
        id: 5,
        categoria: "objetos",
        stock: 10,
    },
];

export const getProducts = (categoria) =>
    new Promise((res, rej) => {
        const response = categoria
            ? products.filter((p) => p.categoria === categoria)
            : products;
        setTimeout(() => {
            res(response);
        }, 2000);
    })

export const getProduct = (productId) =>
    new Promise((res, rej) => {
        const response = products.find((product) => product.id == productId)
        setTimeout(() => {
            res(response);
        }, 2000)
    })

