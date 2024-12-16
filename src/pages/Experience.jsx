import React from "react";

import adobeIcon from '../../src/assets/techicons/adobe-icon.svg';
import asepriteIcon from '../../src/assets/techicons/aseprite-icon.svg';
import awsIcon from '../../src/assets/techicons/aws-icon.svg';
import dockerIcon from '../../src/assets/techicons/docker-icon.svg';
import djangoIcon from '../../src/assets/techicons/django-icon.svg';
import figmaIcon from '../../src/assets/techicons/figma-icon.svg';
import githubIcon from '../../src/assets/techicons/github-icon.svg';
import godotIcon from '../../src/assets/techicons/godot-icon.svg';
import laravelIcon from '../../src/assets/techicons/laravel-icon.svg';
import mongodbIcon from '../../src/assets/techicons/mongodb-icon.svg';
import mysqlIcon from '../../src/assets/techicons/mysql-icon.svg';
import nodejsIcon from '../../src/assets/techicons/nodejs-icon.svg';
import pythonIcon from '../../src/assets/techicons/python-icon.svg';
import reactIcon from '../../src/assets/techicons/react-icon.svg';
import tailwindIcon from '../../src/assets/techicons/tailwind-icon.svg';
import typescriptIcon from '../../src/assets/techicons/typescript-icon.svg';
import unityIcon from '../../src/assets/techicons/unity-icon.svg';
import vuejsIcon from '../../src/assets/techicons/vuejs-icon.svg';
import wordpressIcon from '../../src/assets/techicons/wordpress-icon.svg';

const Experience = () => {
    return (
        <div className="min-h-auto flex flex-col space-y-2 w-full items-center">
            <h3>Experience</h3>
            <p className="mx-6">/* A list of the various technologies I've worked with, organized by proficiency level. I'm currently working to improve with key technologies, while also broadening my scope and exposing myself to different frameworks and methodologies. */</p>
            <div className="flex flex-col w-full items-center space-y-4">

                <div className="familiarity-section flex flex-col w-11/12">
                    <div className="flex flex-row w-full">
                        <h2 className="familiarity-header text-left font-bold text-lightColor">★★★ Comfortable</h2>
                    </div>

                    <div className="proficiency-description flex flex-col">
                        <p className="text-left text-sm">// Technologies I have worked with on multiple projects.</p>
                        <p className="text-left text-sm mt-0 mb-2 leading-none">// I can implement core features and address common challenges confidently.</p>   
                    </div>

                    <div className="space-y-1">
                        <div className="familiarity-item transition-all ease-in-out transition-duration-500  flex flex-row w-full items-start">
                            <img src={laravelIcon} alt="Laravel" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">PHP/Laravel/Livewire</p>
                                <p className="text-sm text-left">Built full-stack web apps using Laravel for the backend and Livewire to make the front end dynamic and reactive. Worked with Eloquent ORM to manage databases smoothly. It’s been great for learning how everything connects in a real-world project.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={reactIcon} alt="React" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">React</p>
                                <p className="text-sm text-left">Used React to make responsive, interactive single-page apps. I’ve worked with hooks and state to keep things organized and efficient. It’s been a great tool for building things that feel snappy and modern.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={tailwindIcon} alt="Tailwind CSS" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">HTML5/CSS/JavaScript</p>
                                <p className="text-sm text-left">Developed responsive websites using clean HTML and modern CSS libraries like Tailwind and Bootstrap, enhancing functionality with JavaScript. I prioritize creating designs that look great and perform seamlessly across all devices. It’s been at the heart of most of my projects so far.</p>                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={mysqlIcon} alt="MySQL" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">MySQL</p>
                                <p className="text-sm text-left">Designed and managed databases for projects, writing queries and keeping everything organized. Used it with Laravel to handle data easily. It’s been a solid way to understand how data works in web apps.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={githubIcon} alt="GitHub" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Git and GitHub</p>
                                <p className="text-sm text-left">Used Git and GitHub for tracking changes and working on projects with others. It’s been essential for keeping things organized and collaborating without stepping on anyone’s toes.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={pythonIcon} alt="Python" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Python</p>
                                <p className="text-sm text-left">Used Python for small scripts and some backend work. Played around with Django to see how it handles web apps. It’s been great for learning about clean, efficient coding.</p>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="familiarity-section flex flex-col w-11/12">
                    <div className="flex flex-row w-full">
                        <h2 className="familiarity-header text-left font-bold text-lightColor">★★ Familiar</h2>
                    </div>
                    <div className="proficiency-description flex flex-col">
                        <p className="text-left text-sm">// Tools I’ve worked with on a small handful of occasions.</p>
                        <p className="text-left text-sm mt-0 mb-2 leading-none">// I understand the fundamental concepts, still exploring advanced features.</p>
                    </div>
                    <div className="space-y-1">
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={vuejsIcon} alt="Vue.js" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Vue.js/Alpine.js</p>
                                <p className="text-sm text-left">Tried out Vue.js and Alpine.js for making websites more interactive. They’re lightweight and fun to use for quick, dynamic projects. I’d like to explore them more.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={wordpressIcon} alt="Wordpress" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Wordpress</p>
                                <p className="text-sm text-left">Customized WordPress sites for clients, fixing issues and adding features. It’s a great tool for quick, content-driven websites. I’ve done everything from theme tweaks to solving plugin conflicts.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={djangoIcon} alt="Django" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Django</p>
                                <p className="text-sm text-left">Built small web projects with Django to get a feel for Python-based web development. It’s powerful and secure, and I’d love to do more with it.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={nodejsIcon} alt="Node.js" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Node.js/Express</p>
                                <p className="text-sm text-left">Built a few basic APIs and server-side projects using Node.js and Express. It’s been a useful way to apply my JavaScript skills to backend work.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="familiarity-section flex flex-col w-11/12">
                    <div className="flex flex-row w-full">
                        <h2 className="familiarity-header text-left font-bold text-lightColor">★ Explored</h2>
                    </div>
                    <div className="proficiency-description flex flex-col">
                        <p className="text-left text-sm">// Technologies I have taken for a test drive through tutorials or a small project.</p>
                        <p className="text-left text-sm mt-0 mb-2 leading-none">// I've learned the basics, but have not used them in a larger application yet.</p>
                    </div>
                    <div className="space-y-1">
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={dockerIcon} alt="Docker" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Docker/Kubernetes</p>
                                <p className="text-sm text-left">Experimented with Docker for setting up consistent dev environments and started learning Kubernetes for managing containers. It’s early days, but it’s been exciting to see how these tools simplify things.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={awsIcon} alt="AWS" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">AWS/IBM Cloud</p>
                                <p className="text-sm text-left">Deployed small projects on cloud platforms, playing around with S3 and other services. I’ve been exploring how cloud hosting works for modern web apps.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={mongodbIcon} alt="MongoDB" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">MongoDB</p>
                                <p className="text-sm text-left">Tried MongoDB for storing unstructured data in a few small projects. It’s a different way of thinking about databases compared to MySQL, and I’m still figuring it out.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={typescriptIcon} alt="TypeScript" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">TypeScript</p>
                                <p className="text-sm text-left">Used TypeScript a bit to make JavaScript easier to manage with typing. It’s been helpful for avoiding silly errors and keeping things more predictable.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="familiarity-section flex flex-col w-11/12">
                    <div className="flex flex-row w-full">
                        <h2 className="familiarity-header text-left font-bold text-lightColor"> Design/Other Technologies</h2>
                    </div>
                    <div className="proficiency-description flex flex-col">
                        <p className="text-left text-sm">// Design and video game development technologies that I'm quite familiar with.</p>
                        <p className="text-left text-sm mt-0 mb-2 leading-none">// I've used each on a variety of hobbyist projects.</p>
                    </div>
                    <div className="space-y-1">
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={godotIcon} alt="Godot" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Godot</p>
                                <p className="text-sm text-left">Made game mechanics and small projects in Godot using GDScript. It’s been a fun way to learn scripting and logic while making games.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={unityIcon} alt="Unity" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Blender/Unity</p>
                                <p className="text-sm text-left">Dabbled with 3D modeling in Blender and tried Unity for game prototypes. It’s been a cool way to learn creative problem-solving.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={figmaIcon} alt="Figma" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Figma</p>
                                <p className="text-sm text-left">Worked on UI/UX designs in Figma, creating prototypes and iterating with feedback. It’s been a really approachable tool for collaborative design work.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={adobeIcon} alt="Adobe Creative Cloud" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Adobe Creative Cloud</p>
                                <p className="text-sm text-left">Used Photoshop and Illustrator for designing graphics and layouts. It’s been great for making projects look polished and professional.</p>
                            </div>
                        </div>
                        <div className="familiarity-item flex flex-row w-full items-start">
                            <img src={asepriteIcon} alt="Aseprite" className="mr-2 mt-2"/>
                            <div className="flex flex-col w-full -space-y-1">
                                <p className="text-sm text-left">Aseprite</p>
                                <p className="text-sm text-left">Created pixel art and animations for small projects and game prototypes. It’s an intuitive tool for detailed, retro-style graphics. I’ve used it to design sprites and simple game assets.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;