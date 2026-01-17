export const questions = [
  // Question 1
  {
    question: "What is the primary difference between a class and an object in Java?",
    options: {
      A: "A class is a blueprint, an object is an instance",
      B: "A class has methods, an object has variables",
      C: "A class is static, an object is dynamic",
      D: "A class is abstract, an object is concrete"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Class là một blueprint (bản thiết kế) định nghĩa cấu trúc và hành vi, trong khi object là một instance (thể hiện) cụ thể của class đó. Một class có thể tạo ra nhiều objects. Class chứa cả methods và variables, không chỉ có methods. Class không nhất thiết phải là static hay abstract."
  },
  // Question 2
  {
    question: "Which statement about constructors is FALSE?",
    options: {
      A: "Constructors cannot be inherited",
      B: "Constructors can be overloaded",
      C: "Constructors can be private",
      D: "Constructors can have return types"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Constructor KHÔNG THỂ có return type, kể cả void. Constructor có tên giống class và không có return type. Constructor có thể được overload (nhiều constructor với tham số khác nhau), có thể là private (dùng cho Singleton pattern), và không thể được kế thừa."
  },
  // Question 3
  {
    question: "What is the output of the following code?",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `class Test {
    static int count = 0;
    Test() { count++; }
}
public class Main {
    public static void main(String[] args) {
        Test t1 = new Test();
        Test t2 = new Test();
        System.out.println(Test.count);
    }
}`,
    explanation: "Output là 2. Biến static count được chia sẻ bởi tất cả các instance của class Test. Mỗi lần tạo object mới (t1, t2), constructor được gọi và count tăng lên 1. Sau khi tạo 2 objects, count = 2."
  },
  // Question 4
  {
    question: "Which of the following is NOT a principle of OOP?",
    options: {
      A: "Encapsulation",
      B: "Compilation",
      C: "Inheritance",
      D: "Polymorphism"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Compilation (biên dịch) KHÔNG phải là một nguyên tắc của OOP. Bốn nguyên tắc chính của OOP là: Encapsulation (Đóng gói), Inheritance (Kế thừa), Polymorphism (Đa hình), và Abstraction (Trừu tượng). Compilation chỉ là quá trình chuyển đổi code Java thành bytecode."
  },
  // Question 5
  {
    question: "What happens when you try to access a private member of a class from outside the class?",
    options: {
      A: "Runtime exception",
      B: "Compilation error",
      C: "Returns null",
      D: "Returns default value"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lỗi biên dịch xảy ra khi cố gắng truy cập private member từ bên ngoài class. Private members chỉ có thể được truy cập trong cùng class. Compiler sẽ phát hiện lỗi này ngay tại thời điểm biên dịch, không phải runtime."
  },
  // Question 6
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class A {
    int x = 10;
}
public class Main {
    public static void main(String[] args) {
        A a1 = new A();
        A a2 = a1;
        a2.x = 20;
        System.out.println(a1.x);
    }
}`,
    explanation: "Output là 20. a2 = a1 không tạo object mới, mà chỉ tạo một reference khác trỏ đến cùng object. Do đó a1 và a2 trỏ đến cùng một object. Khi thay đổi a2.x = 20, giá trị của object được thay đổi, nên a1.x cũng là 20."
  },
  // Question 7
  {
    question: "Which keyword is used to prevent a class from being inherited?",
    options: {
      A: "static",
      B: "final",
      C: "abstract",
      D: "private"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Từ khóa 'final' được dùng để ngăn class bị kế thừa. Khi khai báo 'final class', không class nào có thể extend class đó. 'static' dùng cho members, 'abstract' cho phép kế thừa, 'private' chỉ dùng cho members không phải class."
  },
  // Question 8
  {
    question: "What is the default value of an instance variable of type reference?",
    options: {
      A: "0",
      B: "null",
      C: "undefined",
      D: "Depends on the class"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Giá trị mặc định của biến instance kiểu reference là 'null'. Tất cả các biến reference (object, array, String, etc.) đều có giá trị mặc định là null nếu không được khởi tạo. Primitive types có giá trị mặc định khác (int = 0, boolean = false, etc.)."
  },
  // Question 9
  {
    question: "Can a constructor call another constructor in the same class?",
    options: {
      A: "No, never",
      B: "Yes, using this()",
      C: "Yes, using super()",
      D: "Yes, using new keyword"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, constructor có thể gọi constructor khác trong cùng class bằng cách sử dụng this(). this() phải là câu lệnh đầu tiên trong constructor. super() dùng để gọi constructor của parent class, không phải cùng class. Không thể dùng new để gọi constructor trong cùng class."
  },
  // Question 10
  {
    question: "What is the output?",
    options: {
      A: "0",
      B: "null",
      C: "Compilation error",
      D: "Runtime exception"
    },
    correctAnswer: "C",
    code: `class Test {
    int x;
    Test(int x) {
        this.x = x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        System.out.println(t.x);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì class Test chỉ có constructor có tham số Test(int x), không có default constructor. Khi khai báo constructor có tham số, Java không tự động tạo default constructor. Gọi new Test() không có tham số sẽ gây lỗi biên dịch."
  },
  // Question 11
  {
    question: "Which access modifier provides the most restrictive access?",
    options: {
      A: "public",
      B: "protected",
      C: "default",
      D: "private"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Private là access modifier có phạm vi hạn chế nhất. Private members chỉ có thể được truy cập trong cùng class. Thứ tự từ hạn chế nhất đến mở nhất: private > default (package-private) > protected > public."
  },
  // Question 12
  {
    question: "What is method signature in Java?",
    options: {
      A: "Method name only",
      B: "Method name + return type",
      C: "Method name + parameter list",
      D: "Method name + access modifier"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Method signature trong Java bao gồm method name + parameter list (số lượng, kiểu dữ liệu, thứ tự của parameters). Return type và access modifier KHÔNG phải là phần của method signature. Method signature được dùng để phân biệt các methods khi overloading."
  },
  // Question 13
  {
    question: "What is the output?",
    options: {
      A: "123",
      B: "321",
      C: "132",
      D: "231"
    },
    correctAnswer: "A",
    code: `class A {
    static { System.out.print("1"); }
    { System.out.print("2"); }
    A() { System.out.print("3"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new A();
    }
}`,
    explanation: "Output là '123'. Thứ tự thực thi: 1) Static block chạy đầu tiên khi class được load (in '1'), 2) Instance initialization block chạy trước constructor (in '2'), 3) Constructor chạy cuối cùng (in '3'). Static block chỉ chạy một lần khi class được load, instance block chạy mỗi lần tạo object."
  },
  // Question 14
  {
    question: "Can we overload the main method in Java?",
    options: {
      A: "No, it's not possible",
      B: "Yes, but JVM will call only the standard main method",
      C: "Yes, and JVM will call all main methods",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có thể overload main method trong Java. Tuy nhiên, JVM chỉ gọi method main với signature: public static void main(String[] args). Các overloaded versions khác của main method có thể được gọi từ code khác, nhưng JVM không tự động gọi chúng."
  },
  // Question 15
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    int x = 10;
    void change(int x) {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.change(t.x);
        System.out.println(t.x);
    }
}`,
    explanation: "Output là 10. Trong method change(int x), tham số x là biến local, không phải instance variable. Khi gán x = 20, chỉ biến local được thay đổi, không ảnh hưởng đến instance variable t.x. Để thay đổi instance variable, cần dùng this.x = 20."
  },
  // Question 16
  {
    question: "Which statement about the 'this' keyword is FALSE?",
    options: {
      A: "It refers to the current object",
      B: "It can be used in static methods",
      C: "It can be used to invoke current class constructor",
      D: "It can be used to pass as argument in method call"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Câu B SAI. 'this' KHÔNG THỂ được sử dụng trong static methods vì 'this' tham chiếu đến instance hiện tại, trong khi static methods thuộc về class, không thuộc về instance. 'this' có thể dùng để gọi constructor (this()), truyền làm tham số, và tham chiếu đến instance hiện tại."
  },
  // Question 17
  {
    question: "What is object composition in OOP?",
    options: {
      A: "Creating multiple objects",
      B: "A \"has-a\" relationship",
      C: "A \"is-a\" relationship",
      D: "Destroying objects"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Object composition là mối quan hệ \"has-a\" (có một), trong đó một object chứa các objects khác như là thành phần của nó. Ví dụ: Car has-a Engine. Đây là cách thay thế cho inheritance trong một số trường hợp. \"is-a\" relationship là inheritance."
  },
  // Question 18
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "BA"
    },
    correctAnswer: "C",
    code: `class A {
    A() {
        System.out.print("A");
    }
}
class B extends A {
    B() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
    }
}`,
    explanation: "Output là 'AB'. Khi tạo object của class B, constructor của parent class A được gọi trước (thông qua super() ngầm định), in 'A', sau đó constructor của B được gọi, in 'B'. Thứ tự luôn là: parent constructor trước, child constructor sau."
  },
  // Question 19
  {
    question: "Can a class extend multiple classes in Java?",
    options: {
      A: "Yes",
      B: "No",
      C: "Yes, using interfaces",
      D: "Yes, using abstract classes"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, một class trong Java chỉ có thể extend một class duy nhất (single inheritance). Java không hỗ trợ multiple inheritance cho classes để tránh diamond problem. Tuy nhiên, một class có thể implement nhiều interfaces, và một interface có thể extend nhiều interfaces."
  },
  // Question 20
  {
    question: "What is tight coupling in OOP?",
    options: {
      A: "Classes are highly dependent on each other",
      B: "Classes are loosely connected",
      C: "Classes are not connected",
      D: "Classes are abstract"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Tight coupling (liên kết chặt chẽ) là khi các classes phụ thuộc nhiều vào nhau. Khi một class thay đổi, các class khác cũng phải thay đổi theo. Đây là điều nên tránh trong OOP. Loose coupling (liên kết lỏng lẻo) là tốt hơn, giúp code dễ bảo trì và mở rộng."
  },
  // Question 21
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "null",
      C: "Compilation error",
      D: "NullPointerException"
    },
    correctAnswer: "D",
    code: `class Test {
    void show() {
        System.out.print("A");
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = null;
        t.show();
    }
}`,
    explanation: "NullPointerException xảy ra vì biến t được gán giá trị null, sau đó cố gắng gọi method show() trên null reference. Trong Java, gọi method trên null reference sẽ ném NullPointerException tại runtime, không phải lỗi biên dịch."
  },
  // Question 22
  {
    question: "Which of these is NOT a valid way to create an object?",
    options: {
      A: "Using new keyword",
      B: "Using reflection",
      C: "Using clone()",
      D: "Using abstract keyword"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Abstract keyword KHÔNG được dùng để tạo object. Abstract classes và methods không thể được khởi tạo trực tiếp. Các cách hợp lệ để tạo object: new keyword (thường dùng nhất), reflection (Class.newInstance()), clone() (sao chép object), deserialization, và factory methods."
  },
  // Question 23
  {
    question: "What is the purpose of the finalize() method?",
    options: {
      A: "To initialize objects",
      B: "To perform cleanup before garbage collection",
      C: "To create objects",
      D: "To compare objects"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Method finalize() được gọi bởi garbage collector trước khi object bị thu hồi bộ nhớ. Nó được dùng để thực hiện cleanup (dọn dẹp tài nguyên) như đóng file, giải phóng kết nối database. Tuy nhiên, finalize() đã bị deprecated từ Java 9, nên dùng try-with-resources hoặc AutoCloseable thay thế."
  },
  // Question 24
  {
    question: "What is the output?",
    options: {
      A: "10 10",
      B: "20 20",
      C: "20 10",
      D: "10 20"
    },
    correctAnswer: "C",
    code: `class A {
    int x = 10;
    void show() {
        int x = 20;
        System.out.print(x + " " + this.x);
    }
}
public class Main {
    public static void main(String[] args) {
        new A().show();
    }
}`,
    explanation: "Output là '20 10'. Trong method show(), biến local x = 20 che khuất (shadow) instance variable x. Khi in x (không có this), nó in biến local (20). Khi in this.x, nó in instance variable (10). 'this' được dùng để truy cập instance variable khi bị che khuất bởi biến local."
  },
  // Question 25
  {
    question: "What is object slicing in the context of OOP?",
    options: {
      A: "Dividing an object into parts",
      B: "Loss of derived class features when assigned to base class",
      C: "Deleting part of an object",
      D: "Not applicable in Java"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Object slicing KHÔNG áp dụng trong Java. Đây là khái niệm của C++ khi gán derived class object vào base class variable, dẫn đến mất thông tin của derived class. Java không có vấn đề này vì tất cả objects được tham chiếu qua references, không phải giá trị trực tiếp."
  },
  // Question 26
  {
    question: "What is the primary goal of encapsulation?",
    options: {
      A: "To hide implementation details",
      B: "To expose all data",
      C: "To improve performance",
      D: "To reduce memory usage"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Mục tiêu chính của encapsulation (đóng gói) là ẩn implementation details (chi tiết triển khai). Bằng cách sử dụng private variables và public methods (getters/setters), ta có thể kiểm soát cách dữ liệu được truy cập và thay đổi, giúp code an toàn và dễ bảo trì hơn."
  },
  // Question 27
  {
    question: "Which access modifier allows access within the same package and subclasses?",
    options: {
      A: "private",
      B: "protected",
      C: "public",
      D: "default"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Protected cho phép truy cập trong cùng package và trong subclasses (kể cả subclasses ở package khác). Private chỉ trong cùng class, default chỉ trong cùng package, public ở mọi nơi. Protected kết hợp quyền của default và thêm quyền cho subclasses."
  },
  // Question 28
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "0",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `class A {
    private int x = 10;
    class B {
        void show() {
            System.out.print(x);
        }
    }
}
public class Main {
    public static void main(String[] args) {
        A.B b = new A().new B();
        b.show();
    }
}`,
    explanation: "Output là 10. Inner class B có thể truy cập private members của outer class A. Đây là đặc điểm của inner classes trong Java - chúng có quyền truy cập đầy đủ vào members của outer class, kể cả private members."
  },
  // Question 29
  {
    question: "What is a getter method also known as?",
    options: {
      A: "Mutator",
      B: "Accessor",
      C: "Constructor",
      D: "Destructor"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Getter method còn được gọi là Accessor (phương thức truy cập). Getter dùng để đọc giá trị của private variable. Setter method được gọi là Mutator (phương thức thay đổi), dùng để gán giá trị. Constructor dùng để khởi tạo object, không phải getter."
  },
  // Question 30
  {
    question: "What is the output?",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `class Test {
    private static int count = 0;
    public Test() { count++; }
    public static int getCount() { return count; }
}
public class Main {
    public static void main(String[] args) {
        Test t1 = new Test();
        Test t2 = new Test();
        System.out.print(Test.getCount());
    }
}`,
    explanation: "Output là 2. Biến static count được chia sẻ bởi tất cả instances. Mỗi lần tạo object mới (t1, t2), constructor được gọi và count tăng lên 1. Sau khi tạo 2 objects, count = 2. Static method getCount() có thể được gọi trực tiếp từ class mà không cần instance."
  },
  // Question 31
  {
    question: "Can a private method be overridden?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only in subclasses",
      D: "Only if made protected"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, private methods không thể bị override. Private methods chỉ có thể được truy cập trong cùng class, nên subclass không thể thấy hoặc override chúng. Nếu subclass có method cùng tên, đó là method mới, không phải override. Để override, method phải có ít nhất là protected hoặc public."
  },
  // Question 32
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    private int x = 10;
    int getX() { return x; }
}
class B extends A {
    private int x = 20;
    int getX() { return x; }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.print(a.getX());
    }
}`,
    explanation: "Output là 20. Class B override method getX() và trả về biến x của chính nó (20). Mặc dù a được khai báo là kiểu A, nhưng object thực tế là B, nên method getX() của B được gọi (runtime polymorphism). Biến x trong B là biến riêng, không liên quan đến x trong A."
  },
  // Question 33
  {
    question: "Which is the most encapsulated?",
    options: {
      A: "public int x;",
      B: "protected int x;",
      C: "int x;",
      D: "private int x with public getter"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Option D là cách đóng gói tốt nhất. Private variable với public getter cho phép kiểm soát hoàn toàn cách dữ liệu được truy cập. Ta có thể thêm validation, logging, hoặc tính toán trong getter. Public/protected/default variables cho phép truy cập trực tiếp, không kiểm soát được."
  },
  // Question 34
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "0",
      C: "null",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private int x;
    Test(int x) { x = x; }
    int getX() { return x; }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test(10);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 0. Trong constructor Test(int x) { x = x; }, cả hai x đều là tham số, không phải instance variable. Cần dùng this.x = x để gán giá trị cho instance variable. Vì không gán được, instance variable x giữ giá trị mặc định 0."
  },
  // Question 35
  {
    question: "Can we have a private constructor?",
    options: {
      A: "No",
      B: "Yes, but class cannot be instantiated outside",
      C: "Yes, without any restrictions",
      D: "Only in abstract classes"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có thể có private constructor. Khi constructor là private, class không thể được khởi tạo từ bên ngoài class. Điều này được dùng trong Singleton pattern hoặc utility classes (chỉ có static methods). Object chỉ có thể được tạo từ bên trong class (static factory methods)."
  },
  // Question 36
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "0",
      C: "Compilation error",
      D: "null"
    },
    correctAnswer: "A",
    code: `class A {
    protected int x = 10;
}
class B extends A {
    void show() {
        System.out.print(x);
    }
}
public class Main {
    public static void main(String[] args) {
        new B().show();
    }
}`,
    explanation: "Output là 10. Class B kế thừa từ A và có thể truy cập protected variable x của parent class. Protected members có thể được truy cập trong subclass, kể cả khi subclass ở package khác. Method show() trong B truy cập x từ A và in ra 10."
  },
  // Question 37
  {
    question: "What is immutability in the context of encapsulation?",
    options: {
      A: "Objects cannot be created",
      B: "Object state cannot be modified after creation",
      C: "Objects are always null",
      D: "Objects are static"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Immutability (bất biến) trong encapsulation có nghĩa là trạng thái của object không thể thay đổi sau khi được tạo. Tất cả fields là final và không có setters. Ví dụ: String, Integer là immutable. Điều này giúp đảm bảo thread-safety và tránh side effects."
  },
  // Question 38
  {
    question: "What is the output?",
    options: {
      A: "30",
      B: "40",
      C: "50",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `class Test {
    private int x = 10;
    private int y = 20;
    void setX(int x) { this.x = x; }
    int sum() { return x + y; }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.setX(30);
        System.out.print(t.sum());
    }
}`,
    explanation: "Output là 50. Private variables x và y được đóng gói. Method setX(30) thay đổi x từ 10 thành 30. Method sum() trả về x + y = 30 + 20 = 50. Đây là ví dụ về encapsulation: dữ liệu được bảo vệ (private) và chỉ có thể truy cập qua methods (setX, sum)."
  },
  // Question 39
  {
    question: "Which package access modifier allows access only within the same package?",
    options: {
      A: "private",
      B: "protected",
      C: "default (no modifier)",
      D: "public"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Default access modifier (không có modifier) cho phép truy cập chỉ trong cùng package. Private chỉ trong cùng class, protected trong cùng package và subclasses, public ở mọi nơi. Default còn được gọi là package-private."
  },
  // Question 40
  {
    question: "What is the output?",
    options: {
      A: "10 10",
      B: "20 20",
      C: "10 20",
      D: "20 10"
    },
    correctAnswer: "C",
    code: `class A {
    int x = 10;
}
class B extends A {
    int x = 20;
    void show() {
        System.out.print(super.x + " " + this.x);
    }
}
public class Main {
    public static void main(String[] args) {
        new B().show();
    }
}`,
    explanation: "Output là '10 20'. Class B có biến x riêng (20) che khuất biến x của parent class A (10). super.x truy cập biến x của parent class (10), this.x truy cập biến x của chính class B (20). Đây là variable hiding, không phải overriding."
  },
  // Question 41
  {
    question: "What is defensive copying in encapsulation?",
    options: {
      A: "Copying the class",
      B: "Creating copies of mutable objects to prevent external modifications",
      C: "Copying methods",
      D: "Duplicating code"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Defensive copying (sao chép phòng thủ) là tạo bản sao của mutable objects để ngăn chặn thay đổi từ bên ngoài. Khi return một mutable object (như array, List), ta nên return một copy thay vì reference gốc để đảm bảo encapsulation. Ví dụ: return Arrays.copyOf(arr, arr.length) thay vì return arr."
  },
  // Question 42
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private static int x = 10;
    static void change() { x = 20; }
    static int getX() { return x; }
}
public class Main {
    public static void main(String[] args) {
        Test.change();
        System.out.print(Test.getX());
    }
}`,
    explanation: "Output là 20. Private static variable x được đóng gói, chỉ có thể truy cập qua static methods. Test.change() thay đổi x từ 10 thành 20. Test.getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói static variables đúng cách."
  },
  // Question 43
  {
    question: "Can a protected member be accessed from a different package?",
    options: {
      A: "No, never",
      B: "Yes, only through inheritance",
      C: "Yes, always",
      D: "Only if made public"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, protected member có thể được truy cập từ package khác, nhưng CHỈ thông qua inheritance. Trong cùng package, protected có thể truy cập trực tiếp. Ở package khác, chỉ subclass mới có thể truy cập protected members của parent class, không thể truy cập trực tiếp."
  },
  // Question 44
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "C",
    code: `class A {
    private void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì method show() trong A là private, không thể được truy cập từ bên ngoài class A. Mặc dù B có method show() public, nhưng khi gọi a.show() với a có kiểu A, compiler chỉ thấy method private show() của A, không thể truy cập được."
  },
  // Question 45
  {
    question: "What is the JavaBean naming convention for a boolean getter?",
    options: {
      A: "getProperty()",
      B: "isProperty()",
      C: "hasProperty()",
      D: "checkProperty()"
    },
    correctAnswer: "B",
    code: null,
    explanation: "JavaBean naming convention cho boolean getter là 'isProperty()' thay vì 'getProperty()'. Ví dụ: isActive(), isEnabled(). Điều này giúp code dễ đọc hơn. Tuy nhiên, 'getProperty()' cũng được chấp nhận cho boolean, nhưng 'isProperty()' là chuẩn."
  },
  // Question 46
  {
    question: "What is the output?",
    options: {
      A: "1",
      B: "100",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private int[] arr = {1, 2, 3};
    int[] getArr() { return arr; }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        int[] a = t.getArr();
        a[0] = 100;
        System.out.print(t.getArr()[0]);
    }
}`,
    explanation: "Output là 100. Method getArr() return reference đến array gốc, không phải copy. Khi thay đổi a[0] = 100, nó thay đổi array gốc trong object t. Đây là lỗi encapsulation - nên return defensive copy (Arrays.copyOf) để bảo vệ dữ liệu."
  },
  // Question 47
  {
    question: "What breaks encapsulation?",
    options: {
      A: "Using private variables",
      B: "Exposing internal mutable objects directly",
      C: "Using getter methods",
      D: "Using setter methods with validation"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Exposing internal mutable objects directly (trả về reference trực tiếp đến mutable objects) phá vỡ encapsulation. Khi return array, List, hoặc object có thể thay đổi, code bên ngoài có thể thay đổi dữ liệu bên trong object. Nên return defensive copy hoặc immutable wrapper."
  },
  // Question 48
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "Compilation error",
      D: "0"
    },
    correctAnswer: "C",
    code: `class A {
    int x = 10;
    private class B {
        int x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        A.B b = new A().new B();
        System.out.print(b.x);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì inner class B được khai báo là private, không thể được truy cập từ bên ngoài class A. Private inner class chỉ có thể được sử dụng bên trong outer class. Không thể tạo instance của private inner class từ bên ngoài."
  },
  // Question 49
  {
    question: "What is the principle of least privilege in encapsulation?",
    options: {
      A: "Give maximum access to all members",
      B: "Give minimum access level necessary",
      C: "Make everything public",
      D: "Make everything private"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Principle of least privilege (nguyên tắc đặc quyền tối thiểu) trong encapsulation là cung cấp mức truy cập tối thiểu cần thiết. Bắt đầu với private, chỉ mở rộng (protected, public) khi thực sự cần. Điều này giúp bảo vệ dữ liệu và giảm coupling."
  },
  // Question 50
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "30",
      D: "0"
    },
    correctAnswer: "C",
    code: `class Test {
    private int x;
    { x = 10; }
    Test() { x = 20; }
    Test(int x) { this.x = x; }
    int getX() { return x; }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test(30);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 30. Constructor Test(int x) được gọi với tham số 30. Instance initialization block { x = 10; } chạy trước constructor, nhưng constructor Test(int x) ghi đè giá trị với this.x = x (30). Constructor luôn chạy sau instance block và có thể ghi đè giá trị."
  },
  // Question 51
  {
    question: "What is the maximum number of classes a Java class can extend?",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "Unlimited"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Một class trong Java chỉ có thể extend một class duy nhất (single inheritance). Java không hỗ trợ multiple inheritance cho classes để tránh diamond problem. Tuy nhiên, một class có thể implement nhiều interfaces, và một interface có thể extend nhiều interfaces."
  },
  // Question 52
  {
    question: "What is the output?",
    options: {
      A: "134",
      B: "234",
      C: "24",
      D: "13"
    },
    correctAnswer: "C",
    code: `class A {
    A() { System.out.print("1"); }
    A(int x) { System.out.print("2"); }
}
class B extends A {
    B() { System.out.print("3"); }
    B(int x) { super(x); System.out.print("4"); }
}
public class Main {
    public static void main(String[] args) {
        B b = new B(5);
    }
}`,
    explanation: "Output là '24'. Khi tạo B(5), constructor B(int x) được gọi. super(x) gọi constructor A(int x) của parent class, in '2'. Sau đó constructor B(int x) tiếp tục, in '4'. Default constructor A() không được gọi vì đã gọi A(int x) qua super(x)."
  },
  // Question 53
  {
    question: "Which keyword is used to call parent class constructor?",
    options: {
      A: "this",
      B: "super",
      C: "parent",
      D: "base"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Từ khóa 'super' được dùng để gọi constructor của parent class. super() hoặc super(parameters) phải là câu lệnh đầu tiên trong constructor. 'this' dùng để gọi constructor của cùng class. 'parent' và 'base' không phải là keywords trong Java."
  },
  // Question 54
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class A {
    int x = 10;
}
class B extends A {
    int x = 20;
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.print(a.x);
    }
}`,
    explanation: "Output là 10. Variables không có polymorphism, chỉ methods mới có. Khi truy cập a.x với a có kiểu A, nó truy cập biến x của class A (10), không phải biến x của class B (20). Đây là variable hiding, không phải overriding."
  },
  // Question 55
  {
    question: "Can we override static methods?",
    options: {
      A: "Yes",
      B: "No, it's method hiding",
      C: "Only if made non-static",
      D: "Only in subclasses"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, static methods không thể bị override, chỉ có thể bị hide (ẩn). Khi subclass có static method cùng tên, nó ẩn method của parent class. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Đây là sự khác biệt với instance methods."
  },
  // Question 56
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Đây là runtime polymorphism (đa hình runtime). Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
  },
  // Question 57
  {
    question: "What must be the first statement in a constructor (if explicitly written)?",
    options: {
      A: "System.out.println()",
      B: "super() or this()",
      C: "Variable initialization",
      D: "Method call"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Nếu viết explicitly, câu lệnh đầu tiên trong constructor PHẢI là super() hoặc this(). super() gọi constructor của parent class, this() gọi constructor khác trong cùng class. Nếu không viết, Java tự động thêm super() (gọi default constructor của parent)."
  },
  // Question 58
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class A {
    static void show() { System.out.print("A"); }
}
class B extends A {
    static void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'A'. Static methods không có runtime polymorphism. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Vì a có kiểu A, nên A.show() được gọi, in 'A'. Đây là method hiding, không phải overriding."
  },
  // Question 59
  {
    question: "Which methods cannot be overridden?",
    options: {
      A: "static methods",
      B: "final methods",
      C: "private methods",
      D: "All of the above"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Tất cả các loại trên đều không thể bị override. Static methods bị hide, không phải override. Final methods được thiết kế để không thể override. Private methods không thể thấy từ subclass, nên không thể override. Chỉ non-final, non-static, non-private instance methods mới có thể override."
  },
  // Question 60
  {
    question: "What is the output?",
    options: {
      A: "123",
      B: "213",
      C: "321",
      D: "312"
    },
    correctAnswer: "B",
    code: `class A {
    A() { this(10); System.out.print("1"); }
    A(int x) { System.out.print("2"); }
}
class B extends A {
    B() { System.out.print("3"); }
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
    }
}`,
    explanation: "Output là '213'. Khi tạo B(), constructor B() gọi super() ngầm định, gọi A(). A() gọi this(10), gọi A(int x), in '2'. Sau đó A() tiếp tục, in '1'. Cuối cùng B() tiếp tục, in '3'. Thứ tự: parent constructor (2) -> parent constructor tiếp (1) -> child constructor (3)."
  },
  // Question 61
  {
    question: "Can a subclass have a different return type for an overridden method?",
    options: {
      A: "No",
      B: "Yes, if it's a covariant return type",
      C: "Yes, always",
      D: "Only if it's primitive"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, subclass có thể có return type khác, nhưng CHỈ khi đó là covariant return type (kiểu con của return type của parent method). Ví dụ: parent method return Animal, subclass method có thể return Dog (nếu Dog extends Animal). Return type phải là subtype, không thể là supertype hoặc kiểu không liên quan."
  },
  // Question 62
  {
    question: "What is the output?",
    options: {
      A: "Compiles successfully",
      B: "Compilation error",
      C: "Runtime error",
      D: "Prints AB"
    },
    correctAnswer: "B",
    code: `class A {
    void show() throws IOException {
        System.out.print("A");
    }
}
class B extends A {
    void show() throws Exception {
        System.out.print("B");
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì khi override method, checked exception trong subclass không thể rộng hơn (broader) exception trong parent method. Exception là superclass của IOException, nên không được phép. Overridden method chỉ có thể throw cùng exception, subclass của exception, hoặc không throw exception."
  },
  // Question 63
  {
    question: "What is multilevel inheritance?",
    options: {
      A: "A class extends multiple classes",
      B: "A class is extended by multiple classes",
      C: "A class extends a class that extends another class",
      D: "Not supported in Java"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Multilevel inheritance (kế thừa đa cấp) là khi một class extends một class mà class đó lại extends class khác. Ví dụ: C extends B, B extends A. Java hỗ trợ multilevel inheritance. Multiple inheritance (một class extends nhiều classes) thì không được hỗ trợ."
  },
  // Question 64
  {
    question: "What is the output?",
    options: {
      A: "Compiles successfully",
      B: "Compilation error in class B",
      C: "Runtime error",
      D: "Prints B"
    },
    correctAnswer: "B",
    code: `class A {
    final void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}`,
    explanation: "Lỗi biên dịch trong class B vì cố gắng override method final show() của class A. Final methods không thể bị override. Class B có method show() nhưng không thể override method final của parent class. Phải xóa method show() trong B hoặc thay đổi tên method."
  },
  // Question 65
  {
    question: "What happens if a class doesn't explicitly extend any class?",
    options: {
      A: "Compilation error",
      B: "It implicitly extends Object",
      C: "It becomes abstract",
      D: "It cannot be instantiated"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Nếu class không extend class nào, nó tự động (implicitly) extends class Object. Object là root class của tất cả classes trong Java. Mọi class đều kế thừa từ Object, nên có thể sử dụng các methods như toString(), equals(), hashCode() từ Object class."
  },
  // Question 66
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "0",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "C",
    code: `class A {
    int x = 10;
    A(int x) { this.x = x; }
}
class B extends A {
    B() { System.out.print(x); }
}`,
    explanation: "Lỗi biên dịch xảy ra vì class A chỉ có constructor có tham số A(int x), không có default constructor. Khi B() được gọi, nó cố gắng gọi super() ngầm định (default constructor của A), nhưng A không có default constructor. Phải thêm super(10) hoặc tạo default constructor trong A."
  },
  // Question 67
  {
    question: "Can a constructor be final?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only in abstract classes",
      D: "Only if private"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, constructor không thể là final. Final chỉ áp dụng cho classes, methods, và variables. Constructor không thể được kế thừa nên không cần final. Constructor có thể là private (dùng cho Singleton), nhưng không thể là final."
  },
  // Question 68
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class A {
    void show(int x) { System.out.print("A"); }
}
class B extends A {
    void show(long x) { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
        b.show(10);
    }
}`,
    explanation: "Output là 'A'. Method show(long x) trong B không override show(int x) trong A vì parameter types khác nhau (int vs long). Đây là method overloading, không phải overriding. Khi gọi b.show(10), 10 là int, nên method show(int x) của A được gọi (kế thừa), in 'A'."
  },
  // Question 69
  {
    question: "What is hierarchical inheritance?",
    options: {
      A: "A class extends multiple classes",
      B: "Multiple classes extend a single class",
      C: "A chain of inheritance",
      D: "Not supported in Java"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Hierarchical inheritance (kế thừa phân cấp) là khi nhiều classes extend một class duy nhất. Ví dụ: B extends A, C extends A, D extends A. Tất cả đều kế thừa từ A. Đây là pattern phổ biến trong OOP. Multilevel inheritance là khi có chuỗi: C extends B, B extends A."
  },
  // Question 70
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "5",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `class A {
    A() { show(); }
    void show() { System.out.print("A"); }
}
class B extends A {
    int x = 5;
    void show() { System.out.print(x); }
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
    }
}`,
    explanation: "Output là 0. Khi constructor A() được gọi, nó gọi show() trước khi instance variables của B được khởi tạo. show() của B được gọi (polymorphism), nhưng x chưa được gán giá trị 5, nên x có giá trị mặc định 0. Đây là lý do không nên gọi overridden methods trong constructor."
  },
  // Question 71
  {
    question: "Can we reduce the visibility of an overridden method?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only to protected",
      D: "Only to default"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, không thể giảm visibility của overridden method. Overridden method phải có visibility bằng hoặc rộng hơn method của parent class. Ví dụ: nếu parent method là protected, subclass method có thể là protected hoặc public, nhưng không thể là private hoặc default."
  },
  // Question 72
  {
    question: "What is the output?",
    options: {
      A: "Compiles successfully",
      B: "Compilation error",
      C: "Runtime error",
      D: "Prints B"
    },
    correctAnswer: "B",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    private void show() { System.out.print("B"); }
}`,
    explanation: "Lỗi biên dịch xảy ra vì method show() trong B có visibility private, nhỏ hơn visibility của method show() trong A (default/package-private). Overridden method không thể giảm visibility. Phải giữ nguyên hoặc tăng visibility (protected hoặc public)."
  },
  // Question 73
  {
    question: "What is super.super.method() in Java?",
    options: {
      A: "Calls grandparent method",
      B: "Not valid syntax",
      C: "Calls parent method twice",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: null,
    explanation: "super.super.method() KHÔNG phải là syntax hợp lệ trong Java. Java không cho phép truy cập trực tiếp đến grandparent class. Chỉ có thể dùng super để truy cập parent class. Nếu cần gọi grandparent method, phải override method trong parent class để gọi super.method()."
  },
  // Question 74
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "BA"
    },
    correctAnswer: "C",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { 
        super.show();
        System.out.print("B"); 
    }
}
public class Main {
    public static void main(String[] args) {
        new B().show();
    }
}`,
    explanation: "Output là 'AB'. Method show() trong B override method của A. Trong show() của B, super.show() gọi method của parent class A, in 'A'. Sau đó tiếp tục in 'B'. super được dùng để gọi method của parent class trong overridden method."
  },
  // Question 75
  {
    question: "Can abstract class extend concrete class?",
    options: {
      A: "No",
      B: "Yes",
      C: "Only if concrete class is final",
      D: "Only if concrete class has abstract methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, abstract class có thể extend concrete class. Abstract class có thể kế thừa từ bất kỳ class nào (abstract hoặc concrete). Ví dụ: abstract class B extends A (concrete). Abstract class có thể có abstract methods và concrete methods, và có thể kế thừa tất cả members từ parent class."
  },
  // Question 76
  {
    question: "What is the output?",
    options: {
      A: "Compiles successfully",
      B: "Compilation error",
      C: "Runtime error",
      D: "Prints nothing"
    },
    correctAnswer: "B",
    code: `class A {
    A(int x) { }
}
class B extends A {
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì class A chỉ có constructor có tham số, không có default constructor. Khi tạo B(), constructor B() cố gắng gọi super() ngầm định (default constructor của A), nhưng A không có. Phải thêm constructor B() { super(10); } hoặc tạo default constructor trong A."
  },
  // Question 77
  {
    question: "What is method overriding?",
    options: {
      A: "Same method name, different parameters in same class",
      B: "Same method signature in parent and child class",
      C: "Multiple methods with same name",
      D: "Changing method implementation"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Method overriding là khi subclass có method với cùng signature (tên + tham số) với method của parent class. Overriding cho phép subclass cung cấp implementation riêng. Option A là method overloading (cùng class, khác parameters), không phải overriding."
  },
  // Question 78
  {
    question: "What is the output?",
    options: {
      A: "Compiles successfully",
      B: "Compilation error",
      C: "Runtime error",
      D: "Returns 2"
    },
    correctAnswer: "B",
    code: `class A {
    int show() { return 1; }
}
class B extends A {
    long show() { return 2; }
}`,
    explanation: "Lỗi biên dịch xảy ra vì return type khác nhau (int vs long) không được coi là override hợp lệ. Overriding yêu cầu cùng return type hoặc covariant return type (subtype). long không phải là subtype của int (cả hai đều là primitive types, không có quan hệ kế thừa)."
  },
  // Question 79
  {
    question: "Can we override equals() method?",
    options: {
      A: "No",
      B: "Yes, it's from Object class",
      C: "Only in final classes",
      D: "Only in abstract classes"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, có thể override equals() method vì nó đến từ Object class. equals() là instance method public, không phải final, nên có thể override. Khi override equals(), nên override hashCode() để tuân thủ contract: hai objects bằng nhau phải có cùng hashCode."
  },
  // Question 80
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "BA"
    },
    correctAnswer: "A",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
    void display() { super.show(); }
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
        b.display();
    }
}`,
    explanation: "Output là 'A'. Method display() trong B gọi super.show(), gọi method show() của parent class A, in 'A'. super được dùng để truy cập members của parent class. Method show() của B không được gọi vì display() gọi super.show(), không phải this.show()."
  },
  // Question 81
  {
    question: "What are the two types of polymorphism in Java?",
    options: {
      A: "Static and Dynamic",
      B: "Compile-time and Runtime",
      C: "Method overloading and Method overriding",
      D: "Both B and C"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Cả B và C đều đúng. Polymorphism có hai loại: Compile-time (method overloading) và Runtime (method overriding). Còn được gọi là Static polymorphism (compile-time) và Dynamic polymorphism (runtime). Method overloading là compile-time, method overriding là runtime."
  },
  // Question 82
  {
    question: "What is the output?",
    options: {
      A: "int",
      B: "Integer",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `class Test {
    void show(int x) { System.out.print("int"); }
    void show(Integer x) { System.out.print("Integer"); }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.show(10);
    }
}`,
    explanation: "Output là 'int'. Khi gọi t.show(10), 10 là primitive int. Compiler ưu tiên exact match (int) hơn autoboxing (int -> Integer). Method show(int x) khớp chính xác với primitive int, nên được chọn. Method show(Integer x) yêu cầu autoboxing, chỉ được chọn nếu không có exact match."
  },
  // Question 83
  {
    question: "Which is an example of compile-time polymorphism?",
    options: {
      A: "Method overriding",
      B: "Method overloading",
      C: "Interface implementation",
      D: "Abstract class"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Method overloading là ví dụ của compile-time polymorphism. Compiler quyết định method nào được gọi dựa trên số lượng và kiểu tham số tại compile-time. Method overriding là runtime polymorphism, interface implementation và abstract class cũng là runtime."
  },
  // Question 84
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "ABC"
    },
    correctAnswer: "C",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}
class C extends B {
    void show() { System.out.print("C"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new C();
        a.show();
    }
}`,
    explanation: "Output là 'C'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là C. Method show() của C được gọi (most specific implementation). Trong multilevel inheritance, method của class con nhất (C) được gọi."
  },
  // Question 85
  {
    question: "Can we overload methods by changing only return type?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only if parameters are also different",
      D: "Only for static methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, không thể overload methods chỉ bằng cách thay đổi return type. Method signature chỉ bao gồm method name + parameter list, không bao gồm return type. Để overload, phải thay đổi parameter list (số lượng, kiểu, thứ tự). Return type không đủ để phân biệt methods."
  },
  // Question 86
  {
    question: "What is the output?",
    options: {
      A: "varargs",
      B: "int",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class Test {
    void show(int... x) { System.out.print("varargs"); }
    void show(int x) { System.out.print("int"); }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.show(10);
    }
}`,
    explanation: "Output là 'int'. Khi gọi t.show(10) với một tham số, compiler ưu tiên exact match (show(int x)) hơn varargs (show(int... x)). Varargs chỉ được chọn nếu không có exact match. Nếu gọi t.show(10, 20), varargs sẽ được chọn."
  },
  // Question 87
  {
    question: "What is dynamic method dispatch?",
    options: {
      A: "Calling overloaded methods",
      B: "Runtime resolution of overridden methods",
      C: "Compile-time method binding",
      D: "Static method calling"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Dynamic method dispatch (phân phối method động) là cơ chế runtime resolution của overridden methods. JVM quyết định method nào được gọi dựa trên kiểu thực tế của object tại runtime, không phải kiểu của reference tại compile-time. Đây là cơ chế của runtime polymorphism."
  },
  // Question 88
  {
    question: "What is the output?",
    options: {
      A: "Object",
      B: "String",
      C: "Compilation error",
      D: "NullPointerException"
    },
    correctAnswer: "B",
    code: `class Test {
    void show(Object x) { System.out.print("Object"); }
    void show(String x) { System.out.print("String"); }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.show(null);
    }
}`,
    explanation: "Output là 'String'. Khi gọi t.show(null), compiler chọn method có parameter type cụ thể nhất (most specific). String là subclass của Object, nên show(String x) cụ thể hơn show(Object x). Null có thể được gán cho cả Object và String, nhưng compiler chọn String vì cụ thể hơn."
  },
  // Question 89
  {
    question: "Can we overload static methods?",
    options: {
      A: "No",
      B: "Yes",
      C: "Only with different return types",
      D: "Only in subclasses"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, có thể overload static methods. Overloading chỉ yêu cầu khác parameter list, không phụ thuộc vào static hay non-static. Static methods có thể được overload trong cùng class hoặc subclass. Tuy nhiên, static methods không thể override, chỉ có thể hide."
  },
  // Question 90
  {
    question: "What is the output?",
    options: {
      A: "AAA",
      B: "ABB",
      C: "BBB",
      D: "ABC"
    },
    correctAnswer: "B",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        A a1 = new A();
        A a2 = new B();
        B b = new B();
        a1.show();
        a2.show();
        b.show();
    }
}`,
    explanation: "Output là 'ABB'. a1.show() gọi method của A (a1 là object A), in 'A'. a2.show() gọi method của B (runtime polymorphism, a2 là object B), in 'B'. b.show() gọi method của B (b là object B), in 'B'. Runtime polymorphism chỉ áp dụng cho instance methods."
  },
  // Question 91
  {
    question: "What is covariant return type?",
    options: {
      A: "Different return type in overriding",
      B: "Subtype return type in overriding",
      C: "Same return type in overloading",
      D: "Changing return type to primitive"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Covariant return type là khi overridden method có return type là subtype của return type của parent method. Ví dụ: parent method return Animal, subclass method return Dog (nếu Dog extends Animal). Java hỗ trợ covariant return types từ Java 5. Điều này giúp code type-safe và linh hoạt hơn."
  },
  // Question 92
  {
    question: "What is the output?",
    options: {
      A: "1",
      B: "2",
      C: "12",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    void show(int x, long y) { System.out.print("1"); }
    void show(long x, int y) { System.out.print("2"); }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.show(10, 20);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì ambiguous method call. Cả hai methods đều có thể match với t.show(10, 20): show(int, long) yêu cầu widening int->long cho tham số thứ hai, show(long, int) yêu cầu widening int->long cho tham số đầu. Compiler không thể quyết định method nào, gây lỗi ambiguous."
  },
  // Question 93
  {
    question: "Can constructors be overridden?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only in subclasses",
      D: "Only if public"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, constructors không thể bị override. Constructors không được kế thừa, mỗi class phải có constructor riêng. Subclass có thể có constructor cùng tên với parent class, nhưng đó là constructor mới, không phải override. Constructor không phải là method nên không thể override."
  },
  // Question 94
  {
    question: "What is the output?",
    options: {
      A: "1",
      B: "2",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    Number show() { return 1; }
}
class B extends A {
    Integer show() { return 2; }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.print(a.show());
    }
}`,
    explanation: "Output là 2. Đây là covariant return type - method show() trong B return Integer (subtype của Number). Runtime polymorphism áp dụng, method của B được gọi, return 2. Covariant return type cho phép return type cụ thể hơn trong overridden method, giúp code type-safe hơn."
  },
  // Question 95
  {
    question: "What is ad-hoc polymorphism?",
    options: {
      A: "Runtime polymorphism",
      B: "Compile-time polymorphism/Method overloading",
      C: "Interface polymorphism",
      D: "Abstract polymorphism"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Ad-hoc polymorphism (đa hình tạm thời) là compile-time polymorphism, được thực hiện thông qua method overloading. Compiler quyết định method nào được gọi dựa trên số lượng và kiểu tham số tại compile-time. Khác với parametric polymorphism (generics) và subtype polymorphism (inheritance)."
  },
  // Question 96
  {
    question: "What is the output?",
    options: {
      A: "1",
      B: "2",
      C: "12",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    void show(int x) { System.out.print("1"); }
    void show(int... x) { System.out.print("2"); }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.show(10, 20);
    }
}`,
    explanation: "Output là '2'. Khi gọi t.show(10, 20) với hai tham số, method show(int x) không match (chỉ nhận một tham số). Method show(int... x) match vì varargs có thể nhận nhiều tham số. Varargs được chọn khi không có exact match. Nếu gọi t.show(10), show(int x) sẽ được chọn (exact match)."
  },
  // Question 97
  {
    question: "Can we achieve runtime polymorphism without inheritance?",
    options: {
      A: "Yes, using interfaces",
      B: "No",
      C: "Yes, using method overloading",
      D: "Yes, using static methods"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Có, có thể đạt runtime polymorphism mà không cần inheritance bằng cách sử dụng interfaces. Khi một class implement interface, và có nhiều classes implement cùng interface, ta có thể đạt runtime polymorphism. Ví dụ: List list = new ArrayList() hoặc List list = new LinkedList(). Method overloading là compile-time, không phải runtime."
  },
  // Question 98
  {
    question: "What is the output?",
    options: {
      A: "AB",
      B: "BC",
      C: "AC",
      D: "ABC"
    },
    correctAnswer: "B",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
    void show(int x) { System.out.print("C"); }
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
        b.show();
        b.show(10);
    }
}`,
    explanation: "Output là 'BC'. b.show() gọi method show() không tham số của B (override từ A), in 'B'. b.show(10) gọi method show(int x) của B (overload), in 'C'. Class B có cả overriding (show()) và overloading (show(int x))."
  },
  // Question 99
  {
    question: "What is parametric polymorphism in Java?",
    options: {
      A: "Method overloading",
      B: "Generics",
      C: "Method overriding",
      D: "Abstract classes"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Parametric polymorphism (đa hình tham số) trong Java được thực hiện thông qua Generics. Generics cho phép tạo code có thể hoạt động với nhiều kiểu dữ liệu khác nhau mà vẫn type-safe. Ví dụ: List<String>, List<Integer>. Method overloading là ad-hoc polymorphism, method overriding là subtype polymorphism."
  },
  // Question 100
  {
    question: "What is the output?",
    options: {
      A: "Integer",
      B: "int",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `class Test {
    void show(Integer x) { System.out.print("Integer"); }
    void show(int x) { System.out.print("int"); }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        Integer i = 10;
        t.show(i);
    }
}`,
    explanation: "Output là 'Integer'. Biến i có kiểu Integer (wrapper class). Khi gọi t.show(i), compiler ưu tiên exact match (show(Integer x)) hơn unboxing (Integer -> int). Method show(Integer x) khớp chính xác với kiểu Integer, nên được chọn. Nếu gọi t.show(10) với primitive int, show(int x) sẽ được chọn."
  },
  // Question 101
  {
    question: "What is the binding time for overloaded methods?",
    options: {
      A: "Runtime",
      B: "Compile-time",
      C: "Load-time",
      D: "Dynamic"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Binding time (thời điểm liên kết) cho overloaded methods là compile-time. Compiler quyết định method nào được gọi dựa trên số lượng và kiểu tham số tại thời điểm biên dịch. Đây là static binding. Runtime binding chỉ áp dụng cho overridden methods (dynamic method dispatch)."
  },
  // Question 102
  {
    question: "What is the output?",
    options: {
      A: "AA",
      B: "AB",
      C: "BA",
      D: "BB"
    },
    correctAnswer: "B",
    code: `class A {
    static void show() { System.out.print("A"); }
}
class B extends A {
    static void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        B b = new B();
        a.show();
        b.show();
    }
}`,
    explanation: "Output là 'AB'. Static methods không có runtime polymorphism. a.show() chọn method dựa trên kiểu của reference (A), in 'A'. b.show() chọn method dựa trên kiểu của reference (B), in 'B'. Static methods được bind tại compile-time dựa trên kiểu reference, không phải kiểu object."
  },
  // Question 103
  {
    question: "Can we have different access modifiers for overloaded methods?",
    options: {
      A: "No",
      B: "Yes",
      C: "Only public",
      D: "Only private"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, có thể có access modifiers khác nhau cho overloaded methods. Overloading chỉ yêu cầu khác parameter list, không yêu cầu cùng access modifier. Ví dụ: có thể có public void show(int x) và private void show(String x). Tuy nhiên, điều này không phải là practice tốt vì gây confusion."
  },
  // Question 104
  {
    question: "What is the output?",
    options: {
      A: "byte",
      B: "short",
      C: "int",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    void show(byte x) { System.out.print("byte"); }
    void show(short x) { System.out.print("short"); }
    void show(int x) { System.out.print("int"); }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        byte b = 10;
        t.show(b);
    }
}`,
    explanation: "Output là 'byte'. Khi gọi t.show(b) với b có kiểu byte, compiler ưu tiên exact match (show(byte x)) hơn widening (byte -> short -> int). Method show(byte x) khớp chính xác với kiểu byte, nên được chọn. Widening chỉ xảy ra khi không có exact match."
  },
  // Question 105
  {
    question: "What is the principle behind polymorphism?",
    options: {
      A: "One interface, multiple implementations",
      B: "Multiple interfaces, one implementation",
      C: "One interface, one implementation",
      D: "Multiple interfaces, multiple implementations"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Nguyên tắc đằng sau polymorphism là 'One interface, multiple implementations' (Một interface, nhiều implementations). Cùng một interface hoặc parent class có thể có nhiều implementations khác nhau. Runtime polymorphism cho phép chọn implementation dựa trên kiểu thực tế của object."
  },
  // Question 106
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "I",
      C: "AI",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class A {
    void show() { System.out.print("A"); }
}
interface I {
    default void show() { System.out.print("I"); }
}
class B extends A implements I {
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
        b.show();
    }
}`,
    explanation: "Output là 'A'. Khi class kế thừa từ class và implement interface có cùng method, class method có ưu tiên cao hơn interface default method. Method show() từ class A được ưu tiên hơn default method show() từ interface I. Nếu không có method trong class, default method từ interface sẽ được dùng."
  },
  // Question 107
  {
    question: "Can we overload main method?",
    options: {
      A: "No",
      B: "Yes, but JVM will only call String[] version",
      C: "Yes, and JVM will call all versions",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có thể overload main method. Tuy nhiên, JVM chỉ gọi method main với signature: public static void main(String[] args). Các overloaded versions khác của main có thể được gọi từ code khác, nhưng JVM không tự động gọi chúng. Đây là entry point của Java application."
  },
  // Question 108
  {
    question: "What is the output?",
    options: {
      A: "1",
      B: "2",
      C: "12",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    void show(int x, int y) { System.out.print("1"); }
    void show(Integer x, Integer y) { System.out.print("2"); }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.show(10, 20);
    }
}`,
    explanation: "Output là '1'. Khi gọi t.show(10, 20) với primitive ints, compiler ưu tiên exact match (show(int, int)) hơn autoboxing (int -> Integer). Method show(int x, int y) khớp chính xác với primitive ints, nên được chọn. Autoboxing chỉ xảy ra khi không có exact match."
  },
  // Question 109
  {
    question: "What is the instanceof operator used for in polymorphism?",
    options: {
      A: "To create instances",
      B: "To check object type at runtime",
      C: "To compare objects",
      D: "To cast objects"
    },
    correctAnswer: "B",
    code: null,
    explanation: "instanceof operator được dùng để kiểm tra kiểu của object tại runtime. Nó trả về true nếu object là instance của class hoặc subclass hoặc implement interface được chỉ định. Được dùng trước khi downcast để đảm bảo an toàn. Ví dụ: if (obj instanceof String) { String s = (String)obj; }"
  },
  // Question 110
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        if (a instanceof B) {
            ((B)a).show();
        }
    }
}`,
    explanation: "Output là 'B'. instanceof kiểm tra a có phải là instance của B không (true). Sau đó downcast (B)a và gọi show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast an toàn vì đã kiểm tra instanceof trước."
  },
  // Question 111
  {
    question: "Can we have different exception specifications in overloaded methods?",
    options: {
      A: "No",
      B: "Yes",
      C: "Only checked exceptions",
      D: "Only unchecked exceptions"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, có thể có exception specifications khác nhau cho overloaded methods. Overloading chỉ yêu cầu khác parameter list, không yêu cầu cùng exception. Ví dụ: void show() throws IOException và void show(int x) throws Exception là hợp lệ. Exception không phải là phần của method signature."
  },
  // Question 112
  {
    question: "What is the output?",
    options: {
      A: "0",
      B: "1",
      C: "3",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `class Test {
    void show(String... args) { System.out.print(args.length); }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.show("A", "B", "C");
    }
}`,
    explanation: "Output là 3. Varargs (variable arguments) cho phép truyền nhiều tham số cùng kiểu. args.length trả về số lượng tham số được truyền vào. Ở đây truyền 3 strings (\"A\", \"B\", \"C\"), nên args.length = 3. Varargs được xử lý như một array."
  },
  // Question 113
  {
    question: "What is method overloading based on?",
    options: {
      A: "Method name only",
      B: "Method signature (name + parameters)",
      C: "Return type only",
      D: "Access modifier only"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Method overloading dựa trên method signature, bao gồm method name + parameter list (số lượng, kiểu, thứ tự). Return type, access modifier, và exception không phải là phần của signature, nên không thể dùng để phân biệt overloaded methods."
  },
  // Question 114
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class A {
    void show(int x) { System.out.print("A"); }
}
class B extends A {
    void show(long x) { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show(10);
    }
}`,
    explanation: "Output là 'A'. Method show(long x) trong B không override show(int x) trong A vì parameter types khác nhau (int vs long). Đây là method overloading, không phải overriding. Khi gọi a.show(10), method show(int x) của A được gọi (kế thừa), in 'A'. Runtime polymorphism chỉ áp dụng khi override."
  },
  // Question 115
  {
    question: "What is type casting in context of polymorphism?",
    options: {
      A: "Converting primitive types",
      B: "Converting reference types",
      C: "Creating new objects",
      D: "Copying objects"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Type casting trong context của polymorphism là chuyển đổi reference types (kiểu tham chiếu). Upcasting (A a = new B()) là tự động và an toàn. Downcasting ((B)a) cần explicit cast và nên kiểm tra instanceof trước. Casting không tạo object mới, chỉ thay đổi kiểu reference."
  },
  // Question 116
  {
    question: "What is the output?",
    options: {
      A: "1",
      B: "2",
      C: "12",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    void show(Object x) { System.out.print("1"); }
    void show(Exception x) { System.out.print("2"); }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.show(new RuntimeException());
    }
}`,
    explanation: "Output là '2'. RuntimeException là subclass của Exception. Khi có nhiều methods có thể match, compiler chọn method có parameter type cụ thể nhất (most specific). Exception cụ thể hơn Object, nên show(Exception x) được chọn. Đây là method overloading resolution."
  },
  // Question 117
  {
    question: "Can we achieve polymorphism with private methods?",
    options: {
      A: "Yes",
      B: "No, private methods cannot be overridden",
      C: "Only in same class",
      D: "Only with interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, không thể đạt polymorphism với private methods vì private methods không thể bị override. Private methods chỉ có thể được truy cập trong cùng class, nên subclass không thể thấy hoặc override chúng. Polymorphism yêu cầu method có thể được override, nên cần ít nhất là protected hoặc public."
  },
  // Question 118
  {
    question: "What is the output?",
    options: {
      A: "AA",
      B: "BC",
      C: "AC",
      D: "CC"
    },
    correctAnswer: "B",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}
class C extends B {
    void show() { System.out.print("C"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        B b = new C();
        a.show();
        b.show();
    }
}`,
    explanation: "Output là 'BC'. a.show() với a là object B (kiểu A), runtime polymorphism gọi method của B, in 'B'. b.show() với b là object C (kiểu B), runtime polymorphism gọi method của C, in 'C'. Trong multilevel inheritance, method của class con nhất được gọi."
  },
  // Question 119
  {
    question: "What is the widening conversion priority in method overloading?",
    options: {
      A: "byte -> short -> int -> long -> float -> double",
      B: "int -> long -> float -> double -> Object",
      C: "int -> Integer -> Object",
      D: "All of the above in order"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Tất cả các thứ tự trên đều đúng. Widening conversion priority: primitive widening (byte->short->int->long->float->double), sau đó autoboxing (int->Integer), cuối cùng là widening reference (Integer->Number->Object). Compiler chọn method với ít widening nhất."
  },
  // Question 120
  {
    question: "What is the output?",
    options: {
      A: "float",
      B: "double",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `class Test {
    void show(float x) { System.out.print("float"); }
    void show(double x) { System.out.print("double"); }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.show(10);
    }
}`,
    explanation: "Output là 'float'. Khi gọi t.show(10) với literal 10 (int), compiler chọn widening ít nhất. int có thể widen thành float hoặc double, nhưng float gần hơn trong widening chain (int->long->float->double). Nếu không có show(float), show(double) sẽ được chọn."
  },
  // Question 121
  {
    question: "What is the difference between abstract class and interface?",
    options: {
      A: "Abstract class can have constructors, interface cannot",
      B: "Abstract class can have instance variables, interface has only constants",
      C: "A class can extend one abstract class but implement multiple interfaces",
      D: "All of the above"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Tất cả đều đúng. Abstract class có thể có constructors, instance variables, concrete methods. Interface chỉ có constants (static final), abstract methods (trước Java 8), default/static methods (từ Java 8). Một class chỉ extend một abstract class nhưng có thể implement nhiều interfaces. Abstract class dùng cho 'is-a', interface dùng cho 'can-do'."
  },
  // Question 122
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "BA"
    },
    correctAnswer: "D",
    code: `abstract class A {
    abstract void show();
    void display() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
        a.display();
    }
}`,
    explanation: "Output là 'BA'. a.show() gọi abstract method show() được implement trong B, in 'B' (runtime polymorphism). a.display() gọi concrete method display() từ A, in 'A'. Abstract class có thể có cả abstract methods (phải implement) và concrete methods (kế thừa)."
  },
  // Question 123
  {
    question: "Can an abstract class have a constructor?",
    options: {
      A: "No",
      B: "Yes",
      C: "Only if it has abstract methods",
      D: "Only if it's private"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, abstract class có thể có constructor. Constructor được dùng để khởi tạo instance variables và thực hiện initialization logic. Constructor của abstract class được gọi khi tạo object của concrete subclass. Abstract class không thể được khởi tạo trực tiếp, nhưng constructor vẫn cần thiết cho subclass."
  },
  // Question 124
  {
    question: "What is the output?",
    options: {
      A: "Compiles successfully",
      B: "Compilation error",
      C: "Runtime error",
      D: "Prints 20"
    },
    correctAnswer: "B",
    code: `interface I {
    int x = 10;
}
class A implements I {
    void show() { x = 20; }
}`,
    explanation: "Lỗi biên dịch xảy ra vì biến x trong interface là static final (constant), không thể thay đổi giá trị. Interface variables mặc định là public static final, nên x = 10 là constant. Không thể gán lại x = 20. Nếu cần thay đổi giá trị, phải dùng instance variable trong class, không phải interface variable."
  },
  // Question 125
  {
    question: "Can an abstract method be static?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only in interfaces",
      D: "Only in abstract classes"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, abstract method không thể là static. Abstract methods yêu cầu subclass phải implement chúng, nhưng static methods không thể bị override (chỉ hide). Đây là mâu thuẫn logic. Static methods có thể có trong abstract class, nhưng không thể là abstract."
  },
  // Question 126
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `abstract class A {
    A() { System.out.print("A"); }
}
class B extends A {
    B() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
    }
}`,
    explanation: "Output là 'AB'. Khi tạo B(), constructor của parent class A được gọi trước (thông qua super() ngầm định), in 'A'. Sau đó constructor của B được gọi, in 'B'. Abstract class có thể có constructor, và constructor được gọi khi tạo object của concrete subclass."
  },
  // Question 127
  {
    question: "Can an interface extend another interface?",
    options: {
      A: "No",
      B: "Yes, using extends",
      C: "Yes, using implements",
      D: "Only if both are abstract"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, interface có thể extend interface khác bằng từ khóa 'extends'. Một interface có thể extend nhiều interfaces (multiple inheritance cho interfaces). Ví dụ: interface I3 extends I1, I2. Interface không dùng 'implements', chỉ dùng 'extends' để kế thừa từ interface khác."
  },
  // Question 128
  {
    question: "What is the output?",
    options: {
      A: "I",
      B: "A",
      C: "IA",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `interface I {
    default void show() { System.out.print("I"); }
}
class A implements I {
    public void show() { System.out.print("A"); }
}
public class Main {
    public static void main(String[] args) {
        I i = new A();
        i.show();
    }
}`,
    explanation: "Output là 'A'. Class A implement interface I và override default method show(). Khi class override default method, implementation của class có ưu tiên. Runtime polymorphism áp dụng, method show() của A được gọi, in 'A'. Default method từ interface chỉ được dùng nếu class không override."
  },
  // Question 129
  {
    question: "Can an abstract class have all concrete methods?",
    options: {
      A: "No",
      B: "Yes",
      C: "Only if no abstract methods",
      D: "Only if final"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, abstract class có thể có tất cả concrete methods (không có abstract methods). Abstract class không bắt buộc phải có abstract methods. Abstract class chỉ cần được khai báo là abstract, có thể có tất cả concrete methods. Tuy nhiên, abstract class vẫn không thể được khởi tạo trực tiếp."
  },
  // Question 130
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `abstract class A {
    abstract void show();
}
abstract class B extends A {
}
class C extends B {
    void show() { System.out.print("C"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new C();
        a.show();
    }
}`,
    explanation: "Output là 'C'. Abstract class B extends A nhưng không implement abstract method show(). Class C extends B và implement show(), in 'C'. Abstract method từ A được implement ở class con nhất (C). Runtime polymorphism áp dụng, method show() của C được gọi."
  },
  // Question 131
  {
    question: "What is the default access modifier for interface methods (before Java 8)?",
    options: {
      A: "private",
      B: "protected",
      C: "public",
      D: "default"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Default access modifier cho interface methods (trước Java 8) là public. Tất cả methods trong interface mặc định là public abstract. Từ Java 8, interface có thể có default methods và static methods, nhưng abstract methods vẫn mặc định là public."
  },
  // Question 132
  {
    question: "What is the output?",
    options: {
      A: "Compiles successfully",
      B: "Compilation error",
      C: "Runtime error",
      D: "Prints I1I2"
    },
    correctAnswer: "B",
    code: `interface I1 {
    default void show() { System.out.print("I1"); }
}
interface I2 {
    default void show() { System.out.print("I2"); }
}
class A implements I1, I2 {
}`,
    explanation: "Lỗi biên dịch xảy ra vì class A implement hai interfaces I1 và I2, cả hai đều có default method show() với cùng signature. Điều này gây conflict (xung đột). Class A phải override method show() để giải quyết conflict, hoặc chỉ implement một trong hai interfaces."
  },
  // Question 133
  {
    question: "Can an abstract class be final?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only if no abstract methods",
      D: "Only if private"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, abstract class không thể là final. Abstract class được thiết kế để được kế thừa, trong khi final class không thể được kế thừa. Đây là mâu thuẫn logic. Class không thể vừa abstract (phải kế thừa) vừa final (không thể kế thừa)."
  },
  // Question 134
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `abstract class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Abstract class A có concrete method show(). Class B override method show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract class có thể có cả abstract methods và concrete methods."
  },
  // Question 135
  {
    question: "Can interfaces have static methods?",
    options: {
      A: "No",
      B: "Yes, from Java 8",
      C: "Only default methods",
      D: "Only abstract methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, interfaces có thể có static methods từ Java 8. Static methods trong interface phải có body (implementation) và được gọi qua tên interface (InterfaceName.methodName()). Static methods không thể được override và không được kế thừa bởi implementing classes."
  },
  // Question 136
  {
    question: "What is the output?",
    options: {
      A: "I",
      B: "Compiles successfully",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "C",
    code: `interface I {
    static void show() { System.out.print("I"); }
}
class A implements I {
}
public class Main {
    public static void main(String[] args) {
        A a = new A();
        a.show();
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì static methods trong interface không được kế thừa bởi implementing classes. Static methods chỉ có thể được gọi qua tên interface: I.show(). Không thể gọi a.show() vì static methods không thuộc về instance. Phải gọi I.show() thay vì a.show()."
  },
  // Question 137
  {
    question: "What is a functional interface?",
    options: {
      A: "Interface with only one abstract method",
      B: "Interface with multiple methods",
      C: "Interface with static methods",
      D: "Interface with default methods"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Functional interface là interface có chỉ một abstract method. Functional interface có thể có nhiều default methods và static methods, nhưng chỉ có một abstract method. Ví dụ: Runnable, Comparator. Functional interface được dùng với lambda expressions và method references từ Java 8."
  },
  // Question 138
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `abstract class A {
    abstract void show();
    void show(int x) { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
        b.show(10);
    }
}`,
    explanation: "Output là 'A'. Class B override abstract method show() (không tham số), nhưng kế thừa concrete method show(int x) từ A. Khi gọi b.show(10), method show(int x) của A được gọi (kế thừa), in 'A'. Method overloading cho phép có nhiều methods cùng tên với parameters khác nhau."
  },
  // Question 139
  {
    question: "Can we create an instance of an abstract class?",
    options: {
      A: "Yes",
      B: "No, but we can create anonymous instances",
      C: "Only if it has no abstract methods",
      D: "Only using reflection"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG thể tạo instance trực tiếp của abstract class bằng new AbstractClass(). Tuy nhiên, có thể tạo anonymous instances bằng cách cung cấp implementation cho abstract methods ngay tại chỗ: new AbstractClass() { void abstractMethod() { } }. Đây là anonymous inner class."
  },
  // Question 140
  {
    question: "What is the output?",
    options: {
      A: "I",
      B: "A",
      C: "B",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `interface I {
    void show();
}
abstract class A implements I {
}
class B extends A {
    public void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        I i = new B();
        i.show();
    }
}`,
    explanation: "Output là 'B'. Abstract class A implement interface I nhưng không implement method show(). Class B extends A và implement show(), in 'B'. Abstract class có thể implement interface mà không cần implement tất cả methods, để lại cho subclass. Runtime polymorphism áp dụng, method show() của B được gọi."
  },
  // Question 141
  {
    question: "Can abstract method be private?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only in abstract classes",
      D: "Only in interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, abstract method không thể là private. Abstract methods yêu cầu subclass phải implement chúng, nhưng private methods không thể được truy cập từ subclass. Đây là mâu thuẫn logic. Abstract methods phải có ít nhất là protected hoặc public để subclass có thể override."
  },
  // Question 142
  {
    question: "What is the output?",
    options: {
      A: "0",
      B: "10",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `abstract class A {
    abstract int show();
}
class B extends A {
    int show() { return 10; }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.print(a.show());
    }
}`,
    explanation: "Output là 10. Abstract method show() trong A được implement trong B, return 10. Runtime polymorphism áp dụng, method show() của B được gọi, return 10. Abstract methods có thể có return type, và subclass phải implement với cùng return type hoặc covariant return type."
  },
  // Question 143
  {
    question: "What is the diamond problem in interfaces?",
    options: {
      A: "Multiple inheritance conflict",
      B: "Interface extending multiple interfaces",
      C: "Ambiguity when implementing multiple interfaces with same default methods",
      D: "Cannot create diamond shape"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Diamond problem trong interfaces là ambiguity (sự mơ hồ) khi một class implement nhiều interfaces có cùng default methods. Khi hai interfaces có default method cùng signature, class phải override method đó để giải quyết conflict. Đây là vấn đề của multiple inheritance trong interfaces."
  },
  // Question 144
  {
    question: "What is the output?",
    options: {
      A: "0",
      B: "10",
      C: "null",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `interface I {
    int x = 10;
}
class A implements I {
    void show() { System.out.print(x); }
}
public class Main {
    public static void main(String[] args) {
        new A().show();
    }
}`,
    explanation: "Output là 10. Interface variable x mặc định là public static final (constant), có giá trị 10. Class A implement I và có thể truy cập x. Interface variables được kế thừa bởi implementing classes và có thể được truy cập trực tiếp (I.x) hoặc qua instance (x)."
  },
  // Question 145
  {
    question: "Can an interface extend an abstract class?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only if abstract class has no methods",
      D: "Only if both are abstract"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, interface không thể extend abstract class. Interface chỉ có thể extend interface khác (bằng từ khóa extends). Interface không thể extend class (abstract hoặc concrete). Class có thể implement interface, nhưng interface không thể extend class."
  },
  // Question 146
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "0",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `abstract class A {
    A() { show(); }
    abstract void show();
}
class B extends A {
    int x = 10;
    void show() { System.out.print(x); }
}
public class Main {
    public static void main(String[] args) {
        new B();
    }
}`,
    explanation: "Output là 0. Khi constructor A() được gọi, nó gọi show() trước khi instance variables của B được khởi tạo. show() của B được gọi (polymorphism), nhưng x chưa được gán giá trị 10, nên x có giá trị mặc định 0. Đây là lý do không nên gọi abstract/overridden methods trong constructor."
  },
  // Question 147
  {
    question: "Can interfaces have private methods?",
    options: {
      A: "No",
      B: "Yes, from Java 9",
      C: "Only static private methods",
      D: "Only default private methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, interfaces có thể có private methods từ Java 9. Private methods trong interface được dùng để chia sẻ code giữa default methods và static methods trong cùng interface. Private methods không thể được truy cập từ bên ngoài interface, chỉ có thể được gọi từ default methods và static methods trong cùng interface."
  },
  // Question 148
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "Compilation error",
      C: "Runtime error",
      D: "Prints show twice"
    },
    correctAnswer: "A",
    code: `interface I1 {
    void show();
}
interface I2 {
    void show();
}
class A implements I1, I2 {
    public void show() { System.out.print("A"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new A();
        a.show();
    }
}`,
    explanation: "Output là 'A'. Class A implement cả I1 và I2, cả hai đều có abstract method show() với cùng signature. Một implementation duy nhất của show() trong A đáp ứng cả hai interfaces. Không có conflict vì cả hai đều là abstract methods, không phải default methods."
  },
  // Question 149
  {
    question: "What is the purpose of abstraction?",
    options: {
      A: "To hide implementation details",
      B: "To show all details",
      C: "To reduce code",
      D: "To increase performance"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Mục đích của abstraction (trừu tượng) là ẩn implementation details (chi tiết triển khai) và chỉ hiển thị những gì cần thiết. Abstraction cho phép tập trung vào 'what' (làm gì) thay vì 'how' (làm như thế nào). Được thực hiện thông qua abstract classes và interfaces."
  },
  // Question 150
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "ABC"
    },
    correctAnswer: "C",
    code: `abstract class A {
    abstract void show();
}
class B extends A {
    void show() { System.out.print("B"); }
}
class C extends B {
    void show() { System.out.print("C"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new C();
        a.show();
    }
}`,
    explanation: "Output là 'C'. Abstract method show() trong A được implement trong B, sau đó B bị override bởi C. Runtime polymorphism áp dụng, method show() của class con nhất (C) được gọi, in 'C'. Trong multilevel inheritance, method của class con nhất được ưu tiên."
  },
  // Question 151
  {
    question: "Can abstract class implement interface without implementing its methods?",
    options: {
      A: "No",
      B: "Yes",
      C: "Only if abstract class is also abstract",
      D: "Only if interface is functional"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, abstract class có thể implement interface mà không cần implement methods. Abstract class có thể để lại việc implement methods cho subclass. Điều này cho phép abstract class định nghĩa contract từ interface và để subclass implement chi tiết."
  },
  // Question 152
  {
    question: "What is the output?",
    options: {
      A: "I",
      B: "Compilation error",
      C: "Runtime error",
      D: "Nothing"
    },
    correctAnswer: "A",
    code: `interface I {
    default void show() { display(); }
    private void display() { System.out.print("I"); }
}
class A implements I {
}
public class Main {
    public static void main(String[] args) {
        new A().show();
    }
}`,
    explanation: "Output là 'I'. Interface I có default method show() gọi private method display(). Class A implement I và kế thừa default method show(). Khi gọi a.show(), default method show() được gọi, gọi private method display(), in 'I'. Private methods trong interface (từ Java 9) có thể được gọi từ default methods."
  },
  // Question 153
  {
    question: "What is marker interface?",
    options: {
      A: "Interface with methods",
      B: "Interface with no methods",
      C: "Interface with default methods",
      D: "Interface with static methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Marker interface là interface không có methods (empty interface). Marker interface được dùng để đánh dấu (mark) một class có một đặc tính nào đó. Ví dụ: Serializable, Cloneable. Từ Java 5, annotations được dùng thay cho marker interfaces trong nhiều trường hợp."
  },
  // Question 154
  {
    question: "What is the output?",
    options: {
      A: "Compiles successfully",
      B: "Compilation error",
      C: "Runtime error",
      D: "Abstract class cannot have final methods"
    },
    correctAnswer: "B",
    code: `abstract class A {
    final abstract void show();
}`,
    explanation: "Lỗi biên dịch xảy ra vì method không thể vừa final vừa abstract. Final methods không thể bị override, trong khi abstract methods yêu cầu subclass phải implement chúng. Đây là mâu thuẫn logic. Method phải là final hoặc abstract, không thể cả hai."
  },
  // Question 155
  {
    question: "Can interface variables be non-static?",
    options: {
      A: "Yes",
      B: "No, they are implicitly static and final",
      C: "Only if declared explicitly",
      D: "Only in functional interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, interface variables không thể là non-static. Tất cả variables trong interface mặc định là public static final (constants). Không thể khai báo instance variables trong interface. Interface chỉ có thể có constants, không có instance variables."
  },
  // Question 156
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "Compilation error",
      C: "Runtime error",
      D: "Nothing"
    },
    correctAnswer: "A",
    code: `interface I {
    void show();
}
class A {
    void show() { System.out.print("A"); }
}
class B extends A implements I {
}
public class Main {
    public static void main(String[] args) {
        I i = new B();
        i.show();
    }
}`,
    explanation: "Output là 'A'. Class B kế thừa method show() từ class A. Class B implement interface I, nhưng không override show(), nên sử dụng method show() được kế thừa từ A. Runtime polymorphism áp dụng, method show() của A được gọi, in 'A'."
  },
  // Question 157
  {
    question: "What is the difference between abstract method and concrete method?",
    options: {
      A: "Abstract has no body, concrete has body",
      B: "Abstract is in interface, concrete is in class",
      C: "Abstract is public, concrete is private",
      D: "No difference"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Sự khác biệt chính giữa abstract method và concrete method là abstract method không có body (implementation), concrete method có body. Abstract methods chỉ có signature, yêu cầu subclass phải implement. Concrete methods có implementation đầy đủ và có thể được gọi trực tiếp."
  },
  // Question 158
  {
    question: "What is the output?",
    options: {
      A: "Compiles successfully",
      B: "Compilation error",
      C: "Runtime error",
      D: "Prints B"
    },
    correctAnswer: "B",
    code: `abstract class A {
    abstract void show();
}
class B extends A {
    void show() throws IOException { 
        System.out.print("B"); 
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì abstract method show() trong A không throws exception, nhưng overridden method show() trong B throws IOException. Overridden method không thể throw checked exception rộng hơn (broader) exception của parent method. Chỉ có thể throw cùng exception, subclass của exception, hoặc không throw exception."
  },
  // Question 159
  {
    question: "Can we have a concrete method in an interface?",
    options: {
      A: "No",
      B: "Yes, default and static methods",
      C: "Only default methods",
      D: "Only static methods"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có, interface có thể có concrete methods từ Java 8: default methods và static methods. Default methods có body và có thể được kế thừa bởi implementing classes. Static methods có body và được gọi qua tên interface. Trước Java 8, interface chỉ có abstract methods."
  },
  // Question 160
  {
    question: "What is the output?",
    options: {
      A: "I",
      B: "A",
      C: "B",
      D: "IB"
    },
    correctAnswer: "C",
    code: `interface I {
    default void show() { System.out.print("I"); }
}
abstract class A implements I {
}
class B extends A {
    public void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Abstract class A implement interface I và kế thừa default method show(). Class B extends A và override show(), in 'B'. Runtime polymorphism áp dụng, method show() của B được gọi. Class method có ưu tiên cao hơn interface default method."
  },
  // Question 161
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "ClassCastException"
    },
    correctAnswer: "B",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        ((B)a).show();
    }
}`,
    explanation: "Output là 'B'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast an toàn vì object thực tế là B. Không có ClassCastException vì object là instance của B."
  },
  // Question 162
  {
    question: "What is the Liskov Substitution Principle?",
    options: {
      A: "Objects of superclass should be replaceable with objects of subclass",
      B: "Objects should be immutable",
      C: "Classes should be final",
      D: "Methods should be static"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Liskov Substitution Principle (Nguyên tắc thay thế Liskov) là một trong các nguyên tắc SOLID. Nó nói rằng objects của superclass nên có thể được thay thế bởi objects của subclass mà không làm thay đổi hành vi của chương trình. Subclass phải có thể thay thế parent class mà không phá vỡ functionality."
  },
  // Question 163
  {
    question: "What is the output?",
    options: {
      A: "10 10",
      B: "20 20",
      C: "10 20",
      D: "20 10"
    },
    correctAnswer: "C",
    code: `class Outer {
    int x = 10;
    class Inner {
        int x = 20;
        void show() {
            System.out.print(Outer.this.x + " " + this.x);
        }
    }
}
public class Main {
    public static void main(String[] args) {
        Outer.Inner i = new Outer().new Inner();
        i.show();
    }
}`,
    explanation: "Output là '10 20'. Inner class có biến x riêng (20) che khuất biến x của outer class (10). Outer.this.x truy cập biến x của outer class (10), this.x truy cập biến x của inner class (20). Outer.this được dùng để truy cập members của outer class khi bị che khuất."
  },
  // Question 164
  {
    question: "What is composition over inheritance?",
    options: {
      A: "Using \"has-a\" relationship instead of \"is-a\"",
      B: "Using inheritance always",
      C: "Using interfaces instead of classes",
      D: "Using abstract classes"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Composition over inheritance (Ưu tiên composition hơn inheritance) là nguyên tắc sử dụng mối quan hệ \"has-a\" (composition) thay vì \"is-a\" (inheritance) khi có thể. Composition linh hoạt hơn, dễ thay đổi và test hơn. Inheritance tạo tight coupling, composition tạo loose coupling."
  },
  // Question 165
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error in class B",
      D: "Compilation error in Main"
    },
    correctAnswer: "D",
    code: `class A {
    void show() throws Exception {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Lỗi biên dịch trong Main vì method show() trong A throws Exception (checked exception), nên khi gọi a.show() trong main(), phải handle exception (try-catch hoặc throws). Overridden method trong B không throws exception là hợp lệ (có thể giảm exception), nhưng khi gọi qua reference type A, vẫn phải handle exception."
  },
  // Question 166
  {
    question: "What is shallow copy vs deep copy?",
    options: {
      A: "Shallow copies references, deep copies objects",
      B: "Shallow is faster",
      C: "Deep is better",
      D: "Both A and B"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Shallow copy (sao chép nông) chỉ sao chép references, không sao chép objects được tham chiếu. Deep copy (sao chép sâu) sao chép cả objects, tạo objects mới hoàn toàn độc lập. Shallow copy nhanh hơn nhưng có thể gây side effects. Deep copy an toàn hơn nhưng chậm hơn."
  },
  // Question 167
  {
    question: "What is the output?",
    options: {
      A: "10 10",
      B: "20 20",
      C: "10 20",
      D: "20 10"
    },
    correctAnswer: "C",
    code: `class A implements Cloneable {
    int x = 10;
    A clone() throws CloneNotSupportedException {
        return (A) super.clone();
    }
}
public class Main {
    public static void main(String[] args) throws Exception {
        A a1 = new A();
        A a2 = a1.clone();
        a2.x = 20;
        System.out.print(a1.x + " " + a2.x);
    }
}`,
    explanation: "Output là '10 20'. Method clone() tạo shallow copy của object. a2 là bản sao của a1, nhưng là object riêng biệt. Khi thay đổi a2.x = 20, chỉ a2 bị ảnh hưởng, a1.x vẫn là 10. Vì x là primitive int, shallow copy đủ để tạo object độc lập."
  },
  // Question 168
  {
    question: "What is the Single Responsibility Principle?",
    options: {
      A: "A class should have only one reason to change",
      B: "A class should have only one method",
      C: "A class should have only one variable",
      D: "A class should be used once"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Single Responsibility Principle (Nguyên tắc trách nhiệm đơn) là một trong các nguyên tắc SOLID. Nó nói rằng một class chỉ nên có một lý do để thay đổi. Class nên có một trách nhiệm duy nhất, giúp code dễ bảo trì, test và mở rộng hơn."
  },
  // Question 169
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class A {
    synchronized void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Method show() trong B override method của A. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Synchronized modifier không phải là phần của method signature, nên có thể override synchronized method bằng non-synchronized method."
  },
  // Question 170
  {
    question: "What is the Open/Closed Principle?",
    options: {
      A: "Classes should be open for extension, closed for modification",
      B: "Classes should be open for everything",
      C: "Classes should be closed always",
      D: "Classes should be abstract"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Open/Closed Principle (Nguyên tắc mở/đóng) là một trong các nguyên tắc SOLID. Nó nói rằng classes nên mở cho extension (mở rộng) nhưng đóng cho modification (sửa đổi). Có thể thêm functionality mới thông qua inheritance hoặc composition mà không cần sửa code hiện có."
  },
  // Question 171
  {
    question: "What is the output?",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "TUE"
    },
    correctAnswer: "B",
    code: `enum Day {
    MON, TUE, WED;
    void show() { System.out.print(this.ordinal()); }
}
public class Main {
    public static void main(String[] args) {
        Day.TUE.show();
    }
}`,
    explanation: "Output là 1. Enum Day có các constants MON, TUE, WED. ordinal() trả về vị trí của enum constant (0-based). MON = 0, TUE = 1, WED = 2. Day.TUE.show() gọi method show() trên TUE, in ordinal() của TUE là 1."
  },
  // Question 172
  {
    question: "What is association in OOP?",
    options: {
      A: "Relationship between two classes",
      B: "Creating objects",
      C: "Destroying objects",
      D: "Copying objects"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Association (liên kết) trong OOP là mối quan hệ giữa hai classes, cho phép một object sử dụng hoặc tương tác với object khác. Association có thể là one-to-one, one-to-many, many-to-one, hoặc many-to-many. Đây là mối quan hệ cơ bản nhất trong OOP."
  },
  // Question 173
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "30",
      D: "40"
    },
    correctAnswer: "D",
    code: `class A {
    static int x = 10;
    static { x = 20; }
    { x = 30; }
    A() { x = 40; }
}
public class Main {
    public static void main(String[] args) {
        A a1 = new A();
        A a2 = new A();
        System.out.print(A.x);
    }
}`,
    explanation: "Output là 40. Static variable x được chia sẻ bởi tất cả instances. Thứ tự thực thi: khởi tạo x = 10, static block gán x = 20, instance block gán x = 30 (khi tạo a1), constructor gán x = 40 (khi tạo a1). Khi tạo a2, instance block và constructor lại gán x = 30 và 40. Giá trị cuối cùng là 40."
  },
  // Question 174
  {
    question: "What is aggregation in OOP?",
    options: {
      A: "Weak \"has-a\" relationship",
      B: "Strong \"has-a\" relationship",
      C: "\"is-a\" relationship",
      D: "No relationship"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Aggregation (tập hợp) trong OOP là mối quan hệ \"has-a\" yếu (weak has-a relationship). Trong aggregation, child object có thể tồn tại độc lập với parent object. Ví dụ: Department has-a Professor. Nếu Department bị xóa, Professor vẫn tồn tại. Composition là strong has-a, child không thể tồn tại độc lập."
  },
  // Question 175
  {
    question: "What is the output?",
    options: {
      A: "Compiles successfully",
      B: "Compilation error",
      C: "Runtime error",
      D: "Prints both"
    },
    correctAnswer: "B",
    code: `class A {
    void show(List<String> list) {
        System.out.print("String");
    }
    void show(List<Integer> list) {
        System.out.print("Integer");
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì method overloading với generic types List<String> và List<Integer> không được phép. Do type erasure, cả hai methods có cùng signature sau khi compile (List list), gây conflict. Generic types bị xóa tại compile-time, nên không thể dùng để phân biệt overloaded methods."
  },
  // Question 176
  {
    question: "What is dependency injection?",
    options: {
      A: "Providing dependencies from outside",
      B: "Creating dependencies inside",
      C: "Destroying dependencies",
      D: "Copying dependencies"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Dependency Injection (Tiêm phụ thuộc) là pattern cung cấp dependencies từ bên ngoài thay vì tạo bên trong class. Dependencies được inject qua constructor, setter, hoặc interface. Điều này giúp giảm coupling, tăng testability, và tuân thủ Dependency Inversion Principle."
  },
  // Question 177
  {
    question: "What is the output?",
    options: {
      A: "Hello",
      B: "Compilation error",
      C: "Runtime error",
      D: "null"
    },
    correctAnswer: "A",
    code: `interface I<T> {
    void show(T t);
}
class A implements I<String> {
    public void show(String s) { 
        System.out.print(s); 
    }
}
public class Main {
    public static void main(String[] args) {
        I<String> i = new A();
        i.show("Hello");
    }
}`,
    explanation: "Output là 'Hello'. Generic interface I<T> được implement với type String. Class A implement I<String> và implement method show(String s). Runtime polymorphism áp dụng, method show() của A được gọi với tham số \"Hello\", in 'Hello'."
  },
  // Question 178
  {
    question: "What is the Interface Segregation Principle?",
    options: {
      A: "Clients shouldn't be forced to depend on interfaces they don't use",
      B: "Use as many interfaces as possible",
      C: "Don't use interfaces",
      D: "Interfaces should be large"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Interface Segregation Principle (Nguyên tắc phân tách interface) là một trong các nguyên tắc SOLID. Nó nói rằng clients không nên bị buộc phải depend on interfaces mà họ không sử dụng. Interfaces nên nhỏ và cụ thể, không nên có methods không cần thiết. Tốt hơn là có nhiều interfaces nhỏ thay vì một interface lớn."
  },
  // Question 179
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "0",
      C: "Compilation error",
      D: "null"
    },
    correctAnswer: "A",
    code: `class A<T> {
    T obj;
    A(T obj) { this.obj = obj; }
    T get() { return obj; }
}
public class Main {
    public static void main(String[] args) {
        A<Integer> a = new A<>(10);
        System.out.print(a.get());
    }
}`,
    explanation: "Output là 10. Generic class A<T> được khởi tạo với type Integer. Constructor A(10) nhận Integer 10 và gán cho obj. Method get() trả về obj có kiểu Integer, in ra 10. Generics cho phép type-safe code và tránh casting."
  },
  // Question 180
  {
    question: "What is the Dependency Inversion Principle?",
    options: {
      A: "High-level modules shouldn't depend on low-level modules",
      B: "All modules should depend on each other",
      C: "No dependencies allowed",
      D: "Only low-level dependencies"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Dependency Inversion Principle (Nguyên tắc đảo ngược phụ thuộc) là một trong các nguyên tắc SOLID. Nó nói rằng high-level modules không nên depend on low-level modules, cả hai nên depend on abstractions (interfaces hoặc abstract classes). Điều này giúp giảm coupling và tăng flexibility."
  },
  // Question 181
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "ClassCastException"
    },
    correctAnswer: "C",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}
class C extends B {
    void show() { System.out.print("C"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new C();
        B b = (B) a;
        b.show();
    }
}`,
    explanation: "Output là 'C'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của class con nhất (C) được gọi, in 'C'. Downcast an toàn vì object thực tế là C (instance của B). Không có ClassCastException."
  },
  // Question 182
  {
    question: "What is the purpose of the volatile keyword in OOP context?",
    options: {
      A: "Variables are visible to all threads",
      B: "Methods cannot be overridden",
      C: "Classes cannot be inherited",
      D: "Objects are immutable"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Volatile keyword đảm bảo variables được visible (nhìn thấy) bởi tất cả threads. Volatile variables được đọc và ghi trực tiếp từ main memory, không qua thread-local cache. Điều này đảm bảo thread-safety cho simple read/write operations. Volatile không phải là về inheritance hay immutability."
  },
  // Question 183
  {
    question: "What is the output?",
    options: {
      A: "true",
      B: "false",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `class A {
    int x;
    A() { }
    A(int x) { this.x = x; }
    boolean equals(Object obj) {
        return this.x == ((A)obj).x;
    }
}
public class Main {
    public static void main(String[] args) {
        A a1 = new A(10);
        A a2 = new A(10);
        System.out.print(a1.equals(a2));
    }
}`,
    explanation: "Output là 'true'. Method equals() được override để so sánh giá trị x của hai objects. a1.x = 10 và a2.x = 10, nên this.x == ((A)obj).x trả về true. Method equals() so sánh nội dung (value equality), không phải reference equality (==)."
  },
  // Question 184
  {
    question: "What is method chaining in OOP?",
    options: {
      A: "Calling multiple methods in sequence on same object",
      B: "Overriding methods",
      C: "Overloading methods",
      D: "Creating method chains"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Method chaining (chuỗi phương thức) là gọi nhiều methods liên tiếp trên cùng một object. Methods trả về this (hoặc object hiện tại) để cho phép chaining. Ví dụ: obj.method1().method2().method3(). Method chaining giúp code ngắn gọn và dễ đọc hơn."
  },
  // Question 185
  {
    question: "What is the output?",
    options: {
      A: "AA",
      B: "BB",
      C: "AB",
      D: "BA"
    },
    correctAnswer: "B",
    code: `class A {
    A show() {
        System.out.print("A");
        return this;
    }
}
class B extends A {
    B show() {
        System.out.print("B");
        return this;
    }
}
public class Main {
    public static void main(String[] args) {
        new B().show().show();
    }
}`,
    explanation: "Output là 'BB'. Method chaining: new B().show() gọi show() của B, in 'B' và return this (B). Sau đó .show() lại gọi show() của B (vì return type là B), in 'B' lần nữa. Covariant return type cho phép return type cụ thể hơn trong overridden method."
  },
  // Question 186
  {
    question: "What is lazy initialization?",
    options: {
      A: "Delaying object creation until needed",
      B: "Creating objects immediately",
      C: "Destroying objects early",
      D: "Copying objects lazily"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lazy initialization (khởi tạo lười) là trì hoãn việc tạo object cho đến khi thực sự cần thiết. Thay vì tạo object ngay khi khởi tạo, object được tạo lần đầu tiên khi được truy cập. Điều này giúp tiết kiệm memory và tăng performance nếu object không được sử dụng."
  },
  // Question 187
  {
    question: "What is the output?",
    options: {
      A: "true",
      B: "false",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `class A {
    private static A instance;
    private A() { }
    static A getInstance() {
        if (instance == null)
            instance = new A();
        return instance;
    }
}
public class Main {
    public static void main(String[] args) {
        A a1 = A.getInstance();
        A a2 = A.getInstance();
        System.out.print(a1 == a2);
    }
}`,
    explanation: "Output là 'true'. Đây là Singleton pattern (lazy initialization). Private constructor ngăn tạo object từ bên ngoài. Static method getInstance() trả về cùng một instance. a1 và a2 đều trỏ đến cùng một object (instance), nên a1 == a2 trả về true. Singleton đảm bảo chỉ có một instance duy nhất."
  },
  // Question 188
  {
    question: "What is the purpose of the transient keyword?",
    options: {
      A: "Variables are not serialized",
      B: "Methods cannot be overridden",
      C: "Classes cannot be inherited",
      D: "Variables are thread-safe"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Transient keyword đảm bảo variables không được serialized (tuần tự hóa). Khi object được serialize, transient variables không được lưu vào stream. Khi deserialize, transient variables có giá trị mặc định (0, null, false). Transient được dùng cho sensitive data hoặc data không cần persist."
  },
  // Question 189
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "0",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A implements Serializable {
    transient int x = 10;
}
public class Main {
    public static void main(String[] args) throws Exception {
        A a1 = new A();
        ObjectOutputStream out = new ObjectOutputStream(
            new FileOutputStream("test.ser"));
        out.writeObject(a1);
        out.close();
        
        ObjectInputStream in = new ObjectInputStream(
            new FileInputStream("test.ser"));
        A a2 = (A) in.readObject();
        in.close();
        
        System.out.print(a2.x);
    }
}`,
    explanation: "Output là 0. Transient variable x không được serialized. Khi serialize a1, x = 10 không được lưu. Khi deserialize a2, x có giá trị mặc định 0 (vì là int). Transient variables được reset về giá trị mặc định sau khi deserialize."
  },
  // Question 190
  {
    question: "What is the difference between composition and aggregation?",
    options: {
      A: "Composition is strong ownership, aggregation is weak",
      B: "Composition uses interfaces, aggregation uses classes",
      C: "No difference",
      D: "Aggregation is inheritance"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Sự khác biệt giữa composition và aggregation: Composition là strong ownership (sở hữu mạnh), child object không thể tồn tại độc lập với parent. Aggregation là weak ownership (sở hữu yếu), child object có thể tồn tại độc lập. Ví dụ: Car-Engine là composition, Department-Professor là aggregation."
  },
  // Question 191
  {
    question: "What is the output?",
    options: {
      A: "AA",
      B: "AB",
      C: "BB",
      D: "BA"
    },
    correctAnswer: "B",
    code: `class A {
    void show() { System.out.print("A"); }
}
class B extends A {
    void show() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        A[] arr = {new A(), new B()};
        for (A a : arr)
            a.show();
    }
}`,
    explanation: "Output là 'AB'. Array chứa object A và object B. Vòng lặp for-each duyệt qua array, gọi a.show() cho mỗi object. Runtime polymorphism áp dụng: object A gọi method của A (in 'A'), object B gọi method của B (in 'B'). Polymorphism cho phép xử lý nhiều types qua cùng interface."
  },
  // Question 192
  {
    question: "What is method reference in Java 8?",
    options: {
      A: "Shorthand notation for lambda expressions",
      B: "Reference to a variable",
      C: "Reference to a class",
      D: "Reference to an object"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Method reference (tham chiếu phương thức) trong Java 8 là shorthand notation (ký hiệu viết tắt) cho lambda expressions. Thay vì viết lambda, có thể dùng method reference: Class::method hoặc object::method. Method reference ngắn gọn hơn và dễ đọc hơn lambda trong nhiều trường hợp."
  },
  // Question 193
  {
    question: "What is the output?",
    options: {
      A: "Hello",
      B: "Compilation error",
      C: "Runtime error",
      D: "null"
    },
    correctAnswer: "A",
    code: `interface I {
    void show(String s);
    }
class A {
    static void display(String s) {
        System.out.print(s);
    }
}
public class Main {
    public static void main(String[] args) {
        I i = A::display;
        i.show("Hello");
    }
}`,
    explanation: "Output là 'Hello'. Method reference A::display tham chiếu đến static method display() của class A. Interface I được implement bằng method reference. Khi gọi i.show(\"Hello\"), nó gọi A.display(\"Hello\"), in 'Hello'. Method reference cho phép sử dụng existing methods như functional interface implementations."
  },
  // Question 194
  {
    question: "What is double dispatch in OOP?",
    options: {
      A: "Method call depends on runtime types of two objects",
      B: "Calling method twice",
      C: "Two methods with same name",
      D: "Overloading with two parameters"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Double dispatch (phân phối kép) trong OOP là khi method call phụ thuộc vào runtime types của hai objects. Java không hỗ trợ double dispatch trực tiếp, nhưng có thể đạt được thông qua Visitor pattern hoặc method overloading kết hợp với polymorphism. Double dispatch cho phép chọn method dựa trên types của cả hai objects."
  },
  // Question 195
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "NullPointerException",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `class A {
    String show() { return "A"; }
}
class B extends A {
    String show() { return "B"; }
}
public class Main {
    public static void main(String[] args) {
        A[] arr = new B[5];
        System.out.print(arr[0].show());
    }
}`,
    explanation: "NullPointerException xảy ra vì array arr được khai báo nhưng các elements chưa được khởi tạo. arr[0] có giá trị null (default value cho reference types). Khi gọi arr[0].show(), cố gắng gọi method trên null reference, gây NullPointerException. Phải khởi tạo elements: arr[0] = new B() trước khi sử dụng."
  },
  // Question 196
  {
    question: "What is the template method pattern?",
    options: {
      A: "Define skeleton in superclass, let subclasses override steps",
      B: "Using templates",
      C: "Creating methods",
      D: "Overloading methods"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Template Method Pattern là design pattern định nghĩa skeleton (khung) của algorithm trong superclass, để subclasses override các steps cụ thể. Superclass định nghĩa template method (có thể là final) gọi các abstract methods, subclasses implement các abstract methods. Pattern này tuân thủ Open/Closed Principle."
  },
  // Question 197
  {
    question: "What is the output?",
    options: {
      A: "12",
      B: "21",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `abstract class A {
    final void process() {
        step1();
        step2();
    }
    abstract void step1();
    abstract void step2();
}
class B extends A {
    void step1() { System.out.print("1"); }
    void step2() { System.out.print("2"); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.process();
    }
}`,
    explanation: "Output là '12'. Đây là Template Method Pattern. Abstract class A định nghĩa final method process() gọi step1() và step2(). Class B extends A và implement step1() (in '1') và step2() (in '2'). Khi gọi a.process(), nó gọi step1() trước (in '1'), sau đó step2() (in '2'), kết quả là '12'."
  },
  // Question 198
  {
    question: "What is covariance and contravariance in OOP?",
    options: {
      A: "Related to inheritance and method overriding",
      B: "Types of polymorphism",
      C: "Types of encapsulation",
      D: "Types of abstraction"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Covariance và contravariance trong OOP liên quan đến inheritance và method overriding. Covariance: return type của overridden method có thể là subtype của return type trong parent class. Contravariance: parameter types của overridden method có thể là supertype của parameter types trong parent class. Java hỗ trợ covariance cho return types từ Java 5."
  },
  // Question 199
  {
    question: "What is the output?",
    options: {
      A: "100",
      B: "0",
      C: "Compilation error",
      D: "null"
    },
    correctAnswer: "A",
    code: `class A<T extends Number> {
    T obj;
    A(T obj) { this.obj = obj; }
    void show() { System.out.print(obj); }
}
public class Main {
    public static void main(String[] args) {
        A<Integer> a = new A<>(100);
        a.show();
    }
}`,
    explanation: "Output là 100. Generic class A có bounded type parameter T extends Number, nghĩa là T phải là Number hoặc subclass của Number. Integer extends Number, nên A<Integer> hợp lệ. Constructor nhận Integer(100), gán vào obj. Method show() in obj, kết quả là 100. Bounded generics đảm bảo type safety và cho phép sử dụng methods của Number."
  },
  // Question 200
  {
    question: "What is the Law of Demeter (Principle of Least Knowledge)?",
    options: {
      A: "An object should only communicate with its immediate friends",
      B: "An object should know everything",
      C: "An object should communicate with all objects",
      D: "An object should be isolated"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Law of Demeter (Nguyên tắc ít biết nhất) quy định một object chỉ nên giao tiếp với immediate friends (bạn bè trực tiếp) của nó. Immediate friends bao gồm: chính object đó, objects được truyền vào như parameters, objects được tạo trong method, và direct component objects. Tránh gọi methods trên objects được trả về từ method calls khác (a.getB().getC().method() là vi phạm)."
  },
  // Question 201
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    final int x = 10;
    void change() {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.change();
        System.out.print(t.x);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì biến final không thể thay đổi giá trị sau khi đã được khởi tạo. Trong code này, biến x được khai báo là final và đã được gán giá trị 10, nên không thể gán lại giá trị 20 trong method change()."
  },
  // Question 202
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    final int x;
    Test() {
        x = 10;
    }
    Test(int y) {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test(20);
        System.out.print(t.x);
    }
}`,
    explanation: "Output là 20. Biến final có thể được khởi tạo trong constructor, nhưng chỉ một lần. Ở đây, constructor Test(int y) được gọi với tham số 20, nên x được gán giá trị 20. Mỗi constructor có thể gán giá trị khác nhau cho biến final, miễn là chỉ gán một lần trong mỗi constructor."
  },
  // Question 203
  {
    question: "Can a static method access instance variables?",
    options: {
      A: "Yes, always",
      B: "No, directly",
      C: "Yes, through object reference",
      D: "Only if variable is final"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Static method KHÔNG THỂ truy cập trực tiếp instance variables vì static method thuộc về class, không thuộc về instance. Tuy nhiên, static method có thể truy cập instance variables thông qua object reference (ví dụ: obj.variable). Static method có thể truy cập static variables trực tiếp."
  },
  // Question 204
  {
    question: "What is the output?",
    options: {
      A: "10 20",
      B: "20 20",
      C: "10 10",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    static int x = 10;
    void change() {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t1 = new Test();
        Test t2 = new Test();
        t1.change();
        System.out.print(t1.x + " " + t2.x);
    }
}`,
    explanation: "Output là '20 20'. Biến static x được chia sẻ bởi tất cả instances của class Test. Khi t1.change() được gọi, x được thay đổi thành 20. Vì x là static, cả t1.x và t2.x đều trỏ đến cùng một biến, nên cả hai đều là 20."
  },
  // Question 205
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "C",
    code: `class A {
    final void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì method final không thể bị override. Class B cố gắng override method show() của class A, nhưng method này được khai báo là final trong class A. Final methods không thể bị override bởi subclass."
  },
  // Question 206
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    static final int x = 10;
    static {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        System.out.print(Test.x);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì biến static final đã được khởi tạo với giá trị 10, không thể thay đổi trong static block. Static final variables là constants và phải được khởi tạo tại thời điểm khai báo hoặc trong static block, nhưng không thể gán lại sau khi đã khởi tạo."
  },
  // Question 207
  {
    question: "Can a final class have abstract methods?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only if methods are static",
      D: "Only if class is also abstract"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, final class không thể có abstract methods. Final class không thể được kế thừa, trong khi abstract methods yêu cầu subclass phải implement chúng. Đây là mâu thuẫn logic. Nếu class là final, nó phải là concrete class (không có abstract methods)."
  },
  // Question 208
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "30",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `class Test {
    static int x = 10;
    static {
        x = 20;
    }
    static {
        x = 30;
    }
}
public class Main {
    public static void main(String[] args) {
        System.out.print(Test.x);
    }
}`,
    explanation: "Output là 30. Static blocks được thực thi theo thứ tự xuất hiện trong code khi class được load. Đầu tiên x = 10 (khởi tạo), sau đó static block đầu tiên gán x = 20, cuối cùng static block thứ hai gán x = 30. Giá trị cuối cùng là 30."
  },
  // Question 209
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class A {
    static void show() {
        System.out.print("A");
    }
}
class B extends A {
    static void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'A'. Static methods không thể bị override, chỉ có thể bị hide (ẩn). Khi gọi static method qua reference, method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Vì a có kiểu A, nên A.show() được gọi."
  },
  // Question 210
  {
    question: "Can a static variable be initialized in a constructor?",
    options: {
      A: "Yes, always",
      B: "No, it's initialized before constructor",
      C: "Yes, but value is reset each time",
      D: "Only if it's final"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Có thể khởi tạo static variable trong constructor, nhưng giá trị sẽ bị reset mỗi lần constructor được gọi. Static variables được khởi tạo khi class được load (trước constructor), nhưng có thể được gán lại trong constructor. Tuy nhiên, đây không phải là practice tốt."
  },
  // Question 211
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    final int x;
    {
        x = 10;
    }
    Test() {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        System.out.print(t.x);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì biến final x đã được gán giá trị 10 trong instance initialization block, không thể gán lại trong constructor. Biến final chỉ có thể được gán một lần. Thứ tự thực thi: instance block chạy trước constructor, nên x đã được gán trước khi constructor chạy."
  },
  // Question 212
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    final int x;
    Test() {
        System.out.print(x);
        x = 10;
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì cố gắng sử dụng biến final x trước khi khởi tạo. Biến final phải được khởi tạo trước khi sử dụng. Trong code này, System.out.print(x) được gọi trước khi x = 10, gây lỗi biên dịch. Phải gán x trước khi sử dụng."
  },
  // Question 213
  {
    question: "Can a static method be overridden?",
    options: {
      A: "Yes",
      B: "No, it's method hiding",
      C: "Only in subclasses",
      D: "Only if made non-static"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, static methods không thể bị override, chỉ có thể bị hide (ẩn). Khi subclass có static method cùng tên, nó ẩn method của parent class, không phải override. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime)."
  },
  // Question 214
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "30",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    static int x = 10;
    int y = 20;
    static void show() {
        System.out.print(x);
    }
    void display() {
        System.out.print(y);
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        Test.show();
        t.display();
    }
}`,
    explanation: "Output là '1020' (không có khoảng trắng). Test.show() in static variable x = 10. t.display() in instance variable y = 20. Static method show() chỉ có thể truy cập static variables, instance method display() có thể truy cập cả static và instance variables."
  },
  // Question 215
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    final static int x = 10;
    static void change() {
        x = 20;
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì biến static final đã được khởi tạo với giá trị 10, không thể thay đổi. Static final variables là constants và không thể gán lại sau khi đã khởi tạo. Method change() cố gắng gán x = 20, gây lỗi biên dịch."
  },
  // Question 216
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    final int x = 10;
    void show() {
        final int y = 20;
        System.out.print(x);
    }
}
public class Main {
    public static void main(String[] args) {
        new Test().show();
    }
}`,
    explanation: "Output là 10. Instance variable final x = 10 được in ra. Biến local final y = 20 không được sử dụng. Final variables (cả instance và local) có thể được đọc bình thường, chỉ không thể gán lại sau khi đã khởi tạo."
  },
  // Question 217
  {
    question: "Can a final method be abstract?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only in interfaces",
      D: "Only in abstract classes"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, final method không thể là abstract. Final methods không thể bị override, trong khi abstract methods yêu cầu subclass phải implement chúng. Đây là mâu thuẫn logic. Method không thể vừa final (không thể override) vừa abstract (phải override)."
  },
  // Question 218
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    static int x = 10;
    static void change() {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        Test.change();
        System.out.print(Test.x);
    }
}`,
    explanation: "Output là 20. Static method change() thay đổi giá trị của static variable x từ 10 thành 20. Static methods có thể truy cập và thay đổi static variables. Sau khi gọi Test.change(), x = 20, nên in ra 20."
  },
  // Question 219
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "C",
    code: `final class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì class A được khai báo là final, không thể được kế thừa. Class B cố gắng extend class A, nhưng final class không cho phép điều này. Final classes được dùng để ngăn kế thừa, đảm bảo implementation không bị thay đổi."
  },
  // Question 220
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    final int x;
    Test(int x) {
        this.x = x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test(10);
        System.out.print(t.x);
    }
}`,
    explanation: "Output là 10. Biến final x được khởi tạo trong constructor với giá trị tham số x = 10. Đây là cách hợp lệ để khởi tạo final variable - trong constructor. Biến final phải được khởi tạo trước khi constructor kết thúc."
  },
  // Question 221
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    final int x;
    void init() {
        x = 10;
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì biến final x không được khởi tạo. Final instance variables phải được khởi tạo tại thời điểm khai báo, trong instance initialization block, hoặc trong constructor. Không thể khởi tạo trong method thông thường như init()."
  },
  // Question 222
  {
    question: "What is the output?",
    options: {
      A: "10 10",
      B: "10 20",
      C: "20 20",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `class Test {
    static int x = 10;
    Test() {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t1 = new Test();
        Test t2 = new Test();
        System.out.print(t1.x + " " + t2.x);
    }
}`,
    explanation: "Output là '20 20'. Biến static x được chia sẻ bởi tất cả instances. Khi t1 được tạo, constructor gán x = 20. Khi t2 được tạo, constructor lại gán x = 20. Cả t1.x và t2.x đều trỏ đến cùng một biến static, nên cả hai đều là 20."
  },
  // Question 223
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `class A {
    static void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A.show();
    }
}`,
    explanation: "Output là 'A'. A.show() gọi static method show() của class A, in 'A'. Static methods không có runtime polymorphism, method được chọn dựa trên class name (A), không phải object type. Method show() trong B là instance method, không override static method của A."
  },
  // Question 224
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    final int x = 10;
    Test() {
        System.out.print(x);
    }
}
class Sub extends Test {
    final int x = 20;
}
public class Main {
    public static void main(String[] args) {
        Sub s = new Sub();
        System.out.print(s.x);
    }
}`,
    explanation: "Output là '1020'. Khi tạo Sub(), constructor của Test được gọi trước, in x của Test (10). Sau đó constructor của Sub chạy. Khi in s.x, biến x của Sub (20) được in vì variables không có polymorphism, truy cập dựa trên reference type. Đây là variable hiding."
  },
  // Question 225
  {
    question: "Can a static block throw checked exceptions?",
    options: {
      A: "Yes",
      B: "No",
      C: "Only unchecked exceptions",
      D: "Only if caught"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG, static block không thể throw checked exceptions. Static block được thực thi khi class được load, không có nơi nào để catch checked exceptions. Static block chỉ có thể throw unchecked exceptions (RuntimeException và subclasses). Nếu cần xử lý checked exceptions, phải catch trong static block."
  },
  // Question 226
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    static final int x;
    static {
        x = 10;
    }
}
public class Main {
    public static void main(String[] args) {
        System.out.print(Test.x);
    }
}`,
    explanation: "Output là 10. Static final variable x được khởi tạo trong static block với giá trị 10. Static final variables phải được khởi tạo tại thời điểm khai báo hoặc trong static block. Sau khi static block chạy, x = 10."
  },
  // Question 227
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    static final int x;
    static {
        x = 10;
    }
    static {
        x = 20;
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì static final variable x đã được gán giá trị 10 trong static block đầu tiên, không thể gán lại trong static block thứ hai. Static final variables chỉ có thể được gán một lần. Phải gán trong một static block duy nhất hoặc tại thời điểm khai báo."
  },
  // Question 228
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    final int x = 10;
    void show() {
        final int x = 20;
        System.out.print(x);
    }
}
public class Main {
    public static void main(String[] args) {
        new Test().show();
    }
}`,
    explanation: "Output là 20. Biến local final x = 20 che khuất (shadow) instance variable final x = 10. Khi in x trong method show(), nó in biến local (20), không phải instance variable (10). Để truy cập instance variable, cần dùng this.x."
  },
  // Question 229
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    static int x = 10;
    static void show() {
        int x = 20;
        System.out.print(Test.x);
    }
}
public class Main {
    public static void main(String[] args) {
        Test.show();
    }
}`,
    explanation: "Output là 10. Biến local x = 20 che khuất static variable x = 10. Khi in Test.x, nó truy cập static variable qua class name, in 10. Để truy cập static variable khi bị che khuất, phải dùng class name (Test.x), không thể dùng this vì static methods không có this."
  },
  // Question 230
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "C",
    code: `class A {
    final void show() {
        System.out.print("A");
    }
}
class B extends A {
    static void show() {
        System.out.print("B");
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì không thể có static method và instance method cùng tên trong cùng class hierarchy. Method show() trong B có signature giống show() trong A, nhưng một cái là static, một cái là instance. Điều này gây conflict. Static methods không thể override instance methods."
  },
  // Question 231
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    final int x;
    static void show() {
        System.out.print(x);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì static method show() cố gắng truy cập instance variable x. Static methods không thể truy cập instance variables trực tiếp vì chúng thuộc về class, không thuộc về instance. Phải truy cập qua object reference hoặc làm x thành static."
  },
  // Question 232
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    static int x = 10;
    {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        System.out.print(Test.x);
    }
}`,
    explanation: "Output là 10. Instance initialization block { x = 20; } chỉ chạy khi tạo object. Trong code này, không có object nào được tạo, chỉ truy cập static variable Test.x. Static variable x giữ giá trị khởi tạo 10. Instance block không chạy nếu không tạo object."
  },
  // Question 233
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    static int x = 10;
    static {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        System.out.print(Test.x);
    }
}`,
    explanation: "Output là 20. Static block được thực thi khi class được load, trước khi main() chạy. Static block gán x = 20, ghi đè giá trị khởi tạo x = 10. Thứ tự: khởi tạo x = 10, sau đó static block chạy và gán x = 20. Giá trị cuối cùng là 20."
  },
  // Question 234
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `class A {
    static void show() {
        System.out.print("A");
    }
}
class B extends A {
    static void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        A.show();
    }
}`,
    explanation: "Output là 'A'. A.show() gọi static method show() của class A, in 'A'. Static methods không có runtime polymorphism, method được chọn dựa trên class name (A), không phải object type. Mặc dù a là object B, nhưng A.show() gọi method của A."
  },
  // Question 235
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    final int x = 10;
    void change() {
        this.x = 20;
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì biến final x đã được khởi tạo với giá trị 10, không thể thay đổi. Final variables chỉ có thể được gán một lần. Method change() cố gắng gán this.x = 20, gây lỗi biên dịch. Final variables không thể được gán lại sau khi đã khởi tạo."
  },
  // Question 236
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    final int x = 10;
    Test(int x) {
        System.out.print(this.x);
    }
}
public class Main {
    public static void main(String[] args) {
        new Test(20);
    }
}`,
    explanation: "Output là 10. Biến final x = 10 đã được khởi tạo tại thời điểm khai báo. Tham số x = 20 của constructor che khuất instance variable x, nhưng this.x truy cập instance variable (10). Final variable x không thể thay đổi, nên this.x = 10."
  },
  // Question 237
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    static int x = 10;
    void show() {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.show();
        System.out.print(Test.x);
    }
}`,
    explanation: "Output là 20. Instance method show() có thể truy cập và thay đổi static variable x. Khi gọi t.show(), x được thay đổi từ 10 thành 20. Static variable được chia sẻ bởi tất cả instances, nên Test.x = 20 sau khi show() được gọi."
  },
  // Question 238
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "C",
    code: `final class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
}`,
    explanation: "Lỗi biên dịch xảy ra vì class A được khai báo là final, không thể được kế thừa. Class B cố gắng extend class A, nhưng final class không cho phép điều này. Final classes được dùng để ngăn kế thừa, đảm bảo implementation không bị thay đổi."
  },
  // Question 239
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    final int x;
    static {
        x = 10;
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì static block không thể khởi tạo instance variable. Static block chỉ có thể khởi tạo static variables. Final instance variable x phải được khởi tạo trong instance initialization block hoặc constructor, không thể trong static block."
  },
  // Question 240
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    static final int x = 10;
    static void show() {
        System.out.print(x);
    }
}
public class Main {
    public static void main(String[] args) {
        Test.show();
    }
}`,
    explanation: "Output là 10. Static final variable x = 10 là constant. Static method show() có thể truy cập static final variable x và in ra 10. Static final variables là constants và không thể thay đổi sau khi khởi tạo."
  },
  // Question 241
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    final int x = 10;
    Test() {
        System.out.print(x);
    }
}
class Sub extends Test {
    final int x = 20;
    Sub() {
        System.out.print(x);
    }
}
public class Main {
    public static void main(String[] args) {
        new Sub();
    }
}`,
    explanation: "Output là '1020'. Khi tạo Sub(), constructor của Test được gọi trước, in x của Test (10). Sau đó constructor của Sub chạy, in x của Sub (20). Mỗi class có biến final x riêng (variable hiding). Thứ tự: parent constructor (10) -> child constructor (20)."
  },
  // Question 242
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    static final int x;
    Test() {
        x = 10;
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì static final variable x không thể được khởi tạo trong constructor. Static final variables phải được khởi tạo tại thời điểm khai báo hoặc trong static block, không thể trong constructor. Constructor chỉ chạy khi tạo object, trong khi static variables được khởi tạo khi class được load."
  },
  // Question 243
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    static int x = 10;
    static void show() {
        int x = 20;
        System.out.print(Test.x);
    }
}
public class Main {
    public static void main(String[] args) {
        Test.show();
    }
}`,
    explanation: "Output là 10. Biến local x = 20 che khuất static variable x = 10. Khi in Test.x, nó truy cập static variable qua class name, in 10. Để truy cập static variable khi bị che khuất, phải dùng class name (Test.x), không thể dùng this vì static methods không có this."
  },
  // Question 244
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `class A {
    final void show() {
        System.out.print("A");
    }
}
class B extends A {
    void display() {
        show();
    }
}
public class Main {
    public static void main(String[] args) {
        new B().display();
    }
}`,
    explanation: "Output là 'A'. Class B kế thừa final method show() từ A. Final methods không thể bị override, nhưng có thể được gọi từ subclass. Method display() trong B gọi show() từ A, in 'A'. Final methods có thể được kế thừa và sử dụng, chỉ không thể override."
  },
  // Question 245
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    static int x = 10;
    {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        new Test();
        System.out.print(Test.x);
    }
}`,
    explanation: "Output là 20. Instance initialization block { x = 20; } chạy khi tạo object. Khi gọi new Test(), instance block chạy và gán x = 20, ghi đè giá trị khởi tạo x = 10. Instance block chạy trước constructor, nên x = 20 sau khi object được tạo."
  },
  // Question 246
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    final int x = 10;
    void show() {
        final int x;
        System.out.print(x);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì biến local final x chưa được khởi tạo trước khi sử dụng. Final local variables phải được khởi tạo trước khi sử dụng. Không thể in x khi x chưa có giá trị. Phải gán giá trị cho x trước khi in."
  },
  // Question 247
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    static final int x = 10;
    static void show() {
        System.out.print(x);
    }
}
public class Main {
    public static void main(String[] args) {
        Test.show();
    }
}`,
    explanation: "Output là 10. Static final variable x = 10 là constant. Static method show() có thể truy cập static final variable x và in ra 10. Static final variables là constants và không thể thay đổi sau khi khởi tạo. Static methods có thể truy cập static variables trực tiếp."
  },
  // Question 248
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    final int x;
    Test() {
        x = 10;
    }
    Test(int y) {
        this();
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test(20);
        System.out.print(t.x);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì biến final x đã được gán giá trị 10 trong constructor Test() (qua this()), không thể gán lại trong constructor Test(int y). Final variables chỉ có thể được gán một lần. Nếu code compile được, output sẽ là 20 vì constructor Test(int y) gán x = 20 sau this(), nhưng thực tế code này không compile được."
  },
  // Question 249
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    final int x = 10;
    void show() {
        x++;
        System.out.print(x);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì biến final x không thể thay đổi giá trị. x++ cố gắng tăng giá trị của x, nhưng final variables không thể được gán lại sau khi đã khởi tạo. Final variables là constants, không thể thay đổi bằng bất kỳ cách nào (++, --, =, etc.)."
  },
  // Question 250
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    static int x = 10;
    static void show() {
        System.out.print(x);
    }
}
public class Main {
    public static void main(String[] args) {
        Test.show();
    }
}`,
    explanation: "Output là 10. Static method show() có thể truy cập static variable x trực tiếp và in ra 10. Static methods có thể truy cập static variables mà không cần instance. Static variable x = 10 được khởi tạo khi class được load."
  },
  // Question 251
  {
    question: "What breaks encapsulation in this code?",
    options: {
      A: "Private variable x",
      B: "Public getter method",
      C: "Returning reference to mutable array",
      D: "Nothing, it's properly encapsulated"
    },
    correctAnswer: "C",
    code: `class Test {
    private int[] arr = {1, 2, 3};
    public int[] getArr() {
        return arr;
    }
}`,
    explanation: "Returning reference to mutable array (trả về reference đến array có thể thay đổi) phá vỡ encapsulation. Method getArr() return reference đến array gốc, cho phép code bên ngoài thay đổi array bên trong object. Nên return defensive copy: return Arrays.copyOf(arr, arr.length) để bảo vệ dữ liệu."
  },
  // Question 252
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private int x = 10;
    public void setX(int x) {
        this.x = x;
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.setX(20);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) thay đổi x từ 10 thành 20. Method getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói đúng: private variable + public getter/setter."
  },
  // Question 253
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    private int x = 10;
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.x = 20;
        System.out.print(t.getX());
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì cố gắng truy cập private variable x từ bên ngoài class. Private variables chỉ có thể được truy cập trong cùng class. Không thể gán t.x = 20 từ bên ngoài. Phải dùng setter method để thay đổi giá trị của private variable."
  },
  // Question 254
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    private int x = 10;
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        System.out.print(t.x);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì cố gắng truy cập private variable x từ bên ngoài class. Private variables chỉ có thể được truy cập trong cùng class. Không thể in t.x từ bên ngoài. Phải dùng getter method để đọc giá trị của private variable."
  },
  // Question 255
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private int x = 10;
    public void setX(int x) {
        if (x > 0) {
            this.x = x;
        }
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.setX(20);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) có validation (x > 0), vì 20 > 0 nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20. Đây là encapsulation với validation."
  },
  // Question 256
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    private int x = 10;
    public void setX(int x) {
        if (x < 0) {
            return;
        }
        this.x = x;
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.setX(-5);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 10. Method setX(-5) có validation (x < 0), vì -5 < 0 nên return sớm, không thực thi this.x = x. Giá trị của x không thay đổi, vẫn là 10. Method getX() trả về giá trị ban đầu 10. Validation trong setter bảo vệ dữ liệu khỏi giá trị không hợp lệ."
  },
  // Question 257
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private int x = 10;
    public Test(int x) {
        this.x = x;
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test(20);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 20. Constructor Test(20) nhận tham số x = 20 và gán this.x = 20, ghi đè giá trị khởi tạo x = 10. Constructor chạy sau khi khởi tạo instance variables, nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20."
  },
  // Question 258
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    private int x = 10;
    public void change(int x) {
        x = 20;
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.change(20);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 10. Trong method change(int x), tham số x là biến local, không phải instance variable. Khi gán x = 20, chỉ biến local được thay đổi, không ảnh hưởng đến instance variable this.x. Để thay đổi instance variable, cần dùng this.x = x. Giá trị của instance variable x vẫn là 10."
  },
  // Question 259
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private int x = 10;
    public void change(int x) {
        this.x = x;
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.change(20);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 20. Method change(20) sử dụng this.x = x để gán giá trị tham số (20) cho instance variable. this.x truy cập instance variable, x là tham số. Method getX() trả về giá trị hiện tại của instance variable x là 20. Đây là cách đúng để thay đổi instance variable khi bị che khuất bởi tham số."
  },
  // Question 260
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    private int x = 10;
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 10. Private variable x = 10 được đóng gói, chỉ có thể truy cập qua public getter method getX(). Method getX() trả về giá trị của private variable x là 10. Đây là cách đóng gói đúng: private variable + public getter để đọc giá trị."
  },
  // Question 261
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Đây là runtime polymorphism (đa hình runtime). Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
  },
  // Question 262
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `class A {
    A() {
        System.out.print("A");
    }
}
class B extends A {
    B() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        new B();
    }
}`,
    explanation: "Output là 'AB'. Khi tạo B(), constructor của parent class A được gọi trước (thông qua super() ngầm định), in 'A'. Sau đó constructor của B được gọi, in 'B'. Thứ tự luôn là: parent constructor trước, child constructor sau."
  },
  // Question 263
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class A {
    int x = 10;
}
class B extends A {
    int x = 20;
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.print(a.x);
    }
}`,
    explanation: "Output là 10. Variables không có polymorphism, chỉ methods mới có. Khi truy cập a.x với a có kiểu A, nó truy cập biến x của class A (10), không phải biến x của class B (20). Đây là variable hiding, không phải overriding. Variables được bind tại compile-time dựa trên reference type."
  },
  // Question 264
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class A {
    int getX() {
        return 10;
    }
}
class B extends A {
    int getX() {
        return 20;
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.print(a.getX());
    }
}`,
    explanation: "Output là 20. Method getX() trong B override method getX() trong A. Runtime polymorphism áp dụng, method getX() của B được gọi, return 20. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method của B được gọi."
  },
  // Question 265
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        super.show();
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        new B().show();
    }
}`,
    explanation: "Output là 'AB'. Method show() trong B override method của A. Trong show() của B, super.show() gọi method của parent class A, in 'A'. Sau đó tiếp tục in 'B'. super được dùng để gọi method của parent class trong overridden method."
  },
  // Question 266
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "C",
    code: `class A {
    private void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì method show() trong A là private, không thể được truy cập từ bên ngoài class A. Mặc dù B có method show() public, nhưng khi gọi a.show() với a có kiểu A, compiler chỉ thấy method private show() của A, không thể truy cập được."
  },
  // Question 267
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class A {
    protected int x = 10;
}
class B extends A {
    void show() {
        System.out.print(x);
    }
    void change() {
        x = 20;
    }
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
        b.change();
        b.show();
    }
}`,
    explanation: "Output là 20. Protected variable x trong A có thể được truy cập và thay đổi từ subclass B. Method change() thay đổi x từ 10 thành 20. Method show() in giá trị hiện tại của x là 20. Protected members có thể được truy cập trong subclass."
  },
  // Question 268
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        ((B)a).show();
    }
}`,
    explanation: "Output là 'B'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
  },
  // Question 269
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class A {
    int x = 10;
    void show() {
        System.out.print(x);
    }
}
class B extends A {
    int x = 20;
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 10. Method show() được định nghĩa trong A và truy cập x. Khi gọi a.show(), method show() của A được gọi (không override), và nó truy cập x của A (10), không phải x của B (20). Variables không có polymorphism, method show() truy cập x trong scope của nó (class A)."
  },
  // Question 270
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
        A a = b;
        a.show();
    }
}`,
    explanation: "Output là 'B'. Upcast A a = b chuyển đổi reference từ kiểu B sang kiểu A. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Upcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
  },
  // Question 271
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
class C extends B {
    void show() {
        System.out.print("C");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new C();
        a.show();
    }
}`,
    explanation: "Output là 'C'. Trong multilevel inheritance, method show() được override ở mỗi level. Runtime polymorphism áp dụng, method show() của class con nhất (C) được gọi, in 'C'. Method của class con nhất luôn được ưu tiên trong runtime polymorphism."
  },
  // Question 272
  {
    question: "What is the output?",
    options: {
      A: "int",
      B: "Integer",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `class Test {
    void show(int x) {
        System.out.print("int");
    }
    void show(Integer x) {
        System.out.print("Integer");
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.show(10);
    }
}`,
    explanation: "Output là 'int'. Khi gọi t.show(10), 10 là primitive int. Compiler ưu tiên exact match (int) hơn autoboxing (int -> Integer). Method show(int x) khớp chính xác với primitive int, nên được chọn. Method show(Integer x) yêu cầu autoboxing, chỉ được chọn nếu không có exact match."
  },
  // Question 273
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A[] arr = {new A(), new B()};
        for (A a : arr) {
            a.show();
        }
    }
}`,
    explanation: "Output là 'AB'. Array chứa object A và object B. Vòng lặp for-each duyệt qua array, gọi a.show() cho mỗi object. Runtime polymorphism áp dụng: object A gọi method của A (in 'A'), object B gọi method của B (in 'B'). Polymorphism cho phép xử lý nhiều types qua cùng interface."
  },
  // Question 274
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        if (a instanceof B) {
            ((B)a).show();
        }
    }
}`,
    explanation: "Output là 'B'. instanceof kiểm tra a có phải là instance của B không (true). Sau đó downcast (B)a và gọi show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast an toàn vì đã kiểm tra instanceof trước."
  },
  // Question 275
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "Compilation error"
    },
    correctAnswer: "C",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        super.show();
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        new B().show();
    }
}`,
    explanation: "Output là 'AB'. Method show() trong B override method của A. Trong show() của B, super.show() gọi method của parent class A, in 'A'. Sau đó tiếp tục in 'B'. super được dùng để gọi method của parent class trong overridden method."
  },
  // Question 276
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
  },
  // Question 277
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `class A {
    static void show() {
        System.out.print("A");
    }
}
class B extends A {
    static void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'A'. Static methods không có runtime polymorphism. Method được chọn dựa trên kiểu của reference (compile-time), không phải kiểu của object (runtime). Vì a có kiểu A, nên A.show() được gọi, in 'A'. Đây là method hiding, không phải overriding."
  },
  // Question 278
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        B b = new B();
        A a = b;
        a.show();
    }
}`,
    explanation: "Output là 'B'. Upcast A a = b chuyển đổi reference từ kiểu B sang kiểu A. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Upcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
  },
  // Question 279
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        B b = (B)a;
        b.show();
    }
}`,
    explanation: "Output là 'B'. Downcast (B)a chuyển đổi reference từ kiểu A sang kiểu B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Downcast không thay đổi object, chỉ thay đổi kiểu reference. Object vẫn là B, nên method của B được gọi."
  },
  // Question 280
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
  },
  // Question 281
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `abstract class A {
    abstract void show();
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Abstract method show() trong A được implement trong B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract classes cho phép định nghĩa contract và để subclass implement chi tiết."
  },
  // Question 282
  {
    question: "What is the output?",
    options: {
      A: "I",
      B: "A",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "A",
    code: `interface I {
    void show();
}
class A implements I {
    public void show() {
        System.out.print("A");
    }
}
public class Main {
    public static void main(String[] args) {
        I i = new A();
        i.show();
    }
}`,
    explanation: "Output là 'A'. Class A implement interface I và implement method show(). Runtime polymorphism áp dụng, method show() của A được gọi, in 'A'. Interfaces cho phép đạt runtime polymorphism mà không cần inheritance."
  },
  // Question 283
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `interface I {
    void show();
}
class A implements I {
    public void show() {
        System.out.print("A");
    }
}
class B extends A {
    public void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        I i = new B();
        i.show();
    }
}`,
    explanation: "Output là 'B'. Class A implement interface I, class B extends A và override show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Trong multilevel inheritance với interfaces, method của class con nhất được ưu tiên."
  },
  // Question 284
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `abstract class A {
    abstract void show();
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Abstract method show() trong A được implement trong B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract classes cho phép định nghĩa contract và để subclass implement chi tiết."
  },
  // Question 285
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
  },
  // Question 286
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `interface I {
    void show();
}
class A implements I {
    public void show() {
        System.out.print("A");
    }
}
class B extends A {
    public void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        I i = new B();
        i.show();
    }
}`,
    explanation: "Output là 'B'. Class A implement interface I, class B extends A và override show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Interfaces cho phép đạt runtime polymorphism qua reference type I."
  },
  // Question 287
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
  },
  // Question 288
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `abstract class A {
    abstract void show();
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Abstract method show() trong A được implement trong B. Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Abstract classes cho phép định nghĩa contract và để subclass implement chi tiết."
  },
  // Question 289
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `interface I {
    void show();
}
class A implements I {
    public void show() {
        System.out.print("A");
    }
}
class B extends A {
    public void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        I i = new B();
        i.show();
    }
}`,
    explanation: "Output là 'B'. Class A implement interface I, class B extends A và override show(). Runtime polymorphism áp dụng, method show() của B được gọi, in 'B'. Interfaces cho phép đạt runtime polymorphism qua reference type I."
  },
  // Question 290
  {
    question: "What is the output?",
    options: {
      A: "A",
      B: "B",
      C: "Compilation error",
      D: "Runtime error"
    },
    correctAnswer: "B",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        System.out.print("B");
    }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}`,
    explanation: "Output là 'B'. Đây là runtime polymorphism. Mặc dù a có kiểu A, nhưng object thực tế là B, nên method show() của B được gọi. Runtime polymorphism chỉ áp dụng cho instance methods, không áp dụng cho static methods hoặc variables."
  },
  // Question 291
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private int x = 10;
    public void setX(int x) {
        this.x = x;
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.setX(20);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) thay đổi x từ 10 thành 20. Method getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói đúng: private variable + public getter/setter."
  },
  // Question 292
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    private int x = 10;
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 10. Private variable x = 10 được đóng gói, chỉ có thể truy cập qua public getter method getX(). Method getX() trả về giá trị của private variable x là 10. Đây là cách đóng gói đúng: private variable + public getter để đọc giá trị."
  },
  // Question 293
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "D",
    code: `class Test {
    private int x = 10;
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.x = 20;
        System.out.print(t.x);
    }
}`,
    explanation: "Lỗi biên dịch xảy ra vì cố gắng truy cập private variable x từ bên ngoài class. Private variables chỉ có thể được truy cập trong cùng class. Không thể gán t.x = 20 hoặc in t.x từ bên ngoài. Phải dùng getter/setter methods để truy cập private variables."
  },
  // Question 294
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private int x = 10;
    public void setX(int x) {
        if (x > 0) {
            this.x = x;
        }
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.setX(20);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) có validation (x > 0), vì 20 > 0 nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20. Đây là encapsulation với validation."
  },
  // Question 295
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    private int x = 10;
    public void setX(int x) {
        if (x < 0) {
            return;
        }
        this.x = x;
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.setX(-5);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 10. Method setX(-5) có validation (x < 0), vì -5 < 0 nên return sớm, không thực thi this.x = x. Giá trị của x không thay đổi, vẫn là 10. Method getX() trả về giá trị ban đầu 10. Validation trong setter bảo vệ dữ liệu khỏi giá trị không hợp lệ."
  },
  // Question 296
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private int x = 10;
    public Test(int x) {
        this.x = x;
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test(20);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 20. Constructor Test(20) nhận tham số x = 20 và gán this.x = 20, ghi đè giá trị khởi tạo x = 10. Constructor chạy sau khi khởi tạo instance variables, nên this.x = 20 được thực thi. Method getX() trả về giá trị hiện tại của x là 20."
  },
  // Question 297
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    private int x = 10;
    public void change(int x) {
        x = 20;
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.change(20);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 10. Trong method change(int x), tham số x là biến local, không phải instance variable. Khi gán x = 20, chỉ biến local được thay đổi, không ảnh hưởng đến instance variable this.x. Để thay đổi instance variable, cần dùng this.x = x. Giá trị của instance variable x vẫn là 10."
  },
  // Question 298
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private int x = 10;
    public void change(int x) {
        this.x = x;
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.change(20);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 20. Method change(20) sử dụng this.x = x để gán giá trị tham số (20) cho instance variable. this.x truy cập instance variable, x là tham số. Method getX() trả về giá trị hiện tại của instance variable x là 20. Đây là cách đúng để thay đổi instance variable khi bị che khuất bởi tham số."
  },
  // Question 299
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "A",
    code: `class Test {
    private int x = 10;
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 10. Private variable x = 10 được đóng gói, chỉ có thể truy cập qua public getter method getX(). Method getX() trả về giá trị của private variable x là 10. Đây là cách đóng gói đúng: private variable + public getter để đọc giá trị."
  },
  // Question 300
  {
    question: "What is the output?",
    options: {
      A: "10",
      B: "20",
      C: "0",
      D: "Compilation error"
    },
    correctAnswer: "B",
    code: `class Test {
    private int x = 10;
    public void setX(int x) {
        this.x = x;
    }
    public int getX() {
        return x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t.setX(20);
        System.out.print(t.getX());
    }
}`,
    explanation: "Output là 20. Private variable x được đóng gói, chỉ có thể truy cập qua public methods. Method setX(20) thay đổi x từ 10 thành 20. Method getX() trả về giá trị hiện tại của x là 20. Đây là cách đóng gói đúng: private variable + public getter/setter để kiểm soát truy cập dữ liệu."
  }
];
