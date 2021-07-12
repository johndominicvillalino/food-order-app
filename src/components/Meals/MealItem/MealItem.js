import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = props => {


    const price = `$${props.price.toFixed(2)}`;

    return <li className={classes.meal}>
        <div>
            <h3>{props.name}
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}> {price}</div>
            </h3>
        </div>
       
        <div>
        <MealItemForm/>
        </div>
    </li>

};

export default MealItem;