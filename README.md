<h1 align="center">
REDISCOVERING THE WORLD OF NODE.JS
</h1>

> You can never understand everything. But, you should push yourself to understand the system.- Rydan Dahl, the creator of Node.js

<h2>INTRODUCTION</h2>
<p>Hello, world. This is a project for me to re-discover Node.js, as I have developing this technology for a long time. However, I believe that I'm in need to re-discover the core of this technology. Moreover, I have been studying this exceptional course by Cododev which educates how Node.js works behind the scenes. I will be leaving the link of the playlist on Youtube.</p>


<h3> File System </h3>

<h4> What is a file? </h4>
<p>A file is an object on a computer that stores data, information, settings, or commands used with a computer program. File is a sequence of bits.</p>
<p>Node.js talks to your OS using System Calls, and your OS does some tasks for you. Imagine you want to open up a file, you call a system call and you say I want to do that. So, we will be using the open() system call. Node uses libuv to call this system call.
a system call (commonly abbreviated to syscall) is the programmatic way in which a computer program requests a service from the operating system
 </p>

<h4>
 There are three different ways to create files using Node.js which are: 
</h4>
<ul>
<li>Promises API</li>
<li>Callback API</li>
<li>Sync API</li>
<ul>
<img src="https://i.ibb.co/G9ZYLpN/Screenshot-2023-03-09-135400.png" alt="how to create files using Node.js"
     style="width: 400px; margin: 20px;">

 
 <h4>1)	Watch() in FS (File System)</h4>
<p>The fs.watch() method is an inbuilt application programming interface of fs module which is used to continuously watch for changes in the given file or directory. It returns a fs.FSWatcher object that can be used to track the changes in the file.</p>



