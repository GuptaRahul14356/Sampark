const guestModel =require("../model/guest");

async function handleGetSabhaUserById(req, res) {
    const id = Number(req.params.id);
    const guest = sabha.find((guest) => guest.id === id);
    if (!guest) return res.status(404).json({ error: "User not found!" });
    return res.json(guest);
  }
  async function handleUpdateSabhaUserById(req, res) {
    console.log("panding");
  }
  
  async function handleDeleteSabhaUserById(req, res) {
    try {
      const guestid = req.params.id.toString().trim();
      const deleteguests = await sabha.findByIdAndDelete(guestid);
  
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
      !body.address_Line1 ||
      !body.address_Line2 ||
      !body.Country ||
      !body.Pin_Code ||
      !body.Sabha_Type ||
      !body.Sabha_Type ||
      !body.Leader
    ) {
      return res.status(400).json({ msg: "All fields are req..." });
    }
    console.log("body", body);
    const result = await User.create({
      name: body.Name,
      addressLine1: body.address_Line1,
      addressLine2: body.address_Line1ai2,
      country: body.Country,
      pinCode: body.Pin_Code,
      sabhaType: body.Sabha_Type,
      leader: body.Leader,
    });
    res.send({ msg: "successfully enterd", id: result._id });
  }
  module.exports = {
    handleGetSabhaUserById,
    handleUpdateSabhaUserById,
    handleDeleteSabhaUserById,
    handleCreateSabhaNewUser,
  };
  