

const getUsers = require("../../controllers/userController.js")

//get Users
test(" should return all USERS", async () => {
    const data = await getUsers();
    expect(data).toBe('peanut butter')
})