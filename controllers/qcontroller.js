// Controller function to handle the GET request for '/q'
async function getQuery(req, res) {
    res.send("hiiiiii"); // Send a response back to the client
}

module.exports = {
    getQuery,
};
