const user={
    firstName: `John`,
    lastName: `Smith`
}

console.log(`${user.firstName} ${user.lastName}`)

delete user.firstName

user.firstName= `Paul`

console.log(`${user.firstName} ${user.lastName}`)


delete user.firstName
console.log(`${user.firstName} ${user.lastName}`)