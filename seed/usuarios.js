import bcrypt from 'bcrypt'

const usuarios = [
    {
        nombre: 'Jorge',
        email: 'jorge@jorge.com',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10)
    }
]

export default usuarios