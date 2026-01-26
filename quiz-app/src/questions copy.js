// export const questions = [
//   // Question 1
//   {
//     question: "What is the primary difference between a class and an object in Java?",
//     options: {
//       A: "A class is a blueprint, an object is an instance",
//       B: "A class has methods, an object has variables",
//       C: "A class is static, an object is dynamic",
//       D: "A class is abstract, an object is concrete"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Class là một blueprint (bản thiết kế) định nghĩa cấu trúc và hành vi, trong khi object là một instance (thể hiện) cụ thể của class đó. Một class có thể tạo ra nhiều objects. Class chứa cả methods và variables, không chỉ có methods. Class không nhất thiết phải là static hay abstract."
//   },
//   // Question 2
//   {
//     question: "Which statement about constructors is FALSE?",
//     options: {
//       A: "Constructors cannot be inherited",
//       B: "Constructors can be overloaded",
//       C: "Constructors can be private",
//       D: "Constructors can have return types"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Constructor KHÔNG THỂ có return type, kể cả void. Constructor có tên giống class và không có return type. Constructor có thể được overload (nhiều constructor với tham số khác nhau), có thể là private (dùng cho Singleton pattern), và không thể được kế thừa."
//   },
//   // Question 3
//   {
//     question: "What is the output of the following code?",
//     options: {
//       A: "0",
//       B: "1",
//       C: "2",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     static int count = 0;
//     Test() { count++; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t1 = new Test();
//         Test t2 = new Test();
//         System.out.println(Test.count);
//     }
// }`,
//     explanation: "Output là 2. Biến static count được chia sẻ bởi tất cả các instance của class Test. Mỗi lần tạo object mới (t1, t2), constructor được gọi và count tăng lên 1. Sau khi tạo 2 objects, count = 2."
//   },
//   // Question 4
//   {
//     question: "Which of the following is NOT a principle of OOP?",
//     options: {
//       A: "Encapsulation",
//       B: "Compilation",
//       C: "Inheritance",
//       D: "Polymorphism"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Compilation (biên dịch) KHÔNG phải là một nguyên tắc của OOP. Bốn nguyên tắc chính của OOP là: Encapsulation (Đóng gói), Inheritance (Kế thừa), Polymorphism (Đa hình), và Abstraction (Trừu tượng). Compilation chỉ là quá trình chuyển đổi code Java thành bytecode."
//   },
//   // Question 5
//   {
//     question: "What happens when you try to access a private member of a class from outside the class?",
//     options: {
//       A: "Runtime exception",
//       B: "Compilation error",
//       C: "Returns null",
//       D: "Returns default value"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Lỗi biên dịch xảy ra khi cố gắng truy cập private member từ bên ngoài class. Private members chỉ có thể được truy cập trong cùng class. Compiler sẽ phát hiện lỗi này ngay tại thời điểm biên dịch, không phải runtime."
//   },
//   // Question 6
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     int x = 10;
// }
// public class Main {
//     public static void main(String[] args) {
//         A a1 = new A();
//         A a2 = a1;
//         a2.x = 20;
//         System.out.println(a1.x);
//     }
// }`,
//     explanation: "Output là 20. a2 = a1 không tạo object mới, mà chỉ tạo một reference khác trỏ đến cùng object. Do đó a1 và a2 trỏ đến cùng một object. Khi thay đổi a2.x = 20, giá trị của object được thay đổi, nên a1.x cũng là 20."
//   },
//   // Question 7
//   {
//     question: "Which keyword is used to prevent a class from being inherited?",
//     options: {
//       A: "static",
//       B: "final",
//       C: "abstract",
//       D: "private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Từ khóa 'final' được dùng để ngăn class bị kế thừa. Khi khai báo 'final class', không class nào có thể extend class đó. 'static' dùng cho members, 'abstract' cho phép kế thừa, 'private' chỉ dùng cho members không phải class."
//   },
//   // Question 8
//   {
//     question: "What is the default value of an instance variable of type reference?",
//     options: {
//       A: "0",
//       B: "null",
//       C: "undefined",
//       D: "Depends on the class"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Giá trị mặc định của biến instance kiểu reference là 'null'. Tất cả các biến reference (object, array, String, etc.) đều có giá trị mặc định là null nếu không được khởi tạo. Primitive types có giá trị mặc định khác (int = 0, boolean = false, etc.)."
//   },
//   // Question 9
//   {
//     question: "Can a constructor call another constructor in the same class?",
//     options: {
//       A: "No, never",
//       B: "Yes, using this()",
//       C: "Yes, using super()",
//       D: "Yes, using new keyword"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, constructor có thể gọi constructor khác trong cùng class bằng cách sử dụng this(). this() phải là câu lệnh đầu tiên trong constructor. super() dùng để gọi constructor của parent class, không phải cùng class. Không thể dùng new để gọi constructor trong cùng class."
//   },
//   // Question 10
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "null",
//       C: "Compilation error",
//       D: "Runtime exception"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     int x;
//     Test(int x) {
//         this.x = x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.println(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class Test chỉ có constructor có tham số Test(int x), không có default constructor. Khi khai báo constructor có tham số, Java không tự động tạo default constructor. Gọi new Test() không có tham số sẽ gây lỗi biên dịch."
//   },
//   // Question 11
//   {
//     question: "Which access modifier provides the most restrictive access?",
//     options: {
//       A: "public",
//       B: "protected",
//       C: "default",
//       D: "private"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Private là access modifier có phạm vi hạn chế nhất. Private members chỉ có thể được truy cập trong cùng class. Thứ tự từ hạn chế nhất đến mở nhất: private > default (package-private) > protected > public."
//   },
//   // Question 12
//   {
//     question: "What is method signature in Java?",
//     options: {
//       A: "Method name only",
//       B: "Method name + return type",
//       C: "Method name + parameter list",
//       D: "Method name + access modifier"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Method signature trong Java bao gồm method name + parameter list (số lượng, kiểu dữ liệu, thứ tự của parameters). Return type và access modifier KHÔNG phải là phần của method signature. Method signature được dùng để phân biệt các methods khi overloading."
//   },
//   // Question 13
//   {
//     question: "What is the output?",
//     options: {
//       A: "123",
//       B: "321",
//       C: "132",
//       D: "231"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static { System.out.print("1"); }
//     { System.out.print("2"); }
//     A() { System.out.print("3"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new A();
//     }
// }`,
//     explanation: "Output là '123'. Thứ tự thực thi: 1) Static block chạy đầu tiên khi class được load (in '1'), 2) Instance initialization block chạy trước constructor (in '2'), 3) Constructor chạy cuối cùng (in '3'). Static block chỉ chạy một lần khi class được load, instance block chạy mỗi lần tạo object."
//   },
//   // Question 14
//   {
//     question: "Can we overload the main method in Java?",
//     options: {
//       A: "No, it's not possible",
//       B: "Yes, but JVM will call only the standard main method",
//       C: "Yes, and JVM will call all main methods",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có thể overload main method trong Java. Tuy nhiên, JVM chỉ gọi method main với signature: public static void main(String[] args). Các overloaded versions khác của main method có thể được gọi từ code khác, nhưng JVM không tự động gọi chúng."
//   },
//   // Question 15
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     int x = 10;
//     void change(int x) {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change(t.x);
//         System.out.println(t.x);
//     }
// }`,
//     explanation: "Output là 10. Trong method change(int x), tham số x là biến local, không phải instance variable. Khi gán x = 20, chỉ biến local được thay đổi, không ảnh hưởng đến instance variable t.x. Để thay đổi instance variable, cần dùng this.x = 20."
//   },
//   // Question 16
//   {
//     question: "Which statement about the 'this' keyword is FALSE?",
//     options: {
//       A: "It refers to the current object",
//       B: "It can be used in static methods",
//       C: "It can be used to invoke current class constructor",
//       D: "It can be used to pass as argument in method call"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Câu B SAI. 'this' KHÔNG THỂ được sử dụng trong static methods vì 'this' tham chiếu đến instance hiện tại, trong khi static methods thuộc về class, không thuộc về instance. 'this' có thể dùng để gọi constructor (this()), truyền làm tham số, và tham chiếu đến instance hiện tại."
//   },
//   // Question 17
//   {
//     question: "What is object composition in OOP?",
//     options: {
//       A: "Creating multiple objects",
//       B: "A \"has-a\" relationship",
//       C: "A \"is-a\" relationship",
//       D: "Destroying objects"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Object composition là mối quan hệ \"has-a\" (có một), trong đó một object chứa các objects khác như là thành phần của nó. Ví dụ: Car has-a Engine. Đây là cách thay thế cho inheritance trong một số trường hợp. \"is-a\" relationship là inheritance."
//   },
//   // Question 18
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "BA"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     A() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     B() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//     }
// }`,
//     explanation: "Output là 'AB'. Khi tạo object của class B, constructor của parent class A được gọi trước (thông qua super() ngầm định), in 'A', sau đó constructor của B được gọi, in 'B'. Thứ tự luôn là: parent constructor trước, child constructor sau."
//   },
//   // Question 19
//   {
//     question: "Can a class extend multiple classes in Java?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Yes, using interfaces",
//       D: "Yes, using abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, một class trong Java chỉ có thể extend một class duy nhất (single inheritance). Java không hỗ trợ multiple inheritance cho classes để tránh diamond problem. Tuy nhiên, một class có thể implement nhiều interfaces, và một interface có thể extend nhiều interfaces."
//   },
//   // Question 20
//   {
//     question: "What is tight coupling in OOP?",
//     options: {
//       A: "Classes are highly dependent on each other",
//       B: "Classes are loosely connected",
//       C: "Classes are not connected",
//       D: "Classes are abstract"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Tight coupling (liên kết chặt chẽ) là khi các classes phụ thuộc nhiều vào nhau. Khi một class thay đổi, các class khác cũng phải thay đổi theo. Đây là điều nên tránh trong OOP. Loose coupling (liên kết lỏng lẻo) là tốt hơn, giúp code dễ bảo trì và mở rộng."
//   },
//   // Question 21
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "null",
//       C: "Compilation error",
//       D: "NullPointerException"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     void show() {
//         System.out.print("A");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = null;
//         t.show();
//     }
// }`,
//     explanation: "NullPointerException xảy ra vì biến t được gán giá trị null, sau đó cố gắng gọi method show() trên null reference. Trong Java, gọi method trên null reference sẽ ném NullPointerException tại runtime, không phải lỗi biên dịch."
//   },
//   // Question 22
//   {
//     question: "Which of these is NOT a valid way to create an object?",
//     options: {
//       A: "Using new keyword",
//       B: "Using reflection",
//       C: "Using clone()",
//       D: "Using abstract keyword"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Abstract keyword KHÔNG được dùng để tạo object. Abstract classes và methods không thể được khởi tạo trực tiếp. Các cách hợp lệ để tạo object: new keyword (thường dùng nhất), reflection (Class.newInstance()), clone() (sao chép object), deserialization, và factory methods."
//   },
//   // Question 23
//   {
//     question: "What is the purpose of the finalize() method?",
//     options: {
//       A: "To initialize objects",
//       B: "To perform cleanup before garbage collection",
//       C: "To create objects",
//       D: "To compare objects"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Method finalize() được gọi bởi garbage collector trước khi object bị thu hồi bộ nhớ. Nó được dùng để thực hiện cleanup (dọn dẹp tài nguyên) như đóng file, giải phóng kết nối database. Tuy nhiên, finalize() đã bị deprecated từ Java 9, nên dùng try-with-resources hoặc AutoCloseable thay thế."
//   },
//   // Question 24
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 10",
//       B: "20 20",
//       C: "20 10",
//       D: "10 20"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     int x = 10;
//     void show() {
//         int x = 20;
//         System.out.print(x + " " + this.x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new A().show();
//     }
// }`,
//     explanation: "Output là '20 10'. Trong method show(), biến local x = 20 che khuất (shadow) instance variable x. Khi in x (không có this), nó in biến local (20). Khi in this.x, nó in instance variable (10). 'this' được dùng để truy cập instance variable khi bị che khuất bởi biến local."
//   },
//   // Question 25
//   {
//     question: "What is object slicing in the context of OOP?",
//     options: {
//       A: "Dividing an object into parts",
//       B: "Loss of derived class features when assigned to base class",
//       C: "Deleting part of an object",
//       D: "Not applicable in Java"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Object slicing KHÔNG áp dụng trong Java. Đây là khái niệm của C++ khi gán derived class object vào base class variable, dẫn đến mất thông tin của derived class. Java không có vấn đề này vì tất cả objects được tham chiếu qua references, không phải giá trị trực tiếp."
//   },
//   // Question 26
//   {
//     question: "What is the primary goal of encapsulation?",
//     options: {
//       A: "To hide implementation details",
//       B: "To expose all data",
//       C: "To improve performance",
//       D: "To reduce memory usage"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Mục tiêu chính của encapsulation (đóng gói) là ẩn implementation details (chi tiết triển khai). Bằng cách sử dụng private variables và public methods (getters/setters), ta có thể kiểm soát cách dữ liệu được truy cập và thay đổi, giúp code an toàn và dễ bảo trì hơn."
//   },
//   // Question 27
//   {
//     question: "Which access modifier allows access within the same package and subclasses?",
//     options: {
//       A: "private",
//       B: "protected",
//       C: "public",
//       D: "default"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Protected cho phép truy cập trong cùng package và trong subclasses (kể cả subclasses ở package khác). Private chỉ trong cùng class, default chỉ trong cùng package, public ở mọi nơi. Protected kết hợp quyền của default và thêm quyền cho subclasses."
//   },
//   // Question 28
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     private int x = 10;
//     class B {
//         void show() {
//             System.out.print(x);
//         }
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A.B b = new A().new B();
//         b.show();
//     }
// }`,
//     explanation: "Output là 10. Inner class B có thể truy cập private members của outer class A. Đây là đặc điểm của inner classes trong Java - chúng có quyền truy cập đầy đủ vào members của outer class, kể cả private members."
//   },
//   // Question 29
//   {
//     question: "What is a getter method also known as?",
//     options: {
//       A: "Mutator",
//       B: "Accessor",
//       C: "Constructor",
//       D: "Destructor"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Getter method còn được gọi là Accessor (phương thức truy cập). Getter dùng để đọc giá trị của private variable. Setter method được gọi là Mutator (phương thức thay đổi), dùng để gán giá trị. Constructor dùng để khởi tạo object, không phải getter."
//   },
//   // Question 30
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "1",
//       C: "2",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     private static int count = 0;
//     public Test() { count++; }
//     public static int getCount() { return count; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t1 = new Test();
//         Test t2 = new Test();
//         System.out.print(Test.getCount());
//     }
// }`,
//     explanation: "Output là 2. Biến static count được chia sẻ bởi tất cả instances. Mỗi lần tạo object mới (t1, t2), constructor được gọi và count tăng lên 1. Sau khi tạo 2 objects, count = 2. Static method getCount() có thể được gọi trực tiếp từ class mà không cần instance."
//   },
//   // Question 31
//   {
//     question: "Can a private method be overridden?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in subclasses",
//       D: "Only if made protected"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, private methods không thể bị override. Private methods chỉ có thể được truy cập trong cùng class, nên subclass không thể thấy hoặc override chúng. Nếu subclass có method cùng tên, đó là method mới, không phải override. Để override, method phải có ít nhất là protected hoặc public."
//   },
//   // Question 32
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     private int x = 10;
//     int getX() { return x; }
// }
// class B extends A {
//     private int x = 20;
//     int getX() { return x; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.getX());
//     }
// }`,
//     explanation: "Output là 20. Class B override method getX() và trả về biến x của chính nó (20). Mặc dù a được khai báo là kiểu A, nhưng object thực tế là B, nên method getX() của B được gọi (runtime polymorphism). Biến x trong B là biến riêng, không liên quan đến x trong A."
//   },
//   // Question 33
//   {
//     question: "Which is the most encapsulated?",
//     options: {
//       A: "public int x;",
//       B: "protected int x;",
//       C: "int x;",
//       D: "private int x with public getter"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Option D là cách đóng gói tốt nhất. Private variable với public getter cho phép kiểm soát hoàn toàn cách dữ liệu được truy cập. Ta có thể thêm validation, logging, hoặc tính toán trong getter. Public/protected/default variables cho phép truy cập trực tiếp, không kiểm soát được."
//   },
//   // Question 34
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "null",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x;
//     Test(int x) { x = x; }
//     int getX() { return x; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(10);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 0. Trong constructor Test(int x) { x = x; }, cả hai x đều là tham số, không phải instance variable. Cần dùng this.x = x để gán giá trị cho instance variable. Vì không gán được, instance variable x giữ giá trị mặc định 0."
//   },
//   // Question 35
//   {
//     question: "Can we have a private constructor?",
//     options: {
//       A: "No",
//       B: "Yes, but class cannot be instantiated outside",
//       C: "Yes, without any restrictions",
//       D: "Only in abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có thể có private constructor. Khi constructor là private, class không thể được khởi tạo từ bên ngoài class. Điều này được dùng trong Singleton pattern hoặc utility classes (chỉ có static methods). Object chỉ có thể được tạo từ bên trong class (static factory methods)."
//   },
//   // Question 36
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "null"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     protected int x = 10;
// }
// class B extends A {
//     void show() {
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show();
//     }
// }`,
//     explanation: "Output là 10. Class B kế thừa từ A và có thể truy cập protected variable x của parent class. Protected members có thể được truy cập trong subclass, kể cả khi subclass ở package khác. Method show() trong B truy cập x từ A và in ra 10."
//   },
//   // Question 37
//   {
//     question: "What is immutability in the context of encapsulation?",
//     options: {
//       A: "Objects cannot be created",
//       B: "Object state cannot be modified after creation",
//       C: "Objects are always null",
//       D: "Objects are static"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Immutability (bất biến) trong encapsulation có nghĩa là trạng thái của object không thể thay đổi sau khi được tạo. Tất cả fields là final và không có setters. Ví dụ: String, Integer là immutable. Điều này giúp đảm bảo thread-safety và tránh side effects."
//   },
//   // Question 38
//   {
//     question: "What is the output?",
//     options: {
//       A: "30",
//       B: "40",
//       C: "50",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     private int x = 10;
//     private int y = 20;
//     void setX(int x) { this.x = x; }
//     int sum() { return x + y; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(30);
//         System.out.print(t.sum());
//     }
// }`,
//     explanation: "Output là 50. Private variables x và y được đóng gói. Method setX(30) thay đổi x từ 10 thành 30. Method sum() trả về x + y = 30 + 20 = 50. Đây là ví dụ về encapsulation: dữ liệu được bảo vệ (private) và chỉ có thể truy cập qua methods (setX, sum)."
//   },
//   // Question 39
//   {
//     question: "Which package access modifier allows access only within the same package?",
//     options: {
//       A: "private",
//       B: "protected",
//       C: "default (no modifier)",
//       D: "public"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Default access modifier (không có modifier) cho phép truy cập chỉ trong cùng package. Private chỉ trong cùng class, protected trong cùng package và subclasses, public ở mọi nơi. Default còn được gọi là package-private."
//   },
//   // Question 40
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 10",
//       B: "20 20",
//       C: "10 20",
//       D: "20 10"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     int x = 10;
// }
// class B extends A {
//     int x = 20;
//     void show() {
//         System.out.print(super.x + " " + this.x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show();
//     }
// }`,
//     explanation: "Output là '10 20'. Class B có biến x riêng (20) che khuất biến x của parent class A (10). super.x truy cập biến x của parent class (10), this.x truy cập biến x của chính class B (20). Đây là variable hiding, không phải overriding."
//   },
//   // Question 41
//   {
//     question: "What is defensive copying in encapsulation?",
//     options: {
//       A: "Copying the class",
//       B: "Creating copies of mutable objects to prevent external modifications",
//       C: "Copying methods",
//       D: "Duplicating code"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Defensive copying (sao chép phòng thủ) là tạo bản sao của mutable objects để ngăn chặn thay đổi từ bên ngoài. Khi return một mutable object (như array, List), ta nên return một copy thay vì reference gốc để đảm bảo encapsulation. Ví dụ: return Arrays.copyOf(arr, arr.length) thay vì return arr."
//   },
//   // Question 42
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private static int x = 10;
//     static void change() { x = 20; }
//     static int getX() { return x; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.change();
//         System.out.print(Test.getX());
//     }
// }`,
//     explanation: "Output là 20. Private static variable x được đóng gói, chỉ có thể truy cập qua static methods. Test.change() thay đổi x từ 10 thành 20. Test.getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói static variables đúng cách."
//   },
//   // Question 43
//   {
//     question: "Can a protected member be accessed from a different package?",
//     options: {
//       A: "No, never",
//       B: "Yes, only through inheritance",
//       C: "Yes, always",
//       D: "Only if made public"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, protected member có thể được truy cập từ package khác, nhưng CHỈ thông qua inheritance. Trong cùng package, protected có thể truy cập trực tiếp. Ở package khác, chỉ subclass mới có thể truy cập protected members của parent class, không thể truy cập trực tiếp."
//   },
//   // Question 44
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     private void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method show() trong A là private, không thể được truy cập từ bên ngoài class A. Mặc dù B có method show() public, nhưng khi gọi a.show() với a có kiểu A, compiler chỉ thấy method private show() của A, không thể truy cập được."
//   },
//   // Question 45
//   {
//     question: "What is the JavaBean naming convention for a boolean getter?",
//     options: {
//       A: "getProperty()",
//       B: "isProperty()",
//       C: "hasProperty()",
//       D: "checkProperty()"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "JavaBean naming convention cho boolean getter là 'isProperty()' thay vì 'getProperty()'. Ví dụ: isActive(), isEnabled(). Điều này giúp code dễ đọc hơn. Tuy nhiên, 'getProperty()' cũng được chấp nhận cho boolean, nhưng 'isProperty()' là chuẩn."
//   },
//   // Question 46
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "100",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int[] arr = {1, 2, 3};
//     int[] getArr() { return arr; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         int[] a = t.getArr();
//         a[0] = 100;
//         System.out.print(t.getArr()[0]);
//     }
// }`,
//     explanation: "Output là 100. Method getArr() return reference đến array gốc, không phải copy. Khi thay đổi a[0] = 100, nó thay đổi array gốc trong object t. Đây là lỗi encapsulation - nên return defensive copy (Arrays.copyOf) để bảo vệ dữ liệu."
//   },
//   // Question 47
//   {
//     question: "What breaks encapsulation?",
//     options: {
//       A: "Using private variables",
//       B: "Exposing internal mutable objects directly",
//       C: "Using getter methods",
//       D: "Using setter methods with validation"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Exposing internal mutable objects directly (trả về reference trực tiếp đến mutable objects) phá vỡ encapsulation. Khi return array, List, hoặc object có thể thay đổi, code bên ngoài có thể thay đổi dữ liệu bên trong object. Nên return defensive copy hoặc immutable wrapper."
//   },
//   // Question 48
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "Compilation error",
//       D: "0"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     int x = 10;
//     private class B {
//         int x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A.B b = new A().new B();
//         System.out.print(b.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì inner class B được khai báo là private, không thể được truy cập từ bên ngoài class A. Private inner class chỉ có thể được sử dụng bên trong outer class. Không thể tạo instance của private inner class từ bên ngoài."
//   },
//   // Question 49
//   {
//     question: "What is the principle of least privilege in encapsulation?",
//     options: {
//       A: "Give maximum access to all members",
//       B: "Give minimum access level necessary",
//       C: "Make everything public",
//       D: "Make everything private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Principle of least privilege (nguyên tắc đặc quyền tối thiểu) trong encapsulation là cung cấp mức truy cập tối thiểu cần thiết. Bắt đầu với private, chỉ mở rộng (protected, public) khi thực sự cần. Điều này giúp bảo vệ dữ liệu và giảm coupling."
//   },
//   // Question 50
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "30",
//       D: "0"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     private int x;
//     { x = 10; }
//     Test() { x = 20; }
//     Test(int x) { this.x = x; }
//     int getX() { return x; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(30);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 30. Constructor Test(int x) được gọi với tham số 30. Instance initialization block { x = 10; } chạy trước constructor, nhưng constructor Test(int x) ghi đè giá trị với this.x = x (30). Constructor luôn chạy sau instance block và có thể ghi đè giá trị."
//   },
//   // Question 51
//   {
//     question: "What is the maximum number of classes a Java class can extend?",
//     options: {
//       A: "0",
//       B: "1",
//       C: "2",
//       D: "Unlimited"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Một class trong Java chỉ có thể extend một class duy nhất (single inheritance). Java không hỗ trợ multiple inheritance cho classes để tránh diamond problem. Tuy nhiên, một class có thể implement nhiều interfaces, và một interface có thể extend nhiều interfaces."
//   },
//   // Question 52
//   {
//     question: "What is the output?",
//     options: {
//       A: "134",
//       B: "234",
//       C: "24",
//       D: "13"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     A() { System.out.print("1"); }
//     A(int x) { System.out.print("2"); }
// }
// class B extends A {
//     B() { System.out.print("3"); }
//     B(int x) { super(x); System.out.print("4"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B(5);
//     }
// }`,
//     explanation: "Output là '24'. Khi tạo B(5), constructor B(int x) được gọi. super(x) gọi constructor A(int x) của parent class, in '2'. Sau đó constructor B(int x) tiếp tục, in '4'. Default constructor A() không được gọi vì đã gọi A(int x) qua super(x)."
//   },
//   // Question 53
//   {
//     question: "Which keyword is used to call parent class constructor?",
//     options: {
//       A: "this",
//       B: "super",
//       C: "parent",
//       D: "base"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Từ khóa 'super' được dùng để gọi constructor của parent class. super() hoặc super(parameters) phải là câu lệnh đầu tiên trong constructor. 'this' dùng để gọi constructor của cùng class. 'parent' và 'base' không phải là keywords trong Java."
//   },
//   // Question 54
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     int x = 10;
// }
// class B extends A {
//     int x = 20;
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.x);
//     }
// }`,
//     explanation: "Output là 10. Variables không có polymorphism, chỉ methods mới có. Khi truy cập a.x với a có kiểu A, nó truy cập biến x của class A (10), không phải biến x của class B (20). Đây là variable hiding, không phải overriding."
//   },
//   // Question 55
//   {
//     question: "Can we override static methods?",
//     options: {
//       A: "Yes",
//       B: "No, it's method hiding",
//       C: "Only if made non-static",
//       D: "Only in subclasses"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, static methods không thể bị override, chỉ có thể bị hide (ẩn). Khi subclass có static method cùng tên, nó ẩn method của parent class. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Đây là sự khác biệt với instance methods."
//   },
//   // Question 56
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism (đa hình runtime). Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 57
//   {
//     question: "What must be the first statement in a constructor (if explicitly written)?",
//     options: {
//       A: "System.out.println()",
//       B: "super() or this()",
//       C: "Variable initialization",
//       D: "Method call"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Nếu viết explicitly, câu lệnh đầu tiên trong constructor PHẢI là super() hoặc this(). super() gọi constructor của parent class, this() gọi constructor khác trong cùng class. Nếu không viết, Java tự động thêm super() (gọi default constructor của parent)."
//   },
//   // Question 58
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static void show() { System.out.print("A"); }
// }
// class B extends A {
//     static void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'A'. Static methods không có runtime polymorphism. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Vì a có kiểu A, nên A.show() được gọi, in 'A'. Đây là method hiding, không phải overriding."
//   },
//   // Question 59
//   {
//     question: "Which methods cannot be overridden?",
//     options: {
//       A: "static methods",
//       B: "final methods",
//       C: "private methods",
//       D: "All of the above"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Tất cả các loại trên đều không thể bị override. Static methods bị hide, không phải override. Final methods được thiết kế để không thể override. Private methods không thể thấy từ subclass, nên không thể override. Chỉ non-final, non-static, non-private instance methods mới có thể override."
//   },
//   // Question 60
//   {
//     question: "What is the output?",
//     options: {
//       A: "123",
//       B: "213",
//       C: "321",
//       D: "312"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     A() { this(10); System.out.print("1"); }
//     A(int x) { System.out.print("2"); }
// }
// class B extends A {
//     B() { System.out.print("3"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//     }
// }`,
//     explanation: "Output là '213'. Khi tạo B(), constructor B() gọi super() ngầm định, gọi A(). A() gọi this(10), gọi A(int x), in '2'. Sau đó A() tiếp tục, in '1'. Cuối cùng B() tiếp tục, in '3'. Thứ tự: parent constructor (2) -> parent constructor tiếp (1) -> child constructor (3)."
//   },
//   // Question 61
//   {
//     question: "Can a subclass have a different return type for an overridden method?",
//     options: {
//       A: "No",
//       B: "Yes, if it's a covariant return type",
//       C: "Yes, always",
//       D: "Only if it's primitive"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, subclass có thể có return type khác, nhưng CHỈ khi đó là covariant return type (kiểu con của return type của parent method). Ví dụ: parent method return Animal, subclass method có thể return Dog (nếu Dog extends Animal). Return type phải là subtype, không thể là supertype hoặc kiểu không liên quan."
//   },
//   // Question 62
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints AB"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() throws IOException {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() throws Exception {
//         System.out.print("B");
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì khi override method, checked exception trong subclass không thể rộng hơn (broader) exception trong parent method. Exception là superclass của IOException, nên không được phép. Overridden method chỉ có thể throw cùng exception, subclass của exception, hoặc không throw exception."
//   },
//   // Question 63
//   {
//     question: "What is multilevel inheritance?",
//     options: {
//       A: "A class extends multiple classes",
//       B: "A class is extended by multiple classes",
//       C: "A class extends a class that extends another class",
//       D: "Not supported in Java"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Multilevel inheritance (kế thừa đa cấp) là khi một class extends một class mà class đó lại extends class khác. Ví dụ: C extends B, B extends A. Java hỗ trợ multilevel inheritance. Multiple inheritance (một class extends nhiều classes) thì không được hỗ trợ."
//   },
//   // Question 64
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error in class B",
//       C: "Runtime error",
//       D: "Prints B"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     final void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }`,
//     explanation: "Lỗi biên dịch trong class B vì cố gắng override method final show() của class A. Final methods không thể bị override. Class B có method show() nhưng không thể override method final của parent class. Phải xóa method show() trong B hoặc thay đổi tên method."
//   },
//   // Question 65
//   {
//     question: "What happens if a class doesn't explicitly extend any class?",
//     options: {
//       A: "Compilation error",
//       B: "It implicitly extends Object",
//       C: "It becomes abstract",
//       D: "It cannot be instantiated"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Nếu class không extend class nào, nó tự động (implicitly) extends class Object. Object là root class của tất cả classes trong Java. Mọi class đều kế thừa từ Object, nên có thể sử dụng các methods như toString(), equals(), hashCode() từ Object class."
//   },
//   // Question 66
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     int x = 10;
//     A(int x) { this.x = x; }
// }
// class B extends A {
//     B() { System.out.print(x); }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class A chỉ có constructor có tham số A(int x), không có default constructor. Khi B() được gọi, nó cố gắng gọi super() ngầm định (default constructor của A), nhưng A không có default constructor. Phải thêm super(10) hoặc tạo default constructor trong A."
//   },
//   // Question 67
//   {
//     question: "Can a constructor be final?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in abstract classes",
//       D: "Only if private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, constructor không thể là final. Final chỉ áp dụng cho classes, methods, và variables. Constructor không thể được kế thừa nên không cần final. Constructor có thể là private (dùng cho Singleton), nhưng không thể là final."
//   },
//   // Question 68
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     void show(int x) { System.out.print("A"); }
// }
// class B extends A {
//     void show(long x) { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.show(10);
//     }
// }`,
//     explanation: "Output là 'A'. Method show(long x) trong B không override show(int x) trong A vì parameter types khác nhau (int vs long). Đây là method overloading, không phải overriding. Khi gọi b.show(10), 10 là int, nên method show(int x) của A được gọi (kế thừa), in 'A'."
//   },
//   // Question 69
//   {
//     question: "What is hierarchical inheritance?",
//     options: {
//       A: "A class extends multiple classes",
//       B: "Multiple classes extend a single class",
//       C: "A chain of inheritance",
//       D: "Not supported in Java"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Hierarchical inheritance (kế thừa phân cấp) là khi nhiều classes extend một class duy nhất. Ví dụ: B extends A, C extends A, D extends A. Tất cả đều kế thừa từ A. Đây là pattern phổ biến trong OOP. Multilevel inheritance là khi có chuỗi: C extends B, B extends A."
//   },
//   // Question 70
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "5",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     A() { show(); }
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     int x = 5;
//     void show() { System.out.print(x); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//     }
// }`,
//     explanation: "Output là 0. Khi constructor A() được gọi, nó gọi show() trước khi instance variables của B được khởi tạo. show() của B được gọi (polymorphism), nhưng x chưa được gán giá trị 5, nên x có giá trị mặc định 0. Đây là lý do không nên gọi overridden methods trong constructor."
//   },
//   // Question 71
//   {
//     question: "Can we reduce the visibility of an overridden method?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only to protected",
//       D: "Only to default"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, không thể giảm visibility của overridden method. Overridden method phải có visibility bằng hoặc rộng hơn method của parent class. Ví dụ: nếu parent method là protected, subclass method có thể là protected hoặc public, nhưng không thể là private hoặc default."
//   },
//   // Question 72
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints B"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     private void show() { System.out.print("B"); }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method show() trong B có visibility private, nhỏ hơn visibility của method show() trong A (default/package-private). Overridden method không thể giảm visibility. Phải giữ nguyên hoặc tăng visibility (protected hoặc public)."
//   },
//   // Question 73
//   {
//     question: "What is super.super.method() in Java?",
//     options: {
//       A: "Calls grandparent method",
//       B: "Not valid syntax",
//       C: "Calls parent method twice",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "super.super.method() KHÔNG phải là syntax hợp lệ trong Java. Java không cho phép truy cập trực tiếp đến grandparent class. Chỉ có thể dùng super để truy cập parent class. Nếu cần gọi grandparent method, phải override method trong parent class để gọi super.method()."
//   },
//   // Question 74
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "BA"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { 
//         super.show();
//         System.out.print("B"); 
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show();
//     }
// }`,
//     explanation: "Output là 'AB'. Method show() trong B override method của A. Trong show() của B, super.show() gọi method của parent class A, in 'A'. Sau đó tiếp tục in 'B'. super được dùng để gọi method của parent class trong overridden method."
//   },
//   // Question 75
//   {
//     question: "Can abstract class extend concrete class?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only if concrete class is final",
//       D: "Only if concrete class has abstract methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, abstract class có thể extend concrete class. Abstract class có thể kế thừa từ bất kỳ class nào (abstract hoặc concrete). Ví dụ: abstract class B extends A (concrete). Abstract class có thể có abstract methods và concrete methods, và có thể kế thừa tất cả members từ parent class."
//   },
//   // Question 76
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints nothing"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     A(int x) { }
// }
// class B extends A {
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class A chỉ có constructor có tham số, không có default constructor. Khi tạo B(), constructor B() cố gắng gọi super() ngầm định (default constructor của A), nhưng A không có. Phải thêm constructor B() { super(10); } hoặc tạo default constructor trong A."
//   },
//   // Question 77
//   {
//     question: "What is method overriding?",
//     options: {
//       A: "Same method name, different parameters in same class",
//       B: "Same method signature in parent and child class",
//       C: "Multiple methods with same name",
//       D: "Changing method implementation"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Method overriding là khi subclass có method với cùng signature (tên + tham số) với method của parent class. Overriding cho phép subclass cung cấp implementation riêng. Option A là method overloading (cùng class, khác parameters), không phải overriding."
//   },
//   // Question 78
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Returns 2"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     int show() { return 1; }
// }
// class B extends A {
//     long show() { return 2; }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì return type khác nhau (int vs long) không được coi là override hợp lệ. Overriding yêu cầu cùng return type hoặc covariant return type (subtype). long không phải là subtype của int (cả hai đều là primitive types, không có quan hệ kế thừa)."
//   },
//   // Question 79
//   {
//     question: "Can we override equals() method?",
//     options: {
//       A: "No",
//       B: "Yes, it's from Object class",
//       C: "Only in final classes",
//       D: "Only in abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, có thể override equals() method vì nó đến từ Object class. equals() là instance method public, không phải final, nên có thể override. Khi override equals(), nên override hashCode() để tuân thủ contract: hai objects bằng nhau phải có cùng hashCode."
//   },
//   // Question 80
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "BA"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
//     void display() { super.show(); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.display();
//     }
// }`,
//     explanation: "Output là 'A'. Method display() trong B gọi super.show(), gọi method show() của parent class A, in 'A'. super được dùng để truy cập members của parent class. Method show() của B không được gọi vì display() gọi super.show(), không phải this.show()."
//   },
//   // Question 81
//   {
//     question: "What are the two types of polymorphism in Java?",
//     options: {
//       A: "Static and Dynamic",
//       B: "Compile-time and Runtime",
//       C: "Method overloading and Method overriding",
//       D: "Both B and C"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Cả B và C đều đúng. Polymorphism có hai loại: Compile-time (method overloading) và Runtime (method overriding). Còn được gọi là Static polymorphism (compile-time) và Dynamic polymorphism (runtime). Method overloading là compile-time, method overriding là runtime."
//   },
//   // Question 82
//   {
//     question: "What is the output?",
//     options: {
//       A: "int",
//       B: "Integer",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(int x) { System.out.print("int"); }
//     void show(Integer x) { System.out.print("Integer"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10);
//     }
// }`,
//     explanation: "Output là 'int'. Khi gọi t.show(10), 10 là primitive int. Compiler ưu tiên exact match (int) hơn autoboxing (int -> Integer). Method show(int x) khớp chính xác với primitive int, nên được chọn. Method show(Integer x) yêu cầu autoboxing, chỉ được chọn nếu không có exact match."
//   },
//   // Question 83
//   {
//     question: "Which is an example of compile-time polymorphism?",
//     options: {
//       A: "Method overriding",
//       B: "Method overloading",
//       C: "Interface implementation",
//       D: "Abstract class"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Method overloading là ví dụ của compile-time polymorphism. Compiler quyết định method nào được gọi dựa trên số lượng và kiểu tham số tại compile-time. Method overriding là runtime polymorphism, interface implementation và abstract class cũng là runtime."
//   },
//   // Question 84
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "C",
//       D: "ABC"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// class C extends B {
//     void show() { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new C();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'C'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là C. Method show() của C được gọi (most specific implementation). Trong multilevel inheritance, method của class con nhất (C) được gọi."
//   },
//   // Question 85
//   {
//     question: "Can we overload methods by changing only return type?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only if parameters are also different",
//       D: "Only for static methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, không thể overload methods chỉ bằng cách thay đổi return type. Method signature chỉ bao gồm method name + parameter list, không bao gồm return type. Để overload, phải thay đổi parameter list (số lượng, kiểu, thứ tự). Return type không đủ để phân biệt methods."
//   },
//   // Question 86
//   {
//     question: "What is the output?",
//     options: {
//       A: "varargs",
//       B: "int",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     void show(int... x) { System.out.print("varargs"); }
//     void show(int x) { System.out.print("int"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10);
//     }
// }`,
//     explanation: "Output là 'int'. Khi gọi t.show(10) với một tham số, compiler ưu tiên exact match (show(int x)) hơn varargs (show(int... x)). Varargs chỉ được chọn nếu không có exact match. Nếu gọi t.show(10, 20), varargs sẽ được chọn."
//   },
//   // Question 87
//   {
//     question: "What is dynamic method dispatch?",
//     options: {
//       A: "Calling overloaded methods",
//       B: "Runtime resolution of overridden methods",
//       C: "Compile-time method binding",
//       D: "Static method calling"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Dynamic method dispatch (phân phối method động) là cơ chế runtime resolution của overridden methods. JVM quyết định method nào được gọi dựa trên kiểu thực tế của object tại runtime, không phải kiểu của reference tại compile-time. Đây là cơ chế của runtime polymorphism."
//   },
//   // Question 88
//   {
//     question: "What is the output?",
//     options: {
//       A: "Object",
//       B: "String",
//       C: "Compilation error",
//       D: "NullPointerException"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     void show(Object x) { System.out.print("Object"); }
//     void show(String x) { System.out.print("String"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(null);
//     }
// }`,
//     explanation: "Output là 'String'. Khi gọi t.show(null), compiler chọn method có parameter type cụ thể nhất (most specific). String là subclass của Object, nên show(String x) cụ thể hơn show(Object x). Null có thể được gán cho cả Object và String, nhưng compiler chọn String vì cụ thể hơn."
//   },
//   // Question 89
//   {
//     question: "Can we overload static methods?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only with different return types",
//       D: "Only in subclasses"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, có thể overload static methods. Overloading chỉ yêu cầu khác parameter list, không phụ thuộc vào static hay non-static. Static methods có thể được overload trong cùng class hoặc subclass. Tuy nhiên, static methods không thể override, chỉ có thể hide."
//   },
//   // Question 90
//   {
//     question: "What is the output?",
//     options: {
//       A: "AAA",
//       B: "ABB",
//       C: "BBB",
//       D: "ABC"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a1 = new A();
//         A a2 = new B();
//         B b = new B();
//         a1.show();
//         a2.show();
//         b.show();
//     }
// }`,
//     explanation: "Output là 'ABB'. a1.show() gọi method của A (a1 là object A), in 'A'. a2.show() gọi method của B (runtime polymorphism, a2 là object B), in 'B'. b.show() gọi method của B (b là object B), in 'B'. Runtime polymorphism chỉ áp dụng cho instance methods."
//   },
//   // Question 91
//   {
//     question: "What is covariant return type?",
//     options: {
//       A: "Different return type in overriding",
//       B: "Subtype return type in overriding",
//       C: "Same return type in overloading",
//       D: "Changing return type to primitive"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Covariant return type là khi overridden method có return type là subtype của return type của parent method. Ví dụ: parent method return Animal, subclass method return Dog (nếu Dog extends Animal). Java hỗ trợ covariant return types từ Java 5. Điều này giúp code type-safe và linh hoạt hơn."
//   },
//   // Question 92
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "2",
//       C: "12",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     void show(int x, long y) { System.out.print("1"); }
//     void show(long x, int y) { System.out.print("2"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10, 20);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì ambiguous method call. Cả hai methods đều có thể match với t.show(10, 20): show(int, long) yêu cầu widening int->long cho tham số thứ hai, show(long, int) yêu cầu widening int->long cho tham số đầu. Compiler không thể quyết định method nào, gây lỗi ambiguous."
//   },
//   // Question 93
//   {
//     question: "Can constructors be overridden?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in subclasses",
//       D: "Only if public"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, constructors không thể bị override. Constructors không được kế thừa, mỗi class phải có constructor riêng. Subclass có thể có constructor cùng tên với parent class, nhưng đó là constructor mới, không phải override. Constructor không phải là method nên không thể override."
//   },
//   // Question 94
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "2",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     Number show() { return 1; }
// }
// class B extends A {
//     Integer show() { return 2; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.show());
//     }
// }`,
//     explanation: "Output là 2. Đây là covariant return type - method show() trong B return Integer (subtype của Number). Runtime polymorphism áp dụng, method của B được gọi, return 2. Covariant return type cho phép return type cụ thể hơn trong overridden method, giúp code type-safe hơn."
//   },
//   // Question 95
//   {
//     question: "What is ad-hoc polymorphism?",
//     options: {
//       A: "Runtime polymorphism",
//       B: "Compile-time polymorphism/Method overloading",
//       C: "Interface polymorphism",
//       D: "Abstract polymorphism"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Ad-hoc polymorphism (đa hình tạm thời) là compile-time polymorphism, được thực hiện thông qua method overloading. Compiler quyết định method nào được gọi dựa trên số lượng và kiểu tham số tại compile-time. Khác với parametric polymorphism (generics) và subtype polymorphism (inheritance)."
//   },
//   // Question 96
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "2",
//       C: "12",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     void show(int x) { System.out.print("1"); }
//     void show(int... x) { System.out.print("2"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10, 20);
//     }
// }`,
//     explanation: "Output là '2'. Khi gọi t.show(10, 20) với hai tham số, method show(int x) không match (chỉ nhận một tham số). Method show(int... x) match vì varargs có thể nhận nhiều tham số. Varargs được chọn khi không có exact match. Nếu gọi t.show(10), show(int x) sẽ được chọn (exact match)."
//   },
//   // Question 97
//   {
//     question: "Can we achieve runtime polymorphism without inheritance?",
//     options: {
//       A: "Yes, using interfaces",
//       B: "No",
//       C: "Yes, using method overloading",
//       D: "Yes, using static methods"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Có, có thể đạt runtime polymorphism mà không cần inheritance bằng cách sử dụng interfaces. Khi một class implement interface, và có nhiều classes implement cùng interface, ta có thể đạt runtime polymorphism. Ví dụ: List list = new ArrayList() hoặc List list = new LinkedList(). Method overloading là compile-time, không phải runtime."
//   },
//   // Question 98
//   {
//     question: "What is the output?",
//     options: {
//       A: "AB",
//       B: "BC",
//       C: "AC",
//       D: "ABC"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
//     void show(int x) { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.show();
//         b.show(10);
//     }
// }`,
//     explanation: "Output là 'BC'. b.show() gọi method show() không tham số của B (override từ A), in 'B'. b.show(10) gọi method show(int x) của B (overload), in 'C'. Class B có cả overriding (show()) và overloading (show(int x))."
//   },
//   // Question 99
//   {
//     question: "What is parametric polymorphism in Java?",
//     options: {
//       A: "Method overloading",
//       B: "Generics",
//       C: "Method overriding",
//       D: "Abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Parametric polymorphism (đa hình tham số) trong Java được thực hiện thông qua Generics. Generics cho phép tạo code có thể hoạt động với nhiều kiểu dữ liệu khác nhau mà vẫn type-safe. Ví dụ: List<String>, List<Integer>. Method overloading là ad-hoc polymorphism, method overriding là subtype polymorphism."
//   },
//   // Question 100
//   {
//     question: "What is the output?",
//     options: {
//       A: "Integer",
//       B: "int",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(Integer x) { System.out.print("Integer"); }
//     void show(int x) { System.out.print("int"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         Integer i = 10;
//         t.show(i);
//     }
// }`,
//     explanation: "Output là 'Integer'. Biến i có kiểu Integer (wrapper class). Khi gọi t.show(i), compiler ưu tiên exact match (show(Integer x)) hơn unboxing (Integer -> int). Method show(Integer x) khớp chính xác với kiểu Integer, nên được chọn. Nếu gọi t.show(10) với primitive int, show(int x) sẽ được chọn."
//   },
//   // Question 101
//   {
//     question: "What is the binding time for overloaded methods?",
//     options: {
//       A: "Runtime",
//       B: "Compile-time",
//       C: "Load-time",
//       D: "Dynamic"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Binding time (thời điểm liên kết) cho overloaded methods là compile-time. Compiler quyết định method nào được gọi dựa trên số lượng và kiểu tham số tại thời điểm biên dịch. Đây là static binding. Runtime binding chỉ áp dụng cho overridden methods (dynamic method dispatch)."
//   },
//   // Question 102
//   {
//     question: "What is the output?",
//     options: {
//       A: "AA",
//       B: "AB",
//       C: "BA",
//       D: "BB"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     static void show() { System.out.print("A"); }
// }
// class B extends A {
//     static void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         B b = new B();
//         a.show();
//         b.show();
//     }
// }`,
//     explanation: "Output là 'AB'. Static methods không có runtime polymorphism. a.show() chọn method dựa trên kiểu của reference (A), in 'A'. b.show() chọn method dựa trên kiểu của reference (B), in 'B'. Static methods được bind tại compile-time dựa trên kiểu reference, không phải kiểu object."
//   },
//   // Question 103
//   {
//     question: "Can we have different access modifiers for overloaded methods?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only public",
//       D: "Only private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, có thể có access modifiers khác nhau cho overloaded methods. Overloading chỉ yêu cầu khác parameter list, không yêu cầu cùng access modifier. Ví dụ: có thể có public void show(int x) và private void show(String x). Tuy nhiên, điều này không phải là practice tốt vì gây confusion."
//   },
//   // Question 104
//   {
//     question: "What is the output?",
//     options: {
//       A: "byte",
//       B: "short",
//       C: "int",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(byte x) { System.out.print("byte"); }
//     void show(short x) { System.out.print("short"); }
//     void show(int x) { System.out.print("int"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         byte b = 10;
//         t.show(b);
//     }
// }`,
//     explanation: "Output là 'byte'. Khi gọi t.show(b) với b có kiểu byte, compiler ưu tiên exact match (show(byte x)) hơn widening (byte -> short -> int). Method show(byte x) khớp chính xác với kiểu byte, nên được chọn. Widening chỉ xảy ra khi không có exact match."
//   },
//   // Question 105
//   {
//     question: "What is the principle behind polymorphism?",
//     options: {
//       A: "One interface, multiple implementations",
//       B: "Multiple interfaces, one implementation",
//       C: "One interface, one implementation",
//       D: "Multiple interfaces, multiple implementations"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Nguyên tắc đằng sau polymorphism là 'One interface, multiple implementations' (Một interface, nhiều implementations). Cùng một interface hoặc parent class có thể có nhiều implementations khác nhau. Runtime polymorphism cho phép chọn implementation dựa trên kiểu thực tế của object."
//   },
//   // Question 106
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "I",
//       C: "AI",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// interface I {
//     default void show() { System.out.print("I"); }
// }
// class B extends A implements I {
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.show();
//     }
// }`,
//     explanation: "Output là 'A'. Khi class kế thừa từ class và implement interface có cùng method, class method có ưu tiên cao hơn interface default method. Method show() từ class A được ưu tiên hơn default method show() từ interface I. Nếu không có method trong class, default method từ interface sẽ được dùng."
//   },
//   // Question 107
//   {
//     question: "Can we overload main method?",
//     options: {
//       A: "No",
//       B: "Yes, but JVM will only call String[] version",
//       C: "Yes, and JVM will call all versions",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có thể overload main method. Tuy nhiên, JVM chỉ gọi method main với signature: public static void main(String[] args). Các overloaded versions khác của main có thể được gọi từ code khác, nhưng JVM không tự động gọi chúng. Đây là entry point của Java application."
//   },
//   // Question 108
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "2",
//       C: "12",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(int x, int y) { System.out.print("1"); }
//     void show(Integer x, Integer y) { System.out.print("2"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10, 20);
//     }
// }`,
//     explanation: "Output là '1'. Khi gọi t.show(10, 20) với primitive ints, compiler ưu tiên exact match (show(int, int)) hơn autoboxing (int -> Integer). Method show(int x, int y) khớp chính xác với primitive ints, nên được chọn. Autoboxing chỉ xảy ra khi không có exact match."
//   },
//   // Question 109
//   {
//     question: "What is the instanceof operator used for in polymorphism?",
//     options: {
//       A: "To create instances",
//       B: "To check object type at runtime",
//       C: "To compare objects",
//       D: "To cast objects"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "instanceof operator được dùng để kiểm tra kiểu của object tại runtime. Nó trả về true nếu object là instance của class hoặc subclass hoặc implement interface được chỉ định. Được dùng trước khi downcast để đảm bảo an toàn. Ví dụ: if (obj instanceof String) { String s = (String)obj; }"
//   },
//   // Question 110
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         if (a instanceof B) {
//             ((B)a).show();
//         }
//     }
// }`,
//     explanation: "Output là 'B'. instanceof kiểm tra a có phải là instance của B không (true). Sau đó downcast (B)a và gọi show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast an toàn vì đã kiểm tra instanceof trước."
//   },
//   // Question 111
//   {
//     question: "Can we have different exception specifications in overloaded methods?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only checked exceptions",
//       D: "Only unchecked exceptions"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, có thể có exception specifications khác nhau cho overloaded methods. Overloading chỉ yêu cầu khác parameter list, không yêu cầu cùng exception. Ví dụ: void show() throws IOException và void show(int x) throws Exception là hợp lệ. Exception không phải là phần của method signature."
//   },
//   // Question 112
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "1",
//       C: "3",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     void show(String... args) { System.out.print(args.length); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show("A", "B", "C");
//     }
// }`,
//     explanation: "Output là 3. Varargs (variable arguments) cho phép truyền nhiều tham số cùng kiểu. args.length trả về số lượng tham số được truyền vào. Ở đây truyền 3 strings (\"A\", \"B\", \"C\"), nên args.length = 3. Varargs được xử lý như một array."
//   },
//   // Question 113
//   {
//     question: "What is method overloading based on?",
//     options: {
//       A: "Method name only",
//       B: "Method signature (name + parameters)",
//       C: "Return type only",
//       D: "Access modifier only"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Method overloading dựa trên method signature, bao gồm method name + parameter list (số lượng, kiểu, thứ tự). Return type, access modifier, và exception không phải là phần của signature, nên không thể dùng để phân biệt overloaded methods."
//   },
//   // Question 114
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     void show(int x) { System.out.print("A"); }
// }
// class B extends A {
//     void show(long x) { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show(10);
//     }
// }`,
//     explanation: "Output là 'A'. Method show(long x) trong B không override show(int x) trong A vì parameter types khác nhau (int vs long). Đây là method overloading, không phải overriding. Khi gọi a.show(10), method show(int x) của A được gọi (kế thừa), in 'A'. Runtime polymorphism chỉ áp dụng khi override."
//   },
//   // Question 115
//   {
//     question: "What is type casting in context of polymorphism?",
//     options: {
//       A: "Converting primitive types",
//       B: "Converting reference types",
//       C: "Creating new objects",
//       D: "Copying objects"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Type casting trong context của polymorphism là chuyển đổi reference types (kiểu tham chiếu). Upcasting (A a = new B()) là tự động và an toàn. Downcasting ((B)a) cần explicit cast và nên kiểm tra instanceof trước. Casting không tạo object mới, chỉ thay đổi kiểu reference."
//   },
//   // Question 116
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "2",
//       C: "12",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     void show(Object x) { System.out.print("1"); }
//     void show(Exception x) { System.out.print("2"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(new RuntimeException());
//     }
// }`,
//     explanation: "Output là '2'. RuntimeException là subclass của Exception. Khi có nhiều methods có thể match, compiler chọn method có parameter type cụ thể nhất (most specific). Exception cụ thể hơn Object, nên show(Exception x) được chọn. Đây là method overloading resolution."
//   },
//   // Question 117
//   {
//     question: "Can we achieve polymorphism with private methods?",
//     options: {
//       A: "Yes",
//       B: "No, private methods cannot be overridden",
//       C: "Only in same class",
//       D: "Only with interfaces"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, không thể đạt polymorphism với private methods vì private methods không thể bị override. Private methods chỉ có thể được truy cập trong cùng class, nên subclass không thể thấy hoặc override chúng. Polymorphism yêu cầu method có thể được override, nên cần ít nhất là protected hoặc public."
//   },
//   // Question 118
//   {
//     question: "What is the output?",
//     options: {
//       A: "AA",
//       B: "BC",
//       C: "AC",
//       D: "CC"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// class C extends B {
//     void show() { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         B b = new C();
//         a.show();
//         b.show();
//     }
// }`,
//     explanation: "Output là 'BC'. a.show() với a là object B (kiểu A), runtime polymorphism gọi method của B, in 'B'. b.show() với b là object C (kiểu B), runtime polymorphism gọi method của C, in 'C'. Trong multilevel inheritance, method của class con nhất được gọi."
//   },
//   // Question 119
//   {
//     question: "What is the widening conversion priority in method overloading?",
//     options: {
//       A: "byte -> short -> int -> long -> float -> double",
//       B: "int -> long -> float -> double -> Object",
//       C: "int -> Integer -> Object",
//       D: "All of the above in order"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Tất cả các thứ tự trên đều đúng. Widening conversion priority: primitive widening (byte->short->int->long->float->double), sau đó autoboxing (int->Integer), cuối cùng là widening reference (Integer->Number->Object). Compiler chọn method với ít widening nhất."
//   },
//   // Question 120
//   {
//     question: "What is the output?",
//     options: {
//       A: "float",
//       B: "double",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(float x) { System.out.print("float"); }
//     void show(double x) { System.out.print("double"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10);
//     }
// }`,
//     explanation: "Output là 'float'. Khi gọi t.show(10) với literal 10 (int), compiler chọn widening ít nhất. int có thể widen thành float hoặc double, nhưng float gần hơn trong widening chain (int->long->float->double). Nếu không có show(float), show(double) sẽ được chọn."
//   },
//   // Question 121
//   {
//     question: "What is the difference between abstract class and interface?",
//     options: {
//       A: "Abstract class can have constructors, interface cannot",
//       B: "Abstract class can have instance variables, interface has only constants",
//       C: "A class can extend one abstract class but implement multiple interfaces",
//       D: "All of the above"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Tất cả đều đúng. Abstract class có thể có constructors, instance variables, concrete methods. Interface chỉ có constants (static final), abstract methods (trước Java 8), default/static methods (từ Java 8). Một class chỉ extend một abstract class nhưng có thể implement nhiều interfaces. Abstract class dùng cho 'is-a', interface dùng cho 'can-do'."
//   },
//   // Question 122
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "BA"
//     },
//     correctAnswer: "D",
//     code: `abstract class A {
//     abstract void show();
//     void display() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//         a.display();
//     }
// }`,
//     explanation: "Output là 'BA'. a.show() gọi abstract method show() được implement trong B, in 'B' (runtime polymorphism). a.display() gọi concrete method display() từ A, in 'A'. Abstract class có thể có cả abstract methods (phải implement) và concrete methods (kế thừa)."
//   },
//   // Question 123
//   {
//     question: "Can an abstract class have a constructor?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only if it has abstract methods",
//       D: "Only if it's private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, abstract class có thể có constructor. Constructor được dùng để khởi tạo instance variables và thực hiện initialization logic. Constructor của abstract class được gọi khi tạo object của concrete subclass. Abstract class không thể được khởi tạo trực tiếp, nhưng constructor vẫn cần thiết cho subclass."
//   },
//   // Question 124
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints 20"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     int x = 10;
// }
// class A implements I {
//     void show() { x = 20; }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến x trong interface là static final (constant), không thể thay đổi giá trị. Interface variables mặc định là public static final, nên x = 10 là constant. Không thể gán lại x = 20. Nếu cần thay đổi giá trị, phải dùng instance variable trong class, không phải interface variable."
//   },
//   // Question 125
//   {
//     question: "Can an abstract method be static?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in interfaces",
//       D: "Only in abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, abstract method không thể là static. Abstract methods yêu cầu subclass phải implement chúng, nhưng static methods không thể bị override (chỉ hide). Đây là mâu thuẫn logic. Static methods có thể có trong abstract class, nhưng không thể là abstract."
//   },
//   // Question 126
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `abstract class A {
//     A() { System.out.print("A"); }
// }
// class B extends A {
//     B() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//     }
// }`,
//     explanation: "Output là 'AB'. Khi tạo B(), constructor của parent class A được gọi trước (thông qua super() ngầm định), in 'A'. Sau đó constructor của B được gọi, in 'B'. Abstract class có thể có constructor, và constructor được gọi khi tạo object của concrete subclass."
//   },
//   // Question 127
//   {
//     question: "Can an interface extend another interface?",
//     options: {
//       A: "No",
//       B: "Yes, using extends",
//       C: "Yes, using implements",
//       D: "Only if both are abstract"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, interface có thể extend interface khác bằng từ khóa 'extends'. Một interface có thể extend nhiều interfaces (multiple inheritance cho interfaces). Ví dụ: interface I3 extends I1, I2. Interface không dùng 'implements', chỉ dùng 'extends' để kế thừa từ interface khác."
//   },
//   // Question 128
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "A",
//       C: "IA",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     default void show() { System.out.print("I"); }
// }
// class A implements I {
//     public void show() { System.out.print("A"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new A();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'A'. Class A implement interface I và override default method show(). Khi class override default method, implementation của class có ưu tiên. Runtime polymorphism áp dụng, method show() của A được gọi, in 'A'. Default method từ interface chỉ được dùng nếu class không override."
//   },
//   // Question 129
//   {
//     question: "Can an abstract class have all concrete methods?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only if no abstract methods",
//       D: "Only if final"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, abstract class có thể có tất cả concrete methods (không có abstract methods). Abstract class không bắt buộc phải có abstract methods. Abstract class chỉ cần được khai báo là abstract, có thể có tất cả concrete methods. Tuy nhiên, abstract class vẫn không thể được khởi tạo trực tiếp."
//   },
//   // Question 130
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "C",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `abstract class A {
//     abstract void show();
// }
// abstract class B extends A {
// }
// class C extends B {
//     void show() { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new C();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'C'. Abstract class B extends A nhưng không implement abstract method show(). Class C extends B và implement show(), in 'C'. Abstract method từ A được implement ở class con nhất (C). Runtime polymorphism áp dụng, method show() của C được gọi."
//   },
//   // Question 131
//   {
//     question: "What is the default access modifier for interface methods (before Java 8)?",
//     options: {
//       A: "private",
//       B: "protected",
//       C: "public",
//       D: "default"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Default access modifier cho interface methods (trước Java 8) là public. Tất cả methods trong interface mặc định là public abstract. Từ Java 8, interface có thể có default methods và static methods, nhưng abstract methods vẫn mặc định là public."
//   },
//   // Question 132
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints I1I2"
//     },
//     correctAnswer: "B",
//     code: `interface I1 {
//     default void show() { System.out.print("I1"); }
// }
// interface I2 {
//     default void show() { System.out.print("I2"); }
// }
// class A implements I1, I2 {
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class A implement hai interfaces I1 và I2, cả hai đều có default method show() với cùng signature. Điều này gây conflict (xung đột). Class A phải override method show() để giải quyết conflict, hoặc chỉ implement một trong hai interfaces."
//   },
//   // Question 133
//   {
//     question: "Can an abstract class be final?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only if no abstract methods",
//       D: "Only if private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, abstract class không thể là final. Abstract class được thiết kế để được kế thừa, trong khi final class không thể được kế thừa. Đây là mâu thuẫn logic. Class không thể vừa abstract (phải kế thừa) vừa final (không thể kế thừa)."
//   },
//   // Question 134
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract class A có concrete method show(). Class B override method show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract class có thể có cả abstract methods và concrete methods."
//   },
//   // Question 135
//   {
//     question: "Can interfaces have static methods?",
//     options: {
//       A: "No",
//       B: "Yes, from Java 8",
//       C: "Only default methods",
//       D: "Only abstract methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, interfaces có thể có static methods từ Java 8. Static methods trong interface phải có body (implementation) và được gọi qua tên interface (InterfaceName.methodName()). Static methods không thể được override và không được kế thừa bởi implementing classes."
//   },
//   // Question 136
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "Compiles successfully",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `interface I {
//     static void show() { System.out.print("I"); }
// }
// class A implements I {
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new A();
//         a.show();
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì static methods trong interface không được kế thừa bởi implementing classes. Static methods chỉ có thể được gọi qua tên interface: I.show(). Không thể gọi a.show() vì static methods không thuộc về instance. Phải gọi I.show() thay vì a.show()."
//   },
//   // Question 137
//   {
//     question: "What is a functional interface?",
//     options: {
//       A: "Interface with only one abstract method",
//       B: "Interface with multiple methods",
//       C: "Interface with static methods",
//       D: "Interface with default methods"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Functional interface là interface có chỉ một abstract method. Functional interface có thể có nhiều default methods và static methods, nhưng chỉ có một abstract method. Ví dụ: Runnable, Comparator. Functional interface được dùng với lambda expressions và method references từ Java 8."
//   },
//   // Question 138
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `abstract class A {
//     abstract void show();
//     void show(int x) { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.show(10);
//     }
// }`,
//     explanation: "Output là 'A'. Class B override abstract method show() (không tham số), nhưng kế thừa concrete method show(int x) từ A. Khi gọi b.show(10), method show(int x) của A được gọi (kế thừa), in 'A'. Method overloading cho phép có nhiều methods cùng tên với parameters khác nhau."
//   },
//   // Question 139
//   {
//     question: "Can we create an instance of an abstract class?",
//     options: {
//       A: "Yes",
//       B: "No, but we can create anonymous instances",
//       C: "Only if it has no abstract methods",
//       D: "Only using reflection"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG thể tạo instance trực tiếp của abstract class bằng new AbstractClass(). Tuy nhiên, có thể tạo anonymous instances bằng cách cung cấp implementation cho abstract methods ngay tại chỗ: new AbstractClass() { void abstractMethod() { } }. Đây là anonymous inner class."
//   },
//   // Question 140
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "A",
//       C: "B",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `interface I {
//     void show();
// }
// abstract class A implements I {
// }
// class B extends A {
//     public void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new B();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract class A implement interface I nhưng không implement method show(). Class B extends A và implement show(), in 'B'. Abstract class có thể implement interface mà không cần implement tất cả methods, để lại cho subclass. Runtime polymorphism áp dụng, method show() của B được gọi."
//   },
//   // Question 141
//   {
//     question: "Can abstract method be private?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in abstract classes",
//       D: "Only in interfaces"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, abstract method không thể là private. Abstract methods yêu cầu subclass phải implement chúng, nhưng private methods không thể được truy cập từ subclass. Đây là mâu thuẫn logic. Abstract methods phải có ít nhất là protected hoặc public để subclass có thể override."
//   },
//   // Question 142
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "10",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     abstract int show();
// }
// class B extends A {
//     int show() { return 10; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.show());
//     }
// }`,
//     explanation: "Output là 10. Abstract method show() trong A được implement trong B, return 10. Runtime polymorphism áp dụng, method show() của B được gọi, return 10. Abstract methods có thể có return type, và subclass phải implement với cùng return type hoặc covariant return type."
//   },
//   // Question 143
//   {
//     question: "What is the diamond problem in interfaces?",
//     options: {
//       A: "Multiple inheritance conflict",
//       B: "Interface extending multiple interfaces",
//       C: "Ambiguity when implementing multiple interfaces with same default methods",
//       D: "Cannot create diamond shape"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Diamond problem trong interfaces là ambiguity (sự mơ hồ) khi một class implement nhiều interfaces có cùng default methods. Khi hai interfaces có default method cùng signature, class phải override method đó để giải quyết conflict. Đây là vấn đề của multiple inheritance trong interfaces."
//   },
//   // Question 144
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "10",
//       C: "null",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     int x = 10;
// }
// class A implements I {
//     void show() { System.out.print(x); }
// }
// public class Main {
//     public static void main(String[] args) {
//         new A().show();
//     }
// }`,
//     explanation: "Output là 10. Interface variable x mặc định là public static final (constant), có giá trị 10. Class A implement I và có thể truy cập x. Interface variables được kế thừa bởi implementing classes và có thể được truy cập trực tiếp (I.x) hoặc qua instance (x)."
//   },
//   // Question 145
//   {
//     question: "Can an interface extend an abstract class?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only if abstract class has no methods",
//       D: "Only if both are abstract"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, interface không thể extend abstract class. Interface chỉ có thể extend interface khác (bằng từ khóa extends). Interface không thể extend class (abstract hoặc concrete). Class có thể implement interface, nhưng interface không thể extend class."
//   },
//   // Question 146
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     A() { show(); }
//     abstract void show();
// }
// class B extends A {
//     int x = 10;
//     void show() { System.out.print(x); }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B();
//     }
// }`,
//     explanation: "Output là 0. Khi constructor A() được gọi, nó gọi show() trước khi instance variables của B được khởi tạo. show() của B được gọi (polymorphism), nhưng x chưa được gán giá trị 10, nên x có giá trị mặc định 0. Đây là lý do không nên gọi abstract/overridden methods trong constructor."
//   },
//   // Question 147
//   {
//     question: "Can interfaces have private methods?",
//     options: {
//       A: "No",
//       B: "Yes, from Java 9",
//       C: "Only static private methods",
//       D: "Only default private methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, interfaces có thể có private methods từ Java 9. Private methods trong interface được dùng để chia sẻ code giữa default methods và static methods trong cùng interface. Private methods không thể được truy cập từ bên ngoài interface, chỉ có thể được gọi từ default methods và static methods trong cùng interface."
//   },
//   // Question 148
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints show twice"
//     },
//     correctAnswer: "A",
//     code: `interface I1 {
//     void show();
// }
// interface I2 {
//     void show();
// }
// class A implements I1, I2 {
//     public void show() { System.out.print("A"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new A();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'A'. Class A implement cả I1 và I2, cả hai đều có abstract method show() với cùng signature. Một implementation duy nhất của show() trong A đáp ứng cả hai interfaces. Không có conflict vì cả hai đều là abstract methods, không phải default methods."
//   },
//   // Question 149
//   {
//     question: "What is the purpose of abstraction?",
//     options: {
//       A: "To hide implementation details",
//       B: "To show all details",
//       C: "To reduce code",
//       D: "To increase performance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Mục đích của abstraction (trừu tượng) là ẩn implementation details (chi tiết triển khai) và chỉ hiển thị những gì cần thiết. Abstraction cho phép tập trung vào 'what' (làm gì) thay vì 'how' (làm như thế nào). Được thực hiện thông qua abstract classes và interfaces."
//   },
//   // Question 150
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "C",
//       D: "ABC"
//     },
//     correctAnswer: "C",
//     code: `abstract class A {
//     abstract void show();
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// class C extends B {
//     void show() { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new C();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'C'. Abstract method show() trong A được implement trong B, sau đó B bị override bởi C. Runtime polymorphism áp dụng, method show() của class con nhất (C) được gọi, in 'C'. Trong multilevel inheritance, method của class con nhất được ưu tiên."
//   },
//   // Question 151
//   {
//     question: "Can abstract class implement interface without implementing its methods?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only if abstract class is also abstract",
//       D: "Only if interface is functional"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, abstract class có thể implement interface mà không cần implement methods. Abstract class có thể để lại việc implement methods cho subclass. Điều này cho phép abstract class định nghĩa contract từ interface và để subclass implement chi tiết."
//   },
//   // Question 152
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Nothing"
//     },
//     correctAnswer: "A",
//     code: `interface I {
//     default void show() { display(); }
//     private void display() { System.out.print("I"); }
// }
// class A implements I {
// }
// public class Main {
//     public static void main(String[] args) {
//         new A().show();
//     }
// }`,
//     explanation: "Output là 'I'. Interface I có default method show() gọi private method display(). Class A implement I và kế thừa default method show(). Khi gọi a.show(), default method show() được gọi, gọi private method display(), in 'I'. Private methods trong interface (từ Java 9) có thể được gọi từ default methods."
//   },
//   // Question 153
//   {
//     question: "What is marker interface?",
//     options: {
//       A: "Interface with methods",
//       B: "Interface with no methods",
//       C: "Interface with default methods",
//       D: "Interface with static methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Marker interface là interface không có methods (empty interface). Marker interface được dùng để đánh dấu (mark) một class có một đặc tính nào đó. Ví dụ: Serializable, Cloneable. Từ Java 5, annotations được dùng thay cho marker interfaces trong nhiều trường hợp."
//   },
//   // Question 154
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Abstract class cannot have final methods"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     final abstract void show();
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method không thể vừa final vừa abstract. Final methods không thể bị override, trong khi abstract methods yêu cầu subclass phải implement chúng. Đây là mâu thuẫn logic. Method phải là final hoặc abstract, không thể cả hai."
//   },
//   // Question 155
//   {
//     question: "Can interface variables be non-static?",
//     options: {
//       A: "Yes",
//       B: "No, they are implicitly static and final",
//       C: "Only if declared explicitly",
//       D: "Only in functional interfaces"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, interface variables không thể là non-static. Tất cả variables trong interface mặc định là public static final (constants). Không thể khai báo instance variables trong interface. Interface chỉ có thể có constants, không có instance variables."
//   },
//   // Question 156
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Nothing"
//     },
//     correctAnswer: "A",
//     code: `interface I {
//     void show();
// }
// class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A implements I {
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new B();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'A'. Class B kế thừa method show() từ class A. Class B implement interface I, nhưng không override show(), nên sử dụng method show() được kế thừa từ A. Runtime polymorphism áp dụng, method show() của A được gọi, in 'A'."
//   },
//   // Question 157
//   {
//     question: "What is the difference between abstract method and concrete method?",
//     options: {
//       A: "Abstract has no body, concrete has body",
//       B: "Abstract is in interface, concrete is in class",
//       C: "Abstract is public, concrete is private",
//       D: "No difference"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Sự khác biệt chính giữa abstract method và concrete method là abstract method không có body (implementation), concrete method có body. Abstract methods chỉ có signature, yêu cầu subclass phải implement. Concrete methods có implementation đầy đủ và có thể được gọi trực tiếp."
//   },
//   // Question 158
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints B"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     abstract void show();
// }
// class B extends A {
//     void show() throws IOException { 
//         System.out.print("B"); 
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì abstract method show() trong A không throws exception, nhưng overridden method show() trong B throws IOException. Overridden method không thể throw checked exception rộng hơn (broader) exception của parent method. Chỉ có thể throw cùng exception, subclass của exception, hoặc không throw exception."
//   },
//   // Question 159
//   {
//     question: "Can we have a concrete method in an interface?",
//     options: {
//       A: "No",
//       B: "Yes, default and static methods",
//       C: "Only default methods",
//       D: "Only static methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, interface có thể có concrete methods từ Java 8: default methods và static methods. Default methods có body và có thể được kế thừa bởi implementing classes. Static methods có body và được gọi qua tên interface. Trước Java 8, interface chỉ có abstract methods."
//   },
//   // Question 160
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "A",
//       C: "B",
//       D: "IB"
//     },
//     correctAnswer: "C",
//     code: `interface I {
//     default void show() { System.out.print("I"); }
// }
// abstract class A implements I {
// }
// class B extends A {
//     public void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract class A implement interface I và kế thừa default method show(). Class B extends A và override show(), in 'B'. Runtime polymorphism áp dụng, method show() của B được gọi. Class method có ưu tiên cao hơn interface default method."
//   },
//   // Question 161
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "ClassCastException"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         ((B)a).show();
//     }
// }`,
//     explanation: "Output là 'B'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast an toàn vì object thực tế là B. Không có ClassCastException vì object là instance của B."
//   },
//   // Question 162
//   {
//     question: "What is the Liskov Substitution Principle?",
//     options: {
//       A: "Objects of superclass should be replaceable with objects of subclass",
//       B: "Objects should be immutable",
//       C: "Classes should be final",
//       D: "Methods should be static"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Liskov Substitution Principle (Nguyên tắc thay thế Liskov) là một trong các nguyên tắc SOLID. Nó nói rằng objects của superclass nên có thể được thay thế bởi objects của subclass mà không làm thay đổi hành vi của chương trình. Subclass phải có thể thay thế parent class mà không phá vỡ functionality."
//   },
//   // Question 163
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 10",
//       B: "20 20",
//       C: "10 20",
//       D: "20 10"
//     },
//     correctAnswer: "C",
//     code: `class Outer {
//     int x = 10;
//     class Inner {
//         int x = 20;
//         void show() {
//             System.out.print(Outer.this.x + " " + this.x);
//         }
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Outer.Inner i = new Outer().new Inner();
//         i.show();
//     }
// }`,
//     explanation: "Output là '10 20'. Inner class có biến x riêng (20) che khuất biến x của outer class (10). Outer.this.x truy cập biến x của outer class (10), this.x truy cập biến x của inner class (20). Outer.this được dùng để truy cập members của outer class khi bị che khuất."
//   },
//   // Question 164
//   {
//     question: "What is composition over inheritance?",
//     options: {
//       A: "Using \"has-a\" relationship instead of \"is-a\"",
//       B: "Using inheritance always",
//       C: "Using interfaces instead of classes",
//       D: "Using abstract classes"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Composition over inheritance (Ưu tiên composition hơn inheritance) là nguyên tắc sử dụng mối quan hệ \"has-a\" (composition) thay vì \"is-a\" (inheritance) khi có thể. Composition linh hoạt hơn, dễ thay đổi và test hơn. Inheritance tạo tight coupling, composition tạo loose coupling."
//   },
//   // Question 165
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error in class B",
//       D: "Compilation error in Main"
//     },
//     correctAnswer: "D",
//     code: `class A {
//     void show() throws Exception {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Lỗi biên dịch trong Main vì method show() trong A throws Exception (checked exception), nên khi gọi a.show() trong main(), phải handle exception (try-catch hoặc throws). Overridden method trong B không throws exception là hợp lệ (có thể giảm exception), nhưng khi gọi qua reference type A, vẫn phải handle exception."
//   },
//   // Question 166
//   {
//     question: "What is shallow copy vs deep copy?",
//     options: {
//       A: "Shallow copies references, deep copies objects",
//       B: "Shallow is faster",
//       C: "Deep is better",
//       D: "Both A and B"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Shallow copy (sao chép nông) chỉ sao chép references, không sao chép objects được tham chiếu. Deep copy (sao chép sâu) sao chép cả objects, tạo objects mới hoàn toàn độc lập. Shallow copy nhanh hơn nhưng có thể gây side effects. Deep copy an toàn hơn nhưng chậm hơn."
//   },
//   // Question 167
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 10",
//       B: "20 20",
//       C: "10 20",
//       D: "20 10"
//     },
//     correctAnswer: "C",
//     code: `class A implements Cloneable {
//     int x = 10;
//     A clone() throws CloneNotSupportedException {
//         return (A) super.clone();
//     }
// }
// public class Main {
//     public static void main(String[] args) throws Exception {
//         A a1 = new A();
//         A a2 = a1.clone();
//         a2.x = 20;
//         System.out.print(a1.x + " " + a2.x);
//     }
// }`,
//     explanation: "Output là '10 20'. Method clone() tạo shallow copy của object. a2 là bản sao của a1, nhưng là object riêng biệt. Khi thay đổi a2.x = 20, chỉ a2 bị ảnh hưởng, a1.x vẫn là 10. Vì x là primitive int, shallow copy đủ để tạo object độc lập."
//   },
//   // Question 168
//   {
//     question: "What is the Single Responsibility Principle?",
//     options: {
//       A: "A class should have only one reason to change",
//       B: "A class should have only one method",
//       C: "A class should have only one variable",
//       D: "A class should be used once"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Single Responsibility Principle (Nguyên tắc trách nhiệm đơn) là một trong các nguyên tắc SOLID. Nó nói rằng một class chỉ nên có một lý do để thay đổi. Class nên có một trách nhiệm duy nhất, giúp code dễ bảo trì, test và mở rộng hơn."
//   },
//   // Question 169
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     synchronized void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Method show() trong B override method của A. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Synchronized modifier không phải là phần của method signature, nên có thể override synchronized method bằng non-synchronized method."
//   },
//   // Question 170
//   {
//     question: "What is the Open/Closed Principle?",
//     options: {
//       A: "Classes should be open for extension, closed for modification",
//       B: "Classes should be open for everything",
//       C: "Classes should be closed always",
//       D: "Classes should be abstract"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Open/Closed Principle (Nguyên tắc mở/đóng) là một trong các nguyên tắc SOLID. Nó nói rằng classes nên mở cho extension (mở rộng) nhưng đóng cho modification (sửa đổi). Có thể thêm functionality mới thông qua inheritance hoặc composition mà không cần sửa code hiện có."
//   },
//   // Question 171
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "1",
//       C: "2",
//       D: "TUE"
//     },
//     correctAnswer: "B",
//     code: `enum Day {
//     MON, TUE, WED;
//     void show() { System.out.print(this.ordinal()); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Day.TUE.show();
//     }
// }`,
//     explanation: "Output là 1. Enum Day có các constants MON, TUE, WED. ordinal() trả về vị trí của enum constant (0-based). MON = 0, TUE = 1, WED = 2. Day.TUE.show() gọi method show() trên TUE, in ordinal() của TUE là 1."
//   },
//   // Question 172
//   {
//     question: "What is association in OOP?",
//     options: {
//       A: "Relationship between two classes",
//       B: "Creating objects",
//       C: "Destroying objects",
//       D: "Copying objects"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Association (liên kết) trong OOP là mối quan hệ giữa hai classes, cho phép một object sử dụng hoặc tương tác với object khác. Association có thể là one-to-one, one-to-many, many-to-one, hoặc many-to-many. Đây là mối quan hệ cơ bản nhất trong OOP."
//   },
//   // Question 173
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "30",
//       D: "40"
//     },
//     correctAnswer: "D",
//     code: `class A {
//     static int x = 10;
//     static { x = 20; }
//     { x = 30; }
//     A() { x = 40; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a1 = new A();
//         A a2 = new A();
//         System.out.print(A.x);
//     }
// }`,
//     explanation: "Output là 40. Static variable x được chia sẻ bởi tất cả instances. Thứ tự thực thi: khởi tạo x = 10, static block gán x = 20, instance block gán x = 30 (khi tạo a1), constructor gán x = 40 (khi tạo a1). Khi tạo a2, instance block và constructor lại gán x = 30 và 40. Giá trị cuối cùng là 40."
//   },
//   // Question 174
//   {
//     question: "What is aggregation in OOP?",
//     options: {
//       A: "Weak \"has-a\" relationship",
//       B: "Strong \"has-a\" relationship",
//       C: "\"is-a\" relationship",
//       D: "No relationship"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Aggregation (tập hợp) trong OOP là mối quan hệ \"has-a\" yếu (weak has-a relationship). Trong aggregation, child object có thể tồn tại độc lập với parent object. Ví dụ: Department has-a Professor. Nếu Department bị xóa, Professor vẫn tồn tại. Composition là strong has-a, child không thể tồn tại độc lập."
//   },
//   // Question 175
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints both"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show(List<String> list) {
//         System.out.print("String");
//     }
//     void show(List<Integer> list) {
//         System.out.print("Integer");
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method overloading với generic types List<String> và List<Integer> không được phép. Do type erasure, cả hai methods có cùng signature sau khi compile (List list), gây conflict. Generic types bị xóa tại compile-time, nên không thể dùng để phân biệt overloaded methods."
//   },
//   // Question 176
//   {
//     question: "What is dependency injection?",
//     options: {
//       A: "Providing dependencies from outside",
//       B: "Creating dependencies inside",
//       C: "Destroying dependencies",
//       D: "Copying dependencies"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Dependency Injection (Tiêm phụ thuộc) là pattern cung cấp dependencies từ bên ngoài thay vì tạo bên trong class. Dependencies được inject qua constructor, setter, hoặc interface. Điều này giúp giảm coupling, tăng testability, và tuân thủ Dependency Inversion Principle."
//   },
//   // Question 177
//   {
//     question: "What is the output?",
//     options: {
//       A: "Hello",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "null"
//     },
//     correctAnswer: "A",
//     code: `interface I<T> {
//     void show(T t);
// }
// class A implements I<String> {
//     public void show(String s) { 
//         System.out.print(s); 
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I<String> i = new A();
//         i.show("Hello");
//     }
// }`,
//     explanation: "Output là 'Hello'. Generic interface I<T> được implement với type String. Class A implement I<String> và implement method show(String s). Runtime polymorphism áp dụng, method show() của A được gọi với tham số \"Hello\", in 'Hello'."
//   },
//   // Question 178
//   {
//     question: "What is the Interface Segregation Principle?",
//     options: {
//       A: "Clients shouldn't be forced to depend on interfaces they don't use",
//       B: "Use as many interfaces as possible",
//       C: "Don't use interfaces",
//       D: "Interfaces should be large"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Interface Segregation Principle (Nguyên tắc phân tách interface) là một trong các nguyên tắc SOLID. Nó nói rằng clients không nên bị buộc phải depend on interfaces mà họ không sử dụng. Interfaces nên nhỏ và cụ thể, không nên có methods không cần thiết. Tốt hơn là có nhiều interfaces nhỏ thay vì một interface lớn."
//   },
//   // Question 179
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "null"
//     },
//     correctAnswer: "A",
//     code: `class A<T> {
//     T obj;
//     A(T obj) { this.obj = obj; }
//     T get() { return obj; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A<Integer> a = new A<>(10);
//         System.out.print(a.get());
//     }
// }`,
//     explanation: "Output là 10. Generic class A<T> được khởi tạo với type Integer. Constructor A(10) nhận Integer 10 và gán cho obj. Method get() trả về obj có kiểu Integer, in ra 10. Generics cho phép type-safe code và tránh casting."
//   },
//   // Question 180
//   {
//     question: "What is the Dependency Inversion Principle?",
//     options: {
//       A: "High-level modules shouldn't depend on low-level modules",
//       B: "All modules should depend on each other",
//       C: "No dependencies allowed",
//       D: "Only low-level dependencies"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Dependency Inversion Principle (Nguyên tắc đảo ngược phụ thuộc) là một trong các nguyên tắc SOLID. Nó nói rằng high-level modules không nên depend on low-level modules, cả hai nên depend on abstractions (interfaces hoặc abstract classes). Điều này giúp giảm coupling và tăng flexibility."
//   },
//   // Question 181
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "C",
//       D: "ClassCastException"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// class C extends B {
//     void show() { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new C();
//         B b = (B) a;
//         b.show();
//     }
// }`,
//     explanation: "Output là 'C'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của class con nhất (C) được gọi, in 'C'. Downcast an toàn vì object thực tế là C (instance của B). Không có ClassCastException."
//   },
//   // Question 182
//   {
//     question: "What is the purpose of the volatile keyword in OOP context?",
//     options: {
//       A: "Variables are visible to all threads",
//       B: "Methods cannot be overridden",
//       C: "Classes cannot be inherited",
//       D: "Objects are immutable"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Volatile keyword đảm bảo variables được visible (nhìn thấy) bởi tất cả threads. Volatile variables được đọc và ghi trực tiếp từ main memory, không qua thread-local cache. Điều này đảm bảo thread-safety cho simple read/write operations. Volatile không phải là về inheritance hay immutability."
//   },
//   // Question 183
//   {
//     question: "What is the output?",
//     options: {
//       A: "true",
//       B: "false",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     int x;
//     A() { }
//     A(int x) { this.x = x; }
//     boolean equals(Object obj) {
//         return this.x == ((A)obj).x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a1 = new A(10);
//         A a2 = new A(10);
//         System.out.print(a1.equals(a2));
//     }
// }`,
//     explanation: "Output là 'true'. Method equals() được override để so sánh giá trị x của hai objects. a1.x = 10 và a2.x = 10, nên this.x == ((A)obj).x trả về true. Method equals() so sánh nội dung (value equality), không phải reference equality (==)."
//   },
//   // Question 184
//   {
//     question: "What is method chaining in OOP?",
//     options: {
//       A: "Calling multiple methods in sequence on same object",
//       B: "Overriding methods",
//       C: "Overloading methods",
//       D: "Creating method chains"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method chaining (chuỗi phương thức) là gọi nhiều methods liên tiếp trên cùng một object. Methods trả về this (hoặc object hiện tại) để cho phép chaining. Ví dụ: obj.method1().method2().method3(). Method chaining giúp code ngắn gọn và dễ đọc hơn."
//   },
//   // Question 185
//   {
//     question: "What is the output?",
//     options: {
//       A: "AA",
//       B: "BB",
//       C: "AB",
//       D: "BA"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     A show() {
//         System.out.print("A");
//         return this;
//     }
// }
// class B extends A {
//     B show() {
//         System.out.print("B");
//         return this;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show().show();
//     }
// }`,
//     explanation: "Output là 'BB'. Method chaining: new B().show() gọi show() của B, in 'B' và return this (B). Sau đó .show() lại gọi show() của B (vì return type là B), in 'B' lần nữa. Covariant return type cho phép return type cụ thể hơn trong overridden method."
//   },
//   // Question 186
//   {
//     question: "What is lazy initialization?",
//     options: {
//       A: "Delaying object creation until needed",
//       B: "Creating objects immediately",
//       C: "Destroying objects early",
//       D: "Copying objects lazily"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Lazy initialization (khởi tạo lười) là trì hoãn việc tạo object cho đến khi thực sự cần thiết. Thay vì tạo object ngay khi khởi tạo, object được tạo lần đầu tiên khi được truy cập. Điều này giúp tiết kiệm memory và tăng performance nếu object không được sử dụng."
//   },
//   // Question 187
//   {
//     question: "What is the output?",
//     options: {
//       A: "true",
//       B: "false",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     private static A instance;
//     private A() { }
//     static A getInstance() {
//         if (instance == null)
//             instance = new A();
//         return instance;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a1 = A.getInstance();
//         A a2 = A.getInstance();
//         System.out.print(a1 == a2);
//     }
// }`,
//     explanation: "Output là 'true'. Đây là Singleton pattern (lazy initialization). Private constructor ngăn tạo object từ bên ngoài. Static method getInstance() trả về cùng một instance. a1 và a2 đều trỏ đến cùng một object (instance), nên a1 == a2 trả về true. Singleton đảm bảo chỉ có một instance duy nhất."
//   },
//   // Question 188
//   {
//     question: "What is the purpose of the transient keyword?",
//     options: {
//       A: "Variables are not serialized",
//       B: "Methods cannot be overridden",
//       C: "Classes cannot be inherited",
//       D: "Variables are thread-safe"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Transient keyword đảm bảo variables không được serialized (tuần tự hóa). Khi object được serialize, transient variables không được lưu vào stream. Khi deserialize, transient variables có giá trị mặc định (0, null, false). Transient được dùng cho sensitive data hoặc data không cần persist."
//   },
//   // Question 189
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A implements Serializable {
//     transient int x = 10;
// }
// public class Main {
//     public static void main(String[] args) throws Exception {
//         A a1 = new A();
//         ObjectOutputStream out = new ObjectOutputStream(
//             new FileOutputStream("test.ser"));
//         out.writeObject(a1);
//         out.close();
        
//         ObjectInputStream in = new ObjectInputStream(
//             new FileInputStream("test.ser"));
//         A a2 = (A) in.readObject();
//         in.close();
        
//         System.out.print(a2.x);
//     }
// }`,
//     explanation: "Output là 0. Transient variable x không được serialized. Khi serialize a1, x = 10 không được lưu. Khi deserialize a2, x có giá trị mặc định 0 (vì là int). Transient variables được reset về giá trị mặc định sau khi deserialize."
//   },
//   // Question 190
//   {
//     question: "What is the difference between composition and aggregation?",
//     options: {
//       A: "Composition is strong ownership, aggregation is weak",
//       B: "Composition uses interfaces, aggregation uses classes",
//       C: "No difference",
//       D: "Aggregation is inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Sự khác biệt giữa composition và aggregation: Composition là strong ownership (sở hữu mạnh), child object không thể tồn tại độc lập với parent. Aggregation là weak ownership (sở hữu yếu), child object có thể tồn tại độc lập. Ví dụ: Car-Engine là composition, Department-Professor là aggregation."
//   },
//   // Question 191
//   {
//     question: "What is the output?",
//     options: {
//       A: "AA",
//       B: "AB",
//       C: "BB",
//       D: "BA"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A[] arr = {new A(), new B()};
//         for (A a : arr)
//             a.show();
//     }
// }`,
//     explanation: "Output là 'AB'. Array chứa object A và object B. Vòng lặp for-each duyệt qua array, gọi a.show() cho mỗi object. Runtime polymorphism áp dụng: object A gọi method của A (in 'A'), object B gọi method của B (in 'B'). Polymorphism cho phép xử lý nhiều types qua cùng interface."
//   },
//   // Question 192
//   {
//     question: "What is method reference in Java 8?",
//     options: {
//       A: "Shorthand notation for lambda expressions",
//       B: "Reference to a variable",
//       C: "Reference to a class",
//       D: "Reference to an object"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method reference (tham chiếu phương thức) trong Java 8 là shorthand notation (ký hiệu viết tắt) cho lambda expressions. Thay vì viết lambda, có thể dùng method reference: Class::method hoặc object::method. Method reference ngắn gọn hơn và dễ đọc hơn lambda trong nhiều trường hợp."
//   },
//   // Question 193
//   {
//     question: "What is the output?",
//     options: {
//       A: "Hello",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "null"
//     },
//     correctAnswer: "A",
//     code: `interface I {
//     void show(String s);
//     }
// class A {
//     static void display(String s) {
//         System.out.print(s);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = A::display;
//         i.show("Hello");
//     }
// }`,
//     explanation: "Output là 'Hello'. Method reference A::display tham chiếu đến static method display() của class A. Interface I được implement bằng method reference. Khi gọi i.show(\"Hello\"), nó gọi A.display(\"Hello\"), in 'Hello'. Method reference cho phép sử dụng existing methods như functional interface implementations."
//   },
//   // Question 194
//   {
//     question: "What is double dispatch in OOP?",
//     options: {
//       A: "Method call depends on runtime types of two objects",
//       B: "Calling method twice",
//       C: "Two methods with same name",
//       D: "Overloading with two parameters"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Double dispatch (phân phối kép) trong OOP là khi method call phụ thuộc vào runtime types của hai objects. Java không hỗ trợ double dispatch trực tiếp, nhưng có thể đạt được thông qua Visitor pattern hoặc method overloading kết hợp với polymorphism. Double dispatch cho phép chọn method dựa trên types của cả hai objects."
//   },
//   // Question 195
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "NullPointerException",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     String show() { return "A"; }
// }
// class B extends A {
//     String show() { return "B"; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A[] arr = new B[5];
//         System.out.print(arr[0].show());
//     }
// }`,
//     explanation: "NullPointerException xảy ra vì array arr được khai báo nhưng các elements chưa được khởi tạo. arr[0] có giá trị null (default value cho reference types). Khi gọi arr[0].show(), cố gắng gọi method trên null reference, gây NullPointerException. Phải khởi tạo elements: arr[0] = new B() trước khi sử dụng."
//   },
//   // Question 196
//   {
//     question: "What is the template method pattern?",
//     options: {
//       A: "Define skeleton in superclass, let subclasses override steps",
//       B: "Using templates",
//       C: "Creating methods",
//       D: "Overloading methods"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Template Method Pattern là design pattern định nghĩa skeleton (khung) của algorithm trong superclass, để subclasses override các steps cụ thể. Superclass định nghĩa template method (có thể là final) gọi các abstract methods, subclasses implement các abstract methods. Pattern này tuân thủ Open/Closed Principle."
//   },
//   // Question 197
//   {
//     question: "What is the output?",
//     options: {
//       A: "12",
//       B: "21",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `abstract class A {
//     final void process() {
//         step1();
//         step2();
//     }
//     abstract void step1();
//     abstract void step2();
// }
// class B extends A {
//     void step1() { System.out.print("1"); }
//     void step2() { System.out.print("2"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.process();
//     }
// }`,
//     explanation: "Output là '12'. Đây là Template Method Pattern. Abstract class A định nghĩa final method process() gọi step1() và step2(). Class B extends A và implement step1() (in '1') và step2() (in '2'). Khi gọi a.process(), nó gọi step1() trước (in '1'), sau đó step2() (in '2'), kết quả là '12'."
//   },
//   // Question 198
//   {
//     question: "What is covariance and contravariance in OOP?",
//     options: {
//       A: "Related to inheritance and method overriding",
//       B: "Types of polymorphism",
//       C: "Types of encapsulation",
//       D: "Types of abstraction"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Covariance và contravariance trong OOP liên quan đến inheritance và method overriding. Covariance: return type của overridden method có thể là subtype của return type trong parent class. Contravariance: parameter types của overridden method có thể là supertype của parameter types trong parent class. Java hỗ trợ covariance cho return types từ Java 5."
//   },
//   // Question 199
//   {
//     question: "What is the output?",
//     options: {
//       A: "100",
//       B: "0",
//       C: "Compilation error",
//       D: "null"
//     },
//     correctAnswer: "A",
//     code: `class A<T extends Number> {
//     T obj;
//     A(T obj) { this.obj = obj; }
//     void show() { System.out.print(obj); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A<Integer> a = new A<>(100);
//         a.show();
//     }
// }`,
//     explanation: "Output là 100. Generic class A có bounded type parameter T extends Number, nghĩa là T phải là Number hoặc subclass của Number. Integer extends Number, nên A<Integer> hợp lệ. Constructor nhận Integer(100), gán vào obj. Method show() in obj, kết quả là 100. Bounded generics đảm bảo type safety và cho phép sử dụng methods của Number."
//   },
//   // Question 200
//   {
//     question: "What is the Law of Demeter (Principle of Least Knowledge)?",
//     options: {
//       A: "An object should only communicate with its immediate friends",
//       B: "An object should know everything",
//       C: "An object should communicate with all objects",
//       D: "An object should be isolated"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Law of Demeter (Nguyên tắc ít biết nhất) quy định một object chỉ nên giao tiếp với immediate friends (bạn bè trực tiếp) của nó. Immediate friends bao gồm: chính object đó, objects được truyền vào như parameters, objects được tạo trong method, và direct component objects. Tránh gọi methods trên objects được trả về từ method calls khác (a.getB().getC().method() là vi phạm)."
//   },
//   // Question 201
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x = 10;
//     void change() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change();
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final không thể thay đổi giá trị sau khi đã được khởi tạo. Trong code này, biến x được khai báo là final và đã được gán giá trị 10, nên không thể gán lại giá trị 20 trong method change()."
//   },
//   // Question 202
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     final int x;
//     Test() {
//         x = 10;
//     }
//     Test(int y) {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(20);
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Output là 20. Biến final có thể được khởi tạo trong constructor, nhưng chỉ một lần. Ở đây, constructor Test(int y) được gọi với tham số 20, nên x được gán giá trị 20. Mỗi constructor có thể gán giá trị khác nhau cho biến final, miễn là chỉ gán một lần trong mỗi constructor."
//   },
//   // Question 203
//   {
//     question: "Can a static method access instance variables?",
//     options: {
//       A: "Yes, always",
//       B: "No, directly",
//       C: "Yes, through object reference",
//       D: "Only if variable is final"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Static method KHÔNG THỂ truy cập trực tiếp instance variables vì static method thuộc về class, không thuộc về instance. Tuy nhiên, static method có thể truy cập instance variables thông qua object reference (ví dụ: obj.variable). Static method có thể truy cập static variables trực tiếp."
//   },
//   // Question 204
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 20",
//       B: "20 20",
//       C: "10 10",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     void change() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t1 = new Test();
//         Test t2 = new Test();
//         t1.change();
//         System.out.print(t1.x + " " + t2.x);
//     }
// }`,
//     explanation: "Output là '20 20'. Biến static x được chia sẻ bởi tất cả instances của class Test. Khi t1.change() được gọi, x được thay đổi thành 20. Vì x là static, cả t1.x và t2.x đều trỏ đến cùng một biến, nên cả hai đều là 20."
//   },
//   // Question 205
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     final void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method final không thể bị override. Class B cố gắng override method show() của class A, nhưng method này được khai báo là final trong class A. Final methods không thể bị override bởi subclass."
//   },
//   // Question 206
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static final int x = 10;
//     static {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến static final đã được khởi tạo với giá trị 10, không thể thay đổi trong static block. Static final variables là constants và phải được khởi tạo tại thời điểm khai báo hoặc trong static block, nhưng không thể gán lại sau khi đã khởi tạo."
//   },
//   // Question 207
//   {
//     question: "Can a final class have abstract methods?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only if methods are static",
//       D: "Only if class is also abstract"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, final class không thể có abstract methods. Final class không thể được kế thừa, trong khi abstract methods yêu cầu subclass phải implement chúng. Đây là mâu thuẫn logic. Nếu class là final, nó phải là concrete class (không có abstract methods)."
//   },
//   // Question 208
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "30",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     static int x = 10;
//     static {
//         x = 20;
//     }
//     static {
//         x = 30;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 30. Static blocks được thực thi theo thứ tự xuất hiện trong code khi class được load. Đầu tiên x = 10 (khởi tạo), sau đó static block đầu tiên gán x = 20, cuối cùng static block thứ hai gán x = 30. Giá trị cuối cùng là 30."
//   },
//   // Question 209
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     static void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'A'. Static methods không thể bị override, chỉ có thể bị hide (ẩn). Khi gọi static method qua reference, method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Vì a có kiểu A, nên A.show() được gọi."
//   },
//   // Question 210
//   {
//     question: "Can a static variable be initialized in a constructor?",
//     options: {
//       A: "Yes, always",
//       B: "No, it's initialized before constructor",
//       C: "Yes, but value is reset each time",
//       D: "Only if it's final"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Có thể khởi tạo static variable trong constructor, nhưng giá trị sẽ bị reset mỗi lần constructor được gọi. Static variables được khởi tạo khi class được load (trước constructor), nhưng có thể được gán lại trong constructor. Tuy nhiên, đây không phải là practice tốt."
//   },
//   // Question 211
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     final int x;
//     {
//         x = 10;
//     }
//     Test() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final x đã được gán giá trị 10 trong instance initialization block, không thể gán lại trong constructor. Biến final chỉ có thể được gán một lần. Thứ tự thực thi: instance block chạy trước constructor, nên x đã được gán trước khi constructor chạy."
//   },
//   // Question 212
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x;
//     Test() {
//         System.out.print(x);
//         x = 10;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì cố gắng sử dụng biến final x trước khi khởi tạo. Biến final phải được khởi tạo trước khi sử dụng. Trong code này, System.out.print(x) được gọi trước khi x = 10, gây lỗi biên dịch. Phải gán x trước khi sử dụng."
//   },
//   // Question 213
//   {
//     question: "Can a static method be overridden?",
//     options: {
//       A: "Yes",
//       B: "No, it's method hiding",
//       C: "Only in subclasses",
//       D: "Only if made non-static"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, static methods không thể bị override, chỉ có thể bị hide (ẩn). Khi subclass có static method cùng tên, nó ẩn method của parent class, không phải override. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime)."
//   },
//   // Question 214
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "30",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     int y = 20;
//     static void show() {
//         System.out.print(x);
//     }
//     void display() {
//         System.out.print(y);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         Test.show();
//         t.display();
//     }
// }`,
//     explanation: "Output là '1020' (không có khoảng trắng). Test.show() in static variable x = 10. t.display() in instance variable y = 20. Static method show() chỉ có thể truy cập static variables, instance method display() có thể truy cập cả static và instance variables."
//   },
//   // Question 215
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final static int x = 10;
//     static void change() {
//         x = 20;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến static final đã được khởi tạo với giá trị 10, không thể thay đổi. Static final variables là constants và không thể gán lại sau khi đã khởi tạo. Method change() cố gắng gán x = 20, gây lỗi biên dịch."
//   },
//   // Question 216
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     final int x = 10;
//     void show() {
//         final int y = 20;
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new Test().show();
//     }
// }`,
//     explanation: "Output là 10. Instance variable final x = 10 được in ra. Biến local final y = 20 không được sử dụng. Final variables (cả instance và local) có thể được đọc bình thường, chỉ không thể gán lại sau khi đã khởi tạo."
//   },
//   // Question 217
//   {
//     question: "Can a final method be abstract?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in interfaces",
//       D: "Only in abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, final method không thể là abstract. Final methods không thể bị override, trong khi abstract methods yêu cầu subclass phải implement chúng. Đây là mâu thuẫn logic. Method không thể vừa final (không thể override) vừa abstract (phải override)."
//   },
//   // Question 218
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     static void change() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.change();
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 20. Static method change() thay đổi giá trị của static variable x từ 10 thành 20. Static methods có thể truy cập và thay đổi static variables. Sau khi gọi Test.change(), x = 20, nên in ra 20."
//   },
//   // Question 219
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `final class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class A được khai báo là final, không thể được kế thừa. Class B cố gắng extend class A, nhưng final class không cho phép điều này. Final classes được dùng để ngăn kế thừa, đảm bảo implementation không bị thay đổi."
//   },
//   // Question 220
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     final int x;
//     Test(int x) {
//         this.x = x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(10);
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Output là 10. Biến final x được khởi tạo trong constructor với giá trị tham số x = 10. Đây là cách hợp lệ để khởi tạo final variable - trong constructor. Biến final phải được khởi tạo trước khi constructor kết thúc."
//   },
//   // Question 221
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x;
//     void init() {
//         x = 10;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final x không được khởi tạo. Final instance variables phải được khởi tạo tại thời điểm khai báo, trong instance initialization block, hoặc trong constructor. Không thể khởi tạo trong method thông thường như init()."
//   },
//   // Question 222
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 10",
//       B: "10 20",
//       C: "20 20",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     static int x = 10;
//     Test() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t1 = new Test();
//         Test t2 = new Test();
//         System.out.print(t1.x + " " + t2.x);
//     }
// }`,
//     explanation: "Output là '20 20'. Biến static x được chia sẻ bởi tất cả instances. Khi t1 được tạo, constructor gán x = 20. Khi t2 được tạo, constructor lại gán x = 20. Cả t1.x và t2.x đều trỏ đến cùng một biến static, nên cả hai đều là 20."
//   },
//   // Question 223
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A.show();
//     }
// }`,
//     explanation: "Output là 'A'. A.show() gọi static method show() của class A, in 'A'. Static methods không có runtime polymorphism, method được chọn dựa trên class name (A), không phải object type. Method show() trong B là instance method, không override static method của A."
//   },
//   // Question 224
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     final int x = 10;
//     Test() {
//         System.out.print(x);
//     }
// }
// class Sub extends Test {
//     final int x = 20;
// }
// public class Main {
//     public static void main(String[] args) {
//         Sub s = new Sub();
//         System.out.print(s.x);
//     }
// }`,
//     explanation: "Output là '1020'. Khi tạo Sub(), constructor của Test được gọi trước, in x của Test (10). Sau đó constructor của Sub chạy. Khi in s.x, biến x của Sub (20) được in vì variables không có polymorphism, truy cập dựa trên reference type. Đây là variable hiding."
//   },
//   // Question 225
//   {
//     question: "Can a static block throw checked exceptions?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only unchecked exceptions",
//       D: "Only if caught"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, static block không thể throw checked exceptions. Static block được thực thi khi class được load, không có nơi nào để catch checked exceptions. Static block chỉ có thể throw unchecked exceptions (RuntimeException và subclasses). Nếu cần xử lý checked exceptions, phải catch trong static block."
//   },
//   // Question 226
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static final int x;
//     static {
//         x = 10;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 10. Static final variable x được khởi tạo trong static block với giá trị 10. Static final variables phải được khởi tạo tại thời điểm khai báo hoặc trong static block. Sau khi static block chạy, x = 10."
//   },
//   // Question 227
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     static final int x;
//     static {
//         x = 10;
//     }
//     static {
//         x = 20;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì static final variable x đã được gán giá trị 10 trong static block đầu tiên, không thể gán lại trong static block thứ hai. Static final variables chỉ có thể được gán một lần. Phải gán trong một static block duy nhất hoặc tại thời điểm khai báo."
//   },
//   // Question 228
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     final int x = 10;
//     void show() {
//         final int x = 20;
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new Test().show();
//     }
// }`,
//     explanation: "Output là 20. Biến local final x = 20 che khuất (shadow) instance variable final x = 10. Khi in x trong method show(), nó in biến local (20), không phải instance variable (10). Để truy cập instance variable, cần dùng this.x."
//   },
//   // Question 229
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static int x = 10;
//     static void show() {
//         int x = 20;
//         System.out.print(Test.x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.show();
//     }
// }`,
//     explanation: "Output là 10. Biến local x = 20 che khuất static variable x = 10. Khi in Test.x, nó truy cập static variable qua class name, in 10. Để truy cập static variable khi bị che khuất, phải dùng class name (Test.x), không thể dùng this vì static methods không có this."
//   },
//   // Question 230
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     final void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     static void show() {
//         System.out.print("B");
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì không thể có static method và instance method cùng tên trong cùng class hierarchy. Method show() trong B có signature giống show() trong A, nhưng một cái là static, một cái là instance. Điều này gây conflict. Static methods không thể override instance methods."
//   },
//   // Question 231
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x;
//     static void show() {
//         System.out.print(x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì static method show() cố gắng truy cập instance variable x. Static methods không thể truy cập instance variables trực tiếp vì chúng thuộc về class, không thuộc về instance. Phải truy cập qua object reference hoặc làm x thành static."
//   },
//   // Question 232
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static int x = 10;
//     {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 10. Instance initialization block { x = 20; } chỉ chạy khi tạo object. Trong code này, không có object nào được tạo, chỉ truy cập static variable Test.x. Static variable x giữ giá trị khởi tạo 10. Instance block không chạy nếu không tạo object."
//   },
//   // Question 233
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     static {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 20. Static block được thực thi khi class được load, trước khi main() chạy. Static block gán x = 20, ghi đè giá trị khởi tạo x = 10. Thứ tự: khởi tạo x = 10, sau đó static block chạy và gán x = 20. Giá trị cuối cùng là 20."
//   },
//   // Question 234
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     static void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         A.show();
//     }
// }`,
//     explanation: "Output là 'A'. A.show() gọi static method show() của class A, in 'A'. Static methods không có runtime polymorphism, method được chọn dựa trên class name (A), không phải object type. Mặc dù a là object B, nhưng A.show() gọi method của A."
//   },
//   // Question 235
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x = 10;
//     void change() {
//         this.x = 20;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final x đã được khởi tạo với giá trị 10, không thể thay đổi. Final variables chỉ có thể được gán một lần. Method change() cố gắng gán this.x = 20, gây lỗi biên dịch. Final variables không thể được gán lại sau khi đã khởi tạo."
//   },
//   // Question 236
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     final int x = 10;
//     Test(int x) {
//         System.out.print(this.x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new Test(20);
//     }
// }`,
//     explanation: "Output là 10. Biến final x = 10 đã được khởi tạo tại thời điểm khai báo. Tham số x = 20 của constructor che khuất instance variable x, nhưng this.x truy cập instance variable (10). Final variable x không thể thay đổi, nên this.x = 10."
//   },
//   // Question 237
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     void show() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show();
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 20. Instance method show() có thể truy cập và thay đổi static variable x. Khi gọi t.show(), x được thay đổi từ 10 thành 20. Static variable được chia sẻ bởi tất cả instances, nên Test.x = 20 sau khi show() được gọi."
//   },
//   // Question 238
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `final class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class A được khai báo là final, không thể được kế thừa. Class B cố gắng extend class A, nhưng final class không cho phép điều này. Final classes được dùng để ngăn kế thừa, đảm bảo implementation không bị thay đổi."
//   },
//   // Question 239
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x;
//     static {
//         x = 10;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì static block không thể khởi tạo instance variable. Static block chỉ có thể khởi tạo static variables. Final instance variable x phải được khởi tạo trong instance initialization block hoặc constructor, không thể trong static block."
//   },
//   // Question 240
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static final int x = 10;
//     static void show() {
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.show();
//     }
// }`,
//     explanation: "Output là 10. Static final variable x = 10 là constant. Static method show() có thể truy cập static final variable x và in ra 10. Static final variables là constants và không thể thay đổi sau khi khởi tạo."
//   },
//   // Question 241
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     final int x = 10;
//     Test() {
//         System.out.print(x);
//     }
// }
// class Sub extends Test {
//     final int x = 20;
//     Sub() {
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new Sub();
//     }
// }`,
//     explanation: "Output là '1020'. Khi tạo Sub(), constructor của Test được gọi trước, in x của Test (10). Sau đó constructor của Sub chạy, in x của Sub (20). Mỗi class có biến final x riêng (variable hiding). Thứ tự: parent constructor (10) -> child constructor (20)."
//   },
//   // Question 242
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     static final int x;
//     Test() {
//         x = 10;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì static final variable x không thể được khởi tạo trong constructor. Static final variables phải được khởi tạo tại thời điểm khai báo hoặc trong static block, không thể trong constructor. Constructor chỉ chạy khi tạo object, trong khi static variables được khởi tạo khi class được load."
//   },
//   // Question 243
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static int x = 10;
//     static void show() {
//         int x = 20;
//         System.out.print(Test.x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.show();
//     }
// }`,
//     explanation: "Output là 10. Biến local x = 20 che khuất static variable x = 10. Khi in Test.x, nó truy cập static variable qua class name, in 10. Để truy cập static variable khi bị che khuất, phải dùng class name (Test.x), không thể dùng this vì static methods không có this."
//   },
//   // Question 244
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     final void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void display() {
//         show();
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().display();
//     }
// }`,
//     explanation: "Output là 'A'. Class B kế thừa final method show() từ A. Final methods không thể bị override, nhưng có thể được gọi từ subclass. Method display() trong B gọi show() từ A, in 'A'. Final methods có thể được kế thừa và sử dụng, chỉ không thể override."
//   },
//   // Question 245
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new Test();
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 20. Instance initialization block { x = 20; } chạy khi tạo object. Khi gọi new Test(), instance block chạy và gán x = 20, ghi đè giá trị khởi tạo x = 10. Instance block chạy trước constructor, nên x = 20 sau khi object được tạo."
//   },
//   // Question 246
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x = 10;
//     void show() {
//         final int x;
//         System.out.print(x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến local final x chưa được khởi tạo trước khi sử dụng. Final local variables phải được khởi tạo trước khi sử dụng. Không thể in x khi x chưa có giá trị. Phải gán giá trị cho x trước khi in."
//   },
//   // Question 247
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static final int x = 10;
//     static void show() {
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.show();
//     }
// }`,
//     explanation: "Output là 10. Static final variable x = 10 là constant. Static method show() có thể truy cập static final variable x và in ra 10. Static final variables là constants và không thể thay đổi sau khi khởi tạo. Static methods có thể truy cập static variables trực tiếp."
//   },
//   // Question 248
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     final int x;
//     Test() {
//         x = 10;
//     }
//     Test(int y) {
//         this();
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(20);
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final x đã được gán giá trị 10 trong constructor Test() (qua this()), không thể gán lại trong constructor Test(int y). Final variables chỉ có thể được gán một lần. Nếu code compile được, output sẽ là 20 vì constructor Test(int y) gán x = 20 sau this(), nhưng thực tế code này không compile được."
//   },
//   // Question 249
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x = 10;
//     void show() {
//         x++;
//         System.out.print(x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final x không thể thay đổi giá trị. x++ cố gắng tăng giá trị của x, nhưng final variables không thể được gán lại sau khi đã khởi tạo. Final variables là constants, không thể thay đổi bằng bất kỳ cách nào (++, --, =, etc.)."
//   },
//   // Question 250
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static int x = 10;
//     static void show() {
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.show();
//     }
// }`,
//     explanation: "Output là 10. Static method show() có thể truy cập static variable x trực tiếp và in ra 10. Static methods có thể truy cập static variables mà không cần instance. Static variable x = 10 được khởi tạo khi class được load."
//   },
//   // Question 251
//   {
//     question: "What breaks encapsulation in this code?",
//     options: {
//       A: "Private variable x",
//       B: "Public getter method",
//       C: "Returning reference to mutable array",
//       D: "Nothing, it's properly encapsulated"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     private int[] arr = {1, 2, 3};
//     public int[] getArr() {
//         return arr;
//     }
// }`,
//     explanation: "Returning reference to mutable array (trả về reference đến array có thể thay đổi) phá vỡ encapsulation. Method getArr() return reference đến array gốc, cho phép code bên ngoài thay đổi array bên trong object. Nên return defensive copy: return Arrays.copyOf(arr, arr.length) để bảo vệ dữ liệu."
//   },
//   // Question 252
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) thay đổi x từ 10 thành 20. Method getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói đúng: private variable + public getter/setter."
//   },
//   // Question 253
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.x = 20;
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì cố gắng truy cập private variable x từ bên ngoài class. Private variables chỉ có thể được truy cập trong cùng class. Không thể gán t.x = 20 từ bên ngoài. Phải dùng setter method để thay đổi giá trị của private variable."
//   },
//   // Question 254
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     private int x = 10;
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì cố gắng truy cập private variable x từ bên ngoài class. Private variables chỉ có thể được truy cập trong cùng class. Không thể in t.x từ bên ngoài. Phải dùng getter method để đọc giá trị của private variable."
//   },
//   // Question 255
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         if (x > 0) {
//             this.x = x;
//         }
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) có validation (x > 0), vì 20 > 0 nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20. Đây là encapsulation với validation."
//   },
//   // Question 256
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         if (x < 0) {
//             return;
//         }
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(-5);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Method setX(-5) có validation (x < 0), vì -5 < 0 nên return sớm, không thực thi this.x = x. Giá trị của x không thay đổi, vẫn là 10. Method getX() trả về giá trị ban đầu 10. Validation trong setter bảo vệ dữ liệu khỏi giá trị không hợp lệ."
//   },
//   // Question 257
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public Test(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Constructor Test(20) nhận tham số x = 20 và gán this.x = 20, ghi đè giá trị khởi tạo x = 10. Constructor chạy sau khi khởi tạo instance variables, nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20."
//   },
//   // Question 258
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public void change(int x) {
//         x = 20;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Trong method change(int x), tham số x là biến local, không phải instance variable. Khi gán x = 20, chỉ biến local được thay đổi, không ảnh hưởng đến instance variable this.x. Để thay đổi instance variable, cần dùng this.x = x. Giá trị của instance variable x vẫn là 10."
//   },
//   // Question 259
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void change(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Method change(20) sử dụng this.x = x để gán giá trị tham số (20) cho instance variable. this.x truy cập instance variable, x là tham số. Method getX() trả về giá trị hiện tại của instance variable x là 20. Đây là cách đúng để thay đổi instance variable khi bị che khuất bởi tham số."
//   },
//   // Question 260
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Private variable x = 10 được đóng gói, chỉ có thể truy cập qua public getter method getX(). Method getX() trả về giá trị của private variable x là 10. Đây là cách đóng gói đúng: private variable + public getter để đọc giá trị."
//   },
//   // Question 261
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism (đa hình runtime). Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 262
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     A() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     B() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B();
//     }
// }`,
//     explanation: "Output là 'AB'. Khi tạo B(), constructor của parent class A được gọi trước (thông qua super() ngầm định), in 'A'. Sau đó constructor của B được gọi, in 'B'. Thứ tự luôn là: parent constructor trước, child constructor sau."
//   },
//   // Question 263
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     int x = 10;
// }
// class B extends A {
//     int x = 20;
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.x);
//     }
// }`,
//     explanation: "Output là 10. Variables không có polymorphism, chỉ methods mới có. Khi truy cập a.x với a có kiểu A, nó truy cập biến x của class A (10), không phải biến x của class B (20). Đây là variable hiding, không phải overriding. Variables được bind tại compile-time dựa trên reference type."
//   },
//   // Question 264
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     int getX() {
//         return 10;
//     }
// }
// class B extends A {
//     int getX() {
//         return 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.getX());
//     }
// }`,
//     explanation: "Output là 20. Method getX() trong B override method getX() trong A. Runtime polymorphism áp dụng, method getX() của B được gọi, return 20. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method của B được gọi."
//   },
//   // Question 265
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         super.show();
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show();
//     }
// }`,
//     explanation: "Output là 'AB'. Method show() trong B override method của A. Trong show() của B, super.show() gọi method của parent class A, in 'A'. Sau đó tiếp tục in 'B'. super được dùng để gọi method của parent class trong overridden method."
//   },
//   // Question 266
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     private void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method show() trong A là private, không thể được truy cập từ bên ngoài class A. Mặc dù B có method show() public, nhưng khi gọi a.show() với a có kiểu A, compiler chỉ thấy method private show() của A, không thể truy cập được."
//   },
//   // Question 267
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     protected int x = 10;
// }
// class B extends A {
//     void show() {
//         System.out.print(x);
//     }
//     void change() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.change();
//         b.show();
//     }
// }`,
//     explanation: "Output là 20. Protected variable x trong A có thể được truy cập và thay đổi từ subclass B. Method change() thay đổi x từ 10 thành 20. Method show() in giá trị hiện tại của x là 20. Protected members có thể được truy cập trong subclass."
//   },
//   // Question 268
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         ((B)a).show();
//     }
// }`,
//     explanation: "Output là 'B'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
//   },
//   // Question 269
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     int x = 10;
//     void show() {
//         System.out.print(x);
//     }
// }
// class B extends A {
//     int x = 20;
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 10. Method show() được định nghĩa trong A và truy cập x. Khi gọi a.show(), method show() của A được gọi (không override), và nó truy cập x của A (10), không phải x của B (20). Variables không có polymorphism, method show() truy cập x trong scope của nó (class A)."
//   },
//   // Question 270
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         A a = b;
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Upcast A a = b chuyển đổi reference từ kiểu B sang kiểu A. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Upcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
//   },
//   // Question 271
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "C",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// class C extends B {
//     void show() {
//         System.out.print("C");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new C();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'C'. Trong multilevel inheritance, method show() được override ở mỗi level. Runtime polymorphism áp dụng, method show() của class con nhất (C) được gọi, in 'C'. Method của class con nhất luôn được ưu tiên trong runtime polymorphism."
//   },
//   // Question 272
//   {
//     question: "What is the output?",
//     options: {
//       A: "int",
//       B: "Integer",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(int x) {
//         System.out.print("int");
//     }
//     void show(Integer x) {
//         System.out.print("Integer");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10);
//     }
// }`,
//     explanation: "Output là 'int'. Khi gọi t.show(10), 10 là primitive int. Compiler ưu tiên exact match (int) hơn autoboxing (int -> Integer). Method show(int x) khớp chính xác với primitive int, nên được chọn. Method show(Integer x) yêu cầu autoboxing, chỉ được chọn nếu không có exact match."
//   },
//   // Question 273
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A[] arr = {new A(), new B()};
//         for (A a : arr) {
//             a.show();
//         }
//     }
// }`,
//     explanation: "Output là 'AB'. Array chứa object A và object B. Vòng lặp for-each duyệt qua array, gọi a.show() cho mỗi object. Runtime polymorphism áp dụng: object A gọi method của A (in 'A'), object B gọi method của B (in 'B'). Polymorphism cho phép xử lý nhiều types qua cùng interface."
//   },
//   // Question 274
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         if (a instanceof B) {
//             ((B)a).show();
//         }
//     }
// }`,
//     explanation: "Output là 'B'. instanceof kiểm tra a có phải là instance của B không (true). Sau đó downcast (B)a và gọi show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast an toàn vì đã kiểm tra instanceof trước."
//   },
//   // Question 275
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         super.show();
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show();
//     }
// }`,
//     explanation: "Output là 'AB'. Method show() trong B override method của A. Trong show() của B, super.show() gọi method của parent class A, in 'A'. Sau đó tiếp tục in 'B'. super được dùng để gọi method của parent class trong overridden method."
//   },
//   // Question 276
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 277
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     static void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'A'. Static methods không có runtime polymorphism. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Vì a có kiểu A, nên A.show() được gọi, in 'A'. Đây là method hiding, không phải overriding."
//   },
//   // Question 278
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         A a = b;
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Upcast A a = b chuyển đổi reference từ kiểu B sang kiểu A. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Upcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
//   },
//   // Question 279
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         B b = (B)a;
//         b.show();
//     }
// }`,
//     explanation: "Output là 'B'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
//   },
//   // Question 280
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 281
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     abstract void show();
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract method show() trong A được implement trong B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract classes cho phép định nghĩa contract và để subclass implement chi tiết."
//   },
//   // Question 282
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "A",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `interface I {
//     void show();
// }
// class A implements I {
//     public void show() {
//         System.out.print("A");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new A();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'A'. Class A implement interface I và implement method show(). Runtime polymorphism áp dụng, method show() của A được gọi, in 'A'. Interfaces cho phép đạt runtime polymorphism mà không cần inheritance."
//   },
//   // Question 283
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     void show();
// }
// class A implements I {
//     public void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     public void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new B();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'B'. Class A implement interface I, class B extends A và override show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Trong multilevel inheritance với interfaces, method của class con nhất được ưu tiên."
//   },
//   // Question 284
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     abstract void show();
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract method show() trong A được implement trong B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract classes cho phép định nghĩa contract và để subclass implement chi tiết."
//   },
//   // Question 285
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 286
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     void show();
// }
// class A implements I {
//     public void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     public void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new B();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'B'. Class A implement interface I, class B extends A và override show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Interfaces cho phép đạt runtime polymorphism qua reference type I."
//   },
//   // Question 287
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 288
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     abstract void show();
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract method show() trong A được implement trong B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract classes cho phép định nghĩa contract và để subclass implement chi tiết."
//   },
//   // Question 289
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     void show();
// }
// class A implements I {
//     public void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     public void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new B();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'B'. Class A implement interface I, class B extends A và override show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Interfaces cho phép đạt runtime polymorphism qua reference type I."
//   },
//   // Question 290
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 291
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) thay đổi x từ 10 thành 20. Method getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói đúng: private variable + public getter/setter."
//   },
//   // Question 292
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Private variable x = 10 được đóng gói, chỉ có thể truy cập qua public getter method getX(). Method getX() trả về giá trị của private variable x là 10. Đây là cách đóng gói đúng: private variable + public getter để đọc giá trị."
//   },
//   // Question 293
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     private int x = 10;
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.x = 20;
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì cố gắng truy cập private variable x từ bên ngoài class. Private variables chỉ có thể được truy cập trong cùng class. Không thể gán t.x = 20 hoặc in t.x từ bên ngoài. Phải dùng getter/setter methods để truy cập private variables."
//   },
//   // Question 294
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         if (x > 0) {
//             this.x = x;
//         }
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) có validation (x > 0), vì 20 > 0 nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20. Đây là encapsulation với validation."
//   },
//   // Question 295
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         if (x < 0) {
//             return;
//         }
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(-5);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Method setX(-5) có validation (x < 0), vì -5 < 0 nên return sớm, không thực thi this.x = x. Giá trị của x không thay đổi, vẫn là 10. Method getX() trả về giá trị ban đầu 10. Validation trong setter bảo vệ dữ liệu khỏi giá trị không hợp lệ."
//   },
//   // Question 296
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public Test(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Constructor Test(20) nhận tham số x = 20 và gán this.x = 20, ghi đè giá trị khởi tạo x = 10. Constructor chạy sau khi khởi tạo instance variables, nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20."
//   },
//   // Question 297
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public void change(int x) {
//         x = 20;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Trong method change(int x), tham số x là biến local, không phải instance variable. Khi gán x = 20, chỉ biến local được thay đổi, không ảnh hưởng đến instance variable this.x. Để thay đổi instance variable, cần dùng this.x = x. Giá trị của instance variable x vẫn là 10."
//   },
//   // Question 298
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void change(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Method change(20) sử dụng this.x = x để gán giá trị tham số (20) cho instance variable. this.x truy cập instance variable, x là tham số. Method getX() trả về giá trị hiện tại của instance variable x là 20. Đây là cách đúng để thay đổi instance variable khi bị che khuất bởi tham số."
//   },
//   // Question 299
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Private variable x = 10 được đóng gói, chỉ có thể truy cập qua public getter method getX(). Method getX() trả về giá trị của private variable x là 10. Đây là cách đóng gói đúng: private variable + public getter để đọc giá trị."
//   },
//   // Question 300
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) thay đổi x từ 10 thành 20. Method getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói đúng: private variable + public getter/setter để kiểm soát truy cập dữ liệu."
//   },
//   // Question 301
//   {
//     question: "In the context of Object-Oriented Programming, what is the fundamental philosophical difference between encapsulation as a data-hiding mechanism and encapsulation as a bundling mechanism, and how does this distinction impact the design of class hierarchies in complex software systems?",
//     options: {
//       A: "Data-hiding encapsulation focuses solely on access modifiers, while bundling encapsulation emphasizes the logical grouping of related data and methods, with the latter being more critical for maintaining system integrity in large-scale applications",
//       B: "Data-hiding and bundling are identical concepts in OOP, both implemented through the same mechanisms without any meaningful distinction in practice",
//       C: "Bundling encapsulation is a compile-time concept while data-hiding is a runtime concept, making them fundamentally incompatible in object-oriented design",
//       D: "Data-hiding encapsulation is primarily concerned with preventing unauthorized access, whereas bundling encapsulation is about organizing code structure, and neither significantly impacts class hierarchy design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation có hai khía cạnh quan trọng: data-hiding (ẩn dữ liệu) và bundling (gói gọn). Data-hiding sử dụng access modifiers để kiểm soát truy cập, trong khi bundling nhấn mạnh việc nhóm logic các dữ liệu và phương thức liên quan lại với nhau. Trong các hệ thống phức tạp, bundling quan trọng hơn vì nó đảm bảo tính toàn vẹn của hệ thống bằng cách đảm bảo các thành phần liên quan được quản lý cùng nhau. Cả hai khía cạnh đều ảnh hưởng đến thiết kế class hierarchy, nhưng bundling có tác động lớn hơn đến việc duy trì tính nhất quán và dễ bảo trì trong các ứng dụng quy mô lớn."
//   },
//   // Question 302
//   {
//     question: "When designing an inheritance hierarchy, what are the critical considerations regarding the Liskov Substitution Principle's relationship with polymorphism, and how does method overriding interact with the contract established by the parent class?",
//     options: {
//       A: "The Liskov Substitution Principle requires that derived classes must be substitutable for their base classes without altering the correctness of the program, and method overriding must maintain the behavioral contract while allowing implementation flexibility",
//       B: "Method overriding can completely change the behavior of inherited methods without any constraints, as polymorphism allows any implementation in derived classes",
//       C: "The Liskov Substitution Principle only applies to abstract classes and interfaces, not to concrete inheritance relationships",
//       D: "Polymorphism and the Liskov Substitution Principle are unrelated concepts, with polymorphism focusing on method resolution and LSP focusing on type compatibility"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Nguyên tắc Liskov Substitution (LSP) yêu cầu các lớp dẫn xuất phải có thể thay thế lớp cơ sở mà không làm thay đổi tính đúng đắn của chương trình. Khi override method, ta phải duy trì hợp đồng hành vi (behavioral contract) của lớp cha - nghĩa là method phải thực hiện đúng mục đích và không vi phạm các giả định mà code sử dụng lớp cha đã đặt ra. Polymorphism cho phép linh hoạt trong implementation nhưng không được phá vỡ contract. Vi phạm LSP sẽ dẫn đến các lỗi logic khó phát hiện trong runtime."
//   },
//   // Question 303
//   {
//     question: "What is the theoretical foundation of abstraction in object-oriented programming, and how does the distinction between interface abstraction and implementation abstraction contribute to the design of maintainable and extensible software architectures?",
//     options: {
//       A: "Abstraction separates 'what' (interface) from 'how' (implementation), allowing clients to depend on stable interfaces while implementations can evolve independently, which is fundamental to creating flexible and maintainable architectures",
//       B: "Abstraction is merely a code organization technique with no significant impact on software architecture or maintainability",
//       C: "Interface abstraction and implementation abstraction are the same concept, both referring to hiding implementation details",
//       D: "Abstraction only applies to abstract classes and cannot be used with concrete classes or interfaces"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) là nền tảng lý thuyết của OOP, tách biệt 'what' (giao diện - interface) khỏi 'how' (triển khai - implementation). Interface abstraction định nghĩa contract mà client code phụ thuộc vào, trong khi implementation abstraction ẩn chi tiết triển khai. Sự phân biệt này cho phép client code phụ thuộc vào interface ổn định, còn implementation có thể thay đổi và mở rộng độc lập mà không ảnh hưởng đến client. Điều này là nền tảng cho việc tạo ra các kiến trúc phần mềm linh hoạt, dễ bảo trì và mở rộng. Abstraction có thể áp dụng qua abstract classes, interfaces, hoặc thậm chí concrete classes với proper encapsulation."
//   },
//   // Question 304
//   {
//     question: "In the context of polymorphism, explain the theoretical differences between compile-time polymorphism (method overloading) and runtime polymorphism (method overriding), and discuss how the Java Virtual Machine resolves method calls in each scenario.",
//     options: {
//       A: "Compile-time polymorphism uses static binding based on method signature and argument types determined at compile time, while runtime polymorphism uses dynamic binding where the JVM determines the actual method to call based on the object's runtime type, with method resolution occurring through the virtual method table",
//       B: "Both compile-time and runtime polymorphism use the same binding mechanism, with the only difference being when the binding occurs",
//       C: "Compile-time polymorphism is more efficient than runtime polymorphism because it doesn't require method lookup, but both resolve methods identically",
//       D: "Runtime polymorphism can only occur with abstract methods, while compile-time polymorphism applies to all methods"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Compile-time polymorphism (đa hình compile-time) sử dụng static binding - compiler quyết định method nào được gọi dựa trên method signature và kiểu tham số tại thời điểm biên dịch. Runtime polymorphism (đa hình runtime) sử dụng dynamic binding - JVM quyết định method nào được gọi dựa trên kiểu thực tế của object tại runtime. JVM sử dụng virtual method table (vtable) để resolve method calls trong runtime polymorphism, cho phép gọi đúng method của subclass ngay cả khi reference có kiểu của superclass. Static binding hiệu quả hơn nhưng kém linh hoạt, dynamic binding linh hoạt hơn nhưng có overhead nhỏ."
//   },
//   // Question 305
//   {
//     question: "What are the fundamental theoretical principles underlying inheritance in object-oriented programming, and how does the 'is-a' relationship differ from the 'has-a' relationship in terms of design semantics and implementation implications?",
//     options: {
//       A: "Inheritance establishes an 'is-a' relationship representing specialization where a derived class is a specialized version of the base class, inheriting all members and behaviors, while 'has-a' represents composition where objects contain other objects, with inheritance creating tighter coupling and composition providing more flexibility",
//       B: "'Is-a' and 'has-a' relationships are identical in OOP, both implemented through inheritance mechanisms",
//       C: "Inheritance only applies to 'has-a' relationships, while 'is-a' relationships must use composition",
//       D: "The distinction between 'is-a' and 'has-a' is purely semantic with no implementation differences"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) thiết lập quan hệ 'is-a' (là một), biểu thị sự chuyên biệt hóa - lớp dẫn xuất là phiên bản chuyên biệt của lớp cơ sở, kế thừa tất cả members và behaviors. 'Has-a' (có một) biểu thị composition (tổng hợp) - object chứa các object khác. Inheritance tạo tight coupling (liên kết chặt) vì subclass phụ thuộc trực tiếp vào implementation của superclass. Composition tạo loose coupling (liên kết lỏng) và linh hoạt hơn vì có thể thay đổi implementation mà không ảnh hưởng đến class chứa. Chọn inheritance khi có quan hệ 'is-a' thực sự, chọn composition khi cần flexibility và loose coupling."
//   },
//   // Question 306
//   {
//     question: "Explain the theoretical concept of information hiding in encapsulation, and discuss how access modifiers (private, protected, public, package-private) implement different levels of visibility and their implications for class design and system architecture.",
//     options: {
//       A: "Information hiding restricts access to internal implementation details, with private providing class-level encapsulation, protected enabling inheritance-based access, public exposing the interface, and package-private creating module-level boundaries, each serving different architectural needs in system design",
//       B: "All access modifiers provide identical levels of information hiding, with the choice being purely stylistic",
//       C: "Information hiding is only achieved through private modifiers, with other modifiers providing no encapsulation benefits",
//       D: "Access modifiers are compile-time constructs with no runtime implications for information hiding"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Information hiding (ẩn thông tin) là khái niệm lý thuyết cốt lõi của encapsulation, hạn chế truy cập vào chi tiết implementation bên trong. Private cung cấp class-level encapsulation - chỉ truy cập trong cùng class. Protected cho phép truy cập trong cùng package và subclass - phù hợp cho inheritance hierarchy. Public expose interface - cho phép truy cập từ mọi nơi. Package-private (default) tạo module-level boundaries - truy cập trong cùng package. Mỗi mức độ visibility phục vụ nhu cầu kiến trúc khác nhau: private cho internal implementation, protected cho inheritance, public cho API, package-private cho module organization. Việc chọn đúng access modifier ảnh hưởng đến tính bảo mật, khả năng bảo trì và flexibility của hệ thống."
//   },
//   // Question 307
//   {
//     question: "What is the theoretical relationship between abstraction and encapsulation in object-oriented design, and how do these two principles work together to create well-designed classes that balance flexibility with implementation stability?",
//     options: {
//       A: "Abstraction defines the 'what' by exposing a simplified interface, while encapsulation provides the 'how' by hiding implementation details, and together they create classes where clients depend on stable abstractions while implementations can evolve independently",
//       B: "Abstraction and encapsulation are competing principles that cannot be used together in the same class design",
//       C: "Abstraction is a subset of encapsulation, with encapsulation being the only principle needed for good design",
//       D: "Abstraction and encapsulation are identical concepts, both referring to the same design mechanism"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction và Encapsulation là hai nguyên tắc bổ sung cho nhau trong OOP. Abstraction định nghĩa 'what' (cái gì) bằng cách expose một interface đơn giản hóa, tập trung vào behavior và contract mà class cung cấp. Encapsulation cung cấp 'how' (như thế nào) bằng cách ẩn implementation details, bảo vệ dữ liệu và logic bên trong. Khi kết hợp, chúng tạo ra các class mà client code phụ thuộc vào abstraction ổn định (interface), trong khi implementation có thể thay đổi và phát triển độc lập mà không ảnh hưởng đến client. Sự kết hợp này tạo ra sự cân bằng giữa flexibility (linh hoạt) và stability (ổn định), cho phép hệ thống dễ bảo trì và mở rộng."
//   },
//   // Question 308
//   {
//     question: "In the theoretical framework of object-oriented programming, how does polymorphism enable the Open-Closed Principle, and what are the mechanisms by which polymorphism allows systems to be open for extension while closed for modification?",
//     options: {
//       A: "Polymorphism allows new functionality to be added through new classes that implement existing interfaces or extend base classes, enabling extension without modifying existing code, thus achieving the Open-Closed Principle where systems are open for extension but closed for modification",
//       B: "Polymorphism requires modifying existing classes to add new behavior, which contradicts the Open-Closed Principle",
//       C: "The Open-Closed Principle can only be achieved through inheritance, with polymorphism playing no role",
//       D: "Polymorphism and the Open-Closed Principle are unrelated concepts in object-oriented design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) cho phép Open-Closed Principle bằng cách cho phép thêm functionality mới thông qua các class mới implement existing interfaces hoặc extend base classes, mà không cần modify code hiện có. Khi có interface hoặc base class ổn định, ta có thể tạo các implementation mới (extension) mà không thay đổi code đã tồn tại (closed for modification). Client code phụ thuộc vào abstraction (interface/base class) và sử dụng polymorphism để làm việc với các implementation khác nhau. Điều này cho phép hệ thống mở rộng (open for extension) mà không cần sửa đổi code cũ (closed for modification), giảm rủi ro và tăng tính ổn định của hệ thống."
//   },
//   // Question 309
//   {
//     question: "What are the theoretical foundations of method overriding in inheritance hierarchies, and how do the concepts of method signature, return type covariance, and exception handling interact to define the contract between base and derived classes?",
//     options: {
//       A: "Method overriding requires identical method signatures, allows covariant return types where the derived method can return a subtype, and exception handling must follow the rule that derived methods cannot throw broader checked exceptions than the base method, establishing a contract that maintains substitutability",
//       B: "Method overriding allows complete freedom in changing method signatures, return types, and exceptions without any constraints",
//       C: "Method overriding only applies to methods with identical implementations, not to methods with different behaviors",
//       D: "Return type covariance and exception handling rules are optional guidelines with no enforcement in Java"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method overriding có các quy tắc lý thuyết nghiêm ngặt. Method signature phải giống hệt (tên, tham số, kiểu tham số). Return type có thể là covariant - derived method có thể return subtype của return type trong base method (ví dụ: base return Animal, derived return Dog extends Animal). Exception handling phải tuân theo quy tắc: derived method không thể throw checked exception rộng hơn base method (có thể throw cùng hoặc narrower exception, hoặc không throw). Các quy tắc này thiết lập contract đảm bảo substitutability - derived class có thể thay thế base class mà không vi phạm expectations của client code. Vi phạm các quy tắc này sẽ gây lỗi compile-time hoặc runtime."
//   },
//   // Question 310
//   {
//     question: "Explain the theoretical concept of dynamic method dispatch in polymorphism, and discuss how the Java Virtual Machine's method resolution mechanism works at runtime to determine which method implementation to execute when multiple inheritance levels are involved.",
//     options: {
//       A: "Dynamic method dispatch uses the actual object type at runtime rather than the reference type to determine which method to call, with the JVM traversing the inheritance hierarchy from the actual object's class upward to find the most specific override, using virtual method tables for efficient lookup",
//       B: "Dynamic method dispatch uses the reference type to determine method calls, making it identical to static binding",
//       C: "The JVM always calls the method from the reference type's class, ignoring the actual object type",
//       D: "Dynamic method dispatch only works with single-level inheritance and fails with multiple inheritance levels"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Dynamic method dispatch (phân phối method động) sử dụng kiểu thực tế của object tại runtime (không phải kiểu reference) để quyết định method nào được gọi. JVM duyệt inheritance hierarchy từ class của object thực tế lên trên để tìm override cụ thể nhất. JVM sử dụng virtual method table (vtable) để lookup hiệu quả - mỗi class có bảng chứa pointers đến các method implementations. Khi có nhiều cấp inheritance, JVM tìm method từ subclass cụ thể nhất lên parent class cho đến khi tìm thấy implementation. Cơ chế này cho phép runtime polymorphism hoạt động chính xác ngay cả với deep inheritance hierarchies, đảm bảo method của subclass được gọi thay vì method của superclass."
//   },
//   // Question 311
//   {
//     question: "What is the theoretical distinction between concrete inheritance and interface inheritance in object-oriented design, and how do these different inheritance mechanisms serve distinct purposes in creating flexible and maintainable software architectures?",
//     options: {
//       A: "Concrete inheritance provides code reuse and implementation sharing through class extension, while interface inheritance defines contracts and enables polymorphism without implementation coupling, with interface inheritance providing better abstraction and flexibility for system design",
//       B: "Concrete inheritance and interface inheritance are identical mechanisms with no meaningful differences in their application or benefits",
//       C: "Interface inheritance can only be used with abstract classes, not with Java interfaces",
//       D: "Concrete inheritance is always preferable to interface inheritance because it provides more functionality"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Concrete inheritance (kế thừa cụ thể) cung cấp code reuse và chia sẻ implementation thông qua class extension - subclass kế thừa cả structure và behavior từ superclass. Interface inheritance (kế thừa interface) định nghĩa contract và cho phép polymorphism mà không có implementation coupling - class implement interface phải cung cấp implementation riêng. Interface inheritance cung cấp abstraction tốt hơn và flexibility cao hơn vì không tạo dependency vào implementation cụ thể. Concrete inheritance phù hợp khi có quan hệ 'is-a' mạnh và muốn chia sẻ code, interface inheritance phù hợp khi cần định nghĩa contract mà nhiều class khác nhau có thể implement theo cách riêng."
//   },
//   // Question 312
//   {
//     question: "In the theoretical framework of encapsulation, what is the relationship between data encapsulation and behavioral encapsulation, and how do getter/setter methods contribute to maintaining the integrity of an object's internal state while providing controlled access?",
//     options: {
//       A: "Data encapsulation protects instance variables, while behavioral encapsulation protects methods, and getter/setter methods provide controlled access points that can enforce validation, maintain invariants, and hide implementation details while allowing external interaction with object state",
//       B: "Data and behavioral encapsulation are the same concept, both implemented identically through access modifiers",
//       C: "Getter/setter methods break encapsulation by exposing internal state, making them anti-patterns in object-oriented design",
//       D: "Encapsulation only applies to data, with behavioral encapsulation being a separate unrelated concept"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Data encapsulation (đóng gói dữ liệu) bảo vệ instance variables bằng cách hạn chế truy cập trực tiếp. Behavioral encapsulation (đóng gói hành vi) bảo vệ methods và logic bên trong. Getter/setter methods cung cấp controlled access points - không chỉ đơn giản là expose data, mà có thể enforce validation (kiểm tra tính hợp lệ), maintain invariants (duy trì bất biến), và hide implementation details (ẩn chi tiết triển khai). Ví dụ: setter có thể validate input, getter có thể tính toán giá trị thay vì return trực tiếp. Điều này cho phép external interaction với object state mà vẫn duy trì integrity và encapsulation. Getter/setter không phải anti-pattern nếu được thiết kế đúng với validation và logic phù hợp."
//   },
//   // Question 313
//   {
//     question: "What are the theoretical foundations of abstract classes versus interfaces in Java, and how do the concepts of single inheritance, multiple interface implementation, and the diamond problem influence the choice between these abstraction mechanisms?",
//     options: {
//       A: "Abstract classes support single inheritance with shared implementation, while interfaces support multiple implementation with contract definition only, and Java's single inheritance prevents the diamond problem with classes while multiple interface implementation avoids it because interfaces contain no implementation to conflict",
//       B: "Abstract classes and interfaces are functionally identical in Java, with the choice being purely stylistic",
//       C: "Java supports multiple inheritance for both abstract classes and interfaces, making the diamond problem a concern for both",
//       D: "Interfaces can contain implementation in Java, making them equivalent to abstract classes"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstract classes (lớp trừu tượng) hỗ trợ single inheritance với shared implementation - một class chỉ extend một abstract class nhưng có thể có implementation chung. Interfaces hỗ trợ multiple implementation với contract definition only - một class có thể implement nhiều interfaces nhưng interfaces chỉ định nghĩa contract, không có implementation (trước Java 8). Java's single inheritance ngăn diamond problem với classes vì một class chỉ có một parent class. Multiple interface implementation tránh diamond problem vì interfaces không chứa implementation để conflict - nếu hai interfaces có method signature giống nhau, class implement chỉ cần provide một implementation. Từ Java 8, interfaces có thể có default methods, nhưng nếu conflict xảy ra, class phải override explicitly. Chọn abstract class khi cần shared implementation và 'is-a' relationship, chọn interface khi cần multiple contracts và 'can-do' relationship."
//   },
//   // Question 314
//   {
//     question: "Explain the theoretical concept of method overloading as a form of compile-time polymorphism, and discuss how the compiler resolves overloaded method calls based on method signature matching, type promotion, and ambiguity resolution rules.",
//     options: {
//       A: "Method overloading is compile-time polymorphism where methods with the same name but different signatures are resolved at compile time based on exact match, type promotion hierarchy, and varargs, with compilation errors occurring when ambiguity cannot be resolved through these rules",
//       B: "Method overloading is resolved at runtime based on the actual argument types, making it identical to method overriding",
//       C: "The compiler randomly selects which overloaded method to call when multiple matches exist",
//       D: "Method overloading only works with primitive types and cannot be used with object types"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method overloading (nạp chồng method) là compile-time polymorphism - methods cùng tên nhưng khác signature được resolve tại compile-time. Compiler resolve dựa trên: exact match (khớp chính xác), type promotion hierarchy (byte→short→int→long→float→double, char→int), và varargs. Nếu không có exact match, compiler tìm match thông qua promotion. Nếu có nhiều matches có thể, compiler báo ambiguity error. Overloading khác overriding ở chỗ: overloading là compile-time (dựa trên signature), overriding là runtime (dựa trên object type). Overloading có thể dùng với cả primitive và object types, nhưng với object types, exact match được ưu tiên hơn inheritance hierarchy."
//   },
//   // Question 315
//   {
//     question: "What is the theoretical relationship between inheritance and code reuse in object-oriented programming, and what are the potential pitfalls of using inheritance primarily for code reuse rather than for modeling true 'is-a' relationships?",
//     options: {
//       A: "While inheritance enables code reuse, using it primarily for code reuse without a true 'is-a' relationship leads to fragile base class problems, tight coupling, and violation of the Liskov Substitution Principle, making composition a better choice for code reuse in such scenarios",
//       B: "Inheritance should always be used for code reuse regardless of the relationship type, as it is the most efficient mechanism",
//       C: "Code reuse is the only valid reason to use inheritance, with 'is-a' relationships being irrelevant",
//       D: "Inheritance and code reuse are unrelated concepts that cannot be used together"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) cho phép code reuse, nhưng sử dụng nó chủ yếu cho code reuse mà không có quan hệ 'is-a' thực sự dẫn đến các vấn đề: fragile base class problem (thay đổi base class có thể break subclass), tight coupling (subclass phụ thuộc chặt vào implementation của superclass), và violation Liskov Substitution Principle (subclass không thể thay thế superclass đúng cách). Composition (tổng hợp) là lựa chọn tốt hơn cho code reuse trong các trường hợp này vì nó tạo loose coupling và flexibility. Inheritance nên được dùng khi có quan hệ 'is-a' thực sự và muốn polymorphism, không chỉ đơn giản là code reuse. 'Favor composition over inheritance' là nguyên tắc quan trọng trong OOP design."
//   },
//   // Question 316
//   {
//     question: "In the context of abstraction, what is the theoretical difference between interface abstraction and implementation abstraction, and how do abstract classes and concrete classes contribute differently to these abstraction levels in a software system?",
//     options: {
//       A: "Interface abstraction defines the contract and public API that clients depend on, while implementation abstraction hides the internal details of how that contract is fulfilled, with abstract classes providing partial implementation abstraction and concrete classes providing complete implementation abstraction",
//       B: "Interface abstraction and implementation abstraction are identical concepts with no distinction",
//       C: "Abstract classes cannot provide any form of abstraction, only concrete classes can",
//       D: "Abstraction only applies to interfaces, not to classes"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Interface abstraction (trừu tượng hóa giao diện) định nghĩa contract và public API mà clients phụ thuộc vào - 'what' mà class cung cấp. Implementation abstraction (trừu tượng hóa triển khai) ẩn chi tiết bên trong về cách contract được thực hiện - 'how' được implement. Abstract classes cung cấp partial implementation abstraction - có thể có một số implementation chung và một số abstract methods. Concrete classes cung cấp complete implementation abstraction - có implementation đầy đủ nhưng vẫn ẩn chi tiết bên trong thông qua encapsulation. Cả hai mức abstraction đều quan trọng: interface abstraction cho phép clients phụ thuộc vào contract ổn định, implementation abstraction cho phép thay đổi implementation mà không ảnh hưởng đến clients."
//   },
//   // Question 317
//   {
//     question: "What are the theoretical mechanisms by which polymorphism enables the design of extensible systems, and how does the combination of inheritance, method overriding, and dynamic binding create a foundation for building software that can accommodate new requirements without modifying existing code?",
//     options: {
//       A: "Polymorphism enables extensibility by allowing new classes to be added that implement existing interfaces or extend base classes, with method overriding providing specialized behavior and dynamic binding ensuring the correct method is called at runtime, creating a system where new functionality can be added through new classes without changing existing code",
//       B: "Polymorphism requires modifying existing classes to add new behavior, preventing true extensibility",
//       C: "Extensibility can only be achieved through inheritance, with polymorphism playing no role",
//       D: "Dynamic binding and method overriding are unrelated to system extensibility"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) cho phép extensibility (khả năng mở rộng) bằng cách cho phép thêm các class mới implement existing interfaces hoặc extend base classes. Method overriding cung cấp specialized behavior - mỗi subclass có thể override method để cung cấp behavior riêng. Dynamic binding đảm bảo method đúng được gọi tại runtime dựa trên object type thực tế. Sự kết hợp này tạo nền tảng cho việc xây dựng software có thể accommodate requirements mới mà không cần modify existing code - ta chỉ cần tạo class mới implement/extend, và existing code sử dụng polymorphism sẽ tự động làm việc với class mới. Đây là cơ chế cốt lõi của Open-Closed Principle và là nền tảng cho design patterns như Strategy, Factory, v.v."
//   },
//   // Question 318
//   {
//     question: "Explain the theoretical concept of encapsulation boundaries in object-oriented design, and discuss how the proper use of access modifiers creates layers of abstraction that protect implementation details while exposing necessary interfaces for object interaction.",
//     options: {
//       A: "Encapsulation boundaries define the scope of visibility for class members, with access modifiers creating concentric layers of abstraction where private members form the innermost protected core, protected members extend to inheritance hierarchy, package-private creates module boundaries, and public members form the external interface, each layer serving specific architectural purposes",
//       B: "All access modifiers create identical boundaries with no architectural implications",
//       C: "Encapsulation boundaries are only relevant for data members, not for methods",
//       D: "Public access should always be used to maximize flexibility and code reuse"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation boundaries (ranh giới đóng gói) định nghĩa scope of visibility cho class members. Access modifiers tạo các lớp trừu tượng đồng tâm: private members tạo innermost protected core - chỉ truy cập trong cùng class, bảo vệ implementation details cốt lõi. Protected members mở rộng đến inheritance hierarchy - truy cập trong cùng package và subclass, cho phép inheritance nhưng vẫn bảo vệ khỏi external access. Package-private (default) tạo module boundaries - truy cập trong cùng package, cho phép module-level organization. Public members tạo external interface - truy cập từ mọi nơi, expose API cần thiết. Mỗi lớp phục vụ mục đích kiến trúc cụ thể: private cho internal implementation, protected cho inheritance, package-private cho module organization, public cho API. Việc sử dụng đúng các lớp này tạo ra architecture rõ ràng, dễ bảo trì và bảo mật."
//   },
//   // Question 319
//   {
//     question: "What is the theoretical foundation of the 'has-a' relationship in object composition versus the 'is-a' relationship in inheritance, and how do these relationships differ in terms of coupling, flexibility, and their suitability for different design scenarios?",
//     options: {
//       A: "The 'has-a' relationship represents composition where objects contain other objects, creating loose coupling and high flexibility, while the 'is-a' relationship represents inheritance creating tight coupling through implementation dependency, with composition being preferable when flexibility and loose coupling are priorities",
//       B: "'Has-a' and 'is-a' relationships are identical in terms of coupling and flexibility",
//       C: "Inheritance always provides better flexibility than composition",
//       D: "Composition cannot be used to model relationships between objects"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "'Has-a' relationship (có một) biểu thị composition - object chứa các object khác, tạo loose coupling (liên kết lỏng) và high flexibility (linh hoạt cao) vì có thể thay đổi implementation của object được chứa mà không ảnh hưởng đến object chứa. 'Is-a' relationship (là một) biểu thị inheritance - tạo tight coupling (liên kết chặt) thông qua implementation dependency vì subclass phụ thuộc trực tiếp vào implementation của superclass. Composition phù hợp hơn khi cần flexibility và loose coupling - có thể thay đổi behavior bằng cách thay đổi object được chứa, không cần modify class chứa. Inheritance phù hợp khi có quan hệ 'is-a' thực sự và cần polymorphism. Nguyên tắc 'Favor composition over inheritance' khuyến khích sử dụng composition khi có thể để tránh tight coupling và fragile base class problems."
//   },
//   // Question 320
//   {
//     question: "In the theoretical framework of polymorphism, how do covariant return types and contravariant parameter types relate to method overriding, and what are the type safety implications of these variance concepts in inheritance hierarchies?",
//     options: {
//       A: "Covariant return types allow a derived method to return a subtype of the base method's return type, maintaining type safety, while contravariant parameters would allow a derived method to accept a supertype, but Java does not support contravariant parameters in overriding, requiring exact parameter type matching to ensure type safety",
//       B: "Both covariant return types and contravariant parameters are fully supported in Java method overriding",
//       C: "Java does not support any form of variance in method overriding, requiring exact type matching for both return types and parameters",
//       D: "Variance concepts only apply to generic types, not to method overriding"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Covariant return types (kiểu trả về hiệp biến) cho phép derived method return subtype của return type trong base method (ví dụ: base return Animal, derived return Dog extends Animal), vẫn maintain type safety vì Dog là Animal. Contravariant parameters (tham số nghịch biến) sẽ cho phép derived method accept supertype của parameter type trong base method, nhưng Java không hỗ trợ contravariant parameters trong overriding - phải match exact parameter types để ensure type safety. Nếu cho phép contravariant parameters, có thể dẫn đến type safety issues khi client code pass subtype nhưng method expect supertype. Java's design choice đảm bảo type safety: covariant return types an toàn vì return value có thể được treat như supertype, nhưng contravariant parameters không an toàn vì có thể pass type không tương thích."
//   },
//   // Question 321
//   {
//     question: "What is the theoretical relationship between encapsulation and data integrity in object-oriented programming, and how do encapsulation mechanisms prevent invalid state transitions and maintain object invariants throughout an object's lifecycle?",
//     options: {
//       A: "Encapsulation protects data integrity by controlling access to internal state through access modifiers and methods, allowing validation logic in setters to prevent invalid state transitions and ensuring object invariants are maintained through controlled state changes",
//       B: "Encapsulation has no relationship to data integrity, which is handled separately through validation frameworks",
//       C: "Data integrity can only be maintained through public access to all fields, allowing external validation",
//       D: "Encapsulation prevents all state changes, making objects immutable by default"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) bảo vệ data integrity (tính toàn vẹn dữ liệu) bằng cách kiểm soát truy cập vào internal state thông qua access modifiers và methods. Validation logic trong setters có thể prevent invalid state transitions - kiểm tra giá trị trước khi gán, reject giá trị không hợp lệ. Object invariants (bất biến) được maintain thông qua controlled state changes - chỉ cho phép thay đổi state thông qua methods có validation, không cho phép direct access. Ví dụ: setter có thể validate age >= 0, balance >= 0, v.v. Điều này đảm bảo object luôn ở trạng thái hợp lệ trong suốt lifecycle, ngăn chặn corruption và invalid states. Public access sẽ phá vỡ encapsulation và không thể đảm bảo integrity."
//   },
//   // Question 322
//   {
//     question: "Explain the theoretical concept of inheritance hierarchies and their depth, and discuss the trade-offs between deep inheritance hierarchies versus shallow hierarchies in terms of code reuse, maintainability, and the potential for fragile base class problems.",
//     options: {
//       A: "Deep inheritance hierarchies provide extensive code reuse but increase coupling and fragile base class risks, while shallow hierarchies reduce these risks but may require more code duplication, with optimal design balancing hierarchy depth against maintainability and coupling concerns",
//       B: "Deeper inheritance hierarchies are always better, providing maximum code reuse with no drawbacks",
//       C: "Shallow hierarchies are always preferable, with deep hierarchies being an anti-pattern in all cases",
//       D: "Inheritance hierarchy depth has no impact on code quality or maintainability"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Deep inheritance hierarchies (hệ thống kế thừa sâu) cung cấp extensive code reuse nhưng tăng coupling và fragile base class risks - thay đổi ở base class có thể ảnh hưởng đến nhiều subclasses. Shallow hierarchies (hệ thống nông) giảm risks này nhưng có thể require more code duplication. Optimal design cân bằng hierarchy depth với maintainability và coupling concerns. Quy tắc chung: giữ hierarchy càng nông càng tốt (thường 2-3 levels), tránh deep hierarchies (>4-5 levels) vì chúng khó maintain, test, và debug. Khi cần deep hierarchy, consider composition hoặc mixins. Fragile base class problem xảy ra khi base class changes break subclasses unexpectedly, đặc biệt nguy hiểm với deep hierarchies vì impact lan rộng."
//   },
//   // Question 323
//   {
//     question: "What is the theoretical foundation of method hiding versus method overriding in Java, and how does the distinction between static methods and instance methods affect polymorphism and method resolution in inheritance hierarchies?",
//     options: {
//       A: "Method hiding occurs with static methods where a subclass defines a static method with the same signature, resolved at compile-time based on reference type, while method overriding occurs with instance methods, resolved at runtime based on object type, with only instance method overriding supporting true polymorphism",
//       B: "Method hiding and method overriding work identically for both static and instance methods",
//       C: "Static methods support runtime polymorphism just like instance methods",
//       D: "Method hiding is not possible in Java, only method overriding exists"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method hiding (ẩn method) xảy ra với static methods - subclass define static method cùng signature với superclass, resolved tại compile-time dựa trên reference type (không phải object type). Method overriding (ghi đè method) xảy ra với instance methods - resolved tại runtime dựa trên object type. Chỉ instance method overriding support true polymorphism (đa hình thực sự) vì method được chọn dựa trên object type thực tế. Static methods không có polymorphism - method được chọn dựa trên reference type tại compile-time. Đây là lý do tại sao static methods không nên được gọi qua instance reference (nên dùng ClassName.method()). Method hiding với static methods là compile-time polymorphism, method overriding với instance methods là runtime polymorphism."
//   },
//   // Question 324
//   {
//     question: "In the context of abstraction, what is the theoretical difference between procedural abstraction and data abstraction, and how do these concepts manifest in object-oriented programming through methods and classes respectively?",
//     options: {
//       A: "Procedural abstraction hides the implementation details of operations or algorithms, manifesting as methods in OOP, while data abstraction hides the internal representation and structure of data, manifesting as classes that encapsulate data with associated operations, with both working together to create complete abstractions",
//       B: "Procedural and data abstraction are identical concepts with no distinction",
//       C: "Data abstraction only applies to primitive types, not to classes",
//       D: "Procedural abstraction cannot be achieved in object-oriented programming"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Procedural abstraction (trừu tượng hóa thủ tục) ẩn implementation details của operations hoặc algorithms, manifesting như methods trong OOP - client chỉ cần biết method làm gì, không cần biết làm như thế nào. Data abstraction (trừu tượng hóa dữ liệu) ẩn internal representation và structure của data, manifesting như classes encapsulate data với associated operations - client chỉ cần biết interface, không cần biết data được store như thế nào. Cả hai làm việc cùng nhau để tạo complete abstractions - methods (procedural) operate on data (data abstraction) được encapsulate trong classes. Ví dụ: Stack class ẩn cách implement (array/list), và push/pop methods ẩn algorithm details. Sự kết hợp này tạo ra abstraction mạnh mẽ và flexible."
//   },
//   // Question 325
//   {
//     question: "What are the theoretical mechanisms by which encapsulation enables information hiding, and how does the principle of least privilege apply to access modifier selection in designing secure and maintainable object-oriented systems?",
//     options: {
//       A: "Encapsulation enables information hiding by restricting access through modifiers, and the principle of least privilege requires granting minimum necessary access, meaning members should be private by default and elevated to protected or public only when external access is genuinely required, minimizing attack surface and coupling",
//       B: "All members should be public to maximize flexibility and ease of use",
//       C: "The principle of least privilege does not apply to object-oriented programming",
//       D: "Information hiding and least privilege are conflicting principles that cannot be used together"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) enable information hiding (ẩn thông tin) bằng cách restrict access thông qua modifiers. Principle of least privilege (nguyên tắc đặc quyền tối thiểu) yêu cầu grant minimum necessary access - members nên là private by default và chỉ elevate lên protected hoặc public khi external access thực sự cần thiết. Điều này minimize attack surface (bề mặt tấn công) và coupling (liên kết). Private by default đảm bảo chỉ expose những gì cần thiết, giảm risk của unauthorized access và unintended dependencies. Protected chỉ khi cần inheritance, public chỉ khi cần external API. Approach này tạo ra systems an toàn hơn, dễ maintain hơn, và có clear boundaries. Vi phạm principle này (public everything) tạo tight coupling và security risks."
//   },
//   // Question 326
//   {
//     question: "Explain the theoretical relationship between inheritance and specialization in object-oriented design, and how does the concept of substitutability ensure that specialized classes can be used wherever their base classes are expected without breaking client code expectations?",
//     options: {
//       A: "Inheritance enables specialization where derived classes are specialized versions of base classes, and substitutability requires that specialized classes maintain the behavioral contract of base classes, allowing them to be used interchangeably with base classes while potentially providing enhanced or specialized behavior",
//       B: "Specialization and substitutability are unrelated concepts in inheritance",
//       C: "Specialized classes cannot be used as substitutes for base classes under any circumstances",
//       D: "Substitutability only applies to interfaces, not to class inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable specialization (chuyên biệt hóa) - derived classes là specialized versions của base classes, có thể có thêm features hoặc behavior đặc biệt. Substitutability (khả năng thay thế) yêu cầu specialized classes maintain behavioral contract của base classes - có thể được dùng interchangeably với base classes mà không break client code expectations. Điều này đảm bảo Liskov Substitution Principle - subclass có thể thay thế superclass mà không thay đổi correctness của program. Specialized classes có thể provide enhanced behavior (behavior tốt hơn) hoặc specialized behavior (behavior đặc biệt) nhưng không được violate contract. Ví dụ: Dog extends Animal, có thể thêm behavior như bark() nhưng phải maintain contract của Animal (eat(), sleep()). Client code expecting Animal có thể dùng Dog mà không có vấn đề."
//   },
//   // Question 327
//   {
//     question: "What is the theoretical foundation of polymorphism as it relates to the concept of 'one interface, multiple implementations,' and how does this principle enable the design of flexible systems that can work with different implementations without knowing their specific types?",
//     options: {
//       A: "Polymorphism enables 'one interface, multiple implementations' where client code depends on an interface or base class, and different classes provide different implementations of that interface, allowing the system to work with any implementation without knowing the specific type, creating flexibility and extensibility",
//       B: "Polymorphism requires knowing the specific type of each object to function correctly",
//       C: "'One interface, multiple implementations' can only be achieved through inheritance, not through interfaces",
//       D: "Polymorphism and multiple implementations are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable 'one interface, multiple implementations' (một giao diện, nhiều triển khai) - client code phụ thuộc vào interface hoặc base class, và different classes provide different implementations của interface đó. System có thể work với any implementation mà không cần biết specific type, tạo flexibility và extensibility. Client code chỉ cần biết interface, không cần biết implementation cụ thể. Ví dụ: List interface có ArrayList, LinkedList implementations - client code dùng List interface có thể work với cả hai mà không cần biết loại nào. Điều này cho phép swap implementations, add new implementations, mà không cần modify client code. Đây là foundation của nhiều design patterns (Strategy, Factory, v.v.) và là core principle của flexible, maintainable software design."
//   },
//   // Question 328
//   {
//     question: "In the theoretical framework of encapsulation, how do getter and setter methods serve as accessor and mutator patterns, and what are the design considerations for when to provide read-only access, write-only access, or read-write access to encapsulated data?",
//     options: {
//       A: "Getters provide read access (accessors) and setters provide write access (mutators), with design considerations including: read-only access (only getter) for immutable or computed values, write-only access (only setter) for configuration that doesn't need reading, and read-write access (both) for mutable state, with the choice depending on the data's role and mutability requirements",
//       B: "All encapsulated data must have both getters and setters without exception",
//       C: "Getters and setters are optional and provide no real benefit over direct field access",
//       D: "Read-only and write-only access patterns are not possible in object-oriented programming"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Getters (accessors) provide read access, setters (mutators) provide write access. Design considerations: read-only access (chỉ getter) cho immutable values (final fields) hoặc computed values (calculated từ other fields) - không cần setter vì giá trị không thay đổi hoặc được tính toán. Write-only access (chỉ setter) cho configuration không cần đọc - hiếm khi dùng. Read-write access (cả hai) cho mutable state cần cả đọc và ghi. Choice phụ thuộc vào role và mutability requirements của data. Ví dụ: ID field có thể read-only (chỉ getter), password có thể write-only trong một số cases, name có thể read-write. Không phải tất cả data đều cần cả getter và setter - chỉ provide những gì cần thiết theo principle of least privilege. Điều này tạo ra better encapsulation và prevent unintended modifications."
//   },
//   // Question 329
//   {
//     question: "What is the theoretical relationship between abstract classes and concrete classes in terms of their roles in inheritance hierarchies, and how do abstract methods versus concrete methods contribute to the balance between providing common implementation and requiring specialized implementation in derived classes?",
//     options: {
//       A: "Abstract classes provide a partial implementation with some concrete methods for shared behavior and abstract methods that must be implemented by derived classes, while concrete classes provide complete implementation, with abstract methods forcing specialization and concrete methods enabling code reuse",
//       B: "Abstract classes and concrete classes are functionally identical with no meaningful differences",
//       C: "Abstract classes cannot contain any concrete methods, only abstract methods",
//       D: "Concrete classes cannot be used in inheritance hierarchies"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstract classes (lớp trừu tượng) provide partial implementation - có một số concrete methods cho shared behavior và abstract methods phải được implement bởi derived classes. Concrete classes (lớp cụ thể) provide complete implementation. Abstract methods force specialization - derived classes phải provide implementation riêng, đảm bảo mỗi subclass có behavior đặc biệt. Concrete methods enable code reuse - shared behavior được implement một lần trong abstract class, tất cả subclasses inherit. Sự cân bằng này cho phép: code reuse thông qua concrete methods, và forced specialization thông qua abstract methods. Ví dụ: Animal abstract class có concrete method breathe() (shared) và abstract method makeSound() (specialized). Điều này tạo ra inheritance hierarchy linh hoạt - vừa reuse code, vừa đảm bảo specialization."
//   },
//   // Question 330
//   {
//     question: "Explain the theoretical concept of method resolution order in polymorphism, and how does the Java Virtual Machine determine which method implementation to execute when dealing with method overriding across multiple levels of inheritance, including the role of virtual method tables.",
//     options: {
//       A: "Method resolution in polymorphism follows the inheritance hierarchy from the actual object's class upward to parent classes, with the JVM using virtual method tables (vtables) that store method pointers for each class, allowing efficient lookup of the most specific override at runtime based on the object's actual type",
//       B: "Method resolution always uses the reference type, ignoring the actual object type completely",
//       C: "The JVM randomly selects which method to call when multiple overrides exist",
//       D: "Virtual method tables are not used in Java, with method resolution being purely compile-time"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method resolution trong polymorphism follow inheritance hierarchy từ actual object's class lên parent classes. JVM sử dụng virtual method tables (vtables) - mỗi class có bảng chứa pointers đến method implementations. JVM lookup method từ class của object thực tế, nếu không tìm thấy thì lên parent class, cho đến khi tìm thấy implementation. Vtable cho phép efficient lookup - O(1) complexity thay vì traverse hierarchy mỗi lần. Method được chọn là most specific override - implementation từ class cụ thể nhất trong hierarchy. Điều này đảm bảo runtime polymorphism hoạt động chính xác - method của subclass được gọi thay vì method của superclass, ngay cả khi reference có kiểu superclass. Vtable là implementation detail của JVM để optimize performance của dynamic dispatch."
//   },
//   // Question 331
//   {
//     question: "What is the theoretical foundation of the relationship between encapsulation and modularity in object-oriented design, and how does proper encapsulation contribute to creating modular systems where components can be developed, tested, and maintained independently?",
//     options: {
//       A: "Encapsulation creates clear boundaries between components by hiding implementation details and exposing only necessary interfaces, enabling modularity where each module (class) is self-contained with well-defined interfaces, allowing independent development, testing, and maintenance without affecting other modules",
//       B: "Encapsulation and modularity are unrelated concepts that cannot work together",
//       C: "Modularity requires all components to expose all their internal details for maximum flexibility",
//       D: "Encapsulation prevents modularity by hiding information needed by other modules"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo clear boundaries giữa components bằng cách ẩn implementation details và chỉ expose necessary interfaces. Điều này enable modularity (tính mô-đun) - mỗi module (class) là self-contained với well-defined interfaces. Modules có thể được develop, test, và maintain independently mà không affect other modules vì chúng chỉ depend vào interfaces, không phải implementations. Clear boundaries ngăn chặn tight coupling và cho phép thay đổi implementation bên trong module mà không ảnh hưởng đến modules khác. Đây là foundation của modular architecture - systems được chia thành independent, interchangeable modules với clear contracts. Encapsulation không prevent modularity mà enable nó bằng cách tạo boundaries rõ ràng."
//   },
//   // Question 332
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of the inheritance chain and method lookup, and how does the depth of the inheritance chain impact performance, maintainability, and the complexity of understanding the class hierarchy?",
//     options: {
//       A: "The inheritance chain represents the path from a class to its root ancestor, and method lookup traverses this chain to find method implementations, with deeper chains increasing lookup complexity, making code harder to understand and maintain, and potentially impacting performance, though modern JVMs optimize this through vtables",
//       B: "Inheritance chain depth has no impact on any aspect of system design or performance",
//       C: "Deeper inheritance chains always improve performance and maintainability",
//       D: "Method lookup does not traverse the inheritance chain, always using the immediate class"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance chain (chuỗi kế thừa) là path từ một class đến root ancestor (Object trong Java). Method lookup traverse chain này để tìm method implementations - bắt đầu từ class hiện tại, nếu không tìm thấy thì lên parent class, tiếp tục đến root. Deeper chains (chuỗi sâu hơn) increase lookup complexity - phải traverse nhiều levels, làm code khó understand và maintain hơn vì phải trace qua nhiều classes. Performance có thể bị impact mặc dù modern JVMs optimize thông qua vtables (O(1) lookup). Deep chains cũng tăng risk của fragile base class problem - thay đổi ở base class ảnh hưởng đến nhiều subclasses. Shallow chains (2-3 levels) thường tốt hơn cho maintainability và clarity. Optimal design balance giữa code reuse và chain depth."
//   },
//   // Question 333
//   {
//     question: "What is the theoretical relationship between abstraction levels and system complexity in object-oriented design, and how do appropriate abstraction levels help manage complexity by hiding unnecessary details while exposing essential information for system interaction?",
//     options: {
//       A: "Appropriate abstraction levels manage complexity by presenting simplified views that hide implementation details while exposing essential interfaces, with each abstraction level serving a specific purpose and audience, reducing cognitive load and enabling developers to work at appropriate levels of detail",
//       B: "Higher abstraction levels always increase complexity by adding layers",
//       C: "Abstraction has no relationship to complexity management",
//       D: "All abstraction levels should expose all details for maximum transparency"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Appropriate abstraction levels (mức trừu tượng phù hợp) manage complexity bằng cách present simplified views ẩn implementation details nhưng expose essential interfaces. Mỗi abstraction level serve specific purpose và audience - high-level abstractions cho architects và designers, low-level cho implementers. Điều này reduce cognitive load (tải nhận thức) và enable developers work at appropriate levels of detail - không cần biết tất cả chi tiết, chỉ cần biết những gì cần thiết cho task hiện tại. Abstraction levels tạo hierarchy of understanding - từ general đến specific. Ví dụ: interface abstraction cho client code, class abstraction cho implementation, method abstraction cho algorithms. Quá nhiều hoặc quá ít abstraction đều có vấn đề - cần balance để manage complexity effectively."
//   },
//   // Question 334
//   {
//     question: "Explain the theoretical concept of encapsulation as a mechanism for achieving information hiding, and how does the principle of 'need-to-know' apply to determining what information should be exposed versus hidden in a well-designed class interface?",
//     options: {
//       A: "Encapsulation achieves information hiding by restricting access to internal details, and the 'need-to-know' principle requires exposing only information necessary for clients to use the class effectively, hiding all implementation details and internal state that clients don't need to know, creating clean and stable interfaces",
//       B: "The 'need-to-know' principle requires exposing all information for maximum transparency",
//       C: "Information hiding and 'need-to-know' are conflicting principles",
//       D: "All class members should be hidden, with no public interface needed"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) achieve information hiding (ẩn thông tin) bằng cách restrict access đến internal details. 'Need-to-know' principle (nguyên tắc cần biết) yêu cầu expose chỉ information cần thiết cho clients sử dụng class effectively, ẩn tất cả implementation details và internal state mà clients không cần biết. Điều này tạo clean và stable interfaces - clients chỉ depend vào những gì cần thiết, không depend vào implementation details có thể thay đổi. Public interface nên minimal và focused - chỉ expose methods cần thiết cho intended use cases. Internal state, helper methods, và implementation details nên private. Approach này tạo loose coupling, dễ maintain, và stable APIs. Vi phạm principle này (expose quá nhiều) tạo tight coupling và fragile dependencies."
//   },
//   // Question 335
//   {
//     question: "What is the theoretical foundation of polymorphism as it enables the design of extensible and maintainable systems, and how does the combination of late binding and interface-based programming create systems that can evolve without breaking existing code?",
//     options: {
//       A: "Polymorphism enables extensibility through late binding where method calls are resolved at runtime, combined with interface-based programming where code depends on abstractions rather than concrete types, allowing new implementations to be added without modifying existing code that depends on the abstraction",
//       B: "Polymorphism requires early binding and concrete type dependencies for proper functionality",
//       C: "Late binding and interface-based programming are unrelated to system extensibility",
//       D: "Extensible systems cannot be achieved through polymorphism, requiring code modification for all changes"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable extensibility (khả năng mở rộng) thông qua late binding (liên kết muộn) - method calls được resolve tại runtime dựa trên object type thực tế. Kết hợp với interface-based programming (lập trình dựa trên giao diện) - code depend vào abstractions (interfaces/base classes) thay vì concrete types. Điều này allow new implementations được add mà không cần modify existing code depend vào abstraction. Client code depend vào interface, không biết implementation cụ thể, nên có thể work với bất kỳ implementation nào. Khi add implementation mới, chỉ cần implement interface, existing code tự động work với nó. Đây là foundation của Open-Closed Principle và nhiều design patterns. Systems có thể evolve (phát triển) mà không break existing code vì dependencies dựa trên stable abstractions."
//   },
//   // Question 336
//   {
//     question: "In the context of inheritance hierarchies, what is the theoretical concept of the inheritance diamond problem, and how does Java's single inheritance model prevent this problem while still allowing multiple interface implementation to achieve similar flexibility?",
//     options: {
//       A: "The diamond problem occurs when a class inherits from two classes that share a common ancestor, creating ambiguity about which implementation to use, and Java's single inheritance prevents this by allowing only one parent class, while multiple interface implementation provides flexibility without the diamond problem since interfaces contain no implementation to conflict",
//       B: "Java supports multiple inheritance for classes, making the diamond problem a common issue",
//       C: "The diamond problem only occurs with interfaces, not with classes",
//       D: "Java's single inheritance model prevents all forms of code reuse and flexibility"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Diamond problem (vấn đề kim cương) xảy ra khi một class inherit từ hai classes có common ancestor, tạo ambiguity về implementation nào được dùng. Java's single inheritance prevent vấn đề này bằng cách chỉ allow một parent class - một class chỉ extend một class, không có multiple inheritance. Multiple interface implementation provide flexibility mà không có diamond problem vì interfaces không chứa implementation để conflict - nếu hai interfaces có method signature giống nhau, class chỉ cần provide một implementation. Từ Java 8, interfaces có default methods, nhưng nếu conflict xảy ra, class phải override explicitly. Single inheritance trade-off: prevent diamond problem nhưng limit flexibility so với multiple inheritance. Multiple interface implementation compensate bằng cách allow 'can-do' relationships (một class có thể implement nhiều interfaces) mà không có implementation conflicts."
//   },
//   // Question 337
//   {
//     question: "What is the theoretical relationship between encapsulation and the concept of object state, and how do encapsulation mechanisms ensure that object state transitions occur only through controlled, validated pathways that maintain object invariants?",
//     options: {
//       A: "Encapsulation protects object state by restricting direct access to state variables, requiring all state changes to occur through controlled methods (like setters) that can validate inputs and enforce invariants, ensuring state transitions are always valid and object integrity is maintained",
//       B: "Encapsulation prevents all state changes, making objects completely immutable",
//       C: "State changes should always occur through direct field access for maximum performance",
//       D: "Object state and encapsulation are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) protect object state bằng cách restrict direct access đến state variables. Tất cả state changes phải occur through controlled methods (như setters) có thể validate inputs và enforce invariants (bất biến). Điều này ensure state transitions luôn valid và object integrity được maintain. Setters có thể check preconditions (điều kiện tiên quyết), validate values, và maintain invariants trước khi thay đổi state. Ví dụ: setAge() có thể validate age >= 0, setBalance() có thể check balance >= 0. Direct field access sẽ bypass validation và có thể tạo invalid states. Encapsulation không prevent state changes mà control chúng - chỉ allow valid changes. Điều này đảm bảo objects luôn ở valid states và invariants được preserve."
//   },
//   // Question 338
//   {
//     question: "Explain the theoretical concept of method overriding contracts in inheritance, and how do the rules regarding method signatures, return types, access modifiers, and exceptions create a contract that ensures substitutability while allowing specialized implementations?",
//     options: {
//       A: "Method overriding contracts require identical method signatures, allow covariant return types, require equal or broader access (derived method cannot be more restrictive), and require equal or narrower exceptions (derived cannot throw broader checked exceptions), creating a contract that ensures derived classes can substitute base classes while providing specialized behavior",
//       B: "Method overriding allows complete freedom to change signatures, return types, access modifiers, and exceptions without any constraints",
//       C: "Overriding contracts only apply to method names, with all other aspects being freely changeable",
//       D: "Method overriding contracts prevent any form of specialization, requiring identical implementations"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method overriding contracts (hợp đồng ghi đè method) yêu cầu: identical method signatures (tên, parameters, parameter types), allow covariant return types (derived có thể return subtype), require equal or broader access (derived method không thể restrictive hơn - public method không thể override thành private), và require equal or narrower exceptions (derived không thể throw broader checked exceptions). Contract này ensure derived classes có thể substitute base classes (Liskov Substitution) trong khi provide specialized behavior. Vi phạm contract sẽ break substitutability - client code expect behavior từ base class có thể không work với derived class. Contract balance giữa flexibility (cho phép specialization) và safety (đảm bảo substitutability). Đây là foundation của polymorphism và inheritance design."
//   },
//   // Question 339
//   {
//     question: "What are the theoretical mechanisms by which abstraction reduces cognitive complexity in software design, and how do different levels of abstraction (class, method, system) work together to create comprehensible and maintainable software architectures?",
//     options: {
//       A: "Abstraction reduces cognitive complexity by hiding irrelevant details at each level, with class-level abstraction hiding implementation details, method-level abstraction hiding algorithmic details, and system-level abstraction hiding component interactions, working together to allow developers to understand and work with appropriate levels of detail without being overwhelmed by complexity",
//       B: "Abstraction increases complexity by adding layers that must be understood",
//       C: "Only one level of abstraction can exist in a system, with other levels being unnecessary",
//       D: "Cognitive complexity and abstraction are unrelated concepts in software design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) reduce cognitive complexity (độ phức tạp nhận thức) bằng cách ẩn irrelevant details ở mỗi level. Class-level abstraction ẩn implementation details - developers chỉ cần biết interface, không cần biết implementation. Method-level abstraction ẩn algorithmic details - chỉ cần biết method làm gì, không cần biết làm như thế nào. System-level abstraction ẩn component interactions - chỉ cần biết components communicate như thế nào, không cần biết chi tiết internal. Các levels work together để allow developers understand và work với appropriate levels of detail mà không bị overwhelmed bởi complexity. Developers có thể focus vào level relevant cho task hiện tại, ignore details ở other levels. Điều này tạo comprehensible và maintainable architectures - dễ understand, dễ modify, dễ extend."
//   },
//   // Question 340
//   {
//     question: "In the theoretical framework of object-oriented programming, what is the relationship between encapsulation and the principle of least knowledge (Law of Demeter), and how do these concepts work together to minimize coupling between objects?",
//     options: {
//       A: "Encapsulation provides the mechanism for information hiding, while the Law of Demeter restricts how objects can access other objects' internals, requiring objects to only talk to their immediate friends (direct collaborators), and together they minimize coupling by limiting knowledge of other objects' structures and reducing dependencies",
//       B: "Encapsulation and the Law of Demeter are conflicting principles that cannot be used together",
//       C: "The Law of Demeter requires objects to have full knowledge of all related objects' internals",
//       D: "Encapsulation prevents the Law of Demeter from being applied effectively"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) provide mechanism cho information hiding (ẩn thông tin). Law of Demeter (Luật Demeter) restrict cách objects access other objects' internals - objects chỉ nên talk to immediate friends (direct collaborators), không nên navigate qua chains of method calls (a.getB().getC().doSomething()). Together, chúng minimize coupling bằng cách limit knowledge của other objects' structures và reduce dependencies. Encapsulation ẩn internal structure, Law of Demeter prevent deep navigation vào structure đó. Ví dụ: thay vì a.getB().getC().doSomething(), nên có a.doSomething() delegate đến appropriate object. Điều này tạo loose coupling - objects chỉ depend vào direct collaborators, không depend vào internal structure của distant objects. Kết quả: systems dễ maintain, test, và modify vì changes ít propagate."
//   },
//   // Question 341
//   {
//     question: "What is the theoretical foundation of the relationship between inheritance and code organization in object-oriented systems, and how does inheritance hierarchy structure contribute to organizing related classes and managing their relationships in large-scale software projects?",
//     options: {
//       A: "Inheritance organizes code by creating hierarchical relationships that group related classes, with the hierarchy structure reflecting specialization relationships and shared characteristics, enabling systematic organization of classes and clear management of their relationships in large systems",
//       B: "Inheritance has no relationship to code organization, which is handled separately through package structures",
//       C: "Inheritance always makes code organization more difficult by creating complex dependencies",
//       D: "Code organization can only be achieved through composition, not through inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) organize code bằng cách tạo hierarchical relationships nhóm related classes lại với nhau. Hierarchy structure reflect specialization relationships và shared characteristics - classes có đặc điểm chung được group trong cùng hierarchy, classes specialized được organize như subclasses. Điều này enable systematic organization của classes và clear management của relationships trong large systems. Inheritance hierarchy tạo structure rõ ràng - từ general (base classes) đến specific (derived classes), giúp developers understand relationships và locate classes. Trong large-scale projects, inheritance hierarchy giúp organize hundreds hoặc thousands of classes theo logical structure. Tuy nhiên, cần balance - hierarchy quá sâu hoặc quá phẳng đều có vấn đề. Optimal organization combine inheritance hierarchy với package structure để tạo clear, maintainable codebase."
//   },
//   // Question 342
//   {
//     question: "Explain the theoretical concept of abstraction layers in object-oriented design, and how do different abstraction layers (high-level interfaces, mid-level classes, low-level implementations) work together to create systems that are both flexible and comprehensible?",
//     options: {
//       A: "Abstraction layers create levels of detail from high-level interfaces defining contracts, through mid-level classes providing structure, to low-level implementations providing details, with each layer serving different purposes and audiences, working together to create systems that balance flexibility through stable high-level abstractions with comprehensibility through appropriate detail exposure",
//       B: "All abstraction layers should expose the same level of detail for consistency",
//       C: "Abstraction layers are unnecessary and add complexity without benefits",
//       D: "Only one abstraction layer can exist in a system"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction layers (lớp trừu tượng) tạo levels of detail từ high-level interfaces định nghĩa contracts, qua mid-level classes provide structure, đến low-level implementations provide details. Mỗi layer serve different purposes và audiences - high-level cho architects và designers, mid-level cho developers, low-level cho implementers. Together, chúng create systems balance flexibility (thông qua stable high-level abstractions) với comprehensibility (thông qua appropriate detail exposure). High-level abstractions stable và flexible - clients depend vào chúng, implementations có thể change. Low-level implementations có thể optimize và change mà không affect high-level. Mid-level provide structure và organization. Developers có thể work ở appropriate layer - không cần biết tất cả details, chỉ cần biết layer relevant. Điều này tạo systems vừa flexible vừa comprehensible."
//   },
//   // Question 343
//   {
//     question: "What is the theoretical relationship between polymorphism and the concept of behavioral variation in object-oriented systems, and how does polymorphism enable objects of different types to respond differently to the same method call while maintaining a uniform interface?",
//     options: {
//       A: "Polymorphism enables behavioral variation where different classes implement the same interface or extend the same base class, each providing different implementations of methods, allowing objects of different types to respond differently to identical method calls while clients interact through a uniform interface, creating flexibility and extensibility",
//       B: "Polymorphism requires all objects to behave identically, preventing any behavioral variation",
//       C: "Behavioral variation can only be achieved through conditional statements, not through polymorphism",
//       D: "Polymorphism and behavioral variation are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable behavioral variation (biến đổi hành vi) - different classes implement same interface hoặc extend same base class, mỗi class provide different implementations của methods. Objects của different types có thể respond differently đến identical method calls trong khi clients interact through uniform interface. Ví dụ: Animal interface có makeSound() method, Dog và Cat implement khác nhau - dog.bark(), cat.meow(), nhưng client code gọi animal.makeSound() với uniform interface. Điều này create flexibility và extensibility - có thể add new types (new implementations) mà không modify client code. Client code depend vào interface, không biết implementation cụ thể, nên có thể work với any implementation. Đây là core mechanism của many design patterns và flexible system design."
//   },
//   // Question 344
//   {
//     question: "In the theoretical framework of encapsulation, what is the concept of access control and how do access modifiers create a security model for class members that protects internal implementation while allowing necessary external interaction?",
//     options: {
//       A: "Access control restricts visibility and modification of class members through access modifiers, creating a security model where private members are protected from external access, protected members allow inheritance-based access, and public members form the controlled interface, balancing protection of implementation with necessary external interaction",
//       B: "Access control prevents all external interaction, making classes completely isolated",
//       C: "Access modifiers have no security implications and are purely organizational",
//       D: "All members should be public to maximize accessibility and code reuse"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Access control (kiểm soát truy cập) restrict visibility và modification của class members thông qua access modifiers, tạo security model. Private members protected từ external access - chỉ truy cập trong cùng class, bảo vệ implementation details. Protected members allow inheritance-based access - truy cập trong cùng package và subclass, cho phép inheritance nhưng vẫn protect. Public members form controlled interface - truy cập từ mọi nơi, expose API cần thiết. Model này balance protection của implementation với necessary external interaction. Security model này prevent unauthorized access và unintended modifications, maintain data integrity, và create clear boundaries. Không phải tất cả members đều nên public - chỉ expose những gì cần thiết theo principle of least privilege. Điều này tạo secure, maintainable classes với clear interfaces."
//   },
//   // Question 345
//   {
//     question: "What are the theoretical foundations of the relationship between inheritance and the concept of code reuse, and what are the trade-offs between using inheritance for code reuse versus using composition, delegation, or other mechanisms?",
//     options: {
//       A: "Inheritance enables code reuse through the inheritance of methods and fields from parent classes, but creates tight coupling and fragile base class problems, while composition and delegation provide code reuse with loose coupling and greater flexibility, with the choice depending on whether a true 'is-a' relationship exists versus a 'has-a' or 'uses-a' relationship",
//       B: "Inheritance is the only mechanism for code reuse in object-oriented programming",
//       C: "Composition and delegation cannot provide code reuse, only inheritance can",
//       D: "Code reuse has no relationship to inheritance or composition"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable code reuse thông qua inheritance của methods và fields từ parent classes. Tuy nhiên, nó tạo tight coupling và fragile base class problems - subclass phụ thuộc chặt vào implementation của superclass, thay đổi ở superclass có thể break subclasses. Composition và delegation provide code reuse với loose coupling và greater flexibility - object chứa other objects và delegate tasks đến chúng, có thể thay đổi implementation mà không affect containing object. Choice phụ thuộc vào relationship type: 'is-a' relationship (thực sự) → inheritance, 'has-a' hoặc 'uses-a' relationship → composition/delegation. 'Favor composition over inheritance' là nguyên tắc quan trọng - chỉ dùng inheritance khi có 'is-a' relationship thực sự, không chỉ để code reuse. Composition provide better flexibility, testability, và maintainability trong nhiều cases."
//   },
//   // Question 346
//   {
//     question: "Explain the theoretical concept of method binding in polymorphism, and how do the differences between early binding (static binding) and late binding (dynamic binding) impact system design, performance, and flexibility?",
//     options: {
//       A: "Method binding determines when and how method calls are resolved, with early binding resolving at compile-time based on reference types providing performance benefits but less flexibility, while late binding resolves at runtime based on object types providing flexibility and extensibility with slight performance overhead, with the choice impacting system design trade-offs between performance and flexibility",
//       B: "Early and late binding are identical mechanisms with no differences",
//       C: "Late binding always provides better performance than early binding",
//       D: "Method binding has no impact on system design or performance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method binding (liên kết method) determine khi nào và như thế nào method calls được resolve. Early binding (static binding) resolve tại compile-time dựa trên reference types - compiler biết method nào được gọi, provide performance benefits (không cần lookup) nhưng less flexibility (không thể change behavior tại runtime). Late binding (dynamic binding) resolve tại runtime dựa trên object types - JVM determine method tại runtime, provide flexibility và extensibility (có thể change behavior) với slight performance overhead (cần lookup trong vtable). Choice impact system design trade-offs giữa performance và flexibility. Overloaded methods use early binding, overridden methods use late binding. Design decisions: cần flexibility và extensibility → late binding (polymorphism), cần performance → early binding (overloading). Modern JVMs optimize late binding through vtables, minimizing overhead."
//   },
//   // Question 347
//   {
//     question: "What is the theoretical relationship between abstraction and the concept of generalization in object-oriented design, and how does abstraction enable the creation of general solutions that can be specialized for specific use cases?",
//     options: {
//       A: "Abstraction enables generalization by identifying common characteristics and behaviors shared across multiple specific cases, creating general abstractions (interfaces or base classes) that capture essential features, which can then be specialized through inheritance or implementation to create specific solutions for particular use cases",
//       B: "Abstraction prevents generalization by focusing only on specific details",
//       C: "Generalization and specialization are unrelated to abstraction",
//       D: "Abstraction can only work with specific implementations, not with general solutions"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) enable generalization (tổng quát hóa) bằng cách identify common characteristics và behaviors shared across multiple specific cases. Tạo general abstractions (interfaces hoặc base classes) capture essential features - những gì common và important, ignore specific details. Abstractions này có thể được specialized thông qua inheritance hoặc implementation để create specific solutions cho particular use cases. Process: identify commonalities → create abstraction → specialize for specific cases. Ví dụ: Vehicle abstraction (general) có Car, Truck, Motorcycle implementations (specific). Generalization tạo reusable abstractions, specialization tạo concrete solutions. Abstraction balance giữa general (reusable) và specific (useful) - quá general thì không useful, quá specific thì không reusable. Optimal abstraction level capture essential features mà vẫn allow meaningful specialization."
//   },
//   // Question 348
//   {
//     question: "In the context of encapsulation, what is the theoretical concept of data integrity and how do encapsulation mechanisms ensure that objects maintain valid states throughout their lifecycle by controlling how state can be accessed and modified?",
//     options: {
//       A: "Data integrity ensures objects remain in valid states, and encapsulation mechanisms protect integrity by controlling access through access modifiers and validation in methods, ensuring state changes occur only through controlled pathways that validate inputs and maintain invariants, preventing invalid states from being created",
//       B: "Data integrity can only be maintained through immutable objects that never change state",
//       C: "Encapsulation has no relationship to data integrity, which is handled by external validation",
//       D: "Data integrity requires all fields to be public for maximum transparency and validation"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Data integrity (tính toàn vẹn dữ liệu) ensure objects remain trong valid states. Encapsulation mechanisms protect integrity bằng cách control access thông qua access modifiers và validation trong methods. State changes chỉ occur through controlled pathways validate inputs và maintain invariants (bất biến), prevent invalid states được tạo. Private fields không thể access trực tiếp, chỉ thông qua methods có validation. Setters có thể check preconditions, validate values, reject invalid inputs. Getters có thể return computed values hoặc validated data. Điều này ensure objects luôn ở valid states - không thể set age = -5, balance < 0, v.v. Invalid states không thể được tạo vì không có pathway để tạo chúng. Encapsulation không require immutability - mutable objects vẫn có thể maintain integrity thông qua controlled modifications. Public fields sẽ break integrity vì không có control."
//   },
//   // Question 349
//   {
//     question: "What is the theoretical foundation of the relationship between polymorphism and the design of pluggable, extensible architectures, and how does polymorphism enable systems where new components can be added without modifying existing code?",
//     options: {
//       A: "Polymorphism enables pluggable architectures by allowing code to depend on abstractions rather than concrete types, so new components implementing those abstractions can be plugged in without modifying existing code that depends on the abstraction, creating extensible systems where functionality can be added through new implementations rather than code changes",
//       B: "Polymorphism requires modifying existing code to add new components",
//       C: "Pluggable architectures can only be achieved through configuration, not through polymorphism",
//       D: "Polymorphism and extensibility are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable pluggable architectures (kiến trúc có thể cắm) bằng cách allow code depend vào abstractions thay vì concrete types. New components implement những abstractions đó có thể được plug in mà không cần modify existing code depend vào abstraction. Điều này create extensible systems - functionality có thể được add thông qua new implementations thay vì code changes. Process: define abstraction (interface/base class) → existing code depend vào abstraction → new components implement abstraction → plug in without modification. Ví dụ: Plugin architecture - define Plugin interface, existing system depend vào Plugin, new plugins implement interface và plug in. Đây là foundation của Open-Closed Principle và many design patterns (Strategy, Factory, Plugin, v.v.). Systems có thể evolve và extend mà không break existing functionality, tạo maintainable và flexible architectures."
//   },
//   // Question 350
//   {
//     question: "Explain the theoretical concept of inheritance as a mechanism for specialization and generalization in object-oriented design, and how does the inheritance hierarchy reflect both the generalization of common features in base classes and the specialization of unique features in derived classes?",
//     options: {
//       A: "Inheritance enables both generalization by extracting common features into base classes that represent shared characteristics, and specialization by allowing derived classes to add unique features and override behaviors, with the inheritance hierarchy reflecting this dual nature where base classes generalize and derived classes specialize",
//       B: "Inheritance only supports generalization, with specialization being impossible",
//       C: "Inheritance only supports specialization, with generalization being handled separately",
//       D: "Generalization and specialization are conflicting goals that cannot be achieved through inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable cả generalization (tổng quát hóa) và specialization (chuyên biệt hóa). Generalization: extract common features vào base classes represent shared characteristics - những gì common across multiple classes được move lên base class. Specialization: derived classes add unique features và override behaviors - những gì specific cho mỗi class được implement trong derived class. Inheritance hierarchy reflect dual nature này: base classes generalize (chứa common features), derived classes specialize (chứa unique features). Ví dụ: Animal base class generalize common features (breathe, eat), Dog và Cat specialize với unique features (bark, meow). Hierarchy tạo structure từ general đến specific, enable code reuse (generalization) và flexibility (specialization). Đây là core mechanism của inheritance - vừa reuse code, vừa allow customization."
//   },
//   // Question 351
//   {
//     question: "What is the theoretical relationship between encapsulation and the concept of interface stability in object-oriented design, and how does proper encapsulation contribute to creating stable interfaces that can evolve without breaking client code?",
//     options: {
//       A: "Encapsulation creates stable interfaces by hiding implementation details, allowing the internal implementation to change without affecting the public interface, so client code depending on the interface remains unaffected by implementation changes, enabling evolution and maintenance without breaking existing functionality",
//       B: "Encapsulation prevents interface evolution by locking implementations in place",
//       C: "Interface stability requires exposing all implementation details for maximum transparency",
//       D: "Encapsulation and interface stability are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo stable interfaces bằng cách ẩn implementation details. Internal implementation có thể change mà không affect public interface, nên client code depend vào interface remain unaffected bởi implementation changes. Điều này enable evolution và maintenance mà không break existing functionality. Stable interface là contract giữa class và clients - clients depend vào interface, không phải implementation. Khi implementation change (optimize, refactor, fix bugs), interface vẫn giữ nguyên, clients không cần change. Đây là foundation của backward compatibility và maintainable systems. Encapsulation không prevent evolution mà enable nó - implementation có thể evolve freely trong boundaries của interface. Public interface nên minimal và stable, implementation có thể change để improve performance, fix bugs, hoặc add features."
//   },
//   // Question 352
//   {
//     question: "In the theoretical framework of polymorphism, what is the concept of type substitutability and how does it ensure that objects of derived types can be used wherever objects of base types are expected, maintaining system correctness while enabling flexibility?",
//     options: {
//       A: "Type substitutability means derived types can replace base types in any context where the base type is expected, requiring that derived types maintain the behavioral contract of base types (Liskov Substitution Principle), ensuring system correctness while allowing specialized implementations that enhance or extend base behavior",
//       B: "Type substitutability allows any type to replace any other type without constraints",
//       C: "Derived types can never substitute base types, requiring explicit type conversion",
//       D: "Substitutability only applies to interfaces, not to class inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Type substitutability (khả năng thay thế kiểu) có nghĩa derived types có thể replace base types trong any context mà base type được expect. Điều này require derived types maintain behavioral contract của base types (Liskov Substitution Principle) - derived class phải có thể thay thế base class mà không thay đổi correctness của program. Điều này ensure system correctness trong khi allow specialized implementations enhance hoặc extend base behavior. Ví dụ: List<Animal> có thể chứa Dog và Cat objects vì chúng là Animal. Client code expect Animal có thể work với Dog hoặc Cat. Substitutability enable polymorphism - code depend vào base type có thể work với any derived type. Violation của substitutability (derived class break contract) sẽ cause bugs và unexpected behavior. Đây là core principle của inheritance design."
//   },
//   // Question 353
//   {
//     question: "What are the theoretical foundations of the relationship between abstraction and complexity management in software engineering, and how do different levels of abstraction help developers manage the cognitive load associated with understanding and working with complex systems?",
//     options: {
//       A: "Abstraction manages complexity by presenting simplified views that hide irrelevant details at each level, with different abstraction levels allowing developers to focus on relevant information for their current task, reducing cognitive load by enabling developers to work at appropriate levels of detail without being overwhelmed by the full system complexity",
//       B: "Abstraction increases complexity by adding layers that must be understood",
//       C: "Complexity management requires understanding all details at all levels simultaneously",
//       D: "Abstraction and complexity management are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) manage complexity bằng cách present simplified views ẩn irrelevant details ở mỗi level. Different abstraction levels allow developers focus vào relevant information cho current task, reduce cognitive load (tải nhận thức) bằng cách enable developers work ở appropriate levels of detail mà không bị overwhelmed bởi full system complexity. Developers không cần biết tất cả details - chỉ cần biết level relevant cho task. High-level abstraction cho architects (system design), mid-level cho developers (component design), low-level cho implementers (algorithm details). Mỗi level hide complexity của levels below, expose only what's needed. Điều này tạo manageable complexity - systems có thể complex nhưng vẫn comprehensible vì complexity được organize vào layers. Without abstraction, developers phải understand everything simultaneously, tạo overwhelming cognitive load."
//   },
//   // Question 354
//   {
//     question: "Explain the theoretical concept of method resolution in polymorphism, specifically how the Java Virtual Machine handles method calls when multiple inheritance levels and method overriding are involved, including the role of the virtual method table in efficient method dispatch.",
//     options: {
//       A: "Method resolution in polymorphism involves the JVM determining which method implementation to call based on the actual object type at runtime, traversing the inheritance hierarchy from the object's class upward to find the most specific override, with virtual method tables (vtables) providing efficient O(1) lookup by storing method pointers for each class, enabling fast method dispatch even in deep inheritance hierarchies",
//       B: "Method resolution always uses the reference type, making it identical to compile-time resolution",
//       C: "The JVM randomly selects methods when multiple overrides exist",
//       D: "Virtual method tables are not used in Java, with method resolution being purely sequential"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method resolution trong polymorphism involve JVM determine method implementation nào được gọi dựa trên actual object type tại runtime. JVM traverse inheritance hierarchy từ object's class lên trên để tìm most specific override - method từ class cụ thể nhất trong hierarchy. Virtual method tables (vtables) provide efficient O(1) lookup bằng cách store method pointers cho mỗi class - mỗi class có bảng chứa pointers đến method implementations. Khi call method, JVM lookup trong vtable của object's class, không cần traverse hierarchy mỗi lần. Điều này enable fast method dispatch ngay cả trong deep inheritance hierarchies. Vtable là optimization của JVM để minimize overhead của dynamic dispatch. Process: get object's class → lookup vtable → get method pointer → call method. Đây là mechanism cho phép runtime polymorphism hoạt động efficiently."
//   },
//   // Question 355
//   {
//     question: "What is the theoretical relationship between inheritance and the concept of code sharing in object-oriented programming, and what are the advantages and disadvantages of using inheritance as a mechanism for sharing code across related classes?",
//     options: {
//       A: "Inheritance enables code sharing by allowing derived classes to inherit methods and fields from base classes, providing advantages like reduced duplication and centralized maintenance, but creating disadvantages like tight coupling, fragile base class problems, and reduced flexibility, making inheritance suitable for code sharing only when a true 'is-a' relationship exists",
//       B: "Inheritance is always the best mechanism for code sharing with no disadvantages",
//       C: "Inheritance cannot be used for code sharing, only for type relationships",
//       D: "Code sharing through inheritance has no impact on system design or maintainability"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable code sharing bằng cách allow derived classes inherit methods và fields từ base classes. Advantages: reduced duplication (giảm trùng lặp) - common code chỉ viết một lần, centralized maintenance (bảo trì tập trung) - sửa một chỗ affect tất cả subclasses. Disadvantages: tight coupling (liên kết chặt) - subclass phụ thuộc chặt vào superclass, fragile base class problems - thay đổi ở base class có thể break subclasses, reduced flexibility - khó thay đổi behavior. Inheritance suitable cho code sharing chỉ khi có true 'is-a' relationship. Nếu chỉ để code reuse mà không có 'is-a' relationship, composition tốt hơn. 'Favor composition over inheritance' khi cần code reuse mà không có 'is-a' relationship. Trade-off: inheritance provide code reuse nhưng tạo dependencies, composition provide flexibility nhưng có thể có duplication."
//   },
//   // Question 356
//   {
//     question: "In the context of encapsulation, what is the theoretical concept of controlled access and how do accessor and mutator methods (getters and setters) provide controlled access points that can enforce business rules, maintain data integrity, and hide implementation details?",
//     options: {
//       A: "Controlled access restricts how external code can interact with object state, and accessor/mutator methods provide controlled access points that can validate inputs, enforce business rules, maintain data integrity through invariants, and hide implementation details like computed values or internal representations, creating a secure and maintainable interface",
//       B: "Getters and setters simply expose fields directly with no additional functionality",
//       C: "Controlled access prevents all external interaction, making objects completely isolated",
//       D: "Accessor and mutator methods are unnecessary and add complexity without benefits"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Controlled access (truy cập có kiểm soát) restrict cách external code có thể interact với object state. Accessor/mutator methods (getters/setters) provide controlled access points có thể: validate inputs (kiểm tra tính hợp lệ), enforce business rules (áp dụng quy tắc nghiệp vụ), maintain data integrity through invariants (duy trì tính toàn vẹn qua bất biến), và hide implementation details như computed values hoặc internal representations. Getters có thể return computed values thay vì stored values. Setters có thể validate và reject invalid values. Điều này tạo secure và maintainable interface - clients không thể tạo invalid states, và implementation có thể change mà không affect clients. Controlled access không prevent interaction mà control nó - chỉ allow valid, safe interactions. Đây là proper encapsulation - không chỉ hide data mà còn control access."
//   },
//   // Question 357
//   {
//     question: "What is the theoretical foundation of the relationship between polymorphism and the design of flexible, maintainable software systems, and how does polymorphism enable systems to adapt to new requirements through extension rather than modification?",
//     options: {
//       A: "Polymorphism enables flexible systems by allowing code to depend on abstractions, so new requirements can be accommodated by creating new implementations of existing abstractions rather than modifying existing code, enabling extension-based adaptation that maintains system stability while providing flexibility for new functionality",
//       B: "Polymorphism requires modifying existing code to add new functionality",
//       C: "Flexible systems cannot be achieved through polymorphism, requiring complete rewrites for new requirements",
//       D: "Polymorphism and system flexibility are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable flexible systems bằng cách allow code depend vào abstractions. New requirements có thể được accommodate bằng cách create new implementations của existing abstractions thay vì modify existing code. Điều này enable extension-based adaptation (thích ứng dựa trên mở rộng) maintain system stability trong khi provide flexibility cho new functionality. Process: define abstraction → existing code depend vào abstraction → new requirements → create new implementation → plug in without modification. Đây là Open-Closed Principle - open for extension, closed for modification. Systems có thể adapt và evolve mà không break existing functionality. Polymorphism không require modification mà enable extension - add new types, không change existing types. Đây là foundation của maintainable software - systems có thể grow và change mà không degrade."
//   },
//   // Question 358
//   {
//     question: "Explain the theoretical concept of abstraction as a tool for managing system complexity, and how do appropriate abstraction levels create boundaries that allow different parts of a system to be developed, understood, and maintained independently?",
//     options: {
//       A: "Abstraction manages complexity by creating boundaries that hide implementation details, with appropriate abstraction levels allowing different system parts to be developed independently by different teams, understood in isolation without knowing all system details, and maintained separately with changes in one part not requiring changes in others, enabled by stable interfaces that hide implementation complexity",
//       B: "Abstraction increases complexity by requiring understanding of all abstraction layers",
//       C: "System parts cannot be developed independently regardless of abstraction levels",
//       D: "Abstraction boundaries prevent independent development and maintenance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) manage complexity bằng cách tạo boundaries ẩn implementation details. Appropriate abstraction levels allow different system parts được develop independently bởi different teams - teams chỉ cần biết interfaces, không cần biết implementations của other teams. Parts có thể được understand in isolation mà không cần biết all system details - chỉ cần biết interface và behavior của component. Parts có thể được maintain separately - changes trong một part không require changes trong others nếu interfaces stable. Điều này enabled bởi stable interfaces ẩn implementation complexity. Boundaries tạo separation of concerns - mỗi component có responsibility riêng, communicate qua well-defined interfaces. Đây là foundation của modular architecture - systems được chia thành independent, interchangeable modules. Without abstraction, all parts tightly coupled, không thể develop/maintain independently."
//   },
//   // Question 359
//   {
//     question: "What is the theoretical relationship between inheritance hierarchies and the organization of knowledge in object-oriented systems, and how do inheritance structures help developers understand relationships between classes and locate relevant code in large codebases?",
//     options: {
//       A: "Inheritance hierarchies organize knowledge by creating explicit relationships that reflect specialization and generalization, with the hierarchical structure helping developers understand how classes relate to each other, predict where functionality might be located, and navigate large codebases by following the inheritance structure from general base classes to specific derived classes",
//       B: "Inheritance hierarchies make code organization more difficult by creating complex dependencies",
//       C: "Knowledge organization is unrelated to inheritance structure",
//       D: "Inheritance hierarchies prevent developers from understanding class relationships"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance hierarchies (hệ thống kế thừa) organize knowledge bằng cách tạo explicit relationships reflect specialization và generalization. Hierarchical structure help developers understand cách classes relate với nhau - classes trong cùng hierarchy share characteristics, derived classes specialize base classes. Developers có thể predict where functionality might be located - common features trong base classes, specific features trong derived classes. Navigation trong large codebases dễ hơn - follow inheritance structure từ general base classes đến specific derived classes. Structure tạo mental model - từ abstract đến concrete, từ general đến specific. Điều này help developers locate relevant code, understand design decisions, và maintain consistency. Trong large codebases, inheritance hierarchy là roadmap - biết base class, biết derived classes có gì. Tuy nhiên, hierarchy quá sâu có thể làm khó navigate, cần balance."
//   },
//   // Question 360
//   {
//     question: "In the theoretical framework of encapsulation, what is the concept of information hiding and how does it differ from simply making fields private, particularly in terms of hiding implementation strategies, data representations, and internal algorithms from client code?",
//     options: {
//       A: "Information hiding goes beyond private fields to hide implementation strategies (how data is stored or computed), data representations (internal structures), and algorithms (computation methods), allowing these to change without affecting client code, while private fields only restrict access but don't necessarily hide implementation details if exposed through getters that reveal the internal structure",
//       B: "Information hiding is identical to making fields private with no additional meaning",
//       C: "Information hiding only applies to algorithms, not to data or implementation strategies",
//       D: "Private fields provide complete information hiding with no need for additional mechanisms"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Information hiding (ẩn thông tin) goes beyond private fields để ẩn: implementation strategies (cách data được store hoặc compute), data representations (internal structures), và algorithms (computation methods). Những thứ này có thể change mà không affect client code. Private fields chỉ restrict access nhưng không necessarily hide implementation details nếu exposed through getters reveal internal structure. Ví dụ: nếu getter return internal array directly, client biết representation. Proper information hiding: getter return copy hoặc different representation, hide cách data được store. Implementation strategies có thể change (array → linked list) mà client không biết. Algorithms có thể optimize mà client không biết. Điều này tạo flexibility - implementation có thể evolve mà không break clients. Information hiding là về hiding 'how', không chỉ restrict access. Đây là true encapsulation - hide implementation, expose interface."
//   },
//   // Question 361
//   {
//     question: "What is the theoretical foundation of the relationship between polymorphism and the design of testable software systems, and how does polymorphism enable the creation of testable code through dependency injection and mock object patterns?",
//     options: {
//       A: "Polymorphism enables testability by allowing code to depend on abstractions that can be replaced with test doubles (mocks, stubs) during testing, with dependency injection providing a mechanism to inject these test implementations, enabling isolated unit testing without dependencies on concrete implementations or external resources",
//       B: "Polymorphism prevents testability by creating dependencies that cannot be mocked",
//       C: "Testability can only be achieved through direct dependencies on concrete classes",
//       D: "Polymorphism and testability are unrelated concepts in software design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable testability (khả năng kiểm thử) bằng cách allow code depend vào abstractions có thể được replace với test doubles (mocks, stubs) trong testing. Dependency injection (tiêm phụ thuộc) provide mechanism để inject test implementations này. Điều này enable isolated unit testing mà không depend vào concrete implementations hoặc external resources. Code depend vào interface, trong test có thể inject mock implementation, test behavior mà không cần real dependencies. Ví dụ: service depend vào Repository interface, trong test inject MockRepository. Điều này tạo testable code - dễ test, fast tests, isolated tests. Polymorphism không prevent testability mà enable nó - abstractions có thể được mock. Đây là foundation của test-driven development và maintainable code. Code không testable thường có tight coupling với concrete classes."
//   },
//   // Question 362
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of the inheritance contract and how do the rules governing method overriding, access modifiers, and exceptions create a contract that ensures derived classes can properly substitute base classes while maintaining system correctness?",
//     options: {
//       A: "The inheritance contract requires derived classes to maintain behavioral compatibility with base classes, enforced through rules: identical method signatures for overriding, covariant return types allowed, equal or broader access modifiers, and equal or narrower exceptions, creating a contract that ensures substitutability and maintains system correctness while allowing specialization",
//       B: "Inheritance contracts allow complete freedom to change any aspect of inherited methods",
//       C: "Inheritance contracts only apply to method names, with all other aspects being unconstrained",
//       D: "Inheritance contracts prevent any form of specialization or customization"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance contract (hợp đồng kế thừa) require derived classes maintain behavioral compatibility với base classes. Rules enforce contract: identical method signatures cho overriding (tên, parameters phải giống), covariant return types allowed (derived có thể return subtype), equal or broader access modifiers (derived không thể restrictive hơn), và equal or narrower exceptions (derived không thể throw broader checked exceptions). Contract này ensure substitutability (Liskov Substitution) và maintain system correctness trong khi allow specialization. Derived classes có thể enhance behavior nhưng không thể break expectations của client code. Violation của contract sẽ break substitutability và cause bugs. Contract balance giữa flexibility (cho phép customization) và safety (đảm bảo correctness). Đây là foundation của inheritance design - derived classes phải honor contract của base classes."
//   },
//   // Question 363
//   {
//     question: "What is the theoretical relationship between abstraction and the concept of separation of concerns in software architecture, and how do abstraction mechanisms help separate different concerns into distinct, independently manageable components?",
//     options: {
//       A: "Abstraction enables separation of concerns by creating boundaries between different system concerns, with each abstraction representing a specific concern and hiding irrelevant details, allowing concerns to be developed, maintained, and evolved independently while interacting through well-defined interfaces",
//       B: "Abstraction prevents separation of concerns by mixing all concerns together",
//       C: "Separation of concerns can only be achieved through physical separation, not through abstraction",
//       D: "Abstraction and separation of concerns are conflicting principles"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) enable separation of concerns (tách biệt mối quan tâm) bằng cách tạo boundaries giữa different system concerns. Mỗi abstraction represent specific concern và ẩn irrelevant details. Concerns có thể được develop, maintain, và evolve independently trong khi interact through well-defined interfaces. Ví dụ: DataAccess abstraction separate data persistence concern, BusinessLogic abstraction separate business rules concern. Mỗi concern có interface riêng, implementation riêng, có thể change độc lập. Boundaries tạo clear separation - changes trong một concern không affect others nếu interfaces stable. Điều này tạo modular architecture - mỗi module handle một concern, communicate qua interfaces. Without abstraction, concerns mixed together, không thể separate. Abstraction không prevent separation mà enable nó - tạo boundaries và interfaces cho separation."
//   },
//   // Question 364
//   {
//     question: "Explain the theoretical concept of encapsulation as a mechanism for creating self-contained, cohesive units in object-oriented design, and how does proper encapsulation contribute to the cohesion of a class by keeping related data and operations together?",
//     options: {
//       A: "Encapsulation creates self-contained units by bundling related data and operations into classes, with proper encapsulation keeping all data and methods related to a single responsibility together, contributing to high cohesion where all class members work together toward a common purpose, making classes easier to understand and maintain",
//       B: "Encapsulation prevents cohesion by separating data and operations",
//       C: "Cohesion can only be achieved without encapsulation",
//       D: "Encapsulation and cohesion are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo self-contained units bằng cách bundle related data và operations vào classes. Proper encapsulation keep all data và methods related đến single responsibility together, contribute đến high cohesion (tính gắn kết cao) - tất cả class members work together toward common purpose. Classes với high cohesion dễ understand và maintain hơn - tất cả related functionality ở một chỗ, clear purpose. Ví dụ: BankAccount class encapsulate account data (balance, accountNumber) và operations (deposit, withdraw, getBalance) - tất cả related đến bank account responsibility. Low cohesion: class có unrelated responsibilities mixed together. Encapsulation không prevent cohesion mà enable nó - bundle related things together. Cohesion measure how well class members belong together - high cohesion tốt, low cohesion xấu. Encapsulation help achieve high cohesion bằng cách keep related things together."
//   },
//   // Question 365
//   {
//     question: "What is the theoretical foundation of the relationship between polymorphism and the design of extensible frameworks and libraries, and how does polymorphism enable framework code to work with user-defined types that didn't exist when the framework was created?",
//     options: {
//       A: "Polymorphism enables extensible frameworks by designing framework code to depend on abstractions (interfaces or abstract classes) that users can implement, allowing user-defined types implementing these abstractions to work with existing framework code through polymorphism, enabling frameworks to be extended with new types without modifying framework code",
//       B: "Frameworks cannot work with user-defined types and require all types to be defined within the framework",
//       C: "Polymorphism prevents framework extensibility by locking in specific implementations",
//       D: "Extensible frameworks can only be created without using polymorphism"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable extensible frameworks bằng cách design framework code depend vào abstractions (interfaces hoặc abstract classes) mà users có thể implement. User-defined types implement những abstractions này có thể work với existing framework code thông qua polymorphism. Điều này enable frameworks được extend với new types mà không cần modify framework code. Process: framework define abstraction → framework code depend vào abstraction → users implement abstraction → users' types work với framework. Ví dụ: Collection framework define Collection interface, framework methods work với Collection, users implement List, Set, etc. Framework không cần biết specific implementations, chỉ cần biết interface. Đây là foundation của plugin architectures và extensible systems. Frameworks có thể support types chưa tồn tại khi framework được tạo - users define types, framework work với chúng. Đây là power của polymorphism - enable extension without modification."
//   },
//   // Question 366
//   {
//     question: "In the theoretical framework of object-oriented programming, what is the concept of object identity versus object equality, and how do these concepts relate to the fundamental nature of objects as distinct entities with their own state and lifecycle?",
//     options: {
//       A: "Object identity refers to whether two references point to the same object instance in memory, while object equality refers to whether two objects are considered equivalent based on their state or business logic, with identity being a fundamental property of objects as distinct entities, while equality is a semantic concept that can be defined differently for different types",
//       B: "Object identity and object equality are identical concepts with no distinction",
//       C: "Objects cannot have identity, only primitive types can",
//       D: "Object equality is determined solely by memory location with no semantic meaning"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Object identity (danh tính đối tượng) refer đến việc hai references có point đến same object instance trong memory không (== operator). Object equality (sự bằng nhau đối tượng) refer đến việc hai objects có được consider equivalent dựa trên state hoặc business logic không (equals() method). Identity là fundamental property của objects như distinct entities - mỗi object có identity riêng, unique trong memory. Equality là semantic concept có thể được define differently cho different types - có thể dựa trên tất cả fields, một số fields, hoặc business logic. Hai objects có thể equal nhưng không identical (different instances, same state). Identity là về 'same object', equality là về 'equivalent objects'. Understanding distinction này important cho object-oriented design - khi nào dùng ==, khi nào dùng equals(). Identity không thể change, equality có thể được define theo business requirements."
//   },
//   // Question 367
//   {
//     question: "What are the theoretical mechanisms by which encapsulation protects against unauthorized access and maintains data integrity, and how do access modifiers create a security model that prevents external code from directly manipulating object state?",
//     options: {
//       A: "Encapsulation protects against unauthorized access by using access modifiers to restrict direct field access, forcing all state changes through controlled methods that can validate inputs and enforce business rules, creating a security model where private fields cannot be accessed externally, protected fields allow inheritance access, and public methods form controlled interfaces that maintain data integrity",
//       B: "Encapsulation provides no security benefits and is purely organizational",
//       C: "All fields should be public for maximum accessibility and security",
//       D: "Access modifiers have no impact on data integrity or security"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) protect against unauthorized access bằng cách dùng access modifiers restrict direct field access. Tất cả state changes phải through controlled methods có thể validate inputs và enforce business rules. Security model: private fields không thể access externally (chỉ trong class), protected fields allow inheritance access (trong package và subclass), public methods form controlled interfaces maintain data integrity. External code không thể directly manipulate object state - phải through methods có validation. Setters có thể reject invalid values, enforce constraints, maintain invariants. Điều này prevent unauthorized modifications và maintain data integrity. Security model này prevent: invalid state creation, unauthorized access, và unintended modifications. Public fields sẽ break security model - external code có thể set invalid values. Encapsulation tạo defense-in-depth - multiple layers of protection."
//   },
//   // Question 368
//   {
//     question: "Explain the theoretical concept of method overloading as a form of ad-hoc polymorphism, and how does the compiler's method resolution algorithm determine which overloaded method to call based on argument types, type promotion, and ambiguity resolution?",
//     options: {
//       A: "Method overloading is ad-hoc polymorphism where methods with the same name but different signatures are resolved at compile-time, with the compiler using an algorithm that first seeks exact type matches, then applies type promotion rules (byte→short→int→long→float→double), considers varargs as last resort, and reports compilation errors when ambiguity cannot be resolved, all determined statically based on reference types",
//       B: "Method overloading is resolved at runtime based on actual argument values",
//       C: "The compiler randomly selects overloaded methods when multiple matches exist",
//       D: "Method overloading only works with primitive types, not with object types"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method overloading (nạp chồng method) là ad-hoc polymorphism - methods cùng tên nhưng khác signatures được resolve tại compile-time. Compiler dùng algorithm: đầu tiên seek exact type matches (khớp chính xác), nếu không có thì apply type promotion rules (byte→short→int→long→float→double, char→int), consider varargs như last resort, và report compilation errors khi ambiguity không thể resolve. Tất cả được determine statically dựa trên reference types (không phải runtime values). Overloading khác overriding: overloading là compile-time (dựa trên signature), overriding là runtime (dựa trên object type). Overloading có thể dùng với cả primitive và object types, nhưng với object types, exact match được ưu tiên hơn inheritance hierarchy. Ambiguity xảy ra khi có nhiều matches có thể sau promotion - compiler không thể quyết định, báo lỗi."
//   },
//   // Question 369
//   {
//     question: "What is the theoretical relationship between inheritance and the concept of code evolution and maintenance in long-lived software systems, and how do inheritance hierarchies impact the ability to evolve code over time while maintaining backward compatibility?",
//     options: {
//       A: "Inheritance impacts code evolution by creating dependencies where changes to base classes affect derived classes, making evolution challenging as base class changes can break derived classes (fragile base class problem), requiring careful design of base class interfaces to remain stable while allowing implementation evolution, with inheritance hierarchies creating maintenance challenges but also enabling systematic updates through base class modifications",
//       B: "Inheritance makes code evolution easier by allowing unlimited changes without any impact",
//       C: "Code evolution is unrelated to inheritance structure",
//       D: "Inheritance prevents all code evolution, requiring complete rewrites for any changes"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) impact code evolution bằng cách tạo dependencies - changes trong base classes affect derived classes. Evolution challenging vì base class changes có thể break derived classes (fragile base class problem). Cần careful design của base class interfaces để remain stable trong khi allow implementation evolution. Inheritance hierarchies tạo maintenance challenges nhưng cũng enable systematic updates through base class modifications - sửa một chỗ có thể fix nhiều subclasses. Trade-off: inheritance enable code reuse và systematic updates nhưng tạo tight coupling và fragile dependencies. Để maintain backward compatibility, base class interfaces phải stable - chỉ add methods, không remove hoặc change signatures. Implementation có thể evolve nhưng interface phải stable. Deep hierarchies tăng risk - changes propagate nhiều levels. Shallow hierarchies giảm risk nhưng có thể có duplication."
//   },
//   // Question 370
//   {
//     question: "In the context of abstraction, what is the theoretical concept of interface design and how do well-designed interfaces balance between being comprehensive enough to support all necessary operations while remaining simple enough to be easily understood and implemented?",
//     options: {
//       A: "Interface design involves creating abstractions that capture essential operations needed by clients while hiding implementation complexity, with well-designed interfaces being comprehensive enough to support all necessary use cases but simple enough to understand and implement, balancing completeness with simplicity through careful selection of methods and clear, minimal method signatures",
//       B: "Interfaces should include all possible operations regardless of complexity or necessity",
//       C: "Interfaces should be minimal with only one method to maximize simplicity",
//       D: "Interface design has no impact on system usability or maintainability"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Interface design (thiết kế giao diện) involve tạo abstractions capture essential operations needed bởi clients trong khi ẩn implementation complexity. Well-designed interfaces comprehensive enough để support all necessary use cases nhưng simple enough để understand và implement. Balance completeness với simplicity through careful selection của methods và clear, minimal method signatures. Interface không nên quá large (khó understand và implement) hoặc quá small (không đủ functionality). Methods nên be cohesive - related operations together. Signatures nên be clear và minimal - chỉ parameters cần thiết. Interface nên hide complexity - clients chỉ cần biết 'what', không cần biết 'how'. Design decisions: include gì (essential operations), exclude gì (implementation details), organize như thế nào (logical grouping). Good interface design tạo usable, maintainable systems. Bad design tạo confusion và difficulty."
//   },
//   // Question 371
//   {
//     question: "What is the theoretical foundation of the relationship between encapsulation and the principle of least exposure in object-oriented design, and how does minimizing the exposed surface area of a class contribute to reducing coupling and increasing maintainability?",
//     options: {
//       A: "Encapsulation implements the principle of least exposure by minimizing the public interface exposed by a class, with a smaller exposed surface area reducing the number of dependencies other classes can form on the class, decreasing coupling and making the class easier to maintain and evolve since fewer external dependencies need to be considered when making changes",
//       B: "Encapsulation requires exposing all class members publicly for maximum flexibility",
//       C: "The principle of least exposure conflicts with encapsulation by requiring public access",
//       D: "Exposed surface area has no relationship to coupling or maintainability"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) implement principle of least exposure (nguyên tắc phơi bày tối thiểu) bằng cách minimize public interface exposed bởi class. Smaller exposed surface area (diện tích phơi bày nhỏ hơn) reduce số dependencies mà other classes có thể form trên class, decrease coupling và make class dễ maintain và evolve hơn vì fewer external dependencies cần được consider khi make changes. Public interface nên minimal - chỉ expose những gì thực sự cần thiết. Mỗi public method tạo potential dependency - classes khác có thể depend vào nó. Nhiều public methods = nhiều dependencies = high coupling = khó maintain. Principle of least exposure: expose ít nhất có thể, chỉ expose khi cần thiết. Điều này tạo loose coupling và maintainable code. Encapsulation không require expose tất cả mà minimize exposure."
//   },
//   // Question 372
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of the inheritance hierarchy as a taxonomy, and how does this taxonomic structure help organize knowledge about domain concepts and their relationships in object-oriented domain modeling?",
//     options: {
//       A: "Inheritance hierarchies function as taxonomies that organize domain concepts into hierarchical classifications, with the hierarchy structure reflecting specialization relationships and shared characteristics, helping organize knowledge about domain concepts by showing how general concepts specialize into specific ones, enabling systematic domain modeling that captures both commonalities and variations",
//       B: "Inheritance hierarchies are unrelated to domain modeling or knowledge organization",
//       C: "Taxonomic structures prevent effective domain modeling by creating rigid classifications",
//       D: "Inheritance hierarchies can only model technical concepts, not domain concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance hierarchies (hệ thống kế thừa) function như taxonomies (phân loại) organize domain concepts vào hierarchical classifications. Hierarchy structure reflect specialization relationships và shared characteristics. Help organize knowledge về domain concepts bằng cách show cách general concepts specialize vào specific ones. Enable systematic domain modeling capture cả commonalities (điểm chung) và variations (biến thể). Ví dụ: Animal taxonomy có Mammal, Bird, Fish - mỗi có characteristics riêng nhưng share Animal characteristics. Hierarchy tạo structure từ general đến specific, reflect real-world relationships. Domain modeling benefit: clear organization, easy navigation, systematic approach. Hierarchy giúp understand domain - từ abstract concepts đến concrete instances. Taxonomic structure không prevent modeling mà enable systematic modeling - organize concepts theo logical structure."
//   },
//   // Question 373
//   {
//     question: "What is the theoretical relationship between polymorphism and the design of flexible algorithms that can work with multiple types, and how does polymorphism enable the creation of generic algorithms that operate on abstractions rather than specific concrete types?",
//     options: {
//       A: "Polymorphism enables flexible algorithms by allowing algorithms to operate on abstractions (interfaces or base classes) rather than concrete types, so the same algorithm can work with any type implementing the abstraction, creating generic algorithms that are type-agnostic and can be extended to work with new types without modifying the algorithm code",
//       B: "Polymorphism requires algorithms to know all specific types they will work with",
//       C: "Generic algorithms cannot be created through polymorphism, requiring type-specific implementations",
//       D: "Polymorphism and algorithm design are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable flexible algorithms bằng cách allow algorithms operate trên abstractions (interfaces hoặc base classes) thay vì concrete types. Same algorithm có thể work với any type implement abstraction, tạo generic algorithms type-agnostic và có thể được extend để work với new types mà không cần modify algorithm code. Ví dụ: sort algorithm work với List interface, có thể sort ArrayList, LinkedList, etc. Algorithm depend vào List abstraction, không depend vào specific implementation. Khi add new List implementation, algorithm tự động work với nó. Generic algorithms operate trên abstractions - chỉ cần biết interface, không cần biết implementation. Điều này tạo flexible, reusable algorithms - một algorithm, nhiều types. Polymorphism không require know specific types mà work với abstractions. Đây là foundation của generic programming và reusable code."
//   },
//   // Question 374
//   {
//     question: "Explain the theoretical concept of encapsulation as a mechanism for creating black box abstractions, and how does the black box model enable clients to use objects effectively without needing to understand their internal implementation details?",
//     options: {
//       A: "Encapsulation creates black box abstractions where objects hide their internal implementation, exposing only a public interface, enabling clients to use objects effectively by interacting only with the interface without needing to understand implementation details, with the black box model allowing implementation to change without affecting clients as long as the interface remains stable",
//       B: "Black box abstractions require clients to understand all implementation details",
//       C: "Encapsulation prevents the black box model by exposing all internals",
//       D: "The black box model cannot be achieved through encapsulation"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo black box abstractions (trừu tượng hộp đen) - objects ẩn internal implementation, chỉ expose public interface. Enable clients use objects effectively bằng cách interact chỉ với interface mà không cần understand implementation details. Black box model allow implementation change mà không affect clients miễn là interface remain stable. Clients chỉ cần biết 'what' (interface), không cần biết 'how' (implementation). Ví dụ: Stack black box - clients biết push/pop, không cần biết implement bằng array hay linked list. Implementation có thể change (optimize, refactor) mà clients không biết và không bị affect. Black box model tạo separation of concerns - clients focus vào usage, implementers focus vào implementation. Encapsulation enable black box model bằng cách hide internals. Đây là foundation của abstraction - hide complexity, expose simplicity."
//   },
//   // Question 375
//   {
//     question: "What are the theoretical mechanisms by which inheritance enables code reuse while maintaining the ability to customize behavior, and how does the balance between inherited code and overridden methods create flexible class hierarchies?",
//     options: {
//       A: "Inheritance enables code reuse by allowing derived classes to inherit methods and fields from base classes, while method overriding allows customization of inherited behavior, creating a balance where common behavior is inherited and reused, while specific behavior is customized through overriding, resulting in flexible hierarchies that combine code reuse with behavioral customization",
//       B: "Inheritance prevents code reuse by requiring all methods to be overridden",
//       C: "Code reuse and customization are conflicting goals that cannot be achieved together",
//       D: "Inheritance only enables code reuse without any customization capabilities"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable code reuse bằng cách allow derived classes inherit methods và fields từ base classes. Method overriding allow customization của inherited behavior. Balance: common behavior được inherit và reuse, specific behavior được customize through overriding. Result: flexible hierarchies combine code reuse với behavioral customization. Ví dụ: Animal base class có common method breathe(), Dog override makeSound() với bark(). Common behavior (breathe) được reuse, specific behavior (makeSound) được customize. Hierarchy flexible - vừa reuse code, vừa allow customization. Overriding không prevent reuse mà enable customization của specific parts. Inheritance không require override tất cả - chỉ override khi cần customize. Balance tạo optimal design - reuse common code, customize specific behavior. Đây là power của inheritance - code reuse + flexibility."
//   },
//   // Question 376
//   {
//     question: "In the theoretical framework of abstraction, what is the concept of abstraction levels and how do different levels of abstraction (high-level, mid-level, low-level) create a layered architecture that manages complexity by presenting appropriate views of the system to different stakeholders?",
//     options: {
//       A: "Abstraction levels create layered architectures where high-level abstractions present simplified views for architects and designers focusing on system structure, mid-level abstractions provide component views for developers, and low-level abstractions show implementation details for implementers, with each level hiding complexity below while exposing relevant information, managing overall system complexity through appropriate information hiding at each layer",
//       B: "All abstraction levels should expose the same information for consistency",
//       C: "Abstraction levels increase complexity by adding unnecessary layers",
//       D: "Only one abstraction level can exist in a system"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction levels (mức trừu tượng) tạo layered architectures: high-level abstractions present simplified views cho architects và designers focus vào system structure, mid-level abstractions provide component views cho developers, low-level abstractions show implementation details cho implementers. Mỗi level ẩn complexity below trong khi expose relevant information. Manage overall system complexity through appropriate information hiding ở mỗi layer. High-level: system overview, components, interactions. Mid-level: component interfaces, responsibilities. Low-level: algorithms, data structures, implementation. Mỗi stakeholder work ở appropriate level - không cần biết tất cả details. Layers tạo separation - changes trong một layer không necessarily affect others nếu interfaces stable. Điều này manage complexity - system có thể complex nhưng vẫn comprehensible vì complexity được organize vào layers. Without layers, tất cả complexity visible cùng lúc, overwhelming."
//   },
//   // Question 377
//   {
//     question: "What is the theoretical foundation of the relationship between encapsulation and the concept of object autonomy, and how does proper encapsulation create self-contained objects that can manage their own state and behavior independently?",
//     options: {
//       A: "Encapsulation creates object autonomy by bundling data and operations together, allowing objects to manage their own state and behavior independently through controlled internal operations, with proper encapsulation ensuring objects are self-contained units that can maintain their integrity and make decisions about their state without external interference, creating autonomous entities in the system",
//       B: "Encapsulation prevents object autonomy by requiring external control of all operations",
//       C: "Object autonomy can only be achieved without encapsulation",
//       D: "Encapsulation and object autonomy are conflicting concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo object autonomy (tự chủ đối tượng) bằng cách bundle data và operations together. Objects có thể manage own state và behavior independently through controlled internal operations. Proper encapsulation ensure objects là self-contained units có thể maintain integrity và make decisions về state mà không có external interference. Tạo autonomous entities trong system - objects có thể operate independently, make decisions, maintain state. Ví dụ: BankAccount object tự manage balance, validate transactions, maintain invariants. External code không thể directly manipulate state - phải through object's methods. Object có control over own state và behavior. Autonomy không mean isolation - objects vẫn interact với others, nhưng through controlled interfaces. Encapsulation enable autonomy bằng cách give objects control. Đây là foundation của object-oriented thinking - objects như autonomous agents, không chỉ data containers."
//   },
//   // Question 378
//   {
//     question: "Explain the theoretical concept of polymorphism as enabling the design of systems that follow the Dependency Inversion Principle, where high-level modules depend on abstractions rather than low-level concrete implementations, and how does this architectural pattern improve system flexibility and testability?",
//     options: {
//       A: "Polymorphism enables Dependency Inversion by allowing high-level modules to depend on abstractions (interfaces or base classes) that low-level modules implement, with polymorphism allowing the high-level code to work with any implementation of the abstraction, creating flexible architectures where high-level policy is independent of low-level details, improving both flexibility through swappable implementations and testability through mockable dependencies",
//       B: "Polymorphism requires high-level modules to depend directly on low-level implementations",
//       C: "Dependency Inversion cannot be achieved through polymorphism",
//       D: "Polymorphism and architectural patterns are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable Dependency Inversion (đảo ngược phụ thuộc) bằng cách allow high-level modules depend vào abstractions (interfaces hoặc base classes) mà low-level modules implement. Polymorphism allow high-level code work với any implementation của abstraction. Tạo flexible architectures - high-level policy independent của low-level details. Improve flexibility through swappable implementations - có thể swap implementations mà không affect high-level. Improve testability through mockable dependencies - có thể inject mocks trong tests. Ví dụ: Service depend vào Repository interface, Repository implementations (Database, File, Memory) implement interface. Service không depend vào specific implementation, có thể work với any. High-level (business logic) independent của low-level (data access). Architecture flexible và testable. Polymorphism enable pattern này - code depend vào abstraction, polymorphism allow work với implementations."
//   },
//   // Question 379
//   {
//     question: "What is the theoretical relationship between inheritance and the concept of incremental development in object-oriented systems, and how does inheritance enable developers to build systems incrementally by extending existing classes rather than creating everything from scratch?",
//     options: {
//       A: "Inheritance enables incremental development by allowing new functionality to be added through derived classes that extend existing base classes, building upon established functionality rather than recreating it, enabling developers to incrementally add features and specializations to a system by extending the inheritance hierarchy, creating an evolutionary development approach where systems grow through extension",
//       B: "Inheritance prevents incremental development by requiring complete system design upfront",
//       C: "Incremental development can only be achieved without using inheritance",
//       D: "Inheritance and incremental development are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable incremental development (phát triển tăng dần) bằng cách allow new functionality được add through derived classes extend existing base classes. Build upon established functionality thay vì recreate it. Enable developers incrementally add features và specializations vào system bằng cách extend inheritance hierarchy. Tạo evolutionary development approach - systems grow through extension. Ví dụ: có Animal base class, add Dog, Cat, Bird incrementally. Mỗi extension build trên existing functionality, không cần recreate. Development incremental - start với base, add specializations. Systems evolve - từ simple đến complex, từ general đến specific. Inheritance không require complete design upfront - có thể start simple, extend later. Extension-based approach - add new types, không modify existing. Đây là foundation của extensible systems - grow through inheritance, không through modification."
//   },
//   // Question 380
//   {
//     question: "In the theoretical framework of encapsulation, what is the concept of controlled mutability and how do encapsulation mechanisms allow objects to control when and how their state can be changed, enabling both mutable and immutable object designs?",
//     options: {
//       A: "Controlled mutability means objects control state changes through encapsulation mechanisms, with mutable objects allowing controlled changes through methods that validate and enforce invariants, while immutable objects prevent all state changes by not providing mutator methods, with encapsulation enabling both designs by controlling access to state modification pathways",
//       B: "Encapsulation only supports mutable objects, with immutability being impossible",
//       C: "Controlled mutability requires all fields to be public for maximum flexibility",
//       D: "Encapsulation prevents any form of mutability control"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Controlled mutability (khả năng thay đổi có kiểm soát) có nghĩa objects control state changes through encapsulation mechanisms. Mutable objects allow controlled changes through methods validate và enforce invariants - setters có validation, chỉ allow valid changes. Immutable objects prevent all state changes bằng cách không provide mutator methods - không có setters, chỉ có getters, state set trong constructor và không change. Encapsulation enable cả hai designs bằng cách control access đến state modification pathways. Mutable: private fields + controlled setters. Immutable: private final fields + no setters. Encapsulation không force một design - có thể choose mutable hoặc immutable based on requirements. Controlled mutability give objects control - decide khi nào và như thế nào state có thể change. Điều này enable safe state management - prevent invalid changes, maintain integrity. Design choice: mutable cho flexible objects, immutable cho safe, thread-safe objects."
//   },
//   // Question 381
//   {
//     question: "What is the theoretical foundation of the relationship between abstraction and the concept of conceptual modeling in object-oriented analysis and design, and how do abstractions help capture and represent essential domain concepts while ignoring irrelevant implementation details?",
//     options: {
//       A: "Abstraction enables conceptual modeling by identifying and representing essential domain concepts at appropriate levels of detail, with abstractions capturing the essential characteristics and behaviors of domain entities while ignoring implementation specifics, allowing designers to model the problem domain conceptually before considering implementation details, creating a clear separation between domain understanding and technical realization",
//       B: "Abstraction prevents conceptual modeling by focusing only on implementation details",
//       C: "Conceptual modeling can only be achieved without using abstraction",
//       D: "Abstraction and conceptual modeling are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) enable conceptual modeling (mô hình khái niệm) bằng cách identify và represent essential domain concepts ở appropriate levels of detail. Abstractions capture essential characteristics và behaviors của domain entities trong khi ignore implementation specifics. Allow designers model problem domain conceptually trước khi consider implementation details. Tạo clear separation giữa domain understanding và technical realization. Conceptual model focus vào 'what' và 'why', không phải 'how'. Abstractions represent domain concepts - Customer, Order, Product - với essential features, không có implementation details. Model domain trước, implement sau. Separation này important - domain model stable, implementation có thể change. Abstraction không prevent modeling mà enable modeling - tạo conceptual representation của domain. Đây là foundation của object-oriented analysis - understand domain, model concepts, implement later."
//   },
//   // Question 382
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of the inheritance chain and method lookup, and how does the depth and structure of the inheritance chain impact the performance, maintainability, and comprehensibility of object-oriented systems?",
//     options: {
//       A: "The inheritance chain represents the path from a class to its root ancestor, with method lookup traversing this chain to find implementations, where deeper chains increase lookup complexity and make code harder to understand and maintain, though modern JVMs optimize through virtual method tables, with optimal design balancing chain depth against maintainability and performance concerns",
//       B: "Inheritance chain depth has no impact on system design or performance",
//       C: "Deeper inheritance chains always improve performance and maintainability",
//       D: "Method lookup does not traverse the inheritance chain, always using immediate class methods"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance chain (chuỗi kế thừa) represent path từ một class đến root ancestor (Object trong Java). Method lookup traverse chain này để tìm implementations - bắt đầu từ class hiện tại, nếu không tìm thấy thì lên parent, tiếp tục đến root. Deeper chains increase lookup complexity và make code khó understand và maintain hơn - phải trace qua nhiều levels, understand nhiều classes. Modern JVMs optimize through virtual method tables (vtables) - O(1) lookup thay vì traverse. Optimal design balance chain depth với maintainability và performance concerns. Shallow chains (2-3 levels) thường tốt hơn - dễ understand, maintain, và debug. Deep chains (>4-5 levels) tăng complexity và fragile base class risk. Balance: đủ depth để reuse code, không quá deep để maintain. Chain structure cũng important - linear chains tốt hơn complex hierarchies. Design decision: minimize depth, maximize clarity."
//   },
//   // Question 383
//   {
//     question: "What is the theoretical relationship between polymorphism and the design of event-driven and callback-based systems, and how does polymorphism enable flexible event handling where different objects can respond to the same events in different ways?",
//     options: {
//       A: "Polymorphism enables event-driven systems by allowing event handlers to be defined as methods in different classes implementing a common interface, with polymorphism allowing the event system to invoke handlers on any object implementing the interface, enabling different objects to respond to the same events differently based on their specific implementations, creating flexible event handling architectures",
//       B: "Polymorphism prevents event-driven design by requiring all handlers to behave identically",
//       C: "Event-driven systems cannot use polymorphism and require type-specific handlers",
//       D: "Polymorphism and event-driven design are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable event-driven systems bằng cách allow event handlers được define như methods trong different classes implement common interface. Polymorphism allow event system invoke handlers trên any object implement interface. Enable different objects respond đến same events differently based trên specific implementations. Tạo flexible event handling architectures. Ví dụ: EventListener interface có onEvent() method, Button và Menu implement interface, mỗi respond differently. Event system chỉ cần biết EventListener interface, không cần biết specific types. Polymorphism enable này - same event, different responses. Callback-based systems cũng benefit - callbacks có thể là methods của different classes implement interface. Flexibility: add new event handlers bằng cách implement interface, không cần modify event system. Đây là foundation của observer pattern và event-driven architectures. Polymorphism không prevent flexibility mà enable nó - allow different behaviors through common interface."
//   },
//   // Question 384
//   {
//     question: "Explain the theoretical concept of encapsulation as a mechanism for creating contracts between objects, and how do encapsulated interfaces define the terms of interaction between objects, establishing clear boundaries and responsibilities in object-oriented systems?",
//     options: {
//       A: "Encapsulation creates contracts through public interfaces that define how objects interact, with the encapsulated interface establishing the terms of interaction by specifying what operations are available, what parameters are required, and what can be expected in return, creating clear boundaries that define object responsibilities and enable objects to interact predictably while maintaining independence",
//       B: "Encapsulation prevents contracts by hiding all interaction mechanisms",
//       C: "Contracts can only be established without using encapsulation",
//       D: "Encapsulation and object contracts are conflicting concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo contracts (hợp đồng) through public interfaces định nghĩa cách objects interact. Encapsulated interface establish terms of interaction bằng cách specify: what operations available, what parameters required, và what can be expected in return. Tạo clear boundaries định nghĩa object responsibilities và enable objects interact predictably trong khi maintain independence. Contract là agreement giữa objects - object A expect object B behave theo contract. Interface define contract - methods, parameters, return types, exceptions. Objects interact through contracts, không through direct access. Boundaries clear - inside (implementation), outside (interface). Responsibilities defined - mỗi object có contract riêng. Predictable interaction - objects biết expect gì từ others. Independence maintained - objects có thể change implementation mà không break contracts. Encapsulation không prevent contracts mà create chúng - interface là contract. Đây là foundation của component-based design - components interact through contracts."
//   },
//   // Question 385
//   {
//     question: "What is the theoretical foundation of the relationship between inheritance and code organization in large-scale software projects, and how do inheritance hierarchies help structure and organize classes in ways that make large codebases more navigable and understandable?",
//     options: {
//       A: "Inheritance helps organize code by creating hierarchical structures that group related classes, with inheritance hierarchies providing a navigation structure that reflects specialization relationships, making large codebases more navigable by allowing developers to understand class relationships, locate functionality by following the hierarchy, and organize classes systematically based on their inheritance relationships",
//       B: "Inheritance makes code organization more difficult by creating complex dependencies",
//       C: "Code organization is unrelated to inheritance structure",
//       D: "Inheritance prevents effective code organization in large projects"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) help organize code bằng cách tạo hierarchical structures nhóm related classes. Inheritance hierarchies provide navigation structure reflect specialization relationships. Make large codebases navigable hơn bằng cách allow developers understand class relationships, locate functionality bằng cách follow hierarchy, và organize classes systematically based trên inheritance relationships. Hierarchy tạo structure - từ general đến specific, từ base đến derived. Navigation: biết base class, biết derived classes có gì. Organization: related classes trong cùng hierarchy, share characteristics. Large codebases benefit - structure rõ ràng, easy to navigate, understand relationships. Developers có thể predict locations - common features trong base, specific features trong derived. Systematic organization - classes organized theo inheritance, không random. Điều này tạo maintainable codebases - dễ find, understand, modify. Inheritance không prevent organization mà enable systematic organization."
//   },
//   // Question 386
//   {
//     question: "In the theoretical framework of polymorphism, what is the concept of behavioral polymorphism versus structural polymorphism, and how do these different forms of polymorphism contribute to flexible system design?",
//     options: {
//       A: "Behavioral polymorphism allows different objects to respond differently to the same method call based on their implementations, while structural polymorphism allows objects of different types to be used interchangeably based on shared structure (interfaces), with both forms enabling flexible design where code can work with multiple types through common interfaces or behaviors",
//       B: "Behavioral and structural polymorphism are identical concepts with no distinction",
//       C: "Only behavioral polymorphism exists, with structural polymorphism being impossible",
//       D: "Polymorphism cannot contribute to flexible system design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Behavioral polymorphism (đa hình hành vi) allow different objects respond differently đến same method call based trên implementations - same method call, different behaviors. Structural polymorphism (đa hình cấu trúc) allow objects của different types được dùng interchangeably based trên shared structure (interfaces) - different types, same interface. Cả hai forms enable flexible design - code có thể work với multiple types through common interfaces hoặc behaviors. Behavioral: method overriding, runtime polymorphism. Structural: interface implementation, type substitution. Both contribute to flexibility - behavioral cho phép customization, structural cho phép interchangeability. Flexible systems benefit từ cả hai - vừa có interchangeable types, vừa có customizable behaviors. Ví dụ: List interface (structural) có ArrayList, LinkedList (behavioral differences). Polymorphism không chỉ một form mà multiple forms contribute to flexibility."
//   },
//   // Question 387
//   {
//     question: "What are the theoretical mechanisms by which abstraction reduces the cognitive complexity of understanding software systems, and how do abstraction layers allow developers to work at appropriate levels of detail without being overwhelmed by system complexity?",
//     options: {
//       A: "Abstraction reduces cognitive complexity by hiding irrelevant details at each level, with abstraction layers allowing developers to focus on relevant information for their current task, working at appropriate levels of detail where high-level abstractions hide low-level complexity, mid-level abstractions hide implementation details, and developers can understand and work with systems without needing to comprehend all details simultaneously",
//       B: "Abstraction increases cognitive complexity by adding layers that must be understood",
//       C: "Cognitive complexity can only be reduced by understanding all system details",
//       D: "Abstraction and cognitive complexity are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) reduce cognitive complexity (độ phức tạp nhận thức) bằng cách ẩn irrelevant details ở mỗi level. Abstraction layers allow developers focus vào relevant information cho current task, work ở appropriate levels of detail. High-level abstractions ẩn low-level complexity - architects chỉ cần biết system structure. Mid-level abstractions ẩn implementation details - developers chỉ cần biết component interfaces. Developers có thể understand và work với systems mà không cần comprehend all details simultaneously. Cognitive load reduced - chỉ cần biết level relevant, ignore others. Without abstraction, developers phải understand everything - overwhelming. With abstraction, complexity manageable - work ở appropriate level, ignore irrelevant. Điều này enable understand large, complex systems - không cần biết tất cả, chỉ cần biết relevant parts. Abstraction không increase complexity mà manage nó - organize complexity vào layers."
//   },
//   // Question 388
//   {
//     question: "In the context of encapsulation, what is the theoretical concept of the encapsulation boundary and how does this boundary create a clear separation between the internal implementation of an object and its external interface, enabling independent evolution of implementation and interface?",
//     options: {
//       A: "The encapsulation boundary is the conceptual line separating internal implementation from external interface, created through access modifiers that restrict external access to internals, enabling the internal implementation to evolve independently of the interface as long as the interface contract is maintained, allowing implementation improvements without affecting clients",
//       B: "Encapsulation boundaries prevent any form of evolution or change",
//       C: "The boundary between implementation and interface cannot be maintained through encapsulation",
//       D: "Encapsulation boundaries require exposing all internals for maximum flexibility"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation boundary (ranh giới đóng gói) là conceptual line tách internal implementation từ external interface, được tạo through access modifiers restrict external access đến internals. Enable internal implementation evolve independently của interface miễn là interface contract được maintain. Allow implementation improvements mà không affect clients. Boundary clear - inside (private, implementation), outside (public, interface). Separation này important - implementation có thể change (optimize, refactor, fix) mà interface stable. Clients depend vào interface, không phải implementation, nên không bị affect. Independent evolution - implementation evolve, interface stable. Điều này enable maintainable systems - improve implementation, không break clients. Boundary không prevent evolution mà enable safe evolution - change implementation, maintain interface. Encapsulation tạo boundary này - protect internals, expose interface. Đây là foundation của stable, evolvable systems."
//   },
//   // Question 389
//   {
//     question: "What is the theoretical relationship between inheritance and the concept of code reuse versus code sharing, and how does inheritance enable both the reuse of existing code and the sharing of common functionality across related classes in an inheritance hierarchy?",
//     options: {
//       A: "Inheritance enables both code reuse where derived classes use inherited methods without modification, and code sharing where base class code is shared among multiple derived classes, with inheritance allowing common functionality to be defined once in a base class and automatically available to all derived classes, creating efficient code organization where shared code is centralized and reused code eliminates duplication",
//       B: "Inheritance only enables code reuse, with code sharing being impossible",
//       C: "Code reuse and code sharing are conflicting goals that cannot be achieved together",
//       D: "Inheritance prevents both code reuse and code sharing"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable cả code reuse (tái sử dụng code) - derived classes dùng inherited methods mà không modify, và code sharing (chia sẻ code) - base class code được share giữa multiple derived classes. Inheritance allow common functionality được define một lần trong base class và automatically available đến all derived classes. Tạo efficient code organization - shared code centralized, reused code eliminate duplication. Code reuse: derived classes inherit và use methods từ base. Code sharing: một base class, nhiều derived classes share code. Both benefit - reuse eliminate duplication, sharing centralize common code. Efficiency: define once, use many times. Organization: common code trong base, specific code trong derived. Inheritance enable cả hai - vừa reuse (sử dụng lại), vừa share (chia sẻ). Đây là power của inheritance - code efficiency và organization. Trade-off: reuse và share tạo dependencies, nhưng benefit lớn hơn cost trong many cases."
//   },
//   // Question 390
//   {
//     question: "Explain the theoretical concept of polymorphism as enabling the design of plug-and-play architectures, and how does polymorphism allow systems to support new components that implement existing interfaces without requiring modifications to the core system infrastructure?",
//     options: {
//       A: "Polymorphism enables plug-and-play architectures by designing core systems to depend on abstractions, allowing new components implementing those abstractions to be plugged into the system without modifying core infrastructure, with polymorphism ensuring the core system can work with any implementation of the abstraction, creating extensible systems where functionality can be added through new components rather than system modifications",
//       B: "Polymorphism requires modifying core systems to add new components",
//       C: "Plug-and-play architectures cannot be achieved through polymorphism",
//       D: "Polymorphism prevents the addition of new components to systems"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable plug-and-play architectures (kiến trúc cắm và chạy) bằng cách design core systems depend vào abstractions. New components implement những abstractions này có thể được plug vào system mà không cần modify core infrastructure. Polymorphism ensure core system có thể work với any implementation của abstraction. Tạo extensible systems - functionality có thể được add through new components thay vì system modifications. Ví dụ: Plugin architecture - core system define Plugin interface, plugins implement interface, plug in without modification. Core system không cần biết specific plugins, chỉ cần biết interface. Polymorphism enable này - core work với any Plugin implementation. Extensibility: add functionality bằng cách add components, không modify core. Đây là foundation của plugin systems, extension points, và modular architectures. Polymorphism không prevent extension mà enable nó - allow plug new components through abstractions."
//   },
//   // Question 391
//   {
//     question: "What is the theoretical foundation of the relationship between encapsulation and the concept of object responsibility, and how does proper encapsulation help define and maintain clear responsibilities for objects by bundling related data and operations together?",
//     options: {
//       A: "Encapsulation helps define object responsibility by bundling related data and operations that work together to fulfill a specific purpose, with proper encapsulation keeping all members related to a single responsibility together in one class, creating cohesive units where responsibility is clear and all class members contribute to fulfilling that responsibility, making objects easier to understand and maintain",
//       B: "Encapsulation prevents clear responsibility definition by mixing unrelated concerns",
//       C: "Object responsibility can only be defined without using encapsulation",
//       D: "Encapsulation and object responsibility are conflicting concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) help define object responsibility bằng cách bundle related data và operations work together để fulfill specific purpose. Proper encapsulation keep all members related đến single responsibility together trong một class. Tạo cohesive units - responsibility clear và all class members contribute đến fulfill responsibility đó. Make objects dễ understand và maintain hơn. Responsibility là 'what object does' - single, clear purpose. Encapsulation keep related things together - data và operations cho responsibility đó. Cohesion high - all members related, work toward common goal. Clear responsibility - easy to understand purpose, easy to maintain. Ví dụ: BankAccount responsibility là manage account, encapsulate balance, accountNumber, và deposit/withdraw methods. All related, all contribute. Encapsulation không prevent responsibility mà define nó - bundle related functionality. Đây là foundation của single responsibility principle - một class, một responsibility."
//   },
//   // Question 392
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of the inheritance relationship as a modeling tool, and how does inheritance help model real-world relationships and hierarchies that exist in problem domains, making object-oriented models more intuitive and aligned with domain understanding?",
//     options: {
//       A: "Inheritance serves as a modeling tool that reflects real-world 'is-a' relationships and specialization hierarchies, allowing object-oriented models to mirror domain structures where general concepts have specialized variants, making models more intuitive by aligning code structure with domain understanding and enabling developers to reason about code using domain knowledge",
//       B: "Inheritance has no relationship to domain modeling or real-world relationships",
//       C: "Inheritance prevents intuitive modeling by creating artificial structures",
//       D: "Real-world relationships cannot be modeled through inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) serve như modeling tool reflect real-world 'is-a' relationships và specialization hierarchies. Allow object-oriented models mirror domain structures - general concepts có specialized variants. Make models intuitive hơn bằng cách align code structure với domain understanding. Enable developers reason về code using domain knowledge. Ví dụ: domain có Animal → Mammal → Dog hierarchy, code có inheritance hierarchy tương tự. Intuitive - code structure match domain structure. Domain knowledge applicable - understand domain, understand code. Models align với domain - không artificial, natural. Inheritance không prevent modeling mà enable intuitive modeling - reflect real relationships. Điều này tạo maintainable code - developers có thể use domain knowledge để understand và modify code. Modeling tool - inheritance help model domain, không chỉ organize code."
//   },
//   // Question 393
//   {
//     question: "What is the theoretical relationship between abstraction and the concept of interface stability in long-lived software systems, and how do well-designed abstractions create stable interfaces that can evolve and adapt over time while maintaining backward compatibility?",
//     options: {
//       A: "Abstraction creates stable interfaces by defining essential operations and contracts that remain constant, with well-designed abstractions focusing on stable concepts rather than volatile implementation details, enabling interfaces to remain stable over time while implementations evolve, maintaining backward compatibility by keeping the abstraction contract unchanged even as internal implementations improve or change",
//       B: "Abstraction prevents interface stability by requiring constant interface changes",
//       C: "Interface stability can only be achieved without using abstraction",
//       D: "Abstraction and interface stability are conflicting goals"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) tạo stable interfaces bằng cách define essential operations và contracts remain constant. Well-designed abstractions focus vào stable concepts thay vì volatile implementation details. Enable interfaces remain stable over time trong khi implementations evolve. Maintain backward compatibility bằng cách keep abstraction contract unchanged ngay cả khi internal implementations improve hoặc change. Stable interfaces important cho long-lived systems - clients depend vào interfaces, interfaces phải stable. Abstractions capture essential, stable concepts - 'what', không phải 'how'. Implementation details volatile, abstractions stable. Evolution: implementation change, interface stable. Backward compatibility: old clients vẫn work, new implementations compatible. Abstraction không prevent stability mà enable nó - focus vào stable concepts. Đây là foundation của maintainable, evolvable systems - stable interfaces, evolving implementations."
//   },
//   // Question 394
//   {
//     question: "Explain the theoretical concept of polymorphism as a mechanism for achieving runtime flexibility, and how does dynamic method dispatch enable systems to adapt their behavior at runtime based on the actual types of objects, rather than being fixed at compile time?",
//     options: {
//       A: "Polymorphism achieves runtime flexibility through dynamic method dispatch where method calls are resolved at runtime based on actual object types, allowing systems to adapt behavior dynamically as different object types are used, with the same code working with different types and producing different behaviors based on runtime object types, creating flexible systems that can respond to runtime conditions and object configurations",
//       B: "Polymorphism requires all behavior to be fixed at compile time",
//       C: "Runtime flexibility cannot be achieved through polymorphism",
//       D: "Dynamic method dispatch prevents runtime adaptation"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) achieve runtime flexibility (linh hoạt runtime) through dynamic method dispatch - method calls được resolve tại runtime dựa trên actual object types. Allow systems adapt behavior dynamically khi different object types được dùng. Same code work với different types và produce different behaviors based trên runtime object types. Tạo flexible systems có thể respond đến runtime conditions và object configurations. Compile-time: code depend vào abstraction. Runtime: actual types determine behavior. Flexibility: behavior adapt based trên runtime types, không fixed tại compile-time. Ví dụ: processPayment() work với CreditCard hoặc PayPal based trên runtime type. Dynamic dispatch enable này - method được chọn tại runtime. Systems flexible - có thể handle different scenarios, adapt to conditions. Polymorphism không prevent flexibility mà enable runtime flexibility - behavior determined tại runtime, không compile-time."
//   },
//   // Question 395
//   {
//     question: "What are the theoretical mechanisms by which encapsulation protects object state from corruption and maintains data integrity, and how do encapsulation mechanisms create defensive programming patterns that validate inputs and enforce business rules?",
//     options: {
//       A: "Encapsulation protects state by restricting direct access and requiring all modifications through controlled methods that can validate inputs, check preconditions, enforce business rules, and maintain invariants, creating defensive programming patterns where invalid states cannot be created because all state changes go through validation pathways that reject invalid inputs and ensure data integrity",
//       B: "Encapsulation provides no protection and allows unrestricted state modification",
//       C: "State protection can only be achieved without encapsulation",
//       D: "Encapsulation prevents all state validation and business rule enforcement"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) protect state bằng cách restrict direct access và require all modifications through controlled methods có thể validate inputs, check preconditions, enforce business rules, và maintain invariants. Tạo defensive programming patterns - invalid states không thể được tạo vì all state changes go through validation pathways reject invalid inputs và ensure data integrity. Setters validate - check values, reject invalid, enforce rules. Preconditions checked - ensure valid state before operations. Business rules enforced - age >= 0, balance >= 0, etc. Invariants maintained - state luôn valid. Defensive: prevent problems, không chỉ detect. Invalid states impossible - không có pathway tạo chúng. Data integrity ensured - state luôn consistent và valid. Encapsulation không prevent protection mà enable defensive programming - control access, validate changes. Đây là foundation của robust systems - prevent corruption, maintain integrity."
//   },
//   // Question 396
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of inheritance depth and its impact on system design, and how do shallow versus deep inheritance hierarchies affect code maintainability, testability, and the risk of fragile base class problems?",
//     options: {
//       A: "Inheritance depth refers to the number of levels in an inheritance hierarchy, with shallow hierarchies (2-3 levels) generally being more maintainable and testable with lower fragile base class risk, while deep hierarchies (4+ levels) increase complexity, make testing harder, and amplify the fragile base class problem where base class changes affect many derived classes, with optimal design minimizing depth while achieving necessary code reuse",
//       B: "Deeper inheritance hierarchies always improve maintainability and reduce risks",
//       C: "Inheritance depth has no impact on system design or maintainability",
//       D: "Shallow hierarchies always cause more problems than deep hierarchies"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance depth (độ sâu kế thừa) refer đến số levels trong inheritance hierarchy. Shallow hierarchies (2-3 levels) generally more maintainable và testable với lower fragile base class risk - dễ understand, test, và modify. Deep hierarchies (4+ levels) increase complexity, make testing harder, và amplify fragile base class problem - base class changes affect many derived classes. Optimal design minimize depth trong khi achieve necessary code reuse. Shallow: easy to understand, test, maintain. Deep: complex, hard to test, fragile. Fragile base class: changes propagate nhiều levels, break many classes. Balance: đủ depth để reuse, không quá deep để maintain. Design decision: prefer shallow, avoid deep. Composition có thể thay thế deep inheritance. Depth impact: maintainability, testability, risk. Minimize depth, maximize clarity. Đây là design principle - keep hierarchies shallow."
//   },
//   // Question 397
//   {
//     question: "What is the theoretical foundation of the relationship between polymorphism and the design of algorithms that operate on collections of heterogeneous objects, and how does polymorphism enable algorithms to work uniformly with different object types through common interfaces?",
//     options: {
//       A: "Polymorphism enables uniform algorithms by allowing algorithms to operate on abstractions (interfaces or base classes) rather than specific types, so algorithms can work with collections containing different object types that all implement the same abstraction, processing each object uniformly through the common interface while each object responds according to its specific implementation, creating flexible algorithms that work with heterogeneous collections",
//       B: "Polymorphism requires algorithms to know all specific types in collections",
//       C: "Algorithms cannot work with heterogeneous collections through polymorphism",
//       D: "Polymorphism prevents uniform algorithm design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable uniform algorithms bằng cách allow algorithms operate trên abstractions (interfaces hoặc base classes) thay vì specific types. Algorithms có thể work với collections chứa different object types mà all implement same abstraction. Process mỗi object uniformly through common interface trong khi mỗi object respond according đến specific implementation. Tạo flexible algorithms work với heterogeneous collections. Ví dụ: drawAll() algorithm work với List<Shape>, process Circle, Rectangle, Triangle uniformly. Algorithm chỉ cần biết Shape interface, không cần biết specific types. Uniform processing - same algorithm, different behaviors. Heterogeneous collections - different types, same interface. Polymorphism enable này - algorithm work với abstraction, objects provide implementations. Flexibility: add new types, algorithm tự động work. Đây là foundation của generic algorithms - work với any types implement interface."
//   },
//   // Question 398
//   {
//     question: "In the context of encapsulation, what is the theoretical concept of the public interface as a contract, and how does the public interface define the obligations and guarantees that an object provides to its clients, establishing a formal agreement for object interaction?",
//     options: {
//       A: "The public interface serves as a contract defining what operations an object provides, what parameters are required, what return values can be expected, and what exceptions might be thrown, establishing formal obligations (what the object will do) and guarantees (what clients can rely on), creating a contract that clients depend on and that the object must honor, enabling predictable and reliable object interactions",
//       B: "Public interfaces have no contractual meaning and are purely informational",
//       C: "Contracts can only be established without using public interfaces",
//       D: "The public interface prevents formal agreements between objects"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Public interface (giao diện công khai) serve như contract định nghĩa: what operations object provides, what parameters required, what return values expected, và what exceptions might be thrown. Establish formal obligations (object sẽ làm gì) và guarantees (clients có thể rely on gì). Tạo contract mà clients depend on và object phải honor. Enable predictable và reliable object interactions. Contract là agreement - object promise provide operations, clients expect behaviors. Obligations: object phải fulfill contract. Guarantees: clients có thể rely on behavior. Formal agreement - clear, documented, enforceable. Predictable: clients biết expect gì. Reliable: object honor contract. Interface define contract - methods, signatures, behaviors. Objects must honor - implement đúng contract. Clients depend on - expect contract behavior. Đây là foundation của reliable systems - contracts ensure predictable behavior. Encapsulation tạo contract này - interface là contract."
//   },
//   // Question 399
//   {
//     question: "What is the theoretical relationship between abstraction and the concept of domain modeling in object-oriented analysis, and how do abstractions help capture and represent the essential concepts, relationships, and behaviors of a problem domain in a way that is both accurate and implementable?",
//     options: {
//       A: "Abstraction enables domain modeling by identifying and representing essential domain concepts at appropriate levels of detail, capturing key concepts, their relationships, and behaviors while ignoring implementation specifics, allowing designers to create accurate models of the problem domain that reflect real-world structures and can be directly implemented in code, bridging the gap between domain understanding and technical implementation",
//       B: "Abstraction prevents accurate domain modeling by focusing only on technical details",
//       C: "Domain modeling can only be achieved without using abstraction",
//       D: "Abstraction and domain modeling are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) enable domain modeling (mô hình hóa miền) bằng cách identify và represent essential domain concepts ở appropriate levels of detail. Capture key concepts, relationships, và behaviors trong khi ignore implementation specifics. Allow designers create accurate models của problem domain reflect real-world structures và có thể được directly implement trong code. Bridge gap giữa domain understanding và technical implementation. Domain model: concepts, relationships, behaviors. Abstraction represent chúng - classes, inheritance, associations. Accurate: reflect domain correctly. Implementable: có thể code directly. Gap bridged - model translate thành code. Abstraction không prevent modeling mà enable nó - represent domain concepts. Models accurate và implementable - vừa reflect domain, vừa code được. Đây là foundation của object-oriented analysis - understand domain, model concepts, implement code."
//   },
//   // Question 400
//   {
//     question: "Explain the theoretical concept of the four fundamental principles of object-oriented programming working together as an integrated system, and how do encapsulation, inheritance, polymorphism, and abstraction complement each other to create well-designed, maintainable, and extensible object-oriented systems?",
//     options: {
//       A: "The four OOP principles work together as an integrated system where encapsulation provides data protection and controlled access, inheritance enables code reuse and specialization, polymorphism allows flexible behavior through abstractions, and abstraction creates simplified interfaces, with each principle addressing different aspects of design that together create systems that are protected (encapsulation), organized (inheritance), flexible (polymorphism), and comprehensible (abstraction), resulting in maintainable and extensible architectures",
//       B: "The four principles are independent and cannot work together",
//       C: "Only one principle can be used at a time in any system",
//       D: "The principles conflict with each other and cannot be combined"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Bốn nguyên tắc OOP work together như integrated system: Encapsulation (đóng gói) provide data protection và controlled access - bảo vệ data, control access. Inheritance (kế thừa) enable code reuse và specialization - reuse code, specialize behavior. Polymorphism (đa hình) allow flexible behavior through abstractions - work với multiple types, flexible behavior. Abstraction (trừu tượng hóa) create simplified interfaces - hide complexity, expose essentials. Mỗi principle address different aspects: encapsulation → protection, inheritance → organization, polymorphism → flexibility, abstraction → comprehensibility. Together tạo systems: protected (encapsulation), organized (inheritance), flexible (polymorphism), và comprehensible (abstraction). Result: maintainable và extensible architectures. Principles complement nhau - encapsulation protect, inheritance organize, polymorphism flex, abstraction simplify. Integrated approach - không chỉ một principle, mà all together. Well-designed systems use all four - comprehensive design. Đây là foundation của object-oriented programming - four principles, integrated system, maintainable code."
//   }
// ];
// export const questions = [
//   // Question 1
//   {
//     question: "What is the primary difference between a class and an object in Java?",
//     options: {
//       A: "A class is a blueprint, an object is an instance",
//       B: "A class has methods, an object has variables",
//       C: "A class is static, an object is dynamic",
//       D: "A class is abstract, an object is concrete"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Class là một blueprint (bản thiết kế) định nghĩa cấu trúc và hành vi, trong khi object là một instance (thể hiện) cụ thể của class đó. Một class có thể tạo ra nhiều objects. Class chứa cả methods và variables, không chỉ có methods. Class không nhất thiết phải là static hay abstract."
//   },
//   // Question 2
//   {
//     question: "Which statement about constructors is FALSE?",
//     options: {
//       A: "Constructors cannot be inherited",
//       B: "Constructors can be overloaded",
//       C: "Constructors can be private",
//       D: "Constructors can have return types"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Constructor KHÔNG THỂ có return type, kể cả void. Constructor có tên giống class và không có return type. Constructor có thể được overload (nhiều constructor với tham số khác nhau), có thể là private (dùng cho Singleton pattern), và không thể được kế thừa."
//   },
//   // Question 3
//   {
//     question: "What is the output of the following code?",
//     options: {
//       A: "0",
//       B: "1",
//       C: "2",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     static int count = 0;
//     Test() { count++; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t1 = new Test();
//         Test t2 = new Test();
//         System.out.println(Test.count);
//     }
// }`,
//     explanation: "Output là 2. Biến static count được chia sẻ bởi tất cả các instance của class Test. Mỗi lần tạo object mới (t1, t2), constructor được gọi và count tăng lên 1. Sau khi tạo 2 objects, count = 2."
//   },
//   // Question 4
//   {
//     question: "Which of the following is NOT a principle of OOP?",
//     options: {
//       A: "Encapsulation",
//       B: "Compilation",
//       C: "Inheritance",
//       D: "Polymorphism"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Compilation (biên dịch) KHÔNG phải là một nguyên tắc của OOP. Bốn nguyên tắc chính của OOP là: Encapsulation (Đóng gói), Inheritance (Kế thừa), Polymorphism (Đa hình), và Abstraction (Trừu tượng). Compilation chỉ là quá trình chuyển đổi code Java thành bytecode."
//   },
//   // Question 5
//   {
//     question: "What happens when you try to access a private member of a class from outside the class?",
//     options: {
//       A: "Runtime exception",
//       B: "Compilation error",
//       C: "Returns null",
//       D: "Returns default value"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Lỗi biên dịch xảy ra khi cố gắng truy cập private member từ bên ngoài class. Private members chỉ có thể được truy cập trong cùng class. Compiler sẽ phát hiện lỗi này ngay tại thời điểm biên dịch, không phải runtime."
//   },
//   // Question 6
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     int x = 10;
// }
// public class Main {
//     public static void main(String[] args) {
//         A a1 = new A();
//         A a2 = a1;
//         a2.x = 20;
//         System.out.println(a1.x);
//     }
// }`,
//     explanation: "Output là 20. a2 = a1 không tạo object mới, mà chỉ tạo một reference khác trỏ đến cùng object. Do đó a1 và a2 trỏ đến cùng một object. Khi thay đổi a2.x = 20, giá trị của object được thay đổi, nên a1.x cũng là 20."
//   },
//   // Question 7
//   {
//     question: "Which keyword is used to prevent a class from being inherited?",
//     options: {
//       A: "static",
//       B: "final",
//       C: "abstract",
//       D: "private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Từ khóa 'final' được dùng để ngăn class bị kế thừa. Khi khai báo 'final class', không class nào có thể extend class đó. 'static' dùng cho members, 'abstract' cho phép kế thừa, 'private' chỉ dùng cho members không phải class."
//   },
//   // Question 8
//   {
//     question: "What is the default value of an instance variable of type reference?",
//     options: {
//       A: "0",
//       B: "null",
//       C: "undefined",
//       D: "Depends on the class"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Giá trị mặc định của biến instance kiểu reference là 'null'. Tất cả các biến reference (object, array, String, etc.) đều có giá trị mặc định là null nếu không được khởi tạo. Primitive types có giá trị mặc định khác (int = 0, boolean = false, etc.)."
//   },
//   // Question 9
//   {
//     question: "Can a constructor call another constructor in the same class?",
//     options: {
//       A: "No, never",
//       B: "Yes, using this()",
//       C: "Yes, using super()",
//       D: "Yes, using new keyword"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, constructor có thể gọi constructor khác trong cùng class bằng cách sử dụng this(). this() phải là câu lệnh đầu tiên trong constructor. super() dùng để gọi constructor của parent class, không phải cùng class. Không thể dùng new để gọi constructor trong cùng class."
//   },
//   // Question 10
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "null",
//       C: "Compilation error",
//       D: "Runtime exception"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     int x;
//     Test(int x) {
//         this.x = x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.println(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class Test chỉ có constructor có tham số Test(int x), không có default constructor. Khi khai báo constructor có tham số, Java không tự động tạo default constructor. Gọi new Test() không có tham số sẽ gây lỗi biên dịch."
//   },
//   // Question 11
//   {
//     question: "Which access modifier provides the most restrictive access?",
//     options: {
//       A: "public",
//       B: "protected",
//       C: "default",
//       D: "private"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Private là access modifier có phạm vi hạn chế nhất. Private members chỉ có thể được truy cập trong cùng class. Thứ tự từ hạn chế nhất đến mở nhất: private > default (package-private) > protected > public."
//   },
//   // Question 12
//   {
//     question: "What is method signature in Java?",
//     options: {
//       A: "Method name only",
//       B: "Method name + return type",
//       C: "Method name + parameter list",
//       D: "Method name + access modifier"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Method signature trong Java bao gồm method name + parameter list (số lượng, kiểu dữ liệu, thứ tự của parameters). Return type và access modifier KHÔNG phải là phần của method signature. Method signature được dùng để phân biệt các methods khi overloading."
//   },
//   // Question 13
//   {
//     question: "What is the output?",
//     options: {
//       A: "123",
//       B: "321",
//       C: "132",
//       D: "231"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static { System.out.print("1"); }
//     { System.out.print("2"); }
//     A() { System.out.print("3"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new A();
//     }
// }`,
//     explanation: "Output là '123'. Thứ tự thực thi: 1) Static block chạy đầu tiên khi class được load (in '1'), 2) Instance initialization block chạy trước constructor (in '2'), 3) Constructor chạy cuối cùng (in '3'). Static block chỉ chạy một lần khi class được load, instance block chạy mỗi lần tạo object."
//   },
//   // Question 14
//   {
//     question: "Can we overload the main method in Java?",
//     options: {
//       A: "No, it's not possible",
//       B: "Yes, but JVM will call only the standard main method",
//       C: "Yes, and JVM will call all main methods",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có thể overload main method trong Java. Tuy nhiên, JVM chỉ gọi method main với signature: public static void main(String[] args). Các overloaded versions khác của main method có thể được gọi từ code khác, nhưng JVM không tự động gọi chúng."
//   },
//   // Question 15
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     int x = 10;
//     void change(int x) {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change(t.x);
//         System.out.println(t.x);
//     }
// }`,
//     explanation: "Output là 10. Trong method change(int x), tham số x là biến local, không phải instance variable. Khi gán x = 20, chỉ biến local được thay đổi, không ảnh hưởng đến instance variable t.x. Để thay đổi instance variable, cần dùng this.x = 20."
//   },
//   // Question 16
//   {
//     question: "Which statement about the 'this' keyword is FALSE?",
//     options: {
//       A: "It refers to the current object",
//       B: "It can be used in static methods",
//       C: "It can be used to invoke current class constructor",
//       D: "It can be used to pass as argument in method call"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Câu B SAI. 'this' KHÔNG THỂ được sử dụng trong static methods vì 'this' tham chiếu đến instance hiện tại, trong khi static methods thuộc về class, không thuộc về instance. 'this' có thể dùng để gọi constructor (this()), truyền làm tham số, và tham chiếu đến instance hiện tại."
//   },
//   // Question 17
//   {
//     question: "What is object composition in OOP?",
//     options: {
//       A: "Creating multiple objects",
//       B: "A \"has-a\" relationship",
//       C: "A \"is-a\" relationship",
//       D: "Destroying objects"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Object composition là mối quan hệ \"has-a\" (có một), trong đó một object chứa các objects khác như là thành phần của nó. Ví dụ: Car has-a Engine. Đây là cách thay thế cho inheritance trong một số trường hợp. \"is-a\" relationship là inheritance."
//   },
//   // Question 18
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "BA"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     A() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     B() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//     }
// }`,
//     explanation: "Output là 'AB'. Khi tạo object của class B, constructor của parent class A được gọi trước (thông qua super() ngầm định), in 'A', sau đó constructor của B được gọi, in 'B'. Thứ tự luôn là: parent constructor trước, child constructor sau."
//   },
//   // Question 19
//   {
//     question: "Can a class extend multiple classes in Java?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Yes, using interfaces",
//       D: "Yes, using abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, một class trong Java chỉ có thể extend một class duy nhất (single inheritance). Java không hỗ trợ multiple inheritance cho classes để tránh diamond problem. Tuy nhiên, một class có thể implement nhiều interfaces, và một interface có thể extend nhiều interfaces."
//   },
//   // Question 20
//   {
//     question: "What is tight coupling in OOP?",
//     options: {
//       A: "Classes are highly dependent on each other",
//       B: "Classes are loosely connected",
//       C: "Classes are not connected",
//       D: "Classes are abstract"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Tight coupling (liên kết chặt chẽ) là khi các classes phụ thuộc nhiều vào nhau. Khi một class thay đổi, các class khác cũng phải thay đổi theo. Đây là điều nên tránh trong OOP. Loose coupling (liên kết lỏng lẻo) là tốt hơn, giúp code dễ bảo trì và mở rộng."
//   },
//   // Question 21
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "null",
//       C: "Compilation error",
//       D: "NullPointerException"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     void show() {
//         System.out.print("A");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = null;
//         t.show();
//     }
// }`,
//     explanation: "NullPointerException xảy ra vì biến t được gán giá trị null, sau đó cố gắng gọi method show() trên null reference. Trong Java, gọi method trên null reference sẽ ném NullPointerException tại runtime, không phải lỗi biên dịch."
//   },
//   // Question 22
//   {
//     question: "Which of these is NOT a valid way to create an object?",
//     options: {
//       A: "Using new keyword",
//       B: "Using reflection",
//       C: "Using clone()",
//       D: "Using abstract keyword"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Abstract keyword KHÔNG được dùng để tạo object. Abstract classes và methods không thể được khởi tạo trực tiếp. Các cách hợp lệ để tạo object: new keyword (thường dùng nhất), reflection (Class.newInstance()), clone() (sao chép object), deserialization, và factory methods."
//   },
//   // Question 23
//   {
//     question: "What is the purpose of the finalize() method?",
//     options: {
//       A: "To initialize objects",
//       B: "To perform cleanup before garbage collection",
//       C: "To create objects",
//       D: "To compare objects"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Method finalize() được gọi bởi garbage collector trước khi object bị thu hồi bộ nhớ. Nó được dùng để thực hiện cleanup (dọn dẹp tài nguyên) như đóng file, giải phóng kết nối database. Tuy nhiên, finalize() đã bị deprecated từ Java 9, nên dùng try-with-resources hoặc AutoCloseable thay thế."
//   },
//   // Question 24
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 10",
//       B: "20 20",
//       C: "20 10",
//       D: "10 20"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     int x = 10;
//     void show() {
//         int x = 20;
//         System.out.print(x + " " + this.x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new A().show();
//     }
// }`,
//     explanation: "Output là '20 10'. Trong method show(), biến local x = 20 che khuất (shadow) instance variable x. Khi in x (không có this), nó in biến local (20). Khi in this.x, nó in instance variable (10). 'this' được dùng để truy cập instance variable khi bị che khuất bởi biến local."
//   },
//   // Question 25
//   {
//     question: "What is object slicing in the context of OOP?",
//     options: {
//       A: "Dividing an object into parts",
//       B: "Loss of derived class features when assigned to base class",
//       C: "Deleting part of an object",
//       D: "Not applicable in Java"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Object slicing KHÔNG áp dụng trong Java. Đây là khái niệm của C++ khi gán derived class object vào base class variable, dẫn đến mất thông tin của derived class. Java không có vấn đề này vì tất cả objects được tham chiếu qua references, không phải giá trị trực tiếp."
//   },
//   // Question 26
//   {
//     question: "What is the primary goal of encapsulation?",
//     options: {
//       A: "To hide implementation details",
//       B: "To expose all data",
//       C: "To improve performance",
//       D: "To reduce memory usage"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Mục tiêu chính của encapsulation (đóng gói) là ẩn implementation details (chi tiết triển khai). Bằng cách sử dụng private variables và public methods (getters/setters), ta có thể kiểm soát cách dữ liệu được truy cập và thay đổi, giúp code an toàn và dễ bảo trì hơn."
//   },
//   // Question 27
//   {
//     question: "Which access modifier allows access within the same package and subclasses?",
//     options: {
//       A: "private",
//       B: "protected",
//       C: "public",
//       D: "default"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Protected cho phép truy cập trong cùng package và trong subclasses (kể cả subclasses ở package khác). Private chỉ trong cùng class, default chỉ trong cùng package, public ở mọi nơi. Protected kết hợp quyền của default và thêm quyền cho subclasses."
//   },
//   // Question 28
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     private int x = 10;
//     class B {
//         void show() {
//             System.out.print(x);
//         }
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A.B b = new A().new B();
//         b.show();
//     }
// }`,
//     explanation: "Output là 10. Inner class B có thể truy cập private members của outer class A. Đây là đặc điểm của inner classes trong Java - chúng có quyền truy cập đầy đủ vào members của outer class, kể cả private members."
//   },
//   // Question 29
//   {
//     question: "What is a getter method also known as?",
//     options: {
//       A: "Mutator",
//       B: "Accessor",
//       C: "Constructor",
//       D: "Destructor"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Getter method còn được gọi là Accessor (phương thức truy cập). Getter dùng để đọc giá trị của private variable. Setter method được gọi là Mutator (phương thức thay đổi), dùng để gán giá trị. Constructor dùng để khởi tạo object, không phải getter."
//   },
//   // Question 30
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "1",
//       C: "2",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     private static int count = 0;
//     public Test() { count++; }
//     public static int getCount() { return count; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t1 = new Test();
//         Test t2 = new Test();
//         System.out.print(Test.getCount());
//     }
// }`,
//     explanation: "Output là 2. Biến static count được chia sẻ bởi tất cả instances. Mỗi lần tạo object mới (t1, t2), constructor được gọi và count tăng lên 1. Sau khi tạo 2 objects, count = 2. Static method getCount() có thể được gọi trực tiếp từ class mà không cần instance."
//   },
//   // Question 31
//   {
//     question: "Can a private method be overridden?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in subclasses",
//       D: "Only if made protected"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, private methods không thể bị override. Private methods chỉ có thể được truy cập trong cùng class, nên subclass không thể thấy hoặc override chúng. Nếu subclass có method cùng tên, đó là method mới, không phải override. Để override, method phải có ít nhất là protected hoặc public."
//   },
//   // Question 32
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     private int x = 10;
//     int getX() { return x; }
// }
// class B extends A {
//     private int x = 20;
//     int getX() { return x; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.getX());
//     }
// }`,
//     explanation: "Output là 20. Class B override method getX() và trả về biến x của chính nó (20). Mặc dù a được khai báo là kiểu A, nhưng object thực tế là B, nên method getX() của B được gọi (runtime polymorphism). Biến x trong B là biến riêng, không liên quan đến x trong A."
//   },
//   // Question 33
//   {
//     question: "Which is the most encapsulated?",
//     options: {
//       A: "public int x;",
//       B: "protected int x;",
//       C: "int x;",
//       D: "private int x with public getter"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Option D là cách đóng gói tốt nhất. Private variable với public getter cho phép kiểm soát hoàn toàn cách dữ liệu được truy cập. Ta có thể thêm validation, logging, hoặc tính toán trong getter. Public/protected/default variables cho phép truy cập trực tiếp, không kiểm soát được."
//   },
//   // Question 34
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "null",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x;
//     Test(int x) { x = x; }
//     int getX() { return x; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(10);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 0. Trong constructor Test(int x) { x = x; }, cả hai x đều là tham số, không phải instance variable. Cần dùng this.x = x để gán giá trị cho instance variable. Vì không gán được, instance variable x giữ giá trị mặc định 0."
//   },
//   // Question 35
//   {
//     question: "Can we have a private constructor?",
//     options: {
//       A: "No",
//       B: "Yes, but class cannot be instantiated outside",
//       C: "Yes, without any restrictions",
//       D: "Only in abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có thể có private constructor. Khi constructor là private, class không thể được khởi tạo từ bên ngoài class. Điều này được dùng trong Singleton pattern hoặc utility classes (chỉ có static methods). Object chỉ có thể được tạo từ bên trong class (static factory methods)."
//   },
//   // Question 36
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "null"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     protected int x = 10;
// }
// class B extends A {
//     void show() {
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show();
//     }
// }`,
//     explanation: "Output là 10. Class B kế thừa từ A và có thể truy cập protected variable x của parent class. Protected members có thể được truy cập trong subclass, kể cả khi subclass ở package khác. Method show() trong B truy cập x từ A và in ra 10."
//   },
//   // Question 37
//   {
//     question: "What is immutability in the context of encapsulation?",
//     options: {
//       A: "Objects cannot be created",
//       B: "Object state cannot be modified after creation",
//       C: "Objects are always null",
//       D: "Objects are static"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Immutability (bất biến) trong encapsulation có nghĩa là trạng thái của object không thể thay đổi sau khi được tạo. Tất cả fields là final và không có setters. Ví dụ: String, Integer là immutable. Điều này giúp đảm bảo thread-safety và tránh side effects."
//   },
//   // Question 38
//   {
//     question: "What is the output?",
//     options: {
//       A: "30",
//       B: "40",
//       C: "50",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     private int x = 10;
//     private int y = 20;
//     void setX(int x) { this.x = x; }
//     int sum() { return x + y; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(30);
//         System.out.print(t.sum());
//     }
// }`,
//     explanation: "Output là 50. Private variables x và y được đóng gói. Method setX(30) thay đổi x từ 10 thành 30. Method sum() trả về x + y = 30 + 20 = 50. Đây là ví dụ về encapsulation: dữ liệu được bảo vệ (private) và chỉ có thể truy cập qua methods (setX, sum)."
//   },
//   // Question 39
//   {
//     question: "Which package access modifier allows access only within the same package?",
//     options: {
//       A: "private",
//       B: "protected",
//       C: "default (no modifier)",
//       D: "public"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Default access modifier (không có modifier) cho phép truy cập chỉ trong cùng package. Private chỉ trong cùng class, protected trong cùng package và subclasses, public ở mọi nơi. Default còn được gọi là package-private."
//   },
//   // Question 40
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 10",
//       B: "20 20",
//       C: "10 20",
//       D: "20 10"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     int x = 10;
// }
// class B extends A {
//     int x = 20;
//     void show() {
//         System.out.print(super.x + " " + this.x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show();
//     }
// }`,
//     explanation: "Output là '10 20'. Class B có biến x riêng (20) che khuất biến x của parent class A (10). super.x truy cập biến x của parent class (10), this.x truy cập biến x của chính class B (20). Đây là variable hiding, không phải overriding."
//   },
//   // Question 41
//   {
//     question: "What is defensive copying in encapsulation?",
//     options: {
//       A: "Copying the class",
//       B: "Creating copies of mutable objects to prevent external modifications",
//       C: "Copying methods",
//       D: "Duplicating code"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Defensive copying (sao chép phòng thủ) là tạo bản sao của mutable objects để ngăn chặn thay đổi từ bên ngoài. Khi return một mutable object (như array, List), ta nên return một copy thay vì reference gốc để đảm bảo encapsulation. Ví dụ: return Arrays.copyOf(arr, arr.length) thay vì return arr."
//   },
//   // Question 42
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private static int x = 10;
//     static void change() { x = 20; }
//     static int getX() { return x; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.change();
//         System.out.print(Test.getX());
//     }
// }`,
//     explanation: "Output là 20. Private static variable x được đóng gói, chỉ có thể truy cập qua static methods. Test.change() thay đổi x từ 10 thành 20. Test.getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói static variables đúng cách."
//   },
//   // Question 43
//   {
//     question: "Can a protected member be accessed from a different package?",
//     options: {
//       A: "No, never",
//       B: "Yes, only through inheritance",
//       C: "Yes, always",
//       D: "Only if made public"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, protected member có thể được truy cập từ package khác, nhưng CHỈ thông qua inheritance. Trong cùng package, protected có thể truy cập trực tiếp. Ở package khác, chỉ subclass mới có thể truy cập protected members của parent class, không thể truy cập trực tiếp."
//   },
//   // Question 44
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     private void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method show() trong A là private, không thể được truy cập từ bên ngoài class A. Mặc dù B có method show() public, nhưng khi gọi a.show() với a có kiểu A, compiler chỉ thấy method private show() của A, không thể truy cập được."
//   },
//   // Question 45
//   {
//     question: "What is the JavaBean naming convention for a boolean getter?",
//     options: {
//       A: "getProperty()",
//       B: "isProperty()",
//       C: "hasProperty()",
//       D: "checkProperty()"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "JavaBean naming convention cho boolean getter là 'isProperty()' thay vì 'getProperty()'. Ví dụ: isActive(), isEnabled(). Điều này giúp code dễ đọc hơn. Tuy nhiên, 'getProperty()' cũng được chấp nhận cho boolean, nhưng 'isProperty()' là chuẩn."
//   },
//   // Question 46
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "100",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int[] arr = {1, 2, 3};
//     int[] getArr() { return arr; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         int[] a = t.getArr();
//         a[0] = 100;
//         System.out.print(t.getArr()[0]);
//     }
// }`,
//     explanation: "Output là 100. Method getArr() return reference đến array gốc, không phải copy. Khi thay đổi a[0] = 100, nó thay đổi array gốc trong object t. Đây là lỗi encapsulation - nên return defensive copy (Arrays.copyOf) để bảo vệ dữ liệu."
//   },
//   // Question 47
//   {
//     question: "What breaks encapsulation?",
//     options: {
//       A: "Using private variables",
//       B: "Exposing internal mutable objects directly",
//       C: "Using getter methods",
//       D: "Using setter methods with validation"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Exposing internal mutable objects directly (trả về reference trực tiếp đến mutable objects) phá vỡ encapsulation. Khi return array, List, hoặc object có thể thay đổi, code bên ngoài có thể thay đổi dữ liệu bên trong object. Nên return defensive copy hoặc immutable wrapper."
//   },
//   // Question 48
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "Compilation error",
//       D: "0"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     int x = 10;
//     private class B {
//         int x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A.B b = new A().new B();
//         System.out.print(b.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì inner class B được khai báo là private, không thể được truy cập từ bên ngoài class A. Private inner class chỉ có thể được sử dụng bên trong outer class. Không thể tạo instance của private inner class từ bên ngoài."
//   },
//   // Question 49
//   {
//     question: "What is the principle of least privilege in encapsulation?",
//     options: {
//       A: "Give maximum access to all members",
//       B: "Give minimum access level necessary",
//       C: "Make everything public",
//       D: "Make everything private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Principle of least privilege (nguyên tắc đặc quyền tối thiểu) trong encapsulation là cung cấp mức truy cập tối thiểu cần thiết. Bắt đầu với private, chỉ mở rộng (protected, public) khi thực sự cần. Điều này giúp bảo vệ dữ liệu và giảm coupling."
//   },
//   // Question 50
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "30",
//       D: "0"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     private int x;
//     { x = 10; }
//     Test() { x = 20; }
//     Test(int x) { this.x = x; }
//     int getX() { return x; }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(30);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 30. Constructor Test(int x) được gọi với tham số 30. Instance initialization block { x = 10; } chạy trước constructor, nhưng constructor Test(int x) ghi đè giá trị với this.x = x (30). Constructor luôn chạy sau instance block và có thể ghi đè giá trị."
//   },
//   // Question 51
//   {
//     question: "What is the maximum number of classes a Java class can extend?",
//     options: {
//       A: "0",
//       B: "1",
//       C: "2",
//       D: "Unlimited"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Một class trong Java chỉ có thể extend một class duy nhất (single inheritance). Java không hỗ trợ multiple inheritance cho classes để tránh diamond problem. Tuy nhiên, một class có thể implement nhiều interfaces, và một interface có thể extend nhiều interfaces."
//   },
//   // Question 52
//   {
//     question: "What is the output?",
//     options: {
//       A: "134",
//       B: "234",
//       C: "24",
//       D: "13"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     A() { System.out.print("1"); }
//     A(int x) { System.out.print("2"); }
// }
// class B extends A {
//     B() { System.out.print("3"); }
//     B(int x) { super(x); System.out.print("4"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B(5);
//     }
// }`,
//     explanation: "Output là '24'. Khi tạo B(5), constructor B(int x) được gọi. super(x) gọi constructor A(int x) của parent class, in '2'. Sau đó constructor B(int x) tiếp tục, in '4'. Default constructor A() không được gọi vì đã gọi A(int x) qua super(x)."
//   },
//   // Question 53
//   {
//     question: "Which keyword is used to call parent class constructor?",
//     options: {
//       A: "this",
//       B: "super",
//       C: "parent",
//       D: "base"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Từ khóa 'super' được dùng để gọi constructor của parent class. super() hoặc super(parameters) phải là câu lệnh đầu tiên trong constructor. 'this' dùng để gọi constructor của cùng class. 'parent' và 'base' không phải là keywords trong Java."
//   },
//   // Question 54
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     int x = 10;
// }
// class B extends A {
//     int x = 20;
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.x);
//     }
// }`,
//     explanation: "Output là 10. Variables không có polymorphism, chỉ methods mới có. Khi truy cập a.x với a có kiểu A, nó truy cập biến x của class A (10), không phải biến x của class B (20). Đây là variable hiding, không phải overriding."
//   },
//   // Question 55
//   {
//     question: "Can we override static methods?",
//     options: {
//       A: "Yes",
//       B: "No, it's method hiding",
//       C: "Only if made non-static",
//       D: "Only in subclasses"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, static methods không thể bị override, chỉ có thể bị hide (ẩn). Khi subclass có static method cùng tên, nó ẩn method của parent class. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Đây là sự khác biệt với instance methods."
//   },
//   // Question 56
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism (đa hình runtime). Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 57
//   {
//     question: "What must be the first statement in a constructor (if explicitly written)?",
//     options: {
//       A: "System.out.println()",
//       B: "super() or this()",
//       C: "Variable initialization",
//       D: "Method call"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Nếu viết explicitly, câu lệnh đầu tiên trong constructor PHẢI là super() hoặc this(). super() gọi constructor của parent class, this() gọi constructor khác trong cùng class. Nếu không viết, Java tự động thêm super() (gọi default constructor của parent)."
//   },
//   // Question 58
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static void show() { System.out.print("A"); }
// }
// class B extends A {
//     static void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'A'. Static methods không có runtime polymorphism. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Vì a có kiểu A, nên A.show() được gọi, in 'A'. Đây là method hiding, không phải overriding."
//   },
//   // Question 59
//   {
//     question: "Which methods cannot be overridden?",
//     options: {
//       A: "static methods",
//       B: "final methods",
//       C: "private methods",
//       D: "All of the above"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Tất cả các loại trên đều không thể bị override. Static methods bị hide, không phải override. Final methods được thiết kế để không thể override. Private methods không thể thấy từ subclass, nên không thể override. Chỉ non-final, non-static, non-private instance methods mới có thể override."
//   },
//   // Question 60
//   {
//     question: "What is the output?",
//     options: {
//       A: "123",
//       B: "213",
//       C: "321",
//       D: "312"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     A() { this(10); System.out.print("1"); }
//     A(int x) { System.out.print("2"); }
// }
// class B extends A {
//     B() { System.out.print("3"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//     }
// }`,
//     explanation: "Output là '213'. Khi tạo B(), constructor B() gọi super() ngầm định, gọi A(). A() gọi this(10), gọi A(int x), in '2'. Sau đó A() tiếp tục, in '1'. Cuối cùng B() tiếp tục, in '3'. Thứ tự: parent constructor (2) -> parent constructor tiếp (1) -> child constructor (3)."
//   },
//   // Question 61
//   {
//     question: "Can a subclass have a different return type for an overridden method?",
//     options: {
//       A: "No",
//       B: "Yes, if it's a covariant return type",
//       C: "Yes, always",
//       D: "Only if it's primitive"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, subclass có thể có return type khác, nhưng CHỈ khi đó là covariant return type (kiểu con của return type của parent method). Ví dụ: parent method return Animal, subclass method có thể return Dog (nếu Dog extends Animal). Return type phải là subtype, không thể là supertype hoặc kiểu không liên quan."
//   },
//   // Question 62
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints AB"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() throws IOException {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() throws Exception {
//         System.out.print("B");
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì khi override method, checked exception trong subclass không thể rộng hơn (broader) exception trong parent method. Exception là superclass của IOException, nên không được phép. Overridden method chỉ có thể throw cùng exception, subclass của exception, hoặc không throw exception."
//   },
//   // Question 63
//   {
//     question: "What is multilevel inheritance?",
//     options: {
//       A: "A class extends multiple classes",
//       B: "A class is extended by multiple classes",
//       C: "A class extends a class that extends another class",
//       D: "Not supported in Java"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Multilevel inheritance (kế thừa đa cấp) là khi một class extends một class mà class đó lại extends class khác. Ví dụ: C extends B, B extends A. Java hỗ trợ multilevel inheritance. Multiple inheritance (một class extends nhiều classes) thì không được hỗ trợ."
//   },
//   // Question 64
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error in class B",
//       C: "Runtime error",
//       D: "Prints B"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     final void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }`,
//     explanation: "Lỗi biên dịch trong class B vì cố gắng override method final show() của class A. Final methods không thể bị override. Class B có method show() nhưng không thể override method final của parent class. Phải xóa method show() trong B hoặc thay đổi tên method."
//   },
//   // Question 65
//   {
//     question: "What happens if a class doesn't explicitly extend any class?",
//     options: {
//       A: "Compilation error",
//       B: "It implicitly extends Object",
//       C: "It becomes abstract",
//       D: "It cannot be instantiated"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Nếu class không extend class nào, nó tự động (implicitly) extends class Object. Object là root class của tất cả classes trong Java. Mọi class đều kế thừa từ Object, nên có thể sử dụng các methods như toString(), equals(), hashCode() từ Object class."
//   },
//   // Question 66
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     int x = 10;
//     A(int x) { this.x = x; }
// }
// class B extends A {
//     B() { System.out.print(x); }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class A chỉ có constructor có tham số A(int x), không có default constructor. Khi B() được gọi, nó cố gắng gọi super() ngầm định (default constructor của A), nhưng A không có default constructor. Phải thêm super(10) hoặc tạo default constructor trong A."
//   },
//   // Question 67
//   {
//     question: "Can a constructor be final?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in abstract classes",
//       D: "Only if private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, constructor không thể là final. Final chỉ áp dụng cho classes, methods, và variables. Constructor không thể được kế thừa nên không cần final. Constructor có thể là private (dùng cho Singleton), nhưng không thể là final."
//   },
//   // Question 68
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     void show(int x) { System.out.print("A"); }
// }
// class B extends A {
//     void show(long x) { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.show(10);
//     }
// }`,
//     explanation: "Output là 'A'. Method show(long x) trong B không override show(int x) trong A vì parameter types khác nhau (int vs long). Đây là method overloading, không phải overriding. Khi gọi b.show(10), 10 là int, nên method show(int x) của A được gọi (kế thừa), in 'A'."
//   },
//   // Question 69
//   {
//     question: "What is hierarchical inheritance?",
//     options: {
//       A: "A class extends multiple classes",
//       B: "Multiple classes extend a single class",
//       C: "A chain of inheritance",
//       D: "Not supported in Java"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Hierarchical inheritance (kế thừa phân cấp) là khi nhiều classes extend một class duy nhất. Ví dụ: B extends A, C extends A, D extends A. Tất cả đều kế thừa từ A. Đây là pattern phổ biến trong OOP. Multilevel inheritance là khi có chuỗi: C extends B, B extends A."
//   },
//   // Question 70
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "5",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     A() { show(); }
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     int x = 5;
//     void show() { System.out.print(x); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//     }
// }`,
//     explanation: "Output là 0. Khi constructor A() được gọi, nó gọi show() trước khi instance variables của B được khởi tạo. show() của B được gọi (polymorphism), nhưng x chưa được gán giá trị 5, nên x có giá trị mặc định 0. Đây là lý do không nên gọi overridden methods trong constructor."
//   },
//   // Question 71
//   {
//     question: "Can we reduce the visibility of an overridden method?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only to protected",
//       D: "Only to default"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, không thể giảm visibility của overridden method. Overridden method phải có visibility bằng hoặc rộng hơn method của parent class. Ví dụ: nếu parent method là protected, subclass method có thể là protected hoặc public, nhưng không thể là private hoặc default."
//   },
//   // Question 72
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints B"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     private void show() { System.out.print("B"); }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method show() trong B có visibility private, nhỏ hơn visibility của method show() trong A (default/package-private). Overridden method không thể giảm visibility. Phải giữ nguyên hoặc tăng visibility (protected hoặc public)."
//   },
//   // Question 73
//   {
//     question: "What is super.super.method() in Java?",
//     options: {
//       A: "Calls grandparent method",
//       B: "Not valid syntax",
//       C: "Calls parent method twice",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "super.super.method() KHÔNG phải là syntax hợp lệ trong Java. Java không cho phép truy cập trực tiếp đến grandparent class. Chỉ có thể dùng super để truy cập parent class. Nếu cần gọi grandparent method, phải override method trong parent class để gọi super.method()."
//   },
//   // Question 74
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "BA"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { 
//         super.show();
//         System.out.print("B"); 
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show();
//     }
// }`,
//     explanation: "Output là 'AB'. Method show() trong B override method của A. Trong show() của B, super.show() gọi method của parent class A, in 'A'. Sau đó tiếp tục in 'B'. super được dùng để gọi method của parent class trong overridden method."
//   },
//   // Question 75
//   {
//     question: "Can abstract class extend concrete class?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only if concrete class is final",
//       D: "Only if concrete class has abstract methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, abstract class có thể extend concrete class. Abstract class có thể kế thừa từ bất kỳ class nào (abstract hoặc concrete). Ví dụ: abstract class B extends A (concrete). Abstract class có thể có abstract methods và concrete methods, và có thể kế thừa tất cả members từ parent class."
//   },
//   // Question 76
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints nothing"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     A(int x) { }
// }
// class B extends A {
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class A chỉ có constructor có tham số, không có default constructor. Khi tạo B(), constructor B() cố gắng gọi super() ngầm định (default constructor của A), nhưng A không có. Phải thêm constructor B() { super(10); } hoặc tạo default constructor trong A."
//   },
//   // Question 77
//   {
//     question: "What is method overriding?",
//     options: {
//       A: "Same method name, different parameters in same class",
//       B: "Same method signature in parent and child class",
//       C: "Multiple methods with same name",
//       D: "Changing method implementation"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Method overriding là khi subclass có method với cùng signature (tên + tham số) với method của parent class. Overriding cho phép subclass cung cấp implementation riêng. Option A là method overloading (cùng class, khác parameters), không phải overriding."
//   },
//   // Question 78
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Returns 2"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     int show() { return 1; }
// }
// class B extends A {
//     long show() { return 2; }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì return type khác nhau (int vs long) không được coi là override hợp lệ. Overriding yêu cầu cùng return type hoặc covariant return type (subtype). long không phải là subtype của int (cả hai đều là primitive types, không có quan hệ kế thừa)."
//   },
//   // Question 79
//   {
//     question: "Can we override equals() method?",
//     options: {
//       A: "No",
//       B: "Yes, it's from Object class",
//       C: "Only in final classes",
//       D: "Only in abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, có thể override equals() method vì nó đến từ Object class. equals() là instance method public, không phải final, nên có thể override. Khi override equals(), nên override hashCode() để tuân thủ contract: hai objects bằng nhau phải có cùng hashCode."
//   },
//   // Question 80
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "BA"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
//     void display() { super.show(); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.display();
//     }
// }`,
//     explanation: "Output là 'A'. Method display() trong B gọi super.show(), gọi method show() của parent class A, in 'A'. super được dùng để truy cập members của parent class. Method show() của B không được gọi vì display() gọi super.show(), không phải this.show()."
//   },
//   // Question 81
//   {
//     question: "What are the two types of polymorphism in Java?",
//     options: {
//       A: "Static and Dynamic",
//       B: "Compile-time and Runtime",
//       C: "Method overloading and Method overriding",
//       D: "Both B and C"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Cả B và C đều đúng. Polymorphism có hai loại: Compile-time (method overloading) và Runtime (method overriding). Còn được gọi là Static polymorphism (compile-time) và Dynamic polymorphism (runtime). Method overloading là compile-time, method overriding là runtime."
//   },
//   // Question 82
//   {
//     question: "What is the output?",
//     options: {
//       A: "int",
//       B: "Integer",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(int x) { System.out.print("int"); }
//     void show(Integer x) { System.out.print("Integer"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10);
//     }
// }`,
//     explanation: "Output là 'int'. Khi gọi t.show(10), 10 là primitive int. Compiler ưu tiên exact match (int) hơn autoboxing (int -> Integer). Method show(int x) khớp chính xác với primitive int, nên được chọn. Method show(Integer x) yêu cầu autoboxing, chỉ được chọn nếu không có exact match."
//   },
//   // Question 83
//   {
//     question: "Which is an example of compile-time polymorphism?",
//     options: {
//       A: "Method overriding",
//       B: "Method overloading",
//       C: "Interface implementation",
//       D: "Abstract class"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Method overloading là ví dụ của compile-time polymorphism. Compiler quyết định method nào được gọi dựa trên số lượng và kiểu tham số tại compile-time. Method overriding là runtime polymorphism, interface implementation và abstract class cũng là runtime."
//   },
//   // Question 84
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "C",
//       D: "ABC"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// class C extends B {
//     void show() { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new C();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'C'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là C. Method show() của C được gọi (most specific implementation). Trong multilevel inheritance, method của class con nhất (C) được gọi."
//   },
//   // Question 85
//   {
//     question: "Can we overload methods by changing only return type?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only if parameters are also different",
//       D: "Only for static methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, không thể overload methods chỉ bằng cách thay đổi return type. Method signature chỉ bao gồm method name + parameter list, không bao gồm return type. Để overload, phải thay đổi parameter list (số lượng, kiểu, thứ tự). Return type không đủ để phân biệt methods."
//   },
//   // Question 86
//   {
//     question: "What is the output?",
//     options: {
//       A: "varargs",
//       B: "int",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     void show(int... x) { System.out.print("varargs"); }
//     void show(int x) { System.out.print("int"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10);
//     }
// }`,
//     explanation: "Output là 'int'. Khi gọi t.show(10) với một tham số, compiler ưu tiên exact match (show(int x)) hơn varargs (show(int... x)). Varargs chỉ được chọn nếu không có exact match. Nếu gọi t.show(10, 20), varargs sẽ được chọn."
//   },
//   // Question 87
//   {
//     question: "What is dynamic method dispatch?",
//     options: {
//       A: "Calling overloaded methods",
//       B: "Runtime resolution of overridden methods",
//       C: "Compile-time method binding",
//       D: "Static method calling"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Dynamic method dispatch (phân phối method động) là cơ chế runtime resolution của overridden methods. JVM quyết định method nào được gọi dựa trên kiểu thực tế của object tại runtime, không phải kiểu của reference tại compile-time. Đây là cơ chế của runtime polymorphism."
//   },
//   // Question 88
//   {
//     question: "What is the output?",
//     options: {
//       A: "Object",
//       B: "String",
//       C: "Compilation error",
//       D: "NullPointerException"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     void show(Object x) { System.out.print("Object"); }
//     void show(String x) { System.out.print("String"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(null);
//     }
// }`,
//     explanation: "Output là 'String'. Khi gọi t.show(null), compiler chọn method có parameter type cụ thể nhất (most specific). String là subclass của Object, nên show(String x) cụ thể hơn show(Object x). Null có thể được gán cho cả Object và String, nhưng compiler chọn String vì cụ thể hơn."
//   },
//   // Question 89
//   {
//     question: "Can we overload static methods?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only with different return types",
//       D: "Only in subclasses"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, có thể overload static methods. Overloading chỉ yêu cầu khác parameter list, không phụ thuộc vào static hay non-static. Static methods có thể được overload trong cùng class hoặc subclass. Tuy nhiên, static methods không thể override, chỉ có thể hide."
//   },
//   // Question 90
//   {
//     question: "What is the output?",
//     options: {
//       A: "AAA",
//       B: "ABB",
//       C: "BBB",
//       D: "ABC"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a1 = new A();
//         A a2 = new B();
//         B b = new B();
//         a1.show();
//         a2.show();
//         b.show();
//     }
// }`,
//     explanation: "Output là 'ABB'. a1.show() gọi method của A (a1 là object A), in 'A'. a2.show() gọi method của B (runtime polymorphism, a2 là object B), in 'B'. b.show() gọi method của B (b là object B), in 'B'. Runtime polymorphism chỉ áp dụng cho instance methods."
//   },
//   // Question 91
//   {
//     question: "What is covariant return type?",
//     options: {
//       A: "Different return type in overriding",
//       B: "Subtype return type in overriding",
//       C: "Same return type in overloading",
//       D: "Changing return type to primitive"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Covariant return type là khi overridden method có return type là subtype của return type của parent method. Ví dụ: parent method return Animal, subclass method return Dog (nếu Dog extends Animal). Java hỗ trợ covariant return types từ Java 5. Điều này giúp code type-safe và linh hoạt hơn."
//   },
//   // Question 92
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "2",
//       C: "12",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     void show(int x, long y) { System.out.print("1"); }
//     void show(long x, int y) { System.out.print("2"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10, 20);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì ambiguous method call. Cả hai methods đều có thể match với t.show(10, 20): show(int, long) yêu cầu widening int->long cho tham số thứ hai, show(long, int) yêu cầu widening int->long cho tham số đầu. Compiler không thể quyết định method nào, gây lỗi ambiguous."
//   },
//   // Question 93
//   {
//     question: "Can constructors be overridden?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in subclasses",
//       D: "Only if public"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, constructors không thể bị override. Constructors không được kế thừa, mỗi class phải có constructor riêng. Subclass có thể có constructor cùng tên với parent class, nhưng đó là constructor mới, không phải override. Constructor không phải là method nên không thể override."
//   },
//   // Question 94
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "2",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     Number show() { return 1; }
// }
// class B extends A {
//     Integer show() { return 2; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.show());
//     }
// }`,
//     explanation: "Output là 2. Đây là covariant return type - method show() trong B return Integer (subtype của Number). Runtime polymorphism áp dụng, method của B được gọi, return 2. Covariant return type cho phép return type cụ thể hơn trong overridden method, giúp code type-safe hơn."
//   },
//   // Question 95
//   {
//     question: "What is ad-hoc polymorphism?",
//     options: {
//       A: "Runtime polymorphism",
//       B: "Compile-time polymorphism/Method overloading",
//       C: "Interface polymorphism",
//       D: "Abstract polymorphism"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Ad-hoc polymorphism (đa hình tạm thời) là compile-time polymorphism, được thực hiện thông qua method overloading. Compiler quyết định method nào được gọi dựa trên số lượng và kiểu tham số tại compile-time. Khác với parametric polymorphism (generics) và subtype polymorphism (inheritance)."
//   },
//   // Question 96
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "2",
//       C: "12",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     void show(int x) { System.out.print("1"); }
//     void show(int... x) { System.out.print("2"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10, 20);
//     }
// }`,
//     explanation: "Output là '2'. Khi gọi t.show(10, 20) với hai tham số, method show(int x) không match (chỉ nhận một tham số). Method show(int... x) match vì varargs có thể nhận nhiều tham số. Varargs được chọn khi không có exact match. Nếu gọi t.show(10), show(int x) sẽ được chọn (exact match)."
//   },
//   // Question 97
//   {
//     question: "Can we achieve runtime polymorphism without inheritance?",
//     options: {
//       A: "Yes, using interfaces",
//       B: "No",
//       C: "Yes, using method overloading",
//       D: "Yes, using static methods"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Có, có thể đạt runtime polymorphism mà không cần inheritance bằng cách sử dụng interfaces. Khi một class implement interface, và có nhiều classes implement cùng interface, ta có thể đạt runtime polymorphism. Ví dụ: List list = new ArrayList() hoặc List list = new LinkedList(). Method overloading là compile-time, không phải runtime."
//   },
//   // Question 98
//   {
//     question: "What is the output?",
//     options: {
//       A: "AB",
//       B: "BC",
//       C: "AC",
//       D: "ABC"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
//     void show(int x) { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.show();
//         b.show(10);
//     }
// }`,
//     explanation: "Output là 'BC'. b.show() gọi method show() không tham số của B (override từ A), in 'B'. b.show(10) gọi method show(int x) của B (overload), in 'C'. Class B có cả overriding (show()) và overloading (show(int x))."
//   },
//   // Question 99
//   {
//     question: "What is parametric polymorphism in Java?",
//     options: {
//       A: "Method overloading",
//       B: "Generics",
//       C: "Method overriding",
//       D: "Abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Parametric polymorphism (đa hình tham số) trong Java được thực hiện thông qua Generics. Generics cho phép tạo code có thể hoạt động với nhiều kiểu dữ liệu khác nhau mà vẫn type-safe. Ví dụ: List<String>, List<Integer>. Method overloading là ad-hoc polymorphism, method overriding là subtype polymorphism."
//   },
//   // Question 100
//   {
//     question: "What is the output?",
//     options: {
//       A: "Integer",
//       B: "int",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(Integer x) { System.out.print("Integer"); }
//     void show(int x) { System.out.print("int"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         Integer i = 10;
//         t.show(i);
//     }
// }`,
//     explanation: "Output là 'Integer'. Biến i có kiểu Integer (wrapper class). Khi gọi t.show(i), compiler ưu tiên exact match (show(Integer x)) hơn unboxing (Integer -> int). Method show(Integer x) khớp chính xác với kiểu Integer, nên được chọn. Nếu gọi t.show(10) với primitive int, show(int x) sẽ được chọn."
//   },
//   // Question 101
//   {
//     question: "What is the binding time for overloaded methods?",
//     options: {
//       A: "Runtime",
//       B: "Compile-time",
//       C: "Load-time",
//       D: "Dynamic"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Binding time (thời điểm liên kết) cho overloaded methods là compile-time. Compiler quyết định method nào được gọi dựa trên số lượng và kiểu tham số tại thời điểm biên dịch. Đây là static binding. Runtime binding chỉ áp dụng cho overridden methods (dynamic method dispatch)."
//   },
//   // Question 102
//   {
//     question: "What is the output?",
//     options: {
//       A: "AA",
//       B: "AB",
//       C: "BA",
//       D: "BB"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     static void show() { System.out.print("A"); }
// }
// class B extends A {
//     static void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         B b = new B();
//         a.show();
//         b.show();
//     }
// }`,
//     explanation: "Output là 'AB'. Static methods không có runtime polymorphism. a.show() chọn method dựa trên kiểu của reference (A), in 'A'. b.show() chọn method dựa trên kiểu của reference (B), in 'B'. Static methods được bind tại compile-time dựa trên kiểu reference, không phải kiểu object."
//   },
//   // Question 103
//   {
//     question: "Can we have different access modifiers for overloaded methods?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only public",
//       D: "Only private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, có thể có access modifiers khác nhau cho overloaded methods. Overloading chỉ yêu cầu khác parameter list, không yêu cầu cùng access modifier. Ví dụ: có thể có public void show(int x) và private void show(String x). Tuy nhiên, điều này không phải là practice tốt vì gây confusion."
//   },
//   // Question 104
//   {
//     question: "What is the output?",
//     options: {
//       A: "byte",
//       B: "short",
//       C: "int",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(byte x) { System.out.print("byte"); }
//     void show(short x) { System.out.print("short"); }
//     void show(int x) { System.out.print("int"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         byte b = 10;
//         t.show(b);
//     }
// }`,
//     explanation: "Output là 'byte'. Khi gọi t.show(b) với b có kiểu byte, compiler ưu tiên exact match (show(byte x)) hơn widening (byte -> short -> int). Method show(byte x) khớp chính xác với kiểu byte, nên được chọn. Widening chỉ xảy ra khi không có exact match."
//   },
//   // Question 105
//   {
//     question: "What is the principle behind polymorphism?",
//     options: {
//       A: "One interface, multiple implementations",
//       B: "Multiple interfaces, one implementation",
//       C: "One interface, one implementation",
//       D: "Multiple interfaces, multiple implementations"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Nguyên tắc đằng sau polymorphism là 'One interface, multiple implementations' (Một interface, nhiều implementations). Cùng một interface hoặc parent class có thể có nhiều implementations khác nhau. Runtime polymorphism cho phép chọn implementation dựa trên kiểu thực tế của object."
//   },
//   // Question 106
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "I",
//       C: "AI",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// interface I {
//     default void show() { System.out.print("I"); }
// }
// class B extends A implements I {
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.show();
//     }
// }`,
//     explanation: "Output là 'A'. Khi class kế thừa từ class và implement interface có cùng method, class method có ưu tiên cao hơn interface default method. Method show() từ class A được ưu tiên hơn default method show() từ interface I. Nếu không có method trong class, default method từ interface sẽ được dùng."
//   },
//   // Question 107
//   {
//     question: "Can we overload main method?",
//     options: {
//       A: "No",
//       B: "Yes, but JVM will only call String[] version",
//       C: "Yes, and JVM will call all versions",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có thể overload main method. Tuy nhiên, JVM chỉ gọi method main với signature: public static void main(String[] args). Các overloaded versions khác của main có thể được gọi từ code khác, nhưng JVM không tự động gọi chúng. Đây là entry point của Java application."
//   },
//   // Question 108
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "2",
//       C: "12",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(int x, int y) { System.out.print("1"); }
//     void show(Integer x, Integer y) { System.out.print("2"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10, 20);
//     }
// }`,
//     explanation: "Output là '1'. Khi gọi t.show(10, 20) với primitive ints, compiler ưu tiên exact match (show(int, int)) hơn autoboxing (int -> Integer). Method show(int x, int y) khớp chính xác với primitive ints, nên được chọn. Autoboxing chỉ xảy ra khi không có exact match."
//   },
//   // Question 109
//   {
//     question: "What is the instanceof operator used for in polymorphism?",
//     options: {
//       A: "To create instances",
//       B: "To check object type at runtime",
//       C: "To compare objects",
//       D: "To cast objects"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "instanceof operator được dùng để kiểm tra kiểu của object tại runtime. Nó trả về true nếu object là instance của class hoặc subclass hoặc implement interface được chỉ định. Được dùng trước khi downcast để đảm bảo an toàn. Ví dụ: if (obj instanceof String) { String s = (String)obj; }"
//   },
//   // Question 110
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         if (a instanceof B) {
//             ((B)a).show();
//         }
//     }
// }`,
//     explanation: "Output là 'B'. instanceof kiểm tra a có phải là instance của B không (true). Sau đó downcast (B)a và gọi show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast an toàn vì đã kiểm tra instanceof trước."
//   },
//   // Question 111
//   {
//     question: "Can we have different exception specifications in overloaded methods?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only checked exceptions",
//       D: "Only unchecked exceptions"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, có thể có exception specifications khác nhau cho overloaded methods. Overloading chỉ yêu cầu khác parameter list, không yêu cầu cùng exception. Ví dụ: void show() throws IOException và void show(int x) throws Exception là hợp lệ. Exception không phải là phần của method signature."
//   },
//   // Question 112
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "1",
//       C: "3",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     void show(String... args) { System.out.print(args.length); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show("A", "B", "C");
//     }
// }`,
//     explanation: "Output là 3. Varargs (variable arguments) cho phép truyền nhiều tham số cùng kiểu. args.length trả về số lượng tham số được truyền vào. Ở đây truyền 3 strings (\"A\", \"B\", \"C\"), nên args.length = 3. Varargs được xử lý như một array."
//   },
//   // Question 113
//   {
//     question: "What is method overloading based on?",
//     options: {
//       A: "Method name only",
//       B: "Method signature (name + parameters)",
//       C: "Return type only",
//       D: "Access modifier only"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Method overloading dựa trên method signature, bao gồm method name + parameter list (số lượng, kiểu, thứ tự). Return type, access modifier, và exception không phải là phần của signature, nên không thể dùng để phân biệt overloaded methods."
//   },
//   // Question 114
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     void show(int x) { System.out.print("A"); }
// }
// class B extends A {
//     void show(long x) { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show(10);
//     }
// }`,
//     explanation: "Output là 'A'. Method show(long x) trong B không override show(int x) trong A vì parameter types khác nhau (int vs long). Đây là method overloading, không phải overriding. Khi gọi a.show(10), method show(int x) của A được gọi (kế thừa), in 'A'. Runtime polymorphism chỉ áp dụng khi override."
//   },
//   // Question 115
//   {
//     question: "What is type casting in context of polymorphism?",
//     options: {
//       A: "Converting primitive types",
//       B: "Converting reference types",
//       C: "Creating new objects",
//       D: "Copying objects"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Type casting trong context của polymorphism là chuyển đổi reference types (kiểu tham chiếu). Upcasting (A a = new B()) là tự động và an toàn. Downcasting ((B)a) cần explicit cast và nên kiểm tra instanceof trước. Casting không tạo object mới, chỉ thay đổi kiểu reference."
//   },
//   // Question 116
//   {
//     question: "What is the output?",
//     options: {
//       A: "1",
//       B: "2",
//       C: "12",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     void show(Object x) { System.out.print("1"); }
//     void show(Exception x) { System.out.print("2"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(new RuntimeException());
//     }
// }`,
//     explanation: "Output là '2'. RuntimeException là subclass của Exception. Khi có nhiều methods có thể match, compiler chọn method có parameter type cụ thể nhất (most specific). Exception cụ thể hơn Object, nên show(Exception x) được chọn. Đây là method overloading resolution."
//   },
//   // Question 117
//   {
//     question: "Can we achieve polymorphism with private methods?",
//     options: {
//       A: "Yes",
//       B: "No, private methods cannot be overridden",
//       C: "Only in same class",
//       D: "Only with interfaces"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, không thể đạt polymorphism với private methods vì private methods không thể bị override. Private methods chỉ có thể được truy cập trong cùng class, nên subclass không thể thấy hoặc override chúng. Polymorphism yêu cầu method có thể được override, nên cần ít nhất là protected hoặc public."
//   },
//   // Question 118
//   {
//     question: "What is the output?",
//     options: {
//       A: "AA",
//       B: "BC",
//       C: "AC",
//       D: "CC"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// class C extends B {
//     void show() { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         B b = new C();
//         a.show();
//         b.show();
//     }
// }`,
//     explanation: "Output là 'BC'. a.show() với a là object B (kiểu A), runtime polymorphism gọi method của B, in 'B'. b.show() với b là object C (kiểu B), runtime polymorphism gọi method của C, in 'C'. Trong multilevel inheritance, method của class con nhất được gọi."
//   },
//   // Question 119
//   {
//     question: "What is the widening conversion priority in method overloading?",
//     options: {
//       A: "byte -> short -> int -> long -> float -> double",
//       B: "int -> long -> float -> double -> Object",
//       C: "int -> Integer -> Object",
//       D: "All of the above in order"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Tất cả các thứ tự trên đều đúng. Widening conversion priority: primitive widening (byte->short->int->long->float->double), sau đó autoboxing (int->Integer), cuối cùng là widening reference (Integer->Number->Object). Compiler chọn method với ít widening nhất."
//   },
//   // Question 120
//   {
//     question: "What is the output?",
//     options: {
//       A: "float",
//       B: "double",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(float x) { System.out.print("float"); }
//     void show(double x) { System.out.print("double"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10);
//     }
// }`,
//     explanation: "Output là 'float'. Khi gọi t.show(10) với literal 10 (int), compiler chọn widening ít nhất. int có thể widen thành float hoặc double, nhưng float gần hơn trong widening chain (int->long->float->double). Nếu không có show(float), show(double) sẽ được chọn."
//   },
//   // Question 121
//   {
//     question: "What is the difference between abstract class and interface?",
//     options: {
//       A: "Abstract class can have constructors, interface cannot",
//       B: "Abstract class can have instance variables, interface has only constants",
//       C: "A class can extend one abstract class but implement multiple interfaces",
//       D: "All of the above"
//     },
//     correctAnswer: "D",
//     code: null,
//     explanation: "Tất cả đều đúng. Abstract class có thể có constructors, instance variables, concrete methods. Interface chỉ có constants (static final), abstract methods (trước Java 8), default/static methods (từ Java 8). Một class chỉ extend một abstract class nhưng có thể implement nhiều interfaces. Abstract class dùng cho 'is-a', interface dùng cho 'can-do'."
//   },
//   // Question 122
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "BA"
//     },
//     correctAnswer: "D",
//     code: `abstract class A {
//     abstract void show();
//     void display() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//         a.display();
//     }
// }`,
//     explanation: "Output là 'BA'. a.show() gọi abstract method show() được implement trong B, in 'B' (runtime polymorphism). a.display() gọi concrete method display() từ A, in 'A'. Abstract class có thể có cả abstract methods (phải implement) và concrete methods (kế thừa)."
//   },
//   // Question 123
//   {
//     question: "Can an abstract class have a constructor?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only if it has abstract methods",
//       D: "Only if it's private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, abstract class có thể có constructor. Constructor được dùng để khởi tạo instance variables và thực hiện initialization logic. Constructor của abstract class được gọi khi tạo object của concrete subclass. Abstract class không thể được khởi tạo trực tiếp, nhưng constructor vẫn cần thiết cho subclass."
//   },
//   // Question 124
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints 20"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     int x = 10;
// }
// class A implements I {
//     void show() { x = 20; }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến x trong interface là static final (constant), không thể thay đổi giá trị. Interface variables mặc định là public static final, nên x = 10 là constant. Không thể gán lại x = 20. Nếu cần thay đổi giá trị, phải dùng instance variable trong class, không phải interface variable."
//   },
//   // Question 125
//   {
//     question: "Can an abstract method be static?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in interfaces",
//       D: "Only in abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, abstract method không thể là static. Abstract methods yêu cầu subclass phải implement chúng, nhưng static methods không thể bị override (chỉ hide). Đây là mâu thuẫn logic. Static methods có thể có trong abstract class, nhưng không thể là abstract."
//   },
//   // Question 126
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `abstract class A {
//     A() { System.out.print("A"); }
// }
// class B extends A {
//     B() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//     }
// }`,
//     explanation: "Output là 'AB'. Khi tạo B(), constructor của parent class A được gọi trước (thông qua super() ngầm định), in 'A'. Sau đó constructor của B được gọi, in 'B'. Abstract class có thể có constructor, và constructor được gọi khi tạo object của concrete subclass."
//   },
//   // Question 127
//   {
//     question: "Can an interface extend another interface?",
//     options: {
//       A: "No",
//       B: "Yes, using extends",
//       C: "Yes, using implements",
//       D: "Only if both are abstract"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, interface có thể extend interface khác bằng từ khóa 'extends'. Một interface có thể extend nhiều interfaces (multiple inheritance cho interfaces). Ví dụ: interface I3 extends I1, I2. Interface không dùng 'implements', chỉ dùng 'extends' để kế thừa từ interface khác."
//   },
//   // Question 128
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "A",
//       C: "IA",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     default void show() { System.out.print("I"); }
// }
// class A implements I {
//     public void show() { System.out.print("A"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new A();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'A'. Class A implement interface I và override default method show(). Khi class override default method, implementation của class có ưu tiên. Runtime polymorphism áp dụng, method show() của A được gọi, in 'A'. Default method từ interface chỉ được dùng nếu class không override."
//   },
//   // Question 129
//   {
//     question: "Can an abstract class have all concrete methods?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only if no abstract methods",
//       D: "Only if final"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, abstract class có thể có tất cả concrete methods (không có abstract methods). Abstract class không bắt buộc phải có abstract methods. Abstract class chỉ cần được khai báo là abstract, có thể có tất cả concrete methods. Tuy nhiên, abstract class vẫn không thể được khởi tạo trực tiếp."
//   },
//   // Question 130
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "C",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `abstract class A {
//     abstract void show();
// }
// abstract class B extends A {
// }
// class C extends B {
//     void show() { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new C();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'C'. Abstract class B extends A nhưng không implement abstract method show(). Class C extends B và implement show(), in 'C'. Abstract method từ A được implement ở class con nhất (C). Runtime polymorphism áp dụng, method show() của C được gọi."
//   },
//   // Question 131
//   {
//     question: "What is the default access modifier for interface methods (before Java 8)?",
//     options: {
//       A: "private",
//       B: "protected",
//       C: "public",
//       D: "default"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Default access modifier cho interface methods (trước Java 8) là public. Tất cả methods trong interface mặc định là public abstract. Từ Java 8, interface có thể có default methods và static methods, nhưng abstract methods vẫn mặc định là public."
//   },
//   // Question 132
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints I1I2"
//     },
//     correctAnswer: "B",
//     code: `interface I1 {
//     default void show() { System.out.print("I1"); }
// }
// interface I2 {
//     default void show() { System.out.print("I2"); }
// }
// class A implements I1, I2 {
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class A implement hai interfaces I1 và I2, cả hai đều có default method show() với cùng signature. Điều này gây conflict (xung đột). Class A phải override method show() để giải quyết conflict, hoặc chỉ implement một trong hai interfaces."
//   },
//   // Question 133
//   {
//     question: "Can an abstract class be final?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only if no abstract methods",
//       D: "Only if private"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, abstract class không thể là final. Abstract class được thiết kế để được kế thừa, trong khi final class không thể được kế thừa. Đây là mâu thuẫn logic. Class không thể vừa abstract (phải kế thừa) vừa final (không thể kế thừa)."
//   },
//   // Question 134
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract class A có concrete method show(). Class B override method show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract class có thể có cả abstract methods và concrete methods."
//   },
//   // Question 135
//   {
//     question: "Can interfaces have static methods?",
//     options: {
//       A: "No",
//       B: "Yes, from Java 8",
//       C: "Only default methods",
//       D: "Only abstract methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, interfaces có thể có static methods từ Java 8. Static methods trong interface phải có body (implementation) và được gọi qua tên interface (InterfaceName.methodName()). Static methods không thể được override và không được kế thừa bởi implementing classes."
//   },
//   // Question 136
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "Compiles successfully",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `interface I {
//     static void show() { System.out.print("I"); }
// }
// class A implements I {
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new A();
//         a.show();
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì static methods trong interface không được kế thừa bởi implementing classes. Static methods chỉ có thể được gọi qua tên interface: I.show(). Không thể gọi a.show() vì static methods không thuộc về instance. Phải gọi I.show() thay vì a.show()."
//   },
//   // Question 137
//   {
//     question: "What is a functional interface?",
//     options: {
//       A: "Interface with only one abstract method",
//       B: "Interface with multiple methods",
//       C: "Interface with static methods",
//       D: "Interface with default methods"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Functional interface là interface có chỉ một abstract method. Functional interface có thể có nhiều default methods và static methods, nhưng chỉ có một abstract method. Ví dụ: Runnable, Comparator. Functional interface được dùng với lambda expressions và method references từ Java 8."
//   },
//   // Question 138
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `abstract class A {
//     abstract void show();
//     void show(int x) { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.show(10);
//     }
// }`,
//     explanation: "Output là 'A'. Class B override abstract method show() (không tham số), nhưng kế thừa concrete method show(int x) từ A. Khi gọi b.show(10), method show(int x) của A được gọi (kế thừa), in 'A'. Method overloading cho phép có nhiều methods cùng tên với parameters khác nhau."
//   },
//   // Question 139
//   {
//     question: "Can we create an instance of an abstract class?",
//     options: {
//       A: "Yes",
//       B: "No, but we can create anonymous instances",
//       C: "Only if it has no abstract methods",
//       D: "Only using reflection"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG thể tạo instance trực tiếp của abstract class bằng new AbstractClass(). Tuy nhiên, có thể tạo anonymous instances bằng cách cung cấp implementation cho abstract methods ngay tại chỗ: new AbstractClass() { void abstractMethod() { } }. Đây là anonymous inner class."
//   },
//   // Question 140
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "A",
//       C: "B",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `interface I {
//     void show();
// }
// abstract class A implements I {
// }
// class B extends A {
//     public void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new B();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract class A implement interface I nhưng không implement method show(). Class B extends A và implement show(), in 'B'. Abstract class có thể implement interface mà không cần implement tất cả methods, để lại cho subclass. Runtime polymorphism áp dụng, method show() của B được gọi."
//   },
//   // Question 141
//   {
//     question: "Can abstract method be private?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in abstract classes",
//       D: "Only in interfaces"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, abstract method không thể là private. Abstract methods yêu cầu subclass phải implement chúng, nhưng private methods không thể được truy cập từ subclass. Đây là mâu thuẫn logic. Abstract methods phải có ít nhất là protected hoặc public để subclass có thể override."
//   },
//   // Question 142
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "10",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     abstract int show();
// }
// class B extends A {
//     int show() { return 10; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.show());
//     }
// }`,
//     explanation: "Output là 10. Abstract method show() trong A được implement trong B, return 10. Runtime polymorphism áp dụng, method show() của B được gọi, return 10. Abstract methods có thể có return type, và subclass phải implement với cùng return type hoặc covariant return type."
//   },
//   // Question 143
//   {
//     question: "What is the diamond problem in interfaces?",
//     options: {
//       A: "Multiple inheritance conflict",
//       B: "Interface extending multiple interfaces",
//       C: "Ambiguity when implementing multiple interfaces with same default methods",
//       D: "Cannot create diamond shape"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Diamond problem trong interfaces là ambiguity (sự mơ hồ) khi một class implement nhiều interfaces có cùng default methods. Khi hai interfaces có default method cùng signature, class phải override method đó để giải quyết conflict. Đây là vấn đề của multiple inheritance trong interfaces."
//   },
//   // Question 144
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "10",
//       C: "null",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     int x = 10;
// }
// class A implements I {
//     void show() { System.out.print(x); }
// }
// public class Main {
//     public static void main(String[] args) {
//         new A().show();
//     }
// }`,
//     explanation: "Output là 10. Interface variable x mặc định là public static final (constant), có giá trị 10. Class A implement I và có thể truy cập x. Interface variables được kế thừa bởi implementing classes và có thể được truy cập trực tiếp (I.x) hoặc qua instance (x)."
//   },
//   // Question 145
//   {
//     question: "Can an interface extend an abstract class?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only if abstract class has no methods",
//       D: "Only if both are abstract"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, interface không thể extend abstract class. Interface chỉ có thể extend interface khác (bằng từ khóa extends). Interface không thể extend class (abstract hoặc concrete). Class có thể implement interface, nhưng interface không thể extend class."
//   },
//   // Question 146
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     A() { show(); }
//     abstract void show();
// }
// class B extends A {
//     int x = 10;
//     void show() { System.out.print(x); }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B();
//     }
// }`,
//     explanation: "Output là 0. Khi constructor A() được gọi, nó gọi show() trước khi instance variables của B được khởi tạo. show() của B được gọi (polymorphism), nhưng x chưa được gán giá trị 10, nên x có giá trị mặc định 0. Đây là lý do không nên gọi abstract/overridden methods trong constructor."
//   },
//   // Question 147
//   {
//     question: "Can interfaces have private methods?",
//     options: {
//       A: "No",
//       B: "Yes, from Java 9",
//       C: "Only static private methods",
//       D: "Only default private methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, interfaces có thể có private methods từ Java 9. Private methods trong interface được dùng để chia sẻ code giữa default methods và static methods trong cùng interface. Private methods không thể được truy cập từ bên ngoài interface, chỉ có thể được gọi từ default methods và static methods trong cùng interface."
//   },
//   // Question 148
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints show twice"
//     },
//     correctAnswer: "A",
//     code: `interface I1 {
//     void show();
// }
// interface I2 {
//     void show();
// }
// class A implements I1, I2 {
//     public void show() { System.out.print("A"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new A();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'A'. Class A implement cả I1 và I2, cả hai đều có abstract method show() với cùng signature. Một implementation duy nhất của show() trong A đáp ứng cả hai interfaces. Không có conflict vì cả hai đều là abstract methods, không phải default methods."
//   },
//   // Question 149
//   {
//     question: "What is the purpose of abstraction?",
//     options: {
//       A: "To hide implementation details",
//       B: "To show all details",
//       C: "To reduce code",
//       D: "To increase performance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Mục đích của abstraction (trừu tượng) là ẩn implementation details (chi tiết triển khai) và chỉ hiển thị những gì cần thiết. Abstraction cho phép tập trung vào 'what' (làm gì) thay vì 'how' (làm như thế nào). Được thực hiện thông qua abstract classes và interfaces."
//   },
//   // Question 150
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "C",
//       D: "ABC"
//     },
//     correctAnswer: "C",
//     code: `abstract class A {
//     abstract void show();
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// class C extends B {
//     void show() { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new C();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'C'. Abstract method show() trong A được implement trong B, sau đó B bị override bởi C. Runtime polymorphism áp dụng, method show() của class con nhất (C) được gọi, in 'C'. Trong multilevel inheritance, method của class con nhất được ưu tiên."
//   },
//   // Question 151
//   {
//     question: "Can abstract class implement interface without implementing its methods?",
//     options: {
//       A: "No",
//       B: "Yes",
//       C: "Only if abstract class is also abstract",
//       D: "Only if interface is functional"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, abstract class có thể implement interface mà không cần implement methods. Abstract class có thể để lại việc implement methods cho subclass. Điều này cho phép abstract class định nghĩa contract từ interface và để subclass implement chi tiết."
//   },
//   // Question 152
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Nothing"
//     },
//     correctAnswer: "A",
//     code: `interface I {
//     default void show() { display(); }
//     private void display() { System.out.print("I"); }
// }
// class A implements I {
// }
// public class Main {
//     public static void main(String[] args) {
//         new A().show();
//     }
// }`,
//     explanation: "Output là 'I'. Interface I có default method show() gọi private method display(). Class A implement I và kế thừa default method show(). Khi gọi a.show(), default method show() được gọi, gọi private method display(), in 'I'. Private methods trong interface (từ Java 9) có thể được gọi từ default methods."
//   },
//   // Question 153
//   {
//     question: "What is marker interface?",
//     options: {
//       A: "Interface with methods",
//       B: "Interface with no methods",
//       C: "Interface with default methods",
//       D: "Interface with static methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Marker interface là interface không có methods (empty interface). Marker interface được dùng để đánh dấu (mark) một class có một đặc tính nào đó. Ví dụ: Serializable, Cloneable. Từ Java 5, annotations được dùng thay cho marker interfaces trong nhiều trường hợp."
//   },
//   // Question 154
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Abstract class cannot have final methods"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     final abstract void show();
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method không thể vừa final vừa abstract. Final methods không thể bị override, trong khi abstract methods yêu cầu subclass phải implement chúng. Đây là mâu thuẫn logic. Method phải là final hoặc abstract, không thể cả hai."
//   },
//   // Question 155
//   {
//     question: "Can interface variables be non-static?",
//     options: {
//       A: "Yes",
//       B: "No, they are implicitly static and final",
//       C: "Only if declared explicitly",
//       D: "Only in functional interfaces"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, interface variables không thể là non-static. Tất cả variables trong interface mặc định là public static final (constants). Không thể khai báo instance variables trong interface. Interface chỉ có thể có constants, không có instance variables."
//   },
//   // Question 156
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Nothing"
//     },
//     correctAnswer: "A",
//     code: `interface I {
//     void show();
// }
// class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A implements I {
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new B();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'A'. Class B kế thừa method show() từ class A. Class B implement interface I, nhưng không override show(), nên sử dụng method show() được kế thừa từ A. Runtime polymorphism áp dụng, method show() của A được gọi, in 'A'."
//   },
//   // Question 157
//   {
//     question: "What is the difference between abstract method and concrete method?",
//     options: {
//       A: "Abstract has no body, concrete has body",
//       B: "Abstract is in interface, concrete is in class",
//       C: "Abstract is public, concrete is private",
//       D: "No difference"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Sự khác biệt chính giữa abstract method và concrete method là abstract method không có body (implementation), concrete method có body. Abstract methods chỉ có signature, yêu cầu subclass phải implement. Concrete methods có implementation đầy đủ và có thể được gọi trực tiếp."
//   },
//   // Question 158
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints B"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     abstract void show();
// }
// class B extends A {
//     void show() throws IOException { 
//         System.out.print("B"); 
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì abstract method show() trong A không throws exception, nhưng overridden method show() trong B throws IOException. Overridden method không thể throw checked exception rộng hơn (broader) exception của parent method. Chỉ có thể throw cùng exception, subclass của exception, hoặc không throw exception."
//   },
//   // Question 159
//   {
//     question: "Can we have a concrete method in an interface?",
//     options: {
//       A: "No",
//       B: "Yes, default and static methods",
//       C: "Only default methods",
//       D: "Only static methods"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "Có, interface có thể có concrete methods từ Java 8: default methods và static methods. Default methods có body và có thể được kế thừa bởi implementing classes. Static methods có body và được gọi qua tên interface. Trước Java 8, interface chỉ có abstract methods."
//   },
//   // Question 160
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "A",
//       C: "B",
//       D: "IB"
//     },
//     correctAnswer: "C",
//     code: `interface I {
//     default void show() { System.out.print("I"); }
// }
// abstract class A implements I {
// }
// class B extends A {
//     public void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract class A implement interface I và kế thừa default method show(). Class B extends A và override show(), in 'B'. Runtime polymorphism áp dụng, method show() của B được gọi. Class method có ưu tiên cao hơn interface default method."
//   },
//   // Question 161
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "ClassCastException"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         ((B)a).show();
//     }
// }`,
//     explanation: "Output là 'B'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast an toàn vì object thực tế là B. Không có ClassCastException vì object là instance của B."
//   },
//   // Question 162
//   {
//     question: "What is the Liskov Substitution Principle?",
//     options: {
//       A: "Objects of superclass should be replaceable with objects of subclass",
//       B: "Objects should be immutable",
//       C: "Classes should be final",
//       D: "Methods should be static"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Liskov Substitution Principle (Nguyên tắc thay thế Liskov) là một trong các nguyên tắc SOLID. Nó nói rằng objects của superclass nên có thể được thay thế bởi objects của subclass mà không làm thay đổi hành vi của chương trình. Subclass phải có thể thay thế parent class mà không phá vỡ functionality."
//   },
//   // Question 163
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 10",
//       B: "20 20",
//       C: "10 20",
//       D: "20 10"
//     },
//     correctAnswer: "C",
//     code: `class Outer {
//     int x = 10;
//     class Inner {
//         int x = 20;
//         void show() {
//             System.out.print(Outer.this.x + " " + this.x);
//         }
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Outer.Inner i = new Outer().new Inner();
//         i.show();
//     }
// }`,
//     explanation: "Output là '10 20'. Inner class có biến x riêng (20) che khuất biến x của outer class (10). Outer.this.x truy cập biến x của outer class (10), this.x truy cập biến x của inner class (20). Outer.this được dùng để truy cập members của outer class khi bị che khuất."
//   },
//   // Question 164
//   {
//     question: "What is composition over inheritance?",
//     options: {
//       A: "Using \"has-a\" relationship instead of \"is-a\"",
//       B: "Using inheritance always",
//       C: "Using interfaces instead of classes",
//       D: "Using abstract classes"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Composition over inheritance (Ưu tiên composition hơn inheritance) là nguyên tắc sử dụng mối quan hệ \"has-a\" (composition) thay vì \"is-a\" (inheritance) khi có thể. Composition linh hoạt hơn, dễ thay đổi và test hơn. Inheritance tạo tight coupling, composition tạo loose coupling."
//   },
//   // Question 165
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error in class B",
//       D: "Compilation error in Main"
//     },
//     correctAnswer: "D",
//     code: `class A {
//     void show() throws Exception {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Lỗi biên dịch trong Main vì method show() trong A throws Exception (checked exception), nên khi gọi a.show() trong main(), phải handle exception (try-catch hoặc throws). Overridden method trong B không throws exception là hợp lệ (có thể giảm exception), nhưng khi gọi qua reference type A, vẫn phải handle exception."
//   },
//   // Question 166
//   {
//     question: "What is shallow copy vs deep copy?",
//     options: {
//       A: "Shallow copies references, deep copies objects",
//       B: "Shallow is faster",
//       C: "Deep is better",
//       D: "Both A and B"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Shallow copy (sao chép nông) chỉ sao chép references, không sao chép objects được tham chiếu. Deep copy (sao chép sâu) sao chép cả objects, tạo objects mới hoàn toàn độc lập. Shallow copy nhanh hơn nhưng có thể gây side effects. Deep copy an toàn hơn nhưng chậm hơn."
//   },
//   // Question 167
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 10",
//       B: "20 20",
//       C: "10 20",
//       D: "20 10"
//     },
//     correctAnswer: "C",
//     code: `class A implements Cloneable {
//     int x = 10;
//     A clone() throws CloneNotSupportedException {
//         return (A) super.clone();
//     }
// }
// public class Main {
//     public static void main(String[] args) throws Exception {
//         A a1 = new A();
//         A a2 = a1.clone();
//         a2.x = 20;
//         System.out.print(a1.x + " " + a2.x);
//     }
// }`,
//     explanation: "Output là '10 20'. Method clone() tạo shallow copy của object. a2 là bản sao của a1, nhưng là object riêng biệt. Khi thay đổi a2.x = 20, chỉ a2 bị ảnh hưởng, a1.x vẫn là 10. Vì x là primitive int, shallow copy đủ để tạo object độc lập."
//   },
//   // Question 168
//   {
//     question: "What is the Single Responsibility Principle?",
//     options: {
//       A: "A class should have only one reason to change",
//       B: "A class should have only one method",
//       C: "A class should have only one variable",
//       D: "A class should be used once"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Single Responsibility Principle (Nguyên tắc trách nhiệm đơn) là một trong các nguyên tắc SOLID. Nó nói rằng một class chỉ nên có một lý do để thay đổi. Class nên có một trách nhiệm duy nhất, giúp code dễ bảo trì, test và mở rộng hơn."
//   },
//   // Question 169
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     synchronized void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Method show() trong B override method của A. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Synchronized modifier không phải là phần của method signature, nên có thể override synchronized method bằng non-synchronized method."
//   },
//   // Question 170
//   {
//     question: "What is the Open/Closed Principle?",
//     options: {
//       A: "Classes should be open for extension, closed for modification",
//       B: "Classes should be open for everything",
//       C: "Classes should be closed always",
//       D: "Classes should be abstract"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Open/Closed Principle (Nguyên tắc mở/đóng) là một trong các nguyên tắc SOLID. Nó nói rằng classes nên mở cho extension (mở rộng) nhưng đóng cho modification (sửa đổi). Có thể thêm functionality mới thông qua inheritance hoặc composition mà không cần sửa code hiện có."
//   },
//   // Question 171
//   {
//     question: "What is the output?",
//     options: {
//       A: "0",
//       B: "1",
//       C: "2",
//       D: "TUE"
//     },
//     correctAnswer: "B",
//     code: `enum Day {
//     MON, TUE, WED;
//     void show() { System.out.print(this.ordinal()); }
// }
// public class Main {
//     public static void main(String[] args) {
//         Day.TUE.show();
//     }
// }`,
//     explanation: "Output là 1. Enum Day có các constants MON, TUE, WED. ordinal() trả về vị trí của enum constant (0-based). MON = 0, TUE = 1, WED = 2. Day.TUE.show() gọi method show() trên TUE, in ordinal() của TUE là 1."
//   },
//   // Question 172
//   {
//     question: "What is association in OOP?",
//     options: {
//       A: "Relationship between two classes",
//       B: "Creating objects",
//       C: "Destroying objects",
//       D: "Copying objects"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Association (liên kết) trong OOP là mối quan hệ giữa hai classes, cho phép một object sử dụng hoặc tương tác với object khác. Association có thể là one-to-one, one-to-many, many-to-one, hoặc many-to-many. Đây là mối quan hệ cơ bản nhất trong OOP."
//   },
//   // Question 173
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "30",
//       D: "40"
//     },
//     correctAnswer: "D",
//     code: `class A {
//     static int x = 10;
//     static { x = 20; }
//     { x = 30; }
//     A() { x = 40; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a1 = new A();
//         A a2 = new A();
//         System.out.print(A.x);
//     }
// }`,
//     explanation: "Output là 40. Static variable x được chia sẻ bởi tất cả instances. Thứ tự thực thi: khởi tạo x = 10, static block gán x = 20, instance block gán x = 30 (khi tạo a1), constructor gán x = 40 (khi tạo a1). Khi tạo a2, instance block và constructor lại gán x = 30 và 40. Giá trị cuối cùng là 40."
//   },
//   // Question 174
//   {
//     question: "What is aggregation in OOP?",
//     options: {
//       A: "Weak \"has-a\" relationship",
//       B: "Strong \"has-a\" relationship",
//       C: "\"is-a\" relationship",
//       D: "No relationship"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Aggregation (tập hợp) trong OOP là mối quan hệ \"has-a\" yếu (weak has-a relationship). Trong aggregation, child object có thể tồn tại độc lập với parent object. Ví dụ: Department has-a Professor. Nếu Department bị xóa, Professor vẫn tồn tại. Composition là strong has-a, child không thể tồn tại độc lập."
//   },
//   // Question 175
//   {
//     question: "What is the output?",
//     options: {
//       A: "Compiles successfully",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "Prints both"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show(List<String> list) {
//         System.out.print("String");
//     }
//     void show(List<Integer> list) {
//         System.out.print("Integer");
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method overloading với generic types List<String> và List<Integer> không được phép. Do type erasure, cả hai methods có cùng signature sau khi compile (List list), gây conflict. Generic types bị xóa tại compile-time, nên không thể dùng để phân biệt overloaded methods."
//   },
//   // Question 176
//   {
//     question: "What is dependency injection?",
//     options: {
//       A: "Providing dependencies from outside",
//       B: "Creating dependencies inside",
//       C: "Destroying dependencies",
//       D: "Copying dependencies"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Dependency Injection (Tiêm phụ thuộc) là pattern cung cấp dependencies từ bên ngoài thay vì tạo bên trong class. Dependencies được inject qua constructor, setter, hoặc interface. Điều này giúp giảm coupling, tăng testability, và tuân thủ Dependency Inversion Principle."
//   },
//   // Question 177
//   {
//     question: "What is the output?",
//     options: {
//       A: "Hello",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "null"
//     },
//     correctAnswer: "A",
//     code: `interface I<T> {
//     void show(T t);
// }
// class A implements I<String> {
//     public void show(String s) { 
//         System.out.print(s); 
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I<String> i = new A();
//         i.show("Hello");
//     }
// }`,
//     explanation: "Output là 'Hello'. Generic interface I<T> được implement với type String. Class A implement I<String> và implement method show(String s). Runtime polymorphism áp dụng, method show() của A được gọi với tham số \"Hello\", in 'Hello'."
//   },
//   // Question 178
//   {
//     question: "What is the Interface Segregation Principle?",
//     options: {
//       A: "Clients shouldn't be forced to depend on interfaces they don't use",
//       B: "Use as many interfaces as possible",
//       C: "Don't use interfaces",
//       D: "Interfaces should be large"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Interface Segregation Principle (Nguyên tắc phân tách interface) là một trong các nguyên tắc SOLID. Nó nói rằng clients không nên bị buộc phải depend on interfaces mà họ không sử dụng. Interfaces nên nhỏ và cụ thể, không nên có methods không cần thiết. Tốt hơn là có nhiều interfaces nhỏ thay vì một interface lớn."
//   },
//   // Question 179
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "null"
//     },
//     correctAnswer: "A",
//     code: `class A<T> {
//     T obj;
//     A(T obj) { this.obj = obj; }
//     T get() { return obj; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A<Integer> a = new A<>(10);
//         System.out.print(a.get());
//     }
// }`,
//     explanation: "Output là 10. Generic class A<T> được khởi tạo với type Integer. Constructor A(10) nhận Integer 10 và gán cho obj. Method get() trả về obj có kiểu Integer, in ra 10. Generics cho phép type-safe code và tránh casting."
//   },
//   // Question 180
//   {
//     question: "What is the Dependency Inversion Principle?",
//     options: {
//       A: "High-level modules shouldn't depend on low-level modules",
//       B: "All modules should depend on each other",
//       C: "No dependencies allowed",
//       D: "Only low-level dependencies"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Dependency Inversion Principle (Nguyên tắc đảo ngược phụ thuộc) là một trong các nguyên tắc SOLID. Nó nói rằng high-level modules không nên depend on low-level modules, cả hai nên depend on abstractions (interfaces hoặc abstract classes). Điều này giúp giảm coupling và tăng flexibility."
//   },
//   // Question 181
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "C",
//       D: "ClassCastException"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// class C extends B {
//     void show() { System.out.print("C"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new C();
//         B b = (B) a;
//         b.show();
//     }
// }`,
//     explanation: "Output là 'C'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của class con nhất (C) được gọi, in 'C'. Downcast an toàn vì object thực tế là C (instance của B). Không có ClassCastException."
//   },
//   // Question 182
//   {
//     question: "What is the purpose of the volatile keyword in OOP context?",
//     options: {
//       A: "Variables are visible to all threads",
//       B: "Methods cannot be overridden",
//       C: "Classes cannot be inherited",
//       D: "Objects are immutable"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Volatile keyword đảm bảo variables được visible (nhìn thấy) bởi tất cả threads. Volatile variables được đọc và ghi trực tiếp từ main memory, không qua thread-local cache. Điều này đảm bảo thread-safety cho simple read/write operations. Volatile không phải là về inheritance hay immutability."
//   },
//   // Question 183
//   {
//     question: "What is the output?",
//     options: {
//       A: "true",
//       B: "false",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     int x;
//     A() { }
//     A(int x) { this.x = x; }
//     boolean equals(Object obj) {
//         return this.x == ((A)obj).x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a1 = new A(10);
//         A a2 = new A(10);
//         System.out.print(a1.equals(a2));
//     }
// }`,
//     explanation: "Output là 'true'. Method equals() được override để so sánh giá trị x của hai objects. a1.x = 10 và a2.x = 10, nên this.x == ((A)obj).x trả về true. Method equals() so sánh nội dung (value equality), không phải reference equality (==)."
//   },
//   // Question 184
//   {
//     question: "What is method chaining in OOP?",
//     options: {
//       A: "Calling multiple methods in sequence on same object",
//       B: "Overriding methods",
//       C: "Overloading methods",
//       D: "Creating method chains"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method chaining (chuỗi phương thức) là gọi nhiều methods liên tiếp trên cùng một object. Methods trả về this (hoặc object hiện tại) để cho phép chaining. Ví dụ: obj.method1().method2().method3(). Method chaining giúp code ngắn gọn và dễ đọc hơn."
//   },
//   // Question 185
//   {
//     question: "What is the output?",
//     options: {
//       A: "AA",
//       B: "BB",
//       C: "AB",
//       D: "BA"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     A show() {
//         System.out.print("A");
//         return this;
//     }
// }
// class B extends A {
//     B show() {
//         System.out.print("B");
//         return this;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show().show();
//     }
// }`,
//     explanation: "Output là 'BB'. Method chaining: new B().show() gọi show() của B, in 'B' và return this (B). Sau đó .show() lại gọi show() của B (vì return type là B), in 'B' lần nữa. Covariant return type cho phép return type cụ thể hơn trong overridden method."
//   },
//   // Question 186
//   {
//     question: "What is lazy initialization?",
//     options: {
//       A: "Delaying object creation until needed",
//       B: "Creating objects immediately",
//       C: "Destroying objects early",
//       D: "Copying objects lazily"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Lazy initialization (khởi tạo lười) là trì hoãn việc tạo object cho đến khi thực sự cần thiết. Thay vì tạo object ngay khi khởi tạo, object được tạo lần đầu tiên khi được truy cập. Điều này giúp tiết kiệm memory và tăng performance nếu object không được sử dụng."
//   },
//   // Question 187
//   {
//     question: "What is the output?",
//     options: {
//       A: "true",
//       B: "false",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     private static A instance;
//     private A() { }
//     static A getInstance() {
//         if (instance == null)
//             instance = new A();
//         return instance;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a1 = A.getInstance();
//         A a2 = A.getInstance();
//         System.out.print(a1 == a2);
//     }
// }`,
//     explanation: "Output là 'true'. Đây là Singleton pattern (lazy initialization). Private constructor ngăn tạo object từ bên ngoài. Static method getInstance() trả về cùng một instance. a1 và a2 đều trỏ đến cùng một object (instance), nên a1 == a2 trả về true. Singleton đảm bảo chỉ có một instance duy nhất."
//   },
//   // Question 188
//   {
//     question: "What is the purpose of the transient keyword?",
//     options: {
//       A: "Variables are not serialized",
//       B: "Methods cannot be overridden",
//       C: "Classes cannot be inherited",
//       D: "Variables are thread-safe"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Transient keyword đảm bảo variables không được serialized (tuần tự hóa). Khi object được serialize, transient variables không được lưu vào stream. Khi deserialize, transient variables có giá trị mặc định (0, null, false). Transient được dùng cho sensitive data hoặc data không cần persist."
//   },
//   // Question 189
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "0",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A implements Serializable {
//     transient int x = 10;
// }
// public class Main {
//     public static void main(String[] args) throws Exception {
//         A a1 = new A();
//         ObjectOutputStream out = new ObjectOutputStream(
//             new FileOutputStream("test.ser"));
//         out.writeObject(a1);
//         out.close();
        
//         ObjectInputStream in = new ObjectInputStream(
//             new FileInputStream("test.ser"));
//         A a2 = (A) in.readObject();
//         in.close();
        
//         System.out.print(a2.x);
//     }
// }`,
//     explanation: "Output là 0. Transient variable x không được serialized. Khi serialize a1, x = 10 không được lưu. Khi deserialize a2, x có giá trị mặc định 0 (vì là int). Transient variables được reset về giá trị mặc định sau khi deserialize."
//   },
//   // Question 190
//   {
//     question: "What is the difference between composition and aggregation?",
//     options: {
//       A: "Composition is strong ownership, aggregation is weak",
//       B: "Composition uses interfaces, aggregation uses classes",
//       C: "No difference",
//       D: "Aggregation is inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Sự khác biệt giữa composition và aggregation: Composition là strong ownership (sở hữu mạnh), child object không thể tồn tại độc lập với parent. Aggregation là weak ownership (sở hữu yếu), child object có thể tồn tại độc lập. Ví dụ: Car-Engine là composition, Department-Professor là aggregation."
//   },
//   // Question 191
//   {
//     question: "What is the output?",
//     options: {
//       A: "AA",
//       B: "AB",
//       C: "BB",
//       D: "BA"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() { System.out.print("A"); }
// }
// class B extends A {
//     void show() { System.out.print("B"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A[] arr = {new A(), new B()};
//         for (A a : arr)
//             a.show();
//     }
// }`,
//     explanation: "Output là 'AB'. Array chứa object A và object B. Vòng lặp for-each duyệt qua array, gọi a.show() cho mỗi object. Runtime polymorphism áp dụng: object A gọi method của A (in 'A'), object B gọi method của B (in 'B'). Polymorphism cho phép xử lý nhiều types qua cùng interface."
//   },
//   // Question 192
//   {
//     question: "What is method reference in Java 8?",
//     options: {
//       A: "Shorthand notation for lambda expressions",
//       B: "Reference to a variable",
//       C: "Reference to a class",
//       D: "Reference to an object"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method reference (tham chiếu phương thức) trong Java 8 là shorthand notation (ký hiệu viết tắt) cho lambda expressions. Thay vì viết lambda, có thể dùng method reference: Class::method hoặc object::method. Method reference ngắn gọn hơn và dễ đọc hơn lambda trong nhiều trường hợp."
//   },
//   // Question 193
//   {
//     question: "What is the output?",
//     options: {
//       A: "Hello",
//       B: "Compilation error",
//       C: "Runtime error",
//       D: "null"
//     },
//     correctAnswer: "A",
//     code: `interface I {
//     void show(String s);
//     }
// class A {
//     static void display(String s) {
//         System.out.print(s);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = A::display;
//         i.show("Hello");
//     }
// }`,
//     explanation: "Output là 'Hello'. Method reference A::display tham chiếu đến static method display() của class A. Interface I được implement bằng method reference. Khi gọi i.show(\"Hello\"), nó gọi A.display(\"Hello\"), in 'Hello'. Method reference cho phép sử dụng existing methods như functional interface implementations."
//   },
//   // Question 194
//   {
//     question: "What is double dispatch in OOP?",
//     options: {
//       A: "Method call depends on runtime types of two objects",
//       B: "Calling method twice",
//       C: "Two methods with same name",
//       D: "Overloading with two parameters"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Double dispatch (phân phối kép) trong OOP là khi method call phụ thuộc vào runtime types của hai objects. Java không hỗ trợ double dispatch trực tiếp, nhưng có thể đạt được thông qua Visitor pattern hoặc method overloading kết hợp với polymorphism. Double dispatch cho phép chọn method dựa trên types của cả hai objects."
//   },
//   // Question 195
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "NullPointerException",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     String show() { return "A"; }
// }
// class B extends A {
//     String show() { return "B"; }
// }
// public class Main {
//     public static void main(String[] args) {
//         A[] arr = new B[5];
//         System.out.print(arr[0].show());
//     }
// }`,
//     explanation: "NullPointerException xảy ra vì array arr được khai báo nhưng các elements chưa được khởi tạo. arr[0] có giá trị null (default value cho reference types). Khi gọi arr[0].show(), cố gắng gọi method trên null reference, gây NullPointerException. Phải khởi tạo elements: arr[0] = new B() trước khi sử dụng."
//   },
//   // Question 196
//   {
//     question: "What is the template method pattern?",
//     options: {
//       A: "Define skeleton in superclass, let subclasses override steps",
//       B: "Using templates",
//       C: "Creating methods",
//       D: "Overloading methods"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Template Method Pattern là design pattern định nghĩa skeleton (khung) của algorithm trong superclass, để subclasses override các steps cụ thể. Superclass định nghĩa template method (có thể là final) gọi các abstract methods, subclasses implement các abstract methods. Pattern này tuân thủ Open/Closed Principle."
//   },
//   // Question 197
//   {
//     question: "What is the output?",
//     options: {
//       A: "12",
//       B: "21",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `abstract class A {
//     final void process() {
//         step1();
//         step2();
//     }
//     abstract void step1();
//     abstract void step2();
// }
// class B extends A {
//     void step1() { System.out.print("1"); }
//     void step2() { System.out.print("2"); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.process();
//     }
// }`,
//     explanation: "Output là '12'. Đây là Template Method Pattern. Abstract class A định nghĩa final method process() gọi step1() và step2(). Class B extends A và implement step1() (in '1') và step2() (in '2'). Khi gọi a.process(), nó gọi step1() trước (in '1'), sau đó step2() (in '2'), kết quả là '12'."
//   },
//   // Question 198
//   {
//     question: "What is covariance and contravariance in OOP?",
//     options: {
//       A: "Related to inheritance and method overriding",
//       B: "Types of polymorphism",
//       C: "Types of encapsulation",
//       D: "Types of abstraction"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Covariance và contravariance trong OOP liên quan đến inheritance và method overriding. Covariance: return type của overridden method có thể là subtype của return type trong parent class. Contravariance: parameter types của overridden method có thể là supertype của parameter types trong parent class. Java hỗ trợ covariance cho return types từ Java 5."
//   },
//   // Question 199
//   {
//     question: "What is the output?",
//     options: {
//       A: "100",
//       B: "0",
//       C: "Compilation error",
//       D: "null"
//     },
//     correctAnswer: "A",
//     code: `class A<T extends Number> {
//     T obj;
//     A(T obj) { this.obj = obj; }
//     void show() { System.out.print(obj); }
// }
// public class Main {
//     public static void main(String[] args) {
//         A<Integer> a = new A<>(100);
//         a.show();
//     }
// }`,
//     explanation: "Output là 100. Generic class A có bounded type parameter T extends Number, nghĩa là T phải là Number hoặc subclass của Number. Integer extends Number, nên A<Integer> hợp lệ. Constructor nhận Integer(100), gán vào obj. Method show() in obj, kết quả là 100. Bounded generics đảm bảo type safety và cho phép sử dụng methods của Number."
//   },
//   // Question 200
//   {
//     question: "What is the Law of Demeter (Principle of Least Knowledge)?",
//     options: {
//       A: "An object should only communicate with its immediate friends",
//       B: "An object should know everything",
//       C: "An object should communicate with all objects",
//       D: "An object should be isolated"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Law of Demeter (Nguyên tắc ít biết nhất) quy định một object chỉ nên giao tiếp với immediate friends (bạn bè trực tiếp) của nó. Immediate friends bao gồm: chính object đó, objects được truyền vào như parameters, objects được tạo trong method, và direct component objects. Tránh gọi methods trên objects được trả về từ method calls khác (a.getB().getC().method() là vi phạm)."
//   },
//   // Question 201
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x = 10;
//     void change() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change();
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final không thể thay đổi giá trị sau khi đã được khởi tạo. Trong code này, biến x được khai báo là final và đã được gán giá trị 10, nên không thể gán lại giá trị 20 trong method change()."
//   },
//   // Question 202
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     final int x;
//     Test() {
//         x = 10;
//     }
//     Test(int y) {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(20);
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Output là 20. Biến final có thể được khởi tạo trong constructor, nhưng chỉ một lần. Ở đây, constructor Test(int y) được gọi với tham số 20, nên x được gán giá trị 20. Mỗi constructor có thể gán giá trị khác nhau cho biến final, miễn là chỉ gán một lần trong mỗi constructor."
//   },
//   // Question 203
//   {
//     question: "Can a static method access instance variables?",
//     options: {
//       A: "Yes, always",
//       B: "No, directly",
//       C: "Yes, through object reference",
//       D: "Only if variable is final"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Static method KHÔNG THỂ truy cập trực tiếp instance variables vì static method thuộc về class, không thuộc về instance. Tuy nhiên, static method có thể truy cập instance variables thông qua object reference (ví dụ: obj.variable). Static method có thể truy cập static variables trực tiếp."
//   },
//   // Question 204
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 20",
//       B: "20 20",
//       C: "10 10",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     void change() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t1 = new Test();
//         Test t2 = new Test();
//         t1.change();
//         System.out.print(t1.x + " " + t2.x);
//     }
// }`,
//     explanation: "Output là '20 20'. Biến static x được chia sẻ bởi tất cả instances của class Test. Khi t1.change() được gọi, x được thay đổi thành 20. Vì x là static, cả t1.x và t2.x đều trỏ đến cùng một biến, nên cả hai đều là 20."
//   },
//   // Question 205
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     final void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method final không thể bị override. Class B cố gắng override method show() của class A, nhưng method này được khai báo là final trong class A. Final methods không thể bị override bởi subclass."
//   },
//   // Question 206
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static final int x = 10;
//     static {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến static final đã được khởi tạo với giá trị 10, không thể thay đổi trong static block. Static final variables là constants và phải được khởi tạo tại thời điểm khai báo hoặc trong static block, nhưng không thể gán lại sau khi đã khởi tạo."
//   },
//   // Question 207
//   {
//     question: "Can a final class have abstract methods?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only if methods are static",
//       D: "Only if class is also abstract"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, final class không thể có abstract methods. Final class không thể được kế thừa, trong khi abstract methods yêu cầu subclass phải implement chúng. Đây là mâu thuẫn logic. Nếu class là final, nó phải là concrete class (không có abstract methods)."
//   },
//   // Question 208
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "30",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     static int x = 10;
//     static {
//         x = 20;
//     }
//     static {
//         x = 30;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 30. Static blocks được thực thi theo thứ tự xuất hiện trong code khi class được load. Đầu tiên x = 10 (khởi tạo), sau đó static block đầu tiên gán x = 20, cuối cùng static block thứ hai gán x = 30. Giá trị cuối cùng là 30."
//   },
//   // Question 209
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     static void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'A'. Static methods không thể bị override, chỉ có thể bị hide (ẩn). Khi gọi static method qua reference, method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Vì a có kiểu A, nên A.show() được gọi."
//   },
//   // Question 210
//   {
//     question: "Can a static variable be initialized in a constructor?",
//     options: {
//       A: "Yes, always",
//       B: "No, it's initialized before constructor",
//       C: "Yes, but value is reset each time",
//       D: "Only if it's final"
//     },
//     correctAnswer: "C",
//     code: null,
//     explanation: "Có thể khởi tạo static variable trong constructor, nhưng giá trị sẽ bị reset mỗi lần constructor được gọi. Static variables được khởi tạo khi class được load (trước constructor), nhưng có thể được gán lại trong constructor. Tuy nhiên, đây không phải là practice tốt."
//   },
//   // Question 211
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     final int x;
//     {
//         x = 10;
//     }
//     Test() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final x đã được gán giá trị 10 trong instance initialization block, không thể gán lại trong constructor. Biến final chỉ có thể được gán một lần. Thứ tự thực thi: instance block chạy trước constructor, nên x đã được gán trước khi constructor chạy."
//   },
//   // Question 212
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x;
//     Test() {
//         System.out.print(x);
//         x = 10;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì cố gắng sử dụng biến final x trước khi khởi tạo. Biến final phải được khởi tạo trước khi sử dụng. Trong code này, System.out.print(x) được gọi trước khi x = 10, gây lỗi biên dịch. Phải gán x trước khi sử dụng."
//   },
//   // Question 213
//   {
//     question: "Can a static method be overridden?",
//     options: {
//       A: "Yes",
//       B: "No, it's method hiding",
//       C: "Only in subclasses",
//       D: "Only if made non-static"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, static methods không thể bị override, chỉ có thể bị hide (ẩn). Khi subclass có static method cùng tên, nó ẩn method của parent class, không phải override. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime)."
//   },
//   // Question 214
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "30",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     int y = 20;
//     static void show() {
//         System.out.print(x);
//     }
//     void display() {
//         System.out.print(y);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         Test.show();
//         t.display();
//     }
// }`,
//     explanation: "Output là '1020' (không có khoảng trắng). Test.show() in static variable x = 10. t.display() in instance variable y = 20. Static method show() chỉ có thể truy cập static variables, instance method display() có thể truy cập cả static và instance variables."
//   },
//   // Question 215
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final static int x = 10;
//     static void change() {
//         x = 20;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến static final đã được khởi tạo với giá trị 10, không thể thay đổi. Static final variables là constants và không thể gán lại sau khi đã khởi tạo. Method change() cố gắng gán x = 20, gây lỗi biên dịch."
//   },
//   // Question 216
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     final int x = 10;
//     void show() {
//         final int y = 20;
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new Test().show();
//     }
// }`,
//     explanation: "Output là 10. Instance variable final x = 10 được in ra. Biến local final y = 20 không được sử dụng. Final variables (cả instance và local) có thể được đọc bình thường, chỉ không thể gán lại sau khi đã khởi tạo."
//   },
//   // Question 217
//   {
//     question: "Can a final method be abstract?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only in interfaces",
//       D: "Only in abstract classes"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, final method không thể là abstract. Final methods không thể bị override, trong khi abstract methods yêu cầu subclass phải implement chúng. Đây là mâu thuẫn logic. Method không thể vừa final (không thể override) vừa abstract (phải override)."
//   },
//   // Question 218
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     static void change() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.change();
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 20. Static method change() thay đổi giá trị của static variable x từ 10 thành 20. Static methods có thể truy cập và thay đổi static variables. Sau khi gọi Test.change(), x = 20, nên in ra 20."
//   },
//   // Question 219
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `final class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class A được khai báo là final, không thể được kế thừa. Class B cố gắng extend class A, nhưng final class không cho phép điều này. Final classes được dùng để ngăn kế thừa, đảm bảo implementation không bị thay đổi."
//   },
//   // Question 220
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     final int x;
//     Test(int x) {
//         this.x = x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(10);
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Output là 10. Biến final x được khởi tạo trong constructor với giá trị tham số x = 10. Đây là cách hợp lệ để khởi tạo final variable - trong constructor. Biến final phải được khởi tạo trước khi constructor kết thúc."
//   },
//   // Question 221
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x;
//     void init() {
//         x = 10;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final x không được khởi tạo. Final instance variables phải được khởi tạo tại thời điểm khai báo, trong instance initialization block, hoặc trong constructor. Không thể khởi tạo trong method thông thường như init()."
//   },
//   // Question 222
//   {
//     question: "What is the output?",
//     options: {
//       A: "10 10",
//       B: "10 20",
//       C: "20 20",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     static int x = 10;
//     Test() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t1 = new Test();
//         Test t2 = new Test();
//         System.out.print(t1.x + " " + t2.x);
//     }
// }`,
//     explanation: "Output là '20 20'. Biến static x được chia sẻ bởi tất cả instances. Khi t1 được tạo, constructor gán x = 20. Khi t2 được tạo, constructor lại gán x = 20. Cả t1.x và t2.x đều trỏ đến cùng một biến static, nên cả hai đều là 20."
//   },
//   // Question 223
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A.show();
//     }
// }`,
//     explanation: "Output là 'A'. A.show() gọi static method show() của class A, in 'A'. Static methods không có runtime polymorphism, method được chọn dựa trên class name (A), không phải object type. Method show() trong B là instance method, không override static method của A."
//   },
//   // Question 224
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     final int x = 10;
//     Test() {
//         System.out.print(x);
//     }
// }
// class Sub extends Test {
//     final int x = 20;
// }
// public class Main {
//     public static void main(String[] args) {
//         Sub s = new Sub();
//         System.out.print(s.x);
//     }
// }`,
//     explanation: "Output là '1020'. Khi tạo Sub(), constructor của Test được gọi trước, in x của Test (10). Sau đó constructor của Sub chạy. Khi in s.x, biến x của Sub (20) được in vì variables không có polymorphism, truy cập dựa trên reference type. Đây là variable hiding."
//   },
//   // Question 225
//   {
//     question: "Can a static block throw checked exceptions?",
//     options: {
//       A: "Yes",
//       B: "No",
//       C: "Only unchecked exceptions",
//       D: "Only if caught"
//     },
//     correctAnswer: "B",
//     code: null,
//     explanation: "KHÔNG, static block không thể throw checked exceptions. Static block được thực thi khi class được load, không có nơi nào để catch checked exceptions. Static block chỉ có thể throw unchecked exceptions (RuntimeException và subclasses). Nếu cần xử lý checked exceptions, phải catch trong static block."
//   },
//   // Question 226
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static final int x;
//     static {
//         x = 10;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 10. Static final variable x được khởi tạo trong static block với giá trị 10. Static final variables phải được khởi tạo tại thời điểm khai báo hoặc trong static block. Sau khi static block chạy, x = 10."
//   },
//   // Question 227
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     static final int x;
//     static {
//         x = 10;
//     }
//     static {
//         x = 20;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì static final variable x đã được gán giá trị 10 trong static block đầu tiên, không thể gán lại trong static block thứ hai. Static final variables chỉ có thể được gán một lần. Phải gán trong một static block duy nhất hoặc tại thời điểm khai báo."
//   },
//   // Question 228
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     final int x = 10;
//     void show() {
//         final int x = 20;
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new Test().show();
//     }
// }`,
//     explanation: "Output là 20. Biến local final x = 20 che khuất (shadow) instance variable final x = 10. Khi in x trong method show(), nó in biến local (20), không phải instance variable (10). Để truy cập instance variable, cần dùng this.x."
//   },
//   // Question 229
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static int x = 10;
//     static void show() {
//         int x = 20;
//         System.out.print(Test.x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.show();
//     }
// }`,
//     explanation: "Output là 10. Biến local x = 20 che khuất static variable x = 10. Khi in Test.x, nó truy cập static variable qua class name, in 10. Để truy cập static variable khi bị che khuất, phải dùng class name (Test.x), không thể dùng this vì static methods không có this."
//   },
//   // Question 230
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     final void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     static void show() {
//         System.out.print("B");
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì không thể có static method và instance method cùng tên trong cùng class hierarchy. Method show() trong B có signature giống show() trong A, nhưng một cái là static, một cái là instance. Điều này gây conflict. Static methods không thể override instance methods."
//   },
//   // Question 231
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x;
//     static void show() {
//         System.out.print(x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì static method show() cố gắng truy cập instance variable x. Static methods không thể truy cập instance variables trực tiếp vì chúng thuộc về class, không thuộc về instance. Phải truy cập qua object reference hoặc làm x thành static."
//   },
//   // Question 232
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static int x = 10;
//     {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 10. Instance initialization block { x = 20; } chỉ chạy khi tạo object. Trong code này, không có object nào được tạo, chỉ truy cập static variable Test.x. Static variable x giữ giá trị khởi tạo 10. Instance block không chạy nếu không tạo object."
//   },
//   // Question 233
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     static {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 20. Static block được thực thi khi class được load, trước khi main() chạy. Static block gán x = 20, ghi đè giá trị khởi tạo x = 10. Thứ tự: khởi tạo x = 10, sau đó static block chạy và gán x = 20. Giá trị cuối cùng là 20."
//   },
//   // Question 234
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     static void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         A.show();
//     }
// }`,
//     explanation: "Output là 'A'. A.show() gọi static method show() của class A, in 'A'. Static methods không có runtime polymorphism, method được chọn dựa trên class name (A), không phải object type. Mặc dù a là object B, nhưng A.show() gọi method của A."
//   },
//   // Question 235
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x = 10;
//     void change() {
//         this.x = 20;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final x đã được khởi tạo với giá trị 10, không thể thay đổi. Final variables chỉ có thể được gán một lần. Method change() cố gắng gán this.x = 20, gây lỗi biên dịch. Final variables không thể được gán lại sau khi đã khởi tạo."
//   },
//   // Question 236
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     final int x = 10;
//     Test(int x) {
//         System.out.print(this.x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new Test(20);
//     }
// }`,
//     explanation: "Output là 10. Biến final x = 10 đã được khởi tạo tại thời điểm khai báo. Tham số x = 20 của constructor che khuất instance variable x, nhưng this.x truy cập instance variable (10). Final variable x không thể thay đổi, nên this.x = 10."
//   },
//   // Question 237
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     void show() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show();
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 20. Instance method show() có thể truy cập và thay đổi static variable x. Khi gọi t.show(), x được thay đổi từ 10 thành 20. Static variable được chia sẻ bởi tất cả instances, nên Test.x = 20 sau khi show() được gọi."
//   },
//   // Question 238
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `final class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì class A được khai báo là final, không thể được kế thừa. Class B cố gắng extend class A, nhưng final class không cho phép điều này. Final classes được dùng để ngăn kế thừa, đảm bảo implementation không bị thay đổi."
//   },
//   // Question 239
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x;
//     static {
//         x = 10;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì static block không thể khởi tạo instance variable. Static block chỉ có thể khởi tạo static variables. Final instance variable x phải được khởi tạo trong instance initialization block hoặc constructor, không thể trong static block."
//   },
//   // Question 240
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static final int x = 10;
//     static void show() {
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.show();
//     }
// }`,
//     explanation: "Output là 10. Static final variable x = 10 là constant. Static method show() có thể truy cập static final variable x và in ra 10. Static final variables là constants và không thể thay đổi sau khi khởi tạo."
//   },
//   // Question 241
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     final int x = 10;
//     Test() {
//         System.out.print(x);
//     }
// }
// class Sub extends Test {
//     final int x = 20;
//     Sub() {
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new Sub();
//     }
// }`,
//     explanation: "Output là '1020'. Khi tạo Sub(), constructor của Test được gọi trước, in x của Test (10). Sau đó constructor của Sub chạy, in x của Sub (20). Mỗi class có biến final x riêng (variable hiding). Thứ tự: parent constructor (10) -> child constructor (20)."
//   },
//   // Question 242
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     static final int x;
//     Test() {
//         x = 10;
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì static final variable x không thể được khởi tạo trong constructor. Static final variables phải được khởi tạo tại thời điểm khai báo hoặc trong static block, không thể trong constructor. Constructor chỉ chạy khi tạo object, trong khi static variables được khởi tạo khi class được load."
//   },
//   // Question 243
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static int x = 10;
//     static void show() {
//         int x = 20;
//         System.out.print(Test.x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.show();
//     }
// }`,
//     explanation: "Output là 10. Biến local x = 20 che khuất static variable x = 10. Khi in Test.x, nó truy cập static variable qua class name, in 10. Để truy cập static variable khi bị che khuất, phải dùng class name (Test.x), không thể dùng this vì static methods không có this."
//   },
//   // Question 244
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     final void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void display() {
//         show();
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().display();
//     }
// }`,
//     explanation: "Output là 'A'. Class B kế thừa final method show() từ A. Final methods không thể bị override, nhưng có thể được gọi từ subclass. Method display() trong B gọi show() từ A, in 'A'. Final methods có thể được kế thừa và sử dụng, chỉ không thể override."
//   },
//   // Question 245
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     static int x = 10;
//     {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new Test();
//         System.out.print(Test.x);
//     }
// }`,
//     explanation: "Output là 20. Instance initialization block { x = 20; } chạy khi tạo object. Khi gọi new Test(), instance block chạy và gán x = 20, ghi đè giá trị khởi tạo x = 10. Instance block chạy trước constructor, nên x = 20 sau khi object được tạo."
//   },
//   // Question 246
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x = 10;
//     void show() {
//         final int x;
//         System.out.print(x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến local final x chưa được khởi tạo trước khi sử dụng. Final local variables phải được khởi tạo trước khi sử dụng. Không thể in x khi x chưa có giá trị. Phải gán giá trị cho x trước khi in."
//   },
//   // Question 247
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static final int x = 10;
//     static void show() {
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.show();
//     }
// }`,
//     explanation: "Output là 10. Static final variable x = 10 là constant. Static method show() có thể truy cập static final variable x và in ra 10. Static final variables là constants và không thể thay đổi sau khi khởi tạo. Static methods có thể truy cập static variables trực tiếp."
//   },
//   // Question 248
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     final int x;
//     Test() {
//         x = 10;
//     }
//     Test(int y) {
//         this();
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(20);
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final x đã được gán giá trị 10 trong constructor Test() (qua this()), không thể gán lại trong constructor Test(int y). Final variables chỉ có thể được gán một lần. Nếu code compile được, output sẽ là 20 vì constructor Test(int y) gán x = 20 sau this(), nhưng thực tế code này không compile được."
//   },
//   // Question 249
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     final int x = 10;
//     void show() {
//         x++;
//         System.out.print(x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì biến final x không thể thay đổi giá trị. x++ cố gắng tăng giá trị của x, nhưng final variables không thể được gán lại sau khi đã khởi tạo. Final variables là constants, không thể thay đổi bằng bất kỳ cách nào (++, --, =, etc.)."
//   },
//   // Question 250
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     static int x = 10;
//     static void show() {
//         System.out.print(x);
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test.show();
//     }
// }`,
//     explanation: "Output là 10. Static method show() có thể truy cập static variable x trực tiếp và in ra 10. Static methods có thể truy cập static variables mà không cần instance. Static variable x = 10 được khởi tạo khi class được load."
//   },
//   // Question 251
//   {
//     question: "What breaks encapsulation in this code?",
//     options: {
//       A: "Private variable x",
//       B: "Public getter method",
//       C: "Returning reference to mutable array",
//       D: "Nothing, it's properly encapsulated"
//     },
//     correctAnswer: "C",
//     code: `class Test {
//     private int[] arr = {1, 2, 3};
//     public int[] getArr() {
//         return arr;
//     }
// }`,
//     explanation: "Returning reference to mutable array (trả về reference đến array có thể thay đổi) phá vỡ encapsulation. Method getArr() return reference đến array gốc, cho phép code bên ngoài thay đổi array bên trong object. Nên return defensive copy: return Arrays.copyOf(arr, arr.length) để bảo vệ dữ liệu."
//   },
//   // Question 252
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) thay đổi x từ 10 thành 20. Method getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói đúng: private variable + public getter/setter."
//   },
//   // Question 253
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.x = 20;
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì cố gắng truy cập private variable x từ bên ngoài class. Private variables chỉ có thể được truy cập trong cùng class. Không thể gán t.x = 20 từ bên ngoài. Phải dùng setter method để thay đổi giá trị của private variable."
//   },
//   // Question 254
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     private int x = 10;
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì cố gắng truy cập private variable x từ bên ngoài class. Private variables chỉ có thể được truy cập trong cùng class. Không thể in t.x từ bên ngoài. Phải dùng getter method để đọc giá trị của private variable."
//   },
//   // Question 255
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         if (x > 0) {
//             this.x = x;
//         }
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) có validation (x > 0), vì 20 > 0 nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20. Đây là encapsulation với validation."
//   },
//   // Question 256
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         if (x < 0) {
//             return;
//         }
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(-5);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Method setX(-5) có validation (x < 0), vì -5 < 0 nên return sớm, không thực thi this.x = x. Giá trị của x không thay đổi, vẫn là 10. Method getX() trả về giá trị ban đầu 10. Validation trong setter bảo vệ dữ liệu khỏi giá trị không hợp lệ."
//   },
//   // Question 257
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public Test(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Constructor Test(20) nhận tham số x = 20 và gán this.x = 20, ghi đè giá trị khởi tạo x = 10. Constructor chạy sau khi khởi tạo instance variables, nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20."
//   },
//   // Question 258
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public void change(int x) {
//         x = 20;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Trong method change(int x), tham số x là biến local, không phải instance variable. Khi gán x = 20, chỉ biến local được thay đổi, không ảnh hưởng đến instance variable this.x. Để thay đổi instance variable, cần dùng this.x = x. Giá trị của instance variable x vẫn là 10."
//   },
//   // Question 259
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void change(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Method change(20) sử dụng this.x = x để gán giá trị tham số (20) cho instance variable. this.x truy cập instance variable, x là tham số. Method getX() trả về giá trị hiện tại của instance variable x là 20. Đây là cách đúng để thay đổi instance variable khi bị che khuất bởi tham số."
//   },
//   // Question 260
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Private variable x = 10 được đóng gói, chỉ có thể truy cập qua public getter method getX(). Method getX() trả về giá trị của private variable x là 10. Đây là cách đóng gói đúng: private variable + public getter để đọc giá trị."
//   },
//   // Question 261
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism (đa hình runtime). Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 262
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     A() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     B() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B();
//     }
// }`,
//     explanation: "Output là 'AB'. Khi tạo B(), constructor của parent class A được gọi trước (thông qua super() ngầm định), in 'A'. Sau đó constructor của B được gọi, in 'B'. Thứ tự luôn là: parent constructor trước, child constructor sau."
//   },
//   // Question 263
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     int x = 10;
// }
// class B extends A {
//     int x = 20;
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.x);
//     }
// }`,
//     explanation: "Output là 10. Variables không có polymorphism, chỉ methods mới có. Khi truy cập a.x với a có kiểu A, nó truy cập biến x của class A (10), không phải biến x của class B (20). Đây là variable hiding, không phải overriding. Variables được bind tại compile-time dựa trên reference type."
//   },
//   // Question 264
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     int getX() {
//         return 10;
//     }
// }
// class B extends A {
//     int getX() {
//         return 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         System.out.print(a.getX());
//     }
// }`,
//     explanation: "Output là 20. Method getX() trong B override method getX() trong A. Runtime polymorphism áp dụng, method getX() của B được gọi, return 20. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method của B được gọi."
//   },
//   // Question 265
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         super.show();
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show();
//     }
// }`,
//     explanation: "Output là 'AB'. Method show() trong B override method của A. Trong show() của B, super.show() gọi method của parent class A, in 'A'. Sau đó tiếp tục in 'B'. super được dùng để gọi method của parent class trong overridden method."
//   },
//   // Question 266
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     private void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì method show() trong A là private, không thể được truy cập từ bên ngoài class A. Mặc dù B có method show() public, nhưng khi gọi a.show() với a có kiểu A, compiler chỉ thấy method private show() của A, không thể truy cập được."
//   },
//   // Question 267
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     protected int x = 10;
// }
// class B extends A {
//     void show() {
//         System.out.print(x);
//     }
//     void change() {
//         x = 20;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         b.change();
//         b.show();
//     }
// }`,
//     explanation: "Output là 20. Protected variable x trong A có thể được truy cập và thay đổi từ subclass B. Method change() thay đổi x từ 10 thành 20. Method show() in giá trị hiện tại của x là 20. Protected members có thể được truy cập trong subclass."
//   },
//   // Question 268
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         ((B)a).show();
//     }
// }`,
//     explanation: "Output là 'B'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
//   },
//   // Question 269
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     int x = 10;
//     void show() {
//         System.out.print(x);
//     }
// }
// class B extends A {
//     int x = 20;
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 10. Method show() được định nghĩa trong A và truy cập x. Khi gọi a.show(), method show() của A được gọi (không override), và nó truy cập x của A (10), không phải x của B (20). Variables không có polymorphism, method show() truy cập x trong scope của nó (class A)."
//   },
//   // Question 270
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         A a = b;
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Upcast A a = b chuyển đổi reference từ kiểu B sang kiểu A. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Upcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
//   },
//   // Question 271
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "C",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// class C extends B {
//     void show() {
//         System.out.print("C");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new C();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'C'. Trong multilevel inheritance, method show() được override ở mỗi level. Runtime polymorphism áp dụng, method show() của class con nhất (C) được gọi, in 'C'. Method của class con nhất luôn được ưu tiên trong runtime polymorphism."
//   },
//   // Question 272
//   {
//     question: "What is the output?",
//     options: {
//       A: "int",
//       B: "Integer",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     void show(int x) {
//         System.out.print("int");
//     }
//     void show(Integer x) {
//         System.out.print("Integer");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.show(10);
//     }
// }`,
//     explanation: "Output là 'int'. Khi gọi t.show(10), 10 là primitive int. Compiler ưu tiên exact match (int) hơn autoboxing (int -> Integer). Method show(int x) khớp chính xác với primitive int, nên được chọn. Method show(Integer x) yêu cầu autoboxing, chỉ được chọn nếu không có exact match."
//   },
//   // Question 273
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A[] arr = {new A(), new B()};
//         for (A a : arr) {
//             a.show();
//         }
//     }
// }`,
//     explanation: "Output là 'AB'. Array chứa object A và object B. Vòng lặp for-each duyệt qua array, gọi a.show() cho mỗi object. Runtime polymorphism áp dụng: object A gọi method của A (in 'A'), object B gọi method của B (in 'B'). Polymorphism cho phép xử lý nhiều types qua cùng interface."
//   },
//   // Question 274
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         if (a instanceof B) {
//             ((B)a).show();
//         }
//     }
// }`,
//     explanation: "Output là 'B'. instanceof kiểm tra a có phải là instance của B không (true). Sau đó downcast (B)a và gọi show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast an toàn vì đã kiểm tra instanceof trước."
//   },
//   // Question 275
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "AB",
//       D: "Compilation error"
//     },
//     correctAnswer: "C",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         super.show();
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         new B().show();
//     }
// }`,
//     explanation: "Output là 'AB'. Method show() trong B override method của A. Trong show() của B, super.show() gọi method của parent class A, in 'A'. Sau đó tiếp tục in 'B'. super được dùng để gọi method của parent class trong overridden method."
//   },
//   // Question 276
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 277
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `class A {
//     static void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     static void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'A'. Static methods không có runtime polymorphism. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Vì a có kiểu A, nên A.show() được gọi, in 'A'. Đây là method hiding, không phải overriding."
//   },
//   // Question 278
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         B b = new B();
//         A a = b;
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Upcast A a = b chuyển đổi reference từ kiểu B sang kiểu A. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Upcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
//   },
//   // Question 279
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         B b = (B)a;
//         b.show();
//     }
// }`,
//     explanation: "Output là 'B'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
//   },
//   // Question 280
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 281
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     abstract void show();
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract method show() trong A được implement trong B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract classes cho phép định nghĩa contract và để subclass implement chi tiết."
//   },
//   // Question 282
//   {
//     question: "What is the output?",
//     options: {
//       A: "I",
//       B: "A",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "A",
//     code: `interface I {
//     void show();
// }
// class A implements I {
//     public void show() {
//         System.out.print("A");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new A();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'A'. Class A implement interface I và implement method show(). Runtime polymorphism áp dụng, method show() của A được gọi, in 'A'. Interfaces cho phép đạt runtime polymorphism mà không cần inheritance."
//   },
//   // Question 283
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     void show();
// }
// class A implements I {
//     public void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     public void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new B();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'B'. Class A implement interface I, class B extends A và override show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Trong multilevel inheritance với interfaces, method của class con nhất được ưu tiên."
//   },
//   // Question 284
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     abstract void show();
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract method show() trong A được implement trong B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract classes cho phép định nghĩa contract và để subclass implement chi tiết."
//   },
//   // Question 285
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 286
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     void show();
// }
// class A implements I {
//     public void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     public void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new B();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'B'. Class A implement interface I, class B extends A và override show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Interfaces cho phép đạt runtime polymorphism qua reference type I."
//   },
//   // Question 287
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 288
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `abstract class A {
//     abstract void show();
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Abstract method show() trong A được implement trong B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract classes cho phép định nghĩa contract và để subclass implement chi tiết."
//   },
//   // Question 289
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `interface I {
//     void show();
// }
// class A implements I {
//     public void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     public void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         I i = new B();
//         i.show();
//     }
// }`,
//     explanation: "Output là 'B'. Class A implement interface I, class B extends A và override show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Interfaces cho phép đạt runtime polymorphism qua reference type I."
//   },
//   // Question 290
//   {
//     question: "What is the output?",
//     options: {
//       A: "A",
//       B: "B",
//       C: "Compilation error",
//       D: "Runtime error"
//     },
//     correctAnswer: "B",
//     code: `class A {
//     void show() {
//         System.out.print("A");
//     }
// }
// class B extends A {
//     void show() {
//         System.out.print("B");
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         A a = new B();
//         a.show();
//     }
// }`,
//     explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
//   },
//   // Question 291
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) thay đổi x từ 10 thành 20. Method getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói đúng: private variable + public getter/setter."
//   },
//   // Question 292
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Private variable x = 10 được đóng gói, chỉ có thể truy cập qua public getter method getX(). Method getX() trả về giá trị của private variable x là 10. Đây là cách đóng gói đúng: private variable + public getter để đọc giá trị."
//   },
//   // Question 293
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "D",
//     code: `class Test {
//     private int x = 10;
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.x = 20;
//         System.out.print(t.x);
//     }
// }`,
//     explanation: "Lỗi biên dịch xảy ra vì cố gắng truy cập private variable x từ bên ngoài class. Private variables chỉ có thể được truy cập trong cùng class. Không thể gán t.x = 20 hoặc in t.x từ bên ngoài. Phải dùng getter/setter methods để truy cập private variables."
//   },
//   // Question 294
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         if (x > 0) {
//             this.x = x;
//         }
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) có validation (x > 0), vì 20 > 0 nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20. Đây là encapsulation với validation."
//   },
//   // Question 295
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         if (x < 0) {
//             return;
//         }
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(-5);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Method setX(-5) có validation (x < 0), vì -5 < 0 nên return sớm, không thực thi this.x = x. Giá trị của x không thay đổi, vẫn là 10. Method getX() trả về giá trị ban đầu 10. Validation trong setter bảo vệ dữ liệu khỏi giá trị không hợp lệ."
//   },
//   // Question 296
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public Test(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Constructor Test(20) nhận tham số x = 20 và gán this.x = 20, ghi đè giá trị khởi tạo x = 10. Constructor chạy sau khi khởi tạo instance variables, nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20."
//   },
//   // Question 297
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public void change(int x) {
//         x = 20;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Trong method change(int x), tham số x là biến local, không phải instance variable. Khi gán x = 20, chỉ biến local được thay đổi, không ảnh hưởng đến instance variable this.x. Để thay đổi instance variable, cần dùng this.x = x. Giá trị của instance variable x vẫn là 10."
//   },
//   // Question 298
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void change(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.change(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Method change(20) sử dụng this.x = x để gán giá trị tham số (20) cho instance variable. this.x truy cập instance variable, x là tham số. Method getX() trả về giá trị hiện tại của instance variable x là 20. Đây là cách đúng để thay đổi instance variable khi bị che khuất bởi tham số."
//   },
//   // Question 299
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "A",
//     code: `class Test {
//     private int x = 10;
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 10. Private variable x = 10 được đóng gói, chỉ có thể truy cập qua public getter method getX(). Method getX() trả về giá trị của private variable x là 10. Đây là cách đóng gói đúng: private variable + public getter để đọc giá trị."
//   },
//   // Question 300
//   {
//     question: "What is the output?",
//     options: {
//       A: "10",
//       B: "20",
//       C: "0",
//       D: "Compilation error"
//     },
//     correctAnswer: "B",
//     code: `class Test {
//     private int x = 10;
//     public void setX(int x) {
//         this.x = x;
//     }
//     public int getX() {
//         return x;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         Test t = new Test();
//         t.setX(20);
//         System.out.print(t.getX());
//     }
// }`,
//     explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) thay đổi x từ 10 thành 20. Method getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói đúng: private variable + public getter/setter để kiểm soát truy cập dữ liệu."
//   },
//   // Question 301
//   {
//     question: "In the context of Object-Oriented Programming, what is the fundamental philosophical difference between encapsulation as a data-hiding mechanism and encapsulation as a bundling mechanism, and how does this distinction impact the design of class hierarchies in complex software systems?",
//     options: {
//       A: "Data-hiding encapsulation focuses solely on access modifiers, while bundling encapsulation emphasizes the logical grouping of related data and methods, with the latter being more critical for maintaining system integrity in large-scale applications",
//       B: "Data-hiding and bundling are identical concepts in OOP, both implemented through the same mechanisms without any meaningful distinction in practice",
//       C: "Bundling encapsulation is a compile-time concept while data-hiding is a runtime concept, making them fundamentally incompatible in object-oriented design",
//       D: "Data-hiding encapsulation is primarily concerned with preventing unauthorized access, whereas bundling encapsulation is about organizing code structure, and neither significantly impacts class hierarchy design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation có hai khía cạnh quan trọng: data-hiding (ẩn dữ liệu) và bundling (gói gọn). Data-hiding sử dụng access modifiers để kiểm soát truy cập, trong khi bundling nhấn mạnh việc nhóm logic các dữ liệu và phương thức liên quan lại với nhau. Trong các hệ thống phức tạp, bundling quan trọng hơn vì nó đảm bảo tính toàn vẹn của hệ thống bằng cách đảm bảo các thành phần liên quan được quản lý cùng nhau. Cả hai khía cạnh đều ảnh hưởng đến thiết kế class hierarchy, nhưng bundling có tác động lớn hơn đến việc duy trì tính nhất quán và dễ bảo trì trong các ứng dụng quy mô lớn."
//   },
//   // Question 302
//   {
//     question: "When designing an inheritance hierarchy, what are the critical considerations regarding the Liskov Substitution Principle's relationship with polymorphism, and how does method overriding interact with the contract established by the parent class?",
//     options: {
//       A: "The Liskov Substitution Principle requires that derived classes must be substitutable for their base classes without altering the correctness of the program, and method overriding must maintain the behavioral contract while allowing implementation flexibility",
//       B: "Method overriding can completely change the behavior of inherited methods without any constraints, as polymorphism allows any implementation in derived classes",
//       C: "The Liskov Substitution Principle only applies to abstract classes and interfaces, not to concrete inheritance relationships",
//       D: "Polymorphism and the Liskov Substitution Principle are unrelated concepts, with polymorphism focusing on method resolution and LSP focusing on type compatibility"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Nguyên tắc Liskov Substitution (LSP) yêu cầu các lớp dẫn xuất phải có thể thay thế lớp cơ sở mà không làm thay đổi tính đúng đắn của chương trình. Khi override method, ta phải duy trì hợp đồng hành vi (behavioral contract) của lớp cha - nghĩa là method phải thực hiện đúng mục đích và không vi phạm các giả định mà code sử dụng lớp cha đã đặt ra. Polymorphism cho phép linh hoạt trong implementation nhưng không được phá vỡ contract. Vi phạm LSP sẽ dẫn đến các lỗi logic khó phát hiện trong runtime."
//   },
//   // Question 303
//   {
//     question: "What is the theoretical foundation of abstraction in object-oriented programming, and how does the distinction between interface abstraction and implementation abstraction contribute to the design of maintainable and extensible software architectures?",
//     options: {
//       A: "Abstraction separates 'what' (interface) from 'how' (implementation), allowing clients to depend on stable interfaces while implementations can evolve independently, which is fundamental to creating flexible and maintainable architectures",
//       B: "Abstraction is merely a code organization technique with no significant impact on software architecture or maintainability",
//       C: "Interface abstraction and implementation abstraction are the same concept, both referring to hiding implementation details",
//       D: "Abstraction only applies to abstract classes and cannot be used with concrete classes or interfaces"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) là nền tảng lý thuyết của OOP, tách biệt 'what' (giao diện - interface) khỏi 'how' (triển khai - implementation). Interface abstraction định nghĩa contract mà client code phụ thuộc vào, trong khi implementation abstraction ẩn chi tiết triển khai. Sự phân biệt này cho phép client code phụ thuộc vào interface ổn định, còn implementation có thể thay đổi và mở rộng độc lập mà không ảnh hưởng đến client. Điều này là nền tảng cho việc tạo ra các kiến trúc phần mềm linh hoạt, dễ bảo trì và mở rộng. Abstraction có thể áp dụng qua abstract classes, interfaces, hoặc thậm chí concrete classes với proper encapsulation."
//   },
//   // Question 304
//   {
//     question: "In the context of polymorphism, explain the theoretical differences between compile-time polymorphism (method overloading) and runtime polymorphism (method overriding), and discuss how the Java Virtual Machine resolves method calls in each scenario.",
//     options: {
//       A: "Compile-time polymorphism uses static binding based on method signature and argument types determined at compile time, while runtime polymorphism uses dynamic binding where the JVM determines the actual method to call based on the object's runtime type, with method resolution occurring through the virtual method table",
//       B: "Both compile-time and runtime polymorphism use the same binding mechanism, with the only difference being when the binding occurs",
//       C: "Compile-time polymorphism is more efficient than runtime polymorphism because it doesn't require method lookup, but both resolve methods identically",
//       D: "Runtime polymorphism can only occur with abstract methods, while compile-time polymorphism applies to all methods"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Compile-time polymorphism (đa hình compile-time) sử dụng static binding - compiler quyết định method nào được gọi dựa trên method signature và kiểu tham số tại thời điểm biên dịch. Runtime polymorphism (đa hình runtime) sử dụng dynamic binding - JVM quyết định method nào được gọi dựa trên kiểu thực tế của object tại runtime. JVM sử dụng virtual method table (vtable) để resolve method calls trong runtime polymorphism, cho phép gọi đúng method của subclass ngay cả khi reference có kiểu của superclass. Static binding hiệu quả hơn nhưng kém linh hoạt, dynamic binding linh hoạt hơn nhưng có overhead nhỏ."
//   },
//   // Question 305
//   {
//     question: "What are the fundamental theoretical principles underlying inheritance in object-oriented programming, and how does the 'is-a' relationship differ from the 'has-a' relationship in terms of design semantics and implementation implications?",
//     options: {
//       A: "Inheritance establishes an 'is-a' relationship representing specialization where a derived class is a specialized version of the base class, inheriting all members and behaviors, while 'has-a' represents composition where objects contain other objects, with inheritance creating tighter coupling and composition providing more flexibility",
//       B: "'Is-a' and 'has-a' relationships are identical in OOP, both implemented through inheritance mechanisms",
//       C: "Inheritance only applies to 'has-a' relationships, while 'is-a' relationships must use composition",
//       D: "The distinction between 'is-a' and 'has-a' is purely semantic with no implementation differences"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) thiết lập quan hệ 'is-a' (là một), biểu thị sự chuyên biệt hóa - lớp dẫn xuất là phiên bản chuyên biệt của lớp cơ sở, kế thừa tất cả members và behaviors. 'Has-a' (có một) biểu thị composition (tổng hợp) - object chứa các object khác. Inheritance tạo tight coupling (liên kết chặt) vì subclass phụ thuộc trực tiếp vào implementation của superclass. Composition tạo loose coupling (liên kết lỏng) và linh hoạt hơn vì có thể thay đổi implementation mà không ảnh hưởng đến class chứa. Chọn inheritance khi có quan hệ 'is-a' thực sự, chọn composition khi cần flexibility và loose coupling."
//   },
//   // Question 306
//   {
//     question: "Explain the theoretical concept of information hiding in encapsulation, and discuss how access modifiers (private, protected, public, package-private) implement different levels of visibility and their implications for class design and system architecture.",
//     options: {
//       A: "Information hiding restricts access to internal implementation details, with private providing class-level encapsulation, protected enabling inheritance-based access, public exposing the interface, and package-private creating module-level boundaries, each serving different architectural needs in system design",
//       B: "All access modifiers provide identical levels of information hiding, with the choice being purely stylistic",
//       C: "Information hiding is only achieved through private modifiers, with other modifiers providing no encapsulation benefits",
//       D: "Access modifiers are compile-time constructs with no runtime implications for information hiding"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Information hiding (ẩn thông tin) là khái niệm lý thuyết cốt lõi của encapsulation, hạn chế truy cập vào chi tiết implementation bên trong. Private cung cấp class-level encapsulation - chỉ truy cập trong cùng class. Protected cho phép truy cập trong cùng package và subclass - phù hợp cho inheritance hierarchy. Public expose interface - cho phép truy cập từ mọi nơi. Package-private (default) tạo module-level boundaries - truy cập trong cùng package. Mỗi mức độ visibility phục vụ nhu cầu kiến trúc khác nhau: private cho internal implementation, protected cho inheritance, public cho API, package-private cho module organization. Việc chọn đúng access modifier ảnh hưởng đến tính bảo mật, khả năng bảo trì và flexibility của hệ thống."
//   },
//   // Question 307
//   {
//     question: "What is the theoretical relationship between abstraction and encapsulation in object-oriented design, and how do these two principles work together to create well-designed classes that balance flexibility with implementation stability?",
//     options: {
//       A: "Abstraction defines the 'what' by exposing a simplified interface, while encapsulation provides the 'how' by hiding implementation details, and together they create classes where clients depend on stable abstractions while implementations can evolve independently",
//       B: "Abstraction and encapsulation are competing principles that cannot be used together in the same class design",
//       C: "Abstraction is a subset of encapsulation, with encapsulation being the only principle needed for good design",
//       D: "Abstraction and encapsulation are identical concepts, both referring to the same design mechanism"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction và Encapsulation là hai nguyên tắc bổ sung cho nhau trong OOP. Abstraction định nghĩa 'what' (cái gì) bằng cách expose một interface đơn giản hóa, tập trung vào behavior và contract mà class cung cấp. Encapsulation cung cấp 'how' (như thế nào) bằng cách ẩn implementation details, bảo vệ dữ liệu và logic bên trong. Khi kết hợp, chúng tạo ra các class mà client code phụ thuộc vào abstraction ổn định (interface), trong khi implementation có thể thay đổi và phát triển độc lập mà không ảnh hưởng đến client. Sự kết hợp này tạo ra sự cân bằng giữa flexibility (linh hoạt) và stability (ổn định), cho phép hệ thống dễ bảo trì và mở rộng."
//   },
//   // Question 308
//   {
//     question: "In the theoretical framework of object-oriented programming, how does polymorphism enable the Open-Closed Principle, and what are the mechanisms by which polymorphism allows systems to be open for extension while closed for modification?",
//     options: {
//       A: "Polymorphism allows new functionality to be added through new classes that implement existing interfaces or extend base classes, enabling extension without modifying existing code, thus achieving the Open-Closed Principle where systems are open for extension but closed for modification",
//       B: "Polymorphism requires modifying existing classes to add new behavior, which contradicts the Open-Closed Principle",
//       C: "The Open-Closed Principle can only be achieved through inheritance, with polymorphism playing no role",
//       D: "Polymorphism and the Open-Closed Principle are unrelated concepts in object-oriented design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) cho phép Open-Closed Principle bằng cách cho phép thêm functionality mới thông qua các class mới implement existing interfaces hoặc extend base classes, mà không cần modify code hiện có. Khi có interface hoặc base class ổn định, ta có thể tạo các implementation mới (extension) mà không thay đổi code đã tồn tại (closed for modification). Client code phụ thuộc vào abstraction (interface/base class) và sử dụng polymorphism để làm việc với các implementation khác nhau. Điều này cho phép hệ thống mở rộng (open for extension) mà không cần sửa đổi code cũ (closed for modification), giảm rủi ro và tăng tính ổn định của hệ thống."
//   },
//   // Question 309
//   {
//     question: "What are the theoretical foundations of method overriding in inheritance hierarchies, and how do the concepts of method signature, return type covariance, and exception handling interact to define the contract between base and derived classes?",
//     options: {
//       A: "Method overriding requires identical method signatures, allows covariant return types where the derived method can return a subtype, and exception handling must follow the rule that derived methods cannot throw broader checked exceptions than the base method, establishing a contract that maintains substitutability",
//       B: "Method overriding allows complete freedom in changing method signatures, return types, and exceptions without any constraints",
//       C: "Method overriding only applies to methods with identical implementations, not to methods with different behaviors",
//       D: "Return type covariance and exception handling rules are optional guidelines with no enforcement in Java"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method overriding có các quy tắc lý thuyết nghiêm ngặt. Method signature phải giống hệt (tên, tham số, kiểu tham số). Return type có thể là covariant - derived method có thể return subtype của return type trong base method (ví dụ: base return Animal, derived return Dog extends Animal). Exception handling phải tuân theo quy tắc: derived method không thể throw checked exception rộng hơn base method (có thể throw cùng hoặc narrower exception, hoặc không throw). Các quy tắc này thiết lập contract đảm bảo substitutability - derived class có thể thay thế base class mà không vi phạm expectations của client code. Vi phạm các quy tắc này sẽ gây lỗi compile-time hoặc runtime."
//   },
//   // Question 310
//   {
//     question: "Explain the theoretical concept of dynamic method dispatch in polymorphism, and discuss how the Java Virtual Machine's method resolution mechanism works at runtime to determine which method implementation to execute when multiple inheritance levels are involved.",
//     options: {
//       A: "Dynamic method dispatch uses the actual object type at runtime rather than the reference type to determine which method to call, with the JVM traversing the inheritance hierarchy from the actual object's class upward to find the most specific override, using virtual method tables for efficient lookup",
//       B: "Dynamic method dispatch uses the reference type to determine method calls, making it identical to static binding",
//       C: "The JVM always calls the method from the reference type's class, ignoring the actual object type",
//       D: "Dynamic method dispatch only works with single-level inheritance and fails with multiple inheritance levels"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Dynamic method dispatch (phân phối method động) sử dụng kiểu thực tế của object tại runtime (không phải kiểu reference) để quyết định method nào được gọi. JVM duyệt inheritance hierarchy từ class của object thực tế lên trên để tìm override cụ thể nhất. JVM sử dụng virtual method table (vtable) để lookup hiệu quả - mỗi class có bảng chứa pointers đến các method implementations. Khi có nhiều cấp inheritance, JVM tìm method từ subclass cụ thể nhất lên parent class cho đến khi tìm thấy implementation. Cơ chế này cho phép runtime polymorphism hoạt động chính xác ngay cả với deep inheritance hierarchies, đảm bảo method của subclass được gọi thay vì method của superclass."
//   },
//   // Question 311
//   {
//     question: "What is the theoretical distinction between concrete inheritance and interface inheritance in object-oriented design, and how do these different inheritance mechanisms serve distinct purposes in creating flexible and maintainable software architectures?",
//     options: {
//       A: "Concrete inheritance provides code reuse and implementation sharing through class extension, while interface inheritance defines contracts and enables polymorphism without implementation coupling, with interface inheritance providing better abstraction and flexibility for system design",
//       B: "Concrete inheritance and interface inheritance are identical mechanisms with no meaningful differences in their application or benefits",
//       C: "Interface inheritance can only be used with abstract classes, not with Java interfaces",
//       D: "Concrete inheritance is always preferable to interface inheritance because it provides more functionality"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Concrete inheritance (kế thừa cụ thể) cung cấp code reuse và chia sẻ implementation thông qua class extension - subclass kế thừa cả structure và behavior từ superclass. Interface inheritance (kế thừa interface) định nghĩa contract và cho phép polymorphism mà không có implementation coupling - class implement interface phải cung cấp implementation riêng. Interface inheritance cung cấp abstraction tốt hơn và flexibility cao hơn vì không tạo dependency vào implementation cụ thể. Concrete inheritance phù hợp khi có quan hệ 'is-a' mạnh và muốn chia sẻ code, interface inheritance phù hợp khi cần định nghĩa contract mà nhiều class khác nhau có thể implement theo cách riêng."
//   },
//   // Question 312
//   {
//     question: "In the theoretical framework of encapsulation, what is the relationship between data encapsulation and behavioral encapsulation, and how do getter/setter methods contribute to maintaining the integrity of an object's internal state while providing controlled access?",
//     options: {
//       A: "Data encapsulation protects instance variables, while behavioral encapsulation protects methods, and getter/setter methods provide controlled access points that can enforce validation, maintain invariants, and hide implementation details while allowing external interaction with object state",
//       B: "Data and behavioral encapsulation are the same concept, both implemented identically through access modifiers",
//       C: "Getter/setter methods break encapsulation by exposing internal state, making them anti-patterns in object-oriented design",
//       D: "Encapsulation only applies to data, with behavioral encapsulation being a separate unrelated concept"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Data encapsulation (đóng gói dữ liệu) bảo vệ instance variables bằng cách hạn chế truy cập trực tiếp. Behavioral encapsulation (đóng gói hành vi) bảo vệ methods và logic bên trong. Getter/setter methods cung cấp controlled access points - không chỉ đơn giản là expose data, mà có thể enforce validation (kiểm tra tính hợp lệ), maintain invariants (duy trì bất biến), và hide implementation details (ẩn chi tiết triển khai). Ví dụ: setter có thể validate input, getter có thể tính toán giá trị thay vì return trực tiếp. Điều này cho phép external interaction với object state mà vẫn duy trì integrity và encapsulation. Getter/setter không phải anti-pattern nếu được thiết kế đúng với validation và logic phù hợp."
//   },
//   // Question 313
//   {
//     question: "What are the theoretical foundations of abstract classes versus interfaces in Java, and how do the concepts of single inheritance, multiple interface implementation, and the diamond problem influence the choice between these abstraction mechanisms?",
//     options: {
//       A: "Abstract classes support single inheritance with shared implementation, while interfaces support multiple implementation with contract definition only, and Java's single inheritance prevents the diamond problem with classes while multiple interface implementation avoids it because interfaces contain no implementation to conflict",
//       B: "Abstract classes and interfaces are functionally identical in Java, with the choice being purely stylistic",
//       C: "Java supports multiple inheritance for both abstract classes and interfaces, making the diamond problem a concern for both",
//       D: "Interfaces can contain implementation in Java, making them equivalent to abstract classes"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstract classes (lớp trừu tượng) hỗ trợ single inheritance với shared implementation - một class chỉ extend một abstract class nhưng có thể có implementation chung. Interfaces hỗ trợ multiple implementation với contract definition only - một class có thể implement nhiều interfaces nhưng interfaces chỉ định nghĩa contract, không có implementation (trước Java 8). Java's single inheritance ngăn diamond problem với classes vì một class chỉ có một parent class. Multiple interface implementation tránh diamond problem vì interfaces không chứa implementation để conflict - nếu hai interfaces có method signature giống nhau, class implement chỉ cần provide một implementation. Từ Java 8, interfaces có thể có default methods, nhưng nếu conflict xảy ra, class phải override explicitly. Chọn abstract class khi cần shared implementation và 'is-a' relationship, chọn interface khi cần multiple contracts và 'can-do' relationship."
//   },
//   // Question 314
//   {
//     question: "Explain the theoretical concept of method overloading as a form of compile-time polymorphism, and discuss how the compiler resolves overloaded method calls based on method signature matching, type promotion, and ambiguity resolution rules.",
//     options: {
//       A: "Method overloading is compile-time polymorphism where methods with the same name but different signatures are resolved at compile time based on exact match, type promotion hierarchy, and varargs, with compilation errors occurring when ambiguity cannot be resolved through these rules",
//       B: "Method overloading is resolved at runtime based on the actual argument types, making it identical to method overriding",
//       C: "The compiler randomly selects which overloaded method to call when multiple matches exist",
//       D: "Method overloading only works with primitive types and cannot be used with object types"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method overloading (nạp chồng method) là compile-time polymorphism - methods cùng tên nhưng khác signature được resolve tại compile-time. Compiler resolve dựa trên: exact match (khớp chính xác), type promotion hierarchy (byte→short→int→long→float→double, char→int), và varargs. Nếu không có exact match, compiler tìm match thông qua promotion. Nếu có nhiều matches có thể, compiler báo ambiguity error. Overloading khác overriding ở chỗ: overloading là compile-time (dựa trên signature), overriding là runtime (dựa trên object type). Overloading có thể dùng với cả primitive và object types, nhưng với object types, exact match được ưu tiên hơn inheritance hierarchy."
//   },
//   // Question 315
//   {
//     question: "What is the theoretical relationship between inheritance and code reuse in object-oriented programming, and what are the potential pitfalls of using inheritance primarily for code reuse rather than for modeling true 'is-a' relationships?",
//     options: {
//       A: "While inheritance enables code reuse, using it primarily for code reuse without a true 'is-a' relationship leads to fragile base class problems, tight coupling, and violation of the Liskov Substitution Principle, making composition a better choice for code reuse in such scenarios",
//       B: "Inheritance should always be used for code reuse regardless of the relationship type, as it is the most efficient mechanism",
//       C: "Code reuse is the only valid reason to use inheritance, with 'is-a' relationships being irrelevant",
//       D: "Inheritance and code reuse are unrelated concepts that cannot be used together"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) cho phép code reuse, nhưng sử dụng nó chủ yếu cho code reuse mà không có quan hệ 'is-a' thực sự dẫn đến các vấn đề: fragile base class problem (thay đổi base class có thể break subclass), tight coupling (subclass phụ thuộc chặt vào implementation của superclass), và violation Liskov Substitution Principle (subclass không thể thay thế superclass đúng cách). Composition (tổng hợp) là lựa chọn tốt hơn cho code reuse trong các trường hợp này vì nó tạo loose coupling và flexibility. Inheritance nên được dùng khi có quan hệ 'is-a' thực sự và muốn polymorphism, không chỉ đơn giản là code reuse. 'Favor composition over inheritance' là nguyên tắc quan trọng trong OOP design."
//   },
//   // Question 316
//   {
//     question: "In the context of abstraction, what is the theoretical difference between interface abstraction and implementation abstraction, and how do abstract classes and concrete classes contribute differently to these abstraction levels in a software system?",
//     options: {
//       A: "Interface abstraction defines the contract and public API that clients depend on, while implementation abstraction hides the internal details of how that contract is fulfilled, with abstract classes providing partial implementation abstraction and concrete classes providing complete implementation abstraction",
//       B: "Interface abstraction and implementation abstraction are identical concepts with no distinction",
//       C: "Abstract classes cannot provide any form of abstraction, only concrete classes can",
//       D: "Abstraction only applies to interfaces, not to classes"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Interface abstraction (trừu tượng hóa giao diện) định nghĩa contract và public API mà clients phụ thuộc vào - 'what' mà class cung cấp. Implementation abstraction (trừu tượng hóa triển khai) ẩn chi tiết bên trong về cách contract được thực hiện - 'how' được implement. Abstract classes cung cấp partial implementation abstraction - có thể có một số implementation chung và một số abstract methods. Concrete classes cung cấp complete implementation abstraction - có implementation đầy đủ nhưng vẫn ẩn chi tiết bên trong thông qua encapsulation. Cả hai mức abstraction đều quan trọng: interface abstraction cho phép clients phụ thuộc vào contract ổn định, implementation abstraction cho phép thay đổi implementation mà không ảnh hưởng đến clients."
//   },
//   // Question 317
//   {
//     question: "What are the theoretical mechanisms by which polymorphism enables the design of extensible systems, and how does the combination of inheritance, method overriding, and dynamic binding create a foundation for building software that can accommodate new requirements without modifying existing code?",
//     options: {
//       A: "Polymorphism enables extensibility by allowing new classes to be added that implement existing interfaces or extend base classes, with method overriding providing specialized behavior and dynamic binding ensuring the correct method is called at runtime, creating a system where new functionality can be added through new classes without changing existing code",
//       B: "Polymorphism requires modifying existing classes to add new behavior, preventing true extensibility",
//       C: "Extensibility can only be achieved through inheritance, with polymorphism playing no role",
//       D: "Dynamic binding and method overriding are unrelated to system extensibility"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) cho phép extensibility (khả năng mở rộng) bằng cách cho phép thêm các class mới implement existing interfaces hoặc extend base classes. Method overriding cung cấp specialized behavior - mỗi subclass có thể override method để cung cấp behavior riêng. Dynamic binding đảm bảo method đúng được gọi tại runtime dựa trên object type thực tế. Sự kết hợp này tạo nền tảng cho việc xây dựng software có thể accommodate requirements mới mà không cần modify existing code - ta chỉ cần tạo class mới implement/extend, và existing code sử dụng polymorphism sẽ tự động làm việc với class mới. Đây là cơ chế cốt lõi của Open-Closed Principle và là nền tảng cho design patterns như Strategy, Factory, v.v."
//   },
//   // Question 318
//   {
//     question: "Explain the theoretical concept of encapsulation boundaries in object-oriented design, and discuss how the proper use of access modifiers creates layers of abstraction that protect implementation details while exposing necessary interfaces for object interaction.",
//     options: {
//       A: "Encapsulation boundaries define the scope of visibility for class members, with access modifiers creating concentric layers of abstraction where private members form the innermost protected core, protected members extend to inheritance hierarchy, package-private creates module boundaries, and public members form the external interface, each layer serving specific architectural purposes",
//       B: "All access modifiers create identical boundaries with no architectural implications",
//       C: "Encapsulation boundaries are only relevant for data members, not for methods",
//       D: "Public access should always be used to maximize flexibility and code reuse"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation boundaries (ranh giới đóng gói) định nghĩa scope of visibility cho class members. Access modifiers tạo các lớp trừu tượng đồng tâm: private members tạo innermost protected core - chỉ truy cập trong cùng class, bảo vệ implementation details cốt lõi. Protected members mở rộng đến inheritance hierarchy - truy cập trong cùng package và subclass, cho phép inheritance nhưng vẫn bảo vệ khỏi external access. Package-private (default) tạo module boundaries - truy cập trong cùng package, cho phép module-level organization. Public members tạo external interface - truy cập từ mọi nơi, expose API cần thiết. Mỗi lớp phục vụ mục đích kiến trúc cụ thể: private cho internal implementation, protected cho inheritance, package-private cho module organization, public cho API. Việc sử dụng đúng các lớp này tạo ra architecture rõ ràng, dễ bảo trì và bảo mật."
//   },
//   // Question 319
//   {
//     question: "What is the theoretical foundation of the 'has-a' relationship in object composition versus the 'is-a' relationship in inheritance, and how do these relationships differ in terms of coupling, flexibility, and their suitability for different design scenarios?",
//     options: {
//       A: "The 'has-a' relationship represents composition where objects contain other objects, creating loose coupling and high flexibility, while the 'is-a' relationship represents inheritance creating tight coupling through implementation dependency, with composition being preferable when flexibility and loose coupling are priorities",
//       B: "'Has-a' and 'is-a' relationships are identical in terms of coupling and flexibility",
//       C: "Inheritance always provides better flexibility than composition",
//       D: "Composition cannot be used to model relationships between objects"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "'Has-a' relationship (có một) biểu thị composition - object chứa các object khác, tạo loose coupling (liên kết lỏng) và high flexibility (linh hoạt cao) vì có thể thay đổi implementation của object được chứa mà không ảnh hưởng đến object chứa. 'Is-a' relationship (là một) biểu thị inheritance - tạo tight coupling (liên kết chặt) thông qua implementation dependency vì subclass phụ thuộc trực tiếp vào implementation của superclass. Composition phù hợp hơn khi cần flexibility và loose coupling - có thể thay đổi behavior bằng cách thay đổi object được chứa, không cần modify class chứa. Inheritance phù hợp khi có quan hệ 'is-a' thực sự và cần polymorphism. Nguyên tắc 'Favor composition over inheritance' khuyến khích sử dụng composition khi có thể để tránh tight coupling và fragile base class problems."
//   },
//   // Question 320
//   {
//     question: "In the theoretical framework of polymorphism, how do covariant return types and contravariant parameter types relate to method overriding, and what are the type safety implications of these variance concepts in inheritance hierarchies?",
//     options: {
//       A: "Covariant return types allow a derived method to return a subtype of the base method's return type, maintaining type safety, while contravariant parameters would allow a derived method to accept a supertype, but Java does not support contravariant parameters in overriding, requiring exact parameter type matching to ensure type safety",
//       B: "Both covariant return types and contravariant parameters are fully supported in Java method overriding",
//       C: "Java does not support any form of variance in method overriding, requiring exact type matching for both return types and parameters",
//       D: "Variance concepts only apply to generic types, not to method overriding"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Covariant return types (kiểu trả về hiệp biến) cho phép derived method return subtype của return type trong base method (ví dụ: base return Animal, derived return Dog extends Animal), vẫn maintain type safety vì Dog là Animal. Contravariant parameters (tham số nghịch biến) sẽ cho phép derived method accept supertype của parameter type trong base method, nhưng Java không hỗ trợ contravariant parameters trong overriding - phải match exact parameter types để ensure type safety. Nếu cho phép contravariant parameters, có thể dẫn đến type safety issues khi client code pass subtype nhưng method expect supertype. Java's design choice đảm bảo type safety: covariant return types an toàn vì return value có thể được treat như supertype, nhưng contravariant parameters không an toàn vì có thể pass type không tương thích."
//   },
//   // Question 321
//   {
//     question: "What is the theoretical relationship between encapsulation and data integrity in object-oriented programming, and how do encapsulation mechanisms prevent invalid state transitions and maintain object invariants throughout an object's lifecycle?",
//     options: {
//       A: "Encapsulation protects data integrity by controlling access to internal state through access modifiers and methods, allowing validation logic in setters to prevent invalid state transitions and ensuring object invariants are maintained through controlled state changes",
//       B: "Encapsulation has no relationship to data integrity, which is handled separately through validation frameworks",
//       C: "Data integrity can only be maintained through public access to all fields, allowing external validation",
//       D: "Encapsulation prevents all state changes, making objects immutable by default"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) bảo vệ data integrity (tính toàn vẹn dữ liệu) bằng cách kiểm soát truy cập vào internal state thông qua access modifiers và methods. Validation logic trong setters có thể prevent invalid state transitions - kiểm tra giá trị trước khi gán, reject giá trị không hợp lệ. Object invariants (bất biến) được maintain thông qua controlled state changes - chỉ cho phép thay đổi state thông qua methods có validation, không cho phép direct access. Ví dụ: setter có thể validate age >= 0, balance >= 0, v.v. Điều này đảm bảo object luôn ở trạng thái hợp lệ trong suốt lifecycle, ngăn chặn corruption và invalid states. Public access sẽ phá vỡ encapsulation và không thể đảm bảo integrity."
//   },
//   // Question 322
//   {
//     question: "Explain the theoretical concept of inheritance hierarchies and their depth, and discuss the trade-offs between deep inheritance hierarchies versus shallow hierarchies in terms of code reuse, maintainability, and the potential for fragile base class problems.",
//     options: {
//       A: "Deep inheritance hierarchies provide extensive code reuse but increase coupling and fragile base class risks, while shallow hierarchies reduce these risks but may require more code duplication, with optimal design balancing hierarchy depth against maintainability and coupling concerns",
//       B: "Deeper inheritance hierarchies are always better, providing maximum code reuse with no drawbacks",
//       C: "Shallow hierarchies are always preferable, with deep hierarchies being an anti-pattern in all cases",
//       D: "Inheritance hierarchy depth has no impact on code quality or maintainability"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Deep inheritance hierarchies (hệ thống kế thừa sâu) cung cấp extensive code reuse nhưng tăng coupling và fragile base class risks - thay đổi ở base class có thể ảnh hưởng đến nhiều subclasses. Shallow hierarchies (hệ thống nông) giảm risks này nhưng có thể require more code duplication. Optimal design cân bằng hierarchy depth với maintainability và coupling concerns. Quy tắc chung: giữ hierarchy càng nông càng tốt (thường 2-3 levels), tránh deep hierarchies (>4-5 levels) vì chúng khó maintain, test, và debug. Khi cần deep hierarchy, consider composition hoặc mixins. Fragile base class problem xảy ra khi base class changes break subclasses unexpectedly, đặc biệt nguy hiểm với deep hierarchies vì impact lan rộng."
//   },
//   // Question 323
//   {
//     question: "What is the theoretical foundation of method hiding versus method overriding in Java, and how does the distinction between static methods and instance methods affect polymorphism and method resolution in inheritance hierarchies?",
//     options: {
//       A: "Method hiding occurs with static methods where a subclass defines a static method with the same signature, resolved at compile-time based on reference type, while method overriding occurs with instance methods, resolved at runtime based on object type, with only instance method overriding supporting true polymorphism",
//       B: "Method hiding and method overriding work identically for both static and instance methods",
//       C: "Static methods support runtime polymorphism just like instance methods",
//       D: "Method hiding is not possible in Java, only method overriding exists"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method hiding (ẩn method) xảy ra với static methods - subclass define static method cùng signature với superclass, resolved tại compile-time dựa trên reference type (không phải object type). Method overriding (ghi đè method) xảy ra với instance methods - resolved tại runtime dựa trên object type. Chỉ instance method overriding support true polymorphism (đa hình thực sự) vì method được chọn dựa trên object type thực tế. Static methods không có polymorphism - method được chọn dựa trên reference type tại compile-time. Đây là lý do tại sao static methods không nên được gọi qua instance reference (nên dùng ClassName.method()). Method hiding với static methods là compile-time polymorphism, method overriding với instance methods là runtime polymorphism."
//   },
//   // Question 324
//   {
//     question: "In the context of abstraction, what is the theoretical difference between procedural abstraction and data abstraction, and how do these concepts manifest in object-oriented programming through methods and classes respectively?",
//     options: {
//       A: "Procedural abstraction hides the implementation details of operations or algorithms, manifesting as methods in OOP, while data abstraction hides the internal representation and structure of data, manifesting as classes that encapsulate data with associated operations, with both working together to create complete abstractions",
//       B: "Procedural and data abstraction are identical concepts with no distinction",
//       C: "Data abstraction only applies to primitive types, not to classes",
//       D: "Procedural abstraction cannot be achieved in object-oriented programming"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Procedural abstraction (trừu tượng hóa thủ tục) ẩn implementation details của operations hoặc algorithms, manifesting như methods trong OOP - client chỉ cần biết method làm gì, không cần biết làm như thế nào. Data abstraction (trừu tượng hóa dữ liệu) ẩn internal representation và structure của data, manifesting như classes encapsulate data với associated operations - client chỉ cần biết interface, không cần biết data được store như thế nào. Cả hai làm việc cùng nhau để tạo complete abstractions - methods (procedural) operate on data (data abstraction) được encapsulate trong classes. Ví dụ: Stack class ẩn cách implement (array/list), và push/pop methods ẩn algorithm details. Sự kết hợp này tạo ra abstraction mạnh mẽ và flexible."
//   },
//   // Question 325
//   {
//     question: "What are the theoretical mechanisms by which encapsulation enables information hiding, and how does the principle of least privilege apply to access modifier selection in designing secure and maintainable object-oriented systems?",
//     options: {
//       A: "Encapsulation enables information hiding by restricting access through modifiers, and the principle of least privilege requires granting minimum necessary access, meaning members should be private by default and elevated to protected or public only when external access is genuinely required, minimizing attack surface and coupling",
//       B: "All members should be public to maximize flexibility and ease of use",
//       C: "The principle of least privilege does not apply to object-oriented programming",
//       D: "Information hiding and least privilege are conflicting principles that cannot be used together"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) enable information hiding (ẩn thông tin) bằng cách restrict access thông qua modifiers. Principle of least privilege (nguyên tắc đặc quyền tối thiểu) yêu cầu grant minimum necessary access - members nên là private by default và chỉ elevate lên protected hoặc public khi external access thực sự cần thiết. Điều này minimize attack surface (bề mặt tấn công) và coupling (liên kết). Private by default đảm bảo chỉ expose những gì cần thiết, giảm risk của unauthorized access và unintended dependencies. Protected chỉ khi cần inheritance, public chỉ khi cần external API. Approach này tạo ra systems an toàn hơn, dễ maintain hơn, và có clear boundaries. Vi phạm principle này (public everything) tạo tight coupling và security risks."
//   },
//   // Question 326
//   {
//     question: "Explain the theoretical relationship between inheritance and specialization in object-oriented design, and how does the concept of substitutability ensure that specialized classes can be used wherever their base classes are expected without breaking client code expectations?",
//     options: {
//       A: "Inheritance enables specialization where derived classes are specialized versions of base classes, and substitutability requires that specialized classes maintain the behavioral contract of base classes, allowing them to be used interchangeably with base classes while potentially providing enhanced or specialized behavior",
//       B: "Specialization and substitutability are unrelated concepts in inheritance",
//       C: "Specialized classes cannot be used as substitutes for base classes under any circumstances",
//       D: "Substitutability only applies to interfaces, not to class inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable specialization (chuyên biệt hóa) - derived classes là specialized versions của base classes, có thể có thêm features hoặc behavior đặc biệt. Substitutability (khả năng thay thế) yêu cầu specialized classes maintain behavioral contract của base classes - có thể được dùng interchangeably với base classes mà không break client code expectations. Điều này đảm bảo Liskov Substitution Principle - subclass có thể thay thế superclass mà không thay đổi correctness của program. Specialized classes có thể provide enhanced behavior (behavior tốt hơn) hoặc specialized behavior (behavior đặc biệt) nhưng không được violate contract. Ví dụ: Dog extends Animal, có thể thêm behavior như bark() nhưng phải maintain contract của Animal (eat(), sleep()). Client code expecting Animal có thể dùng Dog mà không có vấn đề."
//   },
//   // Question 327
//   {
//     question: "What is the theoretical foundation of polymorphism as it relates to the concept of 'one interface, multiple implementations,' and how does this principle enable the design of flexible systems that can work with different implementations without knowing their specific types?",
//     options: {
//       A: "Polymorphism enables 'one interface, multiple implementations' where client code depends on an interface or base class, and different classes provide different implementations of that interface, allowing the system to work with any implementation without knowing the specific type, creating flexibility and extensibility",
//       B: "Polymorphism requires knowing the specific type of each object to function correctly",
//       C: "'One interface, multiple implementations' can only be achieved through inheritance, not through interfaces",
//       D: "Polymorphism and multiple implementations are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable 'one interface, multiple implementations' (một giao diện, nhiều triển khai) - client code phụ thuộc vào interface hoặc base class, và different classes provide different implementations của interface đó. System có thể work với any implementation mà không cần biết specific type, tạo flexibility và extensibility. Client code chỉ cần biết interface, không cần biết implementation cụ thể. Ví dụ: List interface có ArrayList, LinkedList implementations - client code dùng List interface có thể work với cả hai mà không cần biết loại nào. Điều này cho phép swap implementations, add new implementations, mà không cần modify client code. Đây là foundation của nhiều design patterns (Strategy, Factory, v.v.) và là core principle của flexible, maintainable software design."
//   },
//   // Question 328
//   {
//     question: "In the theoretical framework of encapsulation, how do getter and setter methods serve as accessor and mutator patterns, and what are the design considerations for when to provide read-only access, write-only access, or read-write access to encapsulated data?",
//     options: {
//       A: "Getters provide read access (accessors) and setters provide write access (mutators), with design considerations including: read-only access (only getter) for immutable or computed values, write-only access (only setter) for configuration that doesn't need reading, and read-write access (both) for mutable state, with the choice depending on the data's role and mutability requirements",
//       B: "All encapsulated data must have both getters and setters without exception",
//       C: "Getters and setters are optional and provide no real benefit over direct field access",
//       D: "Read-only and write-only access patterns are not possible in object-oriented programming"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Getters (accessors) provide read access, setters (mutators) provide write access. Design considerations: read-only access (chỉ getter) cho immutable values (final fields) hoặc computed values (calculated từ other fields) - không cần setter vì giá trị không thay đổi hoặc được tính toán. Write-only access (chỉ setter) cho configuration không cần đọc - hiếm khi dùng. Read-write access (cả hai) cho mutable state cần cả đọc và ghi. Choice phụ thuộc vào role và mutability requirements của data. Ví dụ: ID field có thể read-only (chỉ getter), password có thể write-only trong một số cases, name có thể read-write. Không phải tất cả data đều cần cả getter và setter - chỉ provide những gì cần thiết theo principle of least privilege. Điều này tạo ra better encapsulation và prevent unintended modifications."
//   },
//   // Question 329
//   {
//     question: "What is the theoretical relationship between abstract classes and concrete classes in terms of their roles in inheritance hierarchies, and how do abstract methods versus concrete methods contribute to the balance between providing common implementation and requiring specialized implementation in derived classes?",
//     options: {
//       A: "Abstract classes provide a partial implementation with some concrete methods for shared behavior and abstract methods that must be implemented by derived classes, while concrete classes provide complete implementation, with abstract methods forcing specialization and concrete methods enabling code reuse",
//       B: "Abstract classes and concrete classes are functionally identical with no meaningful differences",
//       C: "Abstract classes cannot contain any concrete methods, only abstract methods",
//       D: "Concrete classes cannot be used in inheritance hierarchies"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstract classes (lớp trừu tượng) provide partial implementation - có một số concrete methods cho shared behavior và abstract methods phải được implement bởi derived classes. Concrete classes (lớp cụ thể) provide complete implementation. Abstract methods force specialization - derived classes phải provide implementation riêng, đảm bảo mỗi subclass có behavior đặc biệt. Concrete methods enable code reuse - shared behavior được implement một lần trong abstract class, tất cả subclasses inherit. Sự cân bằng này cho phép: code reuse thông qua concrete methods, và forced specialization thông qua abstract methods. Ví dụ: Animal abstract class có concrete method breathe() (shared) và abstract method makeSound() (specialized). Điều này tạo ra inheritance hierarchy linh hoạt - vừa reuse code, vừa đảm bảo specialization."
//   },
//   // Question 330
//   {
//     question: "Explain the theoretical concept of method resolution order in polymorphism, and how does the Java Virtual Machine determine which method implementation to execute when dealing with method overriding across multiple levels of inheritance, including the role of virtual method tables.",
//     options: {
//       A: "Method resolution in polymorphism follows the inheritance hierarchy from the actual object's class upward to parent classes, with the JVM using virtual method tables (vtables) that store method pointers for each class, allowing efficient lookup of the most specific override at runtime based on the object's actual type",
//       B: "Method resolution always uses the reference type, ignoring the actual object type completely",
//       C: "The JVM randomly selects which method to call when multiple overrides exist",
//       D: "Virtual method tables are not used in Java, with method resolution being purely compile-time"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method resolution trong polymorphism follow inheritance hierarchy từ actual object's class lên parent classes. JVM sử dụng virtual method tables (vtables) - mỗi class có bảng chứa pointers đến method implementations. JVM lookup method từ class của object thực tế, nếu không tìm thấy thì lên parent class, cho đến khi tìm thấy implementation. Vtable cho phép efficient lookup - O(1) complexity thay vì traverse hierarchy mỗi lần. Method được chọn là most specific override - implementation từ class cụ thể nhất trong hierarchy. Điều này đảm bảo runtime polymorphism hoạt động chính xác - method của subclass được gọi thay vì method của superclass, ngay cả khi reference có kiểu superclass. Vtable là implementation detail của JVM để optimize performance của dynamic dispatch."
//   },
//   // Question 331
//   {
//     question: "What is the theoretical foundation of the relationship between encapsulation and modularity in object-oriented design, and how does proper encapsulation contribute to creating modular systems where components can be developed, tested, and maintained independently?",
//     options: {
//       A: "Encapsulation creates clear boundaries between components by hiding implementation details and exposing only necessary interfaces, enabling modularity where each module (class) is self-contained with well-defined interfaces, allowing independent development, testing, and maintenance without affecting other modules",
//       B: "Encapsulation and modularity are unrelated concepts that cannot work together",
//       C: "Modularity requires all components to expose all their internal details for maximum flexibility",
//       D: "Encapsulation prevents modularity by hiding information needed by other modules"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo clear boundaries giữa components bằng cách ẩn implementation details và chỉ expose necessary interfaces. Điều này enable modularity (tính mô-đun) - mỗi module (class) là self-contained với well-defined interfaces. Modules có thể được develop, test, và maintain independently mà không affect other modules vì chúng chỉ depend vào interfaces, không phải implementations. Clear boundaries ngăn chặn tight coupling và cho phép thay đổi implementation bên trong module mà không ảnh hưởng đến modules khác. Đây là foundation của modular architecture - systems được chia thành independent, interchangeable modules với clear contracts. Encapsulation không prevent modularity mà enable nó bằng cách tạo boundaries rõ ràng."
//   },
//   // Question 332
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of the inheritance chain and method lookup, and how does the depth of the inheritance chain impact performance, maintainability, and the complexity of understanding the class hierarchy?",
//     options: {
//       A: "The inheritance chain represents the path from a class to its root ancestor, and method lookup traverses this chain to find method implementations, with deeper chains increasing lookup complexity, making code harder to understand and maintain, and potentially impacting performance, though modern JVMs optimize this through vtables",
//       B: "Inheritance chain depth has no impact on any aspect of system design or performance",
//       C: "Deeper inheritance chains always improve performance and maintainability",
//       D: "Method lookup does not traverse the inheritance chain, always using the immediate class"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance chain (chuỗi kế thừa) là path từ một class đến root ancestor (Object trong Java). Method lookup traverse chain này để tìm method implementations - bắt đầu từ class hiện tại, nếu không tìm thấy thì lên parent class, tiếp tục đến root. Deeper chains (chuỗi sâu hơn) increase lookup complexity - phải traverse nhiều levels, làm code khó understand và maintain hơn vì phải trace qua nhiều classes. Performance có thể bị impact mặc dù modern JVMs optimize thông qua vtables (O(1) lookup). Deep chains cũng tăng risk của fragile base class problem - thay đổi ở base class ảnh hưởng đến nhiều subclasses. Shallow chains (2-3 levels) thường tốt hơn cho maintainability và clarity. Optimal design balance giữa code reuse và chain depth."
//   },
//   // Question 333
//   {
//     question: "What is the theoretical relationship between abstraction levels and system complexity in object-oriented design, and how do appropriate abstraction levels help manage complexity by hiding unnecessary details while exposing essential information for system interaction?",
//     options: {
//       A: "Appropriate abstraction levels manage complexity by presenting simplified views that hide implementation details while exposing essential interfaces, with each abstraction level serving a specific purpose and audience, reducing cognitive load and enabling developers to work at appropriate levels of detail",
//       B: "Higher abstraction levels always increase complexity by adding layers",
//       C: "Abstraction has no relationship to complexity management",
//       D: "All abstraction levels should expose all details for maximum transparency"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Appropriate abstraction levels (mức trừu tượng phù hợp) manage complexity bằng cách present simplified views ẩn implementation details nhưng expose essential interfaces. Mỗi abstraction level serve specific purpose và audience - high-level abstractions cho architects và designers, low-level cho implementers. Điều này reduce cognitive load (tải nhận thức) và enable developers work at appropriate levels of detail - không cần biết tất cả chi tiết, chỉ cần biết những gì cần thiết cho task hiện tại. Abstraction levels tạo hierarchy of understanding - từ general đến specific. Ví dụ: interface abstraction cho client code, class abstraction cho implementation, method abstraction cho algorithms. Quá nhiều hoặc quá ít abstraction đều có vấn đề - cần balance để manage complexity effectively."
//   },
//   // Question 334
//   {
//     question: "Explain the theoretical concept of encapsulation as a mechanism for achieving information hiding, and how does the principle of 'need-to-know' apply to determining what information should be exposed versus hidden in a well-designed class interface?",
//     options: {
//       A: "Encapsulation achieves information hiding by restricting access to internal details, and the 'need-to-know' principle requires exposing only information necessary for clients to use the class effectively, hiding all implementation details and internal state that clients don't need to know, creating clean and stable interfaces",
//       B: "The 'need-to-know' principle requires exposing all information for maximum transparency",
//       C: "Information hiding and 'need-to-know' are conflicting principles",
//       D: "All class members should be hidden, with no public interface needed"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) achieve information hiding (ẩn thông tin) bằng cách restrict access đến internal details. 'Need-to-know' principle (nguyên tắc cần biết) yêu cầu expose chỉ information cần thiết cho clients sử dụng class effectively, ẩn tất cả implementation details và internal state mà clients không cần biết. Điều này tạo clean và stable interfaces - clients chỉ depend vào những gì cần thiết, không depend vào implementation details có thể thay đổi. Public interface nên minimal và focused - chỉ expose methods cần thiết cho intended use cases. Internal state, helper methods, và implementation details nên private. Approach này tạo loose coupling, dễ maintain, và stable APIs. Vi phạm principle này (expose quá nhiều) tạo tight coupling và fragile dependencies."
//   },
//   // Question 335
//   {
//     question: "What is the theoretical foundation of polymorphism as it enables the design of extensible and maintainable systems, and how does the combination of late binding and interface-based programming create systems that can evolve without breaking existing code?",
//     options: {
//       A: "Polymorphism enables extensibility through late binding where method calls are resolved at runtime, combined with interface-based programming where code depends on abstractions rather than concrete types, allowing new implementations to be added without modifying existing code that depends on the abstraction",
//       B: "Polymorphism requires early binding and concrete type dependencies for proper functionality",
//       C: "Late binding and interface-based programming are unrelated to system extensibility",
//       D: "Extensible systems cannot be achieved through polymorphism, requiring code modification for all changes"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable extensibility (khả năng mở rộng) thông qua late binding (liên kết muộn) - method calls được resolve tại runtime dựa trên object type thực tế. Kết hợp với interface-based programming (lập trình dựa trên giao diện) - code depend vào abstractions (interfaces/base classes) thay vì concrete types. Điều này allow new implementations được add mà không cần modify existing code depend vào abstraction. Client code depend vào interface, không biết implementation cụ thể, nên có thể work với bất kỳ implementation nào. Khi add implementation mới, chỉ cần implement interface, existing code tự động work với nó. Đây là foundation của Open-Closed Principle và nhiều design patterns. Systems có thể evolve (phát triển) mà không break existing code vì dependencies dựa trên stable abstractions."
//   },
//   // Question 336
//   {
//     question: "In the context of inheritance hierarchies, what is the theoretical concept of the inheritance diamond problem, and how does Java's single inheritance model prevent this problem while still allowing multiple interface implementation to achieve similar flexibility?",
//     options: {
//       A: "The diamond problem occurs when a class inherits from two classes that share a common ancestor, creating ambiguity about which implementation to use, and Java's single inheritance prevents this by allowing only one parent class, while multiple interface implementation provides flexibility without the diamond problem since interfaces contain no implementation to conflict",
//       B: "Java supports multiple inheritance for classes, making the diamond problem a common issue",
//       C: "The diamond problem only occurs with interfaces, not with classes",
//       D: "Java's single inheritance model prevents all forms of code reuse and flexibility"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Diamond problem (vấn đề kim cương) xảy ra khi một class inherit từ hai classes có common ancestor, tạo ambiguity về implementation nào được dùng. Java's single inheritance prevent vấn đề này bằng cách chỉ allow một parent class - một class chỉ extend một class, không có multiple inheritance. Multiple interface implementation provide flexibility mà không có diamond problem vì interfaces không chứa implementation để conflict - nếu hai interfaces có method signature giống nhau, class chỉ cần provide một implementation. Từ Java 8, interfaces có default methods, nhưng nếu conflict xảy ra, class phải override explicitly. Single inheritance trade-off: prevent diamond problem nhưng limit flexibility so với multiple inheritance. Multiple interface implementation compensate bằng cách allow 'can-do' relationships (một class có thể implement nhiều interfaces) mà không có implementation conflicts."
//   },
//   // Question 337
//   {
//     question: "What is the theoretical relationship between encapsulation and the concept of object state, and how do encapsulation mechanisms ensure that object state transitions occur only through controlled, validated pathways that maintain object invariants?",
//     options: {
//       A: "Encapsulation protects object state by restricting direct access to state variables, requiring all state changes to occur through controlled methods (like setters) that can validate inputs and enforce invariants, ensuring state transitions are always valid and object integrity is maintained",
//       B: "Encapsulation prevents all state changes, making objects completely immutable",
//       C: "State changes should always occur through direct field access for maximum performance",
//       D: "Object state and encapsulation are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) protect object state bằng cách restrict direct access đến state variables. Tất cả state changes phải occur through controlled methods (như setters) có thể validate inputs và enforce invariants (bất biến). Điều này ensure state transitions luôn valid và object integrity được maintain. Setters có thể check preconditions (điều kiện tiên quyết), validate values, và maintain invariants trước khi thay đổi state. Ví dụ: setAge() có thể validate age >= 0, setBalance() có thể check balance >= 0. Direct field access sẽ bypass validation và có thể tạo invalid states. Encapsulation không prevent state changes mà control chúng - chỉ allow valid changes. Điều này đảm bảo objects luôn ở valid states và invariants được preserve."
//   },
//   // Question 338
//   {
//     question: "Explain the theoretical concept of method overriding contracts in inheritance, and how do the rules regarding method signatures, return types, access modifiers, and exceptions create a contract that ensures substitutability while allowing specialized implementations?",
//     options: {
//       A: "Method overriding contracts require identical method signatures, allow covariant return types, require equal or broader access (derived method cannot be more restrictive), and require equal or narrower exceptions (derived cannot throw broader checked exceptions), creating a contract that ensures derived classes can substitute base classes while providing specialized behavior",
//       B: "Method overriding allows complete freedom to change signatures, return types, access modifiers, and exceptions without any constraints",
//       C: "Overriding contracts only apply to method names, with all other aspects being freely changeable",
//       D: "Method overriding contracts prevent any form of specialization, requiring identical implementations"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method overriding contracts (hợp đồng ghi đè method) yêu cầu: identical method signatures (tên, parameters, parameter types), allow covariant return types (derived có thể return subtype), require equal or broader access (derived method không thể restrictive hơn - public method không thể override thành private), và require equal or narrower exceptions (derived không thể throw broader checked exceptions). Contract này ensure derived classes có thể substitute base classes (Liskov Substitution) trong khi provide specialized behavior. Vi phạm contract sẽ break substitutability - client code expect behavior từ base class có thể không work với derived class. Contract balance giữa flexibility (cho phép specialization) và safety (đảm bảo substitutability). Đây là foundation của polymorphism và inheritance design."
//   },
//   // Question 339
//   {
//     question: "What are the theoretical mechanisms by which abstraction reduces cognitive complexity in software design, and how do different levels of abstraction (class, method, system) work together to create comprehensible and maintainable software architectures?",
//     options: {
//       A: "Abstraction reduces cognitive complexity by hiding irrelevant details at each level, with class-level abstraction hiding implementation details, method-level abstraction hiding algorithmic details, and system-level abstraction hiding component interactions, working together to allow developers to understand and work with appropriate levels of detail without being overwhelmed by complexity",
//       B: "Abstraction increases complexity by adding layers that must be understood",
//       C: "Only one level of abstraction can exist in a system, with other levels being unnecessary",
//       D: "Cognitive complexity and abstraction are unrelated concepts in software design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) reduce cognitive complexity (độ phức tạp nhận thức) bằng cách ẩn irrelevant details ở mỗi level. Class-level abstraction ẩn implementation details - developers chỉ cần biết interface, không cần biết implementation. Method-level abstraction ẩn algorithmic details - chỉ cần biết method làm gì, không cần biết làm như thế nào. System-level abstraction ẩn component interactions - chỉ cần biết components communicate như thế nào, không cần biết chi tiết internal. Các levels work together để allow developers understand và work với appropriate levels of detail mà không bị overwhelmed bởi complexity. Developers có thể focus vào level relevant cho task hiện tại, ignore details ở other levels. Điều này tạo comprehensible và maintainable architectures - dễ understand, dễ modify, dễ extend."
//   },
//   // Question 340
//   {
//     question: "In the theoretical framework of object-oriented programming, what is the relationship between encapsulation and the principle of least knowledge (Law of Demeter), and how do these concepts work together to minimize coupling between objects?",
//     options: {
//       A: "Encapsulation provides the mechanism for information hiding, while the Law of Demeter restricts how objects can access other objects' internals, requiring objects to only talk to their immediate friends (direct collaborators), and together they minimize coupling by limiting knowledge of other objects' structures and reducing dependencies",
//       B: "Encapsulation and the Law of Demeter are conflicting principles that cannot be used together",
//       C: "The Law of Demeter requires objects to have full knowledge of all related objects' internals",
//       D: "Encapsulation prevents the Law of Demeter from being applied effectively"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) provide mechanism cho information hiding (ẩn thông tin). Law of Demeter (Luật Demeter) restrict cách objects access other objects' internals - objects chỉ nên talk to immediate friends (direct collaborators), không nên navigate qua chains of method calls (a.getB().getC().doSomething()). Together, chúng minimize coupling bằng cách limit knowledge của other objects' structures và reduce dependencies. Encapsulation ẩn internal structure, Law of Demeter prevent deep navigation vào structure đó. Ví dụ: thay vì a.getB().getC().doSomething(), nên có a.doSomething() delegate đến appropriate object. Điều này tạo loose coupling - objects chỉ depend vào direct collaborators, không depend vào internal structure của distant objects. Kết quả: systems dễ maintain, test, và modify vì changes ít propagate."
//   },
//   // Question 341
//   {
//     question: "What is the theoretical foundation of the relationship between inheritance and code organization in object-oriented systems, and how does inheritance hierarchy structure contribute to organizing related classes and managing their relationships in large-scale software projects?",
//     options: {
//       A: "Inheritance organizes code by creating hierarchical relationships that group related classes, with the hierarchy structure reflecting specialization relationships and shared characteristics, enabling systematic organization of classes and clear management of their relationships in large systems",
//       B: "Inheritance has no relationship to code organization, which is handled separately through package structures",
//       C: "Inheritance always makes code organization more difficult by creating complex dependencies",
//       D: "Code organization can only be achieved through composition, not through inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) organize code bằng cách tạo hierarchical relationships nhóm related classes lại với nhau. Hierarchy structure reflect specialization relationships và shared characteristics - classes có đặc điểm chung được group trong cùng hierarchy, classes specialized được organize như subclasses. Điều này enable systematic organization của classes và clear management của relationships trong large systems. Inheritance hierarchy tạo structure rõ ràng - từ general (base classes) đến specific (derived classes), giúp developers understand relationships và locate classes. Trong large-scale projects, inheritance hierarchy giúp organize hundreds hoặc thousands of classes theo logical structure. Tuy nhiên, cần balance - hierarchy quá sâu hoặc quá phẳng đều có vấn đề. Optimal organization combine inheritance hierarchy với package structure để tạo clear, maintainable codebase."
//   },
//   // Question 342
//   {
//     question: "Explain the theoretical concept of abstraction layers in object-oriented design, and how do different abstraction layers (high-level interfaces, mid-level classes, low-level implementations) work together to create systems that are both flexible and comprehensible?",
//     options: {
//       A: "Abstraction layers create levels of detail from high-level interfaces defining contracts, through mid-level classes providing structure, to low-level implementations providing details, with each layer serving different purposes and audiences, working together to create systems that balance flexibility through stable high-level abstractions with comprehensibility through appropriate detail exposure",
//       B: "All abstraction layers should expose the same level of detail for consistency",
//       C: "Abstraction layers are unnecessary and add complexity without benefits",
//       D: "Only one abstraction layer can exist in a system"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction layers (lớp trừu tượng) tạo levels of detail từ high-level interfaces định nghĩa contracts, qua mid-level classes provide structure, đến low-level implementations provide details. Mỗi layer serve different purposes và audiences - high-level cho architects và designers, mid-level cho developers, low-level cho implementers. Together, chúng create systems balance flexibility (thông qua stable high-level abstractions) với comprehensibility (thông qua appropriate detail exposure). High-level abstractions stable và flexible - clients depend vào chúng, implementations có thể change. Low-level implementations có thể optimize và change mà không affect high-level. Mid-level provide structure và organization. Developers có thể work ở appropriate layer - không cần biết tất cả details, chỉ cần biết layer relevant. Điều này tạo systems vừa flexible vừa comprehensible."
//   },
//   // Question 343
//   {
//     question: "What is the theoretical relationship between polymorphism and the concept of behavioral variation in object-oriented systems, and how does polymorphism enable objects of different types to respond differently to the same method call while maintaining a uniform interface?",
//     options: {
//       A: "Polymorphism enables behavioral variation where different classes implement the same interface or extend the same base class, each providing different implementations of methods, allowing objects of different types to respond differently to identical method calls while clients interact through a uniform interface, creating flexibility and extensibility",
//       B: "Polymorphism requires all objects to behave identically, preventing any behavioral variation",
//       C: "Behavioral variation can only be achieved through conditional statements, not through polymorphism",
//       D: "Polymorphism and behavioral variation are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable behavioral variation (biến đổi hành vi) - different classes implement same interface hoặc extend same base class, mỗi class provide different implementations của methods. Objects của different types có thể respond differently đến identical method calls trong khi clients interact through uniform interface. Ví dụ: Animal interface có makeSound() method, Dog và Cat implement khác nhau - dog.bark(), cat.meow(), nhưng client code gọi animal.makeSound() với uniform interface. Điều này create flexibility và extensibility - có thể add new types (new implementations) mà không modify client code. Client code depend vào interface, không biết implementation cụ thể, nên có thể work với any implementation. Đây là core mechanism của many design patterns và flexible system design."
//   },
//   // Question 344
//   {
//     question: "In the theoretical framework of encapsulation, what is the concept of access control and how do access modifiers create a security model for class members that protects internal implementation while allowing necessary external interaction?",
//     options: {
//       A: "Access control restricts visibility and modification of class members through access modifiers, creating a security model where private members are protected from external access, protected members allow inheritance-based access, and public members form the controlled interface, balancing protection of implementation with necessary external interaction",
//       B: "Access control prevents all external interaction, making classes completely isolated",
//       C: "Access modifiers have no security implications and are purely organizational",
//       D: "All members should be public to maximize accessibility and code reuse"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Access control (kiểm soát truy cập) restrict visibility và modification của class members thông qua access modifiers, tạo security model. Private members protected từ external access - chỉ truy cập trong cùng class, bảo vệ implementation details. Protected members allow inheritance-based access - truy cập trong cùng package và subclass, cho phép inheritance nhưng vẫn protect. Public members form controlled interface - truy cập từ mọi nơi, expose API cần thiết. Model này balance protection của implementation với necessary external interaction. Security model này prevent unauthorized access và unintended modifications, maintain data integrity, và create clear boundaries. Không phải tất cả members đều nên public - chỉ expose những gì cần thiết theo principle of least privilege. Điều này tạo secure, maintainable classes với clear interfaces."
//   },
//   // Question 345
//   {
//     question: "What are the theoretical foundations of the relationship between inheritance and the concept of code reuse, and what are the trade-offs between using inheritance for code reuse versus using composition, delegation, or other mechanisms?",
//     options: {
//       A: "Inheritance enables code reuse through the inheritance of methods and fields from parent classes, but creates tight coupling and fragile base class problems, while composition and delegation provide code reuse with loose coupling and greater flexibility, with the choice depending on whether a true 'is-a' relationship exists versus a 'has-a' or 'uses-a' relationship",
//       B: "Inheritance is the only mechanism for code reuse in object-oriented programming",
//       C: "Composition and delegation cannot provide code reuse, only inheritance can",
//       D: "Code reuse has no relationship to inheritance or composition"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable code reuse thông qua inheritance của methods và fields từ parent classes. Tuy nhiên, nó tạo tight coupling và fragile base class problems - subclass phụ thuộc chặt vào implementation của superclass, thay đổi ở superclass có thể break subclasses. Composition và delegation provide code reuse với loose coupling và greater flexibility - object chứa other objects và delegate tasks đến chúng, có thể thay đổi implementation mà không affect containing object. Choice phụ thuộc vào relationship type: 'is-a' relationship (thực sự) → inheritance, 'has-a' hoặc 'uses-a' relationship → composition/delegation. 'Favor composition over inheritance' là nguyên tắc quan trọng - chỉ dùng inheritance khi có 'is-a' relationship thực sự, không chỉ để code reuse. Composition provide better flexibility, testability, và maintainability trong nhiều cases."
//   },
//   // Question 346
//   {
//     question: "Explain the theoretical concept of method binding in polymorphism, and how do the differences between early binding (static binding) and late binding (dynamic binding) impact system design, performance, and flexibility?",
//     options: {
//       A: "Method binding determines when and how method calls are resolved, with early binding resolving at compile-time based on reference types providing performance benefits but less flexibility, while late binding resolves at runtime based on object types providing flexibility and extensibility with slight performance overhead, with the choice impacting system design trade-offs between performance and flexibility",
//       B: "Early and late binding are identical mechanisms with no differences",
//       C: "Late binding always provides better performance than early binding",
//       D: "Method binding has no impact on system design or performance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method binding (liên kết method) determine khi nào và như thế nào method calls được resolve. Early binding (static binding) resolve tại compile-time dựa trên reference types - compiler biết method nào được gọi, provide performance benefits (không cần lookup) nhưng less flexibility (không thể change behavior tại runtime). Late binding (dynamic binding) resolve tại runtime dựa trên object types - JVM determine method tại runtime, provide flexibility và extensibility (có thể change behavior) với slight performance overhead (cần lookup trong vtable). Choice impact system design trade-offs giữa performance và flexibility. Overloaded methods use early binding, overridden methods use late binding. Design decisions: cần flexibility và extensibility → late binding (polymorphism), cần performance → early binding (overloading). Modern JVMs optimize late binding through vtables, minimizing overhead."
//   },
//   // Question 347
//   {
//     question: "What is the theoretical relationship between abstraction and the concept of generalization in object-oriented design, and how does abstraction enable the creation of general solutions that can be specialized for specific use cases?",
//     options: {
//       A: "Abstraction enables generalization by identifying common characteristics and behaviors shared across multiple specific cases, creating general abstractions (interfaces or base classes) that capture essential features, which can then be specialized through inheritance or implementation to create specific solutions for particular use cases",
//       B: "Abstraction prevents generalization by focusing only on specific details",
//       C: "Generalization and specialization are unrelated to abstraction",
//       D: "Abstraction can only work with specific implementations, not with general solutions"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) enable generalization (tổng quát hóa) bằng cách identify common characteristics và behaviors shared across multiple specific cases. Tạo general abstractions (interfaces hoặc base classes) capture essential features - những gì common và important, ignore specific details. Abstractions này có thể được specialized thông qua inheritance hoặc implementation để create specific solutions cho particular use cases. Process: identify commonalities → create abstraction → specialize for specific cases. Ví dụ: Vehicle abstraction (general) có Car, Truck, Motorcycle implementations (specific). Generalization tạo reusable abstractions, specialization tạo concrete solutions. Abstraction balance giữa general (reusable) và specific (useful) - quá general thì không useful, quá specific thì không reusable. Optimal abstraction level capture essential features mà vẫn allow meaningful specialization."
//   },
//   // Question 348
//   {
//     question: "In the context of encapsulation, what is the theoretical concept of data integrity and how do encapsulation mechanisms ensure that objects maintain valid states throughout their lifecycle by controlling how state can be accessed and modified?",
//     options: {
//       A: "Data integrity ensures objects remain in valid states, and encapsulation mechanisms protect integrity by controlling access through access modifiers and validation in methods, ensuring state changes occur only through controlled pathways that validate inputs and maintain invariants, preventing invalid states from being created",
//       B: "Data integrity can only be maintained through immutable objects that never change state",
//       C: "Encapsulation has no relationship to data integrity, which is handled by external validation",
//       D: "Data integrity requires all fields to be public for maximum transparency and validation"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Data integrity (tính toàn vẹn dữ liệu) ensure objects remain trong valid states. Encapsulation mechanisms protect integrity bằng cách control access thông qua access modifiers và validation trong methods. State changes chỉ occur through controlled pathways validate inputs và maintain invariants (bất biến), prevent invalid states được tạo. Private fields không thể access trực tiếp, chỉ thông qua methods có validation. Setters có thể check preconditions, validate values, reject invalid inputs. Getters có thể return computed values hoặc validated data. Điều này ensure objects luôn ở valid states - không thể set age = -5, balance < 0, v.v. Invalid states không thể được tạo vì không có pathway để tạo chúng. Encapsulation không require immutability - mutable objects vẫn có thể maintain integrity thông qua controlled modifications. Public fields sẽ break integrity vì không có control."
//   },
//   // Question 349
//   {
//     question: "What is the theoretical foundation of the relationship between polymorphism and the design of pluggable, extensible architectures, and how does polymorphism enable systems where new components can be added without modifying existing code?",
//     options: {
//       A: "Polymorphism enables pluggable architectures by allowing code to depend on abstractions rather than concrete types, so new components implementing those abstractions can be plugged in without modifying existing code that depends on the abstraction, creating extensible systems where functionality can be added through new implementations rather than code changes",
//       B: "Polymorphism requires modifying existing code to add new components",
//       C: "Pluggable architectures can only be achieved through configuration, not through polymorphism",
//       D: "Polymorphism and extensibility are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable pluggable architectures (kiến trúc có thể cắm) bằng cách allow code depend vào abstractions thay vì concrete types. New components implement những abstractions đó có thể được plug in mà không cần modify existing code depend vào abstraction. Điều này create extensible systems - functionality có thể được add thông qua new implementations thay vì code changes. Process: define abstraction (interface/base class) → existing code depend vào abstraction → new components implement abstraction → plug in without modification. Ví dụ: Plugin architecture - define Plugin interface, existing system depend vào Plugin, new plugins implement interface và plug in. Đây là foundation của Open-Closed Principle và many design patterns (Strategy, Factory, Plugin, v.v.). Systems có thể evolve và extend mà không break existing functionality, tạo maintainable và flexible architectures."
//   },
//   // Question 350
//   {
//     question: "Explain the theoretical concept of inheritance as a mechanism for specialization and generalization in object-oriented design, and how does the inheritance hierarchy reflect both the generalization of common features in base classes and the specialization of unique features in derived classes?",
//     options: {
//       A: "Inheritance enables both generalization by extracting common features into base classes that represent shared characteristics, and specialization by allowing derived classes to add unique features and override behaviors, with the inheritance hierarchy reflecting this dual nature where base classes generalize and derived classes specialize",
//       B: "Inheritance only supports generalization, with specialization being impossible",
//       C: "Inheritance only supports specialization, with generalization being handled separately",
//       D: "Generalization and specialization are conflicting goals that cannot be achieved through inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable cả generalization (tổng quát hóa) và specialization (chuyên biệt hóa). Generalization: extract common features vào base classes represent shared characteristics - những gì common across multiple classes được move lên base class. Specialization: derived classes add unique features và override behaviors - những gì specific cho mỗi class được implement trong derived class. Inheritance hierarchy reflect dual nature này: base classes generalize (chứa common features), derived classes specialize (chứa unique features). Ví dụ: Animal base class generalize common features (breathe, eat), Dog và Cat specialize với unique features (bark, meow). Hierarchy tạo structure từ general đến specific, enable code reuse (generalization) và flexibility (specialization). Đây là core mechanism của inheritance - vừa reuse code, vừa allow customization."
//   },
//   // Question 351
//   {
//     question: "What is the theoretical relationship between encapsulation and the concept of interface stability in object-oriented design, and how does proper encapsulation contribute to creating stable interfaces that can evolve without breaking client code?",
//     options: {
//       A: "Encapsulation creates stable interfaces by hiding implementation details, allowing the internal implementation to change without affecting the public interface, so client code depending on the interface remains unaffected by implementation changes, enabling evolution and maintenance without breaking existing functionality",
//       B: "Encapsulation prevents interface evolution by locking implementations in place",
//       C: "Interface stability requires exposing all implementation details for maximum transparency",
//       D: "Encapsulation and interface stability are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo stable interfaces bằng cách ẩn implementation details. Internal implementation có thể change mà không affect public interface, nên client code depend vào interface remain unaffected bởi implementation changes. Điều này enable evolution và maintenance mà không break existing functionality. Stable interface là contract giữa class và clients - clients depend vào interface, không phải implementation. Khi implementation change (optimize, refactor, fix bugs), interface vẫn giữ nguyên, clients không cần change. Đây là foundation của backward compatibility và maintainable systems. Encapsulation không prevent evolution mà enable nó - implementation có thể evolve freely trong boundaries của interface. Public interface nên minimal và stable, implementation có thể change để improve performance, fix bugs, hoặc add features."
//   },
//   // Question 352
//   {
//     question: "In the theoretical framework of polymorphism, what is the concept of type substitutability and how does it ensure that objects of derived types can be used wherever objects of base types are expected, maintaining system correctness while enabling flexibility?",
//     options: {
//       A: "Type substitutability means derived types can replace base types in any context where the base type is expected, requiring that derived types maintain the behavioral contract of base types (Liskov Substitution Principle), ensuring system correctness while allowing specialized implementations that enhance or extend base behavior",
//       B: "Type substitutability allows any type to replace any other type without constraints",
//       C: "Derived types can never substitute base types, requiring explicit type conversion",
//       D: "Substitutability only applies to interfaces, not to class inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Type substitutability (khả năng thay thế kiểu) có nghĩa derived types có thể replace base types trong any context mà base type được expect. Điều này require derived types maintain behavioral contract của base types (Liskov Substitution Principle) - derived class phải có thể thay thế base class mà không thay đổi correctness của program. Điều này ensure system correctness trong khi allow specialized implementations enhance hoặc extend base behavior. Ví dụ: List<Animal> có thể chứa Dog và Cat objects vì chúng là Animal. Client code expect Animal có thể work với Dog hoặc Cat. Substitutability enable polymorphism - code depend vào base type có thể work với any derived type. Violation của substitutability (derived class break contract) sẽ cause bugs và unexpected behavior. Đây là core principle của inheritance design."
//   },
//   // Question 353
//   {
//     question: "What are the theoretical foundations of the relationship between abstraction and complexity management in software engineering, and how do different levels of abstraction help developers manage the cognitive load associated with understanding and working with complex systems?",
//     options: {
//       A: "Abstraction manages complexity by presenting simplified views that hide irrelevant details at each level, with different abstraction levels allowing developers to focus on relevant information for their current task, reducing cognitive load by enabling developers to work at appropriate levels of detail without being overwhelmed by the full system complexity",
//       B: "Abstraction increases complexity by adding layers that must be understood",
//       C: "Complexity management requires understanding all details at all levels simultaneously",
//       D: "Abstraction and complexity management are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) manage complexity bằng cách present simplified views ẩn irrelevant details ở mỗi level. Different abstraction levels allow developers focus vào relevant information cho current task, reduce cognitive load (tải nhận thức) bằng cách enable developers work ở appropriate levels of detail mà không bị overwhelmed bởi full system complexity. Developers không cần biết tất cả details - chỉ cần biết level relevant cho task. High-level abstraction cho architects (system design), mid-level cho developers (component design), low-level cho implementers (algorithm details). Mỗi level hide complexity của levels below, expose only what's needed. Điều này tạo manageable complexity - systems có thể complex nhưng vẫn comprehensible vì complexity được organize vào layers. Without abstraction, developers phải understand everything simultaneously, tạo overwhelming cognitive load."
//   },
//   // Question 354
//   {
//     question: "Explain the theoretical concept of method resolution in polymorphism, specifically how the Java Virtual Machine handles method calls when multiple inheritance levels and method overriding are involved, including the role of the virtual method table in efficient method dispatch.",
//     options: {
//       A: "Method resolution in polymorphism involves the JVM determining which method implementation to call based on the actual object type at runtime, traversing the inheritance hierarchy from the object's class upward to find the most specific override, with virtual method tables (vtables) providing efficient O(1) lookup by storing method pointers for each class, enabling fast method dispatch even in deep inheritance hierarchies",
//       B: "Method resolution always uses the reference type, making it identical to compile-time resolution",
//       C: "The JVM randomly selects methods when multiple overrides exist",
//       D: "Virtual method tables are not used in Java, with method resolution being purely sequential"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method resolution trong polymorphism involve JVM determine method implementation nào được gọi dựa trên actual object type tại runtime. JVM traverse inheritance hierarchy từ object's class lên trên để tìm most specific override - method từ class cụ thể nhất trong hierarchy. Virtual method tables (vtables) provide efficient O(1) lookup bằng cách store method pointers cho mỗi class - mỗi class có bảng chứa pointers đến method implementations. Khi call method, JVM lookup trong vtable của object's class, không cần traverse hierarchy mỗi lần. Điều này enable fast method dispatch ngay cả trong deep inheritance hierarchies. Vtable là optimization của JVM để minimize overhead của dynamic dispatch. Process: get object's class → lookup vtable → get method pointer → call method. Đây là mechanism cho phép runtime polymorphism hoạt động efficiently."
//   },
//   // Question 355
//   {
//     question: "What is the theoretical relationship between inheritance and the concept of code sharing in object-oriented programming, and what are the advantages and disadvantages of using inheritance as a mechanism for sharing code across related classes?",
//     options: {
//       A: "Inheritance enables code sharing by allowing derived classes to inherit methods and fields from base classes, providing advantages like reduced duplication and centralized maintenance, but creating disadvantages like tight coupling, fragile base class problems, and reduced flexibility, making inheritance suitable for code sharing only when a true 'is-a' relationship exists",
//       B: "Inheritance is always the best mechanism for code sharing with no disadvantages",
//       C: "Inheritance cannot be used for code sharing, only for type relationships",
//       D: "Code sharing through inheritance has no impact on system design or maintainability"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable code sharing bằng cách allow derived classes inherit methods và fields từ base classes. Advantages: reduced duplication (giảm trùng lặp) - common code chỉ viết một lần, centralized maintenance (bảo trì tập trung) - sửa một chỗ affect tất cả subclasses. Disadvantages: tight coupling (liên kết chặt) - subclass phụ thuộc chặt vào superclass, fragile base class problems - thay đổi ở base class có thể break subclasses, reduced flexibility - khó thay đổi behavior. Inheritance suitable cho code sharing chỉ khi có true 'is-a' relationship. Nếu chỉ để code reuse mà không có 'is-a' relationship, composition tốt hơn. 'Favor composition over inheritance' khi cần code reuse mà không có 'is-a' relationship. Trade-off: inheritance provide code reuse nhưng tạo dependencies, composition provide flexibility nhưng có thể có duplication."
//   },
//   // Question 356
//   {
//     question: "In the context of encapsulation, what is the theoretical concept of controlled access and how do accessor and mutator methods (getters and setters) provide controlled access points that can enforce business rules, maintain data integrity, and hide implementation details?",
//     options: {
//       A: "Controlled access restricts how external code can interact with object state, and accessor/mutator methods provide controlled access points that can validate inputs, enforce business rules, maintain data integrity through invariants, and hide implementation details like computed values or internal representations, creating a secure and maintainable interface",
//       B: "Getters and setters simply expose fields directly with no additional functionality",
//       C: "Controlled access prevents all external interaction, making objects completely isolated",
//       D: "Accessor and mutator methods are unnecessary and add complexity without benefits"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Controlled access (truy cập có kiểm soát) restrict cách external code có thể interact với object state. Accessor/mutator methods (getters/setters) provide controlled access points có thể: validate inputs (kiểm tra tính hợp lệ), enforce business rules (áp dụng quy tắc nghiệp vụ), maintain data integrity through invariants (duy trì tính toàn vẹn qua bất biến), và hide implementation details như computed values hoặc internal representations. Getters có thể return computed values thay vì stored values. Setters có thể validate và reject invalid values. Điều này tạo secure và maintainable interface - clients không thể tạo invalid states, và implementation có thể change mà không affect clients. Controlled access không prevent interaction mà control nó - chỉ allow valid, safe interactions. Đây là proper encapsulation - không chỉ hide data mà còn control access."
//   },
//   // Question 357
//   {
//     question: "What is the theoretical foundation of the relationship between polymorphism and the design of flexible, maintainable software systems, and how does polymorphism enable systems to adapt to new requirements through extension rather than modification?",
//     options: {
//       A: "Polymorphism enables flexible systems by allowing code to depend on abstractions, so new requirements can be accommodated by creating new implementations of existing abstractions rather than modifying existing code, enabling extension-based adaptation that maintains system stability while providing flexibility for new functionality",
//       B: "Polymorphism requires modifying existing code to add new functionality",
//       C: "Flexible systems cannot be achieved through polymorphism, requiring complete rewrites for new requirements",
//       D: "Polymorphism and system flexibility are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable flexible systems bằng cách allow code depend vào abstractions. New requirements có thể được accommodate bằng cách create new implementations của existing abstractions thay vì modify existing code. Điều này enable extension-based adaptation (thích ứng dựa trên mở rộng) maintain system stability trong khi provide flexibility cho new functionality. Process: define abstraction → existing code depend vào abstraction → new requirements → create new implementation → plug in without modification. Đây là Open-Closed Principle - open for extension, closed for modification. Systems có thể adapt và evolve mà không break existing functionality. Polymorphism không require modification mà enable extension - add new types, không change existing types. Đây là foundation của maintainable software - systems có thể grow và change mà không degrade."
//   },
//   // Question 358
//   {
//     question: "Explain the theoretical concept of abstraction as a tool for managing system complexity, and how do appropriate abstraction levels create boundaries that allow different parts of a system to be developed, understood, and maintained independently?",
//     options: {
//       A: "Abstraction manages complexity by creating boundaries that hide implementation details, with appropriate abstraction levels allowing different system parts to be developed independently by different teams, understood in isolation without knowing all system details, and maintained separately with changes in one part not requiring changes in others, enabled by stable interfaces that hide implementation complexity",
//       B: "Abstraction increases complexity by requiring understanding of all abstraction layers",
//       C: "System parts cannot be developed independently regardless of abstraction levels",
//       D: "Abstraction boundaries prevent independent development and maintenance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) manage complexity bằng cách tạo boundaries ẩn implementation details. Appropriate abstraction levels allow different system parts được develop independently bởi different teams - teams chỉ cần biết interfaces, không cần biết implementations của other teams. Parts có thể được understand in isolation mà không cần biết all system details - chỉ cần biết interface và behavior của component. Parts có thể được maintain separately - changes trong một part không require changes trong others nếu interfaces stable. Điều này enabled bởi stable interfaces ẩn implementation complexity. Boundaries tạo separation of concerns - mỗi component có responsibility riêng, communicate qua well-defined interfaces. Đây là foundation của modular architecture - systems được chia thành independent, interchangeable modules. Without abstraction, all parts tightly coupled, không thể develop/maintain independently."
//   },
//   // Question 359
//   {
//     question: "What is the theoretical relationship between inheritance hierarchies and the organization of knowledge in object-oriented systems, and how do inheritance structures help developers understand relationships between classes and locate relevant code in large codebases?",
//     options: {
//       A: "Inheritance hierarchies organize knowledge by creating explicit relationships that reflect specialization and generalization, with the hierarchical structure helping developers understand how classes relate to each other, predict where functionality might be located, and navigate large codebases by following the inheritance structure from general base classes to specific derived classes",
//       B: "Inheritance hierarchies make code organization more difficult by creating complex dependencies",
//       C: "Knowledge organization is unrelated to inheritance structure",
//       D: "Inheritance hierarchies prevent developers from understanding class relationships"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance hierarchies (hệ thống kế thừa) organize knowledge bằng cách tạo explicit relationships reflect specialization và generalization. Hierarchical structure help developers understand cách classes relate với nhau - classes trong cùng hierarchy share characteristics, derived classes specialize base classes. Developers có thể predict where functionality might be located - common features trong base classes, specific features trong derived classes. Navigation trong large codebases dễ hơn - follow inheritance structure từ general base classes đến specific derived classes. Structure tạo mental model - từ abstract đến concrete, từ general đến specific. Điều này help developers locate relevant code, understand design decisions, và maintain consistency. Trong large codebases, inheritance hierarchy là roadmap - biết base class, biết derived classes có gì. Tuy nhiên, hierarchy quá sâu có thể làm khó navigate, cần balance."
//   },
//   // Question 360
//   {
//     question: "In the theoretical framework of encapsulation, what is the concept of information hiding and how does it differ from simply making fields private, particularly in terms of hiding implementation strategies, data representations, and internal algorithms from client code?",
//     options: {
//       A: "Information hiding goes beyond private fields to hide implementation strategies (how data is stored or computed), data representations (internal structures), and algorithms (computation methods), allowing these to change without affecting client code, while private fields only restrict access but don't necessarily hide implementation details if exposed through getters that reveal the internal structure",
//       B: "Information hiding is identical to making fields private with no additional meaning",
//       C: "Information hiding only applies to algorithms, not to data or implementation strategies",
//       D: "Private fields provide complete information hiding with no need for additional mechanisms"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Information hiding (ẩn thông tin) goes beyond private fields để ẩn: implementation strategies (cách data được store hoặc compute), data representations (internal structures), và algorithms (computation methods). Những thứ này có thể change mà không affect client code. Private fields chỉ restrict access nhưng không necessarily hide implementation details nếu exposed through getters reveal internal structure. Ví dụ: nếu getter return internal array directly, client biết representation. Proper information hiding: getter return copy hoặc different representation, hide cách data được store. Implementation strategies có thể change (array → linked list) mà client không biết. Algorithms có thể optimize mà client không biết. Điều này tạo flexibility - implementation có thể evolve mà không break clients. Information hiding là về hiding 'how', không chỉ restrict access. Đây là true encapsulation - hide implementation, expose interface."
//   },
//   // Question 361
//   {
//     question: "What is the theoretical foundation of the relationship between polymorphism and the design of testable software systems, and how does polymorphism enable the creation of testable code through dependency injection and mock object patterns?",
//     options: {
//       A: "Polymorphism enables testability by allowing code to depend on abstractions that can be replaced with test doubles (mocks, stubs) during testing, with dependency injection providing a mechanism to inject these test implementations, enabling isolated unit testing without dependencies on concrete implementations or external resources",
//       B: "Polymorphism prevents testability by creating dependencies that cannot be mocked",
//       C: "Testability can only be achieved through direct dependencies on concrete classes",
//       D: "Polymorphism and testability are unrelated concepts in software design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable testability (khả năng kiểm thử) bằng cách allow code depend vào abstractions có thể được replace với test doubles (mocks, stubs) trong testing. Dependency injection (tiêm phụ thuộc) provide mechanism để inject test implementations này. Điều này enable isolated unit testing mà không depend vào concrete implementations hoặc external resources. Code depend vào interface, trong test có thể inject mock implementation, test behavior mà không cần real dependencies. Ví dụ: service depend vào Repository interface, trong test inject MockRepository. Điều này tạo testable code - dễ test, fast tests, isolated tests. Polymorphism không prevent testability mà enable nó - abstractions có thể được mock. Đây là foundation của test-driven development và maintainable code. Code không testable thường có tight coupling với concrete classes."
//   },
//   // Question 362
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of the inheritance contract and how do the rules governing method overriding, access modifiers, and exceptions create a contract that ensures derived classes can properly substitute base classes while maintaining system correctness?",
//     options: {
//       A: "The inheritance contract requires derived classes to maintain behavioral compatibility with base classes, enforced through rules: identical method signatures for overriding, covariant return types allowed, equal or broader access modifiers, and equal or narrower exceptions, creating a contract that ensures substitutability and maintains system correctness while allowing specialization",
//       B: "Inheritance contracts allow complete freedom to change any aspect of inherited methods",
//       C: "Inheritance contracts only apply to method names, with all other aspects being unconstrained",
//       D: "Inheritance contracts prevent any form of specialization or customization"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance contract (hợp đồng kế thừa) require derived classes maintain behavioral compatibility với base classes. Rules enforce contract: identical method signatures cho overriding (tên, parameters phải giống), covariant return types allowed (derived có thể return subtype), equal or broader access modifiers (derived không thể restrictive hơn), và equal or narrower exceptions (derived không thể throw broader checked exceptions). Contract này ensure substitutability (Liskov Substitution) và maintain system correctness trong khi allow specialization. Derived classes có thể enhance behavior nhưng không thể break expectations của client code. Violation của contract sẽ break substitutability và cause bugs. Contract balance giữa flexibility (cho phép customization) và safety (đảm bảo correctness). Đây là foundation của inheritance design - derived classes phải honor contract của base classes."
//   },
//   // Question 363
//   {
//     question: "What is the theoretical relationship between abstraction and the concept of separation of concerns in software architecture, and how do abstraction mechanisms help separate different concerns into distinct, independently manageable components?",
//     options: {
//       A: "Abstraction enables separation of concerns by creating boundaries between different system concerns, with each abstraction representing a specific concern and hiding irrelevant details, allowing concerns to be developed, maintained, and evolved independently while interacting through well-defined interfaces",
//       B: "Abstraction prevents separation of concerns by mixing all concerns together",
//       C: "Separation of concerns can only be achieved through physical separation, not through abstraction",
//       D: "Abstraction and separation of concerns are conflicting principles"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) enable separation of concerns (tách biệt mối quan tâm) bằng cách tạo boundaries giữa different system concerns. Mỗi abstraction represent specific concern và ẩn irrelevant details. Concerns có thể được develop, maintain, và evolve independently trong khi interact through well-defined interfaces. Ví dụ: DataAccess abstraction separate data persistence concern, BusinessLogic abstraction separate business rules concern. Mỗi concern có interface riêng, implementation riêng, có thể change độc lập. Boundaries tạo clear separation - changes trong một concern không affect others nếu interfaces stable. Điều này tạo modular architecture - mỗi module handle một concern, communicate qua interfaces. Without abstraction, concerns mixed together, không thể separate. Abstraction không prevent separation mà enable nó - tạo boundaries và interfaces cho separation."
//   },
//   // Question 364
//   {
//     question: "Explain the theoretical concept of encapsulation as a mechanism for creating self-contained, cohesive units in object-oriented design, and how does proper encapsulation contribute to the cohesion of a class by keeping related data and operations together?",
//     options: {
//       A: "Encapsulation creates self-contained units by bundling related data and operations into classes, with proper encapsulation keeping all data and methods related to a single responsibility together, contributing to high cohesion where all class members work together toward a common purpose, making classes easier to understand and maintain",
//       B: "Encapsulation prevents cohesion by separating data and operations",
//       C: "Cohesion can only be achieved without encapsulation",
//       D: "Encapsulation and cohesion are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo self-contained units bằng cách bundle related data và operations vào classes. Proper encapsulation keep all data và methods related đến single responsibility together, contribute đến high cohesion (tính gắn kết cao) - tất cả class members work together toward common purpose. Classes với high cohesion dễ understand và maintain hơn - tất cả related functionality ở một chỗ, clear purpose. Ví dụ: BankAccount class encapsulate account data (balance, accountNumber) và operations (deposit, withdraw, getBalance) - tất cả related đến bank account responsibility. Low cohesion: class có unrelated responsibilities mixed together. Encapsulation không prevent cohesion mà enable nó - bundle related things together. Cohesion measure how well class members belong together - high cohesion tốt, low cohesion xấu. Encapsulation help achieve high cohesion bằng cách keep related things together."
//   },
//   // Question 365
//   {
//     question: "What is the theoretical foundation of the relationship between polymorphism and the design of extensible frameworks and libraries, and how does polymorphism enable framework code to work with user-defined types that didn't exist when the framework was created?",
//     options: {
//       A: "Polymorphism enables extensible frameworks by designing framework code to depend on abstractions (interfaces or abstract classes) that users can implement, allowing user-defined types implementing these abstractions to work with existing framework code through polymorphism, enabling frameworks to be extended with new types without modifying framework code",
//       B: "Frameworks cannot work with user-defined types and require all types to be defined within the framework",
//       C: "Polymorphism prevents framework extensibility by locking in specific implementations",
//       D: "Extensible frameworks can only be created without using polymorphism"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable extensible frameworks bằng cách design framework code depend vào abstractions (interfaces hoặc abstract classes) mà users có thể implement. User-defined types implement những abstractions này có thể work với existing framework code thông qua polymorphism. Điều này enable frameworks được extend với new types mà không cần modify framework code. Process: framework define abstraction → framework code depend vào abstraction → users implement abstraction → users' types work với framework. Ví dụ: Collection framework define Collection interface, framework methods work với Collection, users implement List, Set, etc. Framework không cần biết specific implementations, chỉ cần biết interface. Đây là foundation của plugin architectures và extensible systems. Frameworks có thể support types chưa tồn tại khi framework được tạo - users define types, framework work với chúng. Đây là power của polymorphism - enable extension without modification."
//   },
//   // Question 366
//   {
//     question: "In the theoretical framework of object-oriented programming, what is the concept of object identity versus object equality, and how do these concepts relate to the fundamental nature of objects as distinct entities with their own state and lifecycle?",
//     options: {
//       A: "Object identity refers to whether two references point to the same object instance in memory, while object equality refers to whether two objects are considered equivalent based on their state or business logic, with identity being a fundamental property of objects as distinct entities, while equality is a semantic concept that can be defined differently for different types",
//       B: "Object identity and object equality are identical concepts with no distinction",
//       C: "Objects cannot have identity, only primitive types can",
//       D: "Object equality is determined solely by memory location with no semantic meaning"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Object identity (danh tính đối tượng) refer đến việc hai references có point đến same object instance trong memory không (== operator). Object equality (sự bằng nhau đối tượng) refer đến việc hai objects có được consider equivalent dựa trên state hoặc business logic không (equals() method). Identity là fundamental property của objects như distinct entities - mỗi object có identity riêng, unique trong memory. Equality là semantic concept có thể được define differently cho different types - có thể dựa trên tất cả fields, một số fields, hoặc business logic. Hai objects có thể equal nhưng không identical (different instances, same state). Identity là về 'same object', equality là về 'equivalent objects'. Understanding distinction này important cho object-oriented design - khi nào dùng ==, khi nào dùng equals(). Identity không thể change, equality có thể được define theo business requirements."
//   },
//   // Question 367
//   {
//     question: "What are the theoretical mechanisms by which encapsulation protects against unauthorized access and maintains data integrity, and how do access modifiers create a security model that prevents external code from directly manipulating object state?",
//     options: {
//       A: "Encapsulation protects against unauthorized access by using access modifiers to restrict direct field access, forcing all state changes through controlled methods that can validate inputs and enforce business rules, creating a security model where private fields cannot be accessed externally, protected fields allow inheritance access, and public methods form controlled interfaces that maintain data integrity",
//       B: "Encapsulation provides no security benefits and is purely organizational",
//       C: "All fields should be public for maximum accessibility and security",
//       D: "Access modifiers have no impact on data integrity or security"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) protect against unauthorized access bằng cách dùng access modifiers restrict direct field access. Tất cả state changes phải through controlled methods có thể validate inputs và enforce business rules. Security model: private fields không thể access externally (chỉ trong class), protected fields allow inheritance access (trong package và subclass), public methods form controlled interfaces maintain data integrity. External code không thể directly manipulate object state - phải through methods có validation. Setters có thể reject invalid values, enforce constraints, maintain invariants. Điều này prevent unauthorized modifications và maintain data integrity. Security model này prevent: invalid state creation, unauthorized access, và unintended modifications. Public fields sẽ break security model - external code có thể set invalid values. Encapsulation tạo defense-in-depth - multiple layers of protection."
//   },
//   // Question 368
//   {
//     question: "Explain the theoretical concept of method overloading as a form of ad-hoc polymorphism, and how does the compiler's method resolution algorithm determine which overloaded method to call based on argument types, type promotion, and ambiguity resolution?",
//     options: {
//       A: "Method overloading is ad-hoc polymorphism where methods with the same name but different signatures are resolved at compile-time, with the compiler using an algorithm that first seeks exact type matches, then applies type promotion rules (byte→short→int→long→float→double), considers varargs as last resort, and reports compilation errors when ambiguity cannot be resolved, all determined statically based on reference types",
//       B: "Method overloading is resolved at runtime based on actual argument values",
//       C: "The compiler randomly selects overloaded methods when multiple matches exist",
//       D: "Method overloading only works with primitive types, not with object types"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Method overloading (nạp chồng method) là ad-hoc polymorphism - methods cùng tên nhưng khác signatures được resolve tại compile-time. Compiler dùng algorithm: đầu tiên seek exact type matches (khớp chính xác), nếu không có thì apply type promotion rules (byte→short→int→long→float→double, char→int), consider varargs như last resort, và report compilation errors khi ambiguity không thể resolve. Tất cả được determine statically dựa trên reference types (không phải runtime values). Overloading khác overriding: overloading là compile-time (dựa trên signature), overriding là runtime (dựa trên object type). Overloading có thể dùng với cả primitive và object types, nhưng với object types, exact match được ưu tiên hơn inheritance hierarchy. Ambiguity xảy ra khi có nhiều matches có thể sau promotion - compiler không thể quyết định, báo lỗi."
//   },
//   // Question 369
//   {
//     question: "What is the theoretical relationship between inheritance and the concept of code evolution and maintenance in long-lived software systems, and how do inheritance hierarchies impact the ability to evolve code over time while maintaining backward compatibility?",
//     options: {
//       A: "Inheritance impacts code evolution by creating dependencies where changes to base classes affect derived classes, making evolution challenging as base class changes can break derived classes (fragile base class problem), requiring careful design of base class interfaces to remain stable while allowing implementation evolution, with inheritance hierarchies creating maintenance challenges but also enabling systematic updates through base class modifications",
//       B: "Inheritance makes code evolution easier by allowing unlimited changes without any impact",
//       C: "Code evolution is unrelated to inheritance structure",
//       D: "Inheritance prevents all code evolution, requiring complete rewrites for any changes"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) impact code evolution bằng cách tạo dependencies - changes trong base classes affect derived classes. Evolution challenging vì base class changes có thể break derived classes (fragile base class problem). Cần careful design của base class interfaces để remain stable trong khi allow implementation evolution. Inheritance hierarchies tạo maintenance challenges nhưng cũng enable systematic updates through base class modifications - sửa một chỗ có thể fix nhiều subclasses. Trade-off: inheritance enable code reuse và systematic updates nhưng tạo tight coupling và fragile dependencies. Để maintain backward compatibility, base class interfaces phải stable - chỉ add methods, không remove hoặc change signatures. Implementation có thể evolve nhưng interface phải stable. Deep hierarchies tăng risk - changes propagate nhiều levels. Shallow hierarchies giảm risk nhưng có thể có duplication."
//   },
//   // Question 370
//   {
//     question: "In the context of abstraction, what is the theoretical concept of interface design and how do well-designed interfaces balance between being comprehensive enough to support all necessary operations while remaining simple enough to be easily understood and implemented?",
//     options: {
//       A: "Interface design involves creating abstractions that capture essential operations needed by clients while hiding implementation complexity, with well-designed interfaces being comprehensive enough to support all necessary use cases but simple enough to understand and implement, balancing completeness with simplicity through careful selection of methods and clear, minimal method signatures",
//       B: "Interfaces should include all possible operations regardless of complexity or necessity",
//       C: "Interfaces should be minimal with only one method to maximize simplicity",
//       D: "Interface design has no impact on system usability or maintainability"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Interface design (thiết kế giao diện) involve tạo abstractions capture essential operations needed bởi clients trong khi ẩn implementation complexity. Well-designed interfaces comprehensive enough để support all necessary use cases nhưng simple enough để understand và implement. Balance completeness với simplicity through careful selection của methods và clear, minimal method signatures. Interface không nên quá large (khó understand và implement) hoặc quá small (không đủ functionality). Methods nên be cohesive - related operations together. Signatures nên be clear và minimal - chỉ parameters cần thiết. Interface nên hide complexity - clients chỉ cần biết 'what', không cần biết 'how'. Design decisions: include gì (essential operations), exclude gì (implementation details), organize như thế nào (logical grouping). Good interface design tạo usable, maintainable systems. Bad design tạo confusion và difficulty."
//   },
//   // Question 371
//   {
//     question: "What is the theoretical foundation of the relationship between encapsulation and the principle of least exposure in object-oriented design, and how does minimizing the exposed surface area of a class contribute to reducing coupling and increasing maintainability?",
//     options: {
//       A: "Encapsulation implements the principle of least exposure by minimizing the public interface exposed by a class, with a smaller exposed surface area reducing the number of dependencies other classes can form on the class, decreasing coupling and making the class easier to maintain and evolve since fewer external dependencies need to be considered when making changes",
//       B: "Encapsulation requires exposing all class members publicly for maximum flexibility",
//       C: "The principle of least exposure conflicts with encapsulation by requiring public access",
//       D: "Exposed surface area has no relationship to coupling or maintainability"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) implement principle of least exposure (nguyên tắc phơi bày tối thiểu) bằng cách minimize public interface exposed bởi class. Smaller exposed surface area (diện tích phơi bày nhỏ hơn) reduce số dependencies mà other classes có thể form trên class, decrease coupling và make class dễ maintain và evolve hơn vì fewer external dependencies cần được consider khi make changes. Public interface nên minimal - chỉ expose những gì thực sự cần thiết. Mỗi public method tạo potential dependency - classes khác có thể depend vào nó. Nhiều public methods = nhiều dependencies = high coupling = khó maintain. Principle of least exposure: expose ít nhất có thể, chỉ expose khi cần thiết. Điều này tạo loose coupling và maintainable code. Encapsulation không require expose tất cả mà minimize exposure."
//   },
//   // Question 372
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of the inheritance hierarchy as a taxonomy, and how does this taxonomic structure help organize knowledge about domain concepts and their relationships in object-oriented domain modeling?",
//     options: {
//       A: "Inheritance hierarchies function as taxonomies that organize domain concepts into hierarchical classifications, with the hierarchy structure reflecting specialization relationships and shared characteristics, helping organize knowledge about domain concepts by showing how general concepts specialize into specific ones, enabling systematic domain modeling that captures both commonalities and variations",
//       B: "Inheritance hierarchies are unrelated to domain modeling or knowledge organization",
//       C: "Taxonomic structures prevent effective domain modeling by creating rigid classifications",
//       D: "Inheritance hierarchies can only model technical concepts, not domain concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance hierarchies (hệ thống kế thừa) function như taxonomies (phân loại) organize domain concepts vào hierarchical classifications. Hierarchy structure reflect specialization relationships và shared characteristics. Help organize knowledge về domain concepts bằng cách show cách general concepts specialize vào specific ones. Enable systematic domain modeling capture cả commonalities (điểm chung) và variations (biến thể). Ví dụ: Animal taxonomy có Mammal, Bird, Fish - mỗi có characteristics riêng nhưng share Animal characteristics. Hierarchy tạo structure từ general đến specific, reflect real-world relationships. Domain modeling benefit: clear organization, easy navigation, systematic approach. Hierarchy giúp understand domain - từ abstract concepts đến concrete instances. Taxonomic structure không prevent modeling mà enable systematic modeling - organize concepts theo logical structure."
//   },
//   // Question 373
//   {
//     question: "What is the theoretical relationship between polymorphism and the design of flexible algorithms that can work with multiple types, and how does polymorphism enable the creation of generic algorithms that operate on abstractions rather than specific concrete types?",
//     options: {
//       A: "Polymorphism enables flexible algorithms by allowing algorithms to operate on abstractions (interfaces or base classes) rather than concrete types, so the same algorithm can work with any type implementing the abstraction, creating generic algorithms that are type-agnostic and can be extended to work with new types without modifying the algorithm code",
//       B: "Polymorphism requires algorithms to know all specific types they will work with",
//       C: "Generic algorithms cannot be created through polymorphism, requiring type-specific implementations",
//       D: "Polymorphism and algorithm design are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable flexible algorithms bằng cách allow algorithms operate trên abstractions (interfaces hoặc base classes) thay vì concrete types. Same algorithm có thể work với any type implement abstraction, tạo generic algorithms type-agnostic và có thể được extend để work với new types mà không cần modify algorithm code. Ví dụ: sort algorithm work với List interface, có thể sort ArrayList, LinkedList, etc. Algorithm depend vào List abstraction, không depend vào specific implementation. Khi add new List implementation, algorithm tự động work với nó. Generic algorithms operate trên abstractions - chỉ cần biết interface, không cần biết implementation. Điều này tạo flexible, reusable algorithms - một algorithm, nhiều types. Polymorphism không require know specific types mà work với abstractions. Đây là foundation của generic programming và reusable code."
//   },
//   // Question 374
//   {
//     question: "Explain the theoretical concept of encapsulation as a mechanism for creating black box abstractions, and how does the black box model enable clients to use objects effectively without needing to understand their internal implementation details?",
//     options: {
//       A: "Encapsulation creates black box abstractions where objects hide their internal implementation, exposing only a public interface, enabling clients to use objects effectively by interacting only with the interface without needing to understand implementation details, with the black box model allowing implementation to change without affecting clients as long as the interface remains stable",
//       B: "Black box abstractions require clients to understand all implementation details",
//       C: "Encapsulation prevents the black box model by exposing all internals",
//       D: "The black box model cannot be achieved through encapsulation"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo black box abstractions (trừu tượng hộp đen) - objects ẩn internal implementation, chỉ expose public interface. Enable clients use objects effectively bằng cách interact chỉ với interface mà không cần understand implementation details. Black box model allow implementation change mà không affect clients miễn là interface remain stable. Clients chỉ cần biết 'what' (interface), không cần biết 'how' (implementation). Ví dụ: Stack black box - clients biết push/pop, không cần biết implement bằng array hay linked list. Implementation có thể change (optimize, refactor) mà clients không biết và không bị affect. Black box model tạo separation of concerns - clients focus vào usage, implementers focus vào implementation. Encapsulation enable black box model bằng cách hide internals. Đây là foundation của abstraction - hide complexity, expose simplicity."
//   },
//   // Question 375
//   {
//     question: "What are the theoretical mechanisms by which inheritance enables code reuse while maintaining the ability to customize behavior, and how does the balance between inherited code and overridden methods create flexible class hierarchies?",
//     options: {
//       A: "Inheritance enables code reuse by allowing derived classes to inherit methods and fields from base classes, while method overriding allows customization of inherited behavior, creating a balance where common behavior is inherited and reused, while specific behavior is customized through overriding, resulting in flexible hierarchies that combine code reuse with behavioral customization",
//       B: "Inheritance prevents code reuse by requiring all methods to be overridden",
//       C: "Code reuse and customization are conflicting goals that cannot be achieved together",
//       D: "Inheritance only enables code reuse without any customization capabilities"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable code reuse bằng cách allow derived classes inherit methods và fields từ base classes. Method overriding allow customization của inherited behavior. Balance: common behavior được inherit và reuse, specific behavior được customize through overriding. Result: flexible hierarchies combine code reuse với behavioral customization. Ví dụ: Animal base class có common method breathe(), Dog override makeSound() với bark(). Common behavior (breathe) được reuse, specific behavior (makeSound) được customize. Hierarchy flexible - vừa reuse code, vừa allow customization. Overriding không prevent reuse mà enable customization của specific parts. Inheritance không require override tất cả - chỉ override khi cần customize. Balance tạo optimal design - reuse common code, customize specific behavior. Đây là power của inheritance - code reuse + flexibility."
//   },
//   // Question 376
//   {
//     question: "In the theoretical framework of abstraction, what is the concept of abstraction levels and how do different levels of abstraction (high-level, mid-level, low-level) create a layered architecture that manages complexity by presenting appropriate views of the system to different stakeholders?",
//     options: {
//       A: "Abstraction levels create layered architectures where high-level abstractions present simplified views for architects and designers focusing on system structure, mid-level abstractions provide component views for developers, and low-level abstractions show implementation details for implementers, with each level hiding complexity below while exposing relevant information, managing overall system complexity through appropriate information hiding at each layer",
//       B: "All abstraction levels should expose the same information for consistency",
//       C: "Abstraction levels increase complexity by adding unnecessary layers",
//       D: "Only one abstraction level can exist in a system"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction levels (mức trừu tượng) tạo layered architectures: high-level abstractions present simplified views cho architects và designers focus vào system structure, mid-level abstractions provide component views cho developers, low-level abstractions show implementation details cho implementers. Mỗi level ẩn complexity below trong khi expose relevant information. Manage overall system complexity through appropriate information hiding ở mỗi layer. High-level: system overview, components, interactions. Mid-level: component interfaces, responsibilities. Low-level: algorithms, data structures, implementation. Mỗi stakeholder work ở appropriate level - không cần biết tất cả details. Layers tạo separation - changes trong một layer không necessarily affect others nếu interfaces stable. Điều này manage complexity - system có thể complex nhưng vẫn comprehensible vì complexity được organize vào layers. Without layers, tất cả complexity visible cùng lúc, overwhelming."
//   },
//   // Question 377
//   {
//     question: "What is the theoretical foundation of the relationship between encapsulation and the concept of object autonomy, and how does proper encapsulation create self-contained objects that can manage their own state and behavior independently?",
//     options: {
//       A: "Encapsulation creates object autonomy by bundling data and operations together, allowing objects to manage their own state and behavior independently through controlled internal operations, with proper encapsulation ensuring objects are self-contained units that can maintain their integrity and make decisions about their state without external interference, creating autonomous entities in the system",
//       B: "Encapsulation prevents object autonomy by requiring external control of all operations",
//       C: "Object autonomy can only be achieved without encapsulation",
//       D: "Encapsulation and object autonomy are conflicting concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo object autonomy (tự chủ đối tượng) bằng cách bundle data và operations together. Objects có thể manage own state và behavior independently through controlled internal operations. Proper encapsulation ensure objects là self-contained units có thể maintain integrity và make decisions về state mà không có external interference. Tạo autonomous entities trong system - objects có thể operate independently, make decisions, maintain state. Ví dụ: BankAccount object tự manage balance, validate transactions, maintain invariants. External code không thể directly manipulate state - phải through object's methods. Object có control over own state và behavior. Autonomy không mean isolation - objects vẫn interact với others, nhưng through controlled interfaces. Encapsulation enable autonomy bằng cách give objects control. Đây là foundation của object-oriented thinking - objects như autonomous agents, không chỉ data containers."
//   },
//   // Question 378
//   {
//     question: "Explain the theoretical concept of polymorphism as enabling the design of systems that follow the Dependency Inversion Principle, where high-level modules depend on abstractions rather than low-level concrete implementations, and how does this architectural pattern improve system flexibility and testability?",
//     options: {
//       A: "Polymorphism enables Dependency Inversion by allowing high-level modules to depend on abstractions (interfaces or base classes) that low-level modules implement, with polymorphism allowing the high-level code to work with any implementation of the abstraction, creating flexible architectures where high-level policy is independent of low-level details, improving both flexibility through swappable implementations and testability through mockable dependencies",
//       B: "Polymorphism requires high-level modules to depend directly on low-level implementations",
//       C: "Dependency Inversion cannot be achieved through polymorphism",
//       D: "Polymorphism and architectural patterns are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable Dependency Inversion (đảo ngược phụ thuộc) bằng cách allow high-level modules depend vào abstractions (interfaces hoặc base classes) mà low-level modules implement. Polymorphism allow high-level code work với any implementation của abstraction. Tạo flexible architectures - high-level policy independent của low-level details. Improve flexibility through swappable implementations - có thể swap implementations mà không affect high-level. Improve testability through mockable dependencies - có thể inject mocks trong tests. Ví dụ: Service depend vào Repository interface, Repository implementations (Database, File, Memory) implement interface. Service không depend vào specific implementation, có thể work với any. High-level (business logic) independent của low-level (data access). Architecture flexible và testable. Polymorphism enable pattern này - code depend vào abstraction, polymorphism allow work với implementations."
//   },
//   // Question 379
//   {
//     question: "What is the theoretical relationship between inheritance and the concept of incremental development in object-oriented systems, and how does inheritance enable developers to build systems incrementally by extending existing classes rather than creating everything from scratch?",
//     options: {
//       A: "Inheritance enables incremental development by allowing new functionality to be added through derived classes that extend existing base classes, building upon established functionality rather than recreating it, enabling developers to incrementally add features and specializations to a system by extending the inheritance hierarchy, creating an evolutionary development approach where systems grow through extension",
//       B: "Inheritance prevents incremental development by requiring complete system design upfront",
//       C: "Incremental development can only be achieved without using inheritance",
//       D: "Inheritance and incremental development are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable incremental development (phát triển tăng dần) bằng cách allow new functionality được add through derived classes extend existing base classes. Build upon established functionality thay vì recreate it. Enable developers incrementally add features và specializations vào system bằng cách extend inheritance hierarchy. Tạo evolutionary development approach - systems grow through extension. Ví dụ: có Animal base class, add Dog, Cat, Bird incrementally. Mỗi extension build trên existing functionality, không cần recreate. Development incremental - start với base, add specializations. Systems evolve - từ simple đến complex, từ general đến specific. Inheritance không require complete design upfront - có thể start simple, extend later. Extension-based approach - add new types, không modify existing. Đây là foundation của extensible systems - grow through inheritance, không through modification."
//   },
//   // Question 380
//   {
//     question: "In the theoretical framework of encapsulation, what is the concept of controlled mutability and how do encapsulation mechanisms allow objects to control when and how their state can be changed, enabling both mutable and immutable object designs?",
//     options: {
//       A: "Controlled mutability means objects control state changes through encapsulation mechanisms, with mutable objects allowing controlled changes through methods that validate and enforce invariants, while immutable objects prevent all state changes by not providing mutator methods, with encapsulation enabling both designs by controlling access to state modification pathways",
//       B: "Encapsulation only supports mutable objects, with immutability being impossible",
//       C: "Controlled mutability requires all fields to be public for maximum flexibility",
//       D: "Encapsulation prevents any form of mutability control"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Controlled mutability (khả năng thay đổi có kiểm soát) có nghĩa objects control state changes through encapsulation mechanisms. Mutable objects allow controlled changes through methods validate và enforce invariants - setters có validation, chỉ allow valid changes. Immutable objects prevent all state changes bằng cách không provide mutator methods - không có setters, chỉ có getters, state set trong constructor và không change. Encapsulation enable cả hai designs bằng cách control access đến state modification pathways. Mutable: private fields + controlled setters. Immutable: private final fields + no setters. Encapsulation không force một design - có thể choose mutable hoặc immutable based on requirements. Controlled mutability give objects control - decide khi nào và như thế nào state có thể change. Điều này enable safe state management - prevent invalid changes, maintain integrity. Design choice: mutable cho flexible objects, immutable cho safe, thread-safe objects."
//   },
//   // Question 381
//   {
//     question: "What is the theoretical foundation of the relationship between abstraction and the concept of conceptual modeling in object-oriented analysis and design, and how do abstractions help capture and represent essential domain concepts while ignoring irrelevant implementation details?",
//     options: {
//       A: "Abstraction enables conceptual modeling by identifying and representing essential domain concepts at appropriate levels of detail, with abstractions capturing the essential characteristics and behaviors of domain entities while ignoring implementation specifics, allowing designers to model the problem domain conceptually before considering implementation details, creating a clear separation between domain understanding and technical realization",
//       B: "Abstraction prevents conceptual modeling by focusing only on implementation details",
//       C: "Conceptual modeling can only be achieved without using abstraction",
//       D: "Abstraction and conceptual modeling are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) enable conceptual modeling (mô hình khái niệm) bằng cách identify và represent essential domain concepts ở appropriate levels of detail. Abstractions capture essential characteristics và behaviors của domain entities trong khi ignore implementation specifics. Allow designers model problem domain conceptually trước khi consider implementation details. Tạo clear separation giữa domain understanding và technical realization. Conceptual model focus vào 'what' và 'why', không phải 'how'. Abstractions represent domain concepts - Customer, Order, Product - với essential features, không có implementation details. Model domain trước, implement sau. Separation này important - domain model stable, implementation có thể change. Abstraction không prevent modeling mà enable modeling - tạo conceptual representation của domain. Đây là foundation của object-oriented analysis - understand domain, model concepts, implement later."
//   },
//   // Question 382
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of the inheritance chain and method lookup, and how does the depth and structure of the inheritance chain impact the performance, maintainability, and comprehensibility of object-oriented systems?",
//     options: {
//       A: "The inheritance chain represents the path from a class to its root ancestor, with method lookup traversing this chain to find implementations, where deeper chains increase lookup complexity and make code harder to understand and maintain, though modern JVMs optimize through virtual method tables, with optimal design balancing chain depth against maintainability and performance concerns",
//       B: "Inheritance chain depth has no impact on system design or performance",
//       C: "Deeper inheritance chains always improve performance and maintainability",
//       D: "Method lookup does not traverse the inheritance chain, always using immediate class methods"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance chain (chuỗi kế thừa) represent path từ một class đến root ancestor (Object trong Java). Method lookup traverse chain này để tìm implementations - bắt đầu từ class hiện tại, nếu không tìm thấy thì lên parent, tiếp tục đến root. Deeper chains increase lookup complexity và make code khó understand và maintain hơn - phải trace qua nhiều levels, understand nhiều classes. Modern JVMs optimize through virtual method tables (vtables) - O(1) lookup thay vì traverse. Optimal design balance chain depth với maintainability và performance concerns. Shallow chains (2-3 levels) thường tốt hơn - dễ understand, maintain, và debug. Deep chains (>4-5 levels) tăng complexity và fragile base class risk. Balance: đủ depth để reuse code, không quá deep để maintain. Chain structure cũng important - linear chains tốt hơn complex hierarchies. Design decision: minimize depth, maximize clarity."
//   },
//   // Question 383
//   {
//     question: "What is the theoretical relationship between polymorphism and the design of event-driven and callback-based systems, and how does polymorphism enable flexible event handling where different objects can respond to the same events in different ways?",
//     options: {
//       A: "Polymorphism enables event-driven systems by allowing event handlers to be defined as methods in different classes implementing a common interface, with polymorphism allowing the event system to invoke handlers on any object implementing the interface, enabling different objects to respond to the same events differently based on their specific implementations, creating flexible event handling architectures",
//       B: "Polymorphism prevents event-driven design by requiring all handlers to behave identically",
//       C: "Event-driven systems cannot use polymorphism and require type-specific handlers",
//       D: "Polymorphism and event-driven design are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable event-driven systems bằng cách allow event handlers được define như methods trong different classes implement common interface. Polymorphism allow event system invoke handlers trên any object implement interface. Enable different objects respond đến same events differently based trên specific implementations. Tạo flexible event handling architectures. Ví dụ: EventListener interface có onEvent() method, Button và Menu implement interface, mỗi respond differently. Event system chỉ cần biết EventListener interface, không cần biết specific types. Polymorphism enable này - same event, different responses. Callback-based systems cũng benefit - callbacks có thể là methods của different classes implement interface. Flexibility: add new event handlers bằng cách implement interface, không cần modify event system. Đây là foundation của observer pattern và event-driven architectures. Polymorphism không prevent flexibility mà enable nó - allow different behaviors through common interface."
//   },
//   // Question 384
//   {
//     question: "Explain the theoretical concept of encapsulation as a mechanism for creating contracts between objects, and how do encapsulated interfaces define the terms of interaction between objects, establishing clear boundaries and responsibilities in object-oriented systems?",
//     options: {
//       A: "Encapsulation creates contracts through public interfaces that define how objects interact, with the encapsulated interface establishing the terms of interaction by specifying what operations are available, what parameters are required, and what can be expected in return, creating clear boundaries that define object responsibilities and enable objects to interact predictably while maintaining independence",
//       B: "Encapsulation prevents contracts by hiding all interaction mechanisms",
//       C: "Contracts can only be established without using encapsulation",
//       D: "Encapsulation and object contracts are conflicting concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) tạo contracts (hợp đồng) through public interfaces định nghĩa cách objects interact. Encapsulated interface establish terms of interaction bằng cách specify: what operations available, what parameters required, và what can be expected in return. Tạo clear boundaries định nghĩa object responsibilities và enable objects interact predictably trong khi maintain independence. Contract là agreement giữa objects - object A expect object B behave theo contract. Interface define contract - methods, parameters, return types, exceptions. Objects interact through contracts, không through direct access. Boundaries clear - inside (implementation), outside (interface). Responsibilities defined - mỗi object có contract riêng. Predictable interaction - objects biết expect gì từ others. Independence maintained - objects có thể change implementation mà không break contracts. Encapsulation không prevent contracts mà create chúng - interface là contract. Đây là foundation của component-based design - components interact through contracts."
//   },
//   // Question 385
//   {
//     question: "What is the theoretical foundation of the relationship between inheritance and code organization in large-scale software projects, and how do inheritance hierarchies help structure and organize classes in ways that make large codebases more navigable and understandable?",
//     options: {
//       A: "Inheritance helps organize code by creating hierarchical structures that group related classes, with inheritance hierarchies providing a navigation structure that reflects specialization relationships, making large codebases more navigable by allowing developers to understand class relationships, locate functionality by following the hierarchy, and organize classes systematically based on their inheritance relationships",
//       B: "Inheritance makes code organization more difficult by creating complex dependencies",
//       C: "Code organization is unrelated to inheritance structure",
//       D: "Inheritance prevents effective code organization in large projects"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) help organize code bằng cách tạo hierarchical structures nhóm related classes. Inheritance hierarchies provide navigation structure reflect specialization relationships. Make large codebases navigable hơn bằng cách allow developers understand class relationships, locate functionality bằng cách follow hierarchy, và organize classes systematically based trên inheritance relationships. Hierarchy tạo structure - từ general đến specific, từ base đến derived. Navigation: biết base class, biết derived classes có gì. Organization: related classes trong cùng hierarchy, share characteristics. Large codebases benefit - structure rõ ràng, easy to navigate, understand relationships. Developers có thể predict locations - common features trong base, specific features trong derived. Systematic organization - classes organized theo inheritance, không random. Điều này tạo maintainable codebases - dễ find, understand, modify. Inheritance không prevent organization mà enable systematic organization."
//   },
//   // Question 386
//   {
//     question: "In the theoretical framework of polymorphism, what is the concept of behavioral polymorphism versus structural polymorphism, and how do these different forms of polymorphism contribute to flexible system design?",
//     options: {
//       A: "Behavioral polymorphism allows different objects to respond differently to the same method call based on their implementations, while structural polymorphism allows objects of different types to be used interchangeably based on shared structure (interfaces), with both forms enabling flexible design where code can work with multiple types through common interfaces or behaviors",
//       B: "Behavioral and structural polymorphism are identical concepts with no distinction",
//       C: "Only behavioral polymorphism exists, with structural polymorphism being impossible",
//       D: "Polymorphism cannot contribute to flexible system design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Behavioral polymorphism (đa hình hành vi) allow different objects respond differently đến same method call based trên implementations - same method call, different behaviors. Structural polymorphism (đa hình cấu trúc) allow objects của different types được dùng interchangeably based trên shared structure (interfaces) - different types, same interface. Cả hai forms enable flexible design - code có thể work với multiple types through common interfaces hoặc behaviors. Behavioral: method overriding, runtime polymorphism. Structural: interface implementation, type substitution. Both contribute to flexibility - behavioral cho phép customization, structural cho phép interchangeability. Flexible systems benefit từ cả hai - vừa có interchangeable types, vừa có customizable behaviors. Ví dụ: List interface (structural) có ArrayList, LinkedList (behavioral differences). Polymorphism không chỉ một form mà multiple forms contribute to flexibility."
//   },
//   // Question 387
//   {
//     question: "What are the theoretical mechanisms by which abstraction reduces the cognitive complexity of understanding software systems, and how do abstraction layers allow developers to work at appropriate levels of detail without being overwhelmed by system complexity?",
//     options: {
//       A: "Abstraction reduces cognitive complexity by hiding irrelevant details at each level, with abstraction layers allowing developers to focus on relevant information for their current task, working at appropriate levels of detail where high-level abstractions hide low-level complexity, mid-level abstractions hide implementation details, and developers can understand and work with systems without needing to comprehend all details simultaneously",
//       B: "Abstraction increases cognitive complexity by adding layers that must be understood",
//       C: "Cognitive complexity can only be reduced by understanding all system details",
//       D: "Abstraction and cognitive complexity are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) reduce cognitive complexity (độ phức tạp nhận thức) bằng cách ẩn irrelevant details ở mỗi level. Abstraction layers allow developers focus vào relevant information cho current task, work ở appropriate levels of detail. High-level abstractions ẩn low-level complexity - architects chỉ cần biết system structure. Mid-level abstractions ẩn implementation details - developers chỉ cần biết component interfaces. Developers có thể understand và work với systems mà không cần comprehend all details simultaneously. Cognitive load reduced - chỉ cần biết level relevant, ignore others. Without abstraction, developers phải understand everything - overwhelming. With abstraction, complexity manageable - work ở appropriate level, ignore irrelevant. Điều này enable understand large, complex systems - không cần biết tất cả, chỉ cần biết relevant parts. Abstraction không increase complexity mà manage nó - organize complexity vào layers."
//   },
//   // Question 388
//   {
//     question: "In the context of encapsulation, what is the theoretical concept of the encapsulation boundary and how does this boundary create a clear separation between the internal implementation of an object and its external interface, enabling independent evolution of implementation and interface?",
//     options: {
//       A: "The encapsulation boundary is the conceptual line separating internal implementation from external interface, created through access modifiers that restrict external access to internals, enabling the internal implementation to evolve independently of the interface as long as the interface contract is maintained, allowing implementation improvements without affecting clients",
//       B: "Encapsulation boundaries prevent any form of evolution or change",
//       C: "The boundary between implementation and interface cannot be maintained through encapsulation",
//       D: "Encapsulation boundaries require exposing all internals for maximum flexibility"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation boundary (ranh giới đóng gói) là conceptual line tách internal implementation từ external interface, được tạo through access modifiers restrict external access đến internals. Enable internal implementation evolve independently của interface miễn là interface contract được maintain. Allow implementation improvements mà không affect clients. Boundary clear - inside (private, implementation), outside (public, interface). Separation này important - implementation có thể change (optimize, refactor, fix) mà interface stable. Clients depend vào interface, không phải implementation, nên không bị affect. Independent evolution - implementation evolve, interface stable. Điều này enable maintainable systems - improve implementation, không break clients. Boundary không prevent evolution mà enable safe evolution - change implementation, maintain interface. Encapsulation tạo boundary này - protect internals, expose interface. Đây là foundation của stable, evolvable systems."
//   },
//   // Question 389
//   {
//     question: "What is the theoretical relationship between inheritance and the concept of code reuse versus code sharing, and how does inheritance enable both the reuse of existing code and the sharing of common functionality across related classes in an inheritance hierarchy?",
//     options: {
//       A: "Inheritance enables both code reuse where derived classes use inherited methods without modification, and code sharing where base class code is shared among multiple derived classes, with inheritance allowing common functionality to be defined once in a base class and automatically available to all derived classes, creating efficient code organization where shared code is centralized and reused code eliminates duplication",
//       B: "Inheritance only enables code reuse, with code sharing being impossible",
//       C: "Code reuse and code sharing are conflicting goals that cannot be achieved together",
//       D: "Inheritance prevents both code reuse and code sharing"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) enable cả code reuse (tái sử dụng code) - derived classes dùng inherited methods mà không modify, và code sharing (chia sẻ code) - base class code được share giữa multiple derived classes. Inheritance allow common functionality được define một lần trong base class và automatically available đến all derived classes. Tạo efficient code organization - shared code centralized, reused code eliminate duplication. Code reuse: derived classes inherit và use methods từ base. Code sharing: một base class, nhiều derived classes share code. Both benefit - reuse eliminate duplication, sharing centralize common code. Efficiency: define once, use many times. Organization: common code trong base, specific code trong derived. Inheritance enable cả hai - vừa reuse (sử dụng lại), vừa share (chia sẻ). Đây là power của inheritance - code efficiency và organization. Trade-off: reuse và share tạo dependencies, nhưng benefit lớn hơn cost trong many cases."
//   },
//   // Question 390
//   {
//     question: "Explain the theoretical concept of polymorphism as enabling the design of plug-and-play architectures, and how does polymorphism allow systems to support new components that implement existing interfaces without requiring modifications to the core system infrastructure?",
//     options: {
//       A: "Polymorphism enables plug-and-play architectures by designing core systems to depend on abstractions, allowing new components implementing those abstractions to be plugged into the system without modifying core infrastructure, with polymorphism ensuring the core system can work with any implementation of the abstraction, creating extensible systems where functionality can be added through new components rather than system modifications",
//       B: "Polymorphism requires modifying core systems to add new components",
//       C: "Plug-and-play architectures cannot be achieved through polymorphism",
//       D: "Polymorphism prevents the addition of new components to systems"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable plug-and-play architectures (kiến trúc cắm và chạy) bằng cách design core systems depend vào abstractions. New components implement những abstractions này có thể được plug vào system mà không cần modify core infrastructure. Polymorphism ensure core system có thể work với any implementation của abstraction. Tạo extensible systems - functionality có thể được add through new components thay vì system modifications. Ví dụ: Plugin architecture - core system define Plugin interface, plugins implement interface, plug in without modification. Core system không cần biết specific plugins, chỉ cần biết interface. Polymorphism enable này - core work với any Plugin implementation. Extensibility: add functionality bằng cách add components, không modify core. Đây là foundation của plugin systems, extension points, và modular architectures. Polymorphism không prevent extension mà enable nó - allow plug new components through abstractions."
//   },
//   // Question 391
//   {
//     question: "What is the theoretical foundation of the relationship between encapsulation and the concept of object responsibility, and how does proper encapsulation help define and maintain clear responsibilities for objects by bundling related data and operations together?",
//     options: {
//       A: "Encapsulation helps define object responsibility by bundling related data and operations that work together to fulfill a specific purpose, with proper encapsulation keeping all members related to a single responsibility together in one class, creating cohesive units where responsibility is clear and all class members contribute to fulfilling that responsibility, making objects easier to understand and maintain",
//       B: "Encapsulation prevents clear responsibility definition by mixing unrelated concerns",
//       C: "Object responsibility can only be defined without using encapsulation",
//       D: "Encapsulation and object responsibility are conflicting concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) help define object responsibility bằng cách bundle related data và operations work together để fulfill specific purpose. Proper encapsulation keep all members related đến single responsibility together trong một class. Tạo cohesive units - responsibility clear và all class members contribute đến fulfill responsibility đó. Make objects dễ understand và maintain hơn. Responsibility là 'what object does' - single, clear purpose. Encapsulation keep related things together - data và operations cho responsibility đó. Cohesion high - all members related, work toward common goal. Clear responsibility - easy to understand purpose, easy to maintain. Ví dụ: BankAccount responsibility là manage account, encapsulate balance, accountNumber, và deposit/withdraw methods. All related, all contribute. Encapsulation không prevent responsibility mà define nó - bundle related functionality. Đây là foundation của single responsibility principle - một class, một responsibility."
//   },
//   // Question 392
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of the inheritance relationship as a modeling tool, and how does inheritance help model real-world relationships and hierarchies that exist in problem domains, making object-oriented models more intuitive and aligned with domain understanding?",
//     options: {
//       A: "Inheritance serves as a modeling tool that reflects real-world 'is-a' relationships and specialization hierarchies, allowing object-oriented models to mirror domain structures where general concepts have specialized variants, making models more intuitive by aligning code structure with domain understanding and enabling developers to reason about code using domain knowledge",
//       B: "Inheritance has no relationship to domain modeling or real-world relationships",
//       C: "Inheritance prevents intuitive modeling by creating artificial structures",
//       D: "Real-world relationships cannot be modeled through inheritance"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance (kế thừa) serve như modeling tool reflect real-world 'is-a' relationships và specialization hierarchies. Allow object-oriented models mirror domain structures - general concepts có specialized variants. Make models intuitive hơn bằng cách align code structure với domain understanding. Enable developers reason về code using domain knowledge. Ví dụ: domain có Animal → Mammal → Dog hierarchy, code có inheritance hierarchy tương tự. Intuitive - code structure match domain structure. Domain knowledge applicable - understand domain, understand code. Models align với domain - không artificial, natural. Inheritance không prevent modeling mà enable intuitive modeling - reflect real relationships. Điều này tạo maintainable code - developers có thể use domain knowledge để understand và modify code. Modeling tool - inheritance help model domain, không chỉ organize code."
//   },
//   // Question 393
//   {
//     question: "What is the theoretical relationship between abstraction and the concept of interface stability in long-lived software systems, and how do well-designed abstractions create stable interfaces that can evolve and adapt over time while maintaining backward compatibility?",
//     options: {
//       A: "Abstraction creates stable interfaces by defining essential operations and contracts that remain constant, with well-designed abstractions focusing on stable concepts rather than volatile implementation details, enabling interfaces to remain stable over time while implementations evolve, maintaining backward compatibility by keeping the abstraction contract unchanged even as internal implementations improve or change",
//       B: "Abstraction prevents interface stability by requiring constant interface changes",
//       C: "Interface stability can only be achieved without using abstraction",
//       D: "Abstraction and interface stability are conflicting goals"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) tạo stable interfaces bằng cách define essential operations và contracts remain constant. Well-designed abstractions focus vào stable concepts thay vì volatile implementation details. Enable interfaces remain stable over time trong khi implementations evolve. Maintain backward compatibility bằng cách keep abstraction contract unchanged ngay cả khi internal implementations improve hoặc change. Stable interfaces important cho long-lived systems - clients depend vào interfaces, interfaces phải stable. Abstractions capture essential, stable concepts - 'what', không phải 'how'. Implementation details volatile, abstractions stable. Evolution: implementation change, interface stable. Backward compatibility: old clients vẫn work, new implementations compatible. Abstraction không prevent stability mà enable nó - focus vào stable concepts. Đây là foundation của maintainable, evolvable systems - stable interfaces, evolving implementations."
//   },
//   // Question 394
//   {
//     question: "Explain the theoretical concept of polymorphism as a mechanism for achieving runtime flexibility, and how does dynamic method dispatch enable systems to adapt their behavior at runtime based on the actual types of objects, rather than being fixed at compile time?",
//     options: {
//       A: "Polymorphism achieves runtime flexibility through dynamic method dispatch where method calls are resolved at runtime based on actual object types, allowing systems to adapt behavior dynamically as different object types are used, with the same code working with different types and producing different behaviors based on runtime object types, creating flexible systems that can respond to runtime conditions and object configurations",
//       B: "Polymorphism requires all behavior to be fixed at compile time",
//       C: "Runtime flexibility cannot be achieved through polymorphism",
//       D: "Dynamic method dispatch prevents runtime adaptation"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) achieve runtime flexibility (linh hoạt runtime) through dynamic method dispatch - method calls được resolve tại runtime dựa trên actual object types. Allow systems adapt behavior dynamically khi different object types được dùng. Same code work với different types và produce different behaviors based trên runtime object types. Tạo flexible systems có thể respond đến runtime conditions và object configurations. Compile-time: code depend vào abstraction. Runtime: actual types determine behavior. Flexibility: behavior adapt based trên runtime types, không fixed tại compile-time. Ví dụ: processPayment() work với CreditCard hoặc PayPal based trên runtime type. Dynamic dispatch enable này - method được chọn tại runtime. Systems flexible - có thể handle different scenarios, adapt to conditions. Polymorphism không prevent flexibility mà enable runtime flexibility - behavior determined tại runtime, không compile-time."
//   },
//   // Question 395
//   {
//     question: "What are the theoretical mechanisms by which encapsulation protects object state from corruption and maintains data integrity, and how do encapsulation mechanisms create defensive programming patterns that validate inputs and enforce business rules?",
//     options: {
//       A: "Encapsulation protects state by restricting direct access and requiring all modifications through controlled methods that can validate inputs, check preconditions, enforce business rules, and maintain invariants, creating defensive programming patterns where invalid states cannot be created because all state changes go through validation pathways that reject invalid inputs and ensure data integrity",
//       B: "Encapsulation provides no protection and allows unrestricted state modification",
//       C: "State protection can only be achieved without encapsulation",
//       D: "Encapsulation prevents all state validation and business rule enforcement"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Encapsulation (đóng gói) protect state bằng cách restrict direct access và require all modifications through controlled methods có thể validate inputs, check preconditions, enforce business rules, và maintain invariants. Tạo defensive programming patterns - invalid states không thể được tạo vì all state changes go through validation pathways reject invalid inputs và ensure data integrity. Setters validate - check values, reject invalid, enforce rules. Preconditions checked - ensure valid state before operations. Business rules enforced - age >= 0, balance >= 0, etc. Invariants maintained - state luôn valid. Defensive: prevent problems, không chỉ detect. Invalid states impossible - không có pathway tạo chúng. Data integrity ensured - state luôn consistent và valid. Encapsulation không prevent protection mà enable defensive programming - control access, validate changes. Đây là foundation của robust systems - prevent corruption, maintain integrity."
//   },
//   // Question 396
//   {
//     question: "In the theoretical framework of inheritance, what is the concept of inheritance depth and its impact on system design, and how do shallow versus deep inheritance hierarchies affect code maintainability, testability, and the risk of fragile base class problems?",
//     options: {
//       A: "Inheritance depth refers to the number of levels in an inheritance hierarchy, with shallow hierarchies (2-3 levels) generally being more maintainable and testable with lower fragile base class risk, while deep hierarchies (4+ levels) increase complexity, make testing harder, and amplify the fragile base class problem where base class changes affect many derived classes, with optimal design minimizing depth while achieving necessary code reuse",
//       B: "Deeper inheritance hierarchies always improve maintainability and reduce risks",
//       C: "Inheritance depth has no impact on system design or maintainability",
//       D: "Shallow hierarchies always cause more problems than deep hierarchies"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Inheritance depth (độ sâu kế thừa) refer đến số levels trong inheritance hierarchy. Shallow hierarchies (2-3 levels) generally more maintainable và testable với lower fragile base class risk - dễ understand, test, và modify. Deep hierarchies (4+ levels) increase complexity, make testing harder, và amplify fragile base class problem - base class changes affect many derived classes. Optimal design minimize depth trong khi achieve necessary code reuse. Shallow: easy to understand, test, maintain. Deep: complex, hard to test, fragile. Fragile base class: changes propagate nhiều levels, break many classes. Balance: đủ depth để reuse, không quá deep để maintain. Design decision: prefer shallow, avoid deep. Composition có thể thay thế deep inheritance. Depth impact: maintainability, testability, risk. Minimize depth, maximize clarity. Đây là design principle - keep hierarchies shallow."
//   },
//   // Question 397
//   {
//     question: "What is the theoretical foundation of the relationship between polymorphism and the design of algorithms that operate on collections of heterogeneous objects, and how does polymorphism enable algorithms to work uniformly with different object types through common interfaces?",
//     options: {
//       A: "Polymorphism enables uniform algorithms by allowing algorithms to operate on abstractions (interfaces or base classes) rather than specific types, so algorithms can work with collections containing different object types that all implement the same abstraction, processing each object uniformly through the common interface while each object responds according to its specific implementation, creating flexible algorithms that work with heterogeneous collections",
//       B: "Polymorphism requires algorithms to know all specific types in collections",
//       C: "Algorithms cannot work with heterogeneous collections through polymorphism",
//       D: "Polymorphism prevents uniform algorithm design"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Polymorphism (đa hình) enable uniform algorithms bằng cách allow algorithms operate trên abstractions (interfaces hoặc base classes) thay vì specific types. Algorithms có thể work với collections chứa different object types mà all implement same abstraction. Process mỗi object uniformly through common interface trong khi mỗi object respond according đến specific implementation. Tạo flexible algorithms work với heterogeneous collections. Ví dụ: drawAll() algorithm work với List<Shape>, process Circle, Rectangle, Triangle uniformly. Algorithm chỉ cần biết Shape interface, không cần biết specific types. Uniform processing - same algorithm, different behaviors. Heterogeneous collections - different types, same interface. Polymorphism enable này - algorithm work với abstraction, objects provide implementations. Flexibility: add new types, algorithm tự động work. Đây là foundation của generic algorithms - work với any types implement interface."
//   },
//   // Question 398
//   {
//     question: "In the context of encapsulation, what is the theoretical concept of the public interface as a contract, and how does the public interface define the obligations and guarantees that an object provides to its clients, establishing a formal agreement for object interaction?",
//     options: {
//       A: "The public interface serves as a contract defining what operations an object provides, what parameters are required, what return values can be expected, and what exceptions might be thrown, establishing formal obligations (what the object will do) and guarantees (what clients can rely on), creating a contract that clients depend on and that the object must honor, enabling predictable and reliable object interactions",
//       B: "Public interfaces have no contractual meaning and are purely informational",
//       C: "Contracts can only be established without using public interfaces",
//       D: "The public interface prevents formal agreements between objects"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Public interface (giao diện công khai) serve như contract định nghĩa: what operations object provides, what parameters required, what return values expected, và what exceptions might be thrown. Establish formal obligations (object sẽ làm gì) và guarantees (clients có thể rely on gì). Tạo contract mà clients depend on và object phải honor. Enable predictable và reliable object interactions. Contract là agreement - object promise provide operations, clients expect behaviors. Obligations: object phải fulfill contract. Guarantees: clients có thể rely on behavior. Formal agreement - clear, documented, enforceable. Predictable: clients biết expect gì. Reliable: object honor contract. Interface define contract - methods, signatures, behaviors. Objects must honor - implement đúng contract. Clients depend on - expect contract behavior. Đây là foundation của reliable systems - contracts ensure predictable behavior. Encapsulation tạo contract này - interface là contract."
//   },
//   // Question 399
//   {
//     question: "What is the theoretical relationship between abstraction and the concept of domain modeling in object-oriented analysis, and how do abstractions help capture and represent the essential concepts, relationships, and behaviors of a problem domain in a way that is both accurate and implementable?",
//     options: {
//       A: "Abstraction enables domain modeling by identifying and representing essential domain concepts at appropriate levels of detail, capturing key concepts, their relationships, and behaviors while ignoring implementation specifics, allowing designers to create accurate models of the problem domain that reflect real-world structures and can be directly implemented in code, bridging the gap between domain understanding and technical implementation",
//       B: "Abstraction prevents accurate domain modeling by focusing only on technical details",
//       C: "Domain modeling can only be achieved without using abstraction",
//       D: "Abstraction and domain modeling are unrelated concepts"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Abstraction (trừu tượng hóa) enable domain modeling (mô hình hóa miền) bằng cách identify và represent essential domain concepts ở appropriate levels of detail. Capture key concepts, relationships, và behaviors trong khi ignore implementation specifics. Allow designers create accurate models của problem domain reflect real-world structures và có thể được directly implement trong code. Bridge gap giữa domain understanding và technical implementation. Domain model: concepts, relationships, behaviors. Abstraction represent chúng - classes, inheritance, associations. Accurate: reflect domain correctly. Implementable: có thể code directly. Gap bridged - model translate thành code. Abstraction không prevent modeling mà enable nó - represent domain concepts. Models accurate và implementable - vừa reflect domain, vừa code được. Đây là foundation của object-oriented analysis - understand domain, model concepts, implement code."
//   },
//   // Question 400
//   {
//     question: "Explain the theoretical concept of the four fundamental principles of object-oriented programming working together as an integrated system, and how do encapsulation, inheritance, polymorphism, and abstraction complement each other to create well-designed, maintainable, and extensible object-oriented systems?",
//     options: {
//       A: "The four OOP principles work together as an integrated system where encapsulation provides data protection and controlled access, inheritance enables code reuse and specialization, polymorphism allows flexible behavior through abstractions, and abstraction creates simplified interfaces, with each principle addressing different aspects of design that together create systems that are protected (encapsulation), organized (inheritance), flexible (polymorphism), and comprehensible (abstraction), resulting in maintainable and extensible architectures",
//       B: "The four principles are independent and cannot work together",
//       C: "Only one principle can be used at a time in any system",
//       D: "The principles conflict with each other and cannot be combined"
//     },
//     correctAnswer: "A",
//     code: null,
//     explanation: "Bốn nguyên tắc OOP work together như integrated system: Encapsulation (đóng gói) provide data protection và controlled access - bảo vệ data, control access. Inheritance (kế thừa) enable code reuse và specialization - reuse code, specialize behavior. Polymorphism (đa hình) allow flexible behavior through abstractions - work với multiple types, flexible behavior. Abstraction (trừu tượng hóa) create simplified interfaces - hide complexity, expose essentials. Mỗi principle address different aspects: encapsulation → protection, inheritance → organization, polymorphism → flexibility, abstraction → comprehensibility. Together tạo systems: protected (encapsulation), organized (inheritance), flexible (polymorphism), và comprehensible (abstraction). Result: maintainable và extensible architectures. Principles complement nhau - encapsulation protect, inheritance organize, polymorphism flex, abstraction simplify. Integrated approach - không chỉ một principle, mà all together. Well-designed systems use all four - comprehensive design. Đây là foundation của object-oriented programming - four principles, integrated system, maintainable code."
//   }
// ];

