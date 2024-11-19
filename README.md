

<img src="https://suign.github.io/assets/imgs/cleakerme.png" alt="Cleaker Me" width="377" height="377">

# CLEAKER
##### cleaked (connected and recognized).
**Visit:** https://neurons.me to learn more.

# README
**Cleaker** is a pronoun representing a [person](https://suign.github.io/this.me/), place, or thing in space and time and serves connecting all points **within a fixed distance.** 
Its role is to function as a **Digital Identifier (DID)** **Creator**;  making **cleaker** accept an object (like a **.me** profile) and **return a unique DID for it.**

## Install with npm.
```bash
npm i cleaker
```

`Cleaker` is a versatile tool for creating DIDs that are compatible with major blockchain networks.
	•	Keccak-256 is the default algorithm, which aligns with Ethereum’s hashing for its blockchain.
	•	You can still specify SHA-256 or DoubleSHA-256 if you need compatibility with Bitcoin.

This design gives you the flexibility to focus on Ethereum by default while still supporting other networks when necessary.

# Getting Cleaked.

The cleak essentially performs a series of context-building steps:
	•	Define the Space (domain): The root domain (cleaker.me) sets the overall environment.
	•	Identify the Space Owner (subdomain): The subdomain identifies the owner or focus of the space, which could represent a profile, a specific user, or a namespace.
	•	Establish Active User Identity (session): The session, retrieved from a JWT or similar token, tells Cleaker who is currently interacting with the space, enabling actions based on this specific user’s permissions.


##### usrme.cleaker.me
The server acts as a **channel** for these functionalities over the network.

**Subdomains** are a way to create a **unique URL** for each user. This is done by creating a **wildcard DNS record that points all subdomains to the same server.** Our server (https://cleaker.me) then parses the subdomain and uses it to identify the user. Any server can be setup.

 **This is done by using the request object in the server, to get the subdomain and then using it to query the database for the user.** 

* **If the user exists,** the server will then route the request to the user's profile page.
*  **If the user does not exist,** the server will route the request to the homepage.

----------
# About All.This
###### Modular Data Structures
**[this.me](https://suign.github.io/this.me)  - [this.audio](https://suign.github.io/this.audio) - [this.text](https://suign.github.io/this.text) - [this.wallet](https://suign.github.io/this.wallet) - [this.img](https://suign.github.io/this.img) - [this.pixel](https://suign.github.io/Pixels) - [be.this](https://suign.github.io/be.this) - [this.DOM](https://suign.github.io/this.DOM) - [this.env](https://suign.github.io/this.env/) - [this.GUI](https://suign.github.io/this.GUI) - [this.be](https://suign.github.io/this.be) - [this.video](https://suign.github.io/this.video) - [this.atom](https://suign.github.io/this.atom) - [this.dictionaries](https://suign.github.io/this.dictionaries/)**

These classes encapsulate the functionalities to **domain-specific data.**

## Neurons.me
### License & Policies
- **License**: MIT License (see LICENSE for details).

- **Privacy Policy**: Respects user privacy; no collection/storage of personal data.

- **Terms of Usage**: Use responsibly. No guarantees/warranties provided. 
  [Terms](https://www.neurons.me/terms-of-use) | [Privacy](https://www.neurons.me/privacy-policy)
  [neurons.me](https://neurons.me)

  <img src="https://suign.github.io/assets/imgs/neurons_me_logo.png" alt="neurons.me logo" width="89">

