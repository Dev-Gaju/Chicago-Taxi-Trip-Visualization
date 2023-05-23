export const publications = [
  {
    id: 1,
    title:
      "Classification of Deep-SAT Images under Label Noise",
    authors: [
      "Mohammad Minhazul Alam",
      "Md Gazuruddin",
      "Nahian Ahmed",
      "Abdul Motaleb",
      "Masud Rana",
      "Romman Riyadh Shishir",
      "Sabrina Yeasmin",
      "Rashedur M. Rahman",
    ],
    year: "2021",
    organization: "Taylor & Francis",
    type: "journal",
    status: "published",
    src: "https://www.tandfonline.com/doi/full/10.1080/08839514.2021.1975381",
    image: "sensors-21.png",
  },
  // {
  //   id: 2,
  //   title:
  //     "Deep-learning Coupled with Novel Classification Method to Classify the Urban Environment of the Developing World",
  //   authors: [
  //     "Qianwei Cheng",
  //     "AKM Mahbubur Rahman",
  //     "Anis Sarker",
  //     "Abu Bakar Siddik Nayem",
  //     "Ovi Paul",
  //     "Amin Ahsan Ali",
  //     "M Ashraful Amin",
  //     "Ryosuke Shibasaki",
  //     "Moinul Zaber",
  //   ],
  //   year: "2020",
  //   organization: "ICRSETE",
  //   type: "conference",
  //   status: "published",
  //   src: "https://aircconline.com/csit/papers/vol11/csit110103.pdf",
  //   image: "deeplearning_coupled.png",
  // },
  // {
  //   id: 3,
  //   title:
  //     "A Novel Disaster Image Data-set and Characteristics Analysis using Attention Model",
  //   authors: [
  //     "Fahim Faisal Niloy",
  //     "Arif",
  //     "Abu Bakar Siddik Nayem",
  //     "Anis Sarker",
  //     "Ovi Paul",
  //     "M Ashraful Amin",
  //     "Amin Ahsan Ali",
  //     "Moinul Islam Zaber",
  //     "AKM Mahbubur Rahman",
  //   ],
  //   year: "2020",
  //   organization: "ICPR",
  //   type: "conference",
  //   status: "published",
  //   src: "https://arxiv.org/abs/2107.01284",
  //   image: "disaster.png",
  // },
  // {
  //   id: 4,
  //   title: "LULC Segmentation of RGB Satellite Image Using FCN-8",
  //   authors: [
  //     "A.B.S Nayem",
  //     "A Sarker",
  //     "A.A Ali",
  //     "M.A Amin",
  //     "A.K.M M Rahman",
  //   ],
  //   year: "2019",
  //   organization: "SLAAI",
  //   type: "conference",
  //   status: "published",
  //   src: "https://arxiv.org/abs/2008.10736",
  //   image: "lulc.png",
  // },
];

export const kaggles = [
  {
    id: 1,
    title:
      "All about Bert you need to know",
    authors: ["In this tutorial I'll show you how to use BERT with the huggingface PyTorch library to quickly and efficiently fine-tune a model to get near state of the art performance in sentence classification.",
    ],
    year: "2023",
    organization: "Kaggle Notebook",
    type: "journal",
    status: "published",
    src: "https://www.kaggle.com/code/gazu468/all-about-bert-you-need-to-know",
    image: "bert.png",
  },
    {
    id: 2,
    title:
      "Feather to compress your data(8x Faster)",
    authors: ["Feather file, takes less than half of the space, than the corresponding CSV file, having same data. Feather files are 100 times faster, while reading and writing from the disk, as compared to CSV file.",
    ],
    year: "2022",
    organization: "Kaggle Notebook",
    type: "journal",
    status: "published",
    src: "https://www.kaggle.com/code/gazu468/feather-to-compress-your-data-8x-faster",
    image: "feather.png",
  },

    {
    id: 3,
    title:
      "TPS[DEC] EDA + Modeling",
    authors: ["In this notebook, I participate this competition & make notebook on that, where I first read that dataset then do EDA, after feature engineering & selection, divided data using train_test_split apply several model like catboost, XGBoost .",
    ],
    year: "2021",
    organization: "Kaggle Notebook",
    type: "journal",
    status: "published",
    src: "https://www.kaggle.com/code/gazu468/tps-dec-eda-modeling",
    image: "tabular.jpg",
  },
     {
    id: 4,
    title:
      "Boosting Algorithm: 5 Minutes With AdaBoost",
    authors: ["Ensemble learning, any idea about this? Basically, ensemble defines as combining several learners together to build a better model to enhance the accuracy. More Precisely, Imagine someone telling you to guess the animal name by giving several features of it, is it possible? Yay… it's possible.",
    ],
    year: "2021",
    organization: "Medium Article",
    type: "journal",
    status: "published",
    src: "https://medium.com/@gajuahmd/5-minutes-with-adaboost-5b4462f13d4b",
    image: "boosting.png",
  },
    {
    id: 4,
    title:
      "Render: Upload Flask and Streamlit Project in Minutes",
    authors: ["Heroku is one of the best online Platforms for students or any kind of freelancer to live their Projects. Then what happened? Heroku declare they do not provide any kind of free hosting from Dec-22. That decision created a very bad impact on those who really utilize Heroku in a good way and also a bad way.",
    ],
    year: "2023",
    organization: "Medium Article",
    type: "journal",
    status: "published",
    src: "https://medium.com/@gajuahmd/render-upload-flask-and-streamlit-project-in-minutes-82eec27063f6",
    image: "render.jpg",
  },
];

export const projects = [
  {
    title: "NPRA",
    description:
      "An android application to detect and crop pills from image. Primitively, when a photo is taken this need to be send to the server. The server was created using Flask to detect using computer vision and it return the detected image. When the application receive detected image it save and show it into the gallery.",
    categories: ["React Native", "Android", "Flask", "react-native-camera"],
    img: "npra_1.png",
    thumbnail: "thumb_npra.png",
    github: "",
  },
  {
    title: "HouseRent",
    description:
      "This application is an approach which let house owners to make a placement to the internet for their house rent advertisement, let renter those who basically looking for houses can rent a house by finding through this app.",
    categories: ["Android", "Firebase", "Java"],
    img: "houserent_1.png",
    thumbnail: "thumb_houserent.png",
    github: "https://github.com/ansarker/HouseRent.git",
  },
  {
    title: "LUVMUSIC",
    description:
      "Luv Music is a website for a music lover who wants to test difference type of music in a single platform.",
    categories: ["NodeJS", "MongoDB", "Dropbox API"],
    img: "luvmusic_1.png",
    thumbnail: "thumb_luvmusic.png",
    github: "https://github.com/iub-cse-shq/luvmusic",
  },
  {
    title: "File Upload",
    description:
      "This program will show you how to upload file into local storage and dropbox using nodejs and jquery.",
    categories: ["Nodejs", "MongoDB", "Dropbox API"],
    img: "nodejs_file_upload_1.png",
    thumbnail: "thumb_nodejs.png",
    github: "https://github.com/ansarker/nodejs_upload_file",
  },
  {
    title: "Keepin",
    description:
      "Keepin is an online vault to keep your passwords and credit info safe. This was built using mongodb, express, reactjs and nodejs.",
    categories: ["Nodejs", "MongoDB", "Express", "Reactjs"],
    img: "keepin_1.png",
    thumbnail: "thumb_keepin.png",
    github: "https://keepin-6eaf3.web.app/",
  },
];

export const programming_skills = [
  {
    title: "Python",
  },
  {
    title: "PHP",
  },
  {
    title: "R",
  },
  {
    title: "Java",
  },
  {
    title: "JavaScript",
  },
];

export const lib_framework_skills = [
  {
    title: "Pytorch",
  },
  {
    title: "Keras",
  },
  {
    title: "Tensorflow",
  },
  {
    title: "Numpy",
  },
  {
    title: "Matplotlib",
  },
  {
    title: "Opencv",
  },
  {
    title: "Scipy",
  },
  {
    title: "Pillow",
  },
  {
    title: "Scikit-learn",
  },
  {
    title: "Scikit-image",
  },
  {
    title: "Pandas",
  },
  {
    title: "Seaborn",
  },
  {
    title: "Plotly",
  },

  {
    title: "Vuejs",
  },
 {
    title: "Django",
  },
  {
    title: "Mongodb",
  },
  {
    title: "Oracle",
  },
  {
    title: "Flask"
  },
  {
    title: "Selenium"
  },
  {
    title: "Gdal(Python gis libraries)",
  },
];

export const other_skills = [
  {
    title: "Linux shell script",
  },
  {
    title: "SSH",
  },
  {
    title: "RestAPI",
  },
  {
    title: "Beautifulsoup",
  },
 {
    title: "Streamlit",
  },
  {
    title: "Latex",
  },
];

// export const skills = [
//   {
//     title: "Python",
//     capacity: "80%",
//   },
//   {
//     title: "Node.js, React.js, React Native and MongoDB",
//     capacity: "80%",
//   },
//   {
//     title: "Matlab",
//     capacity: "80%",
//   },
//   {
//     title: "C/C++",
//     capacity: "60%"
//   },
//   {
//     title: "Java",
//     capacity: "60%"
//   },
//   {
//     title: "PHP and SQL",
//     capacity: "50%"
//   },
//   {
//     title: "JavaScript, HTML, CSS",
//     capacity: "90%",
//   },
// ];
