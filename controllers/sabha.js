const sabhaModel = require("../model/sabha");

async function handleGetSabhaUserById(req, res) {
  const id = Number(req.params.id);
  const sabha = sabhaModel.find((sabha) => sabha.id === id);
  if (!sabha) return res.status(404).json({ error: "User not found!" });
  return res.json(sabha);
}
async function handleUpdateSabhaUserById(req, res) {
  console.log("panding");
}

async function handleDeleteSabhaUserById(req, res) {
  try {
    const guestid = req.params.id.toString().trim();
    const deleteguests = await sabhaModel.findByIdAndDelete(guestid);

    if (!deleteguests) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.log("error", error);
  }
}

async function handleCreateSabhaNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.Name ||
    !body.addressLine1 ||
    !body.addressLine2 ||
    !body.Country ||
    !body.pinCode ||
    !body.sabhaType ||
    !body.Leader
  ) {
    return res.status(400).json({ msg: "All fields are req..." });
  }
  console.log("body", body);
  const result = await sabhaModel.create({
    Name: body.Name,
    addressLine1: body.addressLine1,
    addressLine2: body.addressLine2,
    Country: body.Country,
    pinCode: body.pinCode,
    sabhaType: body.sabhaType,
    Leader: body.Leader,
  });
  res.send({ msg: "successfully enterd", id: result._id });
}
module.exports = {
  handleGetSabhaUserById,
  handleUpdateSabhaUserById,
  handleDeleteSabhaUserById,
  handleCreateSabhaNewUser,
};
