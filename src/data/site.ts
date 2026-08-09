export const siteSettings = {
  name: "Bit2Boards",
  brand: "BIT2BOARDS",
  tagline: "BITS TO BOARDS",
  secondaryTagline: "LEARN • BUILD • DEPLOY",
  description: "Industry-Oriented Embedded Systems Training",
  phone: "+91 94873 75373",
  phoneHref: "tel:+919487375373",
  email: "jrmano3639@gmail.com",
  emailHref: "mailto:jrmano3639@gmail.com",
  location: "Karaikudi, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/manoharanjr/",
  github: "https://github.com/manoharanjr1424",
} as const;

export type Course = {
  slug: string;
  index: string;
  title: string;
  duration: string;
  price: string;
  payment: string;
  technology: string;
  level: string;
  description: string;
  badges: string[];
  platform: string;
  focus: string;
  path: string;
};

export const courses: Course[] = [
  {
    slug: "microcontroller-c-programming",
    index: "01",
    title: "Microcontroller & C Programming",
    duration: "3 Months",
    price: "₹7,000",
    payment: "Payable during the course term.",
    technology: "PIC16F877A 8-bit Microcontroller",
    level: "Beginner → Intermediate",
    description:
      "Build a strong foundation in Embedded C and microcontroller programming through register-level programming and hands-on hardware.",
    badges: [
      "Embedded C",
      "PIC16F877A",
      "Register-Level Programming",
      "Peripheral Interfacing",
      "Hardware Practice",
    ],
    platform: "PIC16F877A",
    focus: "Embedded C + Register-Level Programming",
    path: "/courses/microcontroller-c-programming",
  },
  {
    slug: "arm-cortex-m4-stm32f407",
    index: "02",
    title: "ARM Cortex-M4 — STM32F407 DISC1",
    duration: "3 Months",
    price: "₹12,000",
    payment: "Payable during the course term.",
    technology: "ARM Cortex-M4 • STM32F407 DISC1",
    level: "Intermediate → Advanced",
    description:
      "Learn ARM Cortex-M4 architecture, bare-metal programming and practical firmware development using the STM32F407 DISC1 development board.",
    badges: [
      "ARM Cortex-M4",
      "STM32F407",
      "Bare-Metal",
      "Firmware",
      "Peripheral Programming",
    ],
    platform: "STM32F407 DISC1",
    focus: "ARM Cortex-M4 + Bare-Metal",
    path: "/courses/arm-cortex-m4-stm32f407",
  },
];

export const courseOptions = [
  "Microcontroller & C Programming — ₹7,000",
  "ARM Cortex-M4 — STM32F407 DISC1 — ₹12,000",
];

export const microcontrollerTopics = [
  { n: "01", name: "LED Blinking", icon: "Lightbulb", note: "Drive an output pin and control timing from firmware." },
  { n: "02", name: "Switch Interface", icon: "ToggleLeft", note: "Read digital inputs and handle button states." },
  { n: "03", name: "LCD String Print", icon: "MonitorSmartphone", note: "Interface an LCD and display text from the controller." },
  { n: "04", name: "LCD Number", icon: "Hash", note: "Format and display numeric values on the LCD." },
  { n: "05", name: "PWM", icon: "AudioWaveform", note: "Generate pulse-width modulated output signals." },
  { n: "06", name: "ADC", icon: "Gauge", note: "Convert analog sensor voltages into digital values." },
  { n: "07", name: "ADC with PWM", icon: "SlidersHorizontal", note: "Combine analog input with PWM output control." },
  { n: "08", name: "Interrupt", icon: "Zap", note: "Respond to external events without polling." },
  { n: "09", name: "Timer Interrupt", icon: "Timer", note: "Use hardware timers for periodic firmware events." },
  { n: "10", name: "UART & TTL", icon: "Cable", note: "Serial communication between controller and PC." },
  { n: "11", name: "I2C (EEPROM)", icon: "MemoryStick", note: "Two-wire communication with an external EEPROM." },
  { n: "12", name: "RTC (Real Time Clock)", icon: "Clock", note: "Keep and read real time from an RTC device." },
  { n: "13", name: "SPI", icon: "Network", note: "High-speed synchronous serial communication." },
  { n: "14", name: "SPI (DAC)", icon: "Waves", note: "Drive a DAC over SPI to output analog signals." },
];

export const embeddedCModules = [
  { title: "Module 1", topics: ["What is C", "Datatypes in C"] },
  { title: "Module 2", topics: ["printf", "scanf", "Operators", "Modifiers", "C MCQ Questions"] },
  { title: "Module 3", topics: ["Loops & Conditionals", "Functions", "Arrays"] },
  { title: "Module 4", topics: ["Strings in C", "Introduction to Pointers"] },
  { title: "Module 5", topics: ["Pointers", "Advanced Pointers", "Pointer Questions"] },
  { title: "Module 6", topics: ["Structures", "Unions", "Structure Pointers"] },
  { title: "Module 7", topics: ["Strings in C", "Function Pointers"] },
  { title: "Module 8", topics: ["Static & Dynamic Scoping", "Recursion in C"] },
  { title: "Module 9", topics: ["Introduction to File Handling", "Programming of File Handling"] },
];

export const instructor = {
  name: "Manoharan Jayakumar",
  role: "Embedded Software Engineer",
  subRole: "Founder / Instructor — Bit2Boards",
  experience: "3+ years in Embedded Systems / Embedded Software Engineering",
  currentRole: "Embedded Software Developer at VVDN Technologies.",
  location: "Karaikudi, Tamil Nadu, India",
  areas: [
    "Embedded C",
    "PIC Microcontrollers",
    "ARM Cortex-M",
    "Bare-Metal Firmware Development",
    "FreeRTOS",
    "RTOS",
    "Linux Device Drivers",
    "Embedded Linux",
    "Yocto",
    "Buildroot",
    "USB Bare-Metal Firmware Development",
  ],
  education: {
    degree: "Bachelor of Engineering — Electrical, Electronics and Communications Engineering",
    institute: "Thanthai Periyar Government Institute of Technology",
    years: "2020–2024",
  },
  certifications: [
    "Mastering RTOS: Hands-on FreeRTOS and STM32Fx with Debugging",
    "Embedded Systems Programming on ARM Cortex-M3/M4 Processor",
    "USB Behind the Scenes: Hands-on HID Firmware Development",
  ],
  skills: [
    "Embedded C",
    "PIC",
    "ARM Cortex-M4",
    "Bare-Metal Firmware",
    "FreeRTOS",
    "RTOS",
    "Linux Device Drivers",
    "Embedded Linux",
    "Yocto",
    "Buildroot",
    "USB Firmware",
  ],
};

export const faqs = [
  { q: "Who can join the courses?", a: "Students, fresh graduates and learners interested in embedded systems and firmware development can enquire about the programs." },
  { q: "Is hardware provided?", a: "Yes. Hardware is provided for students to practice." },
  { q: "Will I receive a certificate?", a: "Yes. A certificate is provided upon course completion." },
  { q: "What is the duration?", a: "Both current courses are 3 months." },
  { q: "What is the fee?", a: "Course 1 — ₹7,000. Course 2 — ₹12,000." },
  { q: "Is payment required upfront?", a: "The course fee can be paid during the course term." },
  { q: "What microcontroller is used in Course 1?", a: "PIC16F877A 8-bit microcontroller." },
  { q: "What board is used in Course 2?", a: "STM32F407 DISC1 with ARM Cortex-M4." },
  { q: "Is this theoretical or practical?", a: "The training emphasizes practical, industry-oriented learning with hands-on hardware and programming." },
  { q: "How can I contact the instructor?", a: "Use the contact form, phone number, email or LinkedIn link provided on the website." },
];