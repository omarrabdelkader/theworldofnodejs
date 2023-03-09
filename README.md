<h1 align="center">
REDISCOVERING THE WORLD OF NODE.JS
</h1>

> You can never understand everything. But, you should push yourself to understand the system.- Rydan Dahl, the creator of Node.js

<h2>INTRODUCTION</h2>
<p>Hello, world. This is a project for me to re-discover Node.js, as I have developing in this technology for a long time. However, I believe that I'm in need to re-discover the core of Node. Moreover, I have been studying this exceptional course by Cododev which educates how Node.js works behind the scenes. I will be leaving the link of the Youtube playlist.</p>

<a>https://youtu.be/GVLw17FNZ3A</a>

---------------------------------------

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
