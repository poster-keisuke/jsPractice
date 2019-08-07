function validateEmail(email) {
  return email.match(/@/) ? email : new Error(`無効なメールアドレスです : ${email}`)
}

const email = 'janedoe.com'

const validatedEmail = validateEmail(email)
if(validatedEmail instanceof Error) {
  console.error(validatedEmail.message)
} else {
  console.log(`正しい形式のアドレスです: ${validatedEmail}`)
}
