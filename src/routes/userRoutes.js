const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = (app) => {
    app.get("/user", async (req, res) => {
        const users = await User.find();
        res.send(users);
    });

    app.post("/user", async (req, res) => {
        const { displayName } = req.body;

        const user = new User({
            displayName,
        });

        try {
            await user.save();
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.patch("/user/:userId", async (req, res) => {
        const { userId } = req.params;
        const updatedFields = req.body;

        try {
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                updatedFields,
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).send("User not found");
            }

            res.send(updatedUser);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete("/user/:userId", async (req, res) => {
        const { userId } = req.params;

        try {
            const deletedUser = await User.findByIdAndDelete(userId);

            if (!deletedUser) {
                return res.status(404).send("User not found");
            }

            res.send(deletedUser);
        } catch (error) {
            res.status(500).send(error);
        }
    });
};
