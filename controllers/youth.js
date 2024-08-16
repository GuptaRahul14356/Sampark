const youthModel =require("../model/youth")

async function handleGetSamparkUserById(req, res) {
  const id = Number(req.params.id);
  const user = user.find((user) => user.id === id);
  if (!user) return res.status(404).json({ error: " user not found!" });
  return res.json(user);
}

async function handleUpdateSamparkUserById(req, res) {
  const users = req.params.user;
  const changes = req.body;
  const originalInformation =
    bancoDeDados.retriverOriginalIinformationInMatrix(users);

  let modifiedInFormation = originalInformation;
  if (changes.painted !== undefined) {
    modifiedInFormation.painted = true;
  }
  res.send(modifiedInFormation);
}

async function HandleDeteleSamparkUserId(req, res) {
  try {
    const userid = req.params.id.toString().trim();
    const deleteusers = await user.findByIdAndDelete(userid);

    if (!deleteusers) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json({ message: "data deleted successfully" });
  } catch (error) {
    console.log("error", error);
  }
}

async function HandleCreateSamparkNewUser(req, res) {
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
  const result = await user.create({
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
  handleGetSamparkUserById,
  handleUpdateSamparkUserById,
  HandleDeteleSamparkUserId,
  HandleCreateSamparkNewUser,
};
