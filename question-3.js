// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  if (userPassword.length > 10) {
    return "Strong";
  } else if (userPassword.length >= 6 && userPassword.length <= 10) {
    return "Medium";
  } else {
    return "Weak";
  }
}
userPassword = "swnalWadqQ";
console.log(checkPasswordStrength(userPassword)); // "Strong" จำนวนตัวอักษรจากตัวอย่างคือ 10 แต่เงื่อนไขจากโจทย์จำนวนตัวอักษรต้อง "มากกว่า 10"
//จึงมีผลลัพย์จากเงื่อนไขคือ Medium จึงขัดแย้งกับตัวอย่าง แต่จะยึดตามเงื่อนไข
userPassword = "TechUp";
console.log(checkPasswordStrength(userPassword)); // "Medium" กรณีของ Medium จะตั้งแต่ 6 จนถึง 10
userPassword = "abcde";
console.log(checkPasswordStrength(userPassword)); // "Weak"
