const youthModel = require("../model/youth");

async function handleGetYouthAllUsersName(req, res) {
  const html = `
  <ul>
  ${users.map((youth) => `<li>${youth.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
}

async function handleGetYouthUserById(req, res) {
  const youth = await youthModel.find();
  if (!youth) return res.status(404).json({ error: " user not found!" });
  return res.json(youth);
}

async function handleUpdateYouthkUserById(req, res) {
  console.log("pandding");
}

async function HandleDeteleYouthUserId(req, res) {
  try {
    const youthid = req.params.id.toString().trim();
    const deleteyouth = await youthModel.findByIdAndDelete(youthid);

    if (!deleteyouth) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json({ message: "data deleted successfully" });
  } catch (error) {
    console.log("error", error);
  }
}

async function HandleCreateYouthNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.middle_name ||
    !body.last_name ||
    !body.Mobile_Number ||
    !body.date_of_birth ||
    !body.address_line_1 ||
    !body.address_line_2 ||
    !body.gender ||
    !body.education ||
    !body.education_Specification ||
    !body.education_Status ||
    !body.reference_by ||
    !body.folloe_Up_By ||
    !body.is_Sabha_Attending ||
    !body.sabha_id ||
    !body.update_By ||
    !body.update_At ||
    !body.create_By ||
    !body.create_At
  ) {
    return res.status(400).json({ msg: "All fields are req..." });
  }
  console.log("body", body);
  const result = await youthModel.create({
    firstName: body.first_name,
    middleNmae: body.middle_name,
    lastNmae: body.last_name,
    mobileNumber: body.Mobile_Number,
    dateofbirth: new Date(body.date_of_birth),
    addressline1: body.address_line_1,
    addressline2: body.address_line_2,
    gender: body.gender,
    education: body.education,
    educationSpecification: body.education_Specification,
    educationStatus: body.education_Status,
    referenceBy: body.reference_by,
    folloeUpBy: body.folloe_Up_By,
    isSabhaAttending: body.isSabhaAttending,
    sabhaID: body.sabha_id,
    updateby: body.update_By,
    updateAt: body.update_At,
    createby: body.create_By,
    createAt: body.create_At,
  });

  res.send({ msg: "successfully enterd", id: result._id });
}

module.exports = {
  handleGetYouthAllUsersName,
  handleGetYouthUserById,
  handleUpdateYouthkUserById,
  HandleDeteleYouthUserId,
  HandleCreateYouthNewUser,
};
