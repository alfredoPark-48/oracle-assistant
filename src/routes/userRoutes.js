const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = (app) => {
    app.get("/user", async (req, res) => {
        const users = await User.find();
        res.send(users);
    });
    
    app.get("/user/:userId", async (req, res) => {
        const { userId } = req.params;

        try {
            const user = await User.findById(userId);
            
            if (!user) {
                return res.status(404).send('User not found');
            }

            return res.status(200).send(user);
        } catch (error) {
           res.status(500).send(error);
        }
    })

    app.get("/user/name/:userName", async (req, res) => {
        const { userName } = req.params;

        try {
            const user = await User.find({ displayName: userName });
            
            if (!user) {
                return res.status(404).send("User not found");
            }

            return res.status(200).send(user);
        } catch (error) {
            return res.status(500).send(error);
        }
    })

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
