[![es](https://img.shields.io/badge/lang-es-green.svg)](README.es.md)

# Learn DDD Step by Step, Using "The DDD Universe" Cards

In this series of workshops, we will be working on a very basic and plain code. We will face small challenges to transform it into a structure more in line with the current DDD standards.

## Scenario

We are a startup that wants to bring back the simplicity of posting ads, imitating how it was done in the past. Previously, posters were glued on the streets or on bulletin boards advertising things. Our startup wants to revive that idea but in a digital format. Now, there are digital panels in civic centers, and we have an agreement to publish on them.

We start the proof of concept with a civic center near our offices.

## Proof of Concept Functionality

- Each user can publish as many ads as they want.
- As it is a proof of concept, there is no user management or ad supervision system as such.
- To avoid unwanted ads, the civic center staff is responsible for creating and publishing the ads in the system.
- Each ad has a password that allows modifying its content or deleting it. In this case, we decided to use the civic center's ID number as the password for the advertiser.
- When the ad is published, the advertiser receives an identifier to reference the ad if they want to modify or remove it in the future. But the only one who can do it is still the person responsible for the civic center.

## Problem

Our code is an MVP, and it seems like we are starting to get good feedback. The civic center is sending us new ideas that we will likely have to implement, so we have decided to tidy up the code before we become overwhelmed with success when scaling the idea.

## Towards a Solution

We have been told that by using Hexagonal Architecture with DDD, we can mitigate many problems and it will help us scale our product technically, giving us agility (or so we hope).

## We Have an Ally: End-to-End Tests in Our API

Luckily, we have tests that verify the final result of our API, so we can refactor our code calmly.

### [Facilitator's Script](doc/en/refactor-to-hexagonal-architecture.md)
