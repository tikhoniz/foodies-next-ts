import MealItem from './meal-item'
import cls from './meals-grid.module.css'

export default function MealsGrid({ meals }:{meals:any[]}) {
  return (
    <ul className={cls.meals}>
      {meals.map((meal:any) => {
        return (
          <li key={meal._id}>
            <MealItem meal={meal} />
          </li>
        )
      })}
    </ul>
  )
}
