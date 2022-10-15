const express = require("express");
const router = express.Router();
const user = require("../../models/User");

//RETURN ALL USERS
// router.get("/listUsers", async(req,res) => {
//      try {
//        const users = await user.find();
//        res.status(200).json({ status: true, data: users });
//      } catch (error) {
//        if (error) throw error;
//        res.status(401).json({ status: false, error });
//      }
// });
//ADD A NEW USER TO THE DATABASE
// router.post("/register", async (req, res) => {
//   try {
//     let { fName, lName, phone, adress, email, password } = req.body;
//     const newUser = new user({
//       fName,
//       lName,
//       phone,
//       adress,
//       email,
//       password,
//     });
//     const User = await newUser.save();
//     res.status(200).json({ message: "This User was aded succefully" });
//   } catch (error) {
//     if (error) throw error;
//     res.status(403).json({ status: false, error });
//   }
// });
//EDIT A USER BY ID
// router.put("/updateUser/:id", async(req, res) => {
//       try {
//         let { id } = req.params;
//         await user.findByIdAndUpdate(
//             id,
//             {
//                 $set: { ...req.body },
//             },
//             { new: true }
//         );
//         res.status(200).json({
//             status: true,
//             message: "User was updated successfully",
//         });
//     } catch (error) {
//         if (error) throw error;
//         console.log(error);
//     }
// });

//REMOVE A USER BY ID
router.delete("/deleteUser/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await user.findByIdAndDelete(id);
    res.status(200).json({
      status: true,
      message: "User was deleted successfully",
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
});
module.exports = router;
