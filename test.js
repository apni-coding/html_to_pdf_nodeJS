const userInfo = {
    firstName: "vivek",
    lastName: "verma",
    age: 21,
    gender: 'Male'
  };
  
  const htmlcode = `
  <html>
  <head>
      <title>User Information Card</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f0f0f0;
          }
  
          .card {
              width: 300px;
              margin: 20px auto;
              background-color: #fff;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              padding: 20px;
              box-sizing: border-box;
          }
  
          h1 {
              color: blue;
              margin-bottom: 10px;
          }
  
          p {
              font-style: italic;
              margin-bottom: 5px;
          }
  
          .user-info {
              margin-bottom: 20px;
          }
      </style>
  </head>
  <body>
      <div class="card">
          <h1>User Information</h1>
          <div class="user-info">
              <p><strong>First Name:</strong> ${userInfo.firstName}</p>
              <p><strong>Last Name:</strong> ${userInfo.lastName}</p>
              <p><strong>Age:</strong> ${userInfo.age}</p>
              <p><strong>Gender:</strong> ${userInfo.gender}</p>
          </div>
      </div>
  </body>
  </html>
  `;


  
{/* <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline Style Example</title>
</head>
<body>
    <div style="background-color: #f0f0f0; padding: 20px;">
        <h1 style="color: blue; text-align: center;">Welcome to Inline Style Example</h1>
        <p style="font-size: 16px; line-height: 1.5;">This is an example of using inline styles in HTML. Inline styles are applied directly to individual HTML elements using the style attribute.</p>
        <button style="background-color: green; color: white; padding: 10px 20px; border: none; border-radius: 5px;">Click Me</button>
    </div>
</body>
</html> */}

  