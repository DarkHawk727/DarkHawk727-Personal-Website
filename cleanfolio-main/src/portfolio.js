const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'AS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Arjun Sarao',
  role: 'Highschool Student',
  description:
    'I am Arjun Sarao, a highschool student and an aspiring Machine Learning Engineer. I spend most of time coding outstanding projects or tinkering with electronics.',
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
    name: 'CCC Solutions',
    description:
      'Java answers to all of the Junior and Senior Canadian Computing Contest problems',
    stack: ['Java'],
    sourceCode: 'https://github.com/DarkHawk727/CCC-Contest-Practice',
    livePreview: 'https://dmoj.ca/user/arjunsarao727',
  },
  {
    name: 'Learn Scientific Programming with Python Solutions',
    description:
      'Python answers to all questions and exercises in Learn Scientific Programming with Python 2nd Edition by Christian Hill',
    stack: ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'SciPy'],
    sourceCode:
      'https://github.com/DarkHawk727/Learn-Scientific-Programming-with-Python-Solutions',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Numpy',
  'Matplotlib',
  'SciPy',
  'Pytorch',
  'Tensoflow',
  'C++',
  'Java',
  'Flutter',
  'Octave',
  'Arduino',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'arjunsarao727@gmail.com',
}

export { header, about, projects, skills, contact }
