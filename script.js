
  let totalOrders = 84159;   // initial orders
  let activeUsers = 19605;   // initial active users

  const totalOrdersElement = document.getElementById("totalOrdersCount");
  const activeUsersElement = document.getElementById("activeUsersCount");

  setInterval(() => {
    // Simulate total orders increasing only
    const orderChange = Math.floor(Math.random() * 11);  // +0 to +10
    totalOrders += orderChange;

    // Simulate active users going up/down
    const userChange = Math.floor(Math.random() * 21) - 10; // -10 to +10
    activeUsers = Math.max(0, activeUsers + userChange);  // prevent negative values

    // Update the DOM
    totalOrdersElement.textContent = totalOrders.toLocaleString();
    activeUsersElement.textContent = activeUsers.toLocaleString();

  }, 7000); // update every second

