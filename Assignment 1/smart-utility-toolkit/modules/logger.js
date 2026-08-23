// logger module
// different types of messages print karta hai

function info(msg) {
    console.log("[INFO] " + msg);
}

function success(msg) {
    console.log("[SUCCESS] " + msg);
}

function error(msg) {
    console.log("[ERROR] " + msg);
}

module.exports = { info, success, error };
