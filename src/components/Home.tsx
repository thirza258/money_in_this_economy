import React from "react";
import { Container, Typography, Button, Grid, Paper } from "@mui/material";

const Home: React.FC = () => {
  const news = [
    {
      title: "Breaking News: Market Hits Record High",
      date: "2025-01-08",
      description:
        "The stock market reached an all-time high today, with major indices gaining significant ground. Analysts are optimistic about the economic outlook.",
      link: "https://example.com/news1",
    },
    {
      title: "Tech Conference 2025: Innovations in AI",
      date: "2025-01-07",
      description:
        "The annual Tech Conference highlighted groundbreaking innovations in artificial intelligence, with keynote speeches from industry leaders.",
      link: "https://example.com/news2",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ marginTop: "50px" }}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center" gutterBottom>
            MoneyInThisEconomy
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Take control of your personal finances with our easy-to-use tools
            and resources.
          </Typography>
        </Grid>
      </Grid>

      <div className="w-full border-t border-black my-4"></div>
      <h2>The news you might missed</h2>
      
      <div className="p-4">
      {news.map((item, index) => (
        <a key={index} href={item.link} className="block mb-4 border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="text-base text-gray-700 mt-2">
              {item.description.length > 200
                ? `${item.description.substring(0, 200)}...`
                : item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
    </Container>
  );
};

export default Home;
