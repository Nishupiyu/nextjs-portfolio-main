export async function POST(req, res) {
  try {
    // Parse incoming request data
    const { email, subject, message } = await req.json();
    
    // Log the received data
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Return a success response
    return Response.json({
      success: true,
      message: "Form submitted successfully!",
      data: { email, subject, message },
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "An error occurred while processing your request.",
      error: error.message,
    });
  }
}

