// "use client";
// import { cn } from "@/lib/utils";
// import { useState } from "react";
// import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";

// export default function AuthSwitch() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const toggleMode = () => {
//     setIsLogin(!isLogin);
//     setFormData({ name: "", email: "", password: "" });
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
//         {/* Toggle Tabs */}
//         <div className="relative bg-gray-100 dark:bg-gray-800 p-1 rounded-t-3xl">
//           <div className="grid grid-cols-2 gap-1">
//             <button
//               onClick={() => setIsLogin(true)}
//               className={cn(
//                 "relative z-10 py-3 px-6 text-sm font-semibold rounded-2xl transition-all duration-300",
//                 isLogin
//                   ? "text-white"
//                   : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
//               )}
//             >
//               Sign In
//             </button>
//             <button
//               onClick={() => setIsLogin(false)}
//               className={cn(
//                 "relative z-10 py-3 px-6 text-sm font-semibold rounded-2xl transition-all duration-300",
//                 !isLogin
//                   ? "text-white"
//                   : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
//               )}
//             >
//               Sign Up
//             </button>
//           </div>
//           {/* Sliding background */}
//           <div
//             className={cn(
//               "absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg transition-transform duration-300 ease-out",
//               isLogin ? "translate-x-1" : "translate-x-[calc(100%+4px)]"
//             )}
//           />
//         </div>

//         {/* Form Container */}
//         <div className="relative overflow-hidden">
//           <div
//             className={cn(
//               "flex transition-transform duration-500 ease-out",
//               isLogin ? "translate-x-0" : "-translate-x-full"
//             )}
//           >
//             {/* Login Form */}
//             <div className="w-full flex-shrink-0 p-8">
//               <div className="text-center mb-6">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
//                   <Lock className="w-8 h-8 text-white" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                   Welcome Back
//                 </h2>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Sign in to continue
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Email"
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500"
//                     required
//                   />
//                 </div>

//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     placeholder="Password"
//                     className="w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
//                     )}
//                   </button>
//                 </div>

//                 <div className="flex items-center justify-between text-sm">
//                   <label className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                     />
//                     <span className="text-gray-600 dark:text-gray-400">Remember me</span>
//                   </label>
//                   <button
//                     type="button"
//                     className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
//                   >
//                     Forgot password?
//                   </button>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
//                 >
//                   Sign In
//                 </button>
//               </form>
//             </div>

//             {/* Register Form */}
//             <div className="w-full flex-shrink-0 p-8">
//               <div className="text-center mb-6">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-4">
//                   <User className="w-8 h-8 text-white" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                   Create Account
//                 </h2>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Join us today
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Full Name"
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500"
//                     required
//                   />
//                 </div>

//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Email"
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500"
//                     required
//                   />
//                 </div>

//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     placeholder="Password"
//                     className="w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
//                     )}
//                   </button>
//                 </div>

//                 <div className="flex items-center text-sm">
//                   <input
//                     type="checkbox"
//                     id="terms"
//                     className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                     required
//                   />
//                   <label htmlFor="terms" className="ml-2 text-gray-600 dark:text-gray-400">
//                     I agree to the{" "}
//                     <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
//                       Terms & Conditions
//                     </a>
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
//                 >
//                   Create Account
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff, Github, Twitter, Chrome, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AuthSwitch() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="relative w-full max-w-[890px] min-h-[600px] bg-white dark:bg-gray-950 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row border border-white/10">
        
        {/* SLIDING COLOR PANEL */}
        <motion.div
          initial={false}
          animate={{ x: isLogin ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 40, damping: 15 }}
          className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 z-20 flex flex-col items-center justify-center p-8 md:p-12 text-white text-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "welcome" : "join"}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                {isLogin ? "Hello, Friend!" : "Welcome Back!"}
              </h2>
              <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-[300px] mx-auto">
                {isLogin 
                  ? "Enter your personal details and start your journey with us today." 
                  : "To keep connected with us please login with your personal info."}
              </p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "white", color: "rgb(79 70 229)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLogin(!isLogin)}
                className="mt-4 md:mt-8 px-10 py-3 rounded-full border-2 border-white/50 font-bold transition-colors duration-300"
              >
                {isLogin ? "SIGN UP" : "SIGN IN"}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* FORM SIDE */}
        <motion.div 
          animate={{ x: isLogin ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 40, damping: 15 }}
          className="w-full md:w-1/2 min-h-[500px] md:h-full flex flex-col items-center justify-center p-8 md:p-16 z-10 bg-white dark:bg-gray-950"
        >
          <div className="w-full max-w-sm space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              {isLogin ? "Sign in" : "Register"}
            </h2>
            
            {/* Social Icons with Enhanced Hover */}
            <div className="flex gap-3">
              <SocialButton icon={<Chrome size={20} />} label="Google" />
              <SocialButton icon={<Github size={20} />} label="Github" />
              <SocialButton icon={<Twitter size={20} />} label="X" />
            </div>

            <div className="relative flex items-center justify-center">
                <span className="absolute inset-x-0 h-px bg-gray-100 dark:bg-gray-800"></span>
                <span className="relative bg-white dark:bg-gray-950 px-4 text-[10px] font-bold text-gray-400 tracking-widest uppercase">OR USE EMAIL</span>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <InputField icon={<User size={18} />} placeholder="Full Name" type="text" />
              )}
              <InputField icon={<Mail size={18} />} placeholder="Email Address" type="email" />
              <InputField icon={<Lock size={18} />} placeholder="Password" type="password" />
              
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(79 70 229 / 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black tracking-[0.2em] transition-all flex items-center justify-center gap-2"
              >
                {isLogin ? "LOGIN" : "REGISTER"}
                <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function InputField({ icon, placeholder, type }) {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="relative group"
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-indigo-500/30 dark:focus:border-indigo-500/50 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none transition-all dark:text-white placeholder:text-gray-500 shadow-sm focus:shadow-md"
      />
    </motion.div>
  );
}

function SocialButton({ icon }) {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.1, 
        backgroundColor: "rgba(79, 70, 229, 0.1)", 
        borderColor: "rgba(79, 70, 229, 0.4)",
        color: "rgb(79, 70, 229)" 
      }}
      whileTap={{ scale: 0.9 }}
      className="flex-1 flex items-center justify-center py-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-transparent text-gray-400 transition-colors duration-300"
    >
      {icon}
    </motion.button>
  );
}