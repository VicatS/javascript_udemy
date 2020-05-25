/*
const getName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Victor')
        }, 1500)

    })
}

getName()
    .then(name => console.log(name))

const sayHello = async () => {
    const name = await getName()
    return `Hello ${name}`
}

sayHello()
    .then(res => console.log(res))*/

const users = [{id: 1, name: 'Dorian'}, {id: 2, name: 'Laura'}, {id: 3, name: 'Carlos'}]
const emails = [{id: 1, email: 'dorian@gmail.com'}, {id: 2, email: 'laura@gmail.com'}]

const getUser = async (id) => {
    const user = users.find(user => user.id == id)
    if (!user) throw new Error(`Dont't exist an user with id ${id}`)
    else return user

}

const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
    if (!email) throw new Error(`${user.name} hasn't email`)
    else return ({
        id: user.id,
        name: user.name,
        email: email.email

    })
}

/*const getInfo = () => {
    return getEmail(getUser(1))
}*/

const getInfo = async (id) => {
    try {
        const user = await getUser(id)
        const res = await getEmail(user)
        return `${user.name} your email es ${res.email}`
    } catch (error) {
        console.log(error)
    }

}

getInfo(3)
    .then(res => console.log(res))