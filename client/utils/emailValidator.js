const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const emailValidator = (email) => !!email.match(emailRegex)
export default emailValidator;