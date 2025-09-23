const getUsers = (_req, res) => {
    res.json({ success: true, users: [] });
};

const createUser =  (req,res) => {
    res.status(201).json({ success: true})
}

export { getUsers, createUser };