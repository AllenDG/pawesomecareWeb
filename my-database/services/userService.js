const db = require('../database/db')
const CryptoJS = require('crypto-js')

module.exports.getAllUsers = async () => {
    const [records] = await db.query('SELECT * FROM users')
    return records
}

module.exports.loginUsers = async (email, pass) => {
    const [records] = await db.query("SELECT * FROM users WHERE UserEmail = ?", [email])
    
    if (records.length === 0) {
        throw new Error("No matching user found.")
    }

    const storedPassword = records[0].UserPassword
    const decryptedPassword = decryptAndVerifyPassword(storedPassword, pass)

    if (pass === decryptedPassword) {
        return records
    } else {
        throw new Error("Incorrect password.")
    }
}

module.exports.getUserById = async (id) => {
    const [[records]] = await db.query("SELECT * FROM users WHERE UserID = ?", [id])
    return records
}

module.exports.deleteUserById = async (id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM users WHERE UserID = ?", [id])
    return affectedRows
}

module.exports.addOrEditUser = async (obj, UserID = 0) => {
    // Encrypt the user's password
    const encryptedPassword = encryptPassword(obj.UserPassword)

    const [[[{affectedRows}]]] = await db.query("CALL usp_user_add_or_edit(?,?,?,?,?,?,?)",
        [UserID, obj.UserFName, obj.UserLName, obj.UserEmail,encryptedPassword])
    return affectedRows
}

module.exports.editUserPassword = async (userID, newPassword) => {
    // Encrypt the new password
    const encryptedPassword = encryptPassword(newPassword);

    const [updateResult] = await db.query("UPDATE users SET UserPassword = ? WHERE UserID = ?", [encryptedPassword, userID])
  
    return updateResult.affectedRows
  }

// Function to encrypt a password using CryptoJS
function encryptPassword(password) {
    const salt = CryptoJS.lib.WordArray.random(16)
    const key = CryptoJS.PBKDF2(password, salt, { keySize: 512 / 32, iterations: 1000 })
    const iv = CryptoJS.lib.WordArray.random(128 / 8)
  
    const encrypted = CryptoJS.AES.encrypt(password, key, { iv: iv })
  
    return `${encrypted.toString()}|${salt.toString()}|${iv.toString()}`
}

// Function to decrypt and verify the password
function decryptAndVerifyPassword(storedPassword, userPassword) {
    const [encrypted, salt, iv] = storedPassword.split('|')
  
    const key = CryptoJS.PBKDF2(userPassword, CryptoJS.enc.Hex.parse(salt), { keySize: 512 / 32, iterations: 1000 })
    const decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: CryptoJS.enc.Hex.parse(iv) }).toString(CryptoJS.enc.Utf8)
  
    return decrypted
}