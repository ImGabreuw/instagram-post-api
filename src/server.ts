import application from "./application";

application.listen(process.env.PORT, () => {
  const port = process.env.PORT;

  console.log(`
  Server running on port ${port}\n
  Go to: http://localhost:${port}
  `)
});