# typescript-prac

## **`Constructor`**

The code is incorrect because of redundancy and unnecessary reassignments in the constructor. In TypeScript, when you declare a parameter with `public`, `private`, or `protected` in the constructor, it automatically initializes the property with the provided value. There's no need to explicitly reassign them inside the constructor.

```typescript
interface ProductType {
  name: string;
  price: number;
  stock: number;
  id: number;
  offer?: boolean;
}

class Product implements ProductType {
  // The constructor's parameters automatically initialize the properties
  constructor(
    public name: string,
    public price: number,
    public stock: number,
    public id: number,
    private offer?: boolean // Optional property
  ) {}
}
```

### Key Changes:
1. Removed unnecessary reassignments (`this.name = name`, etc.) because using `public`, `private`, or `protected` automatically assigns the constructor arguments to the instance.

2. Retained `offer` as `private` since it’s not part of the interface but is meant to be an internal property.

---

### Explanation:
In TypeScript, the constructor shorthand (`public`, `private`, `protected`) directly defines and initializes class properties, eliminating the need for redundant code. This makes your class cleaner and easier to maintain.

-----

## **`Type Assertion`**

Type assertion in TypeScript is a way to explicitly tell the compiler what the type of a variable is when you are certain of it but the compiler can't infer it.

Syntax:
1. **Angle Bracket Syntax**:  
   ```typescript
   let value: any = "Hello, TypeScript!";
   let length: number = (<string>value).length;
   ```

2. **`as` Syntax (Preferred)**:  
   ```typescript
   let value: any = "Hello, TypeScript!";
   let length: number = (value as string).length;
   ```

### Key Points:
- **No runtime effect**: Type assertions only help at compile time.
- **Use cases**: Situations where the type can't be inferred, e.g., working with `any` or DOM elements.
- Type assertions should only be used when you are confident about the type, as incorrect assertions can lead to runtime errors.


---


### **`dynamic key: values in interface/objects`**

```typescript
interface Person {
    [key: string]: string | number | boolean;
}

const myObj: Person = {
    name: 'John',
    age: 30,
    mobile: 123
}

type GetNameType  = (key: string) => string | number | boolean

const getName: GetNameType = (key) => {
    if(typeof myObj[key] === undefined || null) {
        return 0;
    }
    return myObj[key];
}

console.log(getName('name'));
```



---

## **`Type Utility`**

Type utilities in TypeScript are built-in tools that allow you to manipulate and transform types for more dynamic and flexible type definitions. These utilities make it easier to work with complex types by enabling operations like extracting, omitting, or modifying specific parts of a type.

### Common Type Utilities

1. **`Partial<Type>`**  
   Makes all properties of a type optional.
   ```typescript
   interface User {
     id: number;
     name: string;
   }

   const partialUser: Partial<User> = { name: "Alice" }; // `id` is optional
   ```

2. **`Required<Type>`**  
   Makes all properties of a type required.
   ```typescript
   interface User {
     id?: number;
     name?: string;
   }

   const requiredUser: Required<User> = { id: 1, name: "Alice" }; // All properties must be provided
   ```

3. **`Readonly<Type>`**  
   Makes all properties of a type read-only.
   ```typescript
   interface User {
     id: number;
     name: string;
   }

   const readonlyUser: Readonly<User> = { id: 1, name: "Alice" };
   // readonlyUser.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
   ```

4. **`Pick<Type, Keys>`**  
   Creates a type with a subset of properties from another type.
   ```typescript
   interface User {
     id: number;
     name: string;
     age: number;
   }

   const pickedUser: Pick<User, "id" | "name"> = { id: 1, name: "Alice" };
   ```

5. **`Omit<Type, Keys>`**  
   Creates a type by removing specific properties from another type.
   ```typescript
   interface User {
     id: number;
     name: string;
     age: number;
   }

   const omittedUser: Omit<User, "age"> = { id: 1, name: "Alice" };
   ```

6. **`Record<Keys, Type>`**  
   Constructs a type with specified keys and values of a certain type.
   ```typescript
   const userRecords: Record<string, number> = {
     Alice: 25,
     Bob: 30,
   };
   ```

7. **`Exclude<Type, ExcludedUnion>`**  
   Removes types from a union.
   ```typescript
   type Status = "success" | "error" | "loading";
   type NonLoadingStatus = Exclude<Status, "loading">; // "success" | "error"
   ```

8. **`Extract<Type, Union>`**  
   Extracts types from a union that match a specific union.
   ```typescript
   type Status = "success" | "error" | "loading";
   type LoadingStatus = Extract<Status, "loading">; // "loading"
   ```

9. **`NonNullable<Type>`**  
   Removes `null` and `undefined` from a type.
   ```typescript
   type NullableString = string | null | undefined;
   type NonNullableString = NonNullable<NullableString>; // string
   ```

10. **`ReturnType<Type>`**  
    Extracts the return type of a function.
    ```typescript
    function greet(): string {
      return "Hello!";
    }
    type GreetReturnType = ReturnType<typeof greet>; // string
    ```

11. **`Parameters<Type>`**  
    Extracts the parameter types of a function as a tuple.
    ```typescript
    function greet(name: string, age: number): string {
      return `Hello, ${name}, ${age}`;
    }
    type GreetParams = Parameters<typeof greet>; // [string, number]
    ```

12. **`ConstructorParameters<Type>`**  
    Extracts the parameter types of a class constructor as a tuple.
    ```typescript
    class Person {
      constructor(public name: string, public age: number) {}
    }
    type PersonParams = ConstructorParameters<typeof Person>; // [string, number]
    ```

### Why Use Type Utilities?
- **Code Reusability**: They simplify creating and reusing types.
- **Dynamic Type Manipulation**: Enable more flexible type definitions.
- **Error Prevention**: Help enforce stricter type-checking rules.

Type utilities are foundational for building robust and scalable TypeScript applications.


---


## **`Generics/Templates`**


Generics in TypeScript allow you to write reusable and flexible code by creating components, functions, or classes that work with a variety of types, rather than being limited to a single one. They act as placeholders for types that are specified when the component or function is used.

---

### Why Use Generics?
- **Reusability**: You can use the same code for different types without duplicating it.
- **Type Safety**: They provide compile-time checks for the types used.
- **Flexibility**: Allow you to write more general code while retaining type specificity.

---

### Syntax
```typescript
function functionName<T>(arg: T): T {
  return arg;
}
```
Here, `T` is a placeholder for the type. The actual type is specified when the function is called.

---

### Examples

#### 1. **Generic Functions**
```typescript
function identity<T>(value: T): T {
  return value;
}

// Using the generic function
const numberResult = identity<number>(42); // T is number
const stringResult = identity<string>("Hello"); // T is string
```

---

#### 2. **Generic Interfaces**
```typescript
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 42 };
```

---

#### 3. **Generic Classes**
```typescript
class DataHolder<T> {
  constructor(public value: T) {}

  setValue(newValue: T) {
    this.value = newValue;
  }

  getValue(): T {
    return this.value;
  }
}

const stringHolder = new DataHolder<string>("Hello");
stringHolder.setValue("World");

const numberHolder = new DataHolder<number>(123);
numberHolder.setValue(456);
```

---

#### 4. **Generic Constraints**
You can constrain generics to certain types using the `extends` keyword.
```typescript
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("Hello"); // Works, because strings have a length property
logLength([1, 2, 3]); // Works, because arrays have a length property
// logLength(42); // Error: number does not have a length property
```

---

#### 5. **Using Multiple Generics**
```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const combined = merge({ name: "Alice" }, { age: 25 });
// combined is { name: "Alice", age: 25 }
```

---

#### 6. **Default Generic Types**
You can set default types for generics:
```typescript
function createList<T = string>(): T[] {
  return [];
}

const stringList = createList(); // Defaults to string[]
const numberList = createList<number>(); // Explicitly number[]
```

---

### Advantages of Generics
- **Type Safety**: Prevents runtime errors by catching issues during compile-time.
- **Code Reusability**: Eliminates duplication by allowing the same code to handle multiple types.
- **Clarity**: Provides better documentation and understanding of intent through type annotations.

Generics are a powerful feature in TypeScript that allow you to build scalable, reusable, and type-safe code!


---