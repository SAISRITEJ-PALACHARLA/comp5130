import React, { useState, useEffect } from 'react';
import '../App.css';

const MealPlanningPage = () => {
  const [selectedDay, setSelectedDay] = useState('monday');
  const [mealPlans, setMealPlans] = useState(() => {
    const savedPlans = localStorage.getItem('mealPlans');
    return savedPlans
      ? JSON.parse(savedPlans)
      : {
          monday: { breakfast: '', lunch: '', dinner: '', notes: '' },
          tuesday: { breakfast: '', lunch: '', dinner: '', notes: '' },
          wednesday: { breakfast: '', lunch: '', dinner: '', notes: '' },
          thursday: { breakfast: '', lunch: '', dinner: '', notes: '' },
          friday: { breakfast: '', lunch: '', dinner: '', notes: '' },
          saturday: { breakfast: '', lunch: '', dinner: '', notes: '' },
          sunday: { breakfast: '', lunch: '', dinner: '', notes: '' },
        };
  });

  useEffect(() => {
    localStorage.setItem('mealPlans', JSON.stringify(mealPlans));
  }, [mealPlans]);

  const handleMealUpdate = (mealType) => {
    const meal = prompt(`Enter ${mealType} for ${selectedDay}:`);
    if (meal) {
      setMealPlans({
        ...mealPlans,
        [selectedDay]: {
          ...mealPlans[selectedDay],
          [mealType]: meal,
        },
      });
    }
  };

  const generateShoppingList = () => {
    const shoppingList = [];
    Object.values(mealPlans).forEach((day) => {
      Object.entries(day).forEach(([mealType, meal]) => {
        if (meal && mealType !== 'notes') {
          shoppingList.push(meal);
        }
      });
    });
    alert(`Shopping List:\n${shoppingList.join('\n')}`);
  };

  const shareMealPlan = () => {
    const meals = Object.entries(mealPlans[selectedDay])
      .map(([mealType, meal]) => `${mealType}: ${meal}`)
      .join('\n');
    navigator.clipboard
      .writeText(meals)
      .then(() => alert('Meal plan copied to clipboard! Share it with your friends and family.'));
  };

  return (
    <div className="meal-planning-container">
      <h1 className="meal-planning-title">
        Meal Planning for {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}
      </h1>

      <div className="day-selector">
        {Object.keys(mealPlans).map((day) => (
          <button
            key={day}
            className={`day-button ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </button>
        ))}
      </div>

      <div className="meal-cards">
        {Object.entries(mealPlans[selectedDay]).map(([mealType, meal]) => (
          <div key={mealType} className="meal-card">
            <h2>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h2>
            <p>{meal || 'No meal added yet'}</p>
            <button onClick={() => handleMealUpdate(mealType)}>Add/Edit {mealType}</button>
          </div>
        ))}
      </div>

      <div className="actions">
        <button className="action-button" onClick={generateShoppingList}>
          Generate Shopping List
        </button>
        <button className="action-button" onClick={shareMealPlan}>
          Share Meal Plan
        </button>
      </div>
    </div>
  );
};

export default MealPlanningPage;
