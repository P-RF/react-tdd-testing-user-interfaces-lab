import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text 'Hi, I'm ________'", () => {
  //Arrange
  render (<App />);

  //Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  //Assert
  expect(topLevelHeading).toBeInTheDocument();
});

// An image of yourself with alt text identifying the content of the image
it("displays an image of Priscila with an alt text identifying the content of the image", () => {
  // Arrange
  render (<App />);

  //Act
  const imgDisplay = screen.getByAltText('Image of Priscila');

  // Assert
  expect (imgDisplay).toBeInTheDocument();
  expect(imgDisplay).toHaveAttribute('src', '/images/IMG-20230326-WA0016(1).jpg');
});

// A second-level heading with the text About Me
it("displays a second-level heading with the text 'About Me'", () => {
  // Arrange
  render (<App />);

  // Act
  const secondLevelHeading = screen.getByRole("heading", {
    name: /About Me/i,
    exact: false,
    level: 2,
  });
  //Assert
  expect(secondLevelHeading).toBeInTheDocument();
});

it("displays a paragraph for the biography", () => {
  //Arrange
  render (<App />);

  //Act
  const bioParagraph = screen.getByTestId("biography");

  //Assert
  expect(bioParagraph).toBeInTheDocument();
});

it("displays two links, one to a GitHub page, and one to a LinkedIn page", () => {
  // Arrange
  render (<App />);

  // Act
  const githubLink = screen.getByRole('link', { name: 'GitHub' })

  const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' })

  // Assert
  expect(githubLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/P-RF');
  expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/priscilarf/' );
});