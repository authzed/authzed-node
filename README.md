# Authzed NodeJS Client

[![npm version](https://img.shields.io/npm/v/@authzed/authzed-node.svg?style=flat)](https://www.npmjs.com/package/@authzed/authzed-node)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![Build Status](https://github.com/authzed/authzed-node/workflows/authzed-node-ci/badge.svg)](https://github.com/authzed/authzed-node/actions)
[![Mailing List](https://img.shields.io/badge/email-google%20groups-4285F4)](https://groups.google.com/g/authzed-oss)
[![Discord Server](https://img.shields.io/discord/844600078504951838?color=7289da&logo=discord "Discord Server")](https://discord.gg/jTysUaxXzM)
[![Twitter](https://img.shields.io/twitter/follow/authzed?color=%23179CF0&logo=twitter&style=flat-square)](https://twitter.com/authzed)

This repository houses the NodeJS client library for Authzed.

[Authzed] is a database and service that stores, computes, and validates your application's permissions.

Developers create a schema that models their permissions requirements and use a client library, such as this one, to apply the schema to the database, insert data into the database, and query the data to efficiently check permissions in their applications.

Supported client API versions:
- [v1](https://docs.authzed.com/reference/api#authzedapiv1)
- [v1alpha1](https://docs.authzed.com/reference/api#authzedapiv1alpha1)

You can find more info on each API on the [Authzed API reference documentation].
Additionally, Protobuf API documentation can be found on the [Buf Registry Authzed API repository].

See [CONTRIBUTING.md] for instructions on how to contribute and perform common tasks like building the project and running tests.

[Authzed]: https://authzed.com
[Authzed API Reference documentation]: https://docs.authzed.com/reference/api
[Buf Registry Authzed API repository]: https://buf.build/authzed/api/docs/main
[CONTRIBUTING.md]: CONTRIBUTING.md

## Getting Started

We highly recommend following the **[Protecting Your First App]** guide to learn the latest best practice to integrate an application with Authzed.

If you're interested in examples of a specific version of the API, they can be found in their respective folders in the [examples directory].

[Protecting Your First App]: https://docs.authzed.com/guides/first-app
[examples directory]: /examples

## Basic Usage

### Installation

The project is packaged and distributed via [NPM].

If you are using the typical npm toolchain, the command to install the library is:

```sh
npm i @authzed/authzed-node
```

[NPM]: https://www.npmjs.com/package/@authzed/authzed-node

### Initializing a client

Everything required to connect and make API calls is located in a module respective to API version.

You will have to provide a your own API Token from the [Authzed dashboard] in place of `t_your_token_here_1234567deadbeef` in the following example:

```js
import { v1 } from '@authzed/authzed-node';

const client = v1.NewClient('t_your_token_here_1234567deadbeef')
```

### Performing an API call

Because of the verbosity of these types, we recommend writing your own functions/methods to create these types from your existing application's models.

The `create` method on generated classes takes attributes as input and defaults unspecified attributes to their empty value. This allows you to create request messages, for example, by specifying only relevant fields and leaves optional fields empty.

```js
import { v1 } from '@authzed/authzed-node';

const client = v1.NewClient('token')

// Create the relationship between the resource and the user.
const firstPost = v1.ObjectReference.create({
    objectType: "blog/post",
    objectId: "1",
});

// Create the user reference.
const emilia = v1.ObjectReference.create({
    objectType: "blog/user",
    objectId: "emilia",
});

const subject = v1.SubjectReference.create({
    object: userref,
});

const checkPermissionRequest = v1.CheckPermissionRequest.create({
    resource: firstPost,
    permission: "read",
    subject,
});

client.checkPermission(checkPermissionRequest, (err, response) => {
    console.log(response);
    console.log(err);
});
```

## Requirements

Supported Node.js versions: 14, 16, 17

Minimum TypeScript version 3.8

