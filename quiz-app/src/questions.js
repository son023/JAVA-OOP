export const questions = [
  // ===== VARIABLE NAMING (1-20) =====
  {
    question: "What is wrong with the following variable name?",
    options: {
      A: "The name is too long",
      B: "Variable names should not start with uppercase",
      C: "The name contains invalid characters",
      D: "Nothing is wrong"
    },
    correctAnswer: "B",
    code: `int TotalAmount = 100;`,
    explanation: "Trong Java, tên biến phải bắt đầu bằng chữ thường và sử dụng camelCase. 'TotalAmount' nên được viết là 'totalAmount'. Chữ cái đầu viết hoa được dành cho tên class."
  },
  {
    question: "Which variable name follows Java naming conventions?",
    options: {
      A: "user_name",
      B: "UserName",
      C: "userName",
      D: "username_"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Java sử dụng camelCase cho tên biến. 'userName' là đúng chuẩn vì bắt đầu bằng chữ thường và các từ tiếp theo viết hoa chữ cái đầu. 'user_name' là snake_case (dùng trong Python), 'UserName' là PascalCase (dùng cho class)."
  },
  {
    question: "Identify the naming convention violation in this code:",
    options: {
      A: "Constant should use UPPER_SNAKE_CASE",
      B: "Constant should use camelCase",
      C: "The name is too short",
      D: "Nothing is wrong"
    },
    correctAnswer: "A",
    code: `public static final double piValue = 3.14159;`,
    explanation: "Trong Java, hằng số (final static) phải được đặt tên theo UPPER_SNAKE_CASE. Đúng phải là 'PI_VALUE' hoặc 'PI'. Quy tắc này giúp phân biệt hằng số với biến thông thường trong code."
  },
  {
    question: "What naming issue exists in this JavaScript code?",
    options: {
      A: "Should use const instead of let",
      B: "Variable name should be more descriptive",
      C: "Variable name uses wrong case style",
      D: "Variable name is a reserved keyword"
    },
    correctAnswer: "B",
    code: `let x = users.filter(u => u.age > 18);`,
    explanation: "Biến 'x' không mô tả được nội dung chứa bên trong. Nên đặt tên có ý nghĩa như 'adultUsers' hoặc 'usersOver18'. Tên biến cần phản ánh mục đích và nội dung để code dễ đọc và bảo trì."
  },
  {
    question: "Which variable declaration violates naming conventions?",
    options: {
      A: "int itemCount = 0;",
      B: "String firstName = \"\";",
      C: "boolean Is_Active = true;",
      D: "double totalPrice = 0.0;"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Biến 'Is_Active' vi phạm 2 quy tắc: (1) Bắt đầu bằng chữ hoa, (2) Sử dụng gạch dưới thay vì camelCase. Đúng phải là 'isActive'. Các biến boolean thường bắt đầu bằng 'is', 'has', 'can', 'should'."
  },
  {
    question: "What is the problem with this loop variable?",
    options: {
      A: "Variable 'i' is acceptable for loop counters",
      B: "Should use 'index' instead",
      C: "Loop variables must be final",
      D: "Variable should be declared outside the loop"
    },
    correctAnswer: "A",
    code: `for (int i = 0; i < array.length; i++) {
    System.out.println(array[i]);
}`,
    explanation: "Biến 'i' hoàn toàn chấp nhận được cho loop counter trong các vòng lặp ngắn và đơn giản. Đây là quy ước phổ biến được chấp nhận rộng rãi. Chỉ cần đặt tên dài hơn khi vòng lặp phức tạp hoặc có nhiều vòng lặp lồng nhau."
  },
  {
    question: "Identify the convention violation:",
    options: {
      A: "Method parameter should be final",
      B: "Parameter name starts with wrong prefix",
      C: "No violation, this is correct",
      D: "Parameter name should be shorter"
    },
    correctAnswer: "B",
    code: `public void setName(String str_name) {
    this.name = str_name;
}`,
    explanation: "Trong Java không nên dùng tiền tố kiểu Hungarian notation như 'str_'. Đúng phải là 'name' hoặc 'newName'. Hungarian notation (gắn kiểu dữ liệu vào tên) đã lỗi thời vì IDE hiện đại hiển thị kiểu dữ liệu rõ ràng."
  },
  {
    question: "Which is the correct way to name a boolean variable?",
    options: {
      A: "boolean active = true;",
      B: "boolean isActive = true;",
      C: "boolean Active = true;",
      D: "boolean ACTIVE = true;"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Biến boolean nên bắt đầu bằng 'is', 'has', 'can', 'should', 'was', 'will' để thể hiện rõ đây là giá trị true/false. 'isActive' rõ ràng hơn 'active' khi đọc code: if(isActive) vs if(active)."
  },
  {
    question: "What naming convention is violated here?",
    options: {
      A: "Interface name should start with 'I'",
      B: "Interface name should use PascalCase",
      C: "Nothing is wrong, this follows convention",
      D: "Interface name is too generic"
    },
    correctAnswer: "C",
    code: `public interface UserService {
    User findById(Long id);
}`,
    explanation: "Code này hoàn toàn đúng chuẩn Java! Interface trong Java dùng PascalCase và KHÔNG cần tiền tố 'I' (đó là quy ước của C#). Tên 'UserService' rõ ràng và mô tả đúng chức năng."
  },
  {
    question: "Find the naming error in this code:",
    options: {
      A: "Class name should be lowercase",
      B: "Variable name should match class name",
      C: "Package should be in lowercase",
      D: "No error exists"
    },
    correctAnswer: "C",
    code: `package com.Company.Utils;

public class StringHelper {
    // ...
}`,
    explanation: "Package name phải viết thường hoàn toàn: 'com.company.utils'. Quy tắc này giúp tránh xung đột với tên class (dùng PascalCase) và là tiêu chuẩn trong Java từ đầu."
  },
  {
    question: "Which JavaScript variable naming is incorrect?",
    options: {
      A: "const MAX_SIZE = 100;",
      B: "let userList = [];",
      C: "var $element = document.getElementById('app');",
      D: "const _private = 'secret';"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Thực ra tất cả đều hợp lệ về mặt cú pháp JavaScript! Tuy nhiên, trong JS, hằng số thường dùng UPPER_SNAKE_CASE nên A là đúng convention. '$' prefix thường dùng cho jQuery elements, '_' prefix cho biến private."
  },
  {
    question: "What is wrong with this enum declaration?",
    options: {
      A: "Enum values should be in lowercase",
      B: "Enum name should be plural",
      C: "Nothing is wrong",
      D: "Enum values should use camelCase"
    },
    correctAnswer: "C",
    code: `public enum OrderStatus {
    PENDING,
    PROCESSING,
    COMPLETED,
    CANCELLED
}`,
    explanation: "Enum này hoàn toàn đúng chuẩn! Tên enum dùng PascalCase số ít (OrderStatus, không phải OrderStatuses), và các giá trị enum dùng UPPER_SNAKE_CASE. Đây là convention chuẩn của Java."
  },
  {
    question: "Identify the naming issue:",
    options: {
      A: "Method should return void",
      B: "Variable shadows class field",
      C: "Local variable has same name as parameter",
      D: "No issue, shadowing is acceptable here"
    },
    correctAnswer: "B",
    code: `public class User {
    private String name;
    
    public void process() {
        String name = "temp";
        System.out.println(name);
    }
}`,
    explanation: "Biến local 'name' che (shadow) field 'name' của class. Điều này gây nhầm lẫn và có thể dẫn đến bug. Nên đặt tên khác như 'tempName' hoặc 'localName' để tránh shadowing."
  },
  {
    question: "Which naming follows the Single Responsibility hint?",
    options: {
      A: "UserManagerAndValidator",
      B: "UserDataProcessor",
      C: "UserValidator",
      D: "UserServiceHelperUtil"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Tên class 'UserValidator' chỉ rõ một trách nhiệm duy nhất: validate user. Các tên như 'UserManagerAndValidator' hoặc 'UserDataProcessor' gợi ý class làm nhiều việc. Tên ngắn gọn, cụ thể thường tốt hơn."
  },
  {
    question: "What naming convention applies to this code?",
    options: {
      A: "Generic type should be single uppercase letter",
      B: "Generic type should be descriptive word",
      C: "Both A and B are acceptable",
      D: "Generic type should be lowercase"
    },
    correctAnswer: "C",
    code: `public class Repository<T> {
    public T findById(Long id) { ... }
}

public class Cache<KeyType, ValueType> {
    public ValueType get(KeyType key) { ... }
}`,
    explanation: "Cả hai cách đều được chấp nhận! Single letter (T, E, K, V) phổ biến cho generic đơn giản. Tên mô tả (KeyType, ValueType) tốt khi có nhiều type parameters hoặc cần rõ nghĩa hơn."
  },
  {
    question: "Find the variable naming mistake:",
    options: {
      A: "Array variable should end with 's' or 'List'",
      B: "Variable type should match name",
      C: "Variable should be final",
      D: "Name is correct"
    },
    correctAnswer: "A",
    code: `String[] name = {"John", "Jane", "Bob"};`,
    explanation: "Biến mảng nên có tên số nhiều hoặc có suffix cho biết đây là collection: 'names', 'nameList', hoặc 'nameArray'. Điều này giúp người đọc code hiểu ngay đây là danh sách, không phải giá trị đơn lẻ."
  },
  {
    question: "Which method name follows JavaBeans convention?",
    options: {
      A: "public String name() { return name; }",
      B: "public String getName() { return name; }",
      C: "public String fetchName() { return name; }",
      D: "public String retrieveName() { return name; }"
    },
    correctAnswer: "B",
    code: null,
    explanation: "JavaBeans convention yêu cầu getter dùng prefix 'get' (hoặc 'is' cho boolean). 'getName()' là đúng chuẩn. Các framework như Spring, Hibernate dựa vào convention này để auto-detect properties."
  },
  {
    question: "Identify the naming problem:",
    options: {
      A: "Numbers in variable names are not allowed",
      B: "Variable name starting with number is invalid",
      C: "This is valid Java code",
      D: "Should use words instead of numbers"
    },
    correctAnswer: "B",
    code: `int 2ndPlace = 2;
String player1 = "Alice";`,
    explanation: "Biến '2ndPlace' KHÔNG hợp lệ vì bắt đầu bằng số - Java không cho phép điều này. Còn 'player1' thì hợp lệ vì số đứng sau chữ cái. Nên dùng 'secondPlace' thay cho '2ndPlace'."
  },
  {
    question: "What is the convention for temporary variables?",
    options: {
      A: "Always use 'temp' prefix",
      B: "Use descriptive names based on purpose",
      C: "Use single letters only",
      D: "Use 'tmp' suffix"
    },
    correctAnswer: "B",
    code: `// Swapping values
int temp = a;
a = b;
b = temp;`,
    explanation: "Trong trường hợp swap đơn giản, 'temp' là chấp nhận được. Nhưng quy tắc chung là dùng tên mô tả mục đích: 'tempUserBeforeUpdate', 'cachedResult'. Tên tốt giúp debug và maintain code dễ hơn."
  },
  {
    question: "Which constant naming is correct in JavaScript?",
    options: {
      A: "const apiEndpoint = '/api/users';",
      B: "const API_ENDPOINT = '/api/users';",
      C: "const ApiEndpoint = '/api/users';",
      D: "Both A and B are acceptable"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Trong JavaScript, cả camelCase và UPPER_SNAKE_CASE đều được dùng cho const. UPPER_SNAKE_CASE thường dùng cho 'true constants' (không thay đổi), camelCase cho const references đến objects/arrays có thể mutate."
  },

  // ===== FUNCTION/METHOD NAMING (21-40) =====
  {
    question: "What is wrong with this method name?",
    options: {
      A: "Method name too long",
      B: "Should not use 'And' in method name",
      C: "Method should be static",
      D: "Nothing wrong"
    },
    correctAnswer: "B",
    code: `public void saveUserAndSendEmail(User user) {
    userRepository.save(user);
    emailService.sendWelcomeEmail(user);
}`,
    explanation: "Method có 'And' trong tên vi phạm Single Responsibility Principle. Một method chỉ nên làm một việc. Nên tách thành 'saveUser()' và 'sendWelcomeEmail()' riêng biệt, sau đó gọi từ một method orchestrator."
  },
  {
    question: "Which method name best describes its action?",
    options: {
      A: "process()",
      B: "doIt()",
      C: "calculateTotalPrice()",
      D: "handle()"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'calculateTotalPrice()' mô tả chính xác method làm gì. Các tên như 'process()', 'doIt()', 'handle()' quá chung chung, không cho biết method thực sự làm gì. Method name nên trả lời được câu hỏi 'This method does what?'"
  },
  {
    question: "Identify the naming convention issue:",
    options: {
      A: "Method name should start with lowercase",
      B: "Method name should describe action",
      C: "Parameters need better names",
      D: "Return type should match name"
    },
    correctAnswer: "A",
    code: `public class Calculator {
    public int Add(int a, int b) {
        return a + b;
    }
}`,
    explanation: "Trong Java, method name phải bắt đầu bằng chữ thường: 'add' không phải 'Add'. PascalCase dùng cho class name, camelCase dùng cho method và variable. Đây là quy tắc cơ bản của Java naming convention."
  },
  {
    question: "What prefix should boolean-returning methods use?",
    options: {
      A: "get",
      B: "is, has, can, should",
      C: "check",
      D: "return"
    },
    correctAnswer: "B",
    code: `public boolean validateUser(User user) { ... }`,
    explanation: "Methods trả về boolean nên dùng prefix như 'is', 'has', 'can', 'should', 'was', 'will'. Ví dụ: 'isValid()', 'hasPermission()', 'canAccess()'. Code 'validateUser' nên đổi thành 'isValidUser()' hoặc 'isUserValid()'."
  },
  {
    question: "Which getter method name follows convention?",
    options: {
      A: "public boolean getActive() { return active; }",
      B: "public boolean isActive() { return active; }",
      C: "public boolean active() { return active; }",
      D: "public boolean hasActive() { return active; }"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Với boolean properties, getter phải dùng 'is' prefix thay vì 'get'. 'isActive()' là đúng chuẩn JavaBeans. 'getActive()' dùng cho các kiểu non-boolean. 'hasActive()' chỉ dùng khi kiểm tra sự tồn tại của something."
  },
  {
    question: "Find the method naming violation:",
    options: {
      A: "Method does too many things",
      B: "Method name uses underscore",
      C: "Return type mismatch",
      D: "No violation"
    },
    correctAnswer: "B",
    code: `public void update_user_profile(User user) {
    // update logic
}`,
    explanation: "Java methods sử dụng camelCase, không dùng snake_case với underscore. Đúng phải là 'updateUserProfile'. Snake_case là convention của Python và C. Mỗi ngôn ngữ có quy ước riêng cần tuân thủ."
  },
  {
    question: "What's wrong with this factory method name?",
    options: {
      A: "Should use 'new' keyword instead",
      B: "Factory method should use 'create' or 'of' prefix",
      C: "Nothing wrong",
      D: "Should return void"
    },
    correctAnswer: "C",
    code: `public static User createUser(String name) {
    return new User(name);
}`,
    explanation: "Method này hoàn toàn đúng! Factory methods thường dùng các prefix như 'create', 'of', 'from', 'valueOf', 'getInstance', 'newInstance'. 'createUser' là tên rõ ràng và đúng convention."
  },
  {
    question: "Which method name indicates it may throw an exception?",
    options: {
      A: "parseInteger()",
      B: "tryParseInteger()",
      C: "parseIntegerSafe()",
      D: "None of the above can indicate this"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Prefix 'try' ngụ ý method có thể fail và xử lý lỗi internally (thường return Optional hoặc null thay vì throw). 'parseInteger()' có thể throw, 'tryParseInteger()' ngụ ý xử lý an toàn. Đây là convention phổ biến trong .NET và được áp dụng trong Java."
  },
  {
    question: "Identify the issue with this async method name in JavaScript:",
    options: {
      A: "Should have 'async' in name",
      B: "Should have 'Async' suffix",
      C: "The naming is acceptable",
      D: "Should return a callback"
    },
    correctAnswer: "C",
    code: `async function fetchUserData(userId) {
    const response = await fetch(\`/api/users/\${userId}\`);
    return response.json();
}`,
    explanation: "Tên method async không bắt buộc phải có suffix 'Async'. Với JavaScript modern dùng async/await, tên method như 'fetchUserData' là đủ rõ ràng. 'Async' suffix phổ biến hơn trong C#/.NET ecosystem."
  },
  {
    question: "What naming issue exists in this code?",
    options: {
      A: "Method name reveals implementation",
      B: "Method name is too short",
      C: "Should use different return type",
      D: "No issue"
    },
    correctAnswer: "A",
    code: `public List<User> selectUsersFromMySQLDatabase() {
    return jdbcTemplate.query("SELECT * FROM users", userMapper);
}`,
    explanation: "Tên method không nên tiết lộ implementation details như database type. Nên đặt là 'findAllUsers()' hoặc 'getUsers()'. Nếu sau này đổi từ MySQL sang PostgreSQL, tên method sẽ bị sai lệch. Abstraction quan trọng!"
  },
  {
    question: "Which method signature follows clean code principles?",
    options: {
      A: "void process(String a, String b, int c, boolean d, List e)",
      B: "void createOrder(OrderRequest request)",
      C: "void doStuff(Object... args)",
      D: "void x(Map m)"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Method với parameter object (OrderRequest) gọn gàng và dễ mở rộng hơn. Quá nhiều parameters (A) khó đọc và dễ nhầm thứ tự. Varargs không rõ nghĩa (C), single-letter (D) không mô tả được. Clean code khuyên <= 3 parameters."
  },
  {
    question: "Find the naming problem:",
    options: {
      A: "Setter should return void",
      B: "Setter parameter should be 'name'",
      C: "Both A and B are correct",
      D: "No problem"
    },
    correctAnswer: "C",
    code: `public class User {
    private String name;
    
    public User setName(String n) {
        this.name = n;
        return this;
    }
}`,
    explanation: "Có 2 vấn đề: (1) Tham số nên là 'name' thay vì 'n' để rõ nghĩa, (2) Setter truyền thống return void. Tuy nhiên, trả về 'this' là pattern Builder/Fluent interface - được chấp nhận nhưng cần nhất quán trong project."
  },
  {
    question: "What is the convention for conversion methods?",
    options: {
      A: "Use 'to' prefix (toJson, toString)",
      B: "Use 'convert' prefix",
      C: "Use 'as' prefix",
      D: "Use 'make' prefix"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Conversion methods trong Java theo convention dùng prefix 'to': toString(), toArray(), toJson(), toDTO(). Prefix 'as' thường dùng cho view/wrapper không tạo object mới (asList()). 'convert' quá dài và ít được dùng."
  },
  {
    question: "Identify the issue:",
    options: {
      A: "Method name doesn't match behavior",
      B: "Should throw exception instead",
      C: "Return type should be boolean",
      D: "Nothing wrong"
    },
    correctAnswer: "A",
    code: `public User getUser(Long id) {
    User user = repository.findById(id);
    if (user == null) {
        return new User(); // return empty user
    }
    return user;
}`,
    explanation: "'getUser' ngụ ý sẽ trả về User hoặc throw exception nếu không tìm thấy. Việc trả về empty User gây hiểu nhầm. Nên đổi tên thành 'findUser' (có thể return null) hoặc 'getOrCreateUser'. Tên method phải phản ánh behavior."
  },
  {
    question: "Which callback method name follows convention in JavaScript?",
    options: {
      A: "onClickHandler",
      B: "handleClick",
      C: "clickCallback",
      D: "Both A and B are acceptable"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Cả 'onClickHandler' và 'handleClick' đều là conventions phổ biến trong JavaScript/React. 'on' prefix thường dùng cho event props, 'handle' prefix cho actual handler functions. Quan trọng là consistency trong project."
  },
  {
    question: "What's wrong with this recursive method name?",
    options: {
      A: "Should indicate recursion in name",
      B: "Name is misleading about depth",
      C: "Nothing wrong with the name",
      D: "Should use 'Recursive' suffix"
    },
    correctAnswer: "C",
    code: `public int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`,
    explanation: "Tên 'factorial' hoàn toàn ổn! Không cần thêm 'Recursive' vào tên vì đó là implementation detail. Method name nên mô tả WHAT (tính factorial), không phải HOW (recursive hay iterative)."
  },
  {
    question: "Find the naming violation:",
    options: {
      A: "Interface method should have body",
      B: "Method name should not start with verb",
      C: "Method names are correct",
      D: "Should use default methods"
    },
    correctAnswer: "C",
    code: `public interface OrderService {
    Order createOrder(OrderRequest request);
    void cancelOrder(Long orderId);
    Order findOrderById(Long id);
}`,
    explanation: "Tất cả method names đều đúng convention! 'createOrder' là action verb + noun, 'cancelOrder' và 'findOrderById' cũng tương tự. Interface methods trong Java không cần body (abstract by default)."
  },
  {
    question: "What does the method name suggest about its behavior?",
    options: {
      A: "Returns null if not found",
      B: "Throws exception if not found",
      C: "Creates new entity if not found",
      D: "Cannot determine from name"
    },
    correctAnswer: "B",
    code: `public User getUserById(Long id) {
    // implementation
}`,
    explanation: "Prefix 'get' thường ngụ ý method expects entity to exist và sẽ throw exception nếu không tìm thấy. Dùng 'find' (findUserById) nếu có thể return null/Optional. Đây là convention phổ biến trong Spring và các frameworks."
  },
  {
    question: "Which method name is most appropriate?",
    options: {
      A: "List<User> getAll()",
      B: "List<User> getAllUsers()",
      C: "List<User> all()",
      D: "List<User> users()"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'getAllUsers()' rõ ràng nhất vì nói rõ lấy TẤT CẢ USERS. 'getAll()' thiếu context - all what? 'all()' và 'users()' không theo naming convention của Java (thiếu verb). Method name nên là động từ hoặc verb phrase."
  },
  {
    question: "Identify the problem in this test method name:",
    options: {
      A: "Test name is too long",
      B: "Test name should use underscores",
      C: "Test name lacks 'test' prefix",
      D: "Nothing wrong"
    },
    correctAnswer: "D",
    code: `@Test
void shouldReturnEmptyListWhenNoUsersExist() {
    // test implementation
}`,
    explanation: "Method name này hoàn hảo cho unit test! Format 'should...When...' rõ ràng mô tả expected behavior và condition. Với JUnit 5 (@Test annotation), không cần prefix 'test'. Tên dài OK cho test vì nó là documentation."
  },

  // ===== COMMENTS (41-55) =====
  {
    question: "What is wrong with this comment?",
    options: {
      A: "Comment is too short",
      B: "Comment states the obvious",
      C: "Comment should be in Javadoc format",
      D: "Nothing wrong"
    },
    correctAnswer: "B",
    code: `// increment i by 1
i++;`,
    explanation: "Comment này thừa vì code đã tự giải thích. 'i++' là expression phổ biến, ai cũng hiểu. Comments chỉ nên giải thích WHY (tại sao làm vậy), không phải WHAT (code làm gì). Code tốt tự document chính nó."
  },
  {
    question: "Which comment style is preferred for explaining complex logic?",
    options: {
      A: "// Single line comment",
      B: "/* Multi-line comment */",
      C: "/** Javadoc comment */",
      D: "Depends on context"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Tùy context: Javadoc (/**) cho public API documentation, single-line (//) cho brief inline explanations, multi-line (/*) cho temporary disable code hoặc explanations dài. Quan trọng là consistency trong project."
  },
  {
    question: "Identify the comment anti-pattern:",
    options: {
      A: "Comment is not in English",
      B: "Commented-out code should be removed",
      C: "Comment formatting is wrong",
      D: "No issue"
    },
    correctAnswer: "B",
    code: `public void process() {
    // old implementation
    // if (condition) {
    //     doSomething();
    // }
    
    newImplementation();
}`,
    explanation: "Commented-out code là code smell! Nên xóa hoàn toàn vì có version control (Git) để lưu history. Code bị comment tạo noise, gây confused, và thường không bao giờ được dùng lại. Delete it!"
  },
  {
    question: "What is missing in this Javadoc?",
    options: {
      A: "@author tag",
      B: "@param and @return tags",
      C: "@version tag",
      D: "Nothing missing"
    },
    correctAnswer: "B",
    code: `/**
 * Calculates the total price.
 */
public double calculateTotal(List<Item> items, double taxRate) {
    // implementation
}`,
    explanation: "Javadoc cho method cần @param cho mỗi parameter và @return cho return value. Đầy đủ: @param items - list of items, @param taxRate - tax percentage, @return total price including tax. Điều này giúp IDE hiển thị hints."
  },
  {
    question: "Which TODO comment is more useful?",
    options: {
      A: "// TODO: fix this",
      B: "// TODO: refactor",
      C: "// TODO (john.doe): Implement caching for performance - JIRA-123",
      D: "// TODO: improve"
    },
    correctAnswer: "C",
    code: null,
    explanation: "TODO tốt phải có: (1) Người chịu trách nhiệm, (2) Mô tả cụ thể việc cần làm, (3) Reference ticket/issue nếu có. 'fix this' không cho biết fix cái gì, ai fix, khi nào. Good TODOs are actionable!"
  },
  {
    question: "What's wrong with this comment style?",
    options: {
      A: "Separator comments add no value",
      B: "Should use more asterisks",
      C: "This is a valid documentation style",
      D: "Comments should be shorter"
    },
    correctAnswer: "A",
    code: `//*******************************
// GETTERS AND SETTERS
//*******************************
public String getName() { return name; }
public void setName(String name) { this.name = name; }`,
    explanation: "Banner comments như này là noise! Chúng không thêm information hữu ích. IDE có thể collapse/organize code. Nếu cần nhóm code, hãy refactor thành class riêng hoặc dùng regions (IDE feature), không phải comments."
  },
  {
    question: "Identify the documentation issue:",
    options: {
      A: "Method name already explains what it does",
      B: "Javadoc should explain implementation",
      C: "Missing @throws tag",
      D: "Both A and C"
    },
    correctAnswer: "D",
    code: `/**
 * Gets the user by ID.
 */
public User getUserById(Long id) throws UserNotFoundException {
    // throws exception if not found
}`,
    explanation: "Hai vấn đề: (1) Javadoc 'Gets the user by ID' trùng với method name - không thêm value, nên giải thích behavior chi tiết hơn; (2) Thiếu @throws UserNotFoundException để document exception. Javadoc phải document contract đầy đủ."
  },
  {
    question: "Which is a proper use of comments?",
    options: {
      A: "Explain what the code does",
      B: "Explain why a non-obvious decision was made",
      C: "Label every method",
      D: "Repeat the method name"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Comments nên giải thích WHY, không phải WHAT. Ví dụ: '// Using insertion sort because array is nearly sorted (faster than quicksort in this case)'. Code tốt tự giải thích what it does, comments giải thích reasoning."
  },
  {
    question: "What's the issue with this API documentation?",
    options: {
      A: "Description too long",
      B: "Missing example",
      C: "Return description doesn't match actual behavior",
      D: "No issue"
    },
    correctAnswer: "C",
    code: `/**
 * Finds user by email.
 * @param email the email address
 * @return the user
 */
public Optional<User> findByEmail(String email) {
    // returns Optional.empty() if not found
}`,
    explanation: "Javadoc nói '@return the user' nhưng thực tế trả về Optional<User>. Cần update: '@return Optional containing the user, or empty if not found'. Documentation phải CHÍNH XÁC với behavior, nếu không sẽ gây nhầm lẫn."
  },
  {
    question: "Identify the comment best practice:",
    options: {
      A: "Comment every line",
      B: "No comments needed if code is clean",
      C: "Document public APIs, explain complex logic",
      D: "Only use Javadoc"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Best practice: Document public APIs (Javadoc), giải thích business logic phức tạp, và WHY behind non-obvious decisions. Không phải every line (noise), cũng không phải no comments (public API cần docs). Balance is key."
  },
  {
    question: "What should this comment explain?",
    options: {
      A: "What the regex matches",
      B: "Why regex is used",
      C: "Both pattern and purpose",
      D: "Regex comments are unnecessary"
    },
    correctAnswer: "C",
    code: `String pattern = "^[A-Za-z0-9+_.-]+@(.+)$";
if (email.matches(pattern)) {
    // process
}`,
    explanation: "Regex phức tạp CẦN comment giải thích: (1) Pattern matches cái gì (basic email format), (2) Tại sao dùng pattern này. Ví dụ: '// Basic email validation: alphanumeric + special chars before @, any domain after'. Regex là classic case cần comments."
  },
  {
    question: "Which inline comment is appropriate?",
    options: {
      A: "// create new user",
      B: "// Using double-checked locking for thread safety",
      C: "// call method",
      D: "// return result"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Comment 'Using double-checked locking for thread safety' giải thích WHY pattern được dùng - đây là information không obvious từ code. Các comments khác chỉ repeat what code does, không thêm value gì."
  },
  {
    question: "Find the documentation smell:",
    options: {
      A: "Outdated comment doesn't match code",
      B: "Comment is too detailed",
      C: "Should use inline comment",
      D: "No issue"
    },
    correctAnswer: "A",
    code: `/**
 * Returns list of active users.
 */
public List<User> findAllUsers() {
    return userRepository.findAll(); // returns ALL users, not just active
}`,
    explanation: "Comment nói 'active users' nhưng code lấy ALL users - documentation LIE! Outdated docs còn tệ hơn no docs vì gây misleading. Khi thay đổi code, PHẢI update comments tương ứng. Nếu không maintain được thì đừng write."
  },
  {
    question: "What type of comment is this?",
    options: {
      A: "Implementation comment",
      B: "Documentation comment",
      C: "Legal/license comment",
      D: "Debug comment"
    },
    correctAnswer: "C",
    code: `/*
 * Copyright 2024 Acme Corp.
 * Licensed under the Apache License, Version 2.0
 */`,
    explanation: "Đây là legal/copyright comment, thường đặt ở đầu file. Loại comment này bắt buộc trong nhiều projects để protect intellectual property và comply với license requirements. Không nên xóa dù có vẻ 'không cần thiết'."
  },
  {
    question: "Which is the best practice for method documentation?",
    options: {
      A: "Document only complex methods",
      B: "Document all public methods",
      C: "No documentation needed",
      D: "Document only if paid to"
    },
    correctAnswer: "B",
    code: null,
    explanation: "All public methods NÊN có Javadoc vì chúng là public API. Private methods có thể skip nếu code self-explanatory. Public API documentation là contract với users của code - họ cần biết how to use mà không đọc implementation."
  },

  // ===== EXCEPTION HANDLING (56-75) =====
  {
    question: "What is wrong with this exception handling?",
    options: {
      A: "Empty catch block",
      B: "Wrong exception type",
      C: "Missing finally",
      D: "Nothing wrong"
    },
    correctAnswer: "A",
    code: `try {
    file.read();
} catch (IOException e) {
    // do nothing
}`,
    explanation: "Empty catch block là anti-pattern nghiêm trọng! Exception bị 'nuốt' không trace, không log, không xử lý. Khi có bug sẽ rất khó debug. Ít nhất phải log error, hoặc rethrow với context. NEVER swallow exceptions silently."
  },
  {
    question: "Which exception type should be thrown?",
    options: {
      A: "RuntimeException",
      B: "IllegalArgumentException",
      C: "Exception",
      D: "NullPointerException"
    },
    correctAnswer: "B",
    code: `public void setAge(int age) {
    if (age < 0) {
        throw new ???("Age cannot be negative");
    }
    this.age = age;
}`,
    explanation: "IllegalArgumentException là đúng cho invalid method arguments. Nó extends RuntimeException (unchecked), rõ ràng cho biết input không hợp lệ. NullPointerException dùng khi null check fail, RuntimeException quá generic."
  },
  {
    question: "Identify the exception handling issue:",
    options: {
      A: "Should catch specific exception first",
      B: "Catching Exception is too broad",
      C: "Missing IOException handler",
      D: "Both A and B"
    },
    correctAnswer: "D",
    code: `try {
    readFile();
} catch (Exception e) {
    log.error("Error", e);
} catch (IOException e) {
    handleIOError(e);
}`,
    explanation: "Hai vấn đề: (1) Catch Exception trước IOException nên IOException block unreachable (compile error), (2) Catch Exception quá broad - bắt cả NullPointerException, ArrayIndexOutOfBounds... Nên catch specific exceptions theo thứ tự cụ thể -> general."
  },
  {
    question: "What is the best practice shown here?",
    options: {
      A: "Using finally for cleanup",
      B: "Using try-with-resources",
      C: "Manual resource management",
      D: "No best practice shown"
    },
    correctAnswer: "B",
    code: `try (FileInputStream fis = new FileInputStream("file.txt")) {
    // read file
} catch (IOException e) {
    log.error("Failed to read file", e);
}`,
    explanation: "Try-with-resources (Java 7+) tự động close resources implementing AutoCloseable. Đây là best practice vì: (1) Code ngắn gọn, (2) Đảm bảo resource được close even if exception, (3) Handles suppressed exceptions properly."
  },
  {
    question: "What is wrong with this custom exception?",
    options: {
      A: "Should extend Exception",
      B: "Missing serialVersionUID",
      C: "Constructor is wrong",
      D: "Both A and B could be issues"
    },
    correctAnswer: "B",
    code: `public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}`,
    explanation: "Exception classes nên có serialVersionUID vì Exception implements Serializable. IDE thường warning về điều này. Thêm: 'private static final long serialVersionUID = 1L;'. Ngoài ra, nên có constructor nhận cause (Throwable)."
  },
  {
    question: "Identify the logging anti-pattern:",
    options: {
      A: "Logging exception twice",
      B: "Not logging exception message",
      C: "Wrong log level",
      D: "No anti-pattern"
    },
    correctAnswer: "A",
    code: `try {
    process();
} catch (Exception e) {
    log.error("Error occurred", e);
    throw e;
}`,
    explanation: "Log rồi throw lại exception = log duplicate! Exception sẽ được log lần nữa ở nơi catch final. Best practice: hoặc log và handle, hoặc wrap và throw, không làm cả hai. Nếu cần add context, wrap vào new exception."
  },
  {
    question: "Which is the correct way to chain exceptions?",
    options: {
      A: "throw new ServiceException(e.getMessage())",
      B: "throw new ServiceException(\"Error\", e)",
      C: "throw new ServiceException(e.toString())",
      D: "throw e"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Pass original exception as cause: new ServiceException(\"Error\", e). Điều này giữ FULL stack trace của root cause, essential cho debugging. Các cách khác mất original exception info. Exception chaining là pattern quan trọng!"
  },
  {
    question: "What's wrong with this exception message?",
    options: {
      A: "Message too short",
      B: "Message doesn't provide context",
      C: "Should not include variable value",
      D: "Message is fine"
    },
    correctAnswer: "B",
    code: `if (user == null) {
    throw new IllegalStateException("Error");
}`,
    explanation: "'Error' message không có nghĩa gì! Exception message nên chứa: (1) What went wrong, (2) Context (giá trị relevant). Tốt hơn: 'User cannot be null when processing order #' + orderId. Good messages = faster debugging."
  },
  {
    question: "Identify the exception handling code smell:",
    options: {
      A: "Using exception for flow control",
      B: "Catching too specific exception",
      C: "Exception message too long",
      D: "Nothing wrong"
    },
    correctAnswer: "A",
    code: `public User findUser(Long id) {
    try {
        return userList.get(id.intValue());
    } catch (IndexOutOfBoundsException e) {
        return null;
    }
}`,
    explanation: "Dùng exception cho flow control là anti-pattern! Exception costly về performance và làm code khó đọc. Nên check: 'if (id < userList.size()) return userList.get(id); return null;'. Exceptions cho exceptional situations, không phải business logic."
  },
  {
    question: "Which practice should be avoided?",
    options: {
      A: "Throwing checked exceptions from methods",
      B: "Catching Throwable",
      C: "Using custom exceptions",
      D: "Logging exception stack trace"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG nên catch Throwable vì nó bắt cả Error (OutOfMemoryError, StackOverflowError) - những lỗi JVM mà app không nên/không thể handle. Chỉ catch Exception hoặc specific exception types. Let Errors propagate!"
  },
  {
    question: "What's the issue with this code?",
    options: {
      A: "Finally may not execute",
      B: "Return in finally overrides try's return",
      C: "Finally should not have return",
      D: "Both B and C"
    },
    correctAnswer: "D",
    code: `public int getValue() {
    try {
        return 1;
    } finally {
        return 2; // NEVER do this!
    }
}`,
    explanation: "Return trong finally là CRITICAL anti-pattern! Nó overrides return (và exceptions!) từ try block. Method này luôn return 2, và bất kỳ exception nào cũng bị swallowed. Finally chỉ dùng cho cleanup, không return values."
  },
  {
    question: "Identify the correct exception handling:",
    options: {
      A: "Multi-catch syntax is wrong",
      B: "Should catch separately",
      C: "Multi-catch is correct",
      D: "Should catch Exception"
    },
    correctAnswer: "C",
    code: `try {
    process();
} catch (IOException | SQLException e) {
    log.error("Data access error", e);
}`,
    explanation: "Multi-catch (Java 7+) syntax đúng và được khuyến khích khi xử lý nhiều exception types giống nhau. Gọn hơn multiple catch blocks. Lưu ý: các exception trong multi-catch không được có quan hệ kế thừa."
  },
  {
    question: "What should be done with this checked exception?",
    options: {
      A: "Catch and rethrow as unchecked",
      B: "Add throws declaration",
      C: "Catch and handle",
      D: "Any of the above depending on context"
    },
    correctAnswer: "D",
    code: `public void readConfig() {
    FileInputStream fis = new FileInputStream("config.txt"); // Throws FileNotFoundException
}`,
    explanation: "Tùy context: (1) Handle locally nếu có recovery strategy, (2) Declare throws nếu caller có thể handle, (3) Wrap trong RuntimeException nếu là fatal error. Modern Java thường prefer unchecked exceptions cho cleaner APIs."
  },
  {
    question: "What's wrong with this exception class name?",
    options: {
      A: "Name should end with Exception",
      B: "Name is too generic",
      C: "Both A and B",
      D: "Nothing wrong"
    },
    correctAnswer: "C",
    code: `public class ProcessError extends RuntimeException {
    // ...
}`,
    explanation: "Hai vấn đề: (1) Nên dùng suffix 'Exception' thay vì 'Error' (Error dùng cho JVM errors), (2) 'ProcessError' quá generic - process nào? Nên cụ thể: 'PaymentProcessingException', 'OrderValidationException'."
  },
  {
    question: "Identify best practice for assertion:",
    options: {
      A: "Use assert for input validation",
      B: "Use Objects.requireNonNull for null checks",
      C: "Assertions are disabled by default",
      D: "Both B and C"
    },
    correctAnswer: "D",
    code: `public void process(User user) {
    Objects.requireNonNull(user, "User cannot be null");
    // process
}`,
    explanation: "Objects.requireNonNull() là best practice cho null checks vì: (1) Luôn chạy (assertions disabled by default), (2) Throws NullPointerException với message rõ ràng, (3) Code ngắn gọn. Assertions dùng cho development-time checks."
  },
  {
    question: "What is the issue with generic exceptions?",
    options: {
      A: "They carry less information",
      B: "They make catching specific errors hard",
      C: "They hide the actual error type",
      D: "All of the above"
    },
    correctAnswer: "D",
    code: `public void process() throws Exception {
    // implementation
}`,
    explanation: "Throws Exception (generic) có nhiều vấn đề: (1) Caller không biết expect exception nào, (2) Force catch Exception (quá broad), (3) Mất type information. Nên declare specific exceptions: throws IOException, SQLException. Be specific!"
  },
  {
    question: "Which exception handling is correct for Optional?",
    options: {
      A: "Use orElseThrow with supplier",
      B: "Check isPresent and throw manually",
      C: "Use get() directly",
      D: "A and B are both correct"
    },
    correctAnswer: "A",
    code: `Optional<User> user = repository.findById(id);

// Option A
return user.orElseThrow(() -> new UserNotFoundException(id));

// Option B
if (!user.isPresent()) throw new UserNotFoundException(id);
return user.get();`,
    explanation: "orElseThrow() là idiomatic và clean hơn. Một line, no temp variable needed. isPresent() + get() verbose và không functional. NEVER call get() without checking - throws NoSuchElementException if empty."
  },
  {
    question: "Find the defensive programming issue:",
    options: {
      A: "Should validate all parameters",
      B: "Null check is unnecessary",
      C: "Should use Optional",
      D: "No issue"
    },
    correctAnswer: "A",
    code: `public double calculateAverage(List<Integer> numbers) {
    return numbers.stream()
        .mapToInt(Integer::intValue)
        .average()
        .orElse(0.0);
}`,
    explanation: "Thiếu validation! Nếu numbers là null → NullPointerException. Defensive programming: check null đầu tiên. Thêm: 'if (numbers == null || numbers.isEmpty()) return 0.0;' hoặc throw IllegalArgumentException."
  },
  {
    question: "What is wrong with this error handling?",
    options: {
      A: "e.printStackTrace() shouldn't be used in production",
      B: "Should log error instead",
      C: "Both A and B",
      D: "Nothing wrong"
    },
    correctAnswer: "C",
    code: `try {
    process();
} catch (Exception e) {
    e.printStackTrace();
}`,
    explanation: "printStackTrace() là anti-pattern trong production code: (1) Output đi thẳng ra System.err, không qua logging framework, (2) Không có timestamp, context, (3) Có thể bị mất trong container logs. Dùng proper logging: log.error(\"Error\", e);"
  },
  {
    question: "Identify the exception documentation issue:",
    options: {
      A: "Javadoc should list all thrown exceptions",
      B: "@throws tag is optional",
      C: "RuntimeExceptions don't need documentation",
      D: "Nothing wrong"
    },
    correctAnswer: "A",
    code: `/**
 * Deletes user by ID.
 * @param id user ID
 */
public void deleteUser(Long id) {
    User user = findById(id); // throws UserNotFoundException
    repository.delete(user);
}`,
    explanation: "Javadoc PHẢI document exceptions, đặc biệt unchecked exceptions như UserNotFoundException. Callers cần biết method có thể throw gì để handle. Thêm: '@throws UserNotFoundException if user not found'."
  },

  // ===== CODE STRUCTURE (76-100) =====
  {
    question: "What is the code structure issue here?",
    options: {
      A: "Method is too long",
      B: "Too many parameters",
      C: "Missing return statement",
      D: "Both A and B"
    },
    correctAnswer: "D",
    code: `public void processOrder(String customerName, String email, 
    String phone, String address, String city, String country,
    String productName, int quantity, double price, 
    String paymentMethod, String shippingMethod) {
    // 200 lines of code
}`,
    explanation: "Hai vấn đề: (1) 11 parameters quá nhiều (max nên 3-4), nên dùng parameter objects, (2) 200 lines quá dài - một method nên làm một việc và ngắn gọn. Refactor: tạo OrderRequest, CustomerInfo classes, tách thành smaller methods."
  },
  {
    question: "Identify the code smell:",
    options: {
      A: "Magic number",
      B: "Magic string",
      C: "Both A and B",
      D: "No smell"
    },
    correctAnswer: "C",
    code: `if (user.getRole().equals("ADMIN") && user.getAge() > 18) {
    grantAccess(86400000); // 24 hours in milliseconds
}`,
    explanation: "Hai magic values: (1) \"ADMIN\" nên là constant hoặc enum: Role.ADMIN, (2) 86400000 không rõ nghĩa, nên: TimeUnit.DAYS.toMillis(1) hoặc constant ACCESS_DURATION_MS. Magic values khó maintain và prone to errors."
  },
  {
    question: "What refactoring is needed?",
    options: {
      A: "Extract method",
      B: "Extract class",
      C: "Inline method",
      D: "No refactoring needed"
    },
    correctAnswer: "A",
    code: `public void processOrder(Order order) {
    // validate order
    if (order.getItems().isEmpty()) throw new ValidationException("No items");
    if (order.getTotal() <= 0) throw new ValidationException("Invalid total");
    if (order.getCustomer() == null) throw new ValidationException("No customer");
    
    // calculate discount
    double discount = 0;
    if (order.getTotal() > 100) discount = 0.1;
    if (order.getTotal() > 500) discount = 0.2;
    
    // more processing...
}`,
    explanation: "Nên Extract Method cho validation và discount calculation: validateOrder(order), calculateDiscount(order). Mỗi method làm một việc. Điều này improve readability, testability, và reusability. Small methods = clean code."
  },
  {
    question: "What principle does this code violate?",
    options: {
      A: "DRY (Don't Repeat Yourself)",
      B: "YAGNI (You Aren't Gonna Need It)",
      C: "KISS (Keep It Simple Stupid)",
      D: "None"
    },
    correctAnswer: "A",
    code: `public void saveUser(User user) {
    log.info("Saving user: " + user.getName());
    validate(user);
    userRepository.save(user);
    log.info("User saved: " + user.getName());
}

public void saveProduct(Product product) {
    log.info("Saving product: " + product.getName());
    validate(product);
    productRepository.save(product);
    log.info("Product saved: " + product.getName());
}`,
    explanation: "Duplicate logic pattern! Cả hai methods có cấu trúc giống nhau. Có thể abstract thành generic method hoặc dùng Template Method pattern. DRY: mỗi knowledge piece chỉ nên có một representation trong system."
  },
  {
    question: "Identify the structural issue:",
    options: {
      A: "Class has too many responsibilities",
      B: "Class name is wrong",
      C: "Methods are too short",
      D: "No issue"
    },
    correctAnswer: "A",
    code: `public class UserService {
    public void createUser() { }
    public void updateUser() { }
    public void sendEmail() { }
    public void generateReport() { }
    public void validatePayment() { }
    public void processOrder() { }
}`,
    explanation: "UserService làm quá nhiều việc không liên quan: user CRUD, email, reports, payments, orders. Vi phạm Single Responsibility Principle. Nên tách: UserService, EmailService, ReportService, PaymentService, OrderService."
  },
  {
    question: "What's the issue with this code organization?",
    options: {
      A: "Imports should be grouped",
      B: "Too many imports",
      C: "Wrong import order",
      D: "Using wildcard imports"
    },
    correctAnswer: "D",
    code: `import java.util.*;
import com.company.*;
import org.springframework.*;`,
    explanation: "Wildcard imports (.*) là bad practice: (1) Không biết exactly classes nào được dùng, (2) Có thể gây name conflicts, (3) IDE không auto-cleanup unused. Nên explicit import từng class. Modern IDEs handle this automatically."
  },
  {
    question: "Find the nesting problem:",
    options: {
      A: "Too deep nesting",
      B: "Should use early return",
      C: "Both A and B",
      D: "No problem"
    },
    correctAnswer: "C",
    code: `public void process(User user) {
    if (user != null) {
        if (user.isActive()) {
            if (user.hasPermission()) {
                if (user.getAge() >= 18) {
                    // actual logic here
                }
            }
        }
    }
}`,
    explanation: "Arrow code (deeply nested ifs) khó đọc và maintain! Dùng early returns (guard clauses) để 'flatten' code: 'if (user == null) return; if (!user.isActive()) return; ...' Mỗi level nesting tăng cognitive load."
  },
  {
    question: "What is the code organization best practice?",
    options: {
      A: "Public methods first, then private",
      B: "Private methods first, then public",
      C: "Alphabetical order",
      D: "Random order is fine"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Clean Code convention: Public methods (API) đầu tiên, followed by private methods. Reader thường quan tâm public interface trước. Private helper methods đặt gần nơi được gọi (stepdown rule). Constructor thường ở đầu class."
  },
  {
    question: "Identify the formatting issue:",
    options: {
      A: "Inconsistent spacing",
      B: "Missing braces",
      C: "Both A and B",
      D: "No issue"
    },
    correctAnswer: "C",
    code: `if(condition)doSomething();
if (condition2)
{
    doSomethingElse();
}`,
    explanation: "Hai vấn đề: (1) Thiếu space sau if và thiếu braces cho single-line if (nên luôn dùng braces để tránh bugs), (2) Inconsistent brace style (same line vs new line). Chọn một style và stick with it trong toàn project."
  },
  {
    question: "What's wrong with this class structure?",
    options: {
      A: "Field should be private",
      B: "Missing getter/setter",
      C: "Missing constructor",
      D: "All of the above"
    },
    correctAnswer: "A",
    code: `public class User {
    public String name;
    public int age;
}`,
    explanation: "Public fields vi phạm encapsulation! Fields nên là private với getters/setters (hoặc dùng Lombok @Data). Public fields cho phép external code modify state trực tiếp, không thể add validation, và break encapsulation principle."
  },
  {
    question: "Identify the method length issue:",
    options: {
      A: "Method too short",
      B: "Method has good length",
      C: "Need more context",
      D: "Method should be one-liner"
    },
    correctAnswer: "B",
    code: `public double calculateDiscount(Order order) {
    if (order.getTotal() > 1000) {
        return 0.20;
    } else if (order.getTotal() > 500) {
        return 0.10;
    } else if (order.getTotal() > 100) {
        return 0.05;
    }
    return 0;
}`,
    explanation: "Method này có độ dài tốt! Làm một việc (calculate discount), dễ đọc, dễ test. Không phải mọi method cần super short. Clean code guideline: method nên fit trong một screen (~20 lines), làm một việc rõ ràng."
  },
  {
    question: "What's the issue with this boolean expression?",
    options: {
      A: "Too complex, should extract method",
      B: "Missing parentheses",
      C: "Wrong operator precedence",
      D: "No issue"
    },
    correctAnswer: "A",
    code: `if (user.isActive() && user.getAge() >= 18 && 
    (user.getRole() == Role.ADMIN || user.getRole() == Role.MANAGER) &&
    user.getDepartment().isOperational() && !user.isSuspended()) {
    // grant access
}`,
    explanation: "Condition quá phức tạp, khó đọc và maintain! Nên extract thành method có tên ý nghĩa: 'if (canGrantAccess(user))' với private method 'canGrantAccess()' chứa logic. Self-documenting code > complex expressions."
  },
  {
    question: "Find the code smell:",
    options: {
      A: "Primitive obsession",
      B: "Data clumps",
      C: "Both A and B",
      D: "No smell"
    },
    correctAnswer: "C",
    code: `public void createUser(String firstName, String lastName, 
    String street, String city, String zipCode, String country) {
    // implementation
}`,
    explanation: "Hai smells: (1) Primitive Obsession - dùng String cho mọi thứ thay vì value objects, (2) Data Clumps - street/city/zipCode/country luôn đi cùng nhau → nên tạo Address class. Refactor để improve type safety và clarity."
  },
  {
    question: "What principle is being followed?",
    options: {
      A: "Composition over inheritance",
      B: "Inheritance over composition",
      C: "Neither",
      D: "Both equally"
    },
    correctAnswer: "A",
    code: `public class OrderProcessor {
    private final PaymentService paymentService;
    private final ShippingService shippingService;
    
    public OrderProcessor(PaymentService ps, ShippingService ss) {
        this.paymentService = ps;
        this.shippingService = ss;
    }
}`,
    explanation: "Composition over Inheritance! OrderProcessor 'has-a' PaymentService và ShippingService thay vì extend chúng. Composition flexible hơn, dễ test (inject mocks), và tránh tight coupling. Prefer composition in most cases."
  },
  {
    question: "Identify the switch statement issue:",
    options: {
      A: "Missing default case",
      B: "Should use polymorphism",
      C: "Both A and B",
      D: "No issue"
    },
    correctAnswer: "C",
    code: `public double calculatePay(Employee e) {
    switch (e.getType()) {
        case HOURLY:
            return e.getHours() * e.getRate();
        case SALARY:
            return e.getSalary() / 12;
        case COMMISSION:
            return e.getSales() * e.getCommissionRate();
    }
}`,
    explanation: "Hai vấn đề: (1) Thiếu default case - nếu thêm type mới sẽ return gì? (2) Switch trên type thường là signal để dùng polymorphism - mỗi Employee subclass override calculatePay(). OCP: open for extension, closed for modification."
  },
  {
    question: "What's wrong with this code?",
    options: {
      A: "Using System.out.println",
      B: "Missing logger",
      C: "Both A and B",
      D: "Console output is fine"
    },
    correctAnswer: "C",
    code: `public void processOrder(Order order) {
    System.out.println("Processing order: " + order.getId());
    // process logic
    System.out.println("Order processed successfully");
}`,
    explanation: "System.out.println không phù hợp cho production: (1) Không có log levels, (2) Không có timestamps, (3) Không configure được destination, (4) Không có structured logging. Dùng proper logging framework: log.info(), log.debug()."
  },
  {
    question: "Identify the class cohesion issue:",
    options: {
      A: "Low cohesion - methods don't relate",
      B: "High cohesion - methods relate well",
      C: "Cannot determine",
      D: "Cohesion not applicable here"
    },
    correctAnswer: "A",
    code: `public class Utility {
    public String formatDate(Date date) { }
    public double calculateTax(double amount) { }
    public void sendEmail(String to, String subject) { }
    public List<String> parseCSV(String content) { }
}`,
    explanation: "Low cohesion! Các methods không liên quan đến nhau - đây là 'Utility' class smell. Nên tách: DateFormatter, TaxCalculator, EmailService, CsvParser. High cohesion = methods trong class phục vụ một purpose chung."
  },
  {
    question: "What is the proper way to structure constants?",
    options: {
      A: "Create Constants class with all constants",
      B: "Define constants in classes that use them",
      C: "Use interfaces for constants",
      D: "Constants should be in properties file"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Constants nên định nghĩa trong class sử dụng chúng. 'Constants' class chứa mọi thứ là anti-pattern (God class, low cohesion). Interface for constants vi phạm interface purpose. Config values (URLs, etc.) nên ở properties file."
  },
  {
    question: "Find the temporal coupling issue:",
    options: {
      A: "Methods must be called in specific order",
      B: "Thread safety issue",
      C: "Both A and B",
      D: "No issue"
    },
    correctAnswer: "A",
    code: `public class ReportGenerator {
    public void setTemplate(String template) { }
    public void setData(List<Object> data) { }
    public void setFormat(String format) { }
    public Report generate() { }
}`,
    explanation: "Temporal coupling: phải gọi setTemplate, setData, setFormat TRƯỚC generate(), nhưng compiler không enforce. Nếu quên sẽ có bug. Better: dùng Builder pattern hoặc require all params trong constructor/generate() method."
  },
  {
    question: "What's the issue with this method?",
    options: {
      A: "Side effects in getter",
      B: "Getter should not modify state",
      C: "Both A and B mean the same thing",
      D: "This is acceptable"
    },
    correctAnswer: "C",
    code: `public class Counter {
    private int count = 0;
    
    public int getCount() {
        return count++;
    }
}`,
    explanation: "'getCount()' có side effect - tăng count! Getters KHÔNG nên modify state. Caller expect get không thay đổi object. Bug-prone: mỗi lần gọi getCount() kết quả khác nhau! Tách thành: getCount() và incrementCount()."
  },
  {
    question: "Identify the naming and structure best practice:",
    options: {
      A: "Package by layer",
      B: "Package by feature",
      C: "Both are equally good",
      D: "Depends on project size"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Tùy project: (1) Small projects: package by layer (controllers/, services/, repositories/) đơn giản hơn, (2) Large projects: package by feature (user/, order/, payment/) giúp modular và team independence. Microservices thường dùng feature-based."
  },
  {
    question: "What principle does this code follow?",
    options: {
      A: "Fail fast",
      B: "Fail safe",
      C: "Defensive programming",
      D: "Both A and C"
    },
    correctAnswer: "D",
    code: `public void transfer(Account from, Account to, BigDecimal amount) {
    Objects.requireNonNull(from, "Source account required");
    Objects.requireNonNull(to, "Target account required");
    Objects.requireNonNull(amount, "Amount required");
    if (amount.compareTo(BigDecimal.ZERO) <= 0) {
        throw new IllegalArgumentException("Amount must be positive");
    }
    // transfer logic
}`,
    explanation: "Fail Fast + Defensive Programming! Method validate inputs ĐẦU TIÊN, throw exception NGAY nếu invalid. Đây là best practice: detect problems sớm, gần nguồn gốc. Giúp debugging dễ hơn vì errors xảy ra ở nơi gây ra chúng."
  },
  {
    question: "What's wrong with this boolean parameter?",
    options: {
      A: "Boolean parameter makes API unclear",
      B: "Should use two separate methods",
      C: "Both A and B",
      D: "Nothing wrong"
    },
    correctAnswer: "C",
    code: `public void setActive(boolean active, boolean sendNotification) {
    this.active = active;
    if (sendNotification) {
        notifyUser();
    }
}`,
    explanation: "Boolean params làm call site khó đọc: setActive(true, false) nghĩa là gì? Tốt hơn: tách thành setActive() và setActiveWithNotification(), hoặc dùng fluent API / parameter object. Boolean params = code smell."
  },
  {
    question: "Find the law of Demeter violation:",
    options: {
      A: "Train wreck pattern",
      B: "Accessing nested objects directly",
      C: "Both A and B",
      D: "No violation"
    },
    correctAnswer: "C",
    code: `public String getCustomerCity(Order order) {
    return order.getCustomer().getAddress().getCity();
}`,
    explanation: "Train wreck (method chaining qua nhiều objects) vi phạm Law of Demeter: 'only talk to your immediate friends'. Code couples với internal structure của Order, Customer, Address. Nếu Address structure thay đổi, code break. Better: order.getCustomerCity()."
  }
];
