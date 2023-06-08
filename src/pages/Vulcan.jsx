import { Suspense } from "react";
import {
	Navbar,
	ProjectIntro,
	AboutProject,
	ProjectSlider,
	Goals,
	Roadmap,
	Blogs,
	Footer,
	Loader,
} from "../components";
import introImg from "../assets/img/vulcan_big.png";
import roadmapImg from "../assets/img/vulcan/roadmap.png";
import sliderImg1 from "../assets/img/argo/jetson_nano.png";
import sliderImg2 from "../assets/img/argo/pixhawk.png";
import sliderImg3 from "../assets/img/argo/rplidar.png";
import sliderImg4 from "../assets/img/argo/4kcamera.png";

const data = [
	{
		header1: "NVidia Jetson",
		header2: "Nano",
		text:
			"A powerful computer designed for embedded applications, such as autonomous vehicles and drones. It features a quad-core ARM Cortex-A57 CPU, 128-core NVIDIA Maxwell GPU, and 4GB of LPDDR4 memory.",
		img: sliderImg1,
	},
	{
		header1: "PixHawk",
		header2: "Flight Controller",
		text:
			"An open-source autopilot system designed for drones, helicopters, and other unmanned vehicles. It features a powerful ARM Cortex-M4 CPU, multiple sensors, and a range of I/O ports.",
		img: sliderImg2,
	},
	{
		header1: "RPLiDAR",
		header2: "A2 M12",
		text:
			"A 360-degree laser scanner is used for mapping and navigation. It can scan up to 12 meters in range and 10,000 times per second.",
		img: sliderImg3,
	},
	{
		header1: "E-con Systems",
		header2: "4K Camera",
		text:
			"A high resolution camera used to capture images and video of the drone’s surroundings.",
		img: sliderImg4,
	},
];

const blogs = [
	{
		title: "Notion Page",
		text:
			"You'll be able to see all the detailed aspects of the engineering process behind this project.",
		url:
			"https://incongruous-notebook-e1d.notion.site/VulCAN-db9826bb9481426b99661145c1439a80",
	},
	{
		title: "Medium Blog",
		text:
			"You'll be able to follow up with our roadmap, projects, the prototypes, the tasks and more.",
		url: "https://medium.com/@ydehhani",
	},
];

const VulcanContent = () => {
	return (
		<div>
			<Navbar />
			<ProjectIntro
				title="VulCAN"
				subtitle="The CAN Bus powered arm"
				img={introImg}
			/>
			<main>
				<AboutProject
					header1="VulCAN is a cutting-edge robotic arm controlled via a CANBus"
					header2="network, ensuring efficient
					and reliable communication between the various components."
					text="An original way for the components to communicate in near real time."
				/>
				<ProjectSlider data={data} />
				<Goals
					goals={[
						"Develop a reliable and efficient robotic arm control system",
						"Build a functional and durable prototype of the robotic arm",
						"Test and optimize the performance of the robotic arm",
					]}
				/>
				<Roadmap
					title="The Roadmap"
					text="How the project's going ?"
					image={roadmapImg}
				/>
				<Blogs blogs={blogs} />
			</main>
			<Footer />
		</div>
	);
};

const Vulcan = () => {
	return (
		<div>
			<Suspense fallback={<Loader />}>
				<VulcanContent />
			</Suspense>
		</div>
	);
};

export default Vulcan;
