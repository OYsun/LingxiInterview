
const phone = /^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/
export function isPhone (value) {
  return phone.test(value)
}
