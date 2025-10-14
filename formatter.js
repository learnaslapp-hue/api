function transformQuizData(original) {
  return original.flatMap(catBlock => {
    const parentGroup = catBlock.group ?? null;

    return (catBlock.questions || []).map(q => {
      const {
        levelUid, // becomes id
        ...rest
      } = q;

      return {
        id: levelUid,              // use levelUid as id
        ...(parentGroup ? { group: parentGroup } : {}),
        ...rest                    // keep all other properties including level
      };
    });
  });
}

// ----- Example usage -----
const original = [
    {
      "category": "Animals",
      "group": "Identify the meaning (video)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Animals",
          "questionType": "single-video",
          "data": "assets/animals/bird.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/bird.png",
              "key": "Bird"
            },
            {
              "id": 2,
              "url": "assets/animals/rabbit.png",
              "key": "Rabbit"
            },
            {
              "id": 3,
              "url": "assets/animals/pig.png",
              "key": "Pig"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 1
        },
        {
          "name": "What does this sign mean?",
          "category": "Animals",
          "questionType": "single-video",
          "data": "assets/animals/monkey.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/monkey.png",
              "key": "Monkey"
            },
            {
              "id": 3,
              "url": "assets/animals/cat.png",
              "key": "Cat"
            },
            {
              "id": 2,
              "url": "assets/animals/horse.png",
              "key": "Horse"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 2
        },
        {
          "name": "What does this sign mean?",
          "category": "Animals",
          "questionType": "single-video",
          "data": "assets/animals/pig.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/pig.png",
              "key": "Pig"
            },
            {
              "id": 3,
              "url": "assets/animals/elephant.png",
              "key": "Elephant"
            },
            {
              "id": 2,
              "url": "assets/animals/cow.png",
              "key": "Cow"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 3
        },
        {
          "name": "What does this sign mean?",
          "category": "Animals",
          "questionType": "single-video",
          "data": "assets/animals/cat.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/animals/horse.png",
              "key": "Horse"
            },
            {
              "id": 3,
              "url": "assets/animals/dog.png",
              "key": "Dog"
            },
            {
              "id": 1,
              "url": "assets/animals/cat.png",
              "key": "Cat"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 4
        },
        {
          "name": "What does this sign mean?",
          "category": "Animals",
          "questionType": "single-video",
          "data": "assets/animals/elephant.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/animals/bear.png",
              "key": "Bear"
            },
            {
              "id": 3,
              "url": "assets/animals/lion.png",
              "key": "Lion"
            },
            {
              "id": 1,
              "url": "assets/animals/elephant.png",
              "key": "Elephant"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 5
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the meaning (image)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Animals",
          "questionType": "single-image",
          "data": "assets/animals/lion.png",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/lion.png",
              "key": "Lion"
            },
            {
              "id": 3,
              "url": "assets/animals/cat.png",
              "key": "Cat"
            },
            {
              "id": 2,
              "url": "assets/animals/pig.png",
              "key": "Pig"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 6
        },
        {
          "name": "What does this sign mean?",
          "category": "Animals",
          "questionType": "single-image",
          "data": "assets/animals/horse.png",
          "options": [
            {
              "id": 2,
              "url": "assets/animals/rabbit.png",
              "key": "Rabbit"
            },
            {
              "id": 1,
              "url": "assets/animals/horse.png",
              "key": "Horse"
            },
            {
              "id": 3,
              "url": "assets/animals/monkey.png",
              "key": "Monkey"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 7
        },
        {
          "name": "What does this sign mean?",
          "category": "Animals",
          "questionType": "single-image",
          "data": "assets/animals/bird.png",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/bird.png",
              "key": "Bird"
            },
            {
              "id": 2,
              "url": "assets/animals/cat.png",
              "key": "Cat"
            },
            {
              "id": 3,
              "url": "assets/animals/horse.png",
              "key": "Horse"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 8
        },
        {
          "name": "What does this sign mean?",
          "category": "Animals",
          "questionType": "single-image",
          "data": "assets/animals/bear.png",
          "options": [
            {
              "id": 3,
              "url": "assets/animals/fish.png",
              "key": "Fish"
            },
            {
              "id": 2,
              "url": "assets/animals/cat.png",
              "key": "Cat"
            },
            {
              "id": 1,
              "url": "assets/animals/bear.png",
              "key": "Bear"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 9
        },
        {
          "name": "What does this sign mean?",
          "category": "Animals",
          "questionType": "single-image",
          "data": "assets/animals/dog.png",
          "options": [
            {
              "id": 2,
              "url": "assets/animals/bear.png",
              "key": "Bear"
            },
            {
              "id": 1,
              "url": "assets/animals/dog.png",
              "key": "Dog"
            },
            {
              "id": 3,
              "url": "assets/animals/cat.png",
              "key": "Cat"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 10
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Meaning matching",
      "questions": [
        {
          "name": "Select the correct meaning of this sign",
          "category": "Animals",
          "questionType": "single-video",
          "data": "assets/animals/cow.mp4",
          "options": [
            {
              "id": 2,
              "key": "Horse"
            },
            {
              "id": 1,
              "key": "Cow"
            },
            {
              "id": 3,
              "key": "Lion"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 11
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Animals",
          "questionType": "single-video",
          "data": "assets/animals/horse.mp4",
          "options": [
            {
              "id": 1,
              "key": "Horse"
            },
            {
              "id": 3,
              "key": "Monkey"
            },
            {
              "id": 2,
              "key": "Bird"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 12
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Animals",
          "questionType": "single-image",
          "data": "assets/animals/rabbit.png",
          "options": [
            {
              "id": 2,
              "key": "Fish"
            },
            {
              "id": 1,
              "key": "Rabbit"
            },
            {
              "id": 3,
              "key": "Lion"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 13
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Animals",
          "questionType": "single-video",
          "data": "assets/animals/lion.mp4",
          "options": [
            {
              "id": 1,
              "key": "Lion"
            },
            {
              "id": 2,
              "key": "Elephant"
            },
            {
              "id": 3,
              "key": "Horse"
            }
          ],
          "correctOptionId": 1,
          "level": 12,
          "levelUid": 14
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Animals",
          "questionType": "single-image",
          "data": "assets/animals/monkey.png",
          "options": [
            {
              "id": 2,
              "key": "Elephant"
            },
            {
              "id": 1,
              "key": "Monkey"
            },
            {
              "id": 3,
              "key": "Rabbit"
            }
          ],
          "correctOptionId": 1,
          "level": 12,
          "levelUid": 15
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Yes or No",
      "questions": [
        {
          "name": "Is this 'Bird'?",
          "category": "Animals",
          "questionType": "single-video",
          "data": "assets/animals/bird.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 16
        },
        {
          "name": "Is this 'Horse'?",
          "category": "Animals",
          "questionType": "single-video",
          "data": "assets/animals/horse.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 17
        },
        {
          "name": "Is this 'Rabbit'?",
          "category": "Animals",
          "questionType": "single-image",
          "data": "assets/animals/rabbit.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 18
        },
        {
          "name": "Is this 'Pig'?",
          "category": "Animals",
          "questionType": "single-image",
          "data": "assets/animals/pig.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 19
        },
        {
          "name": "Is this 'Bird'?",
          "category": "Animals",
          "questionType": "single-image",
          "data": "assets/animals/bird.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 7,
          "levelUid": 20
        },
        {
          "name": "Is this 'Fish'?",
          "category": "Animals",
          "questionType": "single-video",
          "data": "assets/animals/fish.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 5,
          "levelUid": 21
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Odd one out (mixed media)",
      "questions": [
        {
          "name": "Which one means something different?",
          "category": "Animals",
          "questionType": "multiple-video",
          "data": [
            "assets/color/black.mp4",
            "assets/animals/elephant.mp4",
            "assets/animals/pig.mp4",
            "assets/animals/bird.mp4"
          ],
          "options": [
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 1,
              "key": "1st"
            }
          ],
          "correctOptionId": 1,
          "level": 12,
          "levelUid": 22
        },
        {
          "name": "Which one means something different?",
          "category": "Animals",
          "questionType": "multiple-video",
          "data": [
            "assets/animals/cat.mp4",
            "assets/animals/elephant.mp4",
            "assets/color/black.mp4",
            "assets/animals/monkey.mp4"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 4,
              "key": "4th"
            }
          ],
          "correctOptionId": 3,
          "level": 14,
          "levelUid": 23
        },
        {
          "name": "Which one means something different?",
          "category": "Animals",
          "questionType": "multiple-image",
          "data": [
            "assets/animals/pig.png",
            "assets/animals/bear.png",
            "assets/animals/monkey.png",
            "assets/numbers/6.png"
          ],
          "options": [
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 1,
              "key": "1st"
            }
          ],
          "correctOptionId": 4,
          "level": 14,
          "levelUid": 24
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the correct sign (image options)",
      "questions": [
        {
          "name": "Which of these signs means 'Horse'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Horse'?",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/horse.png",
              "key": "Horse"
            },
            {
              "id": 3,
              "url": "assets/animals/lion.png",
              "key": "Lion"
            },
            {
              "id": 2,
              "url": "assets/animals/cow.png",
              "key": "Cow"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 25
        },
        {
          "name": "Which of these signs means 'Cat'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Cat'?",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/cat.png",
              "key": "Cat"
            },
            {
              "id": 3,
              "url": "assets/animals/lion.png",
              "key": "Lion"
            },
            {
              "id": 2,
              "url": "assets/animals/cow.png",
              "key": "Cow"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 26
        },
        {
          "name": "Which of these signs means 'Dog'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Dog'?",
          "options": [
            {
              "id": 2,
              "url": "assets/animals/rabbit.png",
              "key": "Rabbit"
            },
            {
              "id": 3,
              "url": "assets/animals/horse.png",
              "key": "Horse"
            },
            {
              "id": 1,
              "url": "assets/animals/dog.png",
              "key": "Dog"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 27
        },
        {
          "name": "Which of these signs means 'Elephant'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Elephant'?",
          "options": [
            {
              "id": 3,
              "url": "assets/animals/pig.png",
              "key": "Pig"
            },
            {
              "id": 2,
              "url": "assets/animals/rabbit.png",
              "key": "Rabbit"
            },
            {
              "id": 1,
              "url": "assets/animals/elephant.png",
              "key": "Elephant"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 28
        },
        {
          "name": "Which of these signs means 'Fish'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Fish'?",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/fish.png",
              "key": "Fish"
            },
            {
              "id": 3,
              "url": "assets/animals/bird.png",
              "key": "Bird"
            },
            {
              "id": 2,
              "url": "assets/animals/pig.png",
              "key": "Pig"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 29
        },
        {
          "name": "Which of these signs means 'Bear'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Bear'?",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/bear.png",
              "key": "Bear"
            },
            {
              "id": 2,
              "url": "assets/animals/dog.png",
              "key": "Dog"
            },
            {
              "id": 3,
              "url": "assets/animals/fish.png",
              "key": "Fish"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 30
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Identify the meaning (video)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/hello.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            },
            {
              "id": 1,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            },
            {
              "id": 2,
              "url": "assets/basic-words/sorry.png",
              "key": "Sorry"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 31
        },
        {
          "name": "What does this sign mean?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/thank-you.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/thank-you.png",
              "key": "Thank you"
            },
            {
              "id": 2,
              "url": "assets/basic-words/yes.png",
              "key": "Yes"
            },
            {
              "id": 3,
              "url": "assets/basic-words/sorry.png",
              "key": "Sorry"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 32
        },
        {
          "name": "What does this sign mean?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/yes.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/yes.png",
              "key": "Yes"
            },
            {
              "id": 3,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            },
            {
              "id": 2,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            }
          ],
          "correctOptionId": 1,
          "level": 3,
          "levelUid": 33
        },
        {
          "name": "What does this sign mean?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/please.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            },
            {
              "id": 3,
              "url": "assets/basic-words/no.png",
              "key": "No"
            },
            {
              "id": 2,
              "url": "assets/basic-words/thank-you.png",
              "key": "Thank you"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 34
        },
        {
          "name": "What does this sign mean?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/no.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/basic-words/sorry.png",
              "key": "Sorry"
            },
            {
              "id": 1,
              "url": "assets/basic-words/no.png",
              "key": "No"
            },
            {
              "id": 2,
              "url": "assets/basic-words/yes.png",
              "key": "Yes"
            }
          ],
          "correctOptionId": 1,
          "level": 3,
          "levelUid": 35
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Identify the meaning (image)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/please.png",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            },
            {
              "id": 3,
              "url": "assets/basic-words/sorry.png",
              "key": "Sorry"
            },
            {
              "id": 2,
              "url": "assets/basic-words/no.png",
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 36
        },
        {
          "name": "What does this sign mean?",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/sorry.png",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/sorry.png",
              "key": "Sorry"
            },
            {
              "id": 2,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            },
            {
              "id": 3,
              "url": "assets/basic-words/no.png",
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 37
        },
        {
          "name": "What does this sign mean?",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/no.png",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/no.png",
              "key": "No"
            },
            {
              "id": 2,
              "url": "assets/basic-words/thank-you.png",
              "key": "Thank you"
            },
            {
              "id": 3,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            }
          ],
          "correctOptionId": 1,
          "level": 3,
          "levelUid": 38
        },
        {
          "name": "What does this sign mean?",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/thank-you.png",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/thank-you.png",
              "key": "Thank you"
            },
            {
              "id": 2,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            },
            {
              "id": 3,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 39
        },
        {
          "name": "What does this sign mean?",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/hello.png",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            },
            {
              "id": 2,
              "url": "assets/basic-words/no.png",
              "key": "No"
            },
            {
              "id": 3,
              "url": "assets/basic-words/thank-you.png",
              "key": "Thank you"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 40
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Meaning matching",
      "questions": [
        {
          "name": "Select the correct meaning of this sign",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/thank-you.png",
          "options": [
            {
              "id": 1,
              "key": "Thank you"
            },
            {
              "id": 3,
              "key": "Please"
            },
            {
              "id": 2,
              "key": "Yes"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 41
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/hello.png",
          "options": [
            {
              "id": 2,
              "key": "Sorry"
            },
            {
              "id": 3,
              "key": "Please"
            },
            {
              "id": 1,
              "key": "Hello"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 42
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/sorry.png",
          "options": [
            {
              "id": 3,
              "key": "Please"
            },
            {
              "id": 2,
              "key": "Hello"
            },
            {
              "id": 1,
              "key": "Sorry"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 43
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/no.png",
          "options": [
            {
              "id": 1,
              "key": "No"
            },
            {
              "id": 2,
              "key": "Thank you"
            },
            {
              "id": 3,
              "key": "Yes"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 44
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/please.png",
          "options": [
            {
              "id": 1,
              "key": "Please"
            },
            {
              "id": 3,
              "key": "No"
            },
            {
              "id": 2,
              "key": "Hello"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 45
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Yes or No",
      "questions": [
        {
          "name": "Is this 'Please'?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/please.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 46
        },
        {
          "name": "Is this 'Hello'?",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/hello.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 47
        },
        {
          "name": "Is this 'No'?",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/no.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 3,
          "levelUid": 48
        },
        {
          "name": "Is this 'Thank you'?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/thank-you.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 49
        },
        {
          "name": "Is this 'Thank you'?",
          "category": "Basic Words",
          "questionType": "single-image",
          "data": "assets/basic-words/thank-you.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 8,
          "levelUid": 50
        },
        {
          "name": "Is this 'Sorry'?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/sorry.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 7,
          "levelUid": 51
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Odd one out (mixed media)",
      "questions": [
        {
          "name": "Which one means something different?",
          "category": "Basic Words",
          "questionType": "multiple-video",
          "data": [
            "assets/numbers/9.mp4",
            "assets/basic-words/yes.mp4",
            "assets/basic-words/please.mp4",
            "assets/basic-words/thank-you.mp4"
          ],
          "options": [
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            }
          ],
          "correctOptionId": 1,
          "level": 12,
          "levelUid": 52
        },
        {
          "name": "Which one means something different?",
          "category": "Basic Words",
          "questionType": "multiple-image",
          "data": [
            "assets/basic-words/hello.png",
            "assets/basic-words/yes.png",
            "assets/basic-words/thank-you.png",
            "assets/relationships/doctor.png"
          ],
          "options": [
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            }
          ],
          "correctOptionId": 4,
          "level": 11,
          "levelUid": 53
        },
        {
          "name": "Which one means something different?",
          "category": "Basic Words",
          "questionType": "multiple-video",
          "data": [
            "assets/places-and-directions/down.mp4",
            "assets/basic-words/thank-you.mp4",
            "assets/basic-words/please.mp4",
            "assets/basic-words/no.mp4"
          ],
          "options": [
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 3,
              "key": "3rd"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 54
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Identify the correct sign (image options)",
      "questions": [
        {
          "name": "Which of these signs means 'Thank you'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "Which of these signs means 'Thank you'?",
          "options": [
            {
              "id": 2,
              "url": "assets/basic-words/no.png",
              "key": "No"
            },
            {
              "id": 1,
              "url": "assets/basic-words/thank-you.png",
              "key": "Thank you"
            },
            {
              "id": 3,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 55
        },
        {
          "name": "Which of these signs means 'Please'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "Which of these signs means 'Please'?",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            },
            {
              "id": 2,
              "url": "assets/basic-words/sorry.png",
              "key": "Sorry"
            },
            {
              "id": 3,
              "url": "assets/basic-words/yes.png",
              "key": "Yes"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 56
        },
        {
          "name": "Which of these signs means 'Yes'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "Which of these signs means 'Yes'?",
          "options": [
            {
              "id": 3,
              "url": "assets/basic-words/no.png",
              "key": "No"
            },
            {
              "id": 1,
              "url": "assets/basic-words/yes.png",
              "key": "Yes"
            },
            {
              "id": 2,
              "url": "assets/basic-words/sorry.png",
              "key": "Sorry"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 57
        },
        {
          "name": "Which of these signs means 'Sorry'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "Which of these signs means 'Sorry'?",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/sorry.png",
              "key": "Sorry"
            },
            {
              "id": 3,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            },
            {
              "id": 2,
              "url": "assets/basic-words/yes.png",
              "key": "Yes"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 58
        },
        {
          "name": "Which of these signs means 'No'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "Which of these signs means 'No'?",
          "options": [
            {
              "id": 2,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            },
            {
              "id": 3,
              "url": "assets/basic-words/thank-you.png",
              "key": "Thank you"
            },
            {
              "id": 1,
              "url": "assets/basic-words/no.png",
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 59
        },
        {
          "name": "Which of these signs means 'Hello'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "Which of these signs means 'Hello'?",
          "options": [
            {
              "id": 3,
              "url": "assets/basic-words/yes.png",
              "key": "Yes"
            },
            {
              "id": 2,
              "url": "assets/basic-words/no.png",
              "key": "No"
            },
            {
              "id": 1,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 60
        }
      ]
    },
    {
      "category": "Color",
      "group": "Identify the meaning (video)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/blue.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/color/pink.png",
              "key": "Pink"
            },
            {
              "id": 2,
              "url": "assets/color/purple.png",
              "key": "Purple"
            },
            {
              "id": 1,
              "url": "assets/color/blue.png",
              "key": "Blue"
            }
          ],
          "correctOptionId": 1,
          "level": 3,
          "levelUid": 61
        },
        {
          "name": "What does this sign mean?",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/white.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/color/black.png",
              "key": "Black"
            },
            {
              "id": 1,
              "url": "assets/color/white.png",
              "key": "White"
            },
            {
              "id": 2,
              "url": "assets/color/purple.png",
              "key": "Purple"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 62
        },
        {
          "name": "What does this sign mean?",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/purple.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/color/red.png",
              "key": "Red"
            },
            {
              "id": 1,
              "url": "assets/color/purple.png",
              "key": "Purple"
            },
            {
              "id": 2,
              "url": "assets/color/orange.png",
              "key": "Orange"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 63
        },
        {
          "name": "What does this sign mean?",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/gray.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/color/blue.png",
              "key": "Blue"
            },
            {
              "id": 1,
              "url": "assets/color/gray.png",
              "key": "Gray"
            },
            {
              "id": 2,
              "url": "assets/color/purple.png",
              "key": "Purple"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 64
        },
        {
          "name": "What does this sign mean?",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/black.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/color/black.png",
              "key": "Black"
            },
            {
              "id": 2,
              "url": "assets/color/purple.png",
              "key": "Purple"
            },
            {
              "id": 3,
              "url": "assets/color/brown.png",
              "key": "Brown"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 65
        }
      ]
    },
    {
      "category": "Color",
      "group": "Identify the meaning (image)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Color",
          "questionType": "single-image",
          "data": "assets/color/white.png",
          "options": [
            {
              "id": 2,
              "url": "assets/color/brown.png",
              "key": "Brown"
            },
            {
              "id": 1,
              "url": "assets/color/white.png",
              "key": "White"
            },
            {
              "id": 3,
              "url": "assets/color/gray.png",
              "key": "Gray"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 66
        },
        {
          "name": "What does this sign mean?",
          "category": "Color",
          "questionType": "single-image",
          "data": "assets/color/pink.png",
          "options": [
            {
              "id": 3,
              "url": "assets/color/gray.png",
              "key": "Gray"
            },
            {
              "id": 1,
              "url": "assets/color/pink.png",
              "key": "Pink"
            },
            {
              "id": 2,
              "url": "assets/color/green.png",
              "key": "Green"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 67
        },
        {
          "name": "What does this sign mean?",
          "category": "Color",
          "questionType": "single-image",
          "data": "assets/color/purple.png",
          "options": [
            {
              "id": 3,
              "url": "assets/color/brown.png",
              "key": "Brown"
            },
            {
              "id": 1,
              "url": "assets/color/purple.png",
              "key": "Purple"
            },
            {
              "id": 2,
              "url": "assets/color/green.png",
              "key": "Green"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 68
        },
        {
          "name": "What does this sign mean?",
          "category": "Color",
          "questionType": "single-image",
          "data": "assets/color/yellow.png",
          "options": [
            {
              "id": 1,
              "url": "assets/color/yellow.png",
              "key": "Yellow"
            },
            {
              "id": 3,
              "url": "assets/color/pink.png",
              "key": "Pink"
            },
            {
              "id": 2,
              "url": "assets/color/white.png",
              "key": "White"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 69
        },
        {
          "name": "What does this sign mean?",
          "category": "Color",
          "questionType": "single-image",
          "data": "assets/color/blue.png",
          "options": [
            {
              "id": 2,
              "url": "assets/color/black.png",
              "key": "Black"
            },
            {
              "id": 1,
              "url": "assets/color/blue.png",
              "key": "Blue"
            },
            {
              "id": 3,
              "url": "assets/color/gray.png",
              "key": "Gray"
            }
          ],
          "correctOptionId": 1,
          "level": 3,
          "levelUid": 70
        }
      ]
    },
    {
      "category": "Color",
      "group": "Meaning matching",
      "questions": [
        {
          "name": "Select the correct meaning of this sign",
          "category": "Color",
          "questionType": "single-image",
          "data": "assets/color/yellow.png",
          "options": [
            {
              "id": 1,
              "key": "Yellow"
            },
            {
              "id": 3,
              "key": "Red"
            },
            {
              "id": 2,
              "key": "Brown"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 71
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/orange.mp4",
          "options": [
            {
              "id": 1,
              "key": "Orange"
            },
            {
              "id": 2,
              "key": "White"
            },
            {
              "id": 3,
              "key": "Blue"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 72
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/gray.mp4",
          "options": [
            {
              "id": 1,
              "key": "Gray"
            },
            {
              "id": 3,
              "key": "Brown"
            },
            {
              "id": 2,
              "key": "Orange"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 73
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/purple.mp4",
          "options": [
            {
              "id": 1,
              "key": "Purple"
            },
            {
              "id": 2,
              "key": "Blue"
            },
            {
              "id": 3,
              "key": "Red"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 74
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/blue.mp4",
          "options": [
            {
              "id": 1,
              "key": "Blue"
            },
            {
              "id": 2,
              "key": "Red"
            },
            {
              "id": 3,
              "key": "Pink"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 75
        }
      ]
    },
    {
      "category": "Color",
      "group": "Yes or No",
      "questions": [
        {
          "name": "Is this 'Pink'?",
          "category": "Color",
          "questionType": "single-image",
          "data": "assets/color/pink.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 76
        },
        {
          "name": "Is this 'Red'?",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/red.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 3,
          "levelUid": 77
        },
        {
          "name": "Is this 'Gray'?",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/gray.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 78
        },
        {
          "name": "Is this 'Yellow'?",
          "category": "Color",
          "questionType": "single-image",
          "data": "assets/color/yellow.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 79
        },
        {
          "name": "Is this 'Yellow'?",
          "category": "Color",
          "questionType": "single-image",
          "data": "assets/color/yellow.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 10,
          "levelUid": 80
        },
        {
          "name": "Is this 'Purple'?",
          "category": "Color",
          "questionType": "single-video",
          "data": "assets/color/purple.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 10,
          "levelUid": 81
        }
      ]
    },
    {
      "category": "Color",
      "group": "Odd one out (mixed media)",
      "questions": [
        {
          "name": "Which one means something different?",
          "category": "Color",
          "questionType": "multiple-video",
          "data": [
            "assets/color/gray.mp4",
            "assets/color/brown.mp4",
            "assets/months/august.mp4",
            "assets/color/purple.mp4"
          ],
          "options": [
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            }
          ],
          "correctOptionId": 3,
          "level": 13,
          "levelUid": 82
        },
        {
          "name": "Which one means something different?",
          "category": "Color",
          "questionType": "multiple-image",
          "data": [
            "assets/color/brown.png",
            "assets/color/blue.png",
            "assets/basic-words/no.png",
            "assets/color/white.png"
          ],
          "options": [
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            }
          ],
          "correctOptionId": 3,
          "level": 11,
          "levelUid": 83
        },
        {
          "name": "Which one means something different?",
          "category": "Color",
          "questionType": "multiple-video",
          "data": [
            "assets/color/black.mp4",
            "assets/color/purple.mp4",
            "assets/places-and-directions/park.mp4",
            "assets/color/green.mp4"
          ],
          "options": [
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            }
          ],
          "correctOptionId": 3,
          "level": 13,
          "levelUid": 84
        }
      ]
    },
    {
      "category": "Color",
      "group": "Identify the correct sign (image options)",
      "questions": [
        {
          "name": "Which of these signs means 'White'?",
          "category": "Color",
          "questionType": "text",
          "data": "Which of these signs means 'White'?",
          "options": [
            {
              "id": 2,
              "url": "assets/color/red.png",
              "key": "Red"
            },
            {
              "id": 1,
              "url": "assets/color/white.png",
              "key": "White"
            },
            {
              "id": 3,
              "url": "assets/color/gray.png",
              "key": "Gray"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 85
        },
        {
          "name": "Which of these signs means 'Red'?",
          "category": "Color",
          "questionType": "text",
          "data": "Which of these signs means 'Red'?",
          "options": [
            {
              "id": 3,
              "url": "assets/color/blue.png",
              "key": "Blue"
            },
            {
              "id": 2,
              "url": "assets/color/gray.png",
              "key": "Gray"
            },
            {
              "id": 1,
              "url": "assets/color/red.png",
              "key": "Red"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 86
        },
        {
          "name": "Which of these signs means 'Green'?",
          "category": "Color",
          "questionType": "text",
          "data": "Which of these signs means 'Green'?",
          "options": [
            {
              "id": 1,
              "url": "assets/color/green.png",
              "key": "Green"
            },
            {
              "id": 2,
              "url": "assets/color/purple.png",
              "key": "Purple"
            },
            {
              "id": 3,
              "url": "assets/color/red.png",
              "key": "Red"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 87
        },
        {
          "name": "Which of these signs means 'Brown'?",
          "category": "Color",
          "questionType": "text",
          "data": "Which of these signs means 'Brown'?",
          "options": [
            {
              "id": 3,
              "url": "assets/color/red.png",
              "key": "Red"
            },
            {
              "id": 1,
              "url": "assets/color/brown.png",
              "key": "Brown"
            },
            {
              "id": 2,
              "url": "assets/color/pink.png",
              "key": "Pink"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 88
        },
        {
          "name": "Which of these signs means 'Pink'?",
          "category": "Color",
          "questionType": "text",
          "data": "Which of these signs means 'Pink'?",
          "options": [
            {
              "id": 2,
              "url": "assets/color/green.png",
              "key": "Green"
            },
            {
              "id": 1,
              "url": "assets/color/pink.png",
              "key": "Pink"
            },
            {
              "id": 3,
              "url": "assets/color/black.png",
              "key": "Black"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 89
        },
        {
          "name": "Which of these signs means 'Gray'?",
          "category": "Color",
          "questionType": "text",
          "data": "Which of these signs means 'Gray'?",
          "options": [
            {
              "id": 1,
              "url": "assets/color/gray.png",
              "key": "Gray"
            },
            {
              "id": 2,
              "url": "assets/color/red.png",
              "key": "Red"
            },
            {
              "id": 3,
              "url": "assets/color/yellow.png",
              "key": "Yellow"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 90
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the meaning (video)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Day",
          "questionType": "single-video",
          "data": "assets/day/sunday.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 2,
              "url": "assets/day/friday.png",
              "key": "Friday"
            },
            {
              "id": 3,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 91
        },
        {
          "name": "What does this sign mean?",
          "category": "Day",
          "questionType": "single-video",
          "data": "assets/day/saturday.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 2,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            },
            {
              "id": 1,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 92
        },
        {
          "name": "What does this sign mean?",
          "category": "Day",
          "questionType": "single-video",
          "data": "assets/day/thursday.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 1,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            },
            {
              "id": 3,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 93
        },
        {
          "name": "What does this sign mean?",
          "category": "Day",
          "questionType": "single-video",
          "data": "assets/day/wednesday.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/day/monday.png",
              "key": "Monday"
            },
            {
              "id": 1,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 2,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 94
        },
        {
          "name": "What does this sign mean?",
          "category": "Day",
          "questionType": "single-video",
          "data": "assets/day/monday.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            },
            {
              "id": 3,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            },
            {
              "id": 1,
              "url": "assets/day/monday.png",
              "key": "Monday"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 95
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the meaning (image)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Day",
          "questionType": "single-image",
          "data": "assets/day/sunday.png",
          "options": [
            {
              "id": 1,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 3,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            },
            {
              "id": 2,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 96
        },
        {
          "name": "What does this sign mean?",
          "category": "Day",
          "questionType": "single-image",
          "data": "assets/day/thursday.png",
          "options": [
            {
              "id": 2,
              "url": "assets/day/monday.png",
              "key": "Monday"
            },
            {
              "id": 3,
              "url": "assets/day/tuesday.png",
              "key": "Tuesday"
            },
            {
              "id": 1,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 97
        },
        {
          "name": "What does this sign mean?",
          "category": "Day",
          "questionType": "single-image",
          "data": "assets/day/friday.png",
          "options": [
            {
              "id": 1,
              "url": "assets/day/friday.png",
              "key": "Friday"
            },
            {
              "id": 2,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 3,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 98
        },
        {
          "name": "What does this sign mean?",
          "category": "Day",
          "questionType": "single-image",
          "data": "assets/day/wednesday.png",
          "options": [
            {
              "id": 2,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            },
            {
              "id": 1,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 3,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 99
        },
        {
          "name": "What does this sign mean?",
          "category": "Day",
          "questionType": "single-image",
          "data": "assets/day/saturday.png",
          "options": [
            {
              "id": 3,
              "url": "assets/day/friday.png",
              "key": "Friday"
            },
            {
              "id": 1,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            },
            {
              "id": 2,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 100
        }
      ]
    },
    {
      "category": "Day",
      "group": "Meaning matching",
      "questions": [
        {
          "name": "Select the correct meaning of this sign",
          "category": "Day",
          "questionType": "single-video",
          "data": "assets/day/tuesday.mp4",
          "options": [
            {
              "id": 3,
              "key": "Sunday"
            },
            {
              "id": 1,
              "key": "Tuesday"
            },
            {
              "id": 2,
              "key": "Thursday"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 101
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Day",
          "questionType": "single-image",
          "data": "assets/day/saturday.png",
          "options": [
            {
              "id": 1,
              "key": "Saturday"
            },
            {
              "id": 2,
              "key": "Friday"
            },
            {
              "id": 3,
              "key": "Tuesday"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 102
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Day",
          "questionType": "single-video",
          "data": "assets/day/wednesday.mp4",
          "options": [
            {
              "id": 3,
              "key": "Thursday"
            },
            {
              "id": 2,
              "key": "Friday"
            },
            {
              "id": 1,
              "key": "Wednesday"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 103
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Day",
          "questionType": "single-image",
          "data": "assets/day/sunday.png",
          "options": [
            {
              "id": 2,
              "key": "Tuesday"
            },
            {
              "id": 3,
              "key": "Saturday"
            },
            {
              "id": 1,
              "key": "Sunday"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 104
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Day",
          "questionType": "single-image",
          "data": "assets/day/thursday.png",
          "options": [
            {
              "id": 2,
              "key": "Wednesday"
            },
            {
              "id": 1,
              "key": "Thursday"
            },
            {
              "id": 3,
              "key": "Saturday"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 105
        }
      ]
    },
    {
      "category": "Day",
      "group": "Yes or No",
      "questions": [
        {
          "name": "Is this 'Saturday'?",
          "category": "Day",
          "questionType": "single-video",
          "data": "assets/day/saturday.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 106
        },
        {
          "name": "Is this 'Tuesday'?",
          "category": "Day",
          "questionType": "single-video",
          "data": "assets/day/tuesday.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 107
        },
        {
          "name": "Is this 'Friday'?",
          "category": "Day",
          "questionType": "single-video",
          "data": "assets/day/friday.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 108
        },
        {
          "name": "Is this 'Wednesday'?",
          "category": "Day",
          "questionType": "single-image",
          "data": "assets/day/wednesday.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 109
        },
        {
          "name": "Is this 'Sunday'?",
          "category": "Day",
          "questionType": "single-image",
          "data": "assets/day/sunday.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 5,
          "levelUid": 110
        },
        {
          "name": "Is this 'Friday'?",
          "category": "Day",
          "questionType": "single-video",
          "data": "assets/day/friday.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 4,
          "levelUid": 111
        }
      ]
    },
    {
      "category": "Day",
      "group": "Odd one out (mixed media)",
      "questions": [
        {
          "name": "Which one means something different?",
          "category": "Day",
          "questionType": "multiple-image",
          "data": [
            "assets/day/saturday.png",
            "assets/day/sunday.png",
            "assets/day/tuesday.png",
            "assets/numbers/4.png"
          ],
          "options": [
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 1,
              "key": "1st"
            }
          ],
          "correctOptionId": 4,
          "level": 11,
          "levelUid": 112
        },
        {
          "name": "Which one means something different?",
          "category": "Day",
          "questionType": "multiple-image",
          "data": [
            "assets/places-and-directions/home.png",
            "assets/day/wednesday.png",
            "assets/day/saturday.png",
            "assets/day/thursday.png"
          ],
          "options": [
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 2,
              "key": "2nd"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 113
        },
        {
          "name": "Which one means something different?",
          "category": "Day",
          "questionType": "multiple-video",
          "data": [
            "assets/day/tuesday.mp4",
            "assets/day/thursday.mp4",
            "assets/basic-words/sorry.mp4",
            "assets/day/monday.mp4"
          ],
          "options": [
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 2,
              "key": "2nd"
            }
          ],
          "correctOptionId": 3,
          "level": 11,
          "levelUid": 114
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options)",
      "questions": [
        {
          "name": "Which of these signs means 'Tuesday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Tuesday'?",
          "options": [
            {
              "id": 1,
              "url": "assets/day/tuesday.png",
              "key": "Tuesday"
            },
            {
              "id": 2,
              "url": "assets/day/monday.png",
              "key": "Monday"
            },
            {
              "id": 3,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 115
        },
        {
          "name": "Which of these signs means 'Sunday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Sunday'?",
          "options": [
            {
              "id": 1,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 3,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            },
            {
              "id": 2,
              "url": "assets/day/friday.png",
              "key": "Friday"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 116
        },
        {
          "name": "Which of these signs means 'Thursday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Thursday'?",
          "options": [
            {
              "id": 1,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            },
            {
              "id": 2,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 3,
              "url": "assets/day/monday.png",
              "key": "Monday"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 117
        },
        {
          "name": "Which of these signs means 'Wednesday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Wednesday'?",
          "options": [
            {
              "id": 2,
              "url": "assets/day/monday.png",
              "key": "Monday"
            },
            {
              "id": 1,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 3,
              "url": "assets/day/friday.png",
              "key": "Friday"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 118
        },
        {
          "name": "Which of these signs means 'Saturday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Saturday'?",
          "options": [
            {
              "id": 2,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 3,
              "url": "assets/day/tuesday.png",
              "key": "Tuesday"
            },
            {
              "id": 1,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 119
        },
        {
          "name": "Which of these signs means 'Monday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Monday'?",
          "options": [
            {
              "id": 1,
              "url": "assets/day/monday.png",
              "key": "Monday"
            },
            {
              "id": 2,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 3,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 120
        }
      ]
    },
    {
      "category": "Emotions",
      "group": "Identify the meaning (video)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/angry.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/emotions/angry.png",
              "key": "Angry"
            },
            {
              "id": 2,
              "url": "assets/emotions/tired.png",
              "key": "Tired"
            },
            {
              "id": 3,
              "url": "assets/emotions/loved.png",
              "key": "Loved"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 121
        },
        {
          "name": "What does this sign mean?",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/confused.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/emotions/confused.png",
              "key": "Confused"
            },
            {
              "id": 3,
              "url": "assets/emotions/surprised.png",
              "key": "Surprised"
            },
            {
              "id": 2,
              "url": "assets/emotions/sad.png",
              "key": "Sad"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 122
        },
        {
          "name": "What does this sign mean?",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/tired.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/emotions/happy.png",
              "key": "Happy"
            },
            {
              "id": 1,
              "url": "assets/emotions/tired.png",
              "key": "Tired"
            },
            {
              "id": 2,
              "url": "assets/emotions/worried.png",
              "key": "Worried"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 123
        },
        {
          "name": "What does this sign mean?",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/surprised.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/emotions/surprised.png",
              "key": "Surprised"
            },
            {
              "id": 2,
              "url": "assets/emotions/angry.png",
              "key": "Angry"
            },
            {
              "id": 3,
              "url": "assets/emotions/loved.png",
              "key": "Loved"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 124
        },
        {
          "name": "What does this sign mean?",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/sad.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/emotions/sad.png",
              "key": "Sad"
            },
            {
              "id": 2,
              "url": "assets/emotions/loved.png",
              "key": "Loved"
            },
            {
              "id": 3,
              "url": "assets/emotions/proud.png",
              "key": "Proud"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 125
        }
      ]
    },
    {
      "category": "Emotions",
      "group": "Identify the meaning (image)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Emotions",
          "questionType": "single-image",
          "data": "assets/emotions/sad.png",
          "options": [
            {
              "id": 2,
              "url": "assets/emotions/surprised.png",
              "key": "Surprised"
            },
            {
              "id": 1,
              "url": "assets/emotions/sad.png",
              "key": "Sad"
            },
            {
              "id": 3,
              "url": "assets/emotions/confused.png",
              "key": "Confused"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 126
        },
        {
          "name": "What does this sign mean?",
          "category": "Emotions",
          "questionType": "single-image",
          "data": "assets/emotions/surprised.png",
          "options": [
            {
              "id": 1,
              "url": "assets/emotions/surprised.png",
              "key": "Surprised"
            },
            {
              "id": 3,
              "url": "assets/emotions/confused.png",
              "key": "Confused"
            },
            {
              "id": 2,
              "url": "assets/emotions/tired.png",
              "key": "Tired"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 127
        },
        {
          "name": "What does this sign mean?",
          "category": "Emotions",
          "questionType": "single-image",
          "data": "assets/emotions/loved.png",
          "options": [
            {
              "id": 2,
              "url": "assets/emotions/sad.png",
              "key": "Sad"
            },
            {
              "id": 3,
              "url": "assets/emotions/tired.png",
              "key": "Tired"
            },
            {
              "id": 1,
              "url": "assets/emotions/loved.png",
              "key": "Loved"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 128
        },
        {
          "name": "What does this sign mean?",
          "category": "Emotions",
          "questionType": "single-image",
          "data": "assets/emotions/tired.png",
          "options": [
            {
              "id": 3,
              "url": "assets/emotions/confused.png",
              "key": "Confused"
            },
            {
              "id": 1,
              "url": "assets/emotions/tired.png",
              "key": "Tired"
            },
            {
              "id": 2,
              "url": "assets/emotions/proud.png",
              "key": "Proud"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 129
        },
        {
          "name": "What does this sign mean?",
          "category": "Emotions",
          "questionType": "single-image",
          "data": "assets/emotions/proud.png",
          "options": [
            {
              "id": 3,
              "url": "assets/emotions/excited.png",
              "key": "Excited"
            },
            {
              "id": 1,
              "url": "assets/emotions/proud.png",
              "key": "Proud"
            },
            {
              "id": 2,
              "url": "assets/emotions/tired.png",
              "key": "Tired"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 130
        }
      ]
    },
    {
      "category": "Emotions",
      "group": "Meaning matching",
      "questions": [
        {
          "name": "Select the correct meaning of this sign",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/surprised.mp4",
          "options": [
            {
              "id": 2,
              "key": "Worried"
            },
            {
              "id": 3,
              "key": "Tired"
            },
            {
              "id": 1,
              "key": "Surprised"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 131
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/proud.mp4",
          "options": [
            {
              "id": 1,
              "key": "Proud"
            },
            {
              "id": 2,
              "key": "Happy"
            },
            {
              "id": 3,
              "key": "Excited"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 132
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Emotions",
          "questionType": "single-image",
          "data": "assets/emotions/loved.png",
          "options": [
            {
              "id": 1,
              "key": "Loved"
            },
            {
              "id": 2,
              "key": "Angry"
            },
            {
              "id": 3,
              "key": "Excited"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 133
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/excited.mp4",
          "options": [
            {
              "id": 3,
              "key": "Happy"
            },
            {
              "id": 1,
              "key": "Excited"
            },
            {
              "id": 2,
              "key": "Confused"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 134
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Emotions",
          "questionType": "single-image",
          "data": "assets/emotions/angry.png",
          "options": [
            {
              "id": 1,
              "key": "Angry"
            },
            {
              "id": 2,
              "key": "Loved"
            },
            {
              "id": 3,
              "key": "Surprised"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 135
        }
      ]
    },
    {
      "category": "Emotions",
      "group": "Yes or No",
      "questions": [
        {
          "name": "Is this 'Happy'?",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/happy.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 136
        },
        {
          "name": "Is this 'Angry'?",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/angry.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 137
        },
        {
          "name": "Is this 'Excited'?",
          "category": "Emotions",
          "questionType": "single-image",
          "data": "assets/emotions/excited.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 138
        },
        {
          "name": "Is this 'Proud'?",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/proud.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 139
        },
        {
          "name": "Is this 'Tired'?",
          "category": "Emotions",
          "questionType": "single-image",
          "data": "assets/emotions/tired.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 6,
          "levelUid": 140
        },
        {
          "name": "Is this 'Confused'?",
          "category": "Emotions",
          "questionType": "single-video",
          "data": "assets/emotions/confused.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 9,
          "levelUid": 141
        }
      ]
    },
    {
      "category": "Emotions",
      "group": "Odd one out (mixed media)",
      "questions": [
        {
          "name": "Which one means something different?",
          "category": "Emotions",
          "questionType": "multiple-video",
          "data": [
            "assets/animals/elephant.mp4",
            "assets/emotions/worried.mp4",
            "assets/emotions/proud.mp4",
            "assets/emotions/loved.mp4"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 2,
              "key": "2nd"
            }
          ],
          "correctOptionId": 1,
          "level": 14,
          "levelUid": 142
        },
        {
          "name": "Which one means something different?",
          "category": "Emotions",
          "questionType": "multiple-video",
          "data": [
            "assets/emotions/happy.mp4",
            "assets/emotions/proud.mp4",
            "assets/emotions/angry.mp4",
            "assets/numbers/9.mp4"
          ],
          "options": [
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            }
          ],
          "correctOptionId": 4,
          "level": 12,
          "levelUid": 143
        },
        {
          "name": "Which one means something different?",
          "category": "Emotions",
          "questionType": "multiple-video",
          "data": [
            "assets/emotions/angry.mp4",
            "assets/animals/horse.mp4",
            "assets/emotions/tired.mp4",
            "assets/emotions/surprised.mp4"
          ],
          "options": [
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 3,
              "key": "3rd"
            }
          ],
          "correctOptionId": 2,
          "level": 13,
          "levelUid": 144
        }
      ]
    },
    {
      "category": "Emotions",
      "group": "Identify the correct sign (image options)",
      "questions": [
        {
          "name": "Which of these signs means 'Happy'?",
          "category": "Emotions",
          "questionType": "text",
          "data": "Which of these signs means 'Happy'?",
          "options": [
            {
              "id": 1,
              "url": "assets/emotions/happy.png",
              "key": "Happy"
            },
            {
              "id": 2,
              "url": "assets/emotions/proud.png",
              "key": "Proud"
            },
            {
              "id": 3,
              "url": "assets/emotions/surprised.png",
              "key": "Surprised"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 145
        },
        {
          "name": "Which of these signs means 'Sad'?",
          "category": "Emotions",
          "questionType": "text",
          "data": "Which of these signs means 'Sad'?",
          "options": [
            {
              "id": 1,
              "url": "assets/emotions/sad.png",
              "key": "Sad"
            },
            {
              "id": 2,
              "url": "assets/emotions/angry.png",
              "key": "Angry"
            },
            {
              "id": 3,
              "url": "assets/emotions/happy.png",
              "key": "Happy"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 146
        },
        {
          "name": "Which of these signs means 'Tired'?",
          "category": "Emotions",
          "questionType": "text",
          "data": "Which of these signs means 'Tired'?",
          "options": [
            {
              "id": 3,
              "url": "assets/emotions/worried.png",
              "key": "Worried"
            },
            {
              "id": 2,
              "url": "assets/emotions/loved.png",
              "key": "Loved"
            },
            {
              "id": 1,
              "url": "assets/emotions/tired.png",
              "key": "Tired"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 147
        },
        {
          "name": "Which of these signs means 'Surprised'?",
          "category": "Emotions",
          "questionType": "text",
          "data": "Which of these signs means 'Surprised'?",
          "options": [
            {
              "id": 3,
              "url": "assets/emotions/loved.png",
              "key": "Loved"
            },
            {
              "id": 2,
              "url": "assets/emotions/sad.png",
              "key": "Sad"
            },
            {
              "id": 1,
              "url": "assets/emotions/surprised.png",
              "key": "Surprised"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 148
        },
        {
          "name": "Which of these signs means 'Confused'?",
          "category": "Emotions",
          "questionType": "text",
          "data": "Which of these signs means 'Confused'?",
          "options": [
            {
              "id": 1,
              "url": "assets/emotions/confused.png",
              "key": "Confused"
            },
            {
              "id": 2,
              "url": "assets/emotions/surprised.png",
              "key": "Surprised"
            },
            {
              "id": 3,
              "url": "assets/emotions/worried.png",
              "key": "Worried"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 149
        },
        {
          "name": "Which of these signs means 'Worried'?",
          "category": "Emotions",
          "questionType": "text",
          "data": "Which of these signs means 'Worried'?",
          "options": [
            {
              "id": 3,
              "url": "assets/emotions/angry.png",
              "key": "Angry"
            },
            {
              "id": 1,
              "url": "assets/emotions/worried.png",
              "key": "Worried"
            },
            {
              "id": 2,
              "url": "assets/emotions/sad.png",
              "key": "Sad"
            }
          ],
          "correctOptionId": 1,
          "level": 12,
          "levelUid": 150
        }
      ]
    },
    {
      "category": "Months",
      "group": "Identify the meaning (video)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Months",
          "questionType": "single-video",
          "data": "assets/months/december.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/months/october.png",
              "key": "October"
            },
            {
              "id": 2,
              "url": "assets/months/november.png",
              "key": "November"
            },
            {
              "id": 1,
              "url": "assets/months/december.png",
              "key": "December"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 151
        },
        {
          "name": "What does this sign mean?",
          "category": "Months",
          "questionType": "single-video",
          "data": "assets/months/april.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/months/april.png",
              "key": "April"
            },
            {
              "id": 3,
              "url": "assets/months/december.png",
              "key": "December"
            },
            {
              "id": 2,
              "url": "assets/months/january.png",
              "key": "January"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 152
        },
        {
          "name": "What does this sign mean?",
          "category": "Months",
          "questionType": "single-video",
          "data": "assets/months/november.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/months/november.png",
              "key": "November"
            },
            {
              "id": 3,
              "url": "assets/months/february.png",
              "key": "February"
            },
            {
              "id": 2,
              "url": "assets/months/october.png",
              "key": "October"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 153
        },
        {
          "name": "What does this sign mean?",
          "category": "Months",
          "questionType": "single-video",
          "data": "assets/months/september.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/months/july.png",
              "key": "July"
            },
            {
              "id": 1,
              "url": "assets/months/september.png",
              "key": "September"
            },
            {
              "id": 3,
              "url": "assets/months/february.png",
              "key": "February"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 154
        },
        {
          "name": "What does this sign mean?",
          "category": "Months",
          "questionType": "single-video",
          "data": "assets/months/october.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/months/september.png",
              "key": "September"
            },
            {
              "id": 3,
              "url": "assets/months/june.png",
              "key": "June"
            },
            {
              "id": 1,
              "url": "assets/months/october.png",
              "key": "October"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 155
        }
      ]
    },
    {
      "category": "Months",
      "group": "Identify the meaning (image)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Months",
          "questionType": "single-image",
          "data": "assets/months/february.png",
          "options": [
            {
              "id": 3,
              "url": "assets/months/july.png",
              "key": "July"
            },
            {
              "id": 2,
              "url": "assets/months/august.png",
              "key": "August"
            },
            {
              "id": 1,
              "url": "assets/months/february.png",
              "key": "February"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 156
        },
        {
          "name": "What does this sign mean?",
          "category": "Months",
          "questionType": "single-image",
          "data": "assets/months/january.png",
          "options": [
            {
              "id": 1,
              "url": "assets/months/january.png",
              "key": "January"
            },
            {
              "id": 2,
              "url": "assets/months/april.png",
              "key": "April"
            },
            {
              "id": 3,
              "url": "assets/months/december.png",
              "key": "December"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 157
        },
        {
          "name": "What does this sign mean?",
          "category": "Months",
          "questionType": "single-image",
          "data": "assets/months/december.png",
          "options": [
            {
              "id": 2,
              "url": "assets/months/october.png",
              "key": "October"
            },
            {
              "id": 3,
              "url": "assets/months/january.png",
              "key": "January"
            },
            {
              "id": 1,
              "url": "assets/months/december.png",
              "key": "December"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 158
        },
        {
          "name": "What does this sign mean?",
          "category": "Months",
          "questionType": "single-image",
          "data": "assets/months/april.png",
          "options": [
            {
              "id": 2,
              "url": "assets/months/july.png",
              "key": "July"
            },
            {
              "id": 3,
              "url": "assets/months/june.png",
              "key": "June"
            },
            {
              "id": 1,
              "url": "assets/months/april.png",
              "key": "April"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 159
        },
        {
          "name": "What does this sign mean?",
          "category": "Months",
          "questionType": "single-image",
          "data": "assets/months/november.png",
          "options": [
            {
              "id": 2,
              "url": "assets/months/july.png",
              "key": "July"
            },
            {
              "id": 1,
              "url": "assets/months/november.png",
              "key": "November"
            },
            {
              "id": 3,
              "url": "assets/months/february.png",
              "key": "February"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 160
        }
      ]
    },
    {
      "category": "Months",
      "group": "Meaning matching",
      "questions": [
        {
          "name": "Select the correct meaning of this sign",
          "category": "Months",
          "questionType": "single-image",
          "data": "assets/months/july.png",
          "options": [
            {
              "id": 3,
              "key": "October"
            },
            {
              "id": 2,
              "key": "November"
            },
            {
              "id": 1,
              "key": "July"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 161
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Months",
          "questionType": "single-video",
          "data": "assets/months/september.mp4",
          "options": [
            {
              "id": 2,
              "key": "February"
            },
            {
              "id": 1,
              "key": "September"
            },
            {
              "id": 3,
              "key": "April"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 162
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Months",
          "questionType": "single-image",
          "data": "assets/months/may.png",
          "options": [
            {
              "id": 3,
              "key": "September"
            },
            {
              "id": 1,
              "key": "May"
            },
            {
              "id": 2,
              "key": "March"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 163
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Months",
          "questionType": "single-video",
          "data": "assets/months/february.mp4",
          "options": [
            {
              "id": 3,
              "key": "April"
            },
            {
              "id": 1,
              "key": "February"
            },
            {
              "id": 2,
              "key": "September"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 164
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Months",
          "questionType": "single-image",
          "data": "assets/months/june.png",
          "options": [
            {
              "id": 3,
              "key": "May"
            },
            {
              "id": 1,
              "key": "June"
            },
            {
              "id": 2,
              "key": "October"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 165
        }
      ]
    },
    {
      "category": "Months",
      "group": "Yes or No",
      "questions": [
        {
          "name": "Is this 'March'?",
          "category": "Months",
          "questionType": "single-video",
          "data": "assets/months/march.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 166
        },
        {
          "name": "Is this 'December'?",
          "category": "Months",
          "questionType": "single-image",
          "data": "assets/months/december.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 167
        },
        {
          "name": "Is this 'April'?",
          "category": "Months",
          "questionType": "single-image",
          "data": "assets/months/april.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 20,
          "levelUid": 168
        },
        {
          "name": "Is this 'October'?",
          "category": "Months",
          "questionType": "single-video",
          "data": "assets/months/october.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 169
        },
        {
          "name": "Is this 'April'?",
          "category": "Months",
          "questionType": "single-image",
          "data": "assets/months/april.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 4,
          "levelUid": 170
        },
        {
          "name": "Is this 'October'?",
          "category": "Months",
          "questionType": "single-video",
          "data": "assets/months/october.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 8,
          "levelUid": 171
        }
      ]
    },
    {
      "category": "Months",
      "group": "Odd one out (mixed media)",
      "questions": [
        {
          "name": "Which one means something different?",
          "category": "Months",
          "questionType": "multiple-video",
          "data": [
            "assets/months/october.mp4",
            "assets/verbs/jump.mp4",
            "assets/months/april.mp4",
            "assets/months/june.mp4"
          ],
          "options": [
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 4,
              "key": "4th"
            }
          ],
          "correctOptionId": 2,
          "level": 11,
          "levelUid": 172
        },
        {
          "name": "Which one means something different?",
          "category": "Months",
          "questionType": "multiple-image",
          "data": [
            "assets/months/february.png",
            "assets/color/gray.png",
            "assets/months/may.png",
            "assets/months/september.png"
          ],
          "options": [
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            }
          ],
          "correctOptionId": 2,
          "level": 13,
          "levelUid": 173
        },
        {
          "name": "Which one means something different?",
          "category": "Months",
          "questionType": "multiple-image",
          "data": [
            "assets/months/october.png",
            "assets/months/february.png",
            "assets/months/september.png",
            "assets/day/thursday.png"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 2,
              "key": "2nd"
            }
          ],
          "correctOptionId": 4,
          "level": 13,
          "levelUid": 174
        }
      ]
    },
    {
      "category": "Months",
      "group": "Identify the correct sign (image options)",
      "questions": [
        {
          "name": "Which of these signs means 'December'?",
          "category": "Months",
          "questionType": "text",
          "data": "Which of these signs means 'December'?",
          "options": [
            {
              "id": 2,
              "url": "assets/months/july.png",
              "key": "July"
            },
            {
              "id": 1,
              "url": "assets/months/december.png",
              "key": "December"
            },
            {
              "id": 3,
              "url": "assets/months/february.png",
              "key": "February"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 175
        },
        {
          "name": "Which of these signs means 'November'?",
          "category": "Months",
          "questionType": "text",
          "data": "Which of these signs means 'November'?",
          "options": [
            {
              "id": 2,
              "url": "assets/months/may.png",
              "key": "May"
            },
            {
              "id": 3,
              "url": "assets/months/june.png",
              "key": "June"
            },
            {
              "id": 1,
              "url": "assets/months/november.png",
              "key": "November"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 176
        },
        {
          "name": "Which of these signs means 'February'?",
          "category": "Months",
          "questionType": "text",
          "data": "Which of these signs means 'February'?",
          "options": [
            {
              "id": 3,
              "url": "assets/months/march.png",
              "key": "March"
            },
            {
              "id": 1,
              "url": "assets/months/february.png",
              "key": "February"
            },
            {
              "id": 2,
              "url": "assets/months/january.png",
              "key": "January"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 177
        },
        {
          "name": "Which of these signs means 'July'?",
          "category": "Months",
          "questionType": "text",
          "data": "Which of these signs means 'July'?",
          "options": [
            {
              "id": 2,
              "url": "assets/months/october.png",
              "key": "October"
            },
            {
              "id": 1,
              "url": "assets/months/july.png",
              "key": "July"
            },
            {
              "id": 3,
              "url": "assets/months/january.png",
              "key": "January"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 178
        },
        {
          "name": "Which of these signs means 'April'?",
          "category": "Months",
          "questionType": "text",
          "data": "Which of these signs means 'April'?",
          "options": [
            {
              "id": 1,
              "url": "assets/months/april.png",
              "key": "April"
            },
            {
              "id": 3,
              "url": "assets/months/july.png",
              "key": "July"
            },
            {
              "id": 2,
              "url": "assets/months/june.png",
              "key": "June"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 179
        },
        {
          "name": "Which of these signs means 'October'?",
          "category": "Months",
          "questionType": "text",
          "data": "Which of these signs means 'October'?",
          "options": [
            {
              "id": 1,
              "url": "assets/months/october.png",
              "key": "October"
            },
            {
              "id": 3,
              "url": "assets/months/september.png",
              "key": "September"
            },
            {
              "id": 2,
              "url": "assets/months/april.png",
              "key": "April"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 180
        }
      ]
    },
    {
      "category": "Numbers",
      "group": "Identify the meaning (video)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Numbers",
          "questionType": "single-video",
          "data": "assets/numbers/1.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/2.png",
              "key": "2"
            },
            {
              "id": 3,
              "url": "assets/numbers/8.png",
              "key": "8"
            },
            {
              "id": 1,
              "url": "assets/numbers/1.png",
              "key": "1"
            }
          ],
          "correctOptionId": 1,
          "level": 3,
          "levelUid": 181
        },
        {
          "name": "What does this sign mean?",
          "category": "Numbers",
          "questionType": "single-video",
          "data": "assets/numbers/9.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/3.png",
              "key": "3"
            },
            {
              "id": 1,
              "url": "assets/numbers/9.png",
              "key": "9"
            },
            {
              "id": 3,
              "url": "assets/numbers/6.png",
              "key": "6"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 182
        },
        {
          "name": "What does this sign mean?",
          "category": "Numbers",
          "questionType": "single-video",
          "data": "assets/numbers/7.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/1.png",
              "key": "1"
            },
            {
              "id": 3,
              "url": "assets/numbers/8.png",
              "key": "8"
            },
            {
              "id": 1,
              "url": "assets/numbers/7.png",
              "key": "7"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 183
        },
        {
          "name": "What does this sign mean?",
          "category": "Numbers",
          "questionType": "single-video",
          "data": "assets/numbers/10.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/numbers/9.png",
              "key": "9"
            },
            {
              "id": 1,
              "url": "assets/numbers/10.png",
              "key": "10"
            },
            {
              "id": 2,
              "url": "assets/numbers/8.png",
              "key": "8"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 184
        },
        {
          "name": "What does this sign mean?",
          "category": "Numbers",
          "questionType": "single-video",
          "data": "assets/numbers/3.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/2.png",
              "key": "2"
            },
            {
              "id": 1,
              "url": "assets/numbers/3.png",
              "key": "3"
            },
            {
              "id": 3,
              "url": "assets/numbers/6.png",
              "key": "6"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 185
        }
      ]
    },
    {
      "category": "Numbers",
      "group": "Identify the meaning (image)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Numbers",
          "questionType": "single-image",
          "data": "assets/numbers/5.png",
          "options": [
            {
              "id": 3,
              "url": "assets/numbers/1.png",
              "key": "1"
            },
            {
              "id": 1,
              "url": "assets/numbers/5.png",
              "key": "5"
            },
            {
              "id": 2,
              "url": "assets/numbers/4.png",
              "key": "4"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 186
        },
        {
          "name": "What does this sign mean?",
          "category": "Numbers",
          "questionType": "single-image",
          "data": "assets/numbers/7.png",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/10.png",
              "key": "10"
            },
            {
              "id": 1,
              "url": "assets/numbers/7.png",
              "key": "7"
            },
            {
              "id": 3,
              "url": "assets/numbers/5.png",
              "key": "5"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 187
        },
        {
          "name": "What does this sign mean?",
          "category": "Numbers",
          "questionType": "single-image",
          "data": "assets/numbers/6.png",
          "options": [
            {
              "id": 1,
              "url": "assets/numbers/6.png",
              "key": "6"
            },
            {
              "id": 3,
              "url": "assets/numbers/4.png",
              "key": "4"
            },
            {
              "id": 2,
              "url": "assets/numbers/8.png",
              "key": "8"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 188
        },
        {
          "name": "What does this sign mean?",
          "category": "Numbers",
          "questionType": "single-image",
          "data": "assets/numbers/2.png",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/4.png",
              "key": "4"
            },
            {
              "id": 1,
              "url": "assets/numbers/2.png",
              "key": "2"
            },
            {
              "id": 3,
              "url": "assets/numbers/10.png",
              "key": "10"
            }
          ],
          "correctOptionId": 1,
          "level": 17,
          "levelUid": 189
        },
        {
          "name": "What does this sign mean?",
          "category": "Numbers",
          "questionType": "single-image",
          "data": "assets/numbers/10.png",
          "options": [
            {
              "id": 3,
              "url": "assets/numbers/9.png",
              "key": "9"
            },
            {
              "id": 1,
              "url": "assets/numbers/10.png",
              "key": "10"
            },
            {
              "id": 2,
              "url": "assets/numbers/4.png",
              "key": "4"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 190
        }
      ]
    },
    {
      "category": "Numbers",
      "group": "Meaning matching",
      "questions": [
        {
          "name": "Select the correct meaning of this sign",
          "category": "Numbers",
          "questionType": "single-image",
          "data": "assets/numbers/1.png",
          "options": [
            {
              "id": 3,
              "key": "8"
            },
            {
              "id": 1,
              "key": "1"
            },
            {
              "id": 2,
              "key": "6"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 191
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Numbers",
          "questionType": "single-video",
          "data": "assets/numbers/5.mp4",
          "options": [
            {
              "id": 1,
              "key": "5"
            },
            {
              "id": 3,
              "key": "10"
            },
            {
              "id": 2,
              "key": "9"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 192
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Numbers",
          "questionType": "single-image",
          "data": "assets/numbers/9.png",
          "options": [
            {
              "id": 3,
              "key": "1"
            },
            {
              "id": 1,
              "key": "9"
            },
            {
              "id": 2,
              "key": "7"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 193
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Numbers",
          "questionType": "single-image",
          "data": "assets/numbers/8.png",
          "options": [
            {
              "id": 3,
              "key": "2"
            },
            {
              "id": 2,
              "key": "4"
            },
            {
              "id": 1,
              "key": "8"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 194
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Numbers",
          "questionType": "single-video",
          "data": "assets/numbers/2.mp4",
          "options": [
            {
              "id": 1,
              "key": "2"
            },
            {
              "id": 3,
              "key": "9"
            },
            {
              "id": 2,
              "key": "7"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 195
        }
      ]
    },
    {
      "category": "Numbers",
      "group": "Yes or No",
      "questions": [
        {
          "name": "Is this '8'?",
          "category": "Numbers",
          "questionType": "single-video",
          "data": "assets/numbers/8.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 19,
          "levelUid": 196
        },
        {
          "name": "Is this '9'?",
          "category": "Numbers",
          "questionType": "single-image",
          "data": "assets/numbers/9.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 197
        },
        {
          "name": "Is this '5'?",
          "category": "Numbers",
          "questionType": "single-image",
          "data": "assets/numbers/5.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 198
        },
        {
          "name": "Is this '3'?",
          "category": "Numbers",
          "questionType": "single-video",
          "data": "assets/numbers/3.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 199
        },
        {
          "name": "Is this '5'?",
          "category": "Numbers",
          "questionType": "single-image",
          "data": "assets/numbers/5.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 5,
          "levelUid": 200
        },
        {
          "name": "Is this '2'?",
          "category": "Numbers",
          "questionType": "single-video",
          "data": "assets/numbers/2.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 3,
          "levelUid": 201
        }
      ]
    },
    {
      "category": "Numbers",
      "group": "Odd one out (mixed media)",
      "questions": [
        {
          "name": "Which one means something different?",
          "category": "Numbers",
          "questionType": "multiple-video",
          "data": [
            "assets/numbers/6.mp4",
            "assets/numbers/7.mp4",
            "assets/months/september.mp4",
            "assets/numbers/10.mp4"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            }
          ],
          "correctOptionId": 3,
          "level": 13,
          "levelUid": 202
        },
        {
          "name": "Which one means something different?",
          "category": "Numbers",
          "questionType": "multiple-image",
          "data": [
            "assets/basic-words/hello.png",
            "assets/numbers/6.png",
            "assets/numbers/7.png",
            "assets/numbers/10.png"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 1,
              "key": "1st"
            }
          ],
          "correctOptionId": 1,
          "level": 13,
          "levelUid": 203
        },
        {
          "name": "Which one means something different?",
          "category": "Numbers",
          "questionType": "multiple-video",
          "data": [
            "assets/numbers/5.mp4",
            "assets/numbers/10.mp4",
            "assets/color/yellow.mp4",
            "assets/numbers/8.mp4"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 4,
              "key": "4th"
            }
          ],
          "correctOptionId": 3,
          "level": 13,
          "levelUid": 204
        }
      ]
    },
    {
      "category": "Numbers",
      "group": "Identify the correct sign (image options)",
      "questions": [
        {
          "name": "Which of these signs means '3'?",
          "category": "Numbers",
          "questionType": "text",
          "data": "Which of these signs means '3'?",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/10.png",
              "key": "10"
            },
            {
              "id": 3,
              "url": "assets/numbers/6.png",
              "key": "6"
            },
            {
              "id": 1,
              "url": "assets/numbers/3.png",
              "key": "3"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 205
        },
        {
          "name": "Which of these signs means '10'?",
          "category": "Numbers",
          "questionType": "text",
          "data": "Which of these signs means '10'?",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/4.png",
              "key": "4"
            },
            {
              "id": 3,
              "url": "assets/numbers/7.png",
              "key": "7"
            },
            {
              "id": 1,
              "url": "assets/numbers/10.png",
              "key": "10"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 206
        },
        {
          "name": "Which of these signs means '7'?",
          "category": "Numbers",
          "questionType": "text",
          "data": "Which of these signs means '7'?",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/6.png",
              "key": "6"
            },
            {
              "id": 3,
              "url": "assets/numbers/2.png",
              "key": "2"
            },
            {
              "id": 1,
              "url": "assets/numbers/7.png",
              "key": "7"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 207
        },
        {
          "name": "Which of these signs means '9'?",
          "category": "Numbers",
          "questionType": "text",
          "data": "Which of these signs means '9'?",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/6.png",
              "key": "6"
            },
            {
              "id": 3,
              "url": "assets/numbers/3.png",
              "key": "3"
            },
            {
              "id": 1,
              "url": "assets/numbers/9.png",
              "key": "9"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 208
        },
        {
          "name": "Which of these signs means '6'?",
          "category": "Numbers",
          "questionType": "text",
          "data": "Which of these signs means '6'?",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/7.png",
              "key": "7"
            },
            {
              "id": 1,
              "url": "assets/numbers/6.png",
              "key": "6"
            },
            {
              "id": 3,
              "url": "assets/numbers/9.png",
              "key": "9"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 209
        },
        {
          "name": "Which of these signs means '1'?",
          "category": "Numbers",
          "questionType": "text",
          "data": "Which of these signs means '1'?",
          "options": [
            {
              "id": 2,
              "url": "assets/numbers/9.png",
              "key": "9"
            },
            {
              "id": 1,
              "url": "assets/numbers/1.png",
              "key": "1"
            },
            {
              "id": 3,
              "url": "assets/numbers/6.png",
              "key": "6"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 210
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Identify the meaning (video)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Places and Directions",
          "questionType": "single-video",
          "data": "assets/places-and-directions/restaurant.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/places-and-directions/left.png",
              "key": "Left"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/school.png",
              "key": "School"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/restaurant.png",
              "key": "Restaurant"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 211
        },
        {
          "name": "What does this sign mean?",
          "category": "Places and Directions",
          "questionType": "single-video",
          "data": "assets/places-and-directions/hospital.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/places-and-directions/library.png",
              "key": "Library"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/left.png",
              "key": "Left"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/hospital.png",
              "key": "Hospital"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 212
        },
        {
          "name": "What does this sign mean?",
          "category": "Places and Directions",
          "questionType": "single-video",
          "data": "assets/places-and-directions/down.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/places-and-directions/park.png",
              "key": "Park"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/down.png",
              "key": "Down"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/up.png",
              "key": "Up"
            }
          ],
          "correctOptionId": 1,
          "level": 3,
          "levelUid": 213
        },
        {
          "name": "What does this sign mean?",
          "category": "Places and Directions",
          "questionType": "single-video",
          "data": "assets/places-and-directions/left.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/places-and-directions/down.png",
              "key": "Down"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/left.png",
              "key": "Left"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/library.png",
              "key": "Library"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 214
        },
        {
          "name": "What does this sign mean?",
          "category": "Places and Directions",
          "questionType": "single-video",
          "data": "assets/places-and-directions/home.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/places-and-directions/library.png",
              "key": "Library"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/home.png",
              "key": "Home"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/up.png",
              "key": "Up"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 215
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Identify the meaning (image)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Places and Directions",
          "questionType": "single-image",
          "data": "assets/places-and-directions/home.png",
          "options": [
            {
              "id": 2,
              "url": "assets/places-and-directions/store.png",
              "key": "Store"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/restaurant.png",
              "key": "Restaurant"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/home.png",
              "key": "Home"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 216
        },
        {
          "name": "What does this sign mean?",
          "category": "Places and Directions",
          "questionType": "single-image",
          "data": "assets/places-and-directions/park.png",
          "options": [
            {
              "id": 3,
              "url": "assets/places-and-directions/right.png",
              "key": "Right"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/down.png",
              "key": "Down"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/park.png",
              "key": "Park"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 217
        },
        {
          "name": "What does this sign mean?",
          "category": "Places and Directions",
          "questionType": "single-image",
          "data": "assets/places-and-directions/left.png",
          "options": [
            {
              "id": 3,
              "url": "assets/places-and-directions/right.png",
              "key": "Right"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/school.png",
              "key": "School"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/left.png",
              "key": "Left"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 218
        },
        {
          "name": "What does this sign mean?",
          "category": "Places and Directions",
          "questionType": "single-image",
          "data": "assets/places-and-directions/restaurant.png",
          "options": [
            {
              "id": 2,
              "url": "assets/places-and-directions/hospital.png",
              "key": "Hospital"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/left.png",
              "key": "Left"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/restaurant.png",
              "key": "Restaurant"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 219
        },
        {
          "name": "What does this sign mean?",
          "category": "Places and Directions",
          "questionType": "single-image",
          "data": "assets/places-and-directions/hospital.png",
          "options": [
            {
              "id": 2,
              "url": "assets/places-and-directions/library.png",
              "key": "Library"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/store.png",
              "key": "Store"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/hospital.png",
              "key": "Hospital"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 220
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Meaning matching",
      "questions": [
        {
          "name": "Select the correct meaning of this sign",
          "category": "Places and Directions",
          "questionType": "single-video",
          "data": "assets/places-and-directions/restaurant.mp4",
          "options": [
            {
              "id": 3,
              "key": "Library"
            },
            {
              "id": 1,
              "key": "Restaurant"
            },
            {
              "id": 2,
              "key": "Park"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 221
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Places and Directions",
          "questionType": "single-video",
          "data": "assets/places-and-directions/home.mp4",
          "options": [
            {
              "id": 2,
              "key": "Restaurant"
            },
            {
              "id": 1,
              "key": "Home"
            },
            {
              "id": 3,
              "key": "Library"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 222
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Places and Directions",
          "questionType": "single-image",
          "data": "assets/places-and-directions/up.png",
          "options": [
            {
              "id": 1,
              "key": "Up"
            },
            {
              "id": 3,
              "key": "Left"
            },
            {
              "id": 2,
              "key": "Park"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 223
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Places and Directions",
          "questionType": "single-image",
          "data": "assets/places-and-directions/park.png",
          "options": [
            {
              "id": 2,
              "key": "Home"
            },
            {
              "id": 1,
              "key": "Park"
            },
            {
              "id": 3,
              "key": "School"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 224
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Places and Directions",
          "questionType": "single-image",
          "data": "assets/places-and-directions/right.png",
          "options": [
            {
              "id": 1,
              "key": "Right"
            },
            {
              "id": 3,
              "key": "Left"
            },
            {
              "id": 2,
              "key": "Restaurant"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 225
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Yes or No",
      "questions": [
        {
          "name": "Is this 'Down'?",
          "category": "Places and Directions",
          "questionType": "single-image",
          "data": "assets/places-and-directions/down.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 3,
          "levelUid": 226
        },
        {
          "name": "Is this 'Hospital'?",
          "category": "Places and Directions",
          "questionType": "single-video",
          "data": "assets/places-and-directions/hospital.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 227
        },
        {
          "name": "Is this 'Park'?",
          "category": "Places and Directions",
          "questionType": "single-image",
          "data": "assets/places-and-directions/park.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 228
        },
        {
          "name": "Is this 'School'?",
          "category": "Places and Directions",
          "questionType": "single-video",
          "data": "assets/places-and-directions/school.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 229
        },
        {
          "name": "Is this 'Hospital'?",
          "category": "Places and Directions",
          "questionType": "single-image",
          "data": "assets/places-and-directions/hospital.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 8,
          "levelUid": 230
        },
        {
          "name": "Is this 'Right'?",
          "category": "Places and Directions",
          "questionType": "single-video",
          "data": "assets/places-and-directions/right.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 4,
          "levelUid": 231
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Odd one out (mixed media)",
      "questions": [
        {
          "name": "Which one means something different?",
          "category": "Places and Directions",
          "questionType": "multiple-video",
          "data": [
            "assets/basic-words/yes.mp4",
            "assets/places-and-directions/down.mp4",
            "assets/places-and-directions/store.mp4",
            "assets/places-and-directions/up.mp4"
          ],
          "options": [
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 2,
              "key": "2nd"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 232
        },
        {
          "name": "Which one means something different?",
          "category": "Places and Directions",
          "questionType": "multiple-image",
          "data": [
            "assets/places-and-directions/hospital.png",
            "assets/places-and-directions/left.png",
            "assets/emotions/surprised.png",
            "assets/places-and-directions/school.png"
          ],
          "options": [
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 3,
              "key": "3rd"
            }
          ],
          "correctOptionId": 3,
          "level": 2,
          "levelUid": 233
        },
        {
          "name": "Which one means something different?",
          "category": "Places and Directions",
          "questionType": "multiple-image",
          "data": [
            "assets/places-and-directions/restaurant.png",
            "assets/color/red.png",
            "assets/places-and-directions/school.png",
            "assets/places-and-directions/home.png"
          ],
          "options": [
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 2,
              "key": "2nd"
            }
          ],
          "correctOptionId": 2,
          "level": 12,
          "levelUid": 234
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Identify the correct sign (image options)",
      "questions": [
        {
          "name": "Which of these signs means 'Park'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Park'?",
          "options": [
            {
              "id": 1,
              "url": "assets/places-and-directions/park.png",
              "key": "Park"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/down.png",
              "key": "Down"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/store.png",
              "key": "Store"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 235
        },
        {
          "name": "Which of these signs means 'Down'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Down'?",
          "options": [
            {
              "id": 2,
              "url": "assets/places-and-directions/hospital.png",
              "key": "Hospital"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/down.png",
              "key": "Down"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/right.png",
              "key": "Right"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 236
        },
        {
          "name": "Which of these signs means 'Restaurant'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Restaurant'?",
          "options": [
            {
              "id": 2,
              "url": "assets/places-and-directions/right.png",
              "key": "Right"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/restaurant.png",
              "key": "Restaurant"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/park.png",
              "key": "Park"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 237
        },
        {
          "name": "Which of these signs means 'Up'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Up'?",
          "options": [
            {
              "id": 3,
              "url": "assets/places-and-directions/home.png",
              "key": "Home"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/up.png",
              "key": "Up"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/restaurant.png",
              "key": "Restaurant"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 238
        },
        {
          "name": "Which of these signs means 'Library'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Library'?",
          "options": [
            {
              "id": 1,
              "url": "assets/places-and-directions/library.png",
              "key": "Library"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/down.png",
              "key": "Down"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/hospital.png",
              "key": "Hospital"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 239
        },
        {
          "name": "Which of these signs means 'School'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'School'?",
          "options": [
            {
              "id": 1,
              "url": "assets/places-and-directions/school.png",
              "key": "School"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/down.png",
              "key": "Down"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/up.png",
              "key": "Up"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 240
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the meaning (video)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/doctor.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/relationships/family.png",
              "key": "Family"
            },
            {
              "id": 1,
              "url": "assets/relationships/doctor.png",
              "key": "Doctor"
            },
            {
              "id": 2,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 241
        },
        {
          "name": "What does this sign mean?",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/teacher.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/relationships/brother.png",
              "key": "Brother"
            },
            {
              "id": 1,
              "url": "assets/relationships/teacher.png",
              "key": "Teacher"
            },
            {
              "id": 3,
              "url": "assets/relationships/friend.png",
              "key": "Friend"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 242
        },
        {
          "name": "What does this sign mean?",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/mother.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/relationships/father.png",
              "key": "Father"
            },
            {
              "id": 1,
              "url": "assets/relationships/mother.png",
              "key": "Mother"
            },
            {
              "id": 3,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 243
        },
        {
          "name": "What does this sign mean?",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/grandfather.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/relationships/mother.png",
              "key": "Mother"
            },
            {
              "id": 3,
              "url": "assets/relationships/father.png",
              "key": "Father"
            },
            {
              "id": 1,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 244
        },
        {
          "name": "What does this sign mean?",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/friend.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            },
            {
              "id": 2,
              "url": "assets/relationships/teacher.png",
              "key": "Teacher"
            },
            {
              "id": 1,
              "url": "assets/relationships/friend.png",
              "key": "Friend"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 245
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the meaning (image)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Relationships",
          "questionType": "single-image",
          "data": "assets/relationships/brother.png",
          "options": [
            {
              "id": 1,
              "url": "assets/relationships/brother.png",
              "key": "Brother"
            },
            {
              "id": 2,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            },
            {
              "id": 3,
              "url": "assets/relationships/family.png",
              "key": "Family"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 246
        },
        {
          "name": "What does this sign mean?",
          "category": "Relationships",
          "questionType": "single-image",
          "data": "assets/relationships/friend.png",
          "options": [
            {
              "id": 1,
              "url": "assets/relationships/friend.png",
              "key": "Friend"
            },
            {
              "id": 3,
              "url": "assets/relationships/grandmother.png",
              "key": "Grandmother"
            },
            {
              "id": 2,
              "url": "assets/relationships/father.png",
              "key": "Father"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 247
        },
        {
          "name": "What does this sign mean?",
          "category": "Relationships",
          "questionType": "single-image",
          "data": "assets/relationships/sister.png",
          "options": [
            {
              "id": 1,
              "url": "assets/relationships/sister.png",
              "key": "Sister"
            },
            {
              "id": 2,
              "url": "assets/relationships/teacher.png",
              "key": "Teacher"
            },
            {
              "id": 3,
              "url": "assets/relationships/mother.png",
              "key": "Mother"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 248
        },
        {
          "name": "What does this sign mean?",
          "category": "Relationships",
          "questionType": "single-image",
          "data": "assets/relationships/grandmother.png",
          "options": [
            {
              "id": 2,
              "url": "assets/relationships/brother.png",
              "key": "Brother"
            },
            {
              "id": 1,
              "url": "assets/relationships/grandmother.png",
              "key": "Grandmother"
            },
            {
              "id": 3,
              "url": "assets/relationships/family.png",
              "key": "Family"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 249
        },
        {
          "name": "What does this sign mean?",
          "category": "Relationships",
          "questionType": "single-image",
          "data": "assets/relationships/family.png",
          "options": [
            {
              "id": 1,
              "url": "assets/relationships/family.png",
              "key": "Family"
            },
            {
              "id": 2,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            },
            {
              "id": 3,
              "url": "assets/relationships/teacher.png",
              "key": "Teacher"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 250
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Meaning matching",
      "questions": [
        {
          "name": "Select the correct meaning of this sign",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/grandfather.mp4",
          "options": [
            {
              "id": 1,
              "key": "Grandfather"
            },
            {
              "id": 2,
              "key": "Friend"
            },
            {
              "id": 3,
              "key": "Mother"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 251
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/sister.mp4",
          "options": [
            {
              "id": 2,
              "key": "Father"
            },
            {
              "id": 3,
              "key": "Grandfather"
            },
            {
              "id": 1,
              "key": "Sister"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 252
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Relationships",
          "questionType": "single-image",
          "data": "assets/relationships/father.png",
          "options": [
            {
              "id": 1,
              "key": "Father"
            },
            {
              "id": 3,
              "key": "Mother"
            },
            {
              "id": 2,
              "key": "Family"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 253
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/mother.mp4",
          "options": [
            {
              "id": 2,
              "key": "Family"
            },
            {
              "id": 3,
              "key": "Sister"
            },
            {
              "id": 1,
              "key": "Mother"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 254
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Relationships",
          "questionType": "single-image",
          "data": "assets/relationships/brother.png",
          "options": [
            {
              "id": 2,
              "key": "Grandmother"
            },
            {
              "id": 1,
              "key": "Brother"
            },
            {
              "id": 3,
              "key": "Teacher"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 255
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Yes or No",
      "questions": [
        {
          "name": "Is this 'Mother'?",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/mother.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 256
        },
        {
          "name": "Is this 'Family'?",
          "category": "Relationships",
          "questionType": "single-image",
          "data": "assets/relationships/family.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 257
        },
        {
          "name": "Is this 'Father'?",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/father.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 258
        },
        {
          "name": "Is this 'Grandfather'?",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/grandfather.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 259
        },
        {
          "name": "Is this 'Doctor'?",
          "category": "Relationships",
          "questionType": "single-image",
          "data": "assets/relationships/doctor.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 8,
          "levelUid": 260
        },
        {
          "name": "Is this 'Grandfather'?",
          "category": "Relationships",
          "questionType": "single-video",
          "data": "assets/relationships/grandfather.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 10,
          "levelUid": 261
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Odd one out (mixed media)",
      "questions": [
        {
          "name": "Which one means something different?",
          "category": "Relationships",
          "questionType": "multiple-image",
          "data": [
            "assets/places-and-directions/restaurant.png",
            "assets/relationships/grandfather.png",
            "assets/relationships/father.png",
            "assets/relationships/friend.png"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            }
          ],
          "correctOptionId": 1,
          "level": 13,
          "levelUid": 262
        },
        {
          "name": "Which one means something different?",
          "category": "Relationships",
          "questionType": "multiple-video",
          "data": [
            "assets/relationships/sister.mp4",
            "assets/relationships/mother.mp4",
            "assets/relationships/father.mp4",
            "assets/verbs/sleep.mp4"
          ],
          "options": [
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 2,
              "key": "2nd"
            }
          ],
          "correctOptionId": 4,
          "level": 10,
          "levelUid": 263
        },
        {
          "name": "Which one means something different?",
          "category": "Relationships",
          "questionType": "multiple-image",
          "data": [
            "assets/relationships/doctor.png",
            "assets/relationships/grandfather.png",
            "assets/relationships/friend.png",
            "assets/months/january.png"
          ],
          "options": [
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            },
            {
              "id": 2,
              "key": "2nd"
            }
          ],
          "correctOptionId": 4,
          "level": 13,
          "levelUid": 264
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the correct sign (image options)",
      "questions": [
        {
          "name": "Which of these signs means 'Teacher'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Teacher'?",
          "options": [
            {
              "id": 2,
              "url": "assets/relationships/doctor.png",
              "key": "Doctor"
            },
            {
              "id": 1,
              "url": "assets/relationships/teacher.png",
              "key": "Teacher"
            },
            {
              "id": 3,
              "url": "assets/relationships/family.png",
              "key": "Family"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 265
        },
        {
          "name": "Which of these signs means 'Father'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Father'?",
          "options": [
            {
              "id": 2,
              "url": "assets/relationships/teacher.png",
              "key": "Teacher"
            },
            {
              "id": 1,
              "url": "assets/relationships/father.png",
              "key": "Father"
            },
            {
              "id": 3,
              "url": "assets/relationships/mother.png",
              "key": "Mother"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 266
        },
        {
          "name": "Which of these signs means 'Friend'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Friend'?",
          "options": [
            {
              "id": 3,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            },
            {
              "id": 2,
              "url": "assets/relationships/doctor.png",
              "key": "Doctor"
            },
            {
              "id": 1,
              "url": "assets/relationships/friend.png",
              "key": "Friend"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 267
        },
        {
          "name": "Which of these signs means 'Family'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Family'?",
          "options": [
            {
              "id": 2,
              "url": "assets/relationships/brother.png",
              "key": "Brother"
            },
            {
              "id": 1,
              "url": "assets/relationships/family.png",
              "key": "Family"
            },
            {
              "id": 3,
              "url": "assets/relationships/doctor.png",
              "key": "Doctor"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 268
        },
        {
          "name": "Which of these signs means 'Mother'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Mother'?",
          "options": [
            {
              "id": 1,
              "url": "assets/relationships/mother.png",
              "key": "Mother"
            },
            {
              "id": 2,
              "url": "assets/relationships/doctor.png",
              "key": "Doctor"
            },
            {
              "id": 3,
              "url": "assets/relationships/family.png",
              "key": "Family"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 269
        },
        {
          "name": "Which of these signs means 'Grandfather'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Grandfather'?",
          "options": [
            {
              "id": 1,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            },
            {
              "id": 2,
              "url": "assets/relationships/sister.png",
              "key": "Sister"
            },
            {
              "id": 3,
              "url": "assets/relationships/doctor.png",
              "key": "Doctor"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 270
        }
      ]
    },
    {
      "category": "Verbs",
      "group": "Identify the meaning (video)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/run.mp4",
          "options": [
            {
              "id": 3,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            },
            {
              "id": 1,
              "url": "assets/verbs/run.png",
              "key": "Run"
            },
            {
              "id": 2,
              "url": "assets/verbs/write.png",
              "key": "Write"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 271
        },
        {
          "name": "What does this sign mean?",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/sleep.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            },
            {
              "id": 3,
              "url": "assets/verbs/jump.png",
              "key": "Jump"
            },
            {
              "id": 2,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 272
        },
        {
          "name": "What does this sign mean?",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/write.mp4",
          "options": [
            {
              "id": 1,
              "url": "assets/verbs/write.png",
              "key": "Write"
            },
            {
              "id": 2,
              "url": "assets/verbs/jump.png",
              "key": "Jump"
            },
            {
              "id": 3,
              "url": "assets/verbs/run.png",
              "key": "Run"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 273
        },
        {
          "name": "What does this sign mean?",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/eat.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            },
            {
              "id": 1,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            },
            {
              "id": 3,
              "url": "assets/verbs/write.png",
              "key": "Write"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 274
        },
        {
          "name": "What does this sign mean?",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/jump.mp4",
          "options": [
            {
              "id": 2,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            },
            {
              "id": 3,
              "url": "assets/verbs/write.png",
              "key": "Write"
            },
            {
              "id": 1,
              "url": "assets/verbs/jump.png",
              "key": "Jump"
            }
          ],
          "correctOptionId": 1,
          "level": 1,
          "levelUid": 275
        }
      ]
    },
    {
      "category": "Verbs",
      "group": "Identify the meaning (image)",
      "questions": [
        {
          "name": "What does this sign mean?",
          "category": "Verbs",
          "questionType": "single-image",
          "data": "assets/verbs/write.png",
          "options": [
            {
              "id": 2,
              "url": "assets/verbs/run.png",
              "key": "Run"
            },
            {
              "id": 1,
              "url": "assets/verbs/write.png",
              "key": "Write"
            },
            {
              "id": 3,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 276
        },
        {
          "name": "What does this sign mean?",
          "category": "Verbs",
          "questionType": "single-image",
          "data": "assets/verbs/eat.png",
          "options": [
            {
              "id": 1,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            },
            {
              "id": 3,
              "url": "assets/verbs/write.png",
              "key": "Write"
            },
            {
              "id": 2,
              "url": "assets/verbs/run.png",
              "key": "Run"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 277
        },
        {
          "name": "What does this sign mean?",
          "category": "Verbs",
          "questionType": "single-image",
          "data": "assets/verbs/sleep.png",
          "options": [
            {
              "id": 3,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            },
            {
              "id": 2,
              "url": "assets/verbs/jump.png",
              "key": "Jump"
            },
            {
              "id": 1,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 278
        },
        {
          "name": "What does this sign mean?",
          "category": "Verbs",
          "questionType": "single-image",
          "data": "assets/verbs/run.png",
          "options": [
            {
              "id": 3,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            },
            {
              "id": 2,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            },
            {
              "id": 1,
              "url": "assets/verbs/run.png",
              "key": "Run"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 279
        },
        {
          "name": "What does this sign mean?",
          "category": "Verbs",
          "questionType": "single-image",
          "data": "assets/verbs/jump.png",
          "options": [
            {
              "id": 1,
              "url": "assets/verbs/jump.png",
              "key": "Jump"
            },
            {
              "id": 3,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            },
            {
              "id": 2,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 280
        }
      ]
    },
    {
      "category": "Verbs",
      "group": "Meaning matching",
      "questions": [
        {
          "name": "Select the correct meaning of this sign",
          "category": "Verbs",
          "questionType": "single-image",
          "data": "assets/verbs/run.png",
          "options": [
            {
              "id": 3,
              "key": "Write"
            },
            {
              "id": 1,
              "key": "Run"
            },
            {
              "id": 2,
              "key": "Jump"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 281
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/write.mp4",
          "options": [
            {
              "id": 3,
              "key": "Run"
            },
            {
              "id": 1,
              "key": "Write"
            },
            {
              "id": 2,
              "key": "Sleep"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 282
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Verbs",
          "questionType": "single-image",
          "data": "assets/verbs/eat.png",
          "options": [
            {
              "id": 2,
              "key": "Sleep"
            },
            {
              "id": 3,
              "key": "Jump"
            },
            {
              "id": 1,
              "key": "Eat"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 283
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/jump.mp4",
          "options": [
            {
              "id": 3,
              "key": "Write"
            },
            {
              "id": 1,
              "key": "Jump"
            },
            {
              "id": 2,
              "key": "Sleep"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 284
        },
        {
          "name": "Select the correct meaning of this sign",
          "category": "Verbs",
          "questionType": "single-image",
          "data": "assets/verbs/sleep.png",
          "options": [
            {
              "id": 3,
              "key": "Eat"
            },
            {
              "id": 1,
              "key": "Sleep"
            },
            {
              "id": 2,
              "key": "Write"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 285
        }
      ]
    },
    {
      "category": "Verbs",
      "group": "Yes or No",
      "questions": [
        {
          "name": "Is this 'Write'?",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/write.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 286
        },
        {
          "name": "Is this 'Eat'?",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/eat.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 287
        },
        {
          "name": "Is this 'Run'?",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/run.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 288
        },
        {
          "name": "Is this 'Sleep'?",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/sleep.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 289
        },
        {
          "name": "Is this 'Jump'?",
          "category": "Verbs",
          "questionType": "single-image",
          "data": "assets/verbs/jump.png",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 6,
          "levelUid": 290
        },
        {
          "name": "Is this 'Eat'?",
          "category": "Verbs",
          "questionType": "single-video",
          "data": "assets/verbs/eat.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yes"
            },
            {
              "id": 2,
              "key": "No"
            }
          ],
          "correctOptionId": 2,
          "level": 4,
          "levelUid": 291
        }
      ]
    },
    {
      "category": "Verbs",
      "group": "Odd one out (mixed media)",
      "questions": [
        {
          "name": "Which one means something different?",
          "category": "Verbs",
          "questionType": "multiple-image",
          "data": [
            "assets/verbs/run.png",
            "assets/verbs/jump.png",
            "assets/verbs/sleep.png",
            "assets/basic-words/hello.png"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 4,
              "key": "4th"
            }
          ],
          "correctOptionId": 4,
          "level": 10,
          "levelUid": 292
        },
        {
          "name": "Which one means something different?",
          "category": "Verbs",
          "questionType": "multiple-video",
          "data": [
            "assets/basic-words/yes.mp4",
            "assets/verbs/sleep.mp4",
            "assets/verbs/run.mp4",
            "assets/verbs/write.mp4"
          ],
          "options": [
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 4,
              "key": "4th"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 293
        },
        {
          "name": "Which one means something different?",
          "category": "Verbs",
          "questionType": "multiple-image",
          "data": [
            "assets/verbs/eat.png",
            "assets/verbs/write.png",
            "assets/verbs/sleep.png",
            "assets/basic-words/thank-you.png"
          ],
          "options": [
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 4,
              "key": "4th"
            }
          ],
          "correctOptionId": 4,
          "level": 11,
          "levelUid": 294
        }
      ]
    },
    {
      "category": "Verbs",
      "group": "Identify the correct sign (image options)",
      "questions": [
        {
          "name": "Which of these signs means 'Eat'?",
          "category": "Verbs",
          "questionType": "text",
          "data": "Which of these signs means 'Eat'?",
          "options": [
            {
              "id": 3,
              "url": "assets/verbs/write.png",
              "key": "Write"
            },
            {
              "id": 1,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            },
            {
              "id": 2,
              "url": "assets/verbs/run.png",
              "key": "Run"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 295
        },
        {
          "name": "Which of these signs means 'Sleep'?",
          "category": "Verbs",
          "questionType": "text",
          "data": "Which of these signs means 'Sleep'?",
          "options": [
            {
              "id": 2,
              "url": "assets/verbs/write.png",
              "key": "Write"
            },
            {
              "id": 1,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            },
            {
              "id": 3,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 296
        },
        {
          "name": "Which of these signs means 'Write'?",
          "category": "Verbs",
          "questionType": "text",
          "data": "Which of these signs means 'Write'?",
          "options": [
            {
              "id": 3,
              "url": "assets/verbs/run.png",
              "key": "Run"
            },
            {
              "id": 2,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            },
            {
              "id": 1,
              "url": "assets/verbs/write.png",
              "key": "Write"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 297
        },
        {
          "name": "Which of these signs means 'Run'?",
          "category": "Verbs",
          "questionType": "text",
          "data": "Which of these signs means 'Run'?",
          "options": [
            {
              "id": 2,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            },
            {
              "id": 3,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            },
            {
              "id": 1,
              "url": "assets/verbs/run.png",
              "key": "Run"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 298
        },
        {
          "name": "Which of these signs means 'Jump'?",
          "category": "Verbs",
          "questionType": "text",
          "data": "Which of these signs means 'Jump'?",
          "options": [
            {
              "id": 3,
              "url": "assets/verbs/run.png",
              "key": "Run"
            },
            {
              "id": 2,
              "url": "assets/verbs/write.png",
              "key": "Write"
            },
            {
              "id": 1,
              "url": "assets/verbs/jump.png",
              "key": "Jump"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 299
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Contextual usage",
      "questions": [
        {
          "name": "When would you use this sign?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/no.mp4",
          "options": [
            {
              "id": 3,
              "key": "Waving hello"
            },
            {
              "id": 2,
              "key": "Saying thank you"
            },
            {
              "id": 1,
              "key": "Refusing politely"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 300
        },
        {
          "name": "When would you use this sign?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/thank-you.mp4",
          "options": [
            {
              "id": 1,
              "key": "Expressing gratitude"
            },
            {
              "id": 2,
              "key": "Calling someone"
            },
            {
              "id": 3,
              "key": "Saying yes"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 301
        },
        {
          "name": "When would you use this sign?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/please.mp4",
          "options": [
            {
              "id": 2,
              "key": "Saying goodbye"
            },
            {
              "id": 1,
              "key": "Making a polite request"
            },
            {
              "id": 3,
              "key": "Expressing anger"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 302
        },
        {
          "name": "When would you use this sign?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/sorry.mp4",
          "options": [
            {
              "id": 3,
              "key": "Ending a call"
            },
            {
              "id": 2,
              "key": "Saying hello"
            },
            {
              "id": 1,
              "key": "Apologizing to someone"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 303
        },
        {
          "name": "When would you use this sign?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/yes.mp4",
          "options": [
            {
              "id": 1,
              "key": "Confirming agreement"
            },
            {
              "id": 3,
              "key": "Counting numbers"
            },
            {
              "id": 2,
              "key": "Saying your name"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 304
        },
        {
          "name": "When would you use this sign?",
          "category": "Basic Words",
          "questionType": "single-video",
          "data": "assets/basic-words/hello.mp4",
          "options": [
            {
              "id": 2,
              "key": "Asking for help"
            },
            {
              "id": 1,
              "key": "Greeting a friend"
            },
            {
              "id": 3,
              "key": "Saying sorry"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 305
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Sequence understanding",
      "questions": [
        {
          "name": "What sign commonly follows 'Thank you'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "assets/basic-words/thank-you.mp4",
          "options": [
            {
              "id": 2,
              "key": "Please"
            },
            {
              "id": 3,
              "key": "No common follow-up"
            },
            {
              "id": 1,
              "key": "Goodbye"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 306
        },
        {
          "name": "What sign commonly follows 'Hello'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "assets/basic-words/hello.mp4",
          "options": [
            {
              "id": 2,
              "key": "Sorry"
            },
            {
              "id": 3,
              "key": "No common follow-up"
            },
            {
              "id": 1,
              "key": "Please"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 307
        },
        {
          "name": "What sign commonly follows 'No'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "assets/basic-words/no.mp4",
          "options": [
            {
              "id": 1,
              "key": "Sorry"
            },
            {
              "id": 3,
              "key": "No common follow-up"
            },
            {
              "id": 2,
              "key": "Yes"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 308
        }
      ]
    },
    {
      "category": "Emotions",
      "group": "Visual-semantic match (images)",
      "questions": [
        {
          "name": "Select the correct sign for this sentence: 'They seemed confused in the meeting.'",
          "category": "Emotions",
          "questionType": "multiple-image",
          "data": [
            "assets/emotions/angry.png",
            "assets/emotions/happy.png",
            "assets/emotions/worried.png"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 2,
              "key": "2nd"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 309
        },
        {
          "name": "Select the correct sign for this sentence: 'I am very happy today.'",
          "category": "Emotions",
          "questionType": "multiple-image",
          "data": [
            "assets/emotions/excited.png",
            "assets/emotions/sad.png",
            "assets/emotions/proud.png"
          ],
          "options": [
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 3,
              "key": "3rd"
            }
          ],
          "correctOptionId": 3,
          "level": 9,
          "levelUid": 310
        },
        {
          "name": "Select the correct sign for this sentence: 'I'm too tired to go out.'",
          "category": "Emotions",
          "questionType": "multiple-image",
          "data": [
            "assets/emotions/sad.png",
            "assets/emotions/excited.png",
            "assets/emotions/angry.png"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 2,
              "key": "2nd"
            }
          ],
          "correctOptionId": 2,
          "level": 11,
          "levelUid": 311
        },
        {
          "name": "Select the correct sign for this sentence: 'He looks worried about the exam.'",
          "category": "Emotions",
          "questionType": "multiple-image",
          "data": [
            "assets/emotions/sad.png",
            "assets/emotions/happy.png",
            "assets/emotions/worried.png"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 312
        },
        {
          "name": "Select the correct sign for this sentence: 'I'm too tired to go out.'",
          "category": "Emotions",
          "questionType": "multiple-image",
          "data": [
            "assets/emotions/loved.png",
            "assets/emotions/angry.png",
            "assets/emotions/happy.png"
          ],
          "options": [
            {
              "id": 3,
              "key": "3rd"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 1,
              "key": "1st"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 313
        },
        {
          "name": "Select the correct sign for this sentence: 'I'm too tired to go out.'",
          "category": "Emotions",
          "questionType": "multiple-image",
          "data": [
            "assets/emotions/loved.png",
            "assets/emotions/confused.png",
            "assets/emotions/excited.png"
          ],
          "options": [
            {
              "id": 1,
              "key": "1st"
            },
            {
              "id": 2,
              "key": "2nd"
            },
            {
              "id": 3,
              "key": "3rd"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 314
        }
      ]
    },
    {
      "category": "Alphabet",
      "group": "Fingerspelling challenge",
      "questions": [
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/no.mp4",
          "options": [
            {
              "id": 2,
              "key": "Father"
            },
            {
              "id": 1,
              "key": "No"
            },
            {
              "id": 3,
              "key": "October"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 315
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/thursday.mp4",
          "options": [
            {
              "id": 2,
              "key": "Lion"
            },
            {
              "id": 3,
              "key": "Up"
            },
            {
              "id": 1,
              "key": "Thursday"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 316
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/july.mp4",
          "options": [
            {
              "id": 2,
              "key": "Pig"
            },
            {
              "id": 1,
              "key": "July"
            },
            {
              "id": 3,
              "key": "Brother"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 317
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/confused.mp4",
          "options": [
            {
              "id": 3,
              "key": "Hello"
            },
            {
              "id": 1,
              "key": "Confused"
            },
            {
              "id": 2,
              "key": "Red"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 318
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/december.mp4",
          "options": [
            {
              "id": 3,
              "key": "Monday"
            },
            {
              "id": 1,
              "key": "December"
            },
            {
              "id": 2,
              "key": "Cat"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 319
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/saturday.mp4",
          "options": [
            {
              "id": 2,
              "key": "December"
            },
            {
              "id": 3,
              "key": "Park"
            },
            {
              "id": 1,
              "key": "Saturday"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 320
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/proud.mp4",
          "options": [
            {
              "id": 2,
              "key": "Hospital"
            },
            {
              "id": 3,
              "key": "Happy"
            },
            {
              "id": 1,
              "key": "Proud"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 321
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/red.mp4",
          "options": [
            {
              "id": 2,
              "key": "Father"
            },
            {
              "id": 3,
              "key": "Teacher"
            },
            {
              "id": 1,
              "key": "Red"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 322
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/friend.mp4",
          "options": [
            {
              "id": 1,
              "key": "Friend"
            },
            {
              "id": 3,
              "key": "Wednesday"
            },
            {
              "id": 2,
              "key": "Brother"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 323
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/father.mp4",
          "options": [
            {
              "id": 3,
              "key": "Yellow"
            },
            {
              "id": 2,
              "key": "May"
            },
            {
              "id": 1,
              "key": "Father"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 324
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/cow.mp4",
          "options": [
            {
              "id": 2,
              "key": "Saturday"
            },
            {
              "id": 3,
              "key": "May"
            },
            {
              "id": 1,
              "key": "Cow"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 325
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/april.mp4",
          "options": [
            {
              "id": 2,
              "key": "Bear"
            },
            {
              "id": 1,
              "key": "April"
            },
            {
              "id": 3,
              "key": "Pig"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 326
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/pink.mp4",
          "options": [
            {
              "id": 3,
              "key": "Fish"
            },
            {
              "id": 2,
              "key": "Loved"
            },
            {
              "id": 1,
              "key": "Pink"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 327
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/fish.mp4",
          "options": [
            {
              "id": 1,
              "key": "Fish"
            },
            {
              "id": 2,
              "key": "Tuesday"
            },
            {
              "id": 3,
              "key": "Confused"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 328
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/pig.mp4",
          "options": [
            {
              "id": 1,
              "key": "Pig"
            },
            {
              "id": 3,
              "key": "Tuesday"
            },
            {
              "id": 2,
              "key": "Proud"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 329
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/white.mp4",
          "options": [
            {
              "id": 3,
              "key": "8"
            },
            {
              "id": 1,
              "key": "White"
            },
            {
              "id": 2,
              "key": "Park"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 330
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/yellow.mp4",
          "options": [
            {
              "id": 1,
              "key": "Yellow"
            },
            {
              "id": 2,
              "key": "Sad"
            },
            {
              "id": 3,
              "key": "Teacher"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 331
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/family.mp4",
          "options": [
            {
              "id": 3,
              "key": "6"
            },
            {
              "id": 1,
              "key": "Family"
            },
            {
              "id": 2,
              "key": "November"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 332
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/monday.mp4",
          "options": [
            {
              "id": 1,
              "key": "Monday"
            },
            {
              "id": 3,
              "key": "Grandmother"
            },
            {
              "id": 2,
              "key": "December"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 333
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/hello.mp4",
          "options": [
            {
              "id": 3,
              "key": "Friday"
            },
            {
              "id": 1,
              "key": "Hello"
            },
            {
              "id": 2,
              "key": "Thursday"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 334
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/monkey.mp4",
          "options": [
            {
              "id": 3,
              "key": "2"
            },
            {
              "id": 2,
              "key": "Store"
            },
            {
              "id": 1,
              "key": "Monkey"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 335
        },
        {
          "name": "What word is being fingerspelled?",
          "category": "Alphabet",
          "questionType": "single-video",
          "data": "assets/fingerspell/teacher.mp4",
          "options": [
            {
              "id": 1,
              "key": "Teacher"
            },
            {
              "id": 2,
              "key": "Purple"
            },
            {
              "id": 3,
              "key": "Sad"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 336
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Wednesday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Wednesday'?",
          "options": [
            {
              "id": 2,
              "url": "assets/day/friday.png",
              "key": "Friday"
            },
            {
              "id": 1,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 3,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 337
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Bear'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Bear'?",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/bear.png",
              "key": "Bear"
            },
            {
              "id": 2,
              "url": "assets/animals/horse.png",
              "key": "Horse"
            },
            {
              "id": 3,
              "url": "assets/animals/lion.png",
              "key": "Lion"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 338
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Wednesday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Wednesday'?",
          "options": [
            {
              "id": 3,
              "url": "assets/day/tuesday.png",
              "key": "Tuesday"
            },
            {
              "id": 2,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 1,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 339
        }
      ]
    },
    {
      "category": "Emotions",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Worried'?",
          "category": "Emotions",
          "questionType": "text",
          "data": "Which of these signs means 'Worried'?",
          "options": [
            {
              "id": 2,
              "url": "assets/emotions/angry.png",
              "key": "Angry"
            },
            {
              "id": 3,
              "url": "assets/emotions/confused.png",
              "key": "Confused"
            },
            {
              "id": 1,
              "url": "assets/emotions/worried.png",
              "key": "Worried"
            }
          ],
          "correctOptionId": 1,
          "level": 12,
          "levelUid": 340
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Pig'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Pig'?",
          "options": [
            {
              "id": 3,
              "url": "assets/animals/monkey.png",
              "key": "Monkey"
            },
            {
              "id": 1,
              "url": "assets/animals/pig.png",
              "key": "Pig"
            },
            {
              "id": 2,
              "url": "assets/animals/bear.png",
              "key": "Bear"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 341
        }
      ]
    },
    {
      "category": "Emotions",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Excited'?",
          "category": "Emotions",
          "questionType": "text",
          "data": "Which of these signs means 'Excited'?",
          "options": [
            {
              "id": 3,
              "url": "assets/emotions/tired.png",
              "key": "Tired"
            },
            {
              "id": 2,
              "url": "assets/emotions/angry.png",
              "key": "Angry"
            },
            {
              "id": 1,
              "url": "assets/emotions/excited.png",
              "key": "Excited"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 342
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Wednesday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Wednesday'?",
          "options": [
            {
              "id": 2,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            },
            {
              "id": 3,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 1,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 343
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Sunday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Sunday'?",
          "options": [
            {
              "id": 3,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            },
            {
              "id": 2,
              "url": "assets/day/tuesday.png",
              "key": "Tuesday"
            },
            {
              "id": 1,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 344
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Cat'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Cat'?",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/cat.png",
              "key": "Cat"
            },
            {
              "id": 3,
              "url": "assets/animals/dog.png",
              "key": "Dog"
            },
            {
              "id": 2,
              "url": "assets/animals/pig.png",
              "key": "Pig"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 345
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Father'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Father'?",
          "options": [
            {
              "id": 1,
              "url": "assets/relationships/father.png",
              "key": "Father"
            },
            {
              "id": 2,
              "url": "assets/relationships/grandmother.png",
              "key": "Grandmother"
            },
            {
              "id": 3,
              "url": "assets/relationships/mother.png",
              "key": "Mother"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 346
        }
      ]
    },
    {
      "category": "Emotions",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Sad'?",
          "category": "Emotions",
          "questionType": "text",
          "data": "Which of these signs means 'Sad'?",
          "options": [
            {
              "id": 1,
              "url": "assets/emotions/sad.png",
              "key": "Sad"
            },
            {
              "id": 3,
              "url": "assets/emotions/loved.png",
              "key": "Loved"
            },
            {
              "id": 2,
              "url": "assets/emotions/confused.png",
              "key": "Confused"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 347
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Hospital'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Hospital'?",
          "options": [
            {
              "id": 1,
              "url": "assets/places-and-directions/hospital.png",
              "key": "Hospital"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/park.png",
              "key": "Park"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/left.png",
              "key": "Left"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 348
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Monday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Monday'?",
          "options": [
            {
              "id": 1,
              "url": "assets/day/monday.png",
              "key": "Monday"
            },
            {
              "id": 2,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 3,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 349
        }
      ]
    },
    {
      "category": "Months",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'October'?",
          "category": "Months",
          "questionType": "text",
          "data": "Which of these signs means 'October'?",
          "options": [
            {
              "id": 2,
              "url": "assets/months/november.png",
              "key": "November"
            },
            {
              "id": 1,
              "url": "assets/months/october.png",
              "key": "October"
            },
            {
              "id": 3,
              "url": "assets/months/april.png",
              "key": "April"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 350
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Family'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Family'?",
          "options": [
            {
              "id": 1,
              "url": "assets/relationships/family.png",
              "key": "Family"
            },
            {
              "id": 2,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            },
            {
              "id": 3,
              "url": "assets/relationships/brother.png",
              "key": "Brother"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 351
        }
      ]
    },
    {
      "category": "Months",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'September'?",
          "category": "Months",
          "questionType": "text",
          "data": "Which of these signs means 'September'?",
          "options": [
            {
              "id": 1,
              "url": "assets/months/september.png",
              "key": "September"
            },
            {
              "id": 3,
              "url": "assets/months/may.png",
              "key": "May"
            },
            {
              "id": 2,
              "url": "assets/months/december.png",
              "key": "December"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 352
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Grandfather'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Grandfather'?",
          "options": [
            {
              "id": 2,
              "url": "assets/relationships/mother.png",
              "key": "Mother"
            },
            {
              "id": 3,
              "url": "assets/relationships/family.png",
              "key": "Family"
            },
            {
              "id": 1,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            }
          ],
          "correctOptionId": 1,
          "level": 16,
          "levelUid": 353
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Please'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "Which of these signs means 'Please'?",
          "options": [
            {
              "id": 3,
              "url": "assets/basic-words/sorry.png",
              "key": "Sorry"
            },
            {
              "id": 2,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            },
            {
              "id": 1,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 354
        }
      ]
    },
    {
      "category": "Emotions",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Surprised'?",
          "category": "Emotions",
          "questionType": "text",
          "data": "Which of these signs means 'Surprised'?",
          "options": [
            {
              "id": 1,
              "url": "assets/emotions/surprised.png",
              "key": "Surprised"
            },
            {
              "id": 3,
              "url": "assets/emotions/confused.png",
              "key": "Confused"
            },
            {
              "id": 2,
              "url": "assets/emotions/angry.png",
              "key": "Angry"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 355
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Mother'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Mother'?",
          "options": [
            {
              "id": 3,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            },
            {
              "id": 1,
              "url": "assets/relationships/mother.png",
              "key": "Mother"
            },
            {
              "id": 2,
              "url": "assets/relationships/father.png",
              "key": "Father"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 356
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Saturday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Saturday'?",
          "options": [
            {
              "id": 2,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            },
            {
              "id": 3,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 1,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 357
        }
      ]
    },
    {
      "category": "Color",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Yellow'?",
          "category": "Color",
          "questionType": "text",
          "data": "Which of these signs means 'Yellow'?",
          "options": [
            {
              "id": 1,
              "url": "assets/color/yellow.png",
              "key": "Yellow"
            },
            {
              "id": 2,
              "url": "assets/color/purple.png",
              "key": "Purple"
            },
            {
              "id": 3,
              "url": "assets/color/orange.png",
              "key": "Orange"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 358
        }
      ]
    },
    {
      "category": "Verbs",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Sleep'?",
          "category": "Verbs",
          "questionType": "text",
          "data": "Which of these signs means 'Sleep'?",
          "options": [
            {
              "id": 3,
              "url": "assets/verbs/jump.png",
              "key": "Jump"
            },
            {
              "id": 2,
              "url": "assets/verbs/run.png",
              "key": "Run"
            },
            {
              "id": 1,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 359
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Restaurant'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Restaurant'?",
          "options": [
            {
              "id": 2,
              "url": "assets/places-and-directions/library.png",
              "key": "Library"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/left.png",
              "key": "Left"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/restaurant.png",
              "key": "Restaurant"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 360
        }
      ]
    },
    {
      "category": "Color",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Brown'?",
          "category": "Color",
          "questionType": "text",
          "data": "Which of these signs means 'Brown'?",
          "options": [
            {
              "id": 2,
              "url": "assets/color/gray.png",
              "key": "Gray"
            },
            {
              "id": 1,
              "url": "assets/color/brown.png",
              "key": "Brown"
            },
            {
              "id": 3,
              "url": "assets/color/white.png",
              "key": "White"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 361
        }
      ]
    },
    {
      "category": "Color",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Brown'?",
          "category": "Color",
          "questionType": "text",
          "data": "Which of these signs means 'Brown'?",
          "options": [
            {
              "id": 2,
              "url": "assets/color/purple.png",
              "key": "Purple"
            },
            {
              "id": 1,
              "url": "assets/color/brown.png",
              "key": "Brown"
            },
            {
              "id": 3,
              "url": "assets/color/orange.png",
              "key": "Orange"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 362
        }
      ]
    },
    {
      "category": "Numbers",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means '5'?",
          "category": "Numbers",
          "questionType": "text",
          "data": "Which of these signs means '5'?",
          "options": [
            {
              "id": 3,
              "url": "assets/numbers/9.png",
              "key": "9"
            },
            {
              "id": 1,
              "url": "assets/numbers/5.png",
              "key": "5"
            },
            {
              "id": 2,
              "url": "assets/numbers/4.png",
              "key": "4"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 363
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Sister'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Sister'?",
          "options": [
            {
              "id": 3,
              "url": "assets/relationships/father.png",
              "key": "Father"
            },
            {
              "id": 1,
              "url": "assets/relationships/sister.png",
              "key": "Sister"
            },
            {
              "id": 2,
              "url": "assets/relationships/grandmother.png",
              "key": "Grandmother"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 364
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Tuesday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Tuesday'?",
          "options": [
            {
              "id": 2,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 3,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 1,
              "url": "assets/day/tuesday.png",
              "key": "Tuesday"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 365
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Dog'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Dog'?",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/dog.png",
              "key": "Dog"
            },
            {
              "id": 3,
              "url": "assets/animals/rabbit.png",
              "key": "Rabbit"
            },
            {
              "id": 2,
              "url": "assets/animals/pig.png",
              "key": "Pig"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 366
        }
      ]
    },
    {
      "category": "Months",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'June'?",
          "category": "Months",
          "questionType": "text",
          "data": "Which of these signs means 'June'?",
          "options": [
            {
              "id": 2,
              "url": "assets/months/may.png",
              "key": "May"
            },
            {
              "id": 1,
              "url": "assets/months/june.png",
              "key": "June"
            },
            {
              "id": 3,
              "url": "assets/months/april.png",
              "key": "April"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 367
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Library'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Library'?",
          "options": [
            {
              "id": 2,
              "url": "assets/places-and-directions/school.png",
              "key": "School"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/right.png",
              "key": "Right"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/library.png",
              "key": "Library"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 368
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Hello'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "Which of these signs means 'Hello'?",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            },
            {
              "id": 2,
              "url": "assets/basic-words/yes.png",
              "key": "Yes"
            },
            {
              "id": 3,
              "url": "assets/basic-words/no.png",
              "key": "No"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 369
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Cat'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Cat'?",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/cat.png",
              "key": "Cat"
            },
            {
              "id": 2,
              "url": "assets/animals/fish.png",
              "key": "Fish"
            },
            {
              "id": 3,
              "url": "assets/animals/rabbit.png",
              "key": "Rabbit"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 370
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Pig'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Pig'?",
          "options": [
            {
              "id": 1,
              "url": "assets/animals/pig.png",
              "key": "Pig"
            },
            {
              "id": 3,
              "url": "assets/animals/bear.png",
              "key": "Bear"
            },
            {
              "id": 2,
              "url": "assets/animals/bird.png",
              "key": "Bird"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 371
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Elephant'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Elephant'?",
          "options": [
            {
              "id": 3,
              "url": "assets/animals/bird.png",
              "key": "Bird"
            },
            {
              "id": 1,
              "url": "assets/animals/elephant.png",
              "key": "Elephant"
            },
            {
              "id": 2,
              "url": "assets/animals/dog.png",
              "key": "Dog"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 372
        }
      ]
    },
    {
      "category": "Verbs",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Jump'?",
          "category": "Verbs",
          "questionType": "text",
          "data": "Which of these signs means 'Jump'?",
          "options": [
            {
              "id": 1,
              "url": "assets/verbs/jump.png",
              "key": "Jump"
            },
            {
              "id": 2,
              "url": "assets/verbs/write.png",
              "key": "Write"
            },
            {
              "id": 3,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 373
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Monday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Monday'?",
          "options": [
            {
              "id": 1,
              "url": "assets/day/monday.png",
              "key": "Monday"
            },
            {
              "id": 3,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            },
            {
              "id": 2,
              "url": "assets/day/tuesday.png",
              "key": "Tuesday"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 374
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Friday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Friday'?",
          "options": [
            {
              "id": 3,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            },
            {
              "id": 2,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 1,
              "url": "assets/day/friday.png",
              "key": "Friday"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 375
        }
      ]
    },
    {
      "category": "Months",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'September'?",
          "category": "Months",
          "questionType": "text",
          "data": "Which of these signs means 'September'?",
          "options": [
            {
              "id": 1,
              "url": "assets/months/september.png",
              "key": "September"
            },
            {
              "id": 2,
              "url": "assets/months/june.png",
              "key": "June"
            },
            {
              "id": 3,
              "url": "assets/months/november.png",
              "key": "November"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 376
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Friend'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Friend'?",
          "options": [
            {
              "id": 2,
              "url": "assets/relationships/doctor.png",
              "key": "Doctor"
            },
            {
              "id": 3,
              "url": "assets/relationships/father.png",
              "key": "Father"
            },
            {
              "id": 1,
              "url": "assets/relationships/friend.png",
              "key": "Friend"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 377
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Sunday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Sunday'?",
          "options": [
            {
              "id": 2,
              "url": "assets/day/friday.png",
              "key": "Friday"
            },
            {
              "id": 1,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 3,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 378
        }
      ]
    },
    {
      "category": "Color",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'White'?",
          "category": "Color",
          "questionType": "text",
          "data": "Which of these signs means 'White'?",
          "options": [
            {
              "id": 2,
              "url": "assets/color/red.png",
              "key": "Red"
            },
            {
              "id": 3,
              "url": "assets/color/blue.png",
              "key": "Blue"
            },
            {
              "id": 1,
              "url": "assets/color/white.png",
              "key": "White"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 379
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Wednesday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Wednesday'?",
          "options": [
            {
              "id": 1,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 3,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 2,
              "url": "assets/day/tuesday.png",
              "key": "Tuesday"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 380
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Teacher'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Teacher'?",
          "options": [
            {
              "id": 3,
              "url": "assets/relationships/mother.png",
              "key": "Mother"
            },
            {
              "id": 2,
              "url": "assets/relationships/grandmother.png",
              "key": "Grandmother"
            },
            {
              "id": 1,
              "url": "assets/relationships/teacher.png",
              "key": "Teacher"
            }
          ],
          "correctOptionId": 1,
          "level": 9,
          "levelUid": 381
        }
      ]
    },
    {
      "category": "Color",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Purple'?",
          "category": "Color",
          "questionType": "text",
          "data": "Which of these signs means 'Purple'?",
          "options": [
            {
              "id": 3,
              "url": "assets/color/black.png",
              "key": "Black"
            },
            {
              "id": 2,
              "url": "assets/color/red.png",
              "key": "Red"
            },
            {
              "id": 1,
              "url": "assets/color/purple.png",
              "key": "Purple"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 382
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Hello'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "Which of these signs means 'Hello'?",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            },
            {
              "id": 2,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            },
            {
              "id": 3,
              "url": "assets/basic-words/sorry.png",
              "key": "Sorry"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 383
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'No'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "Which of these signs means 'No'?",
          "options": [
            {
              "id": 3,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            },
            {
              "id": 1,
              "url": "assets/basic-words/no.png",
              "key": "No"
            },
            {
              "id": 2,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            }
          ],
          "correctOptionId": 1,
          "level": 4,
          "levelUid": 384
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Right'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Right'?",
          "options": [
            {
              "id": 2,
              "url": "assets/places-and-directions/store.png",
              "key": "Store"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/left.png",
              "key": "Left"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/right.png",
              "key": "Right"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 385
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Monday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Monday'?",
          "options": [
            {
              "id": 3,
              "url": "assets/day/sunday.png",
              "key": "Sunday"
            },
            {
              "id": 1,
              "url": "assets/day/monday.png",
              "key": "Monday"
            },
            {
              "id": 2,
              "url": "assets/day/saturday.png",
              "key": "Saturday"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 386
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Bird'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Bird'?",
          "options": [
            {
              "id": 3,
              "url": "assets/animals/cow.png",
              "key": "Cow"
            },
            {
              "id": 1,
              "url": "assets/animals/bird.png",
              "key": "Bird"
            },
            {
              "id": 2,
              "url": "assets/animals/cat.png",
              "key": "Cat"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 387
        }
      ]
    },
    {
      "category": "Verbs",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Eat'?",
          "category": "Verbs",
          "questionType": "text",
          "data": "Which of these signs means 'Eat'?",
          "options": [
            {
              "id": 2,
              "url": "assets/verbs/run.png",
              "key": "Run"
            },
            {
              "id": 3,
              "url": "assets/verbs/sleep.png",
              "key": "Sleep"
            },
            {
              "id": 1,
              "url": "assets/verbs/eat.png",
              "key": "Eat"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 388
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Store'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Store'?",
          "options": [
            {
              "id": 1,
              "url": "assets/places-and-directions/store.png",
              "key": "Store"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/right.png",
              "key": "Right"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/hospital.png",
              "key": "Hospital"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 389
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Tuesday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Tuesday'?",
          "options": [
            {
              "id": 1,
              "url": "assets/day/tuesday.png",
              "key": "Tuesday"
            },
            {
              "id": 3,
              "url": "assets/day/friday.png",
              "key": "Friday"
            },
            {
              "id": 2,
              "url": "assets/day/thursday.png",
              "key": "Thursday"
            }
          ],
          "correctOptionId": 1,
          "level": 15,
          "levelUid": 390
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Family'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Family'?",
          "options": [
            {
              "id": 3,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            },
            {
              "id": 1,
              "url": "assets/relationships/family.png",
              "key": "Family"
            },
            {
              "id": 2,
              "url": "assets/relationships/friend.png",
              "key": "Friend"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 391
        }
      ]
    },
    {
      "category": "Day",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Monday'?",
          "category": "Day",
          "questionType": "text",
          "data": "Which of these signs means 'Monday'?",
          "options": [
            {
              "id": 3,
              "url": "assets/day/wednesday.png",
              "key": "Wednesday"
            },
            {
              "id": 1,
              "url": "assets/day/monday.png",
              "key": "Monday"
            },
            {
              "id": 2,
              "url": "assets/day/friday.png",
              "key": "Friday"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 392
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Family'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Family'?",
          "options": [
            {
              "id": 2,
              "url": "assets/relationships/teacher.png",
              "key": "Teacher"
            },
            {
              "id": 1,
              "url": "assets/relationships/family.png",
              "key": "Family"
            },
            {
              "id": 3,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            }
          ],
          "correctOptionId": 1,
          "level": 8,
          "levelUid": 393
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Restaurant'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Restaurant'?",
          "options": [
            {
              "id": 3,
              "url": "assets/places-and-directions/school.png",
              "key": "School"
            },
            {
              "id": 1,
              "url": "assets/places-and-directions/restaurant.png",
              "key": "Restaurant"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/hospital.png",
              "key": "Hospital"
            }
          ],
          "correctOptionId": 1,
          "level": 10,
          "levelUid": 394
        }
      ]
    },
    {
      "category": "Basic Words",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Please'?",
          "category": "Basic Words",
          "questionType": "text",
          "data": "Which of these signs means 'Please'?",
          "options": [
            {
              "id": 1,
              "url": "assets/basic-words/please.png",
              "key": "Please"
            },
            {
              "id": 2,
              "url": "assets/basic-words/hello.png",
              "key": "Hello"
            },
            {
              "id": 3,
              "url": "assets/basic-words/sorry.png",
              "key": "Sorry"
            }
          ],
          "correctOptionId": 1,
          "level": 7,
          "levelUid": 395
        }
      ]
    },
    {
      "category": "Months",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'November'?",
          "category": "Months",
          "questionType": "text",
          "data": "Which of these signs means 'November'?",
          "options": [
            {
              "id": 3,
              "url": "assets/months/may.png",
              "key": "May"
            },
            {
              "id": 2,
              "url": "assets/months/october.png",
              "key": "October"
            },
            {
              "id": 1,
              "url": "assets/months/november.png",
              "key": "November"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 396
        }
      ]
    },
    {
      "category": "Places and Directions",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Park'?",
          "category": "Places and Directions",
          "questionType": "text",
          "data": "Which of these signs means 'Park'?",
          "options": [
            {
              "id": 1,
              "url": "assets/places-and-directions/park.png",
              "key": "Park"
            },
            {
              "id": 2,
              "url": "assets/places-and-directions/up.png",
              "key": "Up"
            },
            {
              "id": 3,
              "url": "assets/places-and-directions/store.png",
              "key": "Store"
            }
          ],
          "correctOptionId": 1,
          "level": 18,
          "levelUid": 397
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Fish'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Fish'?",
          "options": [
            {
              "id": 3,
              "url": "assets/animals/pig.png",
              "key": "Pig"
            },
            {
              "id": 1,
              "url": "assets/animals/fish.png",
              "key": "Fish"
            },
            {
              "id": 2,
              "url": "assets/animals/monkey.png",
              "key": "Monkey"
            }
          ],
          "correctOptionId": 1,
          "level": 6,
          "levelUid": 398
        }
      ]
    },
    {
      "category": "Relationships",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Grandfather'?",
          "category": "Relationships",
          "questionType": "text",
          "data": "Which of these signs means 'Grandfather'?",
          "options": [
            {
              "id": 2,
              "url": "assets/relationships/father.png",
              "key": "Father"
            },
            {
              "id": 1,
              "url": "assets/relationships/grandfather.png",
              "key": "Grandfather"
            },
            {
              "id": 3,
              "url": "assets/relationships/family.png",
              "key": "Family"
            }
          ],
          "correctOptionId": 1,
          "level": 11,
          "levelUid": 399
        }
      ]
    },
    {
      "category": "Animals",
      "group": "Identify the correct sign (image options) – extra",
      "questions": [
        {
          "name": "Which of these signs means 'Dog'?",
          "category": "Animals",
          "questionType": "text",
          "data": "Which of these signs means 'Dog'?",
          "options": [
            {
              "id": 2,
              "url": "assets/animals/cat.png",
              "key": "Cat"
            },
            {
              "id": 3,
              "url": "assets/animals/monkey.png",
              "key": "Monkey"
            },
            {
              "id": 1,
              "url": "assets/animals/dog.png",
              "key": "Dog"
            }
          ],
          "correctOptionId": 1,
          "level": 5,
          "levelUid": 400
        }
      ]
    }
  ];

  function reorderByLevelAndReid(questions, direction = 'asc') {
  const dir = direction === 'desc' ? -1 : 1;

  // Schwartzian transform for cross-engine stable sort
  const decorated = questions.map((q, idx) => ({
    idx,
    level: typeof q.level === 'number' ? q.level : Number.POSITIVE_INFINITY,
    value: q
  }));

  decorated.sort((a, b) => {
    if (a.level === b.level) return a.idx - b.idx; // preserve original order on ties
    return (a.level - b.level) * dir;
  });

  // Rebuild with new sequential ids
  return decorated.map((item, i) => {
    const { value } = item;
    const { id: _oldId, ...rest } = value; // drop old id
    return { id: i + 1, ...rest };
  });
}

const output = reorderByLevelAndReid(transformQuizData(original));
console.log(JSON.stringify(output));
