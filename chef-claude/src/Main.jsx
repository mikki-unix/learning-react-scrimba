import "./Main.css";

export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");

    ingredients.push(newIngredient);
    console.log(ingredients);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input placeholder="e.g. oregano" name="ingredient"/>
        <button>Add ingredient</button>
      </form>

      <ul>{ingredientListItems}</ul>
    </main>
  );
}
