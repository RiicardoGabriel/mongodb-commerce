const collectionProducts = db.produtos.countDocuments({});

db.resumoProdutos.insertOne(
    {
        franquia: "McDonalds",
        totalProdutos: collectionProducts,
    },
);

db.resumoProdutos.find(
    {},
    { _id: 0, franquia: 1, totalProdutos: 1 },
);