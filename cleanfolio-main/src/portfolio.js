const header = {
  // all the properties are optional - can be left empty or deleted
  title: 'AS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Arjun Sarao',
  role: 'Waterloo CS 2027',
  description:
    'I am Arjun Sarao, a first year at the University of Waterloo pursuing a Bachelor of Computer Science. I am interested in Artificial Intelligence and Machine Learning.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/arjun-sarao-bb555b1b4/',
    github: 'https://github.com/DarkHawk727',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Themis',
    description:
      'AI-powered news curation app that used BERT to summarize articles written on various topics. It also computes various metrics including political bias, sentiment analysis, and subjectivity.',
    stack: ['Flutter', 'Flask', 'Sklearn', 'BERT'],
    sourceCode: 'https://github.com/DarkHawk727/Themis',
    livePreview: 'https://devpost.com/software/themis-ofz41v',
  },
  {
    name: 'Talk-with-me',
    description:
      'GPT-3 powered therapy app that lets users engage in meaningful theraputic discussions in a variety of topics via customized prompts. Delivery is given in the form of speech acommpanied with a text messaging style UI.',
    stack: ['Flutter', 'Firebase', 'GPT-3'],
    sourceCode: 'https://github.com/DarkHawk727/Talk-With-Me',
    livePreview: 'https://devpost.com/software/talk-with-me',
  },
  {
    name: 'Equalis',
    description:
      'An app that lets citizens participate in a direct democracy. It uses a blockchain to store and verify the votes of citizens. It also allows citizens to vote on the issues that are important to them.',
    stack: [
      'Flutter',
      'Python',
      'Firebase',
      'Solidity',
      'Flask',
      'Pytesseract',
      'web3.py',
    ],
    sourceCode: 'https://github.com/DarkHawk727/Equalis-API',
    livePreview: 'https://devpost.com/software/equalis',
  },
  {
    name: 'Learn Scientific Programming with Python Solutions',
    description:
      'Python answers to all questions and exercises in Learn Scientific Programming with Python 2nd Edition by Christian Hill',
    stack: ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'SciPy'],
    sourceCode:
      'https://github.com/DarkHawk727/Learn-Scientific-Programming-with-Python-Solutions',
  },
  {
    name: 'SeeFood',
    description:
      'Recreation of the app from the TV show: Silicon Valley. The app is a hotdog detector that uses a TensorFlow CNN to detect hotdogs in images. Created an app using Java.',
    stack: ['Java', 'Python', 'TensorFlow'],
    sourceCode: 'https://github.com/DarkHawk727/Hotdog-not-Hotdog-ML',
  },
  {
    name: 'HelpingHand',
    description:
      "Python IDE with integration of OpenAI's Codex model (Before copilot). It uses Codex to generate code for the user's desired language as well as fix existing code.",
    stack: ['Python', 'OpenAI Codex', 'React'],
    sourceCode: 'https://github.com/WSSSDC/HTN21-Bridge',
    livePreview: 'https://devpost.com/software/helpinghand-pae1bw',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Numpy',
  'Matplotlib',
  'SciPy',
  'PyTorch',
  'TensorFlow',
  'C++',
  'Java',
  'Flutter',
  'Octave',
  'Arduino',
  'Swift',
]

const awards = [
  // awards can be added or removed
  // if there are no awards, Awards section won't show up
  {
    name: 'Best Domain',
    description: 'Awarded to the team with the best domain name.',
    date: '2021',
    awarder: 'CorgiHacks',
  },
  {
    name: "People's Choice First Place",
    description:
      'Awarded to the team with the best project according to a participant vote.',
    date: '2021',
    awarder: 'WinHacks',
  },
  {
    name: 'Best Use of Google Cloud',
    description:
      'Awarded to the team with the most competent usage of a Google Cloud Product.',
    date: '2021',
    awarder: 'UncommonHacks',
  },
  {
    name: 'Best Stone Age Hack',
    description:
      'Awarded to the team with the most creative and innovative prehistoric themed hack.',
    date: '2021',
    awarder: 'Prehackstoric',
  },
  {
    name: 'Best Use of Google Cloud',
    description:
      'Awarded to the team with the most competent usage of a Google Cloud Product.',
    date: '2021',
    awarder: 'Hack-o-lantern',
  },
  {
    name: 'Certificate of Distinction',
    description:
      'Awarded to a participant who scores in the top 25% of contestants. I was awarded this for the 2021 Hypatia Math Competition.',
    date: '2021',
    awarder:
      'Center for Education in Mathematics and Computing | University of Waterloo',
  },
  {
    name: "President's Scholarship",
    description:
      'Awarded to a applicant who has an admission average exceeding 95%.',
    date: '2021',
    awarder: 'University of Waterloo',
  },
]

const certifications = [
  // certifications can be added or removed
  // if there are no certifications, Certifications section won't show up
  {
    name: 'Machine Learning',
    description: 'Machine Learning Course by Stanford University',
    date: '2021',
    awarder: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/certificate/UXU4JLNBMWV9',
  },
  {
    name: 'Neural Networks and Deep Learning',
    description:
      "First course in deeplearning.ai's Deep Learning Specialization",
    date: '2021',
    awarder: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/certificate/FGXDK23UF48J',
  },
  {
    name: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization, and Optimization',
    description:
      "Second course in deeplearning.ai's Deep Learning Specialization",
    date: '2021',
    awarder: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/certificate/V9TNVEH4JAMA',
  },
  {
    name: 'Structuring Machine Learning Projects',
    description:
      "Third course in deeplearning.ai's Deep Learning Specialization",
    date: '2022',
    awarder: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/ZB93L9WKN4KD',
  },
  {
    name: 'Convolutional Neural Networks',
    description:
      "Fourth course in deeplearning.ai's Deep Learning Specialization",
    date: '2022',
    awarder: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/KLHBX8T8V9JS',
  },
  {
    name: 'Sequence Models',
    description:
      "Fifth course in deeplearning.ai's Deep Learning Specialization",
    date: '2022',
    awarder: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/KLHBX8T8V9JS',
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'arjunsarao727@gmail.com',
}

export { header, about, projects, skills, awards, certifications, contact }
