const fs = require("fs/promises");
(async () => {
  // COMMANDS

  const CREATE_FILE = "create a file";
  const DELETE_FILE = "delete the file";

  // METHODS

  //   CREATE A FILE METHOD
  const createFile = async (path) => {
    try {
      // Checking whether the file already exists
      const exisitingFileHandler = await fs.open(path, "r");
      exisitingFileHandler.close();
      return console.log(`The file path: ${path} already exists!`);
    } catch (error) {
      // This means we don't have the file
      const newFileHandler = await fs.open(path, "w");
      console.log("A new file has been created!");
      newFileHandler.close();
    }
  };

  //   DELETING A FILE METHOD

  const deleteFile = async (path) => {
    await fs.unlink(path);
    console.log(`File has been deleted: ${path}`);
  };

  const commandFileHandler = await fs.open("./command.txt", "r");
  commandFileHandler.on("change", async () => {
    // size of the file
    const size = (await commandFileHandler.stat()).size;
    // allocate the buffer with the size of the file
    const buff = Buffer.alloc(size);
    // the location at which we want to start filling our buffer
    const offset = 0;
    // how many bytes we want to read
    const length = buff.byteLength;
    // the position that we want to start reading the file from
    const position = 0;
    console.log("File has been changed");
    // content
    const content = await commandFileHandler.read(
      buff,
      offset,
      length,
      position
    );

    const command = buff.toString();

    // CREATE A FILE:
    // CREATE A FILE <PATH>
    if (command.includes(CREATE_FILE)) {
      const filePath = command.substring(CREATE_FILE.length + 1);
      createFile(filePath);
    }

    // DELETE A FILE:
    // DELETE THE FILE <PATH>
    if (command.includes(DELETE_FILE)) {
      const filePath = command.substring(DELETE_FILE.length + 1);
      deleteFile(filePath);
    }
  });
  const watcher = fs.watch("./");

  // ASYNC ITERATOR
  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();
