import React, { useState } from "react";

const OfflinePage = () => {
  const recipes = [
    "Spaghetti Carbonara 🍝",
    "Cheeseburger 🍔",
    "Margherita Pizza 🍕",
    "Butter Chicken 🍗",
    "Caesar Salad 🥗",
    "Sushi Rolls 🍣",
    "Chocolate Cake 🍫",
    "Tacos 🌮",
    "Pasta Primavera 🍝",
    "Paneer Tikka 🍢",
    "Masala Dosa 🥞",
    "Vegetable Stir Fry 🥕",
  ];

  const [randomRecipe, setRandomRecipe] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const suggestRecipe = () => {
    setSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setRandomRecipe(recipes[randomIndex]);
      setSpinning(false);
    }, 1500); // 1.5-second delay for a fun spinning effect
  };

  return (
    <div
      style={{
        textAlign: "center",
        background: "#fff7e6",
        height: "100vh",
        color: "#222",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        backgroundSize: "cover",
        animation: "backgroundAnimation 15s ease-in-out infinite",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Oops! You're Offline 😟
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Looks like you're disconnected. Let's find you a tasty recipe! 🍽️
      </p>

      {/* Chef Emoji with animation */}
      <div
        style={{
          marginBottom: "20px",
          fontSize: "120px", // Increase the size of the emoji
          animation: "chefAnimation 2s ease-in-out infinite",
        }}
      >
        👨‍🍳
      </div>

      {/* Recipe Suggestion Button */}
      <button
        onClick={suggestRecipe}
        style={{
          padding: "15px 30px",
          fontSize: "1.2rem",
          background: "#ff6347",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        {spinning ? "Spinning..." : "Give me a Recipe!"}
      </button>

      {/* Recipe Display */}
      {randomRecipe && (
        <div
          style={{
            background: "#fff",
            padding: "15px",
            border: "2px solid #ff6347",
            borderRadius: "10px",
            maxWidth: "300px",
            marginTop: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            transform: randomRecipe ? "scale(1)" : "scale(0.9)",
          }}
        >
          <h2 style={{ fontSize: "1.6rem", color: "#222" }}>{randomRecipe}</h2>
          <p style={{ fontSize: "1rem", marginTop: "10px" }}>
            Ready to cook once you're back online! 🥄
          </p>
        </div>
      )}

      {/* Fun Food Fact */}
      <p style={{ fontSize: "1rem", marginTop: "30px", color: "#ff6347" }}>
        "Did you know? The world's most expensive pizza is sold for $12,000!"
      </p>
    </div>
  );
};

export default OfflinePage;
