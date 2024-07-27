const users = [
    {
      _id: '64b2f6c04a3e3f6b0b1f9c74', // Replace with actual MongoDB ObjectId
      username: 'JohnDoe',
      email: 'johndoe@example.com',
      password: 'hashedpassword123', // Use a hashed password for real applications
      favorite_foods: [
        {
          food: 'Pasta Carbonara',
          id: 1,
          description: 'A delicious Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
          country_id: 'Italy'
        },
        {
          food: 'Sushi',
          id: 2,
          description: 'A traditional Japanese dish of vinegared rice accompanied by various ingredients such as seafood, vegetables, and occasionally tropical fruits.',
          country_id: 'Japan'
        }
      ],
      reviews: [
        '64b2f6c04a3e3f6b0b1f9c75', // Replace with actual MongoDB ObjectId for reviews
        '64b2f6c04a3e3f6b0b1f9c76'  // Replace with actual MongoDB ObjectId for reviews
      ]
    },
    {
      _id: '64b2f6c04a3e3f6b0b1f9c77', // Replace with actual MongoDB ObjectId
      username: 'JaneSmith',
      email: 'janesmith@example.com',
      password: 'hashedpassword456', // Use a hashed password for real applications
      favorite_foods: [
        {
          food: 'Tacos',
          id: 3,
          description: 'A traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.',
          country_id: 'Mexico'
        },
        {
          food: 'Croissant',
          id: 5,
          description: 'A buttery, flaky, and soft pastry, named for its historical crescent shape.',
          country_id: 'France'
        }
      ],
      reviews: [
        '64b2f6c04a3e3f6b0b1f9c78', // Replace with actual MongoDB ObjectId for reviews
        '64b2f6c04a3e3f6b0b1f9c79'  // Replace with actual MongoDB ObjectId for reviews
      ]
    },
    {
      _id: '64b2f6c04a3e3f6b0b1f9c80', // Replace with actual MongoDB ObjectId
      username: 'AliceJohnson',
      email: 'alicejohnson@example.com',
      password: 'hashedpassword789', // Use a hashed password for real applications
      favorite_foods: [
        {
          food: 'Butter Chicken',
          id: 4,
          description: 'An Indian dish of chicken in a mildly spiced tomato sauce.',
          country_id: 'India'
        },
        {
          food: 'Paella',
          id: 6,
          description: 'A Spanish rice dish originally from Valencia.',
          country_id: 'Spain'
        }
      ],
      reviews: [
        '64b2f6c04a3e3f6b0b1f9c81', // Replace with actual MongoDB ObjectId for reviews
        '64b2f6c04a3e3f6b0b1f9c82'  // Replace with actual MongoDB ObjectId for reviews
      ]
    }
  ];
  
  module.exports = users;
  