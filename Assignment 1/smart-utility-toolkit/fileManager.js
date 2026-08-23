// fileManager.js
// fs module use karke file create, read, update, delete karo
// run: node fileManager.js

var fs = require("fs");

// 1. CREATE FILE
console.log("Creating File...");
fs.writeFile("test.txt", "Hello Node.js\n", function(err) {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }
    console.log("File Created");

    // 2. READ FILE
    console.log("Reading File...");
    fs.readFile("test.txt", "utf8", function(err, data) {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }
        console.log(data);

        // 3. UPDATE FILE (append)
        console.log("Updating File...");
        fs.appendFile("test.txt", "Learning FS Module\n", function(err) {
            if (err) {
                console.log("Error updating file:", err);
                return;
            }
            console.log("File Updated");

            // read again to show updated content
            fs.readFile("test.txt", "utf8", function(err, data) {
                if (err) {
                    console.log("Error reading file:", err);
                    return;
                }
                console.log(data);

                // 4. DELETE FILE
                console.log("Deleting File...");
                fs.unlink("test.txt", function(err) {
                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }
                    console.log("File Deleted");
                });
            });
        });
    });
});
