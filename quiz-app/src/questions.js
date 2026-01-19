export const questions = [
  // Question 1
  {
    question: "What happens when a static method tries to access a non-static variable directly?",
    options: {
      A: "It returns null",
      B: "It throws NullPointerException",
      C: "Compilation error occurs",
      D: "It works fine"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Static methods không thể truy cập trực tiếp các biến non-static vì static methods thuộc về class, trong khi non-static variables thuộc về instance. Compiler sẽ báo lỗi 'non-static variable cannot be referenced from a static context'."
  },
  // Question 2
  {
    question: "In Java, which statement about method overriding is TRUE?",
    options: {
      A: "Private methods can be overridden",
      B: "Final methods can be overridden",
      C: "Static methods can be overridden",
      D: "None of the above"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Private methods không visible cho subclass nên không thể override. Final methods được đánh dấu để ngăn override. Static methods không được override mà chỉ bị hidden (method hiding). Do đó, không câu nào đúng."
  },
  // Question 3
  {
    question: "What is the result of calling a method on a null reference in Java?",
    options: {
      A: "NullPointerException",
      B: "It depends on the method",
      C: "Compilation error",
      D: "The method executes normally"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Nếu method là static, nó vẫn có thể thực thi vì static methods thuộc về class, không phải instance. Nhưng nếu là instance method, sẽ throw NullPointerException. Vì vậy câu trả lời phụ thuộc vào loại method."
  },
  // Question 4
  {
    question: "Which access modifier makes a member accessible only within the same package and subclasses?",
    options: {
      A: "public",
      B: "private",
      C: "protected",
      D: "default (package-private)"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Protected cho phép truy cập từ: (1) cùng package, (2) subclasses ở bất kỳ package nào. Default chỉ cho phép truy cập trong cùng package. Private chỉ trong cùng class. Public thì ở mọi nơi."
  },
  // Question 5
  {
    question: "Can an abstract class have a constructor?",
    options: {
      A: "No, abstract classes cannot have constructors",
      B: "Yes, but it must be private",
      C: "Yes, and it's called when subclass is instantiated",
      D: "Only if the abstract class has no abstract methods"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Abstract class CÓ THỂ có constructor. Constructor của abstract class được gọi khi subclass được khởi tạo (thông qua super()). Constructor không cần phải private và không phụ thuộc vào việc có abstract methods hay không."
  },
  // Question 6
  {
    question: "What is covariant return type in method overriding?",
    options: {
      A: "Returning a subtype of the original return type",
      B: "Returning the same type as the original",
      C: "Returning a supertype of the original return type",
      D: "Returning void instead of a type"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Covariant return type cho phép override method trả về subtype của return type gốc. Ví dụ: nếu parent method return Object, child method có thể return String (vì String là subtype của Object). Tính năng này có từ Java 5."
  },
  // Question 7
  {
    question: "In Java, what happens if a class doesn't explicitly extend any class?",
    options: {
      A: "Compilation error",
      B: "It implicitly extends Object",
      C: "It becomes a final class",
      D: "It cannot have any methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Mọi class trong Java đều implicitly extends từ class Object nếu không khai báo extends class khác. Object là root của class hierarchy trong Java và cung cấp các methods như equals(), hashCode(), toString()."
  },
  // Question 8
  {
    question: "Which statement about interfaces in Java 8+ is FALSE?",
    options: {
      A: "Interfaces can have default methods",
      B: "Interfaces can have static methods",
      C: "Interfaces can have private methods",
      D: "Interfaces can have protected methods"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Interfaces KHÔNG THỂ có protected methods. Từ Java 8, interfaces có thể có default và static methods. Từ Java 9, interfaces có thể có private methods để support default methods. Nhưng protected không được phép trong interface."
  },
  // Question 9
  {
    question: "What is the diamond problem in multiple inheritance?",
    options: {
      A: "A class inheriting from two classes with the same method",
      B: "A class implementing two interfaces with the same default method",
      C: "A class having diamond-shaped hierarchy",
      D: "Both A and B"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Diamond problem xảy ra khi một class kế thừa cùng một method từ nhiều nguồn. Trong Java, điều này có thể xảy ra với: (1) multiple inheritance (không được phép với classes), (2) multiple interfaces với default methods (phải override để resolve)."
  },
  // Question 10
  {
    question: "Can a final variable be modified after initialization?",
    options: {
      A: "Never",
      B: "Yes, using reflection",
      C: "Only in the constructor",
      D: "Yes, but only for object references"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Về mặt nguyên tắc, final variables không thể thay đổi sau khi được khởi tạo. Tuy nhiên, sử dụng reflection API, ta có thể bypass và modify final fields. Nhưng đây là bad practice và có thể gây ra unexpected behavior."
  },
  // Question 11
  {
    question: "What is the difference between composition and aggregation?",
    options: {
      A: "Composition is weaker than aggregation",
      B: "Aggregation implies ownership, composition doesn't",
      C: "Composition implies strong ownership, aggregation is weaker",
      D: "They are exactly the same"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Composition là strong 'has-a' relationship với ownership - khi container bị destroy, contained object cũng bị destroy. Aggregation là weak 'has-a' - contained object có thể tồn tại độc lập. Ví dụ: Car-Engine là composition, Department-Employee là aggregation."
  },
  // Question 12
  {
    question: "In polymorphism, which type of binding occurs at runtime?",
    options: {
      A: "Static binding for all methods",
      B: "Dynamic binding for instance methods",
      C: "Dynamic binding for static methods",
      D: "No binding occurs at runtime"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Dynamic binding (late binding) xảy ra ở runtime cho instance methods, cho phép method overriding hoạt động. Static methods và final methods sử dụng static binding (early binding) ở compile time. Private methods cũng dùng static binding."
  },
  // Question 13
  {
    question: "What is method hiding in Java?",
    options: {
      A: "Making methods private",
      B: "Subclass defining a static method with same signature as parent's static method",
      C: "Overriding instance methods",
      D: "Using private keyword on methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Method hiding xảy ra khi subclass định nghĩa static method với cùng signature như static method của parent class. Khác với overriding, method hiding không có polymorphic behavior - method được gọi dựa trên reference type, không phải object type."
  },
  // Question 14
  {
    question: "Can an interface extend multiple interfaces?",
    options: {
      A: "No, Java doesn't support multiple inheritance",
      B: "Yes, interfaces can extend multiple interfaces",
      C: "Only if they don't have conflicting methods",
      D: "Only in Java 8+"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Interface CÓ THỂ extends nhiều interfaces khác (multiple inheritance of type). Đây không phải vấn đề vì interfaces chỉ định nghĩa contracts, không có implementation conflicts như với classes. Tính năng này có từ đầu, không chỉ Java 8+."
  },
  // Question 15
  {
    question: "What happens if a class implements two interfaces with conflicting default methods?",
    options: {
      A: "Compilation error always",
      B: "First interface's method is used",
      C: "Must explicitly override the method",
      D: "Runtime exception"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Khi class implements multiple interfaces có cùng default method signature, class PHẢI explicitly override method đó để resolve conflict. Compiler sẽ báo lỗi nếu không làm vậy. Đây là cách Java giải quyết diamond problem với default methods."
  },
  // Question 16
  {
    question: "Which is TRUE about the 'this' keyword?",
    options: {
      A: "Can be used in static methods",
      B: "Can only be used in constructors",
      C: "Refers to the current instance",
      D: "Can be reassigned to point to different objects"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'this' keyword refers đến current instance của class và chỉ có thể dùng trong instance context (instance methods, constructors). Không thể dùng trong static methods vì static context không có instance. 'this' là final reference, không thể reassign."
  },
  // Question 17
  {
    question: "What is shadowing in Java?",
    options: {
      A: "Method overriding",
      B: "A local variable hiding an instance variable",
      C: "Making variables private",
      D: "Hiding implementation details"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Shadowing xảy ra khi local variable (hoặc parameter) có cùng tên với instance variable, khiến instance variable bị 'che khuất' trong scope đó. Để access instance variable, ta phải dùng 'this.variableName'."
  },
  // Question 18
  {
    question: "Can a class be both abstract and final?",
    options: {
      A: "Yes, for utility classes",
      B: "Yes, but only with private constructor",
      C: "No, it's a contradiction",
      D: "Yes, in Java 8+"
    },
    correctAnswer: "C",
    code: null,
    explanation: "KHÔNG THỂ vì đây là contradiction. Abstract class được thiết kế để extend, trong khi final class không thể được extend. Compiler sẽ báo lỗi 'illegal combination of modifiers: abstract and final'."
  },
  // Question 19
  {
    question: "What is the purpose of the 'super' keyword?",
    options: {
      A: "Only to call parent constructor",
      B: "To access parent's static methods",
      C: "To access parent's members and call parent's constructor",
      D: "To create parent class objects"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'super' keyword có 2 mục đích chính: (1) gọi constructor của parent class (super()), (2) truy cập members (methods/variables) của parent class khi bị override/hide (super.methodName()). Không dùng để create objects hay access static methods."
  },
  // Question 20
  {
    question: "Which statement about instance initializer blocks is TRUE?",
    options: {
      A: "They run before constructor",
      B: "They run after constructor",
      C: "They run before static blocks",
      D: "They never run"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Instance initializer blocks chạy TRƯỚC constructor body nhưng SAU khi parent constructor hoàn thành. Order: static blocks → parent constructor → instance initializer blocks → constructor. Chúng chạy mỗi khi object được tạo."
  },
  // Question 21
  {
    question: "What is the output when calling an overridden method from a parent constructor?",
    options: {
      A: "Always calls parent's version",
      B: "Calls child's version if object is child type",
      C: "Compilation error",
      D: "Depends on the access modifier"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Đây là trường hợp đặc biệt và nguy hiểm. Nếu parent constructor gọi overridden method, child's version sẽ được gọi (polymorphism), nhưng child's instance variables chưa được khởi tạo, có thể gây bugs. Nên tránh gọi overridable methods trong constructor."
  },
  // Question 22
  {
    question: "Can constructors be synchronized?",
    options: {
      A: "Yes, to ensure thread safety",
      B: "No, constructors cannot be synchronized",
      C: "Only default constructors",
      D: "Only in abstract classes"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Constructors KHÔNG THỂ synchronized vì object chưa tồn tại hoàn toàn khi constructor chạy, nên không có object nào để lock. Chỉ methods và blocks mới có thể synchronized."
  },
  // Question 23
  {
    question: "What is an immutable object?",
    options: {
      A: "An object with final fields",
      B: "An object whose state cannot change after creation",
      C: "An object without setters",
      D: "An object in a final class"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Immutable object là object mà state không thể thay đổi sau khi tạo. Để tạo immutable class: (1) declare class final, (2) make fields private final, (3) không có setters, (4) deep copy mutable objects, (5) không expose references to mutable objects."
  },
  // Question 24
  {
    question: "What is the Liskov Substitution Principle?",
    options: {
      A: "Child classes must have more methods than parents",
      B: "Objects of superclass should be replaceable with objects of subclass",
      C: "Subclasses should override all parent methods",
      D: "Parent classes should not have abstract methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Liskov Substitution Principle (LSP) là một trong SOLID principles: objects của superclass phải có thể thay thế bằng objects của subclass mà không làm program bị lỗi. Subclass phải honor contracts của parent class."
  },
  // Question 25
  {
    question: "Can a nested static class access non-static members of outer class?",
    options: {
      A: "Yes, directly",
      B: "No, never",
      C: "Yes, through outer class instance",
      D: "Only if they are public"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Static nested class KHÔNG THỂ truy cập trực tiếp non-static members của outer class vì nó không có implicit reference to outer instance. Nhưng có thể access thông qua explicit outer class instance. Non-static inner class thì có thể access trực tiếp."
  },
  // Question 26
  {
    question: "What is early binding vs late binding?",
    options: {
      A: "Early binding is faster",
      B: "Late binding happens at runtime, early at compile time",
      C: "They are the same thing",
      D: "Early binding only for interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Early binding (static binding) xảy ra ở compile time cho private, static, final methods. Late binding (dynamic binding) xảy ra ở runtime cho instance methods, cho phép polymorphism. Late binding chậm hơn nhưng flexible hơn."
  },
  // Question 27
  {
    question: "Can interface variables be non-final?",
    options: {
      A: "Yes, from Java 8",
      B: "Yes, if declared explicitly",
      C: "No, they are implicitly public static final",
      D: "Only private variables can be non-final"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Tất cả variables trong interface đều implicitly là public static final, không thể thay đổi. Chúng là constants và phải được khởi tạo khi khai báo. Điều này đúng cho tất cả versions của Java."
  },
  // Question 28
  {
    question: "What is the marker interface?",
    options: {
      A: "An interface with default methods",
      B: "An interface with no methods",
      C: "An interface with static methods only",
      D: "An interface that marks classes as abstract"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Marker interface (tagging interface) là interface không có methods, chỉ để 'đánh dấu' class với một property đặc biệt. Ví dụ: Serializable, Cloneable, Remote. JVM và frameworks kiểm tra markers này để provide special behavior."
  },
  // Question 29
  {
    question: "What happens if you don't provide any constructor in a class?",
    options: {
      A: "Compilation error",
      B: "Class cannot be instantiated",
      C: "Compiler provides a default no-arg constructor",
      D: "Class becomes abstract"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Nếu không khai báo constructor nào, compiler tự động tạo default no-arg constructor với access modifier giống class. Nhưng nếu khai báo bất kỳ constructor nào (kể cả có tham số), compiler sẽ KHÔNG tạo default constructor."
  },
  // Question 30
  {
    question: "Can you override a private method?",
    options: {
      A: "Yes, but only in the same package",
      B: "Yes, using reflection",
      C: "No, private methods are not inherited",
      D: "Yes, if the subclass is also private"
    },
    correctAnswer: "C",
    code: null,
    explanation: "KHÔNG THỂ override private methods vì chúng không được inherited sang subclass. Nếu subclass định nghĩa method cùng tên, đó là method hoàn toàn mới, không phải override. Private methods dùng static binding."
  },
  // Question 31
  {
    question: "What is the difference between == and equals() for objects?",
    options: {
      A: "They are identical",
      B: "== checks reference equality, equals() checks logical equality",
      C: "equals() is faster",
      D: "== works only for primitives"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Operator == kiểm tra reference equality (cùng memory address), trong khi equals() kiểm tra logical equality (nội dung). equals() có thể override để định nghĩa equality theo logic riêng. Default implementation của equals() trong Object class dùng ==."
  },
  // Question 32
  {
    question: "Can abstract methods be static?",
    options: {
      A: "Yes, in abstract classes only",
      B: "Yes, from Java 8",
      C: "No, it's a contradiction",
      D: "Yes, but they must be private"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Abstract methods KHÔNG THỂ static vì abstract methods cần được override trong subclass, nhưng static methods không thể override (chỉ hide). Đây là contradiction về design. Compiler sẽ báo lỗi."
  },
  // Question 33
  {
    question: "What is tight coupling?",
    options: {
      A: "Classes that depend heavily on each other's implementation",
      B: "Classes with many methods",
      C: "Classes in the same package",
      D: "Classes with inheritance relationship"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Tight coupling xảy ra khi classes phụ thuộc nặng vào implementation details của nhau, khiến changes trong một class ảnh hưởng nhiều classes khác. Loose coupling (thông qua interfaces, dependency injection) dễ maintain và test hơn."
  },
  // Question 34
  {
    question: "What is the difference between method overloading and overriding?",
    options: {
      A: "Overloading is runtime, overriding is compile time",
      B: "Overloading has same signature, overriding has different",
      C: "Overloading has different parameters, overriding has same signature",
      D: "They are the same"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Overloading: cùng tên method nhưng khác parameters (compile-time polymorphism). Overriding: subclass redefines method với CÙNG signature như parent (runtime polymorphism). Overloading trong cùng class, overriding giữa parent-child."
  },
  // Question 35
  {
    question: "Can you instantiate an abstract class?",
    options: {
      A: "Yes, using new keyword",
      B: "Yes, through anonymous inner class",
      C: "No, never",
      D: "Only if it has no abstract methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG THỂ instantiate abstract class trực tiếp với new. Nhưng có thể tạo anonymous inner class khi khai báo, implement các abstract methods ngay đó. Điều này kỹ thuật là tạo subclass anonymous, không phải tạo abstract class."
  },
  // Question 36
  {
    question: "What is the single responsibility principle?",
    options: {
      A: "A class should have only one method",
      B: "A class should have only one reason to change",
      C: "A class should implement only one interface",
      D: "A class should have only one constructor"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Single Responsibility Principle (SRP) trong SOLID: một class chỉ nên có một lý do để thay đổi, tức là chỉ có một responsibility/job. Điều này làm class cohesive, dễ maintain, test và understand hơn."
  },
  // Question 37
  {
    question: "What is the difference between association and dependency?",
    options: {
      A: "They are the same",
      B: "Association is long-term, dependency is short-term",
      C: "Dependency is stronger than association",
      D: "Association only exists in interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Association là long-term relationship (class có field của class khác). Dependency là weaker, short-term relationship (class dùng class khác qua parameters, local variables, return types). Dependency thường temporary trong method scope."
  },
  // Question 38
  {
    question: "Can a class implement the same interface multiple times?",
    options: {
      A: "Yes, for redundancy",
      B: "No, it's redundant and causes error",
      C: "Only with different generic parameters",
      D: "Only in Java 8+"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Thông thường không cần implement cùng interface nhiều lần (redundant). Nhưng với generics, có thể implement interface với different type parameters, ví dụ: class X implements Comparable<String>, Comparable<Integer> (tuy nhiên điều này thường gây type erasure issues)."
  },
  // Question 39
  {
    question: "What is a functional interface?",
    options: {
      A: "An interface with only default methods",
      B: "An interface with exactly one abstract method",
      C: "An interface with static methods",
      D: "An interface without any methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Functional interface (SAM - Single Abstract Method) có đúng một abstract method. Có thể có multiple default và static methods. Dùng với lambda expressions. Annotation @FunctionalInterface để enforce rule này. Ví dụ: Runnable, Callable, Comparator."
  },
  // Question 40
  {
    question: "What happens during object creation sequence?",
    options: {
      A: "Constructor → static block → instance block",
      B: "Static block → parent constructor → instance block → constructor",
      C: "Instance block → constructor → static block",
      D: "Constructor → instance block → static block"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Order khi tạo object: (1) Static blocks của class hierarchy (chạy 1 lần khi class load), (2) Parent constructor, (3) Instance initializer blocks, (4) Constructor. Static chạy trước mọi thứ và chỉ 1 lần."
  },
  // Question 41
  {
    question: "Can you have multiple classes with public access in a single file?",
    options: {
      A: "Yes, unlimited",
      B: "Yes, maximum two",
      C: "No, only one public class per file",
      D: "Yes, if they are nested"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Chỉ có thể có MỘT public class per file và tên file phải trùng với tên public class. Có thể có nhiều package-private classes trong cùng file. Nested classes (inner/static nested) không tính vì chúng nằm trong outer class."
  },
  // Question 42
  {
    question: "What is the difference between shallow copy and deep copy?",
    options: {
      A: "Shallow copy is faster",
      B: "Shallow copies references, deep copy copies objects",
      C: "They are identical",
      D: "Deep copy only works with primitives"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Shallow copy chỉ copy references của objects (cùng trỏ đến object gốc trong memory). Deep copy tạo new objects hoàn toàn độc lập. Shallow copy nhanh nhưng changes trong copied object ảnh hưởng original. Deep copy an toàn hơn nhưng expensive hơn."
  },
  // Question 43
  {
    question: "Can a subclass reduce the accessibility of an overridden method?",
    options: {
      A: "Yes, for security",
      B: "No, it violates IS-A relationship",
      C: "Only from public to protected",
      D: "Yes, using private keyword"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG THỂ giảm accessibility khi override (ví dụ public → protected). Chỉ có thể giữ nguyên hoặc tăng (protected → public). Giảm accessibility vi phạm Liskov Substitution Principle vì subclass object phải thay thế được parent object."
  },
  // Question 44
  {
    question: "What is object slicing?",
    options: {
      A: "Dividing object into parts",
      B: "Loss of subclass data when assigning to parent reference",
      C: "Creating shallow copies",
      D: "Deleting objects"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Object slicing chủ yếu là vấn đề trong C++, ít gặp trong Java vì Java dùng references. Nhưng conceptually, nó là việc mất data của subclass khi assign subclass object to parent type value (không phải reference). Java tránh điều này bằng cách dùng references."
  },
  // Question 45
  {
    question: "Can interface methods have a body?",
    options: {
      A: "Never",
      B: "Only abstract methods can",
      C: "Yes, default and static methods can",
      D: "Only in abstract interfaces"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Từ Java 8, interface methods CÓ THỂ có body: (1) default methods có implementation mặc định, (2) static methods có implementation. Từ Java 9, private methods cũng có body. Abstract methods thì không có body."
  },
  // Question 46
  {
    question: "What is the open-closed principle?",
    options: {
      A: "Classes should be open source",
      B: "Open for extension, closed for modification",
      C: "Methods should be public",
      D: "Classes should not be final"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Open-Closed Principle trong SOLID: software entities nên open for extension (có thể thêm functionality mới) nhưng closed for modification (không cần sửa existing code). Đạt được thông qua inheritance, interfaces, polymorphism."
  },
  // Question 47
  {
    question: "What is upcasting and downcasting?",
    options: {
      A: "Upcasting is converting to parent type, downcasting to child type",
      B: "Upcasting requires casting, downcasting is automatic",
      C: "They are the same",
      D: "Upcasting only works with interfaces"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Upcasting: cast subclass to superclass (implicit, safe). Downcasting: cast superclass to subclass (explicit, cần cast operator, có thể throw ClassCastException nếu object không phải thực sự là subclass type). Upcasting tự động, downcasting phải careful."
  },
  // Question 48
  {
    question: "Can you override a method to throw broader checked exceptions?",
    options: {
      A: "Yes, for better error handling",
      B: "No, can only throw same or narrower exceptions",
      C: "Only for runtime exceptions",
      D: "Yes, but must declare in throws clause"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG THỂ throw broader checked exceptions khi override. Chỉ có thể throw: (1) cùng exceptions, (2) narrower (subclass) exceptions, (3) không throw exception nào, (4) unchecked exceptions (không giới hạn). Rule này đảm bảo subclass không vi phạm parent's contract."
  },
  // Question 49
  {
    question: "What is the purpose of the finalize() method?",
    options: {
      A: "To initialize objects",
      B: "Called before garbage collection (deprecated)",
      C: "To make objects final",
      D: "To close resources"
    },
    correctAnswer: "B",
    code: null,
    explanation: "finalize() được gọi bởi garbage collector trước khi thu hồi object (cleanup). Tuy nhiên, nó deprecated từ Java 9 vì unreliable (không đảm bảo khi nào chạy, có chạy hay không). Nên dùng try-with-resources và AutoCloseable thay thế."
  },
  // Question 50
  {
    question: "Can a constructor call another constructor in the same class?",
    options: {
      A: "No, never",
      B: "Yes, using super()",
      C: "Yes, using this()",
      D: "Only in abstract classes"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Constructor CÓ THỂ gọi constructor khác trong cùng class bằng this() (constructor chaining). this() phải là statement ĐẦU TIÊN trong constructor. super() dùng để gọi parent constructor. Điều này giúp tránh code duplication."
  },
  // Question 51
  {
    question: "What is the instanceof operator used for?",
    options: {
      A: "Creating instances",
      B: "Checking if object is an instance of a class/interface",
      C: "Comparing object values",
      D: "Deleting instances"
    },
    correctAnswer: "B",
    code: null,
    explanation: "instanceof operator kiểm tra xem object có phải instance của class/interface hay không (including inheritance). Return true nếu object is-a type đó. Useful trước khi downcast để tránh ClassCastException. null instanceof AnyClass luôn return false."
  },
  // Question 52
  {
    question: "Can you have a non-static method in an interface before Java 8?",
    options: {
      A: "Yes, always allowed",
      B: "No, only abstract methods allowed",
      C: "Yes, but must be private",
      D: "Only if interface extends another"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Trước Java 8, interface CHỈ có thể có abstract methods (implicitly public abstract) và constants (public static final). Java 8 thêm default và static methods. Java 9 thêm private methods."
  },
  // Question 53
  {
    question: "What is the difference between encapsulation and abstraction?",
    options: {
      A: "They are the same",
      B: "Encapsulation hides data, abstraction hides complexity",
      C: "Abstraction is stronger than encapsulation",
      D: "Encapsulation only works with private"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Encapsulation: hiding internal state/data (data hiding) bằng private fields + public methods. Abstraction: hiding implementation complexity, chỉ show essential features (thông qua abstract classes/interfaces). Encapsulation là 'how', abstraction là 'what'."
  },
  // Question 54
  {
    question: "Can you change the return type when overriding a method?",
    options: {
      A: "No, must be exactly the same",
      B: "Yes, to any type",
      C: "Yes, to a covariant type (subtype)",
      D: "Only to void"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Có thể thay đổi return type khi override NHƯNG chỉ thành covariant type (subtype của original return type). Ví dụ: parent return Object, child có thể return String. Primitive types thì phải giống hệt. Covariant return types có từ Java 5."
  },
  // Question 55
  {
    question: "What is the difference between 'has-a' and 'is-a' relationships?",
    options: {
      A: "Has-a is inheritance, is-a is composition",
      B: "Is-a is inheritance, has-a is composition/aggregation",
      C: "They are the same",
      D: "Has-a is only for interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'Is-a' relationship thể hiện qua inheritance (Dog is-a Animal). 'Has-a' relationship thể hiện qua composition/aggregation (Car has-a Engine). Is-a tạo tighter coupling, has-a flexible hơn và preferred theo 'favor composition over inheritance' principle."
  },
  // Question 56
  {
    question: "Can static methods access instance variables?",
    options: {
      A: "Yes, directly",
      B: "Yes, using 'this' keyword",
      C: "No, never",
      D: "No, but can through an instance"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Static methods KHÔNG THỂ access instance variables trực tiếp vì static methods thuộc class, không có 'this' reference. Nhưng CÓ THỂ access thông qua explicit object instance được pass vào method hoặc tạo trong method."
  },
  // Question 57
  {
    question: "What is the template method pattern?",
    options: {
      A: "Using generics for templates",
      B: "Abstract class with algorithm skeleton, subclasses fill details",
      C: "Interface with default methods",
      D: "Factory pattern variant"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Template Method pattern: parent class định nghĩa skeleton của algorithm (template method), các steps là abstract/hook methods. Subclasses override các steps để customize behavior. Template method thường là final để ngăn thay đổi algorithm structure."
  },
  // Question 58
  {
    question: "Can you declare abstract methods in a non-abstract class?",
    options: {
      A: "Yes, for flexibility",
      B: "No, compilation error",
      C: "Only if methods are private",
      D: "Only in interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG THỂ khai báo abstract methods trong concrete (non-abstract) class. Nếu class có bất kỳ abstract method nào, class phải được declare là abstract. Compiler sẽ báo lỗi nếu vi phạm rule này."
  },
  // Question 59
  {
    question: "What is the difference between static and dynamic polymorphism?",
    options: {
      A: "Static is faster",
      B: "Static uses overloading, dynamic uses overriding",
      C: "They are the same",
      D: "Dynamic only works with interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Static polymorphism (compile-time): method overloading, resolved at compile time. Dynamic polymorphism (runtime): method overriding, resolved at runtime based on actual object type. Static binding vs dynamic binding. Dynamic chậm hơn nhưng flexible hơn."
  },
  // Question 60
  {
    question: "Can you override static methods?",
    options: {
      A: "Yes, normally",
      B: "No, static methods are hidden, not overridden",
      C: "Only in abstract classes",
      D: "Only from Java 8"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG THỂ override static methods vì chúng belong to class, không phải instance. Nếu subclass có static method cùng signature, đó là method hiding, không phải overriding. Method được gọi dựa trên reference type, không phải object type."
  },
  // Question 61
  {
    question: "What happens if a class implements Serializable but has non-serializable fields?",
    options: {
      A: "Compilation error",
      B: "Runtime exception during serialization",
      C: "Fields are automatically made serializable",
      D: "Only serializable fields are serialized"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Khi serialize object có non-serializable fields, sẽ throw NotSerializableException at runtime. Để fix: (1) make field transient (skip serialization), (2) make field's class Serializable, (3) implement custom writeObject/readObject."
  },
  // Question 62
  {
    question: "What is the difference between interface and abstract class in terms of fields?",
    options: {
      A: "Interface can have any fields, abstract class cannot",
      B: "Abstract class can have instance variables, interface only constants",
      C: "They are the same",
      D: "Neither can have fields"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Abstract class có thể có instance variables (mutable, với bất kỳ access modifier). Interface chỉ có public static final constants (immutable). Abstract class flexible hơn về state management, interface chỉ định nghĩa contracts."
  },
  // Question 63
  {
    question: "Can a class extend more than one abstract class?",
    options: {
      A: "Yes, unlimited",
      B: "Yes, maximum two",
      C: "No, Java doesn't support multiple inheritance for classes",
      D: "Only if abstract classes are empty"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Java KHÔNG hỗ trợ multiple inheritance cho classes (kể cả abstract classes) để tránh diamond problem. Class chỉ có thể extend một class duy nhất. Tuy nhiên, class có thể implement multiple interfaces."
  },
  // Question 64
  {
    question: "What is the contract defined by the equals() and hashCode() methods?",
    options: {
      A: "They must always return the same value",
      B: "If equals() is true, hashCode() must be equal",
      C: "They are independent",
      D: "hashCode() must always be unique"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Contract: nếu a.equals(b) == true, thì a.hashCode() == b.hashCode(). Ngược lại không cần đúng (different objects có thể có same hashCode - collision). Nếu override equals(), PHẢI override hashCode() để maintain contract, nếu không HashMap/HashSet sẽ broken."
  },
  // Question 65
  {
    question: "Can constructors be final, static, or abstract?",
    options: {
      A: "Yes, all three",
      B: "Only final",
      C: "None of them",
      D: "Only static"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Constructors KHÔNG THỂ là final (không có ý nghĩa, không được inherit anyway), static (constructors tạo instances), hay abstract (phải có implementation). Chỉ có access modifiers (public, private, protected, default) là hợp lệ cho constructors."
  },
  // Question 66
  {
    question: "What is the difference between composition and inheritance?",
    options: {
      A: "Inheritance is always better",
      B: "Composition is 'has-a', inheritance is 'is-a'",
      C: "They are the same",
      D: "Composition only works with interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Inheritance: 'is-a' relationship, tight coupling, compile-time. Composition: 'has-a' relationship, loose coupling, runtime flexibility. 'Favor composition over inheritance' vì composition flexible hơn, dễ test, tránh fragile base class problem."
  },
  // Question 67
  {
    question: "Can interface methods be final?",
    options: {
      A: "Yes, all interface methods are final",
      B: "No, interface methods cannot be final",
      C: "Only default methods can be final",
      D: "Only static methods can be final"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Interface methods KHÔNG THỂ final vì purpose của interface methods là được implement/override bởi classes. Final ngăn override, contradict với interface design. Abstract, default, static methods đều không thể final."
  },
  // Question 68
  {
    question: "What is method signature in Java?",
    options: {
      A: "Method name only",
      B: "Method name + return type",
      C: "Method name + parameter types",
      D: "Method name + parameter types + return type"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Method signature bao gồm method name + parameter types (order và number). Return type, access modifiers, exceptions KHÔNG phải part của signature. Signature dùng để distinguish overloaded methods và verify overriding."
  },
  // Question 69
  {
    question: "Can you create an instance of an interface?",
    options: {
      A: "Yes, using new keyword",
      B: "No, but can create anonymous implementation",
      C: "Only if interface has default methods",
      D: "Only functional interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG THỂ instantiate interface trực tiếp. Nhưng có thể tạo anonymous class implementation ngay khi khai báo, hoặc dùng lambda (cho functional interfaces). Kỹ thuật là tạo class implement interface, không phải tạo interface instance."
  },
  // Question 70
  {
    question: "What is the purpose of the transient keyword?",
    options: {
      A: "Makes variables temporary",
      B: "Excludes fields from serialization",
      C: "Makes variables final",
      D: "For thread safety"
    },
    correctAnswer: "B",
    code: null,
    explanation: "transient keyword đánh dấu fields không được serialize. Dùng cho: (1) sensitive data (passwords), (2) derived/calculated fields, (3) non-serializable objects. Khi deserialize, transient fields nhận default values (null, 0, false)."
  },
  // Question 71
  {
    question: "Can a subclass constructor call multiple parent constructors?",
    options: {
      A: "Yes, using super() multiple times",
      B: "No, can only call one parent constructor",
      C: "Only in abstract classes",
      D: "Only with different parameters"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Subclass constructor chỉ có thể gọi MỘT parent constructor duy nhất (bằng super()). super() phải là statement đầu tiên, nên không thể gọi nhiều lần. Parent constructor đó có thể call constructor khác của parent (constructor chaining)."
  },
  // Question 72
  {
    question: "What is the difference between aggregation and composition in terms of lifecycle?",
    options: {
      A: "No difference",
      B: "In composition, child dies with parent; in aggregation, child can exist independently",
      C: "Aggregation is stronger than composition",
      D: "Only composition supports polymorphism"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Composition: strong ownership, child's lifecycle depends on parent (child dies when parent dies). Ví dụ: House-Room. Aggregation: weak relationship, child exists independently. Ví dụ: Department-Employee (employee có thể chuyển department). Composition mạnh hơn aggregation."
  },
  // Question 73
  {
    question: "Can you have protected members in an interface?",
    options: {
      A: "Yes, from Java 8",
      B: "Yes, for encapsulation",
      C: "No, interface members are implicitly public",
      D: "Only for nested interfaces"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Interface members KHÔNG THỂ protected. Methods implicitly public (hoặc private từ Java 9), variables implicitly public static final. Interface design để expose contracts, không hide members. Protected concept không apply cho interfaces."
  },
  // Question 74
  {
    question: "What is the Law of Demeter (Principle of Least Knowledge)?",
    options: {
      A: "Classes should have maximum knowledge",
      B: "Objects should only talk to immediate friends",
      C: "All methods must be public",
      D: "Classes should know everything about others"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Law of Demeter: object chỉ nên interact với immediate friends (không talk to strangers). Tránh method chaining: a.getB().getC().doSomething(). Reduces coupling, increases maintainability. 'Don't talk to strangers'."
  },
  // Question 75
  {
    question: "Can a method have the same name as the class but with a return type?",
    options: {
      A: "No, that's a constructor",
      B: "Yes, it's a regular method",
      C: "Only if static",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Method CÓ THỂ có tên giống class nếu có return type (kể cả void). Đây là regular method, KHÔNG phải constructor. Constructor không có return type. Tuy nhiên, practice này confusing và nên tránh."
  },
  // Question 76
  {
    question: "What is the difference between fail-fast and fail-safe iterators?",
    options: {
      A: "Fail-fast is faster",
      B: "Fail-fast throws ConcurrentModificationException, fail-safe doesn't",
      C: "They are the same",
      D: "Fail-safe always fails"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Fail-fast iterators (ArrayList, HashMap) throw ConcurrentModificationException nếu collection bị modify during iteration. Fail-safe iterators (CopyOnWriteArrayList, ConcurrentHashMap) work on copy, không throw exception nhưng có thể không reflect latest changes."
  },
  // Question 77
  {
    question: "Can you override a method with weaker access privilege?",
    options: {
      A: "Yes, for encapsulation",
      B: "No, can only use same or stronger access",
      C: "Only from protected to private",
      D: "Only in final classes"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG THỂ reduce access khi override. Chỉ có thể keep same hoặc increase access: private → default → protected → public. Giảm access vi phạm Liskov Substitution Principle. Rule: subclass phải fulfill parent's contract."
  },
  // Question 78
  {
    question: "What is the difference between String, StringBuilder, and StringBuffer?",
    options: {
      A: "They are identical",
      B: "String is immutable, StringBuilder mutable not thread-safe, StringBuffer mutable thread-safe",
      C: "String is fastest",
      D: "StringBuffer is deprecated"
    },
    correctAnswer: "B",
    code: null,
    explanation: "String: immutable, thread-safe by design, creates new object on modification. StringBuilder: mutable, NOT thread-safe, fastest cho single thread. StringBuffer: mutable, thread-safe (synchronized), slower. Use StringBuilder khi không cần thread-safety."
  },
  // Question 79
  {
    question: "Can an inner class be static?",
    options: {
      A: "No, inner classes are always non-static",
      B: "Yes, it's called static nested class",
      C: "Only in abstract classes",
      D: "Only in interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Inner class CÓ THỂ static, gọi là static nested class. Static nested class không có implicit reference to outer instance, không access non-static members của outer. Non-static inner class có implicit outer reference, access được all outer members."
  },
  // Question 80
  {
    question: "What is the difference between ClassNotFoundException and NoClassDefFoundError?",
    options: {
      A: "They are the same",
      B: "ClassNotFoundException is checked, NoClassDefFoundError is error (unchecked)",
      C: "NoClassDefFoundError is deprecated",
      D: "ClassNotFoundException is for interfaces only"
    },
    correctAnswer: "B",
    code: null,
    explanation: "ClassNotFoundException: checked exception, xảy ra khi try load class at runtime via reflection/Class.forName() nhưng không tìm thấy. NoClassDefFoundError: error (unchecked), xảy ra khi class có lúc compile nhưng missing at runtime. Different causes và handling."
  },
  // Question 81
  {
    question: "Can you declare a local variable with the same name as an instance variable?",
    options: {
      A: "No, compilation error",
      B: "Yes, local variable shadows instance variable",
      C: "Only if they have different types",
      D: "Only in static methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "CÓ THỂ khai báo local variable cùng tên với instance variable - gọi là variable shadowing. Local variable 'hides' instance variable trong scope đó. Để access instance variable, dùng 'this.variableName'. Practice này có thể gây confusion."
  },
  // Question 82
  {
    question: "What is the dependency inversion principle?",
    options: {
      A: "High-level modules should depend on low-level modules",
      B: "Both should depend on abstractions",
      C: "No dependencies allowed",
      D: "Only interfaces can have dependencies"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Dependency Inversion Principle (DIP) trong SOLID: (1) High-level modules không nên depend on low-level modules, cả hai nên depend on abstractions. (2) Abstractions không nên depend on details, details depend on abstractions. Achieve qua interfaces/abstract classes."
  },
  // Question 83
  {
    question: "Can a final class have abstract methods?",
    options: {
      A: "Yes, for flexibility",
      B: "No, it's a contradiction",
      C: "Only private abstract methods",
      D: "Only if methods are static"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG THỂ vì contradiction. Final class không thể extended, nhưng abstract methods cần subclass để implement. Nếu class có abstract methods, class phải abstract (để extend được). Compiler báo lỗi nếu try combine final và abstract."
  },
  // Question 84
  {
    question: "What happens when you call a non-static method from a static context?",
    options: {
      A: "It works fine",
      B: "Compilation error",
      C: "Runtime exception",
      D: "Method returns null"
    },
    correctAnswer: "B",
    code: null,
    explanation: "COMPILATION ERROR vì static context (static methods, static blocks) không có 'this' reference. Non-static methods require instance. Error: 'non-static method cannot be referenced from a static context'. Phải tạo object instance để call non-static method."
  },
  // Question 85
  {
    question: "Can you have a private method in an interface (Java 9+)?",
    options: {
      A: "No, all interface methods must be public",
      B: "Yes, to support default methods",
      C: "Only static private methods",
      D: "Only in functional interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Từ Java 9, interfaces CÓ THỂ có private methods (both instance và static). Mục đích: code reuse giữa default methods và static methods trong cùng interface. Private methods không accessible bởi implementing classes."
  },
  // Question 86
  {
    question: "What is the difference between tight coupling and loose coupling?",
    options: {
      A: "Tight coupling is faster",
      B: "Loose coupling means less dependency between classes",
      C: "They are the same",
      D: "Tight coupling only for inheritance"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Tight coupling: classes phụ thuộc nặng vào nhau, changes cascade, hard to test/maintain. Loose coupling: minimal dependencies, classes independent, easy to change/test. Achieve loose coupling qua: interfaces, dependency injection, design patterns. Loose coupling preferred."
  },
  // Question 87
  {
    question: "Can constructors throw exceptions?",
    options: {
      A: "No, constructors cannot throw exceptions",
      B: "Yes, both checked and unchecked exceptions",
      C: "Only unchecked exceptions",
      D: "Only if constructor is private"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Constructors CÓ THỂ throw exceptions (both checked và unchecked). Nếu throw checked exception, caller phải handle hoặc declare. Nếu constructor fails và throw exception, object creation fails. Useful cho validation và error handling during initialization."
  },
  // Question 88
  {
    question: "What is the interface segregation principle?",
    options: {
      A: "Interfaces should be large and comprehensive",
      B: "Clients should not depend on interfaces they don't use",
      C: "All interfaces must be segregated",
      D: "Only one interface per class"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Interface Segregation Principle (ISP) trong SOLID: clients không nên forced to depend on interfaces họ không dùng. Nên có nhiều specific interfaces thay vì một fat interface. Prevents unnecessary dependencies và makes code more maintainable."
  },
  // Question 89
  {
    question: "Can abstract classes have constructors with parameters?",
    options: {
      A: "No, only no-arg constructors",
      B: "Yes, called by subclass constructors",
      C: "Only private constructors",
      D: "Only if class has no abstract methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Abstract classes CÓ THỂ có constructors với parameters. Subclass constructor phải gọi parent constructor qua super(parameters). Useful để initialize common state của abstract class. Access modifier có thể là public, protected, hoặc default (không nên private trừ khi special cases)."
  },
  // Question 90
  {
    question: "What is the difference between method overloading in the same class vs inheritance?",
    options: {
      A: "No difference",
      B: "Overloading in inheritance doesn't work",
      C: "Both work the same, methods resolved at compile time",
      D: "Inheritance overloading uses dynamic binding"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Method overloading (same name, different parameters) works trong cùng class và across inheritance hierarchy. Cả hai đều compile-time polymorphism (static binding). Subclass có thể overload methods của parent. Different từ overriding (runtime polymorphism)."
  },
  // Question 91
  {
    question: "Can a class have multiple static initializer blocks?",
    options: {
      A: "No, only one allowed",
      B: "Yes, they execute in order of appearance",
      C: "Only in abstract classes",
      D: "Only if class is final"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Class CÓ THỂ có nhiều static initializer blocks. Chúng execute theo order xuất hiện trong code, khi class được load lần đầu. Chỉ chạy một lần duy nhất. Useful để initialize complex static data structures."
  },
  // Question 92
  {
    question: "What is the difference between abstract class and concrete class?",
    options: {
      A: "Abstract class is faster",
      B: "Abstract class can have abstract methods and cannot be instantiated",
      C: "Concrete class cannot have methods",
      D: "They are the same"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Abstract class: có thể có abstract methods (no implementation), không thể instantiate trực tiếp, designed để extend. Concrete class: all methods có implementation, có thể instantiate. Abstract class provides partial implementation, concrete class provides complete implementation."
  },
  // Question 93
  {
    question: "Can you call an abstract method from an abstract class constructor?",
    options: {
      A: "No, compilation error",
      B: "Yes, but dangerous - may use uninitialized state",
      C: "Only if method is static",
      D: "Only if method is private"
    },
    correctAnswer: "B",
    code: null,
    explanation: "CÓ THỂ nhưng rất nguy hiểm. Nếu abstract method được override trong subclass và gọi từ parent constructor, subclass version chạy nhưng subclass chưa được initialized completely. Có thể access uninitialized fields. Practice này nên tránh."
  },
  // Question 94
  {
    question: "What is polymorphic substitution?",
    options: {
      A: "Replacing one class with another",
      B: "Ability to use subclass object where superclass is expected",
      C: "Method overloading",
      D: "Interface implementation"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Polymorphic substitution: có thể dùng subclass object ở bất kỳ đâu superclass được expected (thanks to inheritance). Foundation của polymorphism và Liskov Substitution Principle. Cho phép Parent p = new Child(); và polymorphic behavior."
  },
  // Question 95
  {
    question: "Can interface constants be overridden?",
    options: {
      A: "Yes, in implementing classes",
      B: "No, they are final and cannot be changed",
      C: "Only if declared protected",
      D: "Only in subinterfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Interface constants (implicitly public static final) KHÔNG THỂ override vì they are final. Implementing class có thể define variable cùng tên (hiding, not overriding) nhưng không change interface constant. Interface constants are truly constants."
  },
  // Question 96
  {
    question: "What is the difference between early and late binding in terms of performance?",
    options: {
      A: "Late binding is faster",
      B: "Early binding is faster as it resolves at compile time",
      C: "They have identical performance",
      D: "Performance depends on JVM only"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Early binding (static binding) nhanh hơn vì resolved at compile time - compiler biết exact method được gọi. Late binding (dynamic binding) chậm hơn vì resolved at runtime - JVM phải lookup method trong vtable. Tradeoff: performance vs flexibility."
  },
  // Question 97
  {
    question: "Can you have a protected constructor in a final class?",
    options: {
      A: "No, final classes must have private constructors",
      B: "Yes, but it's pointless since class cannot be extended",
      C: "Only if class is abstract",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: null,
    explanation: "CÓ THỂ có protected constructor trong final class (không có compilation error), nhưng pointless vì final class không thể extended. Protected thường dùng để allow subclass access, nhưng final prevents subclassing. Better use private or package-private."
  },
  // Question 98
  {
    question: "What is the fragile base class problem?",
    options: {
      A: "Base class with bugs",
      B: "Changes in base class breaking subclasses unexpectedly",
      C: "Abstract classes without implementation",
      D: "Final classes cannot be modified"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Fragile base class problem: modifications trong base class có thể break subclasses một cách unexpected, ngay cả khi changes seem innocent. Xảy ra vì tight coupling trong inheritance. Đây là lý do 'favor composition over inheritance' - composition ít fragile hơn."
  },
  // Question 99
  {
    question: "Can you have default methods with the same signature in multiple interfaces?",
    options: {
      A: "Yes, first interface's method is used",
      B: "Yes, implementing class must override to resolve conflict",
      C: "No, compilation error in interfaces",
      D: "Yes, runtime resolution"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Nếu class implements multiple interfaces có conflicting default methods (same signature), class PHẢI explicitly override method để resolve conflict. Compiler báo lỗi nếu không override. Trong override, có thể gọi specific interface's default bằng InterfaceName.super.method()."
  },
  // Question 100
  {
    question: "What is the difference between association, aggregation, and composition?",
    options: {
      A: "They are all the same",
      B: "Association is general relationship, aggregation is weak 'has-a', composition is strong 'has-a'",
      C: "Composition is weakest",
      D: "Only composition supports polymorphism"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Association: general relationship giữa objects (A uses B). Aggregation: weak 'has-a', child exists independently (Department-Employee). Composition: strong 'has-a' with ownership, child's lifecycle tied to parent (Car-Engine). Strength: Association < Aggregation < Composition."
  }
];
