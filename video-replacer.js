// input arrays
const questions = [
  {
    "id": 1,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
    "options": [
      {
        "id": 2,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
        "key": "Write",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
        "key": "Jump",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 1
  },
  {
    "id": 2,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Places and Directions",
    "questionType": "multiple-image",
    "data": [
      "video/19DA3G950s1w8SRmJgk1Cj0NIftlshyn4",
      "video/1CqiJBezqEcf-leOrB_ird1p_TEx6ckaW",
      "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
      "video/10Evx0PBUSRw6VVRj2bTgumK6e55DTDPP"
    ],
    "options": [
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      }
    ],
    "correctOptionId": 3,
    "level": 2
  },
  {
    "id": 3,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
    "options": [
      {
        "id": 1,
        "url": "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
        "key": "Yes",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 3
  },
  {
    "id": 4,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
    "options": [
      {
        "id": 3,
        "key": "Sorry",
        "type": "text"
      },
      {
        "id": 1,
        "key": "No",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Yes",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 3
  },
  {
    "id": 5,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
    "options": [
      {
        "id": 1,
        "url": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
        "key": "No",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
        "key": "Thank you",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 3
  },
  {
    "id": 6,
    "group": "Yes or No",
    "name": "Is this 'No'?",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 3
  },
  {
    "id": 7,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/1J7AZM8uCWrmWqidYkaXHBQBouxqlpoxv",
    "options": [
      {
        "id": 3,
        "url": "video/1Rs3T3sfdFjvT9TnOtTE0CEI69RcOs1_9",
        "key": "Pink",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
        "key": "Purple",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1J7AZM8uCWrmWqidYkaXHBQBouxqlpoxv",
        "key": "Blue",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 3
  },
  {
    "id": 8,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Color",
    "questionType": "single-image",
    "data": "video/1J7AZM8uCWrmWqidYkaXHBQBouxqlpoxv",
    "options": [
      {
        "id": 2,
        "url": "video/1olWa9cQxlZo4GBAyolWyMBrvANv1_cQZ",
        "key": "Black",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1J7AZM8uCWrmWqidYkaXHBQBouxqlpoxv",
        "key": "Blue",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
        "key": "Gray",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 3
  },
  {
    "id": 9,
    "group": "Yes or No",
    "name": "Is this 'Red'?",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/red.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 3
  },
  {
    "id": 10,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/1.png",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/2.png",
        "key": "2",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/8.png",
        "key": "8",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/1.png",
        "key": "1",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 3
  },
  {
    "id": 11,
    "group": "Yes or No",
    "name": "Is this '2'?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/2.png",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 3
  },
  {
    "id": 12,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Places and Directions",
    "questionType": "single-video",
    "data": "video/down.mp4",
    "options": [
      {
        "id": 3,
        "url": "video/1o_eSZsUzHEBkw-UcUga5IYCrPKduv-HB",
        "key": "Park",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1BNwiCW-B-JXEEsomRUWPNtUNU8vJNvFb",
        "key": "Down",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1LriFY8x7L6h7RJIkaEgGCqwod6OeI47B",
        "key": "Up",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 3
  },
  {
    "id": 13,
    "group": "Yes or No",
    "name": "Is this 'Down'?",
    "category": "Places and Directions",
    "questionType": "single-image",
    "data": "video/1BNwiCW-B-JXEEsomRUWPNtUNU8vJNvFb",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 3
  },
  {
    "id": 14,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Animals",
    "questionType": "single-video",
    "data": "video/cat.mp4",
    "options": [
      {
        "id": 2,
        "url": "video/1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3",
        "key": "Horse",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1T2cKe2xEBWkOvVy5kyE1_MSLspUYLJ8p",
        "key": "Dog",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1EnHRUbtPocATqCXlfrz2upvdetISy2pu",
        "key": "Cat",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 15,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Animals",
    "questionType": "single-image",
    "data": "video/1T2cKe2xEBWkOvVy5kyE1_MSLspUYLJ8p",
    "options": [
      {
        "id": 2,
        "url": "video/1IvNzFn-Jz7lpqcdb2pqdOD3g_IO3GCi7",
        "key": "Bear",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1T2cKe2xEBWkOvVy5kyE1_MSLspUYLJ8p",
        "key": "Dog",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1EnHRUbtPocATqCXlfrz2upvdetISy2pu",
        "key": "Cat",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 16,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
    "options": [
      {
        "id": 3,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
        "key": "Sorry",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 17,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
    "options": [
      {
        "id": 1,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
        "key": "No",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
        "key": "Thank you",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 18,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
    "options": [
      {
        "id": 1,
        "key": "No",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Thank you",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Yes",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 19,
    "group": "Yes or No",
    "name": "Is this 'Hello'?",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 20,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Yes'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "Which of these signs means 'Yes'?",
    "options": [
      {
        "id": 3,
        "url": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
        "key": "No",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
        "key": "Yes",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
        "key": "Sorry",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 21,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'No'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "Which of these signs means 'No'?",
    "options": [
      {
        "id": 2,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
        "key": "Thank you",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
        "key": "No",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 22,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/1J7AZM8uCWrmWqidYkaXHBQBouxqlpoxv",
    "options": [
      {
        "id": 1,
        "key": "Blue",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Red",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Pink",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 23,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Red'?",
    "category": "Color",
    "questionType": "text",
    "data": "Which of these signs means 'Red'?",
    "options": [
      {
        "id": 3,
        "url": "video/1J7AZM8uCWrmWqidYkaXHBQBouxqlpoxv",
        "key": "Blue",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
        "key": "Gray",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Red",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 24,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Day",
    "questionType": "single-video",
    "data": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
    "options": [
      {
        "id": 2,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
        "key": "Monday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 25,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Day",
    "questionType": "single-image",
    "data": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
    "options": [
      {
        "id": 1,
        "url": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
        "key": "Friday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 26,
    "group": "Yes or No",
    "name": "Is this 'Friday'?",
    "category": "Day",
    "questionType": "single-video",
    "data": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 27,
    "group": "Yes or No",
    "name": "Is this 'Friday'?",
    "category": "Day",
    "questionType": "single-video",
    "data": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 4
  },
  {
    "id": 28,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/sad.mp4",
    "options": [
      {
        "id": 1,
        "url": "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
        "key": "Sad",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc",
        "key": "Loved",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1gz_Js5n0t-DOpet2o-hvbPbGXrSeCFQ9",
        "key": "Proud",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 29,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Emotions",
    "questionType": "single-image",
    "data": "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
    "options": [
      {
        "id": 2,
        "url": "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
        "key": "Surprised",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
        "key": "Sad",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1A_92nvpf2SyGq04e5NlJxpKHvS8MmXiy",
        "key": "Confused",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 30,
    "group": "Yes or No",
    "name": "Is this 'Happy'?",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/happy.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 31,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Months",
    "questionType": "single-video",
    "data": "video/april.mp4",
    "options": [
      {
        "id": 1,
        "url": "video/1IMimjpINBqy03j1C5u2w0swnibMyWzto",
        "key": "April",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1xcfv7LnNzz1SwGvAaTWjQpsHnFU91iuI",
        "key": "December",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1nRAfiNrKZWj-Rbslq72j5X3ACHM7SqiW",
        "key": "January",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 32,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Months",
    "questionType": "single-image",
    "data": "video/1IMimjpINBqy03j1C5u2w0swnibMyWzto",
    "options": [
      {
        "id": 2,
        "url": "video/1akEgfXhuyNy2E4ic-WcTMRfyvXnwBAVu",
        "key": "July",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1OYYcd9eusBzzYfP-lYaoam2FYIs8bIQj",
        "key": "June",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1IMimjpINBqy03j1C5u2w0swnibMyWzto",
        "key": "April",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 33,
    "group": "Yes or No",
    "name": "Is this 'April'?",
    "category": "Months",
    "questionType": "single-image",
    "data": "video/1IMimjpINBqy03j1C5u2w0swnibMyWzto",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 4
  },
  {
    "id": 34,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/3.png",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/2.png",
        "key": "2",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/3.png",
        "key": "3",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/6.png",
        "key": "6",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 35,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/1.png",
    "options": [
      {
        "id": 3,
        "key": "8",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1",
        "type": "text"
      },
      {
        "id": 2,
        "key": "6",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 36,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Numbers",
    "questionType": "single-video",
    "data": "assets/numbers/2.mp4",
    "options": [
      {
        "id": 1,
        "key": "2",
        "type": "text"
      },
      {
        "id": 3,
        "key": "9",
        "type": "text"
      },
      {
        "id": 2,
        "key": "7",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 37,
    "group": "Yes or No",
    "name": "Is this '3'?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/3.png",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 38,
    "group": "Identify the correct sign",
    "name": "Which of these signs means '1'?",
    "category": "Numbers",
    "questionType": "text",
    "data": "Which of these signs means '1'?",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/9.png",
        "key": "9",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/1.png",
        "key": "1",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/6.png",
        "key": "6",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 39,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Places and Directions",
    "questionType": "single-video",
    "data": "video/left.mp4",
    "options": [
      {
        "id": 2,
        "url": "video/1BNwiCW-B-JXEEsomRUWPNtUNU8vJNvFb",
        "key": "Down",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1CqiJBezqEcf-leOrB_ird1p_TEx6ckaW",
        "key": "Left",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1-ydn3feO4r7e0iGl5jqEurTqWLuj5FIt",
        "key": "Library",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 40,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Places and Directions",
    "questionType": "single-image",
    "data": "video/1CqiJBezqEcf-leOrB_ird1p_TEx6ckaW",
    "options": [
      {
        "id": 3,
        "url": "video/12UycrGjXoXUSS46vXBccNUyl84eAeQML",
        "key": "Right",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/10Evx0PBUSRw6VVRj2bTgumK6e55DTDPP",
        "key": "School",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1CqiJBezqEcf-leOrB_ird1p_TEx6ckaW",
        "key": "Left",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 41,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Places and Directions",
    "questionType": "single-image",
    "data": "video/1LriFY8x7L6h7RJIkaEgGCqwod6OeI47B",
    "options": [
      {
        "id": 1,
        "key": "Up",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Left",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Park",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 42,
    "group": "Yes or No",
    "name": "Is this 'Right'?",
    "category": "Places and Directions",
    "questionType": "single-video",
    "data": "video/right.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 4
  },
  {
    "id": 43,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Down'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Down'?",
    "options": [
      {
        "id": 2,
        "url": "video/19DA3G950s1w8SRmJgk1Cj0NIftlshyn4",
        "key": "Hospital",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1BNwiCW-B-JXEEsomRUWPNtUNU8vJNvFb",
        "key": "Down",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/12UycrGjXoXUSS46vXBccNUyl84eAeQML",
        "key": "Right",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 44,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Up'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Up'?",
    "options": [
      {
        "id": 3,
        "url": "video/1Zmmtm5g6qePUPp6vjEuquxfnbr5Ggb9H",
        "key": "Home",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1LriFY8x7L6h7RJIkaEgGCqwod6OeI47B",
        "key": "Up",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1KbrP7c_zBmTS5zRQvn-vJlti2T7WM9MK",
        "key": "Restaurant",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 45,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/mother.mp4",
    "options": [
      {
        "id": 2,
        "url": "video/1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Father",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Mother",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 46,
    "group": "Yes or No",
    "name": "Is this 'Mother'?",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/mother.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 47,
    "group": "Yes or No",
    "name": "Is this 'Father'?",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/father.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 48,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/eat.mp4",
    "options": [
      {
        "id": 2,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
        "key": "Write",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 49,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Verbs",
    "questionType": "single-image",
    "data": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
    "options": [
      {
        "id": 1,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
        "key": "Write",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
        "key": "Run",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 50,
    "group": "Yes or No",
    "name": "Is this 'Eat'?",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/eat.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 51,
    "group": "Yes or No",
    "name": "Is this 'Eat'?",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/eat.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 4
  },
  {
    "id": 52,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
    "options": [
      {
        "id": 2,
        "key": "Father",
        "type": "text"
      },
      {
        "id": 1,
        "key": "No",
        "type": "text"
      },
      {
        "id": 3,
        "key": "October",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 53,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
    "options": [
      {
        "id": 2,
        "key": "Lion",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Up",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Thursday",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 54,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/july.mp4",
    "options": [
      {
        "id": 2,
        "key": "Pig",
        "type": "text"
      },
      {
        "id": 1,
        "key": "July",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Brother",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 55,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/confused.mp4",
    "options": [
      {
        "id": 3,
        "key": "Hello",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Confused",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Red",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 56,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/december.mp4",
    "options": [
      {
        "id": 3,
        "key": "Monday",
        "type": "text"
      },
      {
        "id": 1,
        "key": "December",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Cat",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 57,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
    "options": [
      {
        "id": 2,
        "key": "December",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Park",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Saturday",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 58,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/proud.mp4",
    "options": [
      {
        "id": 2,
        "key": "Hospital",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Happy",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Proud",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 59,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/red.mp4",
    "options": [
      {
        "id": 2,
        "key": "Father",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Teacher",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Red",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 60,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/friend.mp4",
    "options": [
      {
        "id": 1,
        "key": "Friend",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Wednesday",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Brother",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 61,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/father.mp4",
    "options": [
      {
        "id": 3,
        "key": "Yellow",
        "type": "text"
      },
      {
        "id": 2,
        "key": "May",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Father",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 62,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/cow.mp4",
    "options": [
      {
        "id": 2,
        "key": "Saturday",
        "type": "text"
      },
      {
        "id": 3,
        "key": "May",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Cow",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 63,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/april.mp4",
    "options": [
      {
        "id": 2,
        "key": "Bear",
        "type": "text"
      },
      {
        "id": 1,
        "key": "April",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Pig",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 64,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/pink.mp4",
    "options": [
      {
        "id": 3,
        "key": "Fish",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Loved",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Pink",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 65,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/fish.mp4",
    "options": [
      {
        "id": 1,
        "key": "Fish",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Tuesday",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Confused",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 66,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/pig.mp4",
    "options": [
      {
        "id": 1,
        "key": "Pig",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Tuesday",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Proud",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 67,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/white.mp4",
    "options": [
      {
        "id": 3,
        "key": "8",
        "type": "text"
      },
      {
        "id": 1,
        "key": "White",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Park",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 68,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/yellow.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yellow",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Sad",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Teacher",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 69,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/family.mp4",
    "options": [
      {
        "id": 3,
        "key": "6",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Family",
        "type": "text"
      },
      {
        "id": 2,
        "key": "November",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 70,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
    "options": [
      {
        "id": 1,
        "key": "Monday",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Grandmother",
        "type": "text"
      },
      {
        "id": 2,
        "key": "December",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 71,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
    "options": [
      {
        "id": 3,
        "key": "Friday",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Hello",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Thursday",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 72,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/monkey.mp4",
    "options": [
      {
        "id": 3,
        "key": "2",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Store",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Monkey",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 73,
    "group": "Fingerspelling challenge",
    "name": "What word is being fingerspelled?",
    "category": "Alphabet",
    "questionType": "single-video",
    "data": "assets/alphabet/teacher.mp4",
    "options": [
      {
        "id": 1,
        "key": "Teacher",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Purple",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Sad",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 74,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'No'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "Which of these signs means 'No'?",
    "options": [
      {
        "id": 3,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
        "key": "No",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 4
  },
  {
    "id": 75,
    "group": "Yes or No",
    "name": "Is this 'Fish'?",
    "category": "Animals",
    "questionType": "single-video",
    "data": "video/fish.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 5
  },
  {
    "id": 76,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Cat'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Cat'?",
    "options": [
      {
        "id": 1,
        "url": "video/1EnHRUbtPocATqCXlfrz2upvdetISy2pu",
        "key": "Cat",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1jZUa5y4UDKu0C4C5c0KLvdqA0ovUmsia",
        "key": "Lion",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1DIRkN1Fx0tWivRmm3_qyYtimu9HCexHG",
        "key": "Cow",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 77,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Dog'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Dog'?",
    "options": [
      {
        "id": 2,
        "url": "video/1yWPg2mGffsSl_Pn3i3txl1dXF1SpRaIh",
        "key": "Rabbit",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3",
        "key": "Horse",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1T2cKe2xEBWkOvVy5kyE1_MSLspUYLJ8p",
        "key": "Dog",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 78,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
    "options": [
      {
        "id": 2,
        "key": "Sorry",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Please",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Hello",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 79,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Hello'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "Which of these signs means 'Hello'?",
    "options": [
      {
        "id": 3,
        "url": "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
        "key": "Yes",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
        "key": "No",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 80,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Green'?",
    "category": "Color",
    "questionType": "text",
    "data": "Which of these signs means 'Green'?",
    "options": [
      {
        "id": 1,
        "url": "video/1UgD0G28dWVMPE8uGIxChQkGZeUrdReER",
        "key": "Green",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
        "key": "Purple",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Red",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 81,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Day",
    "questionType": "single-video",
    "data": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
    "options": [
      {
        "id": 1,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
        "key": "Friday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 82,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Day",
    "questionType": "single-image",
    "data": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
    "options": [
      {
        "id": 1,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 83,
    "group": "Yes or No",
    "name": "Is this 'Sunday'?",
    "category": "Day",
    "questionType": "single-image",
    "data": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 5
  },
  {
    "id": 84,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Monday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Monday'?",
    "options": [
      {
        "id": 1,
        "url": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
        "key": "Monday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 85,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
    "options": [
      {
        "id": 1,
        "url": "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
        "key": "Angry",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/ti1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Tired",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc",
        "key": "Loved",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 86,
    "group": "Yes or No",
    "name": "Is this 'Angry'?",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 87,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Happy'?",
    "category": "Emotions",
    "questionType": "text",
    "data": "Which of these signs means 'Happy'?",
    "options": [
      {
        "id": 1,
        "url": "video/1rem0wQvRIGPplA9TcGH_BVVjdqCNBP5R",
        "key": "Happy",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1gz_Js5n0t-DOpet2o-hvbPbGXrSeCFQ9",
        "key": "Proud",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
        "key": "Surprised",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 88,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Sad'?",
    "category": "Emotions",
    "questionType": "text",
    "data": "Which of these signs means 'Sad'?",
    "options": [
      {
        "id": 1,
        "url": "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
        "key": "Sad",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
        "key": "Angry",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1rem0wQvRIGPplA9TcGH_BVVjdqCNBP5R",
        "key": "Happy",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 89,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Months",
    "questionType": "single-image",
    "data": "video/1Nc0IBvVGcOQtu_2z3x68iUIk-Ej8S9P9",
    "options": [
      {
        "id": 3,
        "key": "September",
        "type": "text"
      },
      {
        "id": 1,
        "key": "May",
        "type": "text"
      },
      {
        "id": 2,
        "key": "March",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 90,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Months",
    "questionType": "single-image",
    "data": "video/1OYYcd9eusBzzYfP-lYaoam2FYIs8bIQj",
    "options": [
      {
        "id": 3,
        "key": "May",
        "type": "text"
      },
      {
        "id": 1,
        "key": "June",
        "type": "text"
      },
      {
        "id": 2,
        "key": "October",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 91,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'April'?",
    "category": "Months",
    "questionType": "text",
    "data": "Which of these signs means 'April'?",
    "options": [
      {
        "id": 1,
        "url": "video/1IMimjpINBqy03j1C5u2w0swnibMyWzto",
        "key": "April",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1akEgfXhuyNy2E4ic-WcTMRfyvXnwBAVu",
        "key": "July",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1OYYcd9eusBzzYfP-lYaoam2FYIs8bIQj",
        "key": "June",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 92,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/5.png",
    "options": [
      {
        "id": 3,
        "url": "assets/numbers/1.png",
        "key": "1",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/5.png",
        "key": "5",
        "type": "image"
      },
      {
        "id": 2,
        "url": "assets/numbers/4.png",
        "key": "4",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 93,
    "group": "Yes or No",
    "name": "Is this '5'?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/5.png",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 94,
    "group": "Yes or No",
    "name": "Is this '5'?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/5.png",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 5
  },
  {
    "id": 95,
    "group": "Identify the correct sign",
    "name": "Which of these signs means '3'?",
    "category": "Numbers",
    "questionType": "text",
    "data": "Which of these signs means '3'?",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/10.png",
        "key": "10",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/6.png",
        "key": "6",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/3.png",
        "key": "3",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 96,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Places and Directions",
    "questionType": "single-video",
    "data": "video/home.mp4",
    "options": [
      {
        "id": 3,
        "url": "video/1-ydn3feO4r7e0iGl5jqEurTqWLuj5FIt",
        "key": "Library",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1Zmmtm5g6qePUPp6vjEuquxfnbr5Ggb9H",
        "key": "Home",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1LriFY8x7L6h7RJIkaEgGCqwod6OeI47B",
        "key": "Up",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 97,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Places and Directions",
    "questionType": "single-image",
    "data": "video/1Zmmtm5g6qePUPp6vjEuquxfnbr5Ggb9H",
    "options": [
      {
        "id": 2,
        "url": "video/1USLNadckJVIZ3WhxDG0ncMcNTaRkViU9",
        "key": "Store",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1KbrP7c_zBmTS5zRQvn-vJlti2T7WM9MK",
        "key": "Restaurant",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1Zmmtm5g6qePUPp6vjEuquxfnbr5Ggb9H",
        "key": "Home",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 98,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Places and Directions",
    "questionType": "single-image",
    "data": "video/12UycrGjXoXUSS46vXBccNUyl84eAeQML",
    "options": [
      {
        "id": 1,
        "key": "Right",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Left",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Restaurant",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 99,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Relationships",
    "questionType": "single-image",
    "data": "video/1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
    "options": [
      {
        "id": 1,
        "key": "Father",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Mother",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Family",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 100,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/mother.mp4",
    "options": [
      {
        "id": 2,
        "key": "Family",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Sister",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Mother",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 101,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Father'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Father'?",
    "options": [
      {
        "id": 2,
        "url": "video/13RWaYTqxCuWhAfLFXdVhdkjMqySsvMjb",
        "key": "Teacher",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Father",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Mother",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 102,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Mother'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Mother'?",
    "options": [
      {
        "id": 1,
        "url": "video/1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Mother",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1S1hFwgtJNTAWx0ctc31L4tdEP7IABiXY",
        "key": "Doctor",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 103,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/run.mp4",
    "options": [
      {
        "id": 3,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
        "key": "Run",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
        "key": "Write",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 104,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Verbs",
    "questionType": "single-image",
    "data": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
    "options": [
      {
        "id": 3,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
        "key": "Run",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 105,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Verbs",
    "questionType": "single-image",
    "data": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
    "options": [
      {
        "id": 2,
        "key": "Sleep",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Jump",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Eat",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 106,
    "group": "Yes or No",
    "name": "Is this 'Run'?",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/run.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 107,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Eat'?",
    "category": "Verbs",
    "questionType": "text",
    "data": "Which of these signs means 'Eat'?",
    "options": [
      {
        "id": 3,
        "url": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
        "key": "Write",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
        "key": "Run",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 108,
    "group": "Contextual usage",
    "name": "When would you use this sign?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
    "options": [
      {
        "id": 3,
        "key": "Waving hello",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Saying thank you",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Refusing politely",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 109,
    "group": "Contextual usage",
    "name": "When would you use this sign?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
    "options": [
      {
        "id": 1,
        "key": "Confirming agreement",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Counting numbers",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Saying your name",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 110,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Cat'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Cat'?",
    "options": [
      {
        "id": 1,
        "url": "video/1EnHRUbtPocATqCXlfrz2upvdetISy2pu",
        "key": "Cat",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1T2cKe2xEBWkOvVy5kyE1_MSLspUYLJ8p",
        "key": "Dog",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
        "key": "Pig",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 111,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Father'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Father'?",
    "options": [
      {
        "id": 1,
        "url": "video/1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Father",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/grand1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Grandmother",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Mother",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 112,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Sad'?",
    "category": "Emotions",
    "questionType": "text",
    "data": "Which of these signs means 'Sad'?",
    "options": [
      {
        "id": 1,
        "url": "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
        "key": "Sad",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc",
        "key": "Loved",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1A_92nvpf2SyGq04e5NlJxpKHvS8MmXiy",
        "key": "Confused",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 113,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Monday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Monday'?",
    "options": [
      {
        "id": 1,
        "url": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
        "key": "Monday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 114,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Mother'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Mother'?",
    "options": [
      {
        "id": 3,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Mother",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Father",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 115,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Dog'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Dog'?",
    "options": [
      {
        "id": 1,
        "url": "video/1T2cKe2xEBWkOvVy5kyE1_MSLspUYLJ8p",
        "key": "Dog",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1yWPg2mGffsSl_Pn3i3txl1dXF1SpRaIh",
        "key": "Rabbit",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
        "key": "Pig",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 116,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'June'?",
    "category": "Months",
    "questionType": "text",
    "data": "Which of these signs means 'June'?",
    "options": [
      {
        "id": 2,
        "url": "video/1Nc0IBvVGcOQtu_2z3x68iUIk-Ej8S9P9",
        "key": "May",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1OYYcd9eusBzzYfP-lYaoam2FYIs8bIQj",
        "key": "June",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1IMimjpINBqy03j1C5u2w0swnibMyWzto",
        "key": "April",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 117,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Hello'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "Which of these signs means 'Hello'?",
    "options": [
      {
        "id": 1,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
        "key": "Yes",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
        "key": "No",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 118,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Cat'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Cat'?",
    "options": [
      {
        "id": 1,
        "url": "video/1EnHRUbtPocATqCXlfrz2upvdetISy2pu",
        "key": "Cat",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1yOCmvoTzpKIaAcA-vCZ16-85RaIQVh3q",
        "key": "Fish",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1yWPg2mGffsSl_Pn3i3txl1dXF1SpRaIh",
        "key": "Rabbit",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 119,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Monday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Monday'?",
    "options": [
      {
        "id": 1,
        "url": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
        "key": "Monday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
        "key": "Tuesday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 120,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Friday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Friday'?",
    "options": [
      {
        "id": 3,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
        "key": "Friday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 121,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Hello'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "Which of these signs means 'Hello'?",
    "options": [
      {
        "id": 1,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
        "key": "Sorry",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 122,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Right'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Right'?",
    "options": [
      {
        "id": 2,
        "url": "video/1USLNadckJVIZ3WhxDG0ncMcNTaRkViU9",
        "key": "Store",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1CqiJBezqEcf-leOrB_ird1p_TEx6ckaW",
        "key": "Left",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/12UycrGjXoXUSS46vXBccNUyl84eAeQML",
        "key": "Right",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 123,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Monday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Monday'?",
    "options": [
      {
        "id": 3,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
        "key": "Monday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 124,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Eat'?",
    "category": "Verbs",
    "questionType": "text",
    "data": "Which of these signs means 'Eat'?",
    "options": [
      {
        "id": 2,
        "url": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
        "key": "Run",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 125,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Monday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Monday'?",
    "options": [
      {
        "id": 3,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
        "key": "Monday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
        "key": "Friday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 126,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Dog'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Dog'?",
    "options": [
      {
        "id": 2,
        "url": "video/1EnHRUbtPocATqCXlfrz2upvdetISy2pu",
        "key": "Cat",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1wmihNnf9z-Tkzqthp9eW6MdGK_VW_c4v",
        "key": "Monkey",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1T2cKe2xEBWkOvVy5kyE1_MSLspUYLJ8p",
        "key": "Dog",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 5
  },
  {
    "id": 127,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Animals",
    "questionType": "single-image",
    "data": "video/1IvNzFn-Jz7lpqcdb2pqdOD3g_IO3GCi7",
    "options": [
      {
        "id": 3,
        "url": "video/1yOCmvoTzpKIaAcA-vCZ16-85RaIQVh3q",
        "key": "Fish",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1EnHRUbtPocATqCXlfrz2upvdetISy2pu",
        "key": "Cat",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1IvNzFn-Jz7lpqcdb2pqdOD3g_IO3GCi7",
        "key": "Bear",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 128,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Fish'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Fish'?",
    "options": [
      {
        "id": 1,
        "url": "video/1yOCmvoTzpKIaAcA-vCZ16-85RaIQVh3q",
        "key": "Fish",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1tFmXjq1v8xvOtGp1YxQzuR9qxGeyHjO7",
        "key": "Bird",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
        "key": "Pig",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 129,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
    "options": [
      {
        "id": 1,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
        "key": "No",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
        "key": "Thank you",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 130,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
    "options": [
      {
        "id": 1,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
        "key": "Sorry",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
        "key": "No",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 131,
    "group": "Yes or No",
    "name": "Is this 'Please'?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 132,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/white.mp4",
    "options": [
      {
        "id": 3,
        "url": "video/1olWa9cQxlZo4GBAyolWyMBrvANv1_cQZ",
        "key": "Black",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1DPV3gz6ttwR8mros4x0BQaEKJLOvBVh3",
        "key": "White",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
        "key": "Purple",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 133,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/1olWa9cQxlZo4GBAyolWyMBrvANv1_cQZ",
    "options": [
      {
        "id": 1,
        "url": "video/1olWa9cQxlZo4GBAyolWyMBrvANv1_cQZ",
        "key": "Black",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
        "key": "Purple",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/15aA1XZWawqqHgsbDOpHC7lBfEI1qsJBw",
        "key": "Brown",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 134,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Color",
    "questionType": "single-image",
    "data": "video/1DPV3gz6ttwR8mros4x0BQaEKJLOvBVh3",
    "options": [
      {
        "id": 2,
        "url": "video/15aA1XZWawqqHgsbDOpHC7lBfEI1qsJBw",
        "key": "Brown",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1DPV3gz6ttwR8mros4x0BQaEKJLOvBVh3",
        "key": "White",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
        "key": "Gray",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 135,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Day",
    "questionType": "single-image",
    "data": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
    "options": [
      {
        "id": 2,
        "key": "Tuesday",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Saturday",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Sunday",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 136,
    "group": "Yes or No",
    "name": "Is this 'Tuesday'?",
    "category": "Day",
    "questionType": "single-video",
    "data": "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 137,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Sunday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Sunday'?",
    "options": [
      {
        "id": 1,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
        "key": "Friday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 138,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/1KJoIXk9t3p7rHMrtbcRWV7AShFFPuW_H",
    "options": [
      {
        "id": 3,
        "url": "video/1rem0wQvRIGPplA9TcGH_BVVjdqCNBP5R",
        "key": "Happy",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/ti1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Tired",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1vnn-aazXHmFroOJIZbt07AQdbNjQq82L",
        "key": "Worried",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 139,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Emotions",
    "questionType": "single-image",
    "data": "video/ti1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
    "options": [
      {
        "id": 3,
        "url": "video/1A_92nvpf2SyGq04e5NlJxpKHvS8MmXiy",
        "key": "Confused",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/ti1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Tired",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1gz_Js5n0t-DOpet2o-hvbPbGXrSeCFQ9",
        "key": "Proud",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 140,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Emotions",
    "questionType": "single-image",
    "data": "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
    "options": [
      {
        "id": 1,
        "key": "Angry",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Loved",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Surprised",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 141,
    "group": "Yes or No",
    "name": "Is this 'Tired'?",
    "category": "Emotions",
    "questionType": "single-image",
    "data": "video/ti1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 6
  },
  {
    "id": 142,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Months",
    "questionType": "single-image",
    "data": "video/1nRAfiNrKZWj-Rbslq72j5X3ACHM7SqiW",
    "options": [
      {
        "id": 1,
        "url": "video/1nRAfiNrKZWj-Rbslq72j5X3ACHM7SqiW",
        "key": "January",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1IMimjpINBqy03j1C5u2w0swnibMyWzto",
        "key": "April",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1xcfv7LnNzz1SwGvAaTWjQpsHnFU91iuI",
        "key": "December",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 143,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Months",
    "questionType": "single-image",
    "data": "video/1akEgfXhuyNy2E4ic-WcTMRfyvXnwBAVu",
    "options": [
      {
        "id": 3,
        "key": "October",
        "type": "text"
      },
      {
        "id": 2,
        "key": "November",
        "type": "text"
      },
      {
        "id": 1,
        "key": "July",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 144,
    "group": "Yes or No",
    "name": "Is this 'March'?",
    "category": "Months",
    "questionType": "single-video",
    "data": "video/march.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 145,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'July'?",
    "category": "Months",
    "questionType": "text",
    "data": "Which of these signs means 'July'?",
    "options": [
      {
        "id": 2,
        "url": "video/1nEjCr25ZVLJbaOezCKDoeva2RlqmL9mv",
        "key": "October",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1akEgfXhuyNy2E4ic-WcTMRfyvXnwBAVu",
        "key": "July",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1nRAfiNrKZWj-Rbslq72j5X3ACHM7SqiW",
        "key": "January",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 146,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/6.png",
    "options": [
      {
        "id": 1,
        "url": "assets/numbers/6.png",
        "key": "6",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/4.png",
        "key": "4",
        "type": "image"
      },
      {
        "id": 2,
        "url": "assets/numbers/8.png",
        "key": "8",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 147,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/5.png",
    "options": [
      {
        "id": 1,
        "key": "5",
        "type": "text"
      },
      {
        "id": 3,
        "key": "10",
        "type": "text"
      },
      {
        "id": 2,
        "key": "9",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 148,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Places and Directions",
    "questionType": "single-image",
    "data": "video/1o_eSZsUzHEBkw-UcUga5IYCrPKduv-HB",
    "options": [
      {
        "id": 3,
        "url": "video/12UycrGjXoXUSS46vXBccNUyl84eAeQML",
        "key": "Right",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1BNwiCW-B-JXEEsomRUWPNtUNU8vJNvFb",
        "key": "Down",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1o_eSZsUzHEBkw-UcUga5IYCrPKduv-HB",
        "key": "Park",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 149,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Places and Directions",
    "questionType": "single-video",
    "data": "video/home.mp4",
    "options": [
      {
        "id": 2,
        "key": "Restaurant",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Home",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Library",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 150,
    "group": "Yes or No",
    "name": "Is this 'Park'?",
    "category": "Places and Directions",
    "questionType": "single-image",
    "data": "video/1o_eSZsUzHEBkw-UcUga5IYCrPKduv-HB",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 151,
    "group": "Yes or No",
    "name": "Is this 'School'?",
    "category": "Places and Directions",
    "questionType": "single-video",
    "data": "video/school.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 152,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/friend.mp4",
    "options": [
      {
        "id": 3,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/13RWaYTqxCuWhAfLFXdVhdkjMqySsvMjb",
        "key": "Teacher",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1cte-cFb-KhFxVXpec4mr8VFCwjEeBM2k",
        "key": "Friend",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 153,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Relationships",
    "questionType": "single-image",
    "data": "video/1119WJbw7L6odXFb97K8MoVnx3TzDu578",
    "options": [
      {
        "id": 1,
        "url": "video/1119WJbw7L6odXFb97K8MoVnx3TzDu578",
        "key": "Brother",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 154,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Relationships",
    "questionType": "single-image",
    "data": "video/1cte-cFb-KhFxVXpec4mr8VFCwjEeBM2k",
    "options": [
      {
        "id": 1,
        "url": "video/1cte-cFb-KhFxVXpec4mr8VFCwjEeBM2k",
        "key": "Friend",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/grand1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Grandmother",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Father",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 155,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Relationships",
    "questionType": "single-image",
    "data": "video/1xmdLhrW23kSJp2kZcqEqD3QECR9GIe6H",
    "options": [
      {
        "id": 1,
        "url": "video/1xmdLhrW23kSJp2kZcqEqD3QECR9GIe6H",
        "key": "Sister",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/13RWaYTqxCuWhAfLFXdVhdkjMqySsvMjb",
        "key": "Teacher",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Mother",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 156,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Verbs",
    "questionType": "single-image",
    "data": "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
    "options": [
      {
        "id": 1,
        "url": "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
        "key": "Jump",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 157,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Verbs",
    "questionType": "single-image",
    "data": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
    "options": [
      {
        "id": 3,
        "key": "Write",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Run",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Jump",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 158,
    "group": "Yes or No",
    "name": "Is this 'Jump'?",
    "category": "Verbs",
    "questionType": "single-image",
    "data": "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 6
  },
  {
    "id": 159,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Run'?",
    "category": "Verbs",
    "questionType": "text",
    "data": "Which of these signs means 'Run'?",
    "options": [
      {
        "id": 2,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
        "key": "Run",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 160,
    "group": "Contextual usage",
    "name": "When would you use this sign?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
    "options": [
      {
        "id": 2,
        "key": "Asking for help",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Greeting a friend",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Saying sorry",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 161,
    "group": "Visual-semantic match",
    "name": "Select the correct sign for this sentence: 'He looks worried about the exam.'",
    "category": "Emotions",
    "questionType": "multiple-image",
    "data": [
      "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
      "video/1rem0wQvRIGPplA9TcGH_BVVjdqCNBP5R",
      "video/1vnn-aazXHmFroOJIZbt07AQdbNjQq82L"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 162,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Sunday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Sunday'?",
    "options": [
      {
        "id": 3,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
        "key": "Tuesday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 163,
    "group": "Identify the correct sign",
    "name": "Which of these signs means '5'?",
    "category": "Numbers",
    "questionType": "text",
    "data": "Which of these signs means '5'?",
    "options": [
      {
        "id": 3,
        "url": "assets/numbers/9.png",
        "key": "9",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/5.png",
        "key": "5",
        "type": "image"
      },
      {
        "id": 2,
        "url": "assets/numbers/4.png",
        "key": "4",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 164,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Sunday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Sunday'?",
    "options": [
      {
        "id": 2,
        "url": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
        "key": "Friday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 165,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Fish'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Fish'?",
    "options": [
      {
        "id": 3,
        "url": "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
        "key": "Pig",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1yOCmvoTzpKIaAcA-vCZ16-85RaIQVh3q",
        "key": "Fish",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1wmihNnf9z-Tkzqthp9eW6MdGK_VW_c4v",
        "key": "Monkey",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 6
  },
  {
    "id": 166,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Animals",
    "questionType": "single-video",
    "data": "video/bird.mp4",
    "options": [
      {
        "id": 1,
        "url": "video/1tFmXjq1v8xvOtGp1YxQzuR9qxGeyHjO7",
        "key": "Bird",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1yWPg2mGffsSl_Pn3i3txl1dXF1SpRaIh",
        "key": "Rabbit",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
        "key": "Pig",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 167,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Animals",
    "questionType": "single-image",
    "data": "video/1tFmXjq1v8xvOtGp1YxQzuR9qxGeyHjO7",
    "options": [
      {
        "id": 1,
        "url": "video/1tFmXjq1v8xvOtGp1YxQzuR9qxGeyHjO7",
        "key": "Bird",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1EnHRUbtPocATqCXlfrz2upvdetISy2pu",
        "key": "Cat",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3",
        "key": "Horse",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 168,
    "group": "Yes or No",
    "name": "Is this 'Bird'?",
    "category": "Animals",
    "questionType": "single-video",
    "data": "video/bird.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 169,
    "group": "Yes or No",
    "name": "Is this 'Bird'?",
    "category": "Animals",
    "questionType": "single-image",
    "data": "video/1tFmXjq1v8xvOtGp1YxQzuR9qxGeyHjO7",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 7
  },
  {
    "id": 170,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Bear'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Bear'?",
    "options": [
      {
        "id": 1,
        "url": "video/1IvNzFn-Jz7lpqcdb2pqdOD3g_IO3GCi7",
        "key": "Bear",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1T2cKe2xEBWkOvVy5kyE1_MSLspUYLJ8p",
        "key": "Dog",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1yOCmvoTzpKIaAcA-vCZ16-85RaIQVh3q",
        "key": "Fish",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 171,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
    "options": [
      {
        "id": 1,
        "url": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
        "key": "Sorry",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
        "key": "No",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 172,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
    "options": [
      {
        "id": 1,
        "key": "Please",
        "type": "text"
      },
      {
        "id": 3,
        "key": "No",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Hello",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 173,
    "group": "Yes or No",
    "name": "Is this 'Sorry'?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 7
  },
  {
    "id": 174,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Please'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "Which of these signs means 'Please'?",
    "options": [
      {
        "id": 1,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
        "key": "Sorry",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
        "key": "Yes",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 175,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Color",
    "questionType": "single-image",
    "data": "video/1Rs3T3sfdFjvT9TnOtTE0CEI69RcOs1_9",
    "options": [
      {
        "id": 3,
        "url": "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
        "key": "Gray",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1Rs3T3sfdFjvT9TnOtTE0CEI69RcOs1_9",
        "key": "Pink",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1UgD0G28dWVMPE8uGIxChQkGZeUrdReER",
        "key": "Green",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 176,
    "group": "Yes or No",
    "name": "Is this 'Pink'?",
    "category": "Color",
    "questionType": "single-image",
    "data": "video/1Rs3T3sfdFjvT9TnOtTE0CEI69RcOs1_9",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 177,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'White'?",
    "category": "Color",
    "questionType": "text",
    "data": "Which of these signs means 'White'?",
    "options": [
      {
        "id": 2,
        "url": "video/1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Red",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1DPV3gz6ttwR8mros4x0BQaEKJLOvBVh3",
        "key": "White",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
        "key": "Gray",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 178,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Day",
    "questionType": "single-video",
    "data": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
    "options": [
      {
        "id": 3,
        "url": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
        "key": "Monday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 179,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Day",
    "questionType": "single-image",
    "data": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
    "options": [
      {
        "id": 2,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 180,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Day",
    "questionType": "single-video",
    "data": "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
    "options": [
      {
        "id": 3,
        "key": "Sunday",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Tuesday",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Thursday",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 181,
    "group": "Yes or No",
    "name": "Is this 'Wednesday'?",
    "category": "Day",
    "questionType": "single-image",
    "data": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 182,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Tuesday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Tuesday'?",
    "options": [
      {
        "id": 1,
        "url": "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
        "key": "Tuesday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
        "key": "Monday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 183,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Emotions",
    "questionType": "single-image",
    "data": "video/1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc",
    "options": [
      {
        "id": 2,
        "url": "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
        "key": "Sad",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/ti1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Tired",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc",
        "key": "Loved",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 184,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Emotions",
    "questionType": "single-image",
    "data": "video/1gz_Js5n0t-DOpet2o-hvbPbGXrSeCFQ9",
    "options": [
      {
        "id": 3,
        "url": "video/131IB_vn3BYk-cTC4zQ4fuwZRUP8WKDTF",
        "key": "Excited",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1gz_Js5n0t-DOpet2o-hvbPbGXrSeCFQ9",
        "key": "Proud",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/ti1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Tired",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 185,
    "group": "Yes or No",
    "name": "Is this 'Proud'?",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/proud.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 186,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Tired'?",
    "category": "Emotions",
    "questionType": "text",
    "data": "Which of these signs means 'Tired'?",
    "options": [
      {
        "id": 3,
        "url": "video/1vnn-aazXHmFroOJIZbt07AQdbNjQq82L",
        "key": "Worried",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc",
        "key": "Loved",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/ti1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Tired",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 187,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/7.png",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/1.png",
        "key": "1",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/8.png",
        "key": "8",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/7.png",
        "key": "7",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 188,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/7.png",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/10.png",
        "key": "10",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/7.png",
        "key": "7",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/5.png",
        "key": "5",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 189,
    "group": "Identify the correct sign",
    "name": "Which of these signs means '6'?",
    "category": "Numbers",
    "questionType": "text",
    "data": "Which of these signs means '6'?",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/7.png",
        "key": "7",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/6.png",
        "key": "6",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/9.png",
        "key": "9",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 190,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Places and Directions",
    "questionType": "single-image",
    "data": "video/1o_eSZsUzHEBkw-UcUga5IYCrPKduv-HB",
    "options": [
      {
        "id": 2,
        "key": "Home",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Park",
        "type": "text"
      },
      {
        "id": 3,
        "key": "School",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 191,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Park'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Park'?",
    "options": [
      {
        "id": 1,
        "url": "video/1o_eSZsUzHEBkw-UcUga5IYCrPKduv-HB",
        "key": "Park",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1BNwiCW-B-JXEEsomRUWPNtUNU8vJNvFb",
        "key": "Down",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1USLNadckJVIZ3WhxDG0ncMcNTaRkViU9",
        "key": "Store",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 192,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'School'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'School'?",
    "options": [
      {
        "id": 1,
        "url": "video/10Evx0PBUSRw6VVRj2bTgumK6e55DTDPP",
        "key": "School",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1BNwiCW-B-JXEEsomRUWPNtUNU8vJNvFb",
        "key": "Down",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1LriFY8x7L6h7RJIkaEgGCqwod6OeI47B",
        "key": "Up",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 193,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Relationships",
    "questionType": "single-image",
    "data": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
    "options": [
      {
        "id": 1,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/13RWaYTqxCuWhAfLFXdVhdkjMqySsvMjb",
        "key": "Teacher",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 194,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/sister.mp4",
    "options": [
      {
        "id": 2,
        "key": "Father",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Grandfather",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Sister",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 195,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Relationships",
    "questionType": "single-image",
    "data": "video/1119WJbw7L6odXFb97K8MoVnx3TzDu578",
    "options": [
      {
        "id": 2,
        "key": "Grandmother",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Brother",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Teacher",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 196,
    "group": "Yes or No",
    "name": "Is this 'Family'?",
    "category": "Relationships",
    "questionType": "single-image",
    "data": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 197,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Friend'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Friend'?",
    "options": [
      {
        "id": 3,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1S1hFwgtJNTAWx0ctc31L4tdEP7IABiXY",
        "key": "Doctor",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1cte-cFb-KhFxVXpec4mr8VFCwjEeBM2k",
        "key": "Friend",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 198,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/sleep.mp4",
    "options": [
      {
        "id": 1,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
        "key": "Jump",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 199,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Verbs",
    "questionType": "single-image",
    "data": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
    "options": [
      {
        "id": 3,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
        "key": "Jump",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 200,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/jump.mp4",
    "options": [
      {
        "id": 3,
        "key": "Write",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Jump",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Sleep",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 201,
    "group": "Yes or No",
    "name": "Is this 'Sleep'?",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/sleep.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 202,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Jump'?",
    "category": "Verbs",
    "questionType": "text",
    "data": "Which of these signs means 'Jump'?",
    "options": [
      {
        "id": 3,
        "url": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
        "key": "Run",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
        "key": "Write",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
        "key": "Jump",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 203,
    "group": "Sequence understanding",
    "name": "What sign commonly follows 'Hello'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
    "options": [
      {
        "id": 2,
        "key": "Sorry",
        "type": "text"
      },
      {
        "id": 3,
        "key": "No common follow-up",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Please",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 204,
    "group": "Visual-semantic match",
    "name": "Select the correct sign for this sentence: 'They seemed confused in the meeting.'",
    "category": "Emotions",
    "questionType": "multiple-image",
    "data": [
      "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
      "video/1rem0wQvRIGPplA9TcGH_BVVjdqCNBP5R",
      "video/1vnn-aazXHmFroOJIZbt07AQdbNjQq82L"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 205,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Bear'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Bear'?",
    "options": [
      {
        "id": 1,
        "url": "video/1IvNzFn-Jz7lpqcdb2pqdOD3g_IO3GCi7",
        "key": "Bear",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3",
        "key": "Horse",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1jZUa5y4UDKu0C4C5c0KLvdqA0ovUmsia",
        "key": "Lion",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 206,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Please'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "Which of these signs means 'Please'?",
    "options": [
      {
        "id": 3,
        "url": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
        "key": "Sorry",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 207,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Sister'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Sister'?",
    "options": [
      {
        "id": 3,
        "url": "video/1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Father",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1xmdLhrW23kSJp2kZcqEqD3QECR9GIe6H",
        "key": "Sister",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/grand1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Grandmother",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 208,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Tuesday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Tuesday'?",
    "options": [
      {
        "id": 2,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
        "key": "Tuesday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 209,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Jump'?",
    "category": "Verbs",
    "questionType": "text",
    "data": "Which of these signs means 'Jump'?",
    "options": [
      {
        "id": 1,
        "url": "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
        "key": "Jump",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
        "key": "Write",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 210,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Friend'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Friend'?",
    "options": [
      {
        "id": 2,
        "url": "video/1S1hFwgtJNTAWx0ctc31L4tdEP7IABiXY",
        "key": "Doctor",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Father",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1cte-cFb-KhFxVXpec4mr8VFCwjEeBM2k",
        "key": "Friend",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 211,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'White'?",
    "category": "Color",
    "questionType": "text",
    "data": "Which of these signs means 'White'?",
    "options": [
      {
        "id": 2,
        "url": "video/1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Red",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1J7AZM8uCWrmWqidYkaXHBQBouxqlpoxv",
        "key": "Blue",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1DPV3gz6ttwR8mros4x0BQaEKJLOvBVh3",
        "key": "White",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 212,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Please'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "Which of these signs means 'Please'?",
    "options": [
      {
        "id": 1,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
        "key": "Sorry",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 7
  },
  {
    "id": 213,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Animals",
    "questionType": "single-video",
    "data": "video/pig.mp4",
    "options": [
      {
        "id": 1,
        "url": "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
        "key": "Pig",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1uAHty_rdE8lo25OrBgpjgMpN3gg4wXUx",
        "key": "Elephant",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1DIRkN1Fx0tWivRmm3_qyYtimu9HCexHG",
        "key": "Cow",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 214,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Animals",
    "questionType": "single-video",
    "data": "video/cow.mp4",
    "options": [
      {
        "id": 2,
        "key": "Horse",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Cow",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Lion",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 215,
    "group": "Yes or No",
    "name": "Is this 'Rabbit'?",
    "category": "Animals",
    "questionType": "single-image",
    "data": "video/1yWPg2mGffsSl_Pn3i3txl1dXF1SpRaIh",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 216,
    "group": "Yes or No",
    "name": "Is this 'Pig'?",
    "category": "Animals",
    "questionType": "single-image",
    "data": "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 217,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
    "options": [
      {
        "id": 1,
        "url": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
        "key": "Thank you",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
        "key": "Yes",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
        "key": "Sorry",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 218,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
    "options": [
      {
        "id": 1,
        "url": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
        "key": "Thank you",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
        "key": "Hello",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 219,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
    "options": [
      {
        "id": 3,
        "key": "Please",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Hello",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Sorry",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 220,
    "group": "Yes or No",
    "name": "Is this 'Thank you'?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 221,
    "group": "Yes or No",
    "name": "Is this 'Thank you'?",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 8
  },
  {
    "id": 222,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Sorry'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "Which of these signs means 'Sorry'?",
    "options": [
      {
        "id": 1,
        "url": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
        "key": "Sorry",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
        "key": "Yes",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 223,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
    "options": [
      {
        "id": 3,
        "url": "video/1J7AZM8uCWrmWqidYkaXHBQBouxqlpoxv",
        "key": "Blue",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
        "key": "Gray",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
        "key": "Purple",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 224,
    "group": "Yes or No",
    "name": "Is this 'Gray'?",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 225,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Pink'?",
    "category": "Color",
    "questionType": "text",
    "data": "Which of these signs means 'Pink'?",
    "options": [
      {
        "id": 2,
        "url": "video/1UgD0G28dWVMPE8uGIxChQkGZeUrdReER",
        "key": "Green",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1Rs3T3sfdFjvT9TnOtTE0CEI69RcOs1_9",
        "key": "Pink",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1olWa9cQxlZo4GBAyolWyMBrvANv1_cQZ",
        "key": "Black",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 226,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Day",
    "questionType": "single-video",
    "data": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
    "options": [
      {
        "id": 3,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 227,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Day",
    "questionType": "single-video",
    "data": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
    "options": [
      {
        "id": 2,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 228,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Day",
    "questionType": "single-image",
    "data": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
    "options": [
      {
        "id": 2,
        "url": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
        "key": "Monday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
        "key": "Tuesday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 229,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Day",
    "questionType": "single-image",
    "data": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
    "options": [
      {
        "id": 3,
        "url": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
        "key": "Friday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 230,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Day",
    "questionType": "single-video",
    "data": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
    "options": [
      {
        "id": 3,
        "key": "Thursday",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Friday",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Wednesday",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 231,
    "group": "Yes or No",
    "name": "Is this 'Saturday'?",
    "category": "Day",
    "questionType": "single-video",
    "data": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 232,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Wednesday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Wednesday'?",
    "options": [
      {
        "id": 2,
        "url": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
        "key": "Monday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
        "key": "Friday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 233,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/proud.mp4",
    "options": [
      {
        "id": 1,
        "key": "Proud",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Happy",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Excited",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 234,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Emotions",
    "questionType": "single-image",
    "data": "video/1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc",
    "options": [
      {
        "id": 1,
        "key": "Loved",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Angry",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Excited",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 235,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Months",
    "questionType": "single-video",
    "data": "video/december.mp4",
    "options": [
      {
        "id": 3,
        "url": "video/1nEjCr25ZVLJbaOezCKDoeva2RlqmL9mv",
        "key": "October",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1Twf9F4WAGFrFMGyfNp823LmOn7XObC-N",
        "key": "November",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1xcfv7LnNzz1SwGvAaTWjQpsHnFU91iuI",
        "key": "December",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 236,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Months",
    "questionType": "single-video",
    "data": "video/october.mp4",
    "options": [
      {
        "id": 2,
        "url": "video/17NBrmywoAeg55aDluj1HeTzz0VxuuR1D",
        "key": "September",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1OYYcd9eusBzzYfP-lYaoam2FYIs8bIQj",
        "key": "June",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1nEjCr25ZVLJbaOezCKDoeva2RlqmL9mv",
        "key": "October",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 237,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Months",
    "questionType": "single-image",
    "data": "video/1xcfv7LnNzz1SwGvAaTWjQpsHnFU91iuI",
    "options": [
      {
        "id": 2,
        "url": "video/1nEjCr25ZVLJbaOezCKDoeva2RlqmL9mv",
        "key": "October",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1nRAfiNrKZWj-Rbslq72j5X3ACHM7SqiW",
        "key": "January",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1xcfv7LnNzz1SwGvAaTWjQpsHnFU91iuI",
        "key": "December",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 238,
    "group": "Yes or No",
    "name": "Is this 'December'?",
    "category": "Months",
    "questionType": "single-image",
    "data": "video/1xcfv7LnNzz1SwGvAaTWjQpsHnFU91iuI",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 239,
    "group": "Yes or No",
    "name": "Is this 'October'?",
    "category": "Months",
    "questionType": "single-video",
    "data": "video/october.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 240,
    "group": "Yes or No",
    "name": "Is this 'October'?",
    "category": "Months",
    "questionType": "single-video",
    "data": "video/october.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 8
  },
  {
    "id": 241,
    "group": "Identify the correct sign",
    "name": "Which of these signs means '7'?",
    "category": "Numbers",
    "questionType": "text",
    "data": "Which of these signs means '7'?",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/6.png",
        "key": "6",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/2.png",
        "key": "2",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/7.png",
        "key": "7",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 242,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Places and Directions",
    "questionType": "single-video",
    "data": "video/hospital.mp4",
    "options": [
      {
        "id": 3,
        "url": "video/1-ydn3feO4r7e0iGl5jqEurTqWLuj5FIt",
        "key": "Library",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1CqiJBezqEcf-leOrB_ird1p_TEx6ckaW",
        "key": "Left",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/19DA3G950s1w8SRmJgk1Cj0NIftlshyn4",
        "key": "Hospital",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 243,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Places and Directions",
    "questionType": "single-image",
    "data": "video/19DA3G950s1w8SRmJgk1Cj0NIftlshyn4",
    "options": [
      {
        "id": 2,
        "url": "video/1-ydn3feO4r7e0iGl5jqEurTqWLuj5FIt",
        "key": "Library",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1USLNadckJVIZ3WhxDG0ncMcNTaRkViU9",
        "key": "Store",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/19DA3G950s1w8SRmJgk1Cj0NIftlshyn4",
        "key": "Hospital",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 244,
    "group": "Yes or No",
    "name": "Is this 'Hospital'?",
    "category": "Places and Directions",
    "questionType": "single-video",
    "data": "video/hospital.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 245,
    "group": "Yes or No",
    "name": "Is this 'Hospital'?",
    "category": "Places and Directions",
    "questionType": "single-image",
    "data": "video/19DA3G950s1w8SRmJgk1Cj0NIftlshyn4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 8
  },
  {
    "id": 246,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/doctor.mp4",
    "options": [
      {
        "id": 3,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1S1hFwgtJNTAWx0ctc31L4tdEP7IABiXY",
        "key": "Doctor",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 247,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/teacher.mp4",
    "options": [
      {
        "id": 2,
        "url": "video/1119WJbw7L6odXFb97K8MoVnx3TzDu578",
        "key": "Brother",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/13RWaYTqxCuWhAfLFXdVhdkjMqySsvMjb",
        "key": "Teacher",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1cte-cFb-KhFxVXpec4mr8VFCwjEeBM2k",
        "key": "Friend",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 248,
    "group": "Yes or No",
    "name": "Is this 'Doctor'?",
    "category": "Relationships",
    "questionType": "single-image",
    "data": "video/1S1hFwgtJNTAWx0ctc31L4tdEP7IABiXY",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 8
  },
  {
    "id": 249,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Family'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Family'?",
    "options": [
      {
        "id": 2,
        "url": "video/1119WJbw7L6odXFb97K8MoVnx3TzDu578",
        "key": "Brother",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1S1hFwgtJNTAWx0ctc31L4tdEP7IABiXY",
        "key": "Doctor",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 250,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/write.mp4",
    "options": [
      {
        "id": 1,
        "url": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
        "key": "Write",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
        "key": "Jump",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
        "key": "Run",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 251,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Verbs",
    "questionType": "single-image",
    "data": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
    "options": [
      {
        "id": 2,
        "url": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
        "key": "Run",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
        "key": "Write",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 252,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Verbs",
    "questionType": "single-image",
    "data": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
    "options": [
      {
        "id": 3,
        "key": "Eat",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Sleep",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Write",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 253,
    "group": "Yes or No",
    "name": "Is this 'Write'?",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/write.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 254,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Sleep'?",
    "category": "Verbs",
    "questionType": "text",
    "data": "Which of these signs means 'Sleep'?",
    "options": [
      {
        "id": 2,
        "url": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
        "key": "Write",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
        "key": "Eat",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 255,
    "group": "Contextual usage",
    "name": "When would you use this sign?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
    "options": [
      {
        "id": 2,
        "key": "Saying goodbye",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Making a polite request",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Expressing anger",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 256,
    "group": "Sequence understanding",
    "name": "What sign commonly follows 'No'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
    "options": [
      {
        "id": 1,
        "key": "Sorry",
        "type": "text"
      },
      {
        "id": 3,
        "key": "No common follow-up",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Yes",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 257,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Wednesday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Wednesday'?",
    "options": [
      {
        "id": 2,
        "url": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
        "key": "Friday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 258,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Wednesday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Wednesday'?",
    "options": [
      {
        "id": 3,
        "url": "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
        "key": "Tuesday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 259,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Wednesday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Wednesday'?",
    "options": [
      {
        "id": 2,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 260,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Family'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Family'?",
    "options": [
      {
        "id": 1,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1119WJbw7L6odXFb97K8MoVnx3TzDu578",
        "key": "Brother",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 261,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Sleep'?",
    "category": "Verbs",
    "questionType": "text",
    "data": "Which of these signs means 'Sleep'?",
    "options": [
      {
        "id": 3,
        "url": "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
        "key": "Jump",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
        "key": "Run",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 262,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Wednesday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Wednesday'?",
    "options": [
      {
        "id": 1,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
        "key": "Tuesday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 263,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Bird'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Bird'?",
    "options": [
      {
        "id": 3,
        "url": "video/1DIRkN1Fx0tWivRmm3_qyYtimu9HCexHG",
        "key": "Cow",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1tFmXjq1v8xvOtGp1YxQzuR9qxGeyHjO7",
        "key": "Bird",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1EnHRUbtPocATqCXlfrz2upvdetISy2pu",
        "key": "Cat",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 264,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Store'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Store'?",
    "options": [
      {
        "id": 1,
        "url": "video/1USLNadckJVIZ3WhxDG0ncMcNTaRkViU9",
        "key": "Store",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/12UycrGjXoXUSS46vXBccNUyl84eAeQML",
        "key": "Right",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/19DA3G950s1w8SRmJgk1Cj0NIftlshyn4",
        "key": "Hospital",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 265,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Family'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Family'?",
    "options": [
      {
        "id": 3,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1cte-cFb-KhFxVXpec4mr8VFCwjEeBM2k",
        "key": "Friend",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 266,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Family'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Family'?",
    "options": [
      {
        "id": 2,
        "url": "video/13RWaYTqxCuWhAfLFXdVhdkjMqySsvMjb",
        "key": "Teacher",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 8
  },
  {
    "id": 267,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Animals",
    "questionType": "single-video",
    "data": "video/elephant.mp4",
    "options": [
      {
        "id": 2,
        "url": "video/1IvNzFn-Jz7lpqcdb2pqdOD3g_IO3GCi7",
        "key": "Bear",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1jZUa5y4UDKu0C4C5c0KLvdqA0ovUmsia",
        "key": "Lion",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1uAHty_rdE8lo25OrBgpjgMpN3gg4wXUx",
        "key": "Elephant",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 268,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Animals",
    "questionType": "single-image",
    "data": "video/1yWPg2mGffsSl_Pn3i3txl1dXF1SpRaIh",
    "options": [
      {
        "id": 2,
        "key": "Fish",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Rabbit",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Lion",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 269,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Basic Words",
    "questionType": "single-image",
    "data": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
    "options": [
      {
        "id": 1,
        "key": "Thank you",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Please",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Yes",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 270,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Thank you'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "Which of these signs means 'Thank you'?",
    "options": [
      {
        "id": 2,
        "url": "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
        "key": "No",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
        "key": "Thank you",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
        "key": "Please",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 271,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
    "options": [
      {
        "id": 1,
        "key": "Gray",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Brown",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Orange",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 272,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Brown'?",
    "category": "Color",
    "questionType": "text",
    "data": "Which of these signs means 'Brown'?",
    "options": [
      {
        "id": 3,
        "url": "video/1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Red",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/15aA1XZWawqqHgsbDOpHC7lBfEI1qsJBw",
        "key": "Brown",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1Rs3T3sfdFjvT9TnOtTE0CEI69RcOs1_9",
        "key": "Pink",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 273,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Gray'?",
    "category": "Color",
    "questionType": "text",
    "data": "Which of these signs means 'Gray'?",
    "options": [
      {
        "id": 1,
        "url": "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
        "key": "Gray",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Red",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/19lStFtxMxo_wn9X2smfeTW4arbl4MoiA",
        "key": "Yellow",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 274,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Day",
    "questionType": "single-image",
    "data": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
    "options": [
      {
        "id": 1,
        "key": "Saturday",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Friday",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Tuesday",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 275,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Day",
    "questionType": "single-image",
    "data": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
    "options": [
      {
        "id": 2,
        "key": "Wednesday",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Thursday",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Saturday",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 276,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Thursday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Thursday'?",
    "options": [
      {
        "id": 1,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
        "key": "Wednesday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD",
        "key": "Monday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 277,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Saturday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Saturday'?",
    "options": [
      {
        "id": 2,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
        "key": "Tuesday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 278,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/confused.mp4",
    "options": [
      {
        "id": 1,
        "url": "video/1A_92nvpf2SyGq04e5NlJxpKHvS8MmXiy",
        "key": "Confused",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
        "key": "Surprised",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
        "key": "Sad",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 279,
    "group": "Yes or No",
    "name": "Is this 'Excited'?",
    "category": "Emotions",
    "questionType": "single-image",
    "data": "video/131IB_vn3BYk-cTC4zQ4fuwZRUP8WKDTF",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 280,
    "group": "Yes or No",
    "name": "Is this 'Confused'?",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/confused.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 9
  },
  {
    "id": 281,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Months",
    "questionType": "single-image",
    "data": "video/1TOYedYZX0ZjQfe6YLLMdw5OZTrW3lUSX",
    "options": [
      {
        "id": 3,
        "url": "video/1akEgfXhuyNy2E4ic-WcTMRfyvXnwBAVu",
        "key": "July",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1qh4fBhm-pCDtV4Ux6-WuaXTHjCYrDn03",
        "key": "August",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1TOYedYZX0ZjQfe6YLLMdw5OZTrW3lUSX",
        "key": "February",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 282,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'December'?",
    "category": "Months",
    "questionType": "text",
    "data": "Which of these signs means 'December'?",
    "options": [
      {
        "id": 2,
        "url": "video/1akEgfXhuyNy2E4ic-WcTMRfyvXnwBAVu",
        "key": "July",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1xcfv7LnNzz1SwGvAaTWjQpsHnFU91iuI",
        "key": "December",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1TOYedYZX0ZjQfe6YLLMdw5OZTrW3lUSX",
        "key": "February",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 283,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'October'?",
    "category": "Months",
    "questionType": "text",
    "data": "Which of these signs means 'October'?",
    "options": [
      {
        "id": 1,
        "url": "video/1nEjCr25ZVLJbaOezCKDoeva2RlqmL9mv",
        "key": "October",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/17NBrmywoAeg55aDluj1HeTzz0VxuuR1D",
        "key": "September",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1IMimjpINBqy03j1C5u2w0swnibMyWzto",
        "key": "April",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 284,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/9.png",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/3.png",
        "key": "3",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/9.png",
        "key": "9",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/6.png",
        "key": "6",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 285,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/8.png",
    "options": [
      {
        "id": 3,
        "key": "2",
        "type": "text"
      },
      {
        "id": 2,
        "key": "4",
        "type": "text"
      },
      {
        "id": 1,
        "key": "8",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 286,
    "group": "Yes or No",
    "name": "Is this '9'?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/9.png",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 287,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Places and Directions",
    "questionType": "single-video",
    "data": "video/restaurant.mp4",
    "options": [
      {
        "id": 2,
        "url": "video/1CqiJBezqEcf-leOrB_ird1p_TEx6ckaW",
        "key": "Left",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/10Evx0PBUSRw6VVRj2bTgumK6e55DTDPP",
        "key": "School",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1KbrP7c_zBmTS5zRQvn-vJlti2T7WM9MK",
        "key": "Restaurant",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 288,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Places and Directions",
    "questionType": "single-image",
    "data": "video/1KbrP7c_zBmTS5zRQvn-vJlti2T7WM9MK",
    "options": [
      {
        "id": 2,
        "url": "video/19DA3G950s1w8SRmJgk1Cj0NIftlshyn4",
        "key": "Hospital",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1CqiJBezqEcf-leOrB_ird1p_TEx6ckaW",
        "key": "Left",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1KbrP7c_zBmTS5zRQvn-vJlti2T7WM9MK",
        "key": "Restaurant",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 289,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Teacher'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Teacher'?",
    "options": [
      {
        "id": 2,
        "url": "video/1S1hFwgtJNTAWx0ctc31L4tdEP7IABiXY",
        "key": "Doctor",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/13RWaYTqxCuWhAfLFXdVhdkjMqySsvMjb",
        "key": "Teacher",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 290,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Verbs",
    "questionType": "single-video",
    "data": "video/write.mp4",
    "options": [
      {
        "id": 3,
        "key": "Run",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Write",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Sleep",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 291,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Write'?",
    "category": "Verbs",
    "questionType": "text",
    "data": "Which of these signs means 'Write'?",
    "options": [
      {
        "id": 3,
        "url": "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
        "key": "Run",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
        "key": "Sleep",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
        "key": "Write",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 292,
    "group": "Contextual usage",
    "name": "When would you use this sign?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
    "options": [
      {
        "id": 3,
        "key": "Ending a call",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Saying hello",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Apologizing to someone",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 293,
    "group": "Sequence understanding",
    "name": "What sign commonly follows 'Thank you'?",
    "category": "Basic Words",
    "questionType": "text",
    "data": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
    "options": [
      {
        "id": 2,
        "key": "Please",
        "type": "text"
      },
      {
        "id": 3,
        "key": "No common follow-up",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Goodbye",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 294,
    "group": "Visual-semantic match",
    "name": "Select the correct sign for this sentence: 'I am very happy today.'",
    "category": "Emotions",
    "questionType": "multiple-image",
    "data": [
      "video/131IB_vn3BYk-cTC4zQ4fuwZRUP8WKDTF",
      "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
      "video/1gz_Js5n0t-DOpet2o-hvbPbGXrSeCFQ9"
    ],
    "options": [
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      }
    ],
    "correctOptionId": 3,
    "level": 9
  },
  {
    "id": 295,
    "group": "Visual-semantic match",
    "name": "Select the correct sign for this sentence: 'I'm too tired to go out.'",
    "category": "Emotions",
    "questionType": "multiple-image",
    "data": [
      "video/1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc",
      "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
      "video/1rem0wQvRIGPplA9TcGH_BVVjdqCNBP5R"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 296,
    "group": "Visual-semantic match",
    "name": "Select the correct sign for this sentence: 'I'm too tired to go out.'",
    "category": "Emotions",
    "questionType": "multiple-image",
    "data": [
      "video/1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc",
      "video/1A_92nvpf2SyGq04e5NlJxpKHvS8MmXiy",
      "video/131IB_vn3BYk-cTC4zQ4fuwZRUP8WKDTF"
    ],
    "options": [
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 297,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Pig'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Pig'?",
    "options": [
      {
        "id": 3,
        "url": "video/1wmihNnf9z-Tkzqthp9eW6MdGK_VW_c4v",
        "key": "Monkey",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
        "key": "Pig",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1IvNzFn-Jz7lpqcdb2pqdOD3g_IO3GCi7",
        "key": "Bear",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 298,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Hospital'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Hospital'?",
    "options": [
      {
        "id": 1,
        "url": "video/19DA3G950s1w8SRmJgk1Cj0NIftlshyn4",
        "key": "Hospital",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1o_eSZsUzHEBkw-UcUga5IYCrPKduv-HB",
        "key": "Park",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1CqiJBezqEcf-leOrB_ird1p_TEx6ckaW",
        "key": "Left",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 299,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'October'?",
    "category": "Months",
    "questionType": "text",
    "data": "Which of these signs means 'October'?",
    "options": [
      {
        "id": 2,
        "url": "video/1Twf9F4WAGFrFMGyfNp823LmOn7XObC-N",
        "key": "November",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1nEjCr25ZVLJbaOezCKDoeva2RlqmL9mv",
        "key": "October",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1IMimjpINBqy03j1C5u2w0swnibMyWzto",
        "key": "April",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 300,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Saturday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Saturday'?",
    "options": [
      {
        "id": 2,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
        "key": "Sunday",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
        "key": "Saturday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 301,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Brown'?",
    "category": "Color",
    "questionType": "text",
    "data": "Which of these signs means 'Brown'?",
    "options": [
      {
        "id": 2,
        "url": "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
        "key": "Gray",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/15aA1XZWawqqHgsbDOpHC7lBfEI1qsJBw",
        "key": "Brown",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1DPV3gz6ttwR8mros4x0BQaEKJLOvBVh3",
        "key": "White",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 302,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Brown'?",
    "category": "Color",
    "questionType": "text",
    "data": "Which of these signs means 'Brown'?",
    "options": [
      {
        "id": 2,
        "url": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
        "key": "Purple",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/15aA1XZWawqqHgsbDOpHC7lBfEI1qsJBw",
        "key": "Brown",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1dyZF5D7SlPFCf1CULFmotN1DIGgUtfUA",
        "key": "Orange",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 303,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Pig'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Pig'?",
    "options": [
      {
        "id": 1,
        "url": "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
        "key": "Pig",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1IvNzFn-Jz7lpqcdb2pqdOD3g_IO3GCi7",
        "key": "Bear",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1tFmXjq1v8xvOtGp1YxQzuR9qxGeyHjO7",
        "key": "Bird",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 304,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Teacher'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Teacher'?",
    "options": [
      {
        "id": 3,
        "url": "video/1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Mother",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/grand1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Grandmother",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/13RWaYTqxCuWhAfLFXdVhdkjMqySsvMjb",
        "key": "Teacher",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 9
  },
  {
    "id": 305,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Animals",
    "questionType": "single-image",
    "data": "video/1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3",
    "options": [
      {
        "id": 2,
        "url": "video/1yWPg2mGffsSl_Pn3i3txl1dXF1SpRaIh",
        "key": "Rabbit",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3",
        "key": "Horse",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1wmihNnf9z-Tkzqthp9eW6MdGK_VW_c4v",
        "key": "Monkey",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 306,
    "group": "Yes or No",
    "name": "Is this 'Horse'?",
    "category": "Animals",
    "questionType": "single-video",
    "data": "video/1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 307,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Elephant'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Elephant'?",
    "options": [
      {
        "id": 3,
        "url": "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
        "key": "Pig",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1yWPg2mGffsSl_Pn3i3txl1dXF1SpRaIh",
        "key": "Rabbit",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1uAHty_rdE8lo25OrBgpjgMpN3gg4wXUx",
        "key": "Elephant",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 308,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
    "options": [
      {
        "id": 3,
        "url": "video/1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Red",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
        "key": "Purple",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1dyZF5D7SlPFCf1CULFmotN1DIGgUtfUA",
        "key": "Orange",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 309,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Color",
    "questionType": "single-image",
    "data": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
    "options": [
      {
        "id": 3,
        "url": "video/15aA1XZWawqqHgsbDOpHC7lBfEI1qsJBw",
        "key": "Brown",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
        "key": "Purple",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1UgD0G28dWVMPE8uGIxChQkGZeUrdReER",
        "key": "Green",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 310,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Color",
    "questionType": "single-image",
    "data": "video/19lStFtxMxo_wn9X2smfeTW4arbl4MoiA",
    "options": [
      {
        "id": 1,
        "url": "video/19lStFtxMxo_wn9X2smfeTW4arbl4MoiA",
        "key": "Yellow",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1Rs3T3sfdFjvT9TnOtTE0CEI69RcOs1_9",
        "key": "Pink",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1DPV3gz6ttwR8mros4x0BQaEKJLOvBVh3",
        "key": "White",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 311,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/1dyZF5D7SlPFCf1CULFmotN1DIGgUtfUA",
    "options": [
      {
        "id": 1,
        "key": "Orange",
        "type": "text"
      },
      {
        "id": 2,
        "key": "White",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Blue",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 312,
    "group": "Yes or No",
    "name": "Is this 'Yellow'?",
    "category": "Color",
    "questionType": "single-image",
    "data": "video/19lStFtxMxo_wn9X2smfeTW4arbl4MoiA",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 313,
    "group": "Yes or No",
    "name": "Is this 'Yellow'?",
    "category": "Color",
    "questionType": "single-image",
    "data": "video/19lStFtxMxo_wn9X2smfeTW4arbl4MoiA",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 10
  },
  {
    "id": 314,
    "group": "Yes or No",
    "name": "Is this 'Purple'?",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 10
  },
  {
    "id": 315,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
    "options": [
      {
        "id": 1,
        "url": "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
        "key": "Surprised",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
        "key": "Angry",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc",
        "key": "Loved",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 316,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Emotions",
    "questionType": "single-image",
    "data": "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
    "options": [
      {
        "id": 1,
        "url": "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
        "key": "Surprised",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1A_92nvpf2SyGq04e5NlJxpKHvS8MmXiy",
        "key": "Confused",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/ti1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Tired",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 317,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/excited.mp4",
    "options": [
      {
        "id": 3,
        "key": "Happy",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Excited",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Confused",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 318,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Confused'?",
    "category": "Emotions",
    "questionType": "text",
    "data": "Which of these signs means 'Confused'?",
    "options": [
      {
        "id": 1,
        "url": "video/1A_92nvpf2SyGq04e5NlJxpKHvS8MmXiy",
        "key": "Confused",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
        "key": "Surprised",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1vnn-aazXHmFroOJIZbt07AQdbNjQq82L",
        "key": "Worried",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 319,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Months",
    "questionType": "single-video",
    "data": "video/november.mp4",
    "options": [
      {
        "id": 1,
        "url": "video/1Twf9F4WAGFrFMGyfNp823LmOn7XObC-N",
        "key": "November",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1TOYedYZX0ZjQfe6YLLMdw5OZTrW3lUSX",
        "key": "February",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1nEjCr25ZVLJbaOezCKDoeva2RlqmL9mv",
        "key": "October",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 320,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Months",
    "questionType": "single-video",
    "data": "video/september.mp4",
    "options": [
      {
        "id": 2,
        "url": "video/1akEgfXhuyNy2E4ic-WcTMRfyvXnwBAVu",
        "key": "July",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/17NBrmywoAeg55aDluj1HeTzz0VxuuR1D",
        "key": "September",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1TOYedYZX0ZjQfe6YLLMdw5OZTrW3lUSX",
        "key": "February",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 321,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Months",
    "questionType": "single-image",
    "data": "video/1Twf9F4WAGFrFMGyfNp823LmOn7XObC-N",
    "options": [
      {
        "id": 2,
        "url": "video/1akEgfXhuyNy2E4ic-WcTMRfyvXnwBAVu",
        "key": "July",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1Twf9F4WAGFrFMGyfNp823LmOn7XObC-N",
        "key": "November",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1TOYedYZX0ZjQfe6YLLMdw5OZTrW3lUSX",
        "key": "February",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 322,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Months",
    "questionType": "single-video",
    "data": "video/february.mp4",
    "options": [
      {
        "id": 3,
        "key": "April",
        "type": "text"
      },
      {
        "id": 1,
        "key": "February",
        "type": "text"
      },
      {
        "id": 2,
        "key": "September",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 323,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'February'?",
    "category": "Months",
    "questionType": "text",
    "data": "Which of these signs means 'February'?",
    "options": [
      {
        "id": 3,
        "url": "video/1OBWyEqHOS8-yjwnQykPOnx1CTquoVkUH",
        "key": "March",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1TOYedYZX0ZjQfe6YLLMdw5OZTrW3lUSX",
        "key": "February",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1nRAfiNrKZWj-Rbslq72j5X3ACHM7SqiW",
        "key": "January",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 324,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/10.png",
    "options": [
      {
        "id": 3,
        "url": "assets/numbers/9.png",
        "key": "9",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/10.png",
        "key": "10",
        "type": "image"
      },
      {
        "id": 2,
        "url": "assets/numbers/8.png",
        "key": "8",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 325,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/10.png",
    "options": [
      {
        "id": 3,
        "url": "assets/numbers/9.png",
        "key": "9",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/10.png",
        "key": "10",
        "type": "image"
      },
      {
        "id": 2,
        "url": "assets/numbers/4.png",
        "key": "4",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 326,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/9.png",
    "options": [
      {
        "id": 3,
        "key": "1",
        "type": "text"
      },
      {
        "id": 1,
        "key": "9",
        "type": "text"
      },
      {
        "id": 2,
        "key": "7",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 327,
    "group": "Identify the correct sign",
    "name": "Which of these signs means '9'?",
    "category": "Numbers",
    "questionType": "text",
    "data": "Which of these signs means '9'?",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/6.png",
        "key": "6",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/3.png",
        "key": "3",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/9.png",
        "key": "9",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 328,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Places and Directions",
    "questionType": "single-video",
    "data": "video/restaurant.mp4",
    "options": [
      {
        "id": 3,
        "key": "Library",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Restaurant",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Park",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 329,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Places and Directions",
    "questionType": "multiple-video",
    "data": [
      "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
      "video/down.mp4",
      "video/store.mp4",
      "video/up.mp4"
    ],
    "options": [
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 330,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Restaurant'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Restaurant'?",
    "options": [
      {
        "id": 2,
        "url": "video/12UycrGjXoXUSS46vXBccNUyl84eAeQML",
        "key": "Right",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1KbrP7c_zBmTS5zRQvn-vJlti2T7WM9MK",
        "key": "Restaurant",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1o_eSZsUzHEBkw-UcUga5IYCrPKduv-HB",
        "key": "Park",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 331,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Library'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Library'?",
    "options": [
      {
        "id": 1,
        "url": "video/1-ydn3feO4r7e0iGl5jqEurTqWLuj5FIt",
        "key": "Library",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1BNwiCW-B-JXEEsomRUWPNtUNU8vJNvFb",
        "key": "Down",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/19DA3G950s1w8SRmJgk1Cj0NIftlshyn4",
        "key": "Hospital",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 332,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/grandfather.mp4",
    "options": [
      {
        "id": 2,
        "url": "video/1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Mother",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Father",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 333,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Relationships",
    "questionType": "single-image",
    "data": "video/grand1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
    "options": [
      {
        "id": 2,
        "url": "video/1119WJbw7L6odXFb97K8MoVnx3TzDu578",
        "key": "Brother",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/grand1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Grandmother",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 334,
    "group": "Yes or No",
    "name": "Is this 'Grandfather'?",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/grandfather.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 335,
    "group": "Yes or No",
    "name": "Is this 'Grandfather'?",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/grandfather.mp4",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 10
  },
  {
    "id": 336,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Relationships",
    "questionType": "multiple-video",
    "data": [
      "video/sister.mp4",
      "video/mother.mp4",
      "video/father.mp4",
      "video/sleep.mp4"
    ],
    "options": [
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      }
    ],
    "correctOptionId": 4,
    "level": 10
  },
  {
    "id": 337,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Verbs",
    "questionType": "multiple-image",
    "data": [
      "video/1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq",
      "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
      "video/1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ",
      "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 10
  },
  {
    "id": 338,
    "group": "Contextual usage",
    "name": "When would you use this sign?",
    "category": "Basic Words",
    "questionType": "single-video",
    "data": "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
    "options": [
      {
        "id": 1,
        "key": "Expressing gratitude",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Calling someone",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Saying yes",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 339,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Excited'?",
    "category": "Emotions",
    "questionType": "text",
    "data": "Which of these signs means 'Excited'?",
    "options": [
      {
        "id": 3,
        "url": "video/ti1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Tired",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
        "key": "Angry",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/131IB_vn3BYk-cTC4zQ4fuwZRUP8WKDTF",
        "key": "Excited",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 340,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Restaurant'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Restaurant'?",
    "options": [
      {
        "id": 2,
        "url": "video/1-ydn3feO4r7e0iGl5jqEurTqWLuj5FIt",
        "key": "Library",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1CqiJBezqEcf-leOrB_ird1p_TEx6ckaW",
        "key": "Left",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1KbrP7c_zBmTS5zRQvn-vJlti2T7WM9MK",
        "key": "Restaurant",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 341,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Library'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Library'?",
    "options": [
      {
        "id": 2,
        "url": "video/10Evx0PBUSRw6VVRj2bTgumK6e55DTDPP",
        "key": "School",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/12UycrGjXoXUSS46vXBccNUyl84eAeQML",
        "key": "Right",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1-ydn3feO4r7e0iGl5jqEurTqWLuj5FIt",
        "key": "Library",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 342,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Elephant'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Elephant'?",
    "options": [
      {
        "id": 3,
        "url": "video/1tFmXjq1v8xvOtGp1YxQzuR9qxGeyHjO7",
        "key": "Bird",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1uAHty_rdE8lo25OrBgpjgMpN3gg4wXUx",
        "key": "Elephant",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1T2cKe2xEBWkOvVy5kyE1_MSLspUYLJ8p",
        "key": "Dog",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 343,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Restaurant'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Restaurant'?",
    "options": [
      {
        "id": 3,
        "url": "video/10Evx0PBUSRw6VVRj2bTgumK6e55DTDPP",
        "key": "School",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1KbrP7c_zBmTS5zRQvn-vJlti2T7WM9MK",
        "key": "Restaurant",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/19DA3G950s1w8SRmJgk1Cj0NIftlshyn4",
        "key": "Hospital",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 10
  },
  {
    "id": 344,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Animals",
    "questionType": "single-video",
    "data": "video/monkey.mp4",
    "options": [
      {
        "id": 1,
        "url": "video/1wmihNnf9z-Tkzqthp9eW6MdGK_VW_c4v",
        "key": "Monkey",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1EnHRUbtPocATqCXlfrz2upvdetISy2pu",
        "key": "Cat",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3",
        "key": "Horse",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 345,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Animals",
    "questionType": "single-image",
    "data": "video/1jZUa5y4UDKu0C4C5c0KLvdqA0ovUmsia",
    "options": [
      {
        "id": 1,
        "url": "video/1jZUa5y4UDKu0C4C5c0KLvdqA0ovUmsia",
        "key": "Lion",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1EnHRUbtPocATqCXlfrz2upvdetISy2pu",
        "key": "Cat",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
        "key": "Pig",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 346,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Animals",
    "questionType": "single-video",
    "data": "video/1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3",
    "options": [
      {
        "id": 1,
        "key": "Horse",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Monkey",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Bird",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 347,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Horse'?",
    "category": "Animals",
    "questionType": "text",
    "data": "Which of these signs means 'Horse'?",
    "options": [
      {
        "id": 1,
        "url": "video/1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3",
        "key": "Horse",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1jZUa5y4UDKu0C4C5c0KLvdqA0ovUmsia",
        "key": "Lion",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1DIRkN1Fx0tWivRmm3_qyYtimu9HCexHG",
        "key": "Cow",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 348,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Basic Words",
    "questionType": "multiple-image",
    "data": [
      "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
      "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
      "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
      "video/1S1hFwgtJNTAWx0ctc31L4tdEP7IABiXY"
    ],
    "options": [
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      }
    ],
    "correctOptionId": 4,
    "level": 11
  },
  {
    "id": 349,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Basic Words",
    "questionType": "multiple-video",
    "data": [
      "video/down.mp4",
      "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7",
      "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
      "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk"
    ],
    "options": [
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 350,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Color",
    "questionType": "single-image",
    "data": "video/19lStFtxMxo_wn9X2smfeTW4arbl4MoiA",
    "options": [
      {
        "id": 1,
        "key": "Yellow",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Red",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Brown",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 351,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Color",
    "questionType": "single-video",
    "data": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
    "options": [
      {
        "id": 1,
        "key": "Purple",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Blue",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Red",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 352,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Color",
    "questionType": "multiple-image",
    "data": [
      "video/15aA1XZWawqqHgsbDOpHC7lBfEI1qsJBw",
      "video/1J7AZM8uCWrmWqidYkaXHBQBouxqlpoxv",
      "video/1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk",
      "video/1DPV3gz6ttwR8mros4x0BQaEKJLOvBVh3"
    ],
    "options": [
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      }
    ],
    "correctOptionId": 3,
    "level": 11
  },
  {
    "id": 353,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Day",
    "questionType": "multiple-image",
    "data": [
      "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
      "video/1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno",
      "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
      "assets/numbers/4.png"
    ],
    "options": [
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      }
    ],
    "correctOptionId": 4,
    "level": 11
  },
  {
    "id": 354,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Day",
    "questionType": "multiple-image",
    "data": [
      "video/1Zmmtm5g6qePUPp6vjEuquxfnbr5Ggb9H",
      "video/1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL",
      "video/1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg",
      "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05"
    ],
    "options": [
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 355,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Day",
    "questionType": "multiple-video",
    "data": [
      "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
      "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
      "video/1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S",
      "video/1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD"
    ],
    "options": [
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      }
    ],
    "correctOptionId": 3,
    "level": 11
  },
  {
    "id": 356,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Emotions",
    "questionType": "single-video",
    "data": "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
    "options": [
      {
        "id": 2,
        "key": "Worried",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Tired",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Surprised",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 357,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Surprised'?",
    "category": "Emotions",
    "questionType": "text",
    "data": "Which of these signs means 'Surprised'?",
    "options": [
      {
        "id": 3,
        "url": "video/1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc",
        "key": "Loved",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
        "key": "Sad",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
        "key": "Surprised",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 358,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Months",
    "questionType": "single-video",
    "data": "video/september.mp4",
    "options": [
      {
        "id": 2,
        "key": "February",
        "type": "text"
      },
      {
        "id": 1,
        "key": "September",
        "type": "text"
      },
      {
        "id": 3,
        "key": "April",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 359,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Months",
    "questionType": "multiple-video",
    "data": [
      "video/october.mp4",
      "video/jump.mp4",
      "video/april.mp4",
      "video/june.mp4"
    ],
    "options": [
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 11
  },
  {
    "id": 360,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'November'?",
    "category": "Months",
    "questionType": "text",
    "data": "Which of these signs means 'November'?",
    "options": [
      {
        "id": 2,
        "url": "video/1Nc0IBvVGcOQtu_2z3x68iUIk-Ej8S9P9",
        "key": "May",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1OYYcd9eusBzzYfP-lYaoam2FYIs8bIQj",
        "key": "June",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1Twf9F4WAGFrFMGyfNp823LmOn7XObC-N",
        "key": "November",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 361,
    "group": "Identify the correct sign",
    "name": "Which of these signs means '10'?",
    "category": "Numbers",
    "questionType": "text",
    "data": "Which of these signs means '10'?",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/4.png",
        "key": "4",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/7.png",
        "key": "7",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/10.png",
        "key": "10",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 362,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Relationships",
    "questionType": "single-video",
    "data": "video/grandfather.mp4",
    "options": [
      {
        "id": 1,
        "key": "Grandfather",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Friend",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Mother",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 363,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Grandfather'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Grandfather'?",
    "options": [
      {
        "id": 1,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1xmdLhrW23kSJp2kZcqEqD3QECR9GIe6H",
        "key": "Sister",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1S1hFwgtJNTAWx0ctc31L4tdEP7IABiXY",
        "key": "Doctor",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 364,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Verbs",
    "questionType": "multiple-video",
    "data": [
      "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
      "video/sleep.mp4",
      "video/run.mp4",
      "video/write.mp4"
    ],
    "options": [
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 365,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Verbs",
    "questionType": "multiple-image",
    "data": [
      "video/10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l",
      "video/171DmR7oztMLIO4pqD51dOE94UU6GHRt2",
      "video/1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y",
      "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7"
    ],
    "options": [
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      }
    ],
    "correctOptionId": 4,
    "level": 11
  },
  {
    "id": 366,
    "group": "Visual-semantic match",
    "name": "Select the correct sign for this sentence: 'I'm too tired to go out.'",
    "category": "Emotions",
    "questionType": "multiple-image",
    "data": [
      "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
      "video/131IB_vn3BYk-cTC4zQ4fuwZRUP8WKDTF",
      "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 11
  },
  {
    "id": 367,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'September'?",
    "category": "Months",
    "questionType": "text",
    "data": "Which of these signs means 'September'?",
    "options": [
      {
        "id": 1,
        "url": "video/17NBrmywoAeg55aDluj1HeTzz0VxuuR1D",
        "key": "September",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1Nc0IBvVGcOQtu_2z3x68iUIk-Ej8S9P9",
        "key": "May",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1xcfv7LnNzz1SwGvAaTWjQpsHnFU91iuI",
        "key": "December",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 368,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Surprised'?",
    "category": "Emotions",
    "questionType": "text",
    "data": "Which of these signs means 'Surprised'?",
    "options": [
      {
        "id": 1,
        "url": "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU",
        "key": "Surprised",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1A_92nvpf2SyGq04e5NlJxpKHvS8MmXiy",
        "key": "Confused",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
        "key": "Angry",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 369,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Yellow'?",
    "category": "Color",
    "questionType": "text",
    "data": "Which of these signs means 'Yellow'?",
    "options": [
      {
        "id": 1,
        "url": "video/19lStFtxMxo_wn9X2smfeTW4arbl4MoiA",
        "key": "Yellow",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
        "key": "Purple",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1dyZF5D7SlPFCf1CULFmotN1DIGgUtfUA",
        "key": "Orange",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 370,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'September'?",
    "category": "Months",
    "questionType": "text",
    "data": "Which of these signs means 'September'?",
    "options": [
      {
        "id": 1,
        "url": "video/17NBrmywoAeg55aDluj1HeTzz0VxuuR1D",
        "key": "September",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1OYYcd9eusBzzYfP-lYaoam2FYIs8bIQj",
        "key": "June",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1Twf9F4WAGFrFMGyfNp823LmOn7XObC-N",
        "key": "November",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 371,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Purple'?",
    "category": "Color",
    "questionType": "text",
    "data": "Which of these signs means 'Purple'?",
    "options": [
      {
        "id": 3,
        "url": "video/1olWa9cQxlZo4GBAyolWyMBrvANv1_cQZ",
        "key": "Black",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
        "key": "Red",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
        "key": "Purple",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 372,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'November'?",
    "category": "Months",
    "questionType": "text",
    "data": "Which of these signs means 'November'?",
    "options": [
      {
        "id": 3,
        "url": "video/1Nc0IBvVGcOQtu_2z3x68iUIk-Ej8S9P9",
        "key": "May",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1nEjCr25ZVLJbaOezCKDoeva2RlqmL9mv",
        "key": "October",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1Twf9F4WAGFrFMGyfNp823LmOn7XObC-N",
        "key": "November",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 373,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Grandfather'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Grandfather'?",
    "options": [
      {
        "id": 2,
        "url": "video/1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Father",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 11
  },
  {
    "id": 374,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Animals",
    "questionType": "single-video",
    "data": "video/lion.mp4",
    "options": [
      {
        "id": 1,
        "key": "Lion",
        "type": "text"
      },
      {
        "id": 2,
        "key": "Elephant",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Horse",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 12
  },
  {
    "id": 375,
    "group": "Meaning matching",
    "name": "Select the correct meaning of this sign",
    "category": "Animals",
    "questionType": "single-image",
    "data": "video/1wmihNnf9z-Tkzqthp9eW6MdGK_VW_c4v",
    "options": [
      {
        "id": 2,
        "key": "Elephant",
        "type": "text"
      },
      {
        "id": 1,
        "key": "Monkey",
        "type": "text"
      },
      {
        "id": 3,
        "key": "Rabbit",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 12
  },
  {
    "id": 376,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Animals",
    "questionType": "multiple-video",
    "data": [
      "video/1olWa9cQxlZo4GBAyolWyMBrvANv1_cQZ",
      "video/elephant.mp4",
      "video/pig.mp4",
      "video/bird.mp4"
    ],
    "options": [
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 12
  },
  {
    "id": 377,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Basic Words",
    "questionType": "multiple-video",
    "data": [
      "video/sleep.mp4",
      "video/17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C",
      "video/1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX",
      "video/1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7"
    ],
    "options": [
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 12
  },
  {
    "id": 378,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Emotions",
    "questionType": "multiple-video",
    "data": [
      "video/happy.mp4",
      "video/proud.mp4",
      "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
      "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-"
    ],
    "options": [
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      }
    ],
    "correctOptionId": 4,
    "level": 12
  },
  {
    "id": 379,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Worried'?",
    "category": "Emotions",
    "questionType": "text",
    "data": "Which of these signs means 'Worried'?",
    "options": [
      {
        "id": 3,
        "url": "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
        "key": "Angry",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1vnn-aazXHmFroOJIZbt07AQdbNjQq82L",
        "key": "Worried",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg",
        "key": "Sad",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 12
  },
  {
    "id": 380,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Places and Directions",
    "questionType": "multiple-image",
    "data": [
      "video/1KbrP7c_zBmTS5zRQvn-vJlti2T7WM9MK",
      "video/1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8",
      "video/10Evx0PBUSRw6VVRj2bTgumK6e55DTDPP",
      "video/1Zmmtm5g6qePUPp6vjEuquxfnbr5Ggb9H"
    ],
    "options": [
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 12
  },
  {
    "id": 381,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Worried'?",
    "category": "Emotions",
    "questionType": "text",
    "data": "Which of these signs means 'Worried'?",
    "options": [
      {
        "id": 2,
        "url": "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
        "key": "Angry",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1A_92nvpf2SyGq04e5NlJxpKHvS8MmXiy",
        "key": "Confused",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/1vnn-aazXHmFroOJIZbt07AQdbNjQq82L",
        "key": "Worried",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 12
  },
  {
    "id": 382,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Color",
    "questionType": "multiple-video",
    "data": [
      "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb",
      "video/15aA1XZWawqqHgsbDOpHC7lBfEI1qsJBw",
      "video/1qh4fBhm-pCDtV4Ux6-WuaXTHjCYrDn03",
      "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV"
    ],
    "options": [
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      }
    ],
    "correctOptionId": 3,
    "level": 13
  },
  {
    "id": 383,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Color",
    "questionType": "multiple-video",
    "data": [
      "video/1olWa9cQxlZo4GBAyolWyMBrvANv1_cQZ",
      "video/1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV",
      "video/1o_eSZsUzHEBkw-UcUga5IYCrPKduv-HB",
      "video/1UgD0G28dWVMPE8uGIxChQkGZeUrdReER"
    ],
    "options": [
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      }
    ],
    "correctOptionId": 3,
    "level": 13
  },
  {
    "id": 384,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Emotions",
    "questionType": "multiple-video",
    "data": [
      "video/1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr",
      "video/1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3",
      "video/1KJoIXk9t3p7rHMrtbcRWV7AShFFPuW_H",
      "video/1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU"
    ],
    "options": [
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      }
    ],
    "correctOptionId": 2,
    "level": 13
  },
  {
    "id": 385,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Months",
    "questionType": "multiple-image",
    "data": [
      "video/1TOYedYZX0ZjQfe6YLLMdw5OZTrW3lUSX",
      "video/1Nc0IBvVGcOQtu_2z3x68iUIk-Ej8S9P9",
      "video/17NBrmywoAeg55aDluj1HeTzz0VxuuR1D",
      "video/1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb"
    ],
    "options": [
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      }
    ],
    "correctOptionId": 4,
    "level": 13
  },
  {
    "id": 386,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Months",
    "questionType": "multiple-image",
    "data": [
      "video/1nEjCr25ZVLJbaOezCKDoeva2RlqmL9mv",
      "video/1TOYedYZX0ZjQfe6YLLMdw5OZTrW3lUSX",
      "video/17NBrmywoAeg55aDluj1HeTzz0VxuuR1D",
      "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      }
    ],
    "correctOptionId": 4,
    "level": 13
  },
  {
    "id": 387,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Numbers",
    "questionType": "multiple-image",
    "data": [
      "assets/numbers/6.png",
      "assets/numbers/7.png",
      "assets/alphabet/j.png",
      "assets/numbers/10.png"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      }
    ],
    "correctOptionId": 3,
    "level": 13
  },
  {
    "id": 388,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Numbers",
    "questionType": "multiple-image",
    "data": [
      "video/1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq",
      "assets/numbers/6.png",
      "assets/numbers/7.png",
      "assets/numbers/10.png"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 13
  },
  {
    "id": 389,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Numbers",
    "questionType": "multiple-image",
    "data": [
      "assets/numbers/5.png",
      "assets/numbers/10.png",
      "assets/alphabet/c.png",
      "assets/numbers/8.png"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      }
    ],
    "correctOptionId": 3,
    "level": 13
  },
  {
    "id": 390,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Relationships",
    "questionType": "multiple-image",
    "data": [
      "video/1KbrP7c_zBmTS5zRQvn-vJlti2T7WM9MK",
      "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
      "video/1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
      "video/1cte-cFb-KhFxVXpec4mr8VFCwjEeBM2k"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 13
  },
  {
    "id": 391,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Relationships",
    "questionType": "multiple-image",
    "data": [
      "video/1S1hFwgtJNTAWx0ctc31L4tdEP7IABiXY",
      "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
      "video/1cte-cFb-KhFxVXpec4mr8VFCwjEeBM2k",
      "video/1nRAfiNrKZWj-Rbslq72j5X3ACHM7SqiW"
    ],
    "options": [
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      }
    ],
    "correctOptionId": 4,
    "level": 13
  },
  {
    "id": 392,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Animals",
    "questionType": "multiple-video",
    "data": [
      "video/cat.mp4",
      "video/elephant.mp4",
      "video/1olWa9cQxlZo4GBAyolWyMBrvANv1_cQZ",
      "video/monkey.mp4"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      }
    ],
    "correctOptionId": 3,
    "level": 14
  },
  {
    "id": 393,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Animals",
    "questionType": "multiple-image",
    "data": [
      "video/11Ag48sa_zd3ui8rUaGwnGWljovkTt170",
      "video/1IvNzFn-Jz7lpqcdb2pqdOD3g_IO3GCi7",
      "video/1wmihNnf9z-Tkzqthp9eW6MdGK_VW_c4v",
      "assets/numbers/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ"
    ],
    "options": [
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      },
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      }
    ],
    "correctOptionId": 4,
    "level": 14
  },
  {
    "id": 394,
    "group": "Odd one out",
    "name": "Which one means something different?",
    "category": "Emotions",
    "questionType": "multiple-video",
    "data": [
      "video/elephant.mp4",
      "video/worried.mp4",
      "video/proud.mp4",
      "video/loved.mp4"
    ],
    "options": [
      {
        "id": 3,
        "key": "3rd",
        "type": "text"
      },
      {
        "id": 1,
        "key": "1st",
        "type": "text"
      },
      {
        "id": 4,
        "key": "4th",
        "type": "text"
      },
      {
        "id": 2,
        "key": "2nd",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 14
  },
  {
    "id": 395,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Tuesday'?",
    "category": "Day",
    "questionType": "text",
    "data": "Which of these signs means 'Tuesday'?",
    "options": [
      {
        "id": 1,
        "url": "video/1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-",
        "key": "Tuesday",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ",
        "key": "Friday",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05",
        "key": "Thursday",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 15
  },
  {
    "id": 396,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Grandfather'?",
    "category": "Relationships",
    "questionType": "text",
    "data": "Which of these signs means 'Grandfather'?",
    "options": [
      {
        "id": 2,
        "url": "video/1VQDJF1F52izJuQNWTX4KULqWmVdftNl3",
        "key": "Mother",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC",
        "key": "Family",
        "type": "video"
      },
      {
        "id": 1,
        "url": "video/grand1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW",
        "key": "Grandfather",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 16
  },
  {
    "id": 397,
    "group": "Identify the meaning",
    "name": "What does this sign mean?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/2.png",
    "options": [
      {
        "id": 2,
        "url": "assets/numbers/4.png",
        "key": "4",
        "type": "image"
      },
      {
        "id": 1,
        "url": "assets/numbers/2.png",
        "key": "2",
        "type": "image"
      },
      {
        "id": 3,
        "url": "assets/numbers/10.png",
        "key": "10",
        "type": "image"
      }
    ],
    "correctOptionId": 1,
    "level": 17
  },
  {
    "id": 398,
    "group": "Identify the correct sign",
    "name": "Which of these signs means 'Park'?",
    "category": "Places and Directions",
    "questionType": "text",
    "data": "Which of these signs means 'Park'?",
    "options": [
      {
        "id": 1,
        "url": "video/1o_eSZsUzHEBkw-UcUga5IYCrPKduv-HB",
        "key": "Park",
        "type": "video"
      },
      {
        "id": 2,
        "url": "video/1LriFY8x7L6h7RJIkaEgGCqwod6OeI47B",
        "key": "Up",
        "type": "video"
      },
      {
        "id": 3,
        "url": "video/1USLNadckJVIZ3WhxDG0ncMcNTaRkViU9",
        "key": "Store",
        "type": "video"
      }
    ],
    "correctOptionId": 1,
    "level": 18
  },
  {
    "id": 399,
    "group": "Yes or No",
    "name": "Is this '8'?",
    "category": "Numbers",
    "questionType": "single-image",
    "data": "assets/numbers/8.png",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 19
  },
  {
    "id": 400,
    "group": "Yes or No",
    "name": "Is this 'April'?",
    "category": "Months",
    "questionType": "single-image",
    "data": "video/1IMimjpINBqy03j1C5u2w0swnibMyWzto",
    "options": [
      {
        "id": 1,
        "key": "Yes",
        "type": "text"
      },
      {
        "id": 2,
        "key": "No",
        "type": "text"
      }
    ],
    "correctOptionId": 1,
    "level": 20
  }
]
;

const reference = [
  {
    "category": "Animals",
    "name": "Bear",
    "slug": "bear",
    "image": "assets/lessons/images/bear.png",
    "video": "1IvNzFn-Jz7lpqcdb2pqdOD3g_IO3GCi7"
  },
  {
    "category": "Animals",
    "name": "Bird",
    "slug": "bird",
    "image": "assets/lessons/images/bird.png",
    "video": "1tFmXjq1v8xvOtGp1YxQzuR9qxGeyHjO7"
  },
  {
    "category": "Animals",
    "name": "Cat",
    "slug": "cat",
    "image": "assets/lessons/images/cat.png",
    "video": "1EnHRUbtPocATqCXlfrz2upvdetISy2pu"
  },
  {
    "category": "Animals",
    "name": "Cow",
    "slug": "cow",
    "image": "assets/lessons/images/cow.png",
    "video": "1DIRkN1Fx0tWivRmm3_qyYtimu9HCexHG"
  },
  {
    "category": "Animals",
    "name": "Dog",
    "slug": "dog",
    "image": "assets/lessons/images/dog.png",
    "video": "1T2cKe2xEBWkOvVy5kyE1_MSLspUYLJ8p"
  },
  {
    "category": "Animals",
    "name": "Elephant",
    "slug": "elephant",
    "image": "assets/lessons/images/elephant.png",
    "video": "1uAHty_rdE8lo25OrBgpjgMpN3gg4wXUx"
  },
  {
    "category": "Animals",
    "name": "Fish",
    "slug": "fish",
    "image": "assets/lessons/images/fish.png",
    "video": "1yOCmvoTzpKIaAcA-vCZ16-85RaIQVh3q"
  },
  {
    "category": "Animals",
    "name": "Horse",
    "slug": "horse",
    "image": "assets/lessons/images/horse.png",
    "video": "1hUJ0Y5gfvZKGMeYUJ750eWdIVK9andB3"
  },
  {
    "category": "Animals",
    "name": "Lion",
    "slug": "lion",
    "image": "assets/lessons/images/lion.png",
    "video": "1jZUa5y4UDKu0C4C5c0KLvdqA0ovUmsia"
  },
  {
    "category": "Animals",
    "name": "Monkey",
    "slug": "monkey",
    "image": "assets/lessons/images/monkey.png",
    "video": "1wmihNnf9z-Tkzqthp9eW6MdGK_VW_c4v"
  },
  {
    "category": "Animals",
    "name": "Pig",
    "slug": "pig",
    "image": "assets/lessons/images/pig.png",
    "video": "11Ag48sa_zd3ui8rUaGwnGWljovkTt170"
  },
  {
    "category": "Animals",
    "name": "Rabbit",
    "slug": "rabbit",
    "image": "assets/lessons/images/rabbit.png",
    "video": "1yWPg2mGffsSl_Pn3i3txl1dXF1SpRaIh"
  },
  {
    "category": "Basic Words",
    "name": "Hello",
    "slug": "hello",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1QK5Be3YHOAOh1JDmJ9Gvoh1_y4TNMdVq"
  },
  {
    "category": "Basic Words",
    "name": "No",
    "slug": "no",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1Lh99KrkoU-uKrsk_eNVheVMLGL2jYKBk"
  },
  {
    "category": "Basic Words",
    "name": "Please",
    "slug": "please",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1LltKitGiyzMrdCxkiIxaX6MbbFsRlfGX"
  },
  {
    "category": "Basic Words",
    "name": "Sorry",
    "slug": "sorry",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1B_DCWCBc8fIKdboyIEp9xQtSFQeNsT-S"
  },
  {
    "category": "Basic Words",
    "name": "Thank you",
    "slug": "thank_you",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1eF5Ofv3jGp5cwRUGAWyts6Aq4j4QxqL7"
  },
  {
    "category": "Basic Words",
    "name": "Yes",
    "slug": "yes",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "17zA0i2SMncQNpbhbJhLNr87_YQTbMT9C"
  },
  {
    "category": "Color",
    "name": "Black",
    "slug": "black",
    "backgroundColor": "#000",
    "fontColor": "#fff",
    "video": "1olWa9cQxlZo4GBAyolWyMBrvANv1_cQZ"
  },
  {
    "category": "Color",
    "name": "Blue",
    "slug": "blue",
    "backgroundColor": "#0D47A1",
    "fontColor": "#fff",
    "video": "1J7AZM8uCWrmWqidYkaXHBQBouxqlpoxv"
  },
  {
    "category": "Color",
    "name": "Brown",
    "slug": "brown",
    "backgroundColor": "#3E2723",
    "fontColor": "#fff",
    "video": "15aA1XZWawqqHgsbDOpHC7lBfEI1qsJBw"
  },
  {
    "category": "Color",
    "name": "Gray",
    "slug": "gray",
    "backgroundColor": "#616161",
    "fontColor": "#fff",
    "video": "1TIn7e6bYLPa9aA0_Ae_J-4KXolIIbFEb"
  },
  {
    "category": "Color",
    "name": "Green",
    "slug": "green",
    "backgroundColor": "#00796B",
    "fontColor": "#fff",
    "video": "1UgD0G28dWVMPE8uGIxChQkGZeUrdReER"
  },
  {
    "category": "Color",
    "name": "Orange",
    "slug": "orange",
    "backgroundColor": "#E65100",
    "fontColor": "#fff",
    "video": "1dyZF5D7SlPFCf1CULFmotN1DIGgUtfUA"
  },
  {
    "category": "Color",
    "name": "Pink",
    "slug": "pink",
    "backgroundColor": "#F50057",
    "fontColor": "#fff",
    "video": "1Rs3T3sfdFjvT9TnOtTE0CEI69RcOs1_9"
  },
  {
    "category": "Color",
    "name": "Purple",
    "slug": "purple",
    "backgroundColor": "#4A148C",
    "fontColor": "#fff",
    "video": "1_jrB_bNy_TvkGtJ6DI1-hzsNP0HuqJMV"
  },
  {
    "category": "Color",
    "name": "Red",
    "slug": "red",
    "backgroundColor": "#B71C1C",
    "fontColor": "#fff",
    "video": "1BdDXznQOHu3HgelaNnzfpqG5eN66S6o8"
  },
  {
    "category": "Color",
    "name": "White",
    "slug": "white",
    "backgroundColor": "#fff",
    "fontColor": "#000",
    "video": "1DPV3gz6ttwR8mros4x0BQaEKJLOvBVh3"
  },
  {
    "category": "Color",
    "name": "Yellow",
    "slug": "yellow",
    "backgroundColor": "#FBC02D",
    "fontColor": "#fff",
    "image": "assets/lessons/images/yellow.png",
    "video": "19lStFtxMxo_wn9X2smfeTW4arbl4MoiA"
  },
  {
    "category": "Day",
    "name": "Friday",
    "slug": "friday",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1t7TSAcs1no8e9uGXX215Z5GFVqFTyLlQ"
  },
  {
    "category": "Day",
    "name": "Monday",
    "slug": "monday",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1F72Tnxt4JunpI-PV3NJyTPiTwRNV2epD"
  },
  {
    "category": "Day",
    "name": "Saturday",
    "slug": "saturday",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1RuzOzopu1RiAtQ9zB-hB5g5VxA8xJSUg"
  },
  {
    "category": "Day",
    "name": "Sunday",
    "slug": "sunday",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1gfT1_hTie6pLpDt7VKvWz_TZJ0R09Sno"
  },
  {
    "category": "Day",
    "name": "Thursday",
    "slug": "thursday",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1frq4T4IOrbUjWiFOR6brr6JTQf2gSt05"
  },
  {
    "category": "Day",
    "name": "Tuesday",
    "slug": "tuesday",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1Ac2h7lGwyLXKvuMhOVlpCUMx5hhUFcC-"
  },
  {
    "category": "Day",
    "name": "Wednesday",
    "slug": "wednesday",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1NJqArxcIUgcuAURiQ4_hxbEKhAZYQvtL"
  },
  {
    "category": "Emotions",
    "name": "Angry",
    "slug": "angry",
    "content": "😠",
    "video": "1tMeT1UstNpdcbqIsnl2Fdy0MO06CQXDr"
  },
  {
    "category": "Emotions",
    "name": "Confused",
    "slug": "confused",
    "content": "😕",
    "video": "1A_92nvpf2SyGq04e5NlJxpKHvS8MmXiy"
  },
  {
    "category": "Emotions",
    "name": "Excited",
    "slug": "excited",
    "content": "🤩",
    "video": "131IB_vn3BYk-cTC4zQ4fuwZRUP8WKDTF"
  },
  {
    "category": "Emotions",
    "name": "Happy",
    "slug": "happy",
    "content": "😄",
    "video": "1rem0wQvRIGPplA9TcGH_BVVjdqCNBP5R"
  },
  {
    "category": "Emotions",
    "name": "Loved",
    "slug": "loved",
    "content": "🥰",
    "video": "1x7AaQ7RAYZJNydxKz21UDdW96DlJ4VNc"
  },
  {
    "category": "Emotions",
    "name": "Proud",
    "slug": "proud",
    "content": "🥹",
    "video": "1gz_Js5n0t-DOpet2o-hvbPbGXrSeCFQ9"
  },
  {
    "category": "Emotions",
    "name": "Sad",
    "slug": "sad",
    "content": "😢",
    "video": "1H5q7-iXiqxi7a_tU_v5b-Oarth6mkScg"
  },
  {
    "category": "Emotions",
    "name": "Surprised",
    "slug": "surprised",
    "content": "😮",
    "video": "1Gs0304tLqyue_7tiNuAXeS1Uu5tm4BmU"
  },
  {
    "category": "Emotions",
    "name": "Tired",
    "slug": "tired",
    "content": "😫",
    "video": "1KJoIXk9t3p7rHMrtbcRWV7AShFFPuW_H"
  },
  {
    "category": "Emotions",
    "name": "Worried",
    "slug": "worried",
    "content": "😟",
    "video": "1vnn-aazXHmFroOJIZbt07AQdbNjQq82L"
  },
  {
    "category": "Months",
    "name": "January",
    "slug": "january",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1nRAfiNrKZWj-Rbslq72j5X3ACHM7SqiW"
  },
  {
    "category": "Months",
    "name": "February",
    "slug": "february",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1TOYedYZX0ZjQfe6YLLMdw5OZTrW3lUSX"
  },
  {
    "category": "Months",
    "name": "March",
    "slug": "march",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1OBWyEqHOS8-yjwnQykPOnx1CTquoVkUH"
  },
  {
    "category": "Months",
    "name": "April",
    "slug": "april",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1IMimjpINBqy03j1C5u2w0swnibMyWzto"
  },
  {
    "category": "Months",
    "name": "May",
    "slug": "may",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1Nc0IBvVGcOQtu_2z3x68iUIk-Ej8S9P9"
  },
  {
    "category": "Months",
    "name": "June",
    "slug": "june",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1OYYcd9eusBzzYfP-lYaoam2FYIs8bIQj"
  },
  {
    "category": "Months",
    "name": "July",
    "slug": "july",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1akEgfXhuyNy2E4ic-WcTMRfyvXnwBAVu"
  },
  {
    "category": "Months",
    "name": "August",
    "slug": "august",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1qh4fBhm-pCDtV4Ux6-WuaXTHjCYrDn03"
  },
  {
    "category": "Months",
    "name": "September",
    "slug": "september",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "17NBrmywoAeg55aDluj1HeTzz0VxuuR1D"
  },
  {
    "category": "Months",
    "name": "October",
    "slug": "october",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1nEjCr25ZVLJbaOezCKDoeva2RlqmL9mv"
  },
  {
    "category": "Months",
    "name": "November",
    "slug": "november",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1Twf9F4WAGFrFMGyfNp823LmOn7XObC-N"
  },
  {
    "category": "Months",
    "name": "December",
    "slug": "december",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1xcfv7LnNzz1SwGvAaTWjQpsHnFU91iuI"
  },
  {
    "category": "Numbers",
    "name": "1",
    "slug": "1",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1XIezO-ucUP9qugih1BD62qhQ8maE1MOB"
  },
  {
    "category": "Numbers",
    "name": "2",
    "slug": "2",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1R8eeWIs-tUwsUeO_fNSEZV8C7AtXdm6n"
  },
  {
    "category": "Numbers",
    "name": "3",
    "slug": "3",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1G4gxOE1fmaPpzZWPtZ6DNBKdaY9tNm3d"
  },
  {
    "category": "Numbers",
    "name": "4",
    "slug": "4",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1WoOXcI3TDauFGEtj_ZfSwVO2OmoV5_en"
  },
  {
    "category": "Numbers",
    "name": "5",
    "slug": "5",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1XNxkXfyfdUluV2ngqo9BDykVO7j48cwj"
  },
  {
    "category": "Numbers",
    "name": "6",
    "slug": "6",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "12KnsyN0VX6J-8Vbfz1dY1v5JolB2ne9R"
  },
  {
    "category": "Numbers",
    "name": "7",
    "slug": "7",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1BhXbvlEHvSF7GyXUCJW4Yz4pEi4Nervh"
  },
  {
    "category": "Numbers",
    "name": "8",
    "slug": "8",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1ls5lZHxSbM3wHkmE8RGs6ilYFYfj20Ru"
  },
  {
    "category": "Numbers",
    "name": "9",
    "slug": "9",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1mdfQCna7v1du_-K1xcLXlpjWNR90i2fZ"
  },
  {
    "category": "Numbers",
    "name": "10",
    "slug": "10",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1E5fpPvl0ZXlA872-CRvSPg3CekpLjL1t"
  },
  {
    "category": "Places and Directions",
    "name": "Down",
    "slug": "down",
    "content": "👇",
    "video": "1BNwiCW-B-JXEEsomRUWPNtUNU8vJNvFb"
  },
  {
    "category": "Places and Directions",
    "name": "Home",
    "slug": "home",
    "content": "🏠",
    "video": "1Zmmtm5g6qePUPp6vjEuquxfnbr5Ggb9H"
  },
  {
    "category": "Places and Directions",
    "name": "Hospital",
    "slug": "hospital",
    "content": "🏥",
    "video": "19DA3G950s1w8SRmJgk1Cj0NIftlshyn4"
  },
  {
    "category": "Places and Directions",
    "name": "Left",
    "slug": "left",
    "content": "👈",
    "video": "1CqiJBezqEcf-leOrB_ird1p_TEx6ckaW"
  },
  {
    "category": "Places and Directions",
    "name": "Library",
    "slug": "library",
    "content": "😠",
    "video": "1-ydn3feO4r7e0iGl5jqEurTqWLuj5FIt"
  },
  {
    "category": "Places and Directions",
    "name": "Park",
    "slug": "park",
    "content": "🛝",
    "video": "1o_eSZsUzHEBkw-UcUga5IYCrPKduv-HB"
  },
  {
    "category": "Places and Directions",
    "name": "Restaurant",
    "slug": "restaurant",
    "content": "🍴",
    "video": "1KbrP7c_zBmTS5zRQvn-vJlti2T7WM9MK"
  },
  {
    "category": "Places and Directions",
    "name": "Right",
    "slug": "right",
    "content": "👉",
    "video": "12UycrGjXoXUSS46vXBccNUyl84eAeQML"
  },
  {
    "category": "Places and Directions",
    "name": "School",
    "slug": "school",
    "content": "🏫",
    "video": "10Evx0PBUSRw6VVRj2bTgumK6e55DTDPP"
  },
  {
    "category": "Places and Directions",
    "name": "Store",
    "slug": "store",
    "content": "🏪",
    "video": "1USLNadckJVIZ3WhxDG0ncMcNTaRkViU9"
  },
  {
    "category": "Places and Directions",
    "name": "Up",
    "slug": "up",
    "content": "☝️",
    "video": "1LriFY8x7L6h7RJIkaEgGCqwod6OeI47B"
  },
  {
    "category": "Relationships",
    "name": "Brother",
    "slug": "brother",
    "content": "👦🏻",
    "video": "1119WJbw7L6odXFb97K8MoVnx3TzDu578"
  },
  {
    "category": "Relationships",
    "name": "Doctor",
    "slug": "doctor",
    "content": "👨🏻‍⚕️",
    "video": "1S1hFwgtJNTAWx0ctc31L4tdEP7IABiXY"
  },
  {
    "category": "Relationships",
    "name": "Family",
    "slug": "family",
    "content": "👨🏻‍👩🏻‍👧🏻",
    "video": "1axBJbcbXC8Ymlo8xrSrthDrlh1tSiiJC"
  },
  {
    "category": "Relationships",
    "name": "Father",
    "slug": "father",
    "content": "👨🏻",
    "video": "1hYLk7nslCnyCC8p2ixfrMgv-6HLbpfwW"
  },
  {
    "category": "Relationships",
    "name": "Friend",
    "slug": "friend",
    "content": "👫🏻",
    "video": "1cte-cFb-KhFxVXpec4mr8VFCwjEeBM2k"
  },
  {
    "category": "Relationships",
    "name": "Grandfather",
    "slug": "grandfather",
    "content": "👴🏻",
    "video": "1gF_sB7EffUwd3SOy8YREU5CPToaHvQ0h"
  },
  {
    "category": "Relationships",
    "name": "Grandmother",
    "slug": "grandmother",
    "content": "👵🏻",
    "video": "14zdwwcMS4xhMl2gCOeQR-fM68SOijn7e"
  },
  {
    "category": "Relationships",
    "name": "Mother",
    "slug": "mother",
    "content": "👩🏻",
    "video": "1VQDJF1F52izJuQNWTX4KULqWmVdftNl3"
  },
  {
    "category": "Relationships",
    "name": "Sister",
    "slug": "sister",
    "content": "👧🏻",
    "video": "1xmdLhrW23kSJp2kZcqEqD3QECR9GIe6H"
  },
  {
    "category": "Relationships",
    "name": "Teacher",
    "slug": "teacher",
    "content": "🧑🏻‍🏫",
    "video": "13RWaYTqxCuWhAfLFXdVhdkjMqySsvMjb"
  },
  {
    "category": "Verbs",
    "name": "Eat",
    "slug": "eat",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "10HqJFSemQoVdTyA6EQwxS00xgm6pdJ5l"
  },
  {
    "category": "Verbs",
    "name": "Jump",
    "slug": "jump",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1k_DfJs1lcX4CiwWkKXXFjmpnbP3R_EsZ"
  },
  {
    "category": "Verbs",
    "name": "Run",
    "slug": "run",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1ogYUwMS6h0H0JtjsnILyEk5JOM90kpiq"
  },
  {
    "category": "Verbs",
    "name": "Sleep",
    "slug": "sleep",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "1ZWIPT5RmayAYC09zn_FgogH_khk1JP8Y"
  },
  {
    "category": "Verbs",
    "name": "Write",
    "slug": "write",
    "backgroundColor": "#fff",
    "fontColor": "#212121",
    "video": "171DmR7oztMLIO4pqD51dOE94UU6GHRt2"
  }
];

// ---- transformer ----
function prefixVideo(v) { return v?.startsWith("video/") ? v : `video/${v}`; }

function buildRefMaps(refArr) {
  const byName = new Map();
  const bySlug = new Map();
  for (const r of refArr) {
    const nameKey = r.name?.toLowerCase();
    const slugKey = r.slug?.toLowerCase();
    if (nameKey) byName.set(nameKey, r.video);
    if (slugKey) bySlug.set(slugKey, r.video);
  }
  return { byName, bySlug };
}

/**
 * Replaces:
 *  - item.data if it *includes* a reference NAME (case-insensitive) or SLUG
 *  - option.url when option.key (lowercased) matches a reference NAME (lowercased)
 * Prefixes replacements with "video/"
 */
function transform(questionsArr, refArr) {
  const { byName, bySlug } = buildRefMaps(refArr);

  return questionsArr.map(q => {
    const out = { ...q, options: q.options?.map(o => ({ ...o })) ?? [] };

    // --- replace data based on inclusion of name/slug in the current string ---
    if (typeof out.data === "string") {
      const dataLc = out.data.toLowerCase();

      // try slug match first (e.g., ".../jump.png" includes "jump")
      let matchedVideo;
      for (const [slug, vid] of bySlug.entries()) {
        if (dataLc.includes(slug)) { matchedVideo = vid; break; }
      }
      // fallback: name inclusion
      if (!matchedVideo) {
        for (const [name, vid] of byName.entries()) {
          if (dataLc.includes(name)) { matchedVideo = vid; break; }
        }
      }
      if (matchedVideo) out.data = prefixVideo(matchedVideo);
    }

    // --- replace options[i].url using options[i].key === reference name (lowercased) ---
    out.options = out.options.map(opt => {
      const keyLc = opt.key?.toLowerCase?.();
      const vid = keyLc ? byName.get(keyLc) : undefined;
      return vid ? { ...opt, url: prefixVideo(vid) } : opt;
    });

    return out;
  });
}

// ---- run it ----
const result = transform(questions, reference);
console.log(JSON.stringify(result, null, 2));
