import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


import classes from './AvailableMeals.module.css'


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Puso',
        description: 'Lamian nga Puso!',
        price: 3.0,
    },
    {
        id: 'm2',
        name: 'Taogi',
        description: 'Bag.ong Luto Ke!',
        price: 2.00,
    },
    {
        id: 'm3',
        name: 'Ginabot',
        description: 'Makasakit sa kalawasan pero lami!',
        price: 15.00,
    },
    {
        id: 'm4',
        name: 'Mountain Dew',
        description: 'Naa pa d ay laing softdrinks?',
        price: 15.00,
    },
];


const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => {
        return <MealItem 
        key={meal.id} 
        id={meal.id}
        price={meal.price} 
        name={meal.name}
        description={meal.description}/> 
           
     
    });

    return <section className={classes.meals}>
        <Card><ul>
            {mealsList}
        </ul>
        </Card>
    </section>

}

export default AvailableMeals;