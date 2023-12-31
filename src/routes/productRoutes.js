const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = (app) => {
    app.get("/product/", async (req, res) => {
        const products = await Product.find();
        res.send(products);
    });

    app.get("/product/:productId", async (req, res) => {
        const { productId } = req.params;

        try {
            const product = await Product.findById(productId);

            if (!product) {
                return res.status(404).send("Product not found");
            }

            return res.send(product);
        } catch (error) {
            return res.status(500).send(error);
        }
    });

    app.get("/product/name/:partialName", async (req, res) => {
        const { partialName } = req.params;

        try {
            const products = await Product.find({
                productName: { $regex: new RegExp(partialName, "i") },
            });

            if (!products || products.length === 0) {
                return res.status(404).send("No matching products found");
            }

            return res.send(products);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    });

    app.get("/product/brand/:brandName", async (req, res) => {
        const { brandName } = req.params;

        try {
            const products = await Product.find({
                brandName: { $regex: new RegExp(brandName, "i") },
            });

            if (!products || products.length === 0) {
                return res.status(404).send("No matching products found");
            }

            return res.status(200).send(products);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    });

    app.post("/product/", async (req, res) => {
        const { productName, price, quantity, brandName, description } =
            req.body;

        const product = new Product({
            productName,
            price,
            quantity,
            brandName,
            description,
        });

        try {
            await product.save();
            res.send(product);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    app.patch("/product/:productId", async (req, res) => {
        const { productId } = req.params;
        const updateFields = req.body;

        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                updateFields,
                { new: true }
            );

            if (!updatedProduct) {
                return res.status(404).send("Product not found");
            }

            res.send(updatedProduct);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    app.delete("/product/:productId", async (req, res) => {
        const { productId } = req.params;

        try {
            const deletedProduct = await Product.findByIdAndDelete(productId);

            if (!deletedProduct) {
                return res.status(404).send("Product not found");
            }

            res.send(deletedProduct);
        } catch (error) {
            res.status(500).send(error);
        }
    });
};
