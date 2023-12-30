<h1 align="center">
REDISCOVERING THE WORLD OF NODE.JS
</h1>

> <em>You can never understand everything. But, you should push yourself to understand the system.- Rydan Dahl, the creator of Node.js</em>

<h2>INTRODUCTION</h2>
<p>Hello, world. This is a project to re-discover the world of Node.js, as I have been developing in this technology for a year now. However, I believe that I'm in need to reach the core of Node. Moreover, I have been studying this exceptional course by Cododev which educates how Node.js works behind the scenes. I will be leaving the link of his Youtube playlist.</p>

<a>https://youtu.be/GVLw17FNZ3A</a>

--------------------------------------
<h4> What is Node.js? </h4>
<p>
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others.</p>

<h4> What is a JavaScript engine?</h4>
<p>
JavaScript is not understandable by computer but the only browser understands JavaScript. So, we need a program to convert our JavaScript program into computer-understandable language. A JavaScript engine is a computer program that executes JavaScript code and converts it into computer understandable language
 </p>
 
 <h4>What is V8?</h4>
<p>
V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. V8 can run standalone, or can be embedded into any C++ application. So, it means that you’re running C++ code behind the scenes. You write some functions, then you bind it with V8.
 </p>
 
 <img src="https://i.ibb.co/gwVfN2j/Screenshot-2023-03-09-191358.png" alt="how to create files using Node.js"
     style="width: 400px; margin: 20px;">
     

<h4> How do you read a file in your computer using Node.js? </h4>
<p>
Using V8, Event Loop (for the async) and libuv to transfer the action into machine code to the storage.</p>
 <img src="https://i.ibb.co/GRtmMLD/Screenshot-2023-03-09-192317.png"  alt="how to create files using Node.js"
     style="width: 600px; margin: 20px;">

-------------------------

<h4>Understanding EventEmitter in Node.js</h4>
<img src="https://i.ibb.co/Sm4ThP5/Screenshot-2023-03-16-221636.png"  alt="how to create files using Node.js"
     style="width: 600px; margin: 20px;">
<p>
These two orange figures are threads. Each thread can do only one thing once. So, how can it handle it? Only two ways: sync or async
If we choose the sync method: one of these two threads will constantly check the keyboard if it has performed an action, which will kill one of these threads. 
If we choose the async method: we could define an event-driven, in which we issue an event that goes to the CPU whenever we press on the keyboard, let one of the threads known that we have performed an action.
Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
</p>
<img src="https://i.ibb.co/c1dpq2t/Screenshot-2023-03-16-221742.png"  alt="how to create files using Node.js"
     style="width: 600px; margin: 20px;">
 
 <p>In Node.js we perform same actions; you define event (foo) and you issue commands (emit) and you wait until it responds back.</p>
 
 
 <h4>What happens when you call the on method from the emitter1?</h4>
 <p>
 All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and discarded.
</p>

<img src="https://i.ibb.co/hBnKRkv/Screenshot-2023-03-16-222108.png"  alt="how to create files using Node.js"
     style="width: 600px; margin: 20px;">

<h4>What happens when you emit a specific function inside of the object?</h4>
<p>It will emit a specific function out of the object, so it can work.</p>


<img src="https://i.ibb.co/QNpkwXw/Screenshot-2023-03-16-222120.png"  alt="how to create files using Node.js"
     style="width: 600px; margin: 20px;">
     
     
 <h4>What is the once method?<h4>
 <p>The once method is used if you want to execute a function only once, even if it has been emitted more than once.</p>
 
 <img src="https://i.ibb.co/MV3KKDP/Screenshot-2023-03-16-222137.png"  alt="how to create files using Node.js"
     style="width: 600px; margin: 20px;">
 
 <h4>What is eventNames() method?</h4>
 <p>Returns an array listing the events for which the emitter has registered listeners. The values in the array are strings or Symbols.</p>
  <img src="https://i.ibb.co/Tc8TN1q/Screenshot-2023-03-16-222155.png"  alt="how to create files using Node.js"
     style="width: 600px; margin: 20px;">
 
 <h4>Source code of events?</h4>

   <img src="https://i.ibb.co/SvcWnBY/Screenshot-2023-03-16-222210.png"  alt="how to create files using Node.js"
     style="width: 600px; margin: 20px;">
    <img src="https://i.ibb.co/nkfCB8Y/Screenshot-2023-03-16-222227.png"  alt="how to create files using Node.js"
     style="width: 600px; margin: 20px;">
   <img src="https://i.ibb.co/HV4ZF5J/Screenshot-2023-03-16-222243.png"  alt="how to create files using Node.js"
     style="width: 600px; margin: 20px;">
 
 > source: https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/
 
----------------------

### What is a buffer?

A data buffer (or just buffer) is a region of memory used to temporarily store data while it is being moved from one place to another.

![How to create files using Node.js](https://i.ibb.co/r7T4NsD/Screenshot-2023-03-16-223705.png)

Buffers were introduced into Node.js to handle binary data. Each buffer corresponds to some raw memory allocated outside V8. Buffers act somewhat like integer arrays but aren’t sizeable.

![How to create files using Node.js](https://i.ibb.co/52vNYkS/Screenshot-2023-03-16-223721.png)

![How to create files using Node.js](https://i.ibb.co/ZTmFMCq/Screenshot-2023-03-16-223734.png)

Each `0` means a byte. Pushing data into the buffer.

![How to create files using Node.js](https://i.ibb.co/6WhxBzs/Screenshot-2023-03-16-223800.png)

![How to create files using Node.js](https://i.ibb.co/M73HN03/Screenshot-2023-03-16-223816.png)

Converting a Buffer into a string using one of the above is referred to as decoding, and converting a string into a Buffer is referred to as encoding. When converting between Buffers and strings, a character encoding may be specified. If no character encoding is specified, UTF-8 will be used as the default.

![How to create files using Node.js](https://i.ibb.co/tLb75Qb/Screenshot-2023-03-16-224500.png)

It’s an array with a type: “Buffer,” and the data is in the decimal number system because of the JSON method. Node.js buffers accept all case variations of encoding strings that they receive. For example, UTF-8 can be specified as 'utf8', 'UTF8', or 'uTf8'.
----------------------
<h3> File System </h3>
     
<h4> What is a file? </h4>
<p>A file is an object on a computer that stores data, information, settings, or commands used with a computer program. File is a sequence of bits.</p>
<p>Node.js talks to your OS using System Calls, and your OS does some tasks for you. Imagine you want to open up a file, you call a system call and you say I want to do that. So, we will be using the open() system call. Node uses libuv to call this system call.
a system call (commonly abbreviated to syscall) is the programmatic way in which a computer program requests a service from the operating system
 </p>

<h4>
 There are three different ways to create files using Node.js which are: 
</h4>
<ul style="margin-bottom: 20px">
<li>Promises API</li>
<li>Callback API</li>
<li>Sync API</li>
<ul>
 
<img src="https://i.ibb.co/G9ZYLpN/Screenshot-2023-03-09-135400.png" alt="how to create files using Node.js"
     style="width: 400px; margin: 20px;">

 
 <h4>1)	Watch() in FS (File System)</h4>
<p>The fs.watch() method is an inbuilt application programming interface of fs module which is used to continuously watch for changes in the given file or directory. It returns a fs.FSWatcher object that can be used to track the changes in the file.</p>


<img  src="https://i.ibb.co/jLDDxxf/Screenshot-2023-03-09-142706.png" alt="how to create files using Node.js"
     style="width: 400px; margin: 20px;">
 <img  src="https://i.ibb.co/ydcLDCm/Screenshot-2023-03-09-142718.png" alt="how to create files using Node.js"
     style="width: 400px; margin: 20px;">
 
 <p>So, each event is an object, which contains two keys: eventType and filename. </p>
 
 <h4>What is a fileHandle object?</h4>
<p>It is an object wrapper for a numeric file descriptor. An instance of a fileHandle class are created by fs.open() method. All fileHandl objects are eventEmitter objects.</p>

<p>File descriptor: A file descriptor is a number that uniquely identifies an open file in a computer's operating system. It describes a data resource, and how that resource may be accessed. Something like ID.</p>
 <p>The read method reads data from the file and stores that in the given buffer.</p>

 <img  src="https://i.ibb.co/X3wCcbB/Screenshot-2023-03-09-143238.png" alt="how to create files using Node.js"
     style="width: 400px; margin: 20px;">
 
 <img  src="https://i.ibb.co/NrjQ05B/Screenshot-2023-03-09-143250.png" alt="how to create files using Node.js"
     style="width: 400px; margin: 20px;">
 
 <p>Each character inside of the command.txt represents 1 byte. Also, remember each byte equals 8 bits. Any changed will be added in a new object.</p>
 <p>The byteRead key represents how many characters are inside of the file. </p>
