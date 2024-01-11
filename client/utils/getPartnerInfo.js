const e = require("cors");

function getPartnerInfo(users, email) {
  const partnerInfo = users.find((user) => user.email !== email);
  return partnerInfo;
}

export default getPartnerInfo;
