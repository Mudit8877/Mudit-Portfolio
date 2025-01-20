import Image from 'next/image';
import { FaLinkedin, FaGithub, FaLaptopCode } from 'react-icons/fa';

export default function Occupation() {
  return (
    <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-start">
      <div className="text-left sm:w-3/4">
        <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Mudit Singh</h1>
        <h2 className="text-sm font-normal md:text-base">
          Self-taught Frontend Developer and Software Developer
        </h2>
        <div className="mt-4">
          <p>
            Hello! I&apos;m <strong>Mudit Singh</strong>, a dedicated and results-driven software engineering
            student specializing in Artificial Intelligence and Machine Learning. Currently pursuing my
            Bachelor&apos;s in Computer Science and Engineering at Chandigarh University, I have a solid academic
            foundation and practical experience in building innovative applications.
          </p>

          <br />

          <p>
            With a strong passion for problem-solving and technology, I have honed my skills in:
          </p>

          <ul className="list-disc pl-4">
            <li>Developing scalable web and mobile applications using the <strong>MERN stack</strong> and <strong>React Native</strong>.</li>
            <li>Implementing efficient algorithms and data structures in <strong>Java</strong> and <strong>Python</strong>.</li>
            <li>Leveraging <strong>AI</strong> and <strong>Machine Learning</strong> to solve real-world problems.</li>
            <li>Creating dynamic and visually appealing interfaces using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Bootstrap</strong>.</li>
          </ul>

          <br />

          <p>
            Over the years, I&apos;ve been privileged to work on exciting projects such as:
          </p>

          <ul className="list-disc pl-4">
            <li><strong>FarmPe</strong>: A vernacular-based platform connecting farmers, transporters, and traders to enhance agricultural efficiency and profitability using AI and AR technologies.</li>
            <li><strong>Product Management System</strong>: A streamlined solution for managing inventory and invoices in department stores.</li>
            <li><strong>Spotify Clone</strong>: A responsive front-end recreation of Spotify&apos;s homepage.</li>
          </ul>

          <br />

          <h3 className="font-bold">Highlights</h3>

          <br />

          <p><strong>Hackathon Achievements:</strong></p>
          <ul className="list-disc pl-4">
            <li><strong>Winner</strong> of TEKATHON 3.0, an internal SIH hackathon where more than 700 teams participated.</li>
            <li>Secured the <strong>2nd Runner-up</strong> position in Hackaccino at Bennett University.</li>
            <li>Qualified for the <strong>Smart India Hackathon 2024</strong> among the top teams at Chandigarh University.</li>
          </ul>

          <br />

          <p><strong>Leadership:</strong> Served as Discipline Captain in school, fostering teamwork and discipline.</p>

          <br />

          <p><strong>Academic Excellence:</strong> Consistently maintained strong grades, with a CGPA of 8.1.</p>

          <br />

          <p>
            <strong>My mission</strong> is to leverage my expertise to create impactful software solutions that make a difference.
            Beyond academics, I enjoy exploring the latest trends in technology and engaging in hackathons to
            collaborate and innovate.
          </p>

          <br />

          <p>Let&apos;s connect and create something amazing together!</p>

          <br />

          {/* Social Links Section */}
          <div className="flex items-center space-x-3 mt-4">
            <a
              href="https://www.linkedin.com/in/singh-mudit/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin className="text-2xl mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Mudit8877"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 hover:text-black"
            >
              <FaGithub className="text-2xl mr-2" />
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/Mudit87/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 hover:text-green-800"
            >
              <FaLaptopCode className="text-2xl mr-2" />
              LeetCode
            </a>
          </div>
        </div>
      </div>

      <div className="sm:w-1/4 sm:flex sm:justify-center sm:items-start sm:ml-6 sm:mt-0">
        <Image
          src="/static/images/mudit-singh.jpg"
          alt="Mudit Singh"
          width={200}
          height={150}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
