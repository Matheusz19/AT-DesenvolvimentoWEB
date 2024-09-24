import React, { useEffect, useState } from 'react';

const PratosDropdown = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategories(data.categories));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then(response => response.json())
        .then(data => setMeals(data.meals));
    }
  }, [selectedCategory]);

  return (
    <div>
      <h3>Esse componente se refere a Questão 2.4</h3>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Selecione uma categoria</option>
        {categories.map(category => (
          <option key={category.idCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>

      {meals.length > 0 && (
        <div>
          <h3>{selectedCategory}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {meals.map(meal => (
              <div key={meal.idMeal} style={{ margin: '10px' }}>
                <p>{meal.strMeal}</p>
                <img 
                  src={meal.strMealThumb} 
                  alt={meal.strMeal} 
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PratosDropdown;