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
  const body = await youthModel
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          middleName: req.body.middleName,
          lastName: req.body.lastName,
          mobileNumber: req.body.mobileNumber,
          dateOfBirth: new Date(req.body.dateOfBirth),
          addressLine1: req.body.addressLine1,
          addressLine2: req.body.addressLine2,
          Gender: req.body.Gender,
          Education: req.body.Education,
          educationSpecification: req.body.educationSpecification,
          educationStatus: req.body.educationStatus,
          referenceBy: req.body.referenceBy,
          followUpBy: req.body.followUpBy,
          isSabhaAttending: req.body.isSabhaAttending,
          sabhaId: req.body.sabhaId,
          updateBy: req.body.updateBy,
          updateAt: req.body.updateAt,
          createBy: req.body.createBy,
          createAt: req.body.createAt,
        },
      }
    )
    .then((result) => {
      res.send({ msg: " Data update successfully", result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        Error: "bad requiest",
      });
    });
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
    !body.firstName ||
    !body.middleName ||
    !body.lastName ||
    !body.mobileNumber ||
    !body.dateOfBirth ||
    !body.addressLine1 ||
    !body.addressLine2 ||
    !body.Gender ||
    !body.Education ||
    !body.educationSpecification ||
    !body.educationStatus ||
    !body.referenceBy ||
    !body.followUpBy ||
    !body.isSabhaAttending ||
    !body.sabhaId ||
    !body.updateBy ||
    !body.updateAt ||
    !body.createBy ||
    !body.createAt
  ) {
    return res.status(400).json({ msg: "All fields are req..." });
  }
  console.log("body", body);
  const result = await youthModel.create({
    firstName: body.firstName,
    middleName: body.middleName,
    lastName: body.lastName,
    mobileNumber: body.mobileNumber,
    dateOfBirth: new Date(body.dateOfBirth),
    addressLine1: body.addressLine1,
    addressLine2: body.addressLine2,
    Gender: body.Gender,
    Education: body.Education,
    educationSpecification: body.educationSpecification,
    educationStatus: body.educationStatus,
    referenceBy: body.referenceBy,
    followUpBy: body.followUpBy,
    isSabhaAttending: body.isSabhaAttending,
    sabhaId: body.sabhaId,
    updateBy: body.updateBy,
    updateAt: body.updateAt,
    createBy: body.createBy,
    createAt: body.createAt,
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
