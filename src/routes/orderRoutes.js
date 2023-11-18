const mongoose = require("mongoose");

const Order = mongoose.model("Order");

module.exports = (app) => {
    app.get("/order", async (req, res) => {
        const orders = await Order.find();
        res.send(orders);
    });

    app.get("/order/:orderId", async (req, res) => {
        const { orderId } = req.params;

        try {
            const order = await Order.findById(orderId);

            if (!order) {
                return res.status(404).send("Order not found");
            }

            return res.send(order);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post("/order", async (req, res) => {
        const { user, products } = req.body;

        try {
            const newOrder = new Order({
                user,
                products,
            });

            await newOrder.save();
            res.status(201).send(newOrder);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    app.patch("/order/:orderId", async (req, res) => {
        const { orderId } = req.params;
        const { user, products } = req.body;
        try {
            const updatedOrder = await Order.findByIdAndUpdate(
                orderId,
                { user, products },
                { new: true }
            );
            if (!updatedOrder) {
                return res.status(404).send("Order not found");
            }
            res.send(updatedOrder);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    app.delete("/order/:orderId", async (req, res) => {
        const { orderId } = req.params;
        try {
            const deletedOrder = await Order.findByIdAndDelete(orderId);
            if (!deletedOrder) {
                return res.status(404).send("Order not found");
            }
            res.send(deletedOrder);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });
};
