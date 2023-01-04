# micro-result

> A very simple TypeScript result type

When dealing with function results, it is often very convenient to have a way to express success and failure. Throwing errors is simply not type safe. This small library exports very simple types that help expressing success and failure.

## Usage

Install this library using the following command:

```
npm install micro-result
```

Now, you can use the `Result` type:

```ts
import { Result } from 'micro-result';

const result: Result<number> = {
  success: true,
  data: 123,
};
```

If the Generic is (potentially) `undefined`, the `data` field may be left out:

```ts
const result: Result<number | undefined> = {
  success: true,
};
```

A type for the error case can be defined using the second Generic:

```ts
const result: Result<number, string> = {
  success: false,
  error: 'my-error',
};
```
