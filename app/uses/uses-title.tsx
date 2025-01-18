import {
  FaCode,
  FaDatabase,
  FaRobot,
  FaLaptopCode,
  FaCogs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPython,
  FaJava,
  FaNodeJs,
  FaCuttlefish,
  FaGit,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiTensorflow, SiTailwindcss, SiCplusplus } from 'react-icons/si';

export default function SkillsTitle() {
  return (
    <div className="mb-12 flex flex-col space-y-4 text-center">
      <h1 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        My Skills
      </h1>
      <span className="text-gray-700 dark:text-gray-300">
        A comprehensive overview of the technologies and tools I work with:
      </span>
      <br />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Programming Languages */}
        <div className="flex items-start space-x-3">
          <FaCode className="text-3xl text-blue-500 mt-1" />
          <div>
            <p className="text-lg font-medium">Programming Languages:</p>
            <ul className="list-none text-gray-600 dark:text-gray-400 space-y-1">
              <li className="flex items-center space-x-2">
                <FaJs className="text-yellow-500" />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPython className="text-blue-400" />
                <span>Python</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaJava className="text-red-600" />
                <span>Java</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiCplusplus className="text-blue-600" />
                <span>C++</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCuttlefish className="text-green-600" />
                <span>C</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Web Development */}
        <div className="flex items-start space-x-3">
          <FaLaptopCode className="text-3xl text-green-500 mt-1" />
          <div>
            <p className="text-lg font-medium">Web Development:</p>
            <ul className="list-none text-gray-600 dark:text-gray-400 space-y-1">
              <li className="flex items-center space-x-2">
                <FaReact className="text-cyan-400" />
                <span>React</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaNodeJs className="text-green-500" />
                <span>MERN Stack</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaHtml5 className="text-orange-500" />
                <span>HTML</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCss3Alt className="text-blue-500" />
                <span>CSS</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaBootstrap className="text-purple-600" />
                <span>Bootstrap</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiTailwindcss className="text-teal-500" />
                <span>Tailwind CSS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="flex items-start space-x-3">
          <FaRobot className="text-3xl text-yellow-500 mt-1" />
          <div>
            <p className="text-lg font-medium">Machine Learning:</p>
            <ul className="list-none text-gray-600 dark:text-gray-400 space-y-1">
              <li className="flex items-center space-x-2">
                <SiTensorflow className="text-orange-400" />
                <span>Supervised Learning</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiTensorflow className="text-orange-400" />
                <span>Unsupervised Learning</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiTensorflow className="text-orange-400" />
                <span>Neural Networks</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiTensorflow className="text-orange-400" />
                <span>Deep Learning</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Databases */}
        <div className="flex items-start space-x-3">
          <FaDatabase className="text-3xl text-purple-500 mt-1" />
          <div>
            <p className="text-lg font-medium">Databases:</p>
            <ul className="list-none text-gray-600 dark:text-gray-400 space-y-1">
              <li className="flex items-center space-x-2">
                <SiMysql className="text-blue-600" />
                <span>MySQL</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiMongodb className="text-green-600" />
                <span>MongoDB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tools and Platforms */}
        <div className="flex items-start space-x-3">
          <FaCogs className="text-3xl text-indigo-500 mt-1" />
          <div>
            <p className="text-lg font-medium">Tools and Platforms:</p>
            <ul className="list-none text-gray-600 dark:text-gray-400 space-y-1">
              <li className="flex items-center space-x-2">
                <FaGit className="text-red-600" />
                <span>Git</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaGithub className="text-gray-800 dark:text-gray-300" />
                <span>GitHub</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaDocker className="text-blue-400" />
                <span>Docker</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Other Skills */}
        <div className="flex items-start space-x-3">
          <FaCogs className="text-3xl text-red-500 mt-1" />
          <div>
            <p className="text-lg font-medium">Other Skills:</p>
            <ul className="list-none text-gray-600 dark:text-gray-400 space-y-1">
              <li className="flex items-center space-x-2">
                <FaCode className="text-blue-500" />
                <span>OOPS</span>
              </li>
              <li className="flex items-center space-x-1">
                <FaCode className="text-blue-500" />
                <span>Data Structures & Algorithms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
