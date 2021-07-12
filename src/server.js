import express from 'express';
import cors from 'cors';
import uuid from 'uuid';

const fakeCars = {
      _id: "60e5403569523a475aff3fbb",
      id: 97045,
      title: "Ferrari 246 dino GT 1973",
      makeId: 4400,
      price: 566,
      makeKey: "Ferrari",
      images: [
        {
          uri: "https://particleforward.com/api/challenge/assets/image1",
          set: "fe4cfedffdffffffff",
        },
        {
          uri: "https://particleforward.com/api/challenge/assets/image1",
          set: "fe4cfedffdffffffff",
        },
        {
          uri: "https://particleforward.com/api/challenge/assets/image2",
          set: "fe4cfedffdffffffff",
        },
        {
          uri: "https://particleforward.com/api/challenge/assets/image3",
          set: "fe4cfedffdffffffff",
        },
        {
          uri: "https://particleforward.com/api/challenge/assets/image4",
          set: "fe4cfedffdffffffff",
        },
      ],
    };

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());

// The route for getting a list of all cars
app.get('/cars', (req, res) => {
    res.status(200).json(fakeCars);
});

// The route for getting a list of all cars, but with a delay
// (to display the loading component better)
app.get('/cars-delay', (req, res) => {
    setTimeout(() => res.status(200).json(fakeCars), 2000);
});

// The route for creating new car
app.post('/cars', (req, res) => {
    const { car } = req.body;
    if (text) {
        const insertedCar = {
            id: uuid(),
            createdAt: Date.now(),
            car,
        }
        fakeCars.push(insertedCar);
        res.status(200).json(insertedCar);
    } else {
        res.status(400).json({ message: 'Wrong request body' });
    }
});

// The route for deleting a car item
app.delete('/cars/:id', (req, res) => {
    const { id } = req.params;
    const removedCar = fakeCars.find(car => car.id === id);
    fakeCars = fakeCars.filter(car => car.id !== id);
    res.status(200).json(removedCar);
});

app.listen(8090, () => console.log("Server listening on port 8090"));
