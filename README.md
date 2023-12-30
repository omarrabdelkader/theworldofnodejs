# Rediscovering the World of Node.js

> *"You can never understand everything. But, you should push yourself to understand the system." - Ryan Dahl, the creator of Node.js*

## Introduction

Hello, world! This project is an exploration to rediscover the world of Node.js. Having worked with this technology for a year, I aim to delve deeper into the core of Node.js. I've supplemented my learning with an exceptional course by Cododev, which delves into the inner workings of Node.js. You can find the course on [YouTube](https://youtu.be/GVLw17FNZ3A).

---

## What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine—a high-performance engine written in C++. It is utilized in both Chrome and Node.js, offering an efficient environment for executing JavaScript code.

## What is a JavaScript Engine?

JavaScript, not inherently understandable by computers, requires a JavaScript engine to convert the code into machine-understandable language.

## What is V8?

V8, Google's open-source JavaScript and WebAssembly engine, is written in C++. It implements ECMAScript and WebAssembly, running on various operating systems.

![V8 Engine](https://i.ibb.co/gwVfN2j/Screenshot-2023-03-09-191358.png)

## Reading a File with Node.js

Using V8, Event Loop (for async), and libuv, Node.js reads a file, translating actions into machine code for storage.

![Reading File](https://i.ibb.co/GRtmMLD/Screenshot-2023-03-09-192317.png)

---

## Understanding EventEmitter in Node.js

![EventEmitter](https://i.ibb.co/Sm4ThP5/Screenshot-2023-03-16-221636.png)

In Node.js, the EventEmitter handles events using an asynchronous event-driven architecture. Objects emit named events, triggering functions called listeners.

![EventEmitter Diagram](https://i.ibb.co/c1dpq2t/Screenshot-2023-03-16-221742.png)

Node.js performs actions by defining events, issuing commands, and waiting for responses.

### What happens with `on` method?

When an EventEmitter emits an event, all attached functions for that event are synchronously called.

![on Method](https://i.ibb.co/hBnKRkv/Screenshot-2023-03-16-222108.png)

### What happens when emitting a specific function?

Emitting a specific function triggers that function outside of the object.

![Emit Specific Function](https://i.ibb.co/QNpkwXw/Screenshot-2023-03-16-222120.png)

### What is the `once` method?

The `once` method executes a function only once, even if emitted multiple times.

![once Method](https://i.ibb.co/MV3KKDP/Screenshot-2023-03-16-222137.png)

### What is `eventNames` method?

`eventNames` returns an array listing events for which the emitter has registered listeners.

![eventNames Method](https://i.ibb.co/Tc8TN1q/Screenshot-2023-03-16-222155.png)

### Source Code of Events

![Event Source Code 1](https://i.ibb.co/SvcWnBY/Screenshot-2023-03-16-222210.png)
![Event Source Code 2](https://i.ibb.co/nkfCB8Y/Screenshot-2023-03-16-222227.png)
![Event Source Code 3](https://i.ibb.co/HV4ZF5J/Screenshot-2023-03-16-222243.png)

[Source: FreeCodeCamp](https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/)

---

## What is a Buffer?

A buffer is a region of memory used to temporarily store data during its transfer from one location to another.

![Buffer](https://i.ibb.co/r7T4NsD/Screenshot-2023-03-16-223705.png)

Buffers in Node.js handle binary data, each corresponding to raw memory outside V8.

![Buffers](https://i.ibb.co/52vNYkS/Screenshot-2023-03-16-223721.png)
![Buffers](https://i.ibb.co/ZTmFMCq/Screenshot-2023-03-16-223734.png)

Each '0' in a buffer represents a byte, illustrating the process of pushing data into the buffer.

![Buffer Example](https://i.ibb.co/6WhxBzs/Screenshot-2023-03-16-223800.png)
![Buffer Example](https://i.ibb.co/M73HN03/Screenshot-2023-03-16-223816.png)

Converting a buffer into a string is decoding, and vice versa is encoding. UTF-8 is the default character encoding.

![Buffer Conversion](https://i.ibb.co/tLb75Qb/Screenshot-2023-03-16-224500.png)

It's an array with type 'Buffer,' and the data is in the decimal number system due to the JSON method. Node.js buffers accept various case variations of encoding strings.

---

## File System

### What is a File?

A file is an object on a computer storing data, information, settings, or commands used with a computer program.

![File System](https://i.ibb.co/RHvMzn0/Screenshot-2023-12-30-130222.png)

### Three Ways to Create Files in Node.js:

1. Promises API
2. Callback API
3. Sync API

![File Creation Methods](https://i.ibb.co/G9ZYLpN/Screenshot-2023-03-09-135400.png)

### `watch()` in FS (File System)

`fs.watch()` continuously monitors changes in a file or directory. It returns an FSWatcher object.

![FS Watch](https://i.ibb.co/jLDDxxf/Screenshot-2023-03-09-142706.png)
![FS Watch](https://i.ibb.co/ydcLDCm/Screenshot-2023-03-09-142718.png)

Events are objects containing eventType and filename.

### What is a FileHandle object?

It's an object wrapper for a numeric file descriptor created by `fs.open()`. FileHandle objects are also EventEmitter objects.

Reading data from the file and storing it in a buffer is achieved through the `read` method.

![FileHandle Object](https://i.ibb.co/X3wCcbB/Screenshot-2023-03-09-143238.png)
![FileHandle Object](https://i.ibb.co/NrjQ05B/Screenshot-2023-03-09-143250.png)

Each character in `command.txt` represents 1 byte, and changes result in new objects.

### `stat` Method

The `fs.stat()` method returns information about the given file or directory.

![Stat Method](https://i.ibb.co/RHvMzn0/Screenshot-2023-12-30-130222.png)

[![Screenshot-2023-12-30-125253](https://i.ibb.co/Xxkv9ZC/Screenshot-2023-12-30-125253.png)](https://ibb.co/qYFPzMr)
[![Screenshot-2023-12-30-130811](https://i.ibb.co/wJFm453/Screenshot-2023-12-30-130811.png)](https://imgbb.com/)
[![Screenshot-2023-12-30-130825](https://i.ibb.co/mShxV2H/Screenshot-2023-12-30-130825.png)](https://imgbb.com/)
[![Screenshot-2023-12-30-130853](https://i.ibb.co/syDFHrR/Screenshot-2023-12-30-130853.png)](https://ibb.co/kQrh1FB)


