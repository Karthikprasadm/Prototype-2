export type EventType = "Minor" | "Flagship"

export interface EventContact {
  name: string
  phone: string
}

export interface EventItem {
  name: string
  type: EventType
  /** Optional badge label (e.g. "Grand Hackathon"); when set, shown instead of type. */
  tag?: string
  /** When false, registrations are closed for this event. Defaults to open if omitted. */
  registrationOpen?: boolean
  teamSize: string // e.g. "1", "2", "1 & 2"
  duration: string
  maxParticipants: number
  prize: number // in INR
  /** Display date e.g. "8th April, 2026" */
  date?: string
  /** Short description for the card */
  description?: string
  /** Rules as bullet points (array) or single string (will be split by sentence for display) */
  rules?: string[] | string
  /** Registration fee in INR */
  registrationFee?: number
  /** Contact persons */
  contacts?: EventContact[]
}

export interface DepartmentEvents {
  id: string
  name: string
  fullName?: string
  events: EventItem[]
}

export const departments: DepartmentEvents[] = [
  {
    id: "aiml",
    name: "AIML",
    fullName: "AI & ML",
    events: [
      {
        name: "Reverse Image Prompting",
        type: "Minor",
        teamSize: "2",
        duration: "2:00 p.m. - 4:00 p.m.",
        maxParticipants: 60,
        prize: 5000,
        date: "8th April, 2026",
        description: "The Reverse image prompting event challenges teams to recreate AI-generated images by writing the exact prompts that could have produced them. Across three timed rounds of increasing difficulty, participants analyze style, composition, and details under strict generation limits, ending with a reveal of the original prompts and winners.",
        rules: "Many Complex images given to the participants. (One per round). They get only 5 prompts to recreate the image. Each round consists of 5 mins to only write the prompt, 5 rounds. No photos to be taken of the image using cameras. For every round, one keyword is given to the participants and they must use it in their prompts in that round. Use only perchance tool to generate images (TENTATIVE). 1 laptop allowed.",
        registrationFee: 60,
        contacts: [
          { name: "Nandan M Naik", phone: "8277202042" },
          { name: "Anantesh G", phone: "9901470297" },
        ],
      },
      {
        name: "Turing test",
        type: "Minor",
        teamSize: "2",
        duration: "10:00 a.m. - 11:00 a.m.",
        maxParticipants: 100,
        prize: 5000,
        date: "9th April, 2026",
        description: "The event adapts the classic human-vs-machine concept to software engineering. Participants first compete in a rapid Kahoot quiz, identifying whether code snippets, explanations, or documentation were written by humans or AI. The second phase deepens the challenge, requiring teams to analyze pull requests and justify their judgments with reasoning and confidence levels. With strict no-AI usage rules, the event highlights critical thinking, pattern recognition, and the evolving blend of human and AI-generated technical work.",
        rules: "The event will be conducted in 2 phases. No use of AI tools, internet, or external assistance. Phones allowed only for answering Kahoot (Phase 1). Only provided material can be used for evaluation. Organizer decisions are final in case of disputes.",
        registrationFee: 100,
        contacts: [
          { name: "Noti Gayatri", phone: "9964848456" },
          { name: "Karthik K", phone: "9986755595" },
        ],
      },
    ],
  },
  {
    id: "cy",
    name: "CY",
    fullName: "Cybersecurity",
    events: [
      {
        name: "Escape & Exploit",
        type: "Minor",
        teamSize: "2-4",
        duration: "11:00 a.m. - 4:00 p.m.",
        maxParticipants: 150,
        prize: 5000,
        date: "8th April, 2026",
        description: "Escape and Exploit is a fast-paced cybersecurity team challenge where participants solve puzzles and decode hidden clues across multiple stages. Each stage reveals hidden codes and clues that teams must exploit cleverly to unlock the next level. As the difficulty rises, strategy, teamwork, and quick thinking become the key to survival. Exploit every clue you find and escape for good by conquering the final round.",
        rules: "All rounds must be solved sequentially. Each correct solution unlocks the next stage. Only permitted resources announced by organizers may be used. Cheating, plagiarism, answer sharing, or interference will lead to disqualification. Answers must be submitted through the official platform provided. The event will run within a fixed time limit. Organizer and judge decisions are final.",
        registrationFee: 150,
        contacts: [
          { name: "Chaitanya M", phone: "7019316251" },
          { name: "Aditi Sinha", phone: "8310022396" },
        ],
      },
      {
        name: "ZeroDay Arena",
        type: "Flagship",
        teamSize: "1-4",
        duration: "9:00 a.m. - 3:30 p.m.",
        maxParticipants: 250,
        prize: 20000,
        date: "9th April, 2026",
        description: "ZeroDay Arena is a 6-hour competitive Capture The Flag (CTF) cybersecurity event designed to evaluate participants’ practical and analytical skills across multiple cybersecurity domains. Participants will solve real-world inspired challenges, identify vulnerabilities, uncover hidden flags, and earn points based on challenge difficulty and submission time. The event promotes hands-on learning, teamwork, ethical hacking practices, and competitive problem-solving.",
        rules: "Solve independently - No sharing of hints, solutions, or flags between teams. No outside help - Pre-written solutions, online write-ups, or third-party assistance are prohibited. Personal Laptops must be brought with chargers. Use only approved tools - external tools are not allowed unless authorized. Play fair - Any attacks, platform abuse, or infrastructure tampering will lead to disqualification. Follow the flag format - Submit flags as RNS{...} unless otherwise stated.",
        registrationFee: 250,
        contacts: [
          { name: "Mukund V", phone: "8431041791" },
          { name: "Pratiksha Patil", phone: "8310174681" },
        ],
      },
    ],
  },
  {
    id: "cse",
    name: "CSE",
    fullName: "Computer Science",
    events: [
      {
        name: "Code conundrum",
        type: "Minor",
        teamSize: "2",
        duration: "11:00 a.m. - 12:30 p.m.",
        maxParticipants: 150,
        prize: 5000,
        date: "8th April, 2026",
        description: "A fast-paced coding challenge where teams match problem statements to the correct code snippets. With randomized variables and decoy solutions, participants must analyze logic under time pressure. Winners are determined by accuracy and speed. Participants must quickly interpret the problem and eliminate misleading code options to find the correct solution. This challenge tests logical reasoning, debugging ability, and quick decision-making under pressure.",
        rules: "No AI tools are allowed. Accuracy and time will determine rankings. Tie-breakers may be applied if required. Participants must follow all instructions given by organizers.",
        registrationFee: 150,
        contacts: [
          { name: "Pranava G Rao", phone: "8310334784" },
          { name: "D Kartikeya", phone: "9482492326" },
        ],
      },
      {
        name: "Tech Escape Quest",
        type: "Minor",
        teamSize: "4",
        duration: "9:00 a.m. - 11:00 a.m.",
        maxParticipants: 200,
        prize: 5000,
        date: "9th April, 2026",
        description: "A high-intensity technical investigation challenge where participants solve logic, debugging, and puzzles. Teams unlock encrypted clues across multiple rounds to form a master password. The final mission tests strategy, speed, and teamwork.",
        rules: "Mobile phones and internet usage are strictly prohibited unless explicitly allowed. External communication during the event is not permitted. Teams must complete all rounds sequentially. Any malpractice will lead to immediate disqualification. Tie-breaking will be based on completion time of the final round. Judges' decisions are final.",
        registrationFee: 200,
        contacts: [
          { name: "Pruthvi Raj R", phone: "6360517123" },
          { name: "Prajna Shetty", phone: "7899583908" },
        ],
      },
      {
        name: "Version Control Wars",
        type: "Minor",
        teamSize: "3-4",
        duration: "2:00 p.m. - 4:00 p.m.",
        maxParticipants: 150,
        prize: 5000,
        date: "8th April, 2026",
        description: "A high-intensity team challenge simulating real-world software development. Participants debug and stabilize a disorganized repository using structured Git workflows. The event tests coding skills, repository management, and teamwork.",
        rules: "Role assignment within the team is mandatory. All work must be done using feature branches only. Direct commits to the main branch are strictly prohibited. All fixes must be submitted through Pull Requests and approved before merging. Rewriting or deleting major parts of the project is not allowed. External repositories or external code cannot be used. AI tools are permitted, but misuse is prohibited. Commit messages must be clear and meaningful. All tasks must be completed within the allotted time. Judges' decisions are final.",
        registrationFee: 150,
        contacts: [
          { name: "Harshith C", phone: "9113553192" },
          { name: "Pranathi S", phone: "9980491398" },
        ],
      },
    ],
  },
  {
    id: "csds",
    name: "CSDS",
    fullName: "Data Science",
    events: [
      {
        name: "Data Decoded: The Ultimate Duo Showdown",
        type: "Minor",
        teamSize: "2",
        duration: "2:00 p.m. - 5:00 p.m.",
        maxParticipants: 100,
        prize: 5000,
        date: "8th April, 2026",
        description: "A 3-hour Data Science competition testing coordination, logic, visualization, and technical skills across four rounds: \"Blind Data Cleaning\" (communication), \"Relay Coding\" (adaptability), \"Jumbled Jupyter\" (logic/debugging), and \"Data Pictionary\" (visualization).",
        rules: "Use of AI tools (ChatGPT, Gemini, etc.) is strictly prohibited. Participants must strictly follow their assigned roles and limitations. Viewing restricted screens, prompts, or visual targets is prohibited. Only designated participants may use the keyboard at any time. Communication is allowed only when explicitly permitted. All interaction must stop immediately when the buzzer sounds. Only allowed code actions (e.g., rearranging) may be performed - no unauthorized additions or edits. Any rule violation may result in immediate disqualification.",
        registrationFee: 100,
        contacts: [
          { name: "Yash Sharma", phone: "7722897223" },
          { name: "Srushti B S", phone: "9663399759" }
        ],
      },
      {
        name: "Kill Switch Protocol",
        type: "Minor",
        teamSize: "2",
        duration: "11:00 a.m. - 3:00 p.m.",
        maxParticipants: 100,
        prize: 5000,
        date: "8th April, 2026",
        description: "This event is a fast-paced technical cyber-investigation challenge where participants step into the role of data detectives to solve a dynamic murder mystery using structured datasets and SQL queries. Teams analyze evolving datasets, uncover hidden patterns, and logically connect evidence to identify the culprit. Designed as a condensed minor event, the challenge emphasizes logical reasoning, SQL proficiency, and quick decision-making under strict time constraints, simulating real-world data investigation scenarios.",
        rules: "Use of AI tools (ChatGPT, Gemini, etc.) is strictly prohibited. Only provided systems and datasets must be used. Any malpractice leads to disqualification. Team must have exactly 2 participants.",
        registrationFee: 100,
        contacts: [
          { name: "M S Nithyasree", phone: "9573883324" },
          { name: "M Kruthika", phone: "9989908470" },
        ],
      },
      {
        name: "Data Royale: The Last Analyst Standing",
        type: "Flagship",
        teamSize: "3-4",
        duration: "9:00 a.m. - 3:30 p.m.",
        maxParticipants: 250,
        prize: 20000,
        date: "9th April, 2026",
        description: "Data Royale is a high-octane, elimination-style data science competition. Unlike standard hackathons, this event tests speed, precision, and real-world intuition. Teams will battle through four increasingly difficult rounds, with the weakest links being eliminated at every stage until only the champions remain.",
        rules: "Teams may use Python (Pandas, Scikit-learn, etc.), R, or specialized BI tools. All work must be original. Scoring is final. Once a team is eliminated, they cannot rejoin the competition. Each team must carry at least two laptops with pre-installed data science environments. Any form of plagiarism or \"hard-coding\" results without logical backing will lead to immediate disqualification. Specific datasets and final scenarios will only be revealed at the start of their respective rounds.",
        registrationFee: 250,
        contacts: [
          { name: "Ayush Singh", phone: "8858932664" },
          { name: "Prem Kumar", phone: "9059480205" }
        ],
      },
    ],
  },
  {
    id: "ece",
    name: "ECE",
    fullName: "Electronics & Communication",
    events: [
      {
        name: "Innovatrium",
        type: "Flagship",
        teamSize: "3-4",
        duration: "11:00 a.m. - 5:00 p.m.",
        maxParticipants: 250,
        prize: 30000,
        date: "8th April, 2026",
        description: "Innovatrium is a flagship innovation event where participants design and develop working prototypes to solve real-world problems. The event focuses on showcasing practical implementations using hardware like embedded systems, sensors, and electronic components, relevant software, encouraging creativity, teamwork, and problem-solving skills.",
        rules: "Each team must consist of 3-4 members. No participant can be part of more than one team. Abstract submission (online). Final presentation (offline).",
        registrationFee: 500,
        contacts: [
          { name: "Himanshu R Rathod", phone: "9035373935" },
          { name: "Bhagyashree Verma", phone: "9741441806" },
        ],
      },
      {
        name: "Embedded escape room",
        type: "Minor",
        teamSize: "2-3",
        duration: "9:00 a.m. - 12:00 p.m.",
        maxParticipants: 100,
        prize: 5000,
        date: "9th April, 2026",
        description: "Embedded Escape Room is an interactive technical challenge where teams solve embedded-system-based puzzles to “escape” within a given time. Participants must debug code, analyse circuits, and solve logical clues related to microcontrollers and electronics.",
        rules: "Team Structure: Teams must consist of 2-3 members. No team changes after registration. Gameplay rules: Challenges must be solved in sequence. Internet access and external communication are strictly prohibited. Only materials provided by organizers may be used. Hints & Penalties: Teams may request hints. Each hint carries a time penalty. Excessive hint usage may affect ranking.",
        registrationFee: 100,
        contacts: [
          { name: "Aishwarya S N", phone: "7892980744" },
          { name: "Ameera Syed", phone: "9945571131" },
        ],
      },
      {
        name: "Bug Buster",
        type: "Minor",
        teamSize: "1-2",
        duration: "1:00 p.m. - 3:30 p.m.",
        maxParticipants: 100,
        prize: 5000,
        date: "9th April, 2026",
        description: "Bug Buster is a competitive debugging where participants identify and fix errors in embedded programs and electronic logic.The event tests participants’ understanding of programming concepts, microcontroller architecture, and logical reasoning.",
        rules: "Participation: Individual or team of 1–2 members allowed. No team changes. Allowed Materials: No internet access. No external reference materials. Only IDE/system provided by organizers. Time Rules: Strict adherence to time limits.",
        registrationFee: 100,
        contacts: [
          { name: "Vishnu Kaushik S", phone: "9663038822" },
          { name: "Prathika P", phone: "9986526401" },
        ],
      },
    ],
  },
  {
    id: "eee",
    name: "EEE",
    fullName: "Electrical & Electronics",
    events: [
      {
        name: "Electro-Quiz Circuitrix – Technical Quiz & Circuit Challenge",
        type: "Minor",
        teamSize: "2",
        duration: "11:00 a.m. - 5:00 p.m.",
        maxParticipants: 200,
        prize: 5000,
        date: "8th April, 2026",
        description: "ELECTROQUIZ CIRCUITRIX is a technical event designed for UG Electrical and Electronics students that combines theoretical knowledge assessment through a competitive quiz followed by a practical circuitry challenge. Participants are assessed on core electrical and electronics concepts, followed by a practical round focused on circuit design, analysis, and troubleshooting.",
        rules: "No electronic gadgets allowed during quiz (except if online quiz mode is officially permitted). Negative marking will be informed before the quiz based on the number of registration. Only qualified teams can participate in the circuitry round. Safety precautions must be followed during the circuit implementation. The judge's decision will be final and binding.",
        registrationFee: 200,
        contacts: [
          { name: "Rajesh R", phone: "9980620056" },
          { name: "Vadiraja G P", phone: "7676401880" },
        ],
      },
      {
        name: "Electraforge – The Grid Survival Challenge",
        type: "Flagship",
        teamSize: "3-4",
        duration: "09:00 a.m. - 3:30 p.m.",
        maxParticipants: 400,
        prize: 15000,
        date: "9th April, 2026",
        description: "Electra-Forge is a 6-hour hands-on wiring hackathon for Electrical/Electronics students. Teams will design, wire, test, and demonstrate domestic and industrial electrical systems, focusing on protection, automation, safety, and real-time troubleshooting to build practical skills and industry readiness.",
        rules: "Teams must follow all electrical safety protocols. Power supply will be given only after faculty approval. Improper wiring or unsafe practices may lead to disqualification. All wiring must be neatly labeled. Teams must complete within the stipulated time. Any damage to equipment due to negligence will lead to a penalty. The judges' decision will be final and binding.",
        registrationFee: 400,
        contacts: [
          { name: "B S Channabasavana gouda", phone: "6360364255" },
          { name: "Shreyas K M", phone: "7338057797" },
        ],
      },
    ],
  },
  {
    id: "ise",
    name: "ISE",
    fullName: "Information Science",
    events: [
      {
        name: "Data to Dashboard: SDG Edition",
        type: "Minor",
        teamSize: "1-3",
        duration: "09:00 a.m. - 12:00 p.m.",
        maxParticipants: 150,
        prize: 5000,
        date: "9th April, 2026",
        description: "Data to Dashboard: SDG Edition is a data analytics challenge where teams analyze an SDG-related dataset, identify key trends, and build a dashboard to visualize insights. Participants present data-driven recommendations, showcasing their skills in analysis, visualization, and insight communication.",
        rules: "Datasets will be provided, although external datasets are allowed. Submission must be completed within the allotted time. The judges' decision is final. Any malpractice leads to disqualification.",
        registrationFee: 150,
        contacts: [
          { name: "Shreya D", phone: "9113916213" },
          { name: "Sanjana", phone: "9663044903" },
        ],
      },
    ],
  },
  {
    id: "mca",
    name: "MCA",
    fullName: "Master of Computer Applications",
    events: [
      {
        name: "Ideathon Arena",
        type: "Minor",
        teamSize: "2-5",
        duration: "9:00 a.m. - 3:30 p.m.",
        maxParticipants: 150,
        prize: 7000,
        date: "9th April, 2026",
        description: "A national mini-event where students pitch startup ideas, receive challenge prompts, and transform them into working prototypes. It serves as a platform for innovation, networking, and knowledge-sharing with international experts, faculty, and industry leaders.",
        rules: "Open to undergraduate and postgraduate students. Teams of 2–5 members; valid student ID required. Professionalism and respect are mandatory. Plagiarism or unsafe prototypes lead to disqualification. Teams must adhere to time limits and safety protocols. Teams must bring their own laptops and necessary software tools required for ideation and prototype development. Participants must carry a valid college ID card during the event for verification.",
        registrationFee: 150,
        contacts: [
          { name: "Sanket Shetty", phone: "7892706256" },
          { name: "Bhargavi Gangoor", phone: "9945944055" },
        ],
      },
      {
        name: "IoT Nexus",
        type: "Flagship",
        teamSize: "2-5",
        duration: "11:00 a.m. - 5:00 p.m.",
        maxParticipants: 300,
        prize: 15000,
        date: "8th April, 2026",
        description: "A National IoT innovation challenge where students and professionals showcase projects across domains like Smart Cities, Healthcare, Industrial IoT, Agriculture, Consumer IoT, Drone-based IoT solutions, Cybersecurity, and Cloud Analytics. The event emphasizes creativity, technical expertise, and real-world applicability.",
        rules: "Ethical compliance mandatory (especially in Healthcare IoT). Plagiarism or unsafe prototypes lead to disqualification. Judging criteria: Innovation, feasibility, usability, sustainability, and presentation. Teams must bring their own laptops, hardware components, and required software. Projects should be original work developed by the team members. Drone-based projects are allowed; however, drone demonstrations must follow safety guidelines and may be limited to controlled or simulation-based demonstrations within the venue.",
        registrationFee: 300,
        contacts: [
          { name: "Viren Kamboj", phone: "7498485123" },
          { name: "Amrutha M", phone: "9611328555" },
        ],
      },
    ],
  },
  {
    id: "mech",
    name: "MECH",
    fullName: "Mechanical",
    events: [
      {
        name: "RC Car Racing",
        type: "Minor",
        teamSize: "2",
        duration: "09:00 a.m. - 3:30 p.m.",
        maxParticipants: 400,
        prize: 12000,
        date: "9th April, 2026",
        description: "RC Car Racing is a fast-paced competition where participants race standardized remote-controlled cars on designated tracks. Conducted across two sessions, it tests speed, control, and precision while ensuring fairness and thrilling excitement.",
        rules: "Minor racing contact is allowed, but only one defensive move is permitted. Intentional ramming, zig-zag blocking, cutting the track, or lifting another car is prohibited. No personal RC cars are allowed; hardware or software modifications are strictly forbidden. Cars will be randomly allotted before each round, and exchanges are permitted only for verified technical faults. Track cutting or false starts incur a 5-second penalty; rough driving adds 10 seconds. Repeated offences lead to disqualification; car tampering results in immediate disqualification. Cars may only be activated in designated areas. Only drivers may enter the control zone; support members must remain in the pit area. No running inside the track during races. Judges' decisions are final.",
        registrationFee: 400,
        contacts: [
          { name: "Krishna K", phone: "9886685859" },
          { name: "Sanchith H S", phone: "7760013454" },
        ],
      },
      {
        name: "Robowars",
        type: "Flagship",
        teamSize: "3-5",
        duration: "11:00 a.m. - 5:00 p.m.",
        maxParticipants: 2500,
        prize: 50000,
        date: "8th April, 2026",
        description: "Robowars is a high-intensity robotics competition where teams battle custom-built robots up to 15 kg in a controlled arena. Combining engineering, creativity, and strategy, participants aim to immobilize or overpower opponents through knockout rounds leading to an electrifying grand finale.",
        rules: "Each team may participate with 3-5 members and one robot, all safe, functional, and fully remote-controlled. Robots must weigh ≤15 kg (including batteries and systems), be electrically powered with onboard batteries ≤36V DC, and fit safely inside the arena. Allowed designs include wheeled or tracked robots, lifters, flippers, spinners, hammers, cutters, wedges, and pneumatic/hydraulic systems (≤50 bar, leak-proof). Prohibited features include drones, adhesives, suction/magnets, liquid/gas spraying, fire/explosives, entangling devices, electrical shock, or signal jamming. Robots must have a wireless remote with interference-free connection and an emergency stop (E-stop). Batteries must be insulated, secure, and equipped with an accessible main power switch. Teams must place robots in the arena only when instructed and must not touch them once the match begins. A robot is declared out if immobile, stuck, or leaves the arena. Matches last 3 minutes of active combat, with 20 minutes allowed for preparation between rounds. Late or unprepared teams may forfeit. Organisers may extend prep time at their discretion. Teams are responsible for their robot's safety and any damage caused. Organisers are not liable for match damage. Unsafe robots, exposed wiring, banned weapons, or intentional danger will result in disqualification. Each team must register under a unique, appropriate name and appoint a leader as the official contact.",
        registrationFee: 2000,
        contacts: [
          { name: "Nithin H", phone: "9538269998" },
          { name: "Gowtham Kumar K", phone: "9035786537" },
        ],
      },
    ],
  },
  {
    id: "civil",
    name: "CIVIL",
    fullName: "Civil",
    events: [
      {
        name: "Design. Decide. Dominate",
        type: "Flagship",
        teamSize: "3-5",
        duration: "09:00 a.m. - 3:30 p.m.",
        maxParticipants: 300,
        prize: 12000,
        date: "9th April, 2026",
        description: "The flagship technical competition of the Civil Engineering Department, designed to test proficiency in CAD and core civil concepts. Participants compete through multiple analytical rounds. The event concludes with a final technical showdown.",
        rules: "Open to all Undergraduate Civil Engineering students. Registration must be completed prior to the event. Any form of malpractice will result in disqualification. Judges' decisions are final.",
        registrationFee: 300,
        contacts: [
          { name: "Preksha P", phone: "6362074779" },
          { name: "Vikas C", phone: "8660402532" },
        ],
      },
      {
        name: "Bridge It!",
        type: "Minor",
        teamSize: "2-4",
        duration: "11:00 a.m. - 5:00 p.m.",
        maxParticipants: 150,
        prize: 5000,
        date: "8th April, 2026",
        description: "A structural design competition where teams conceptualize and construct a model bridge using restricted materials. Evaluation focuses on structural efficiency, innovation, and load-bearing performance.",
        rules: "Open to UG Civil Engineering students up to 3rd year. Only specified materials are allowed. Use of unauthorized materials will result in disqualification. Judges' decisions are final.",
        registrationFee: 200,
        contacts: [
          { name: "Yashaswini N K", phone: "7483464012" },
          { name: "Bharath", phone: "8073355828" },
        ],
      },
    ],
  },
  {
    id: "mba",
    name: "MBA",
    fullName: "Business Administration",
    events: [
      {
        name: "BizNova",
        type: "Flagship",
        teamSize: "2",
        duration: "9:00 a.m. - 1:00 p.m.",
        maxParticipants: 200,
        prize: 10000,
        date: "9th April, 2026",
        description: "A dynamic business quiz showdown focused on entrepreneurship, technology, finance, marketing, startups, economics, and corporate strategy, featuring live answer reveals and audience engagement by the Quiz Master. The event culminates in an intense round where teams compete on real-world business scenarios, market trends, and decision-making challenges to battle it out for the title.",
        rules: "The quiz format and rounds will be explained at the beginning of the event. Participants are expected to report to the venue at least 15–20 minutes prior to the start of the event. Late entries may not be entertained. The decision of the Quiz Master and organizing committee will be final and binding. Any form of malpractice, including use of mobile phones or unfair means, will lead to immediate disqualification.",
        registrationFee: 200,
        contacts: [
          { name: "Pratik Vijay", phone: "9380667543" },
          { name: "Shreeya D", phone: "8792387952" },
        ],
      },
    ],
  },
  {
    id: "gaming",
    name: "GAMING",
    fullName: "Gaming",
    events: [
      {
        name: "Valorant",
        type: "Flagship",
        teamSize: "5",
        duration: "11:00 a.m. - 5:00 p.m. (8th April), 9:00 a.m. - 2:00 p.m. (9th April)",
        maxParticipants: 350,
        prize: 10000,
        date: "8th and 9th April, 2026",
        description: "A competitive 5v5 tactical shooter tournament where one team attacks by planting the spike while the other defends. Teams compete across elimination rounds over two days, testing coordination, strategy, and in-game performance to determine the champions. Day 1: Preliminary Qualifiers - Direct elimination rounds, teams split into two clusters and play until Top 10 remain. Day 2: Final Rounds & Re-entry - Top 10 divided into 5 head-to-head matchups.",
        rules: "One team per participant. No ESP, bots, auto aimbots, or foul language. If used, team will be disqualified immediately. Map picks are allowed. Match mode: Unrated. No third party application including application like exitlag. Losing teams can rejoin the tournament for a Rs.200 fee (Only one re-entry per team at specific stages).",
        registrationFee: 350,
        contacts: [
          { name: "Yashas P", phone: "8951467265" },
          { name: "Ujjwal Gowda", phone: "8310564634" },
        ],
      },
      {
        name: "Battlegrounds Mobile India (BGMI)",
        type: "Flagship",
        teamSize: "4",
        duration: "9:00 a.m. - 3:30 p.m.",
        maxParticipants: 350,
        prize: 10000,
        date: "9th April, 2026",
        description: "A high-stakes battle royale tournament where squads compete to be the last ones standing. Teams will battle through a multi-phase elimination process, testing their survival instincts, mechanical skill, and strategic positioning to claim the title of Champions. Phase 1 (Preliminary): Teams split into groups. 3 rounds of intense gameplay; top 5 squads from each group advance based on kills and placement. Final Phase: The ultimate showdown consisting of 4 rounds. Previous scores are reset—only your performance in the finals determines the winner.",
        rules: "Squad Size: 4 players per team (One team per participant). Fair Play: No ESP, bots, auto-aimbots, or third-party apps (e.g., Discord, ExitLag). Use of foul language or cheats results in immediate disqualification. Device: Participants must bring their own mobile devices and peripherals. College Wi-Fi will be provided. Match Mode: Unrated. In-game voice chat (VC) only. No Rejoin: Disconnected players cannot rejoin during a phase.",
        registrationFee: 350,
        contacts: [
          { name: "Kushal S", phone: "8217022799" },
          { name: "Adithya Singh Rathaur", phone: "8765047369" },
        ],
      },
    ],
  },
  {
    id: "grand-hackathon",
    name: "Grand Hackathon",
    fullName: "Solaris X - Grand Hackathon",
    events: [
      {
        name: "MCP-Based Systems – Engineering Intelligent Systems",
        type: "Flagship",
        tag: "Grand Hackathon",
        teamSize: "2-4",
        duration: "24 hr",
        maxParticipants: 800,
        prize: 120000,
        date: "8th–9th April, 2026",
        description:
          "Build multi-agent, context-aware AI systems that go beyond simple prompts and enable intelligent orchestration powered by MCP and tools.",
        rules:
          "Team size: 2–4 members. All core development must happen within the 24-hour Solaris X window. Frameworks and libraries are allowed; pre-built or previously shipped solutions are not. Teams must be present during evaluation. Team changes after the event begins are not permitted. No refunds in case of cancellation.",
        contacts: [
          { name: "Prarthana", phone: "9731424499" },
          { name: "Meghana", phone: "6364520130" },
          { name: "Suhan", phone: "9606592647" },
        ],
      },
      {
        name: "Developer Tools — Engineering Productivity",
        type: "Flagship",
        tag: "Grand Hackathon",
        teamSize: "2-4",
        duration: "24 hr",
        maxParticipants: 800,
        prize: 120000,
        date: "8th–9th April, 2026",
        description:
          "Create tools that improve how developers build, debug, test, deploy, monitor, and scale software systems.",
        rules:
          "Team size: 2–4 members. All core development must happen within the 24-hour Solaris X window. Frameworks and libraries are allowed; pre-built or previously shipped solutions are not. Teams must be present during evaluation. Team changes after the event begins are not permitted. No refunds in case of cancellation.",
        contacts: [
          { name: "Prarthana", phone: "9731424499" },
          { name: "Meghana", phone: "6364520130" },
          { name: "Suhan", phone: "9606592647" },
        ],
      },
      {
        name: "Agentic AI-Based Automated Systems – Engineering Intelligent Execution",
        type: "Flagship",
        tag: "Grand Hackathon",
        teamSize: "2-4",
        duration: "24 hr",
        maxParticipants: 800,
        prize: 120000,
        date: "8th–9th April, 2026",
        description:
          "Design AI-driven systems that automate real workflows, reduce manual effort, and enable smarter operational processes.",
        rules:
          "Team size: 2–4 members. All core development must happen within the 24-hour Solaris X window. Frameworks and libraries are allowed; pre-built or previously shipped solutions are not. Teams must be present during evaluation. Team changes after the event begins are not permitted. No refunds in case of cancellation.",
        contacts: [
          { name: "Prarthana", phone: "9731424499" },
          { name: "Meghana", phone: "6364520130" },
          { name: "Suhan", phone: "9606592647" },
        ],
      },
    ],
  },
]

export function getDepartmentById(id: string): DepartmentEvents | undefined {
  return departments.find((d) => d.id === id)
}

export function getDepartmentIds(): string[] {
  return departments.map((d) => d.id)
}
