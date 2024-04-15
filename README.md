This Angular application allows users to search for GitHub users and view their profiles and repositories. It includes several features:

## Features

### 1. User Search

- Users can search for GitHub users by username.
- The application fetches user details from the GitHub API.

### 2. User Profile Display

- Displays the profile information of the searched GitHub user.
- Shows the user's name, bio, location, Twitter handle, and link to their GitHub profile.

### 3. Pagination

- Server-side pagination: Fetches repositories from the GitHub API in pages.
- Users can select the number of repositories per page using a dropdown.
- By default, displays 10 repositories per page, with a maximum of 100 repositories per page.

### 4. Copy to Clipboard Button

- Allows users to copy text to the clipboard.
- Used to copy GitHub user's profile link.

### 5. Caching

- Caches API responses to avoid duplicate calls.
- Used sessionStorage to cache the user's repositories.
- Ensures that repeated calls to the same user's repositories do not result in additional API requests.

### 6. Responsive

- Responsive design: The application is designed to work on mobile, tablet, and desktop devices.
- Uses Tailwind CSS media queries to adjust the layout and behavior of the application based on the device's screen size.

### 7. Loading State

- Displays a loading state, i.e., loading skeleton animation while the application is fetching data from the GitHub API.

## Installation

Commands to run the project

- `npm install`
- `npm install -g @angular/cli`
- `ng serve --open`

### 8. Live

[Demo](https://fyle-internship-challenge-23-olive.vercel.app/)

<!--

# Fyle Frontend Challenge

## Who is this for?

This challenge is meant for candidates who wish to intern at Fyle and work with our engineering team. The candidate should be able to commit to at least 6 months of dedicated time for internship.

## Why work at Fyle?

Fyle is a fast-growing Expense Management SaaS product. We are ~40 strong engineering team at the moment.

We are an extremely transparent organization. Check out our [careers page](https://careers.fylehq.com) that will give you a glimpse of what it is like to work at Fyle. Also, check out our Glassdoor reviews [here](https://www.glassdoor.co.in/Reviews/Fyle-Reviews-E1723235.htm). You can read stories from our teammates [here](https://stories.fylehq.com).

## Challenge outline

This challenge involves implementing application using github api.

The services that you need to use are already implemented - check out ApiService.

You can see details of this challenge [here](https://fyleuniverse.notion.site/fyleuniverse/Fyle-Frontend-development-challenge-cb5085e5e0864e769e7b98c694400aaa)

**Note** - This challenge is in angular. We work on angular frameworks & after you join we expect the same from you. Hence it is required to complete this assignement in angular itself.

## What happens next?

You will hear back within 48 hours from us via email.

## Installation

1. Fork this repository to your github account.
2. Clone the forked repository and proceed with steps mentioned below.

### Install requirements

- Install angular cli [Ref](https://angular.io/cli)
- `npm install` in this repository

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation). -->
