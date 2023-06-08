import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center">
			<motion.div className="border-[10px] border-[#2046f2] w-[150px] h-[150px] relative">
				<motion.p className="text-[2rem] font-black text-gray-600 p-2 bg-white absolute top-1/2 -translate-y-1/2 left-1/3 ">
					Loading
				</motion.p>
			</motion.div>
		</div>
	);
};

export default Loader;
