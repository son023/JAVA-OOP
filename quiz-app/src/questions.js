export const questions = [
  // ============ VARIABLE NAMING CONVENTIONS (1-20) ============
  {
    question: "Which of the following is the correct naming convention for a constant in Java?",
    options: {
      A: "maxValue",
      B: "MAX_VALUE",
      C: "MaxValue",
      D: "max_value"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Trong Java, hằng số (constants) được đặt tên theo quy tắc SCREAMING_SNAKE_CASE - tất cả chữ in hoa và các từ được phân cách bằng dấu gạch dưới."
  },
  {
    question: "What is the correct naming convention for a local variable in Java?",
    options: {
      A: "MyVariable",
      B: "my_variable",
      C: "myVariable",
      D: "MY_VARIABLE"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Biến cục bộ trong Java sử dụng quy tắc camelCase - chữ cái đầu tiên viết thường, các từ tiếp theo viết hoa chữ cái đầu."
  },
  {
    question: "Which variable name follows Java naming conventions for a boolean variable?",
    options: {
      A: "active",
      B: "isActive",
      C: "Active",
      D: "ACTIVE"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Biến boolean trong Java thường bắt đầu bằng 'is', 'has', 'can', 'should' để thể hiện rõ ý nghĩa true/false. Ví dụ: isActive, hasPermission, canEdit."
  },
  {
    question: "What is wrong with this variable name in Java: '2ndPlace'?",
    options: {
      A: "It contains a number",
      B: "It starts with a number",
      C: "It uses camelCase",
      D: "Nothing is wrong"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Tên biến trong Java không được bắt đầu bằng số. Đây là quy tắc cú pháp bắt buộc. Có thể sửa thành 'secondPlace' hoặc 'place2nd'."
  },
  {
    question: "Which of the following is NOT a valid variable name in Java?",
    options: {
      A: "_count",
      B: "$total",
      C: "class",
      D: "myVar1"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'class' là từ khóa (reserved keyword) trong Java nên không thể sử dụng làm tên biến. Các từ khóa khác như 'int', 'public', 'static' cũng không được dùng."
  },
  {
    question: "What naming convention should be used for a private instance variable in Java?",
    options: {
      A: "PUBLIC_NAME",
      B: "privateName",
      C: "_privateName",
      D: "PrivateName"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Biến instance private trong Java sử dụng camelCase như các biến thông thường. Không cần thêm prefix '_' như một số ngôn ngữ khác (Python). Access modifier đã thể hiện tính private."
  },
  {
    question: "Which variable name best represents a collection of users?",
    options: {
      A: "user",
      B: "userList",
      C: "users",
      D: "USER"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Tên biến cho collection nên ở dạng số nhiều (plural) như 'users', 'items', 'orders'. Điều này giúp code dễ đọc và phân biệt với biến đơn lẻ."
  },
  {
    question: "What is the recommended way to name a temporary loop variable?",
    options: {
      A: "temporaryLoopVariable",
      B: "i",
      C: "temp",
      D: "loopVar"
    },
    correctAnswer: "B",
    code: "for (int i = 0; i < 10; i++) { }",
    explanation: "Các biến vòng lặp đơn giản thường dùng tên ngắn như 'i', 'j', 'k'. Đây là convention được chấp nhận rộng rãi vì phạm vi sử dụng rất nhỏ và mọi người đều hiểu."
  },
  {
    question: "Which naming style is used for JavaScript constants in modern ES6+?",
    options: {
      A: "camelCase",
      B: "PascalCase",
      C: "SCREAMING_SNAKE_CASE",
      D: "kebab-case"
    },
    correctAnswer: "C",
    code: "const MAX_RETRIES = 3;",
    explanation: "Trong JavaScript ES6+, hằng số thường được đặt tên theo SCREAMING_SNAKE_CASE giống Java. Tuy nhiên, nếu const chứa object/array có thể thay đổi, vẫn dùng camelCase."
  },
  {
    question: "What is wrong with this variable name: 'x'?",
    options: {
      A: "It's too short",
      B: "It doesn't describe the purpose",
      C: "Both A and B",
      D: "Nothing, it's acceptable in all cases"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Tên biến 'x' quá ngắn và không mô tả mục đích sử dụng. Tên biến nên có ý nghĩa rõ ràng. Tuy nhiên, 'x' có thể chấp nhận trong các phép tính toán học ngắn hoặc lambda expressions."
  },
  {
    question: "Which is the correct way to name an interface in Java?",
    options: {
      A: "iRunnable",
      B: "RunnableInterface",
      C: "Runnable",
      D: "RUNNABLE"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Interface trong Java đặt tên theo PascalCase giống class, thường là tính từ (Runnable, Serializable) hoặc danh từ. Không cần prefix 'I' như C#."
  },
  {
    question: "What is the Hungarian notation and should it be used in Java?",
    options: {
      A: "Prefix with data type (strName), not recommended",
      B: "Suffix with data type (nameStr), recommended",
      C: "Using underscores, recommended",
      D: "Using camelCase, not recommended"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Hungarian notation là quy tắc đặt prefix theo kiểu dữ liệu (strName, intCount). Không khuyến khích trong Java vì IDE hiện đại đã hiển thị kiểu dữ liệu, và code trở nên khó đọc."
  },
  {
    question: "Which variable name follows the principle of meaningful naming?",
    options: {
      A: "d",
      B: "data",
      C: "elapsedTimeInDays",
      D: "eTD"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'elapsedTimeInDays' mô tả rõ ràng mục đích (thời gian đã trôi qua) và đơn vị (ngày). Tên biến có ý nghĩa giúp code tự giải thích mà không cần comment."
  },
  {
    question: "In JavaScript, which naming convention is used for private class fields?",
    options: {
      A: "_privateField",
      B: "#privateField",
      C: "privateField",
      D: "PRIVATE_FIELD"
    },
    correctAnswer: "B",
    code: "class MyClass { #privateField = 10; }",
    explanation: "JavaScript ES2022+ hỗ trợ private fields với prefix '#'. Đây là cách chính thức để tạo private field, khác với convention '_' chỉ là quy ước không có enforcement."
  },
  {
    question: "What is the recommended maximum length for a variable name?",
    options: {
      A: "5 characters",
      B: "10 characters",
      C: "No strict limit, but should be descriptive yet concise",
      D: "30 characters exactly"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Không có giới hạn cứng cho độ dài tên biến. Nguyên tắc là đủ dài để mô tả rõ ràng, nhưng đủ ngắn để dễ đọc. Thường từ 10-20 ký tự là phù hợp."
  },
  {
    question: "Which is the correct naming for an enum constant in Java?",
    options: {
      A: "monday",
      B: "Monday",
      C: "MONDAY",
      D: "Mon"
    },
    correctAnswer: "C",
    code: "enum Day { MONDAY, TUESDAY, WEDNESDAY }",
    explanation: "Enum constants trong Java sử dụng SCREAMING_SNAKE_CASE giống như hằng số. Điều này giúp phân biệt enum values với các biến thông thường."
  },
  {
    question: "What naming convention should generic type parameters follow in Java?",
    options: {
      A: "Full words like 'Type'",
      B: "Single uppercase letters like 'T', 'E', 'K', 'V'",
      C: "Lowercase letters",
      D: "Prefixed with 'Type_'"
    },
    correctAnswer: "B",
    code: "public class Box<T> { }",
    explanation: "Generic type parameters trong Java dùng chữ cái in hoa đơn: T (Type), E (Element), K (Key), V (Value), N (Number). Đây là convention chuẩn giúp code ngắn gọn."
  },
  {
    question: "Which variable name is most appropriate for storing a user's age?",
    options: {
      A: "a",
      B: "age",
      C: "userAge",
      D: "theAgeOfTheUser"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'userAge' cân bằng giữa ngắn gọn và mô tả rõ ràng. 'age' có thể gây nhầm lẫn nếu có nhiều đối tượng, 'theAgeOfTheUser' quá dài và thừa từ."
  },
  {
    question: "In Java, what prefix is commonly used for boolean getter methods?",
    options: {
      A: "get",
      B: "is",
      C: "has",
      D: "Both B and C"
    },
    correctAnswer: "D",
    code: "public boolean isActive() { }\npublic boolean hasPermission() { }",
    explanation: "Boolean getter methods thường dùng prefix 'is' (isActive, isValid) hoặc 'has' (hasChildren, hasPermission). Điều này giúp code đọc như câu tiếng Anh tự nhiên."
  },
  {
    question: "Which naming is correct for a static factory method in Java?",
    options: {
      A: "CreateInstance",
      B: "create_instance",
      C: "createInstance",
      D: "CREATEINSTANCE"
    },
    correctAnswer: "C",
    code: "public static User createInstance() { }",
    explanation: "Static factory methods trong Java dùng camelCase như các method khác. Các tên phổ biến: of(), valueOf(), getInstance(), newInstance(), create()."
  },

  // ============ FUNCTION/METHOD NAMING CONVENTIONS (21-40) ============
  {
    question: "What naming convention should methods follow in Java?",
    options: {
      A: "PascalCase",
      B: "camelCase",
      C: "snake_case",
      D: "SCREAMING_CASE"
    },
    correctAnswer: "B",
    code: "public void calculateTotal() { }",
    explanation: "Methods trong Java sử dụng camelCase - bắt đầu bằng chữ thường, các từ tiếp theo viết hoa chữ đầu. Ví dụ: getName(), calculateSum(), processOrder()."
  },
  {
    question: "Which is the recommended way to name a method that returns a boolean?",
    options: {
      A: "checkValid()",
      B: "valid()",
      C: "isValid()",
      D: "getValid()"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Method trả về boolean nên bắt đầu bằng 'is', 'has', 'can', 'should', 'will'. Điều này giúp code đọc tự nhiên: if (user.isActive()) { ... }"
  },
  {
    question: "What should a method name start with according to conventions?",
    options: {
      A: "A noun",
      B: "A verb",
      C: "An adjective",
      D: "A number"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Tên method nên bắt đầu bằng động từ vì method thực hiện hành động: calculate(), process(), validate(), send(), create(), delete()."
  },
  {
    question: "Which method name follows the getter convention in Java?",
    options: {
      A: "name()",
      B: "getName()",
      C: "fetchName()",
      D: "returnName()"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Getter trong Java theo convention JavaBeans: getPropertyName(). Điều này cho phép các framework như Spring, Hibernate tự động detect và sử dụng."
  },
  {
    question: "What is the correct setter method name for a property called 'email'?",
    options: {
      A: "email(String email)",
      B: "setEmail(String email)",
      C: "changeEmail(String email)",
      D: "updateEmail(String email)"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Setter trong Java theo convention JavaBeans: setPropertyName(value). Pattern này được sử dụng rộng rãi trong Java ecosystem và các IDE tự động generate."
  },
  {
    question: "Which of the following is a good name for a method that converts an object to JSON?",
    options: {
      A: "json()",
      B: "makeJson()",
      C: "toJson()",
      D: "convertToJson()"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Methods chuyển đổi thường dùng pattern 'toX()': toString(), toJson(), toArray(), toList(). Ngắn gọn và rõ ràng về mục đích chuyển đổi."
  },
  {
    question: "What naming pattern should be used for factory methods?",
    options: {
      A: "make(), build(), create()",
      B: "of(), valueOf(), from()",
      C: "new(), init(), construct()",
      D: "All of the above are acceptable"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Factory methods có nhiều pattern: of() (List.of()), valueOf() (Integer.valueOf()), from() (Date.from()), create(), newInstance(). Tùy context mà chọn phù hợp."
  },
  {
    question: "In JavaScript, what naming convention is used for constructor functions (before ES6 classes)?",
    options: {
      A: "camelCase",
      B: "PascalCase",
      C: "snake_case",
      D: "SCREAMING_CASE"
    },
    correctAnswer: "B",
    code: "function Person(name) { this.name = name; }",
    explanation: "Constructor functions trong JavaScript dùng PascalCase để phân biệt với functions thông thường. Khi gọi với 'new', biết ngay đây là constructor."
  },
  {
    question: "Which method name indicates it may throw an exception?",
    options: {
      A: "parseOrNull()",
      B: "tryParse()",
      C: "parse()",
      D: "safeParse()"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Method không có prefix đặc biệt (parse()) thường có thể throw exception. Các variant như tryParse(), parseOrNull(), parseOrDefault() thường không throw mà trả về giá trị thay thế."
  },
  {
    question: "What is the convention for naming callback functions in JavaScript?",
    options: {
      A: "onEventName or handleEventName",
      B: "CALLBACK_NAME",
      C: "callback_name",
      D: "_callbackName"
    },
    correctAnswer: "A",
    code: "onClick, onSubmit, handleClick, handleSubmit",
    explanation: "Callback functions trong JavaScript thường dùng prefix 'on' hoặc 'handle': onClick, onSubmit, handleClick, handleFormSubmit. React components thường dùng pattern này."
  },
  {
    question: "Which naming is appropriate for a method that validates user input?",
    options: {
      A: "userInput()",
      B: "validateUserInput()",
      C: "inputValidation()",
      D: "isUserInput()"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Method thực hiện validation nên bắt đầu bằng 'validate': validateUserInput(), validateEmail(). Động từ 'validate' rõ ràng cho biết method sẽ kiểm tra và có thể throw error."
  },
  {
    question: "What is the recommended approach for naming overloaded methods?",
    options: {
      A: "Use different names for each",
      B: "Use the same name with different parameters",
      C: "Add numbers to distinguish (method1, method2)",
      D: "Add parameter type to name (methodInt, methodString)"
    },
    correctAnswer: "B",
    code: "void print(String s) { }\nvoid print(int i) { }",
    explanation: "Overloaded methods dùng cùng tên, khác nhau ở tham số. Java compiler phân biệt dựa trên signature. Không nên đặt tên khác nhau vì làm mất ý nghĩa overloading."
  },
  {
    question: "In functional programming style, what prefix is often used for pure functions that create new values?",
    options: {
      A: "create",
      B: "with",
      C: "make",
      D: "new"
    },
    correctAnswer: "B",
    code: "user.withName(\"John\").withAge(25)",
    explanation: "Pattern 'with' thường dùng cho immutable objects và method chaining. withX() trả về bản copy mới với thuộc tính X được thay đổi, object gốc không đổi."
  },
  {
    question: "Which is NOT a good practice for method naming?",
    options: {
      A: "Using verbs at the beginning",
      B: "Keeping names short and abbreviated",
      C: "Making names descriptive of what the method does",
      D: "Using camelCase in Java"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Không nên viết tắt tên method (calcTot thay vì calculateTotal). Tên rõ ràng quan trọng hơn ngắn gọn. IDE có autocomplete nên độ dài không phải vấn đề khi viết code."
  },
  {
    question: "What does the 'find' prefix typically indicate in a method name?",
    options: {
      A: "The method always returns a value",
      B: "The method may return null or empty",
      C: "The method throws an exception if not found",
      D: "The method modifies the original collection"
    },
    correctAnswer: "B",
    code: "Optional<User> findUserById(int id)",
    explanation: "Prefix 'find' thường indicate method có thể không tìm thấy và trả về null/Optional/empty. So với 'get' thường expect có giá trị và có thể throw exception nếu không có."
  },
  {
    question: "Which method naming pattern indicates the method modifies the object in place?",
    options: {
      A: "sort()",
      B: "sorted()",
      C: "toSorted()",
      D: "getSorted()"
    },
    correctAnswer: "A",
    code: "list.sort(); // modifies list\nlist.stream().sorted(); // returns new stream",
    explanation: "Động từ đơn (sort, add, remove) thường modify object in-place. Past participle (sorted) hoặc prefix 'to' (toSorted) thường trả về bản copy mới."
  },
  {
    question: "In JavaScript, what is the convention for async functions?",
    options: {
      A: "Prefix with 'async'",
      B: "Suffix with 'Async'",
      C: "No special naming required",
      D: "Prefix with 'await'"
    },
    correctAnswer: "C",
    code: "async function fetchUser() { }",
    explanation: "JavaScript async functions không cần naming convention đặc biệt. Keyword 'async' trong declaration đã rõ ràng. Tuy nhiên, một số team thêm suffix 'Async' cho rõ ràng hơn."
  },
  {
    question: "What naming convention should test methods follow in Java?",
    options: {
      A: "testMethodName",
      B: "methodName_condition_expectedResult",
      C: "test_methodName",
      D: "All are acceptable depending on team convention"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Test methods có nhiều conventions: testAdd(), add_twoNumbers_returnsSum(), shouldReturnSum(). JUnit 5 không yêu cầu prefix 'test'. Quan trọng là team thống nhất một style."
  },
  {
    question: "Which is the correct way to name a method that initializes resources?",
    options: {
      A: "start()",
      B: "init()",
      C: "setup()",
      D: "All are acceptable"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Các tên init(), initialize(), setup(), start() đều acceptable cho initialization. init() phổ biến trong Java, setup() thường dùng trong testing (JUnit @Before)."
  },
  {
    question: "What naming pattern is used for methods that release resources in Java?",
    options: {
      A: "close(), cleanup(), dispose()",
      B: "end(), finish(), terminate()",
      C: "release(), free(), destroy()",
      D: "All of the above"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Các pattern phổ biến: close() (Closeable interface), cleanup(), dispose() (GUI), destroy() (Servlet). Pattern nào phụ thuộc vào context và conventions của framework đang dùng."
  },

  // ============ COMMENTS AND DOCUMENTATION (41-60) ============
  {
    question: "What is the correct format for a Javadoc comment?",
    options: {
      A: "// This is a comment",
      B: "/* This is a comment */",
      C: "/** This is a comment */",
      D: "# This is a comment"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Javadoc comments bắt đầu bằng /** và kết thúc bằng */. Đây là format đặc biệt mà tool javadoc sử dụng để generate documentation HTML."
  },
  {
    question: "Which Javadoc tag is used to document a method parameter?",
    options: {
      A: "@parameter",
      B: "@param",
      C: "@arg",
      D: "@argument"
    },
    correctAnswer: "B",
    code: "/**\n * @param name The user's name\n */",
    explanation: "@param là tag chuẩn để document tham số của method. Format: @param tênThamSố mô tả. Mỗi tham số nên có một @param riêng."
  },
  {
    question: "What Javadoc tag documents the return value of a method?",
    options: {
      A: "@returns",
      B: "@return",
      C: "@result",
      D: "@output"
    },
    correctAnswer: "B",
    code: "/**\n * @return The calculated sum\n */",
    explanation: "@return (không có 's') là tag chuẩn trong Javadoc để mô tả giá trị trả về. Lưu ý: JavaScript JSDoc dùng @returns (có 's')."
  },
  {
    question: "Which comment style should be avoided in production code?",
    options: {
      A: "Javadoc comments",
      B: "TODO comments left indefinitely",
      C: "Comments explaining complex algorithms",
      D: "License header comments"
    },
    correctAnswer: "B",
    code: null,
    explanation: "TODO comments không nên để lại indefinitely trong production. Chúng nên được tracked trong issue tracker và xử lý. TODO lâu ngày trở thành 'noise' trong code."
  },
  {
    question: "What is the purpose of the @throws or @exception Javadoc tag?",
    options: {
      A: "To catch exceptions",
      B: "To document exceptions that may be thrown",
      C: "To throw an exception",
      D: "To suppress exceptions"
    },
    correctAnswer: "B",
    code: "/**\n * @throws IllegalArgumentException if value is negative\n */",
    explanation: "@throws (hoặc @exception) dùng để document các exception mà method có thể throw. Giúp caller biết cần handle những exception nào."
  },
  {
    question: "Which of the following is a good comment practice?",
    options: {
      A: "Comment every line of code",
      B: "Explain 'what' the code does",
      C: "Explain 'why' the code does something",
      D: "Use comments instead of meaningful names"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Good comments giải thích 'tại sao' (why) chứ không phải 'cái gì' (what). Code should be self-documenting cho 'what'. Comment cho context, business rules, hoặc decisions."
  },
  {
    question: "What is wrong with this comment: '// increment i by 1' above 'i++;'?",
    options: {
      A: "The comment is too short",
      B: "The comment states the obvious",
      C: "The comment uses incorrect grammar",
      D: "Nothing is wrong"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Comment này thừa vì nói điều hiển nhiên mà code đã thể hiện rõ. 'i++' đã tự giải thích. Comments nên thêm value, không lặp lại code."
  },
  {
    question: "Which Javadoc tag is used to reference another class or method?",
    options: {
      A: "@link",
      B: "@ref",
      C: "@see",
      D: "Both A and C"
    },
    correctAnswer: "D",
    code: "/**\n * @see OtherClass#method()\n * Use {@link OtherClass} for details\n */",
    explanation: "@see tạo 'See Also' section trong generated docs. {@link ClassName} tạo inline hyperlink. Cả hai đều dùng để reference related code."
  },
  {
    question: "What is the purpose of the @deprecated Javadoc tag?",
    options: {
      A: "To delete old code",
      B: "To mark code that should no longer be used",
      C: "To hide code from documentation",
      D: "To optimize old code"
    },
    correctAnswer: "B",
    code: "/**\n * @deprecated Use {@link #newMethod()} instead\n */",
    explanation: "@deprecated đánh dấu code không nên dùng nữa. Compiler sẽ warning khi code deprecated được sử dụng. Nên chỉ ra alternative để developer biết dùng gì thay thế."
  },
  {
    question: "In JavaScript, which comment format is used for JSDoc?",
    options: {
      A: "// JSDoc comment",
      B: "/* JSDoc comment */",
      C: "/** JSDoc comment */",
      D: "/// JSDoc comment"
    },
    correctAnswer: "C",
    code: "/**\n * @param {string} name\n * @returns {boolean}\n */",
    explanation: "JSDoc dùng format /** */ giống Javadoc. JSDoc comments cho phép document types, parameters, return values và được IDE sử dụng cho autocomplete."
  },
  {
    question: "Which of the following is NOT a valid reason to write comments?",
    options: {
      A: "Explain complex business logic",
      B: "Document public API",
      C: "Compensate for poorly named variables",
      D: "Explain workarounds for bugs"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Không nên dùng comment để bù đắp cho tên biến tệ. Thay vào đó, hãy đặt tên biến có ý nghĩa. Comments nên cho context, không phải giải thích code tệ."
  },
  {
    question: "What is a 'magic comment' in programming?",
    options: {
      A: "A comment that makes code run faster",
      B: "A special comment that affects program behavior",
      C: "A comment written by senior developers",
      D: "An encrypted comment"
    },
    correctAnswer: "B",
    code: "// @ts-ignore\n// eslint-disable-next-line",
    explanation: "Magic comments là comments đặc biệt ảnh hưởng đến behavior của tools (compiler, linter). Ví dụ: @ts-ignore, eslint-disable, pragma once."
  },
  {
    question: "How should you document a method that may return null?",
    options: {
      A: "Don't mention it",
      B: "Use @nullable annotation and document when null is returned",
      C: "Only use @return tag",
      D: "Write 'may be null' in method name"
    },
    correctAnswer: "B",
    code: "/**\n * @return the user, or null if not found\n */\n@Nullable\npublic User findUser(int id)",
    explanation: "Khi method có thể return null, cần document rõ ràng trong @return tag và dùng @Nullable annotation. Caller cần biết để handle null case."
  },
  {
    question: "What is the recommended practice for commented-out code?",
    options: {
      A: "Keep it for reference",
      B: "Remove it - use version control instead",
      C: "Convert it to a string",
      D: "Move it to a separate file"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Commented-out code nên được xóa. Version control (Git) lưu trữ history nếu cần tham khảo. Code bị comment tạo confusion và làm codebase khó maintain."
  },
  {
    question: "Which tag is used in Javadoc to document the author of a class?",
    options: {
      A: "@writer",
      B: "@author",
      C: "@creator",
      D: "@by"
    },
    correctAnswer: "B",
    code: "/**\n * @author John Doe\n */",
    explanation: "@author tag document tác giả của class/interface. Tuy nhiên, nhiều team không dùng vì Git blame đã track author info tốt hơn và luôn up-to-date."
  },
  {
    question: "What is the purpose of the @since tag in Javadoc?",
    options: {
      A: "To show time elapsed",
      B: "To indicate the version when the feature was added",
      C: "To set a timer",
      D: "To show creation date"
    },
    correctAnswer: "B",
    code: "/**\n * @since 1.5\n */",
    explanation: "@since chỉ ra version nào feature được thêm vào. Quan trọng cho library/API để users biết minimum version required. Ví dụ: @since Java 8."
  },
  {
    question: "Which comment style is used for file headers in Java?",
    options: {
      A: "Single-line comments only",
      B: "Block comments with license and copyright info",
      C: "No comments needed",
      D: "HTML comments"
    },
    correctAnswer: "B",
    code: "/*\n * Copyright 2024 Company Name\n * Licensed under Apache 2.0\n */",
    explanation: "File headers thường chứa copyright, license info, và mô tả ngắn về file. Dùng block comment /* */ ở đầu file. Nhiều IDE có template cho việc này."
  },
  {
    question: "What is 'self-documenting code'?",
    options: {
      A: "Code that automatically generates documentation",
      B: "Code that is clear enough to understand without comments",
      C: "Code with comments on every line",
      D: "Code written by documentation tools"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Self-documenting code là code rõ ràng đến mức không cần comment để hiểu 'what' và 'how'. Đạt được qua meaningful names, clear structure, và small functions."
  },
  {
    question: "When should you update comments?",
    options: {
      A: "Never, comments are permanent",
      B: "Only when the project is complete",
      C: "Whenever the related code changes",
      D: "Once a year"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Comments phải được update khi code thay đổi. Outdated comments còn tệ hơn không có comments vì gây misleading. Đây là lý do minimize comments và để code tự giải thích."
  },
  {
    question: "What does the @version tag indicate in Javadoc?",
    options: {
      A: "Java version required",
      B: "Current version of the class/interface",
      C: "IDE version",
      D: "Comment version"
    },
    correctAnswer: "B",
    code: "/**\n * @version 2.0\n */",
    explanation: "@version chỉ version hiện tại của class. Tuy nhiên, nhiều project không dùng vì version thường managed ở project level (pom.xml, build.gradle) chứ không phải class level."
  },

  // ============ EXCEPTION HANDLING CONVENTIONS (61-80) ============
  {
    question: "What is the naming convention for custom exception classes in Java?",
    options: {
      A: "MyError",
      B: "MyException",
      C: "MyExc",
      D: "ExceptionMy"
    },
    correctAnswer: "B",
    code: "public class InvalidUserException extends Exception { }",
    explanation: "Custom exception classes nên kết thúc bằng 'Exception' (checked) hoặc 'Error' (unchecked severe). Ví dụ: FileNotFoundException, OutOfMemoryError."
  },
  {
    question: "Which is the correct way to catch multiple exceptions in Java 7+?",
    options: {
      A: "catch (IOException, SQLException e)",
      B: "catch (IOException | SQLException e)",
      C: "catch (IOException && SQLException e)",
      D: "catch (IOException or SQLException e)"
    },
    correctAnswer: "B",
    code: "try { } catch (IOException | SQLException e) { }",
    explanation: "Java 7+ hỗ trợ multi-catch với toán tử |. Giúp giảm code duplication khi xử lý nhiều exceptions theo cùng cách. Biến e implicitly final."
  },
  {
    question: "What is wrong with catching Exception or Throwable directly?",
    options: {
      A: "It's a syntax error",
      B: "It catches too broadly, including programming errors",
      C: "It's slower",
      D: "Nothing is wrong"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Catch Exception/Throwable quá rộng, bắt cả RuntimeExceptions và Errors (NullPointerException, OutOfMemoryError). Nên catch specific exceptions để handle đúng cách."
  },
  {
    question: "What should you do in a catch block at minimum?",
    options: {
      A: "Leave it empty",
      B: "Print the stack trace",
      C: "Log the exception appropriately",
      D: "Throw a new exception"
    },
    correctAnswer: "C",
    code: "catch (Exception e) {\n    logger.error(\"Operation failed\", e);\n}",
    explanation: "Catch block không nên để trống (swallow exception). Minimum là log exception với context. printStackTrace() không tốt vì đi ra console thay vì log system."
  },
  {
    question: "What is the purpose of the 'finally' block?",
    options: {
      A: "To catch exceptions",
      B: "To execute code only if no exception occurs",
      C: "To execute cleanup code regardless of exception",
      D: "To throw exceptions"
    },
    correctAnswer: "C",
    code: "try { } catch (Exception e) { } finally { /* always runs */ }",
    explanation: "Finally block chạy regardless of exception xảy ra hay không. Dùng để cleanup resources (close streams, connections). Java 7+ có try-with-resources thay thế cho nhiều cases."
  },
  {
    question: "What is try-with-resources in Java?",
    options: {
      A: "A way to try multiple resources simultaneously",
      B: "Automatic resource management that closes resources",
      C: "A testing framework",
      D: "A way to allocate more memory"
    },
    correctAnswer: "B",
    code: "try (FileReader fr = new FileReader(file)) {\n    // use fr\n} // fr automatically closed",
    explanation: "Try-with-resources (Java 7+) tự động close resources implement AutoCloseable. Thay thế finally block cho resource cleanup. Cleaner và ít bug hơn manual close."
  },
  {
    question: "When should you use checked vs unchecked exceptions?",
    options: {
      A: "Always use checked exceptions",
      B: "Always use unchecked exceptions",
      C: "Checked for recoverable, unchecked for programming errors",
      D: "It doesn't matter"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Checked exceptions (extends Exception) cho lỗi recoverable (file not found, network error). Unchecked (extends RuntimeException) cho programming errors (null pointer, invalid argument)."
  },
  {
    question: "What is exception chaining in Java?",
    options: {
      A: "Catching multiple exceptions",
      B: "Wrapping one exception in another while preserving the original",
      C: "Throwing exceptions in a loop",
      D: "Linking catch blocks"
    },
    correctAnswer: "B",
    code: "throw new ServiceException(\"Failed\", originalException);",
    explanation: "Exception chaining là wrap exception gốc trong exception mới. Preserve root cause cho debugging. Constructor Exception(String message, Throwable cause) hỗ trợ việc này."
  },
  {
    question: "What is the convention for exception messages?",
    options: {
      A: "Use uppercase only",
      B: "Include technical details and context",
      C: "Keep them empty",
      D: "Use error codes only"
    },
    correctAnswer: "B",
    code: "throw new IllegalArgumentException(\"User ID must be positive, got: \" + id);",
    explanation: "Exception messages nên có context và details hữu ích cho debugging. Include giá trị gây lỗi, expected values, và có thể suggested fix."
  },
  {
    question: "Which is the correct order of catch blocks?",
    options: {
      A: "Most general first, specific last",
      B: "Most specific first, general last",
      C: "Alphabetical order",
      D: "Order doesn't matter"
    },
    correctAnswer: "B",
    code: "catch (FileNotFoundException e) { }\ncatch (IOException e) { }",
    explanation: "Catch blocks phải từ specific đến general. FileNotFoundException trước IOException (vì FNFE extends IOException). Compiler sẽ error nếu order sai."
  },
  {
    question: "What should you avoid in exception handling?",
    options: {
      A: "Logging exceptions",
      B: "Using finally blocks",
      C: "Using exceptions for flow control",
      D: "Creating custom exceptions"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Không dùng exceptions cho normal flow control (ví dụ: dùng exception để break loop). Exceptions chậm và làm code khó đọc. Dùng conditionals cho flow control."
  },
  {
    question: "What is the 'throw early, catch late' principle?",
    options: {
      A: "Throw exceptions at the start of the day",
      B: "Validate and throw as soon as problem detected, catch at appropriate level",
      C: "Delay throwing exceptions",
      D: "Catch exceptions immediately"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Throw early: validate input và throw ngay khi phát hiện vấn đề. Catch late: handle exception ở level có đủ context để xử lý properly (thường là upper layers)."
  },
  {
    question: "How should you handle InterruptedException in Java?",
    options: {
      A: "Ignore it",
      B: "Log and continue",
      C: "Restore the interrupted status or propagate",
      D: "Throw RuntimeException"
    },
    correctAnswer: "C",
    code: "catch (InterruptedException e) {\n    Thread.currentThread().interrupt();\n    throw new RuntimeException(e);\n}",
    explanation: "InterruptedException cần được handle carefully. Hoặc propagate lên, hoặc restore interrupted status với Thread.currentThread().interrupt(). Không nên swallow."
  },
  {
    question: "What is a suppressed exception in Java?",
    options: {
      A: "An exception that is hidden",
      B: "An exception that occurred during resource cleanup in try-with-resources",
      C: "An exception that is caught but not logged",
      D: "An old exception type"
    },
    correctAnswer: "B",
    code: "exception.getSuppressed(); // returns suppressed exceptions",
    explanation: "Trong try-with-resources, nếu exception xảy ra trong cả try block và close(), exception từ close() được 'suppressed' và gắn vào primary exception."
  },
  {
    question: "What is the convention for rethrowing exceptions?",
    options: {
      A: "Always create a new exception",
      B: "Use 'throw e' to rethrow, or wrap with additional context",
      C: "Never rethrow exceptions",
      D: "Use return instead"
    },
    correctAnswer: "B",
    code: "catch (SQLException e) {\n    throw new DataAccessException(\"Query failed\", e);\n}",
    explanation: "Rethrow bằng 'throw e' giữ nguyên exception, hoặc wrap trong exception mới với context thêm. Luôn preserve original exception as cause để không mất stack trace."
  },
  {
    question: "What annotation marks that a method intentionally doesn't throw its declared exception?",
    options: {
      A: "@NoThrow",
      B: "@SuppressWarnings",
      C: "@SneakyThrows (Lombok)",
      D: "No such annotation in standard Java"
    },
    correctAnswer: "D",
    code: null,
    explanation: "Java standard không có annotation này. Lombok có @SneakyThrows để bypass checked exceptions (controversial). Best practice là declare đúng exceptions có thể throw."
  },
  {
    question: "When creating custom exceptions, what constructors should you include?",
    options: {
      A: "Only default constructor",
      B: "At least constructors matching Exception class",
      C: "Only constructor with message",
      D: "No constructors needed"
    },
    correctAnswer: "B",
    code: "public class MyException extends Exception {\n    public MyException() { }\n    public MyException(String msg) { super(msg); }\n    public MyException(String msg, Throwable cause) { super(msg, cause); }\n}",
    explanation: "Custom exceptions nên có các constructors giống Exception: default, message-only, message+cause, cause-only. Cho phép flexibility khi throw exception."
  },
  {
    question: "What is wrong with: catch (Exception e) { throw e; }?",
    options: {
      A: "Syntax error",
      B: "It loses the original stack trace",
      C: "Nothing, but it's pointless without additional handling",
      D: "It causes infinite loop"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Code này syntactically correct và preserve stack trace, nhưng pointless nếu không làm gì khác (log, cleanup, wrap). Nếu chỉ rethrow, không cần catch block."
  },
  {
    question: "How should exceptions be documented in Javadoc?",
    options: {
      A: "Only document checked exceptions",
      B: "Document all exceptions including when they're thrown",
      C: "Don't document exceptions",
      D: "Only document in README"
    },
    correctAnswer: "B",
    code: "/**\n * @throws IllegalArgumentException if id is negative\n * @throws UserNotFoundException if user doesn't exist\n */",
    explanation: "Document cả checked và unchecked exceptions với điều kiện gây throw. Caller cần biết để handle hoặc prevent. @throws hoặc @exception đều được."
  },
  {
    question: "What is defensive programming in exception handling?",
    options: {
      A: "Catching all exceptions",
      B: "Validating inputs and failing fast with clear exceptions",
      C: "Never throwing exceptions",
      D: "Using only try-catch"
    },
    correctAnswer: "B",
    code: "public void setAge(int age) {\n    if (age < 0) throw new IllegalArgumentException(\"Age cannot be negative\");\n    this.age = age;\n}",
    explanation: "Defensive programming: validate inputs, check preconditions, fail fast với clear error messages. Phát hiện bugs sớm thay vì để chúng gây problems sau."
  },

  // ============ CODE STRUCTURE AND FORMATTING (81-100) ============
  {
    question: "What is the recommended maximum line length in Java according to Google Style Guide?",
    options: {
      A: "60 characters",
      B: "80 characters",
      C: "100 characters",
      D: "No limit"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Google Java Style Guide khuyến nghị 100 characters. Oracle conventions truyền thống là 80. Quan trọng là team thống nhất một giới hạn và dùng formatter tự động."
  },
  {
    question: "Where should the opening brace be placed in Java?",
    options: {
      A: "On a new line (Allman style)",
      B: "On the same line (K&R style)",
      C: "Either is acceptable",
      D: "No braces needed"
    },
    correctAnswer: "B",
    code: "if (condition) {\n    // code\n}",
    explanation: "Java convention chuẩn là K&R style - opening brace trên cùng dòng với statement. Khác với C# thường dùng Allman style (brace trên dòng mới)."
  },
  {
    question: "How many blank lines should separate methods in a class?",
    options: {
      A: "Zero",
      B: "One",
      C: "Two",
      D: "Three"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Một blank line giữa các methods là convention phổ biến. Giúp code dễ đọc và phân biệt các methods. Quá nhiều blank lines làm code trở nên sparse."
  },
  {
    question: "What is the correct indentation style in Java?",
    options: {
      A: "2 spaces",
      B: "4 spaces or 1 tab",
      C: "8 spaces",
      D: "No indentation needed"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Java thường dùng 4 spaces hoặc 1 tab cho indentation. Google style dùng 2 spaces. Quan trọng là consistency trong project - không mix spaces và tabs."
  },
  {
    question: "In which order should class members be organized in Java?",
    options: {
      A: "Alphabetical order",
      B: "Random order",
      C: "Fields, constructors, methods",
      D: "Methods, fields, constructors"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Thứ tự chuẩn: static fields, instance fields, constructors, methods. Trong mỗi group, thường sắp theo access modifier (public -> private) hoặc logic liên quan."
  },
  {
    question: "What is the Single Responsibility Principle (SRP)?",
    options: {
      A: "A class should have only one method",
      B: "A class should have only one reason to change",
      C: "A method should have only one line",
      D: "A file should have only one class"
    },
    correctAnswer: "B",
    code: null,
    explanation: "SRP: mỗi class chỉ nên có một lý do để thay đổi, tức là một responsibility. Giúp code dễ maintain, test, và hiểu. Là chữ S trong SOLID principles."
  },
  {
    question: "What is the recommended maximum number of parameters for a method?",
    options: {
      A: "1-2",
      B: "3-4",
      C: "7-10",
      D: "No limit"
    },
    correctAnswer: "B",
    code: null,
    explanation: "3-4 parameters là lý tưởng. Nhiều hơn 4-5 parameters là code smell - nên dùng parameter object hoặc builder pattern. Quá nhiều parameters khó nhớ và dễ sai order."
  },
  {
    question: "What is the recommended maximum length for a method?",
    options: {
      A: "10 lines",
      B: "20-30 lines",
      C: "100 lines",
      D: "No limit as long as it works"
    },
    correctAnswer: "B",
    code: null,
    explanation: "20-30 lines là guideline tốt. Method nên fit trong một màn hình. Long methods khó hiểu và test. Nếu method quá dài, refactor thành smaller methods."
  },
  {
    question: "What does 'DRY' stand for in programming?",
    options: {
      A: "Do Repeat Yourself",
      B: "Don't Repeat Yourself",
      C: "Do Run Yourself",
      D: "Don't Run Yourself"
    },
    correctAnswer: "B",
    code: null,
    explanation: "DRY = Don't Repeat Yourself. Tránh duplicate code bằng cách extract vào methods, classes, hoặc modules có thể reuse. Duplicate code khó maintain và dễ gây bugs."
  },
  {
    question: "What is the 'magic number' code smell?",
    options: {
      A: "Using random numbers",
      B: "Using hard-coded numeric literals without explanation",
      C: "Using prime numbers",
      D: "Using negative numbers"
    },
    correctAnswer: "B",
    code: "// Bad: if (age > 18)\n// Good: if (age > ADULT_AGE)",
    explanation: "Magic numbers là numeric literals không có explanation. Khó hiểu 18 nghĩa là gì. Nên extract thành named constants: ADULT_AGE = 18, MAX_RETRIES = 3."
  },
  {
    question: "Which import style is preferred in Java?",
    options: {
      A: "Wildcard imports (import java.util.*)",
      B: "Explicit imports (import java.util.List)",
      C: "No imports, use full qualified names",
      D: "Static imports for everything"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Explicit imports preferred vì: rõ ràng classes nào được dùng, tránh naming conflicts, IDE dễ optimize. Wildcard imports có thể gây confusion và conflicts."
  },
  {
    question: "What is the convention for organizing imports in Java?",
    options: {
      A: "Alphabetical within groups: java.*, javax.*, third-party, project",
      B: "Random order",
      C: "By length of import statement",
      D: "By usage frequency"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Imports nên group: java.*, javax.*, third-party libraries, project packages. Trong mỗi group, sort alphabetically. Blank line giữa các groups. IDE auto-organize."
  },
  {
    question: "What is the purpose of using final keyword for method parameters?",
    options: {
      A: "To improve performance",
      B: "To prevent reassignment of the parameter",
      C: "To make the method faster",
      D: "To allow null values"
    },
    correctAnswer: "B",
    code: "public void process(final String input) { }",
    explanation: "final parameter ngăn reassign parameter trong method body. Giúp code dễ reason about vì biến không thay đổi. Một số teams require final cho tất cả parameters."
  },
  {
    question: "What is 'early return' pattern?",
    options: {
      A: "Returning from main() early",
      B: "Returning early from a method to reduce nesting",
      C: "Starting work early in the morning",
      D: "Returning before the deadline"
    },
    correctAnswer: "B",
    code: "if (input == null) return null;\n// main logic here",
    explanation: "Early return: kiểm tra edge cases/preconditions ở đầu method và return sớm. Giảm nesting, code dễ đọc hơn. Còn gọi là 'guard clauses'."
  },
  {
    question: "What is the convention for placing static members in a class?",
    options: {
      A: "At the end of the class",
      B: "Mixed with instance members",
      C: "At the beginning of the class",
      D: "In a separate file"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Static members (constants, static methods) thường đặt đầu class. Order: static constants, static fields, static blocks, instance fields, constructors, methods."
  },
  {
    question: "What is the 'Tell, Don't Ask' principle?",
    options: {
      A: "Never ask questions in code",
      B: "Tell objects what to do instead of querying their state",
      C: "Always use print statements",
      D: "Ask before telling"
    },
    correctAnswer: "B",
    code: "// Ask: if(user.getAge() > 18) { user.setAdult(true); }\n// Tell: user.updateAdultStatus();",
    explanation: "Tell, Don't Ask: gọi method để object tự xử lý, thay vì lấy data, xử lý bên ngoài, rồi set lại. Encapsulation tốt hơn, logic tập trung trong object."
  },
  {
    question: "What is the Law of Demeter (LoD)?",
    options: {
      A: "A method should only call methods of its immediate friends",
      B: "A class must have exactly one method",
      C: "All classes must inherit from Object",
      D: "Code must be written in Greece"
    },
    correctAnswer: "A",
    code: "// Violation: user.getAddress().getCity().getName()\n// Better: user.getCityName()",
    explanation: "Law of Demeter: don't talk to strangers. Method chỉ nên gọi methods của: this, parameters, objects it creates, direct components. Tránh chain calls dài."
  },
  {
    question: "What should be the visibility of class fields by default?",
    options: {
      A: "public",
      B: "protected",
      C: "private",
      D: "package-private (default)"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Fields nên private by default (encapsulation). Expose qua getters/setters nếu cần. Public fields break encapsulation và make class hard to change later."
  },
  {
    question: "What is the convention for boolean method names that check a condition?",
    options: {
      A: "checkCondition()",
      B: "condition()",
      C: "isCondition() or hasCondition()",
      D: "getCondition()"
    },
    correctAnswer: "C",
    code: "boolean isEmpty()\nboolean hasChildren()\nboolean canExecute()",
    explanation: "Boolean methods dùng is/has/can/should prefix. Đọc như câu hỏi yes/no: isEmpty()? hasChildren()? Giúp code đọc tự nhiên trong if statements."
  },
  {
    question: "What is method chaining and when is it appropriate?",
    options: {
      A: "Calling methods in a loop",
      B: "Calling methods that return 'this' for fluent API",
      C: "Calling the same method multiple times",
      D: "Never appropriate"
    },
    correctAnswer: "B",
    code: "builder.setName(\"John\").setAge(25).build();",
    explanation: "Method chaining: methods return 'this' để chain calls. Phổ biến trong builders, streams, fluent APIs. Giúp code ngắn gọn và đọc dễ như prose."
  },

  // ============ MORE CODE STRUCTURE (101-120) ============
  {
    question: "What is the recommended approach for null handling in Java?",
    options: {
      A: "Return null freely",
      B: "Use Optional or throw exceptions instead of returning null",
      C: "Never use null",
      D: "Use empty string instead of null"
    },
    correctAnswer: "B",
    code: "Optional<User> findUser(int id)",
    explanation: "Tránh return null khi có thể. Dùng Optional (Java 8+) để express 'may be absent'. Hoặc throw exception cho error cases. Null causes NullPointerException bugs."
  },
  {
    question: "What is the purpose of the @Override annotation?",
    options: {
      A: "To override all methods",
      B: "To indicate method overrides a parent method, compiler checks",
      C: "To create a new method",
      D: "To delete a method"
    },
    correctAnswer: "B",
    code: "@Override\npublic String toString() { }",
    explanation: "@Override cho compiler biết method này override parent method. Nếu parent không có method đó, compiler báo lỗi. Catch bugs sớm khi refactor."
  },
  {
    question: "What is the convention for static import?",
    options: {
      A: "Use for all static members",
      B: "Use sparingly, mainly for well-known utilities like Math, Assert",
      C: "Never use static import",
      D: "Only for constants"
    },
    correctAnswer: "B",
    code: "import static java.lang.Math.PI;\nimport static org.junit.Assert.*;",
    explanation: "Static imports dùng sparingly cho utilities phổ biến (Math.PI, Assert methods). Overuse làm code khó đọc vì không biết method từ đâu."
  },
  {
    question: "What is a 'code smell'?",
    options: {
      A: "Code that has bugs",
      B: "Indicators of potential problems in code design",
      C: "Code that doesn't compile",
      D: "Code written by juniors"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Code smells là symptoms của deeper problems: long method, large class, duplicate code, magic numbers, long parameter list. Không phải bugs nhưng chỉ ra cần refactor."
  },
  {
    question: "What is the 'Feature Envy' code smell?",
    options: {
      A: "Wanting new features",
      B: "A method that uses more features of another class than its own",
      C: "Missing features",
      D: "Having too many features"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Feature Envy: method sử dụng nhiều data/methods của class khác hơn class của nó. Suggests method nên move sang class kia. Violates encapsulation."
  },
  {
    question: "What is the recommended way to compare strings in Java?",
    options: {
      A: "str1 == str2",
      B: "str1.equals(str2)",
      C: "str1.compareTo(str2)",
      D: "String.compare(str1, str2)"
    },
    correctAnswer: "B",
    code: "\"constant\".equals(variable) // null-safe",
    explanation: "Dùng equals() để compare string content. == chỉ compare references. Tip: put constant first (\"value\".equals(var)) để tránh NullPointerException."
  },
  {
    question: "What is the 'Primitive Obsession' code smell?",
    options: {
      A: "Using too many objects",
      B: "Overusing primitives instead of small objects for simple tasks",
      C: "Avoiding primitives entirely",
      D: "Using only primitive types"
    },
    correctAnswer: "B",
    code: "// Bad: String phoneNumber, String email\n// Good: PhoneNumber phone, Email email",
    explanation: "Primitive Obsession: dùng primitives thay vì small value objects. Phone number as String không có validation. PhoneNumber class có thể validate format."
  },
  {
    question: "What is the purpose of making a class final?",
    options: {
      A: "To improve performance",
      B: "To prevent inheritance",
      C: "To make it abstract",
      D: "To make all methods final"
    },
    correctAnswer: "B",
    code: "public final class String { }",
    explanation: "final class không thể được extend. Dùng khi: immutable classes (String), security (prevent malicious subclass), design decision (class not designed for inheritance)."
  },
  {
    question: "What is the convention for package names in Java?",
    options: {
      A: "CamelCase",
      B: "All lowercase with dots separating levels",
      C: "UPPERCASE",
      D: "snake_case"
    },
    correctAnswer: "B",
    code: "package com.company.project.module;",
    explanation: "Package names all lowercase, domain reversed (com.google.guava). Dùng dots để separate levels. Tránh special characters và numbers ở đầu."
  },
  {
    question: "What is the convention for class names in Java?",
    options: {
      A: "camelCase",
      B: "PascalCase (UpperCamelCase)",
      C: "snake_case",
      D: "lowercase"
    },
    correctAnswer: "B",
    code: "public class UserAccount { }",
    explanation: "Class names dùng PascalCase (UpperCamelCase): mỗi từ bắt đầu bằng chữ hoa. Nên là noun hoặc noun phrase: User, UserAccount, HttpConnectionFactory."
  },
  {
    question: "What is 'composition over inheritance'?",
    options: {
      A: "Always use inheritance",
      B: "Prefer containing objects over extending classes",
      C: "Never use classes",
      D: "Write more code"
    },
    correctAnswer: "B",
    code: "// Instead of: class Car extends Engine\n// Use: class Car { private Engine engine; }",
    explanation: "Composition over Inheritance: thay vì extend class, contain instance của nó. Flexible hơn, tránh fragile base class problem, allows changing behavior at runtime."
  },
  {
    question: "What is the 'Open/Closed Principle'?",
    options: {
      A: "Open source is better",
      B: "Classes should be open for extension, closed for modification",
      C: "Always close files after opening",
      D: "Open and close braces must match"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Open/Closed Principle (SOLID): software entities nên open for extension (add new features) nhưng closed for modification (không cần change existing code). Dùng abstraction, interfaces."
  },
  {
    question: "What is the 'Liskov Substitution Principle'?",
    options: {
      A: "Named after Barbara Liskov",
      B: "Subtypes must be substitutable for their base types",
      C: "Always use substitution",
      D: "Replace all classes with interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "LSP: objects of subclass should be usable wherever parent class expected without breaking functionality. Ví dụ: Square extends Rectangle có thể violate nếu setWidth/setHeight behaves differently."
  },
  {
    question: "What is the 'Interface Segregation Principle'?",
    options: {
      A: "Use only one interface",
      B: "Clients shouldn't be forced to depend on interfaces they don't use",
      C: "Segregate all interfaces",
      D: "Never use interfaces"
    },
    correctAnswer: "B",
    code: null,
    explanation: "ISP: thay vì một fat interface, dùng nhiều small, specific interfaces. Client chỉ implement interfaces nó cần. Reduces coupling và unnecessary dependencies."
  },
  {
    question: "What is the 'Dependency Inversion Principle'?",
    options: {
      A: "Invert all dependencies",
      B: "High-level modules shouldn't depend on low-level modules; both should depend on abstractions",
      C: "Avoid dependencies",
      D: "Use dependency injection only"
    },
    correctAnswer: "B",
    code: "// Bad: class Service { private MySQLDB db; }\n// Good: class Service { private Database db; }",
    explanation: "DIP: depend on abstractions (interfaces), not concrete implementations. Allows swapping implementations, easier testing với mocks. Foundation of dependency injection."
  },
  {
    question: "What is the purpose of using interfaces?",
    options: {
      A: "To slow down the program",
      B: "To define contracts and enable loose coupling",
      C: "To avoid writing code",
      D: "To make code complex"
    },
    correctAnswer: "B",
    code: "interface PaymentProcessor { void process(Payment p); }",
    explanation: "Interfaces define contracts: what methods must exist. Enable loose coupling (depend on interface, not implementation), polymorphism, và easier testing/mocking."
  },
  {
    question: "When should you create an interface?",
    options: {
      A: "For every class",
      B: "When you need multiple implementations or want to define a contract",
      C: "Never",
      D: "Only for database classes"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Create interface khi: cần multiple implementations, muốn loose coupling với implementation, define API contract, enable testing với mocks. Không cần interface cho mọi class."
  },
  {
    question: "What is a 'utility class' in Java?",
    options: {
      A: "A class with only instance methods",
      B: "A class with only static methods and private constructor",
      C: "A class that extends Utility",
      D: "Any small class"
    },
    correctAnswer: "B",
    code: "public final class StringUtils {\n    private StringUtils() { }\n    public static boolean isEmpty(String s) { }\n}",
    explanation: "Utility class: chỉ chứa static methods, private constructor ngăn instantiation, thường final. Ví dụ: Math, Arrays, Collections, StringUtils."
  },
  {
    question: "What is the 'Builder' pattern used for?",
    options: {
      A: "Building houses",
      B: "Constructing complex objects step by step",
      C: "Building databases",
      D: "Building networks"
    },
    correctAnswer: "B",
    code: "User user = User.builder()\n    .name(\"John\")\n    .age(25)\n    .build();",
    explanation: "Builder pattern: construct complex objects step by step. Tránh constructors với nhiều parameters, readable code, immutable objects. Lombok @Builder auto-generates."
  },
  {
    question: "What is 'fail-fast' principle in coding?",
    options: {
      A: "Fail the project quickly",
      B: "Detect and report errors as early as possible",
      C: "Make code run faster",
      D: "Skip error handling"
    },
    correctAnswer: "B",
    code: "public void process(String input) {\n    Objects.requireNonNull(input, \"input cannot be null\");\n    // rest of code\n}",
    explanation: "Fail-fast: detect và report problems immediately thay vì để chúng propagate. Validate inputs early, throw descriptive exceptions. Easier debugging, predictable behavior."
  },

  // ============ PRACTICAL EXERCISES - VARIABLE NAMING (121-140) ============
  {
    question: "Which variable name is better for storing the total price after discount?",
    options: {
      A: "tp",
      B: "price",
      C: "totalPriceAfterDiscount",
      D: "x"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'totalPriceAfterDiscount' mô tả rõ ràng nhất. 'price' quá chung, 'tp' và 'x' không có ý nghĩa. Tên biến nên tự giải thích mục đích sử dụng."
  },
  {
    question: "What is wrong with this code?\nint d; // elapsed time in days",
    options: {
      A: "Nothing wrong",
      B: "Variable name is not descriptive",
      C: "Comment is wrong",
      D: "Should use long instead"
    },
    correctAnswer: "B",
    code: "int d; // elapsed time in days\n// Better:\nint elapsedTimeInDays;",
    explanation: "Biến 'd' cần comment để giải thích, tức là tên không self-explanatory. 'elapsedTimeInDays' tự giải thích, không cần comment. Code should be self-documenting."
  },
  {
    question: "Which naming is correct for a method that checks if user is logged in?",
    options: {
      A: "checkLogin()",
      B: "loginStatus()",
      C: "isLoggedIn()",
      D: "getLogin()"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'isLoggedIn()' theo đúng convention cho boolean methods với prefix 'is'. Đọc tự nhiên: if (user.isLoggedIn()). 'checkLogin' không rõ return type."
  },
  {
    question: "Identify the naming convention violation:\npublic static final int Max_Value = 100;",
    options: {
      A: "Should be MAX_VALUE",
      B: "Should be maxValue",
      C: "Should be max_value",
      D: "No violation"
    },
    correctAnswer: "A",
    code: "public static final int MAX_VALUE = 100;",
    explanation: "Constants trong Java dùng SCREAMING_SNAKE_CASE. 'Max_Value' sai convention - nên là 'MAX_VALUE'. Tất cả chữ in hoa, underscore giữa các từ."
  },
  {
    question: "What is the best name for a list of products in a shopping cart?",
    options: {
      A: "list",
      B: "productList",
      C: "cartItems",
      D: "p"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'cartItems' mô tả rõ context (cart) và nội dung (items). 'productList' có suffix List không cần thiết. 'list' và 'p' quá chung."
  },
  {
    question: "Which refactoring improves this code?\nString s = getFullName();\nString s2 = getAddress();",
    options: {
      A: "Use s1 instead of s",
      B: "Use descriptive names like fullName and address",
      C: "Add comments",
      D: "Use shorter names"
    },
    correctAnswer: "B",
    code: "String fullName = getFullName();\nString address = getAddress();",
    explanation: "Dùng tên mô tả: fullName, address. Tên s, s2 không có ý nghĩa và dễ confuse. Tên biến nên cho biết nội dung chứa gì."
  },
  {
    question: "What naming convention does this violate: calculatesum()?",
    options: {
      A: "Should use underscores",
      B: "Should be camelCase: calculateSum()",
      C: "Should be all uppercase",
      D: "No violation"
    },
    correctAnswer: "B",
    code: "public int calculateSum() { }",
    explanation: "Methods trong Java dùng camelCase. 'calculatesum' thiếu chữ hoa ở 'Sum'. Đúng là 'calculateSum()'. CamelCase giúp phân biệt các từ."
  },
  {
    question: "Which is the best name for a boolean flag indicating if data is valid?",
    options: {
      A: "flag",
      B: "valid",
      C: "isDataValid",
      D: "dataValidFlag"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'isDataValid' theo convention boolean với prefix 'is', và mô tả rõ ràng data nào được validate. 'flag' và 'valid' quá generic."
  },
  {
    question: "What is wrong with this variable name: numberOfUsersInTheSystemCurrentlyLoggedIn?",
    options: {
      A: "Too short",
      B: "Too long, could be simplified to activeUserCount",
      C: "Should use underscores",
      D: "Nothing wrong"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Tên quá dài. 'activeUserCount' hoặc 'loggedInUserCount' ngắn hơn mà vẫn đủ ý nghĩa. Tên biến nên concise nhưng vẫn descriptive."
  },
  {
    question: "Choose the better variable name for storing a user's email address:",
    options: {
      A: "e",
      B: "str",
      C: "email",
      D: "emailOfTheUser"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'email' vừa ngắn gọn vừa rõ ràng. 'e' và 'str' không mô tả. 'emailOfTheUser' thừa từ. Context thường đã cho biết email thuộc về ai."
  },
  {
    question: "What is the issue with: ArrayList<String> list = new ArrayList<>();",
    options: {
      A: "Should use LinkedList",
      B: "Variable name 'list' is not descriptive",
      C: "Should use raw type",
      D: "Nothing wrong"
    },
    correctAnswer: "B",
    code: "ArrayList<String> userNames = new ArrayList<>();",
    explanation: "'list' không cho biết chứa gì. 'userNames', 'orderIds', 'productCodes' mô tả nội dung. Tên collection nên cho biết elements là gì."
  },
  {
    question: "Which is correct for a constant representing seconds in a minute?",
    options: {
      A: "secondsInMinute",
      B: "SECONDS_IN_MINUTE",
      C: "SecondsInMinute",
      D: "seconds_in_minute"
    },
    correctAnswer: "B",
    code: "public static final int SECONDS_IN_MINUTE = 60;",
    explanation: "Constants dùng SCREAMING_SNAKE_CASE. 'SECONDS_IN_MINUTE' là đúng convention. Giúp phân biệt constants với variables khi đọc code."
  },
  {
    question: "What naming issue exists here?\nprivate int temp;",
    options: {
      A: "Should be public",
      B: "Name 'temp' is ambiguous - temperature or temporary?",
      C: "Should be static",
      D: "No issue"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'temp' có thể là temperature hoặc temporary. Abbreviations gây ambiguity. Dùng 'temperature' hoặc 'temporaryValue' để rõ ràng."
  },
  {
    question: "Which is the better name for a method that saves user data to database?",
    options: {
      A: "doIt()",
      B: "save()",
      C: "saveUserToDatabase()",
      D: "handleUser()"
    },
    correctAnswer: "C",
    code: null,
    explanation: "'saveUserToDatabase()' mô tả rõ action (save), object (user), và destination (database). 'doIt()' và 'handleUser()' quá vague."
  },
  {
    question: "Identify the convention issue: class userAccount { }",
    options: {
      A: "Should be UserAccount (PascalCase)",
      B: "Should be USER_ACCOUNT",
      C: "Should be user_account",
      D: "No issue"
    },
    correctAnswer: "A",
    code: "class UserAccount { }",
    explanation: "Class names trong Java dùng PascalCase (UpperCamelCase). 'userAccount' sai vì bắt đầu bằng chữ thường. Đúng là 'UserAccount'."
  },
  {
    question: "What is wrong with: public void foo(int a, int b, int c, int d, int e, int f)?",
    options: {
      A: "Nothing wrong",
      B: "Too many parameters with meaningless names",
      C: "Should use static",
      D: "Should return something"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Quá nhiều parameters (>4) và tên a,b,c,d,e,f không có ý nghĩa. Nên dùng parameter object hoặc builder. Tên cần mô tả purpose."
  },
  {
    question: "Which is the correct way to name a getter for the 'firstName' field?",
    options: {
      A: "firstName()",
      B: "getfirstname()",
      C: "getFirstName()",
      D: "get_first_name()"
    },
    correctAnswer: "C",
    code: "public String getFirstName() { return firstName; }",
    explanation: "JavaBeans convention: getter là 'get' + PropertyName với PascalCase. 'getFirstName()' đúng. Framework như Spring, Jackson rely on this convention."
  },
  {
    question: "What naming improvement can be made?\nfor(int i=0; i<users.size(); i++) { User u = users.get(i); }",
    options: {
      A: "Change i to index",
      B: "Change u to user",
      C: "Both A and B",
      D: "No improvement needed"
    },
    correctAnswer: "B",
    code: "for(int i=0; i<users.size(); i++) { User user = users.get(i); }",
    explanation: "'i' acceptable cho loop counter (convention). Nhưng 'u' nên là 'user' - object reference cần descriptive name. Hoặc dùng for-each loop."
  },
  {
    question: "Which variable name violates Java conventions?",
    options: {
      A: "userId",
      B: "user_id",
      C: "userID",
      D: "id"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Java dùng camelCase cho variables, không dùng snake_case. 'user_id' sai convention. Đúng là 'userId'. snake_case phổ biến trong Python, không phải Java."
  },
  {
    question: "What is the best practice for naming a map that stores user by their ID?",
    options: {
      A: "map",
      B: "userMap",
      C: "usersById",
      D: "m"
    },
    correctAnswer: "C",
    code: "Map<Long, User> usersById = new HashMap<>();",
    explanation: "'usersById' mô tả: plural 'users' (nhiều users), 'ById' (key là ID). Pattern 'xByY' rất clear cho maps. 'userMap' thiếu thông tin về key."
  },

  // ============ PRACTICAL EXERCISES - METHODS & STRUCTURE (141-160) ============
  {
    question: "What refactoring would improve this?\nif(status == 1) { ... } else if(status == 2) { ... }",
    options: {
      A: "Use switch statement",
      B: "Replace magic numbers with named constants or enum",
      C: "Add comments explaining 1 and 2",
      D: "Nothing needs improvement"
    },
    correctAnswer: "B",
    code: "if(status == Status.ACTIVE) { ... }\nelse if(status == Status.INACTIVE) { ... }",
    explanation: "1 và 2 là magic numbers. Dùng enum hoặc constants: Status.ACTIVE, Status.INACTIVE. Code tự giải thích, không cần đoán ý nghĩa của 1, 2."
  },
  {
    question: "What is wrong with this exception handling?\ncatch(Exception e) { }",
    options: {
      A: "Nothing wrong",
      B: "Empty catch block swallows exceptions",
      C: "Should catch Throwable",
      D: "Should use 'ex' instead of 'e'"
    },
    correctAnswer: "B",
    code: "catch(Exception e) {\n    logger.error(\"Error occurred\", e);\n}",
    explanation: "Empty catch block 'nuốt' exception - lỗi xảy ra nhưng không ai biết. Minimum cần log exception. Swallowing exceptions làm debugging rất khó."
  },
  {
    question: "How can this be improved?\npublic void process() throws Exception",
    options: {
      A: "Use specific exception types instead of generic Exception",
      B: "Remove throws clause",
      C: "Change to throw Error",
      D: "Nothing to improve"
    },
    correctAnswer: "A",
    code: "public void process() throws IOException, ValidationException",
    explanation: "Declare specific exceptions thay vì generic Exception. Caller biết chính xác exceptions nào có thể xảy ra và handle appropriately."
  },
  {
    question: "What's the issue?\nString result = obj == null ? \"default\" : obj.getValue();",
    options: {
      A: "Nothing wrong, good null check",
      B: "Should use Optional",
      C: "Should use try-catch",
      D: "Ternary operator not allowed"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Code này actually OK - kiểm tra null trước khi gọi method. Ternary operator cho null check là pattern phổ biến. Optional cũng là alternative tốt."
  },
  {
    question: "What principle does this violate?\nclass UserManager { saveUser(); sendEmail(); generateReport(); }",
    options: {
      A: "DRY",
      B: "Single Responsibility Principle",
      C: "Open/Closed Principle",
      D: "No violation"
    },
    correctAnswer: "B",
    code: null,
    explanation: "SRP violation: class làm quá nhiều việc (user management, email, reports). Nên tách thành: UserRepository, EmailService, ReportGenerator."
  },
  {
    question: "What is wrong with this?\nfor(int i=0; i<100; i++) { /* 100 lines of code */ }",
    options: {
      A: "Loop count too high",
      B: "Loop body too long, should extract to method",
      C: "Should use while loop",
      D: "Nothing wrong"
    },
    correctAnswer: "B",
    code: "for(int i=0; i<100; i++) {\n    processItem(i);\n}",
    explanation: "Loop body quá dài khó đọc và maintain. Extract logic vào method riêng. Method nhỏ dễ test, reuse, và understand."
  },
  {
    question: "How to improve this code?\nif(a) { if(b) { if(c) { doSomething(); } } }",
    options: {
      A: "Add more nesting",
      B: "Use early return or combine conditions",
      C: "Add comments",
      D: "Nothing to improve"
    },
    correctAnswer: "B",
    code: "if(!a || !b || !c) return;\ndoSomething();",
    explanation: "Nested ifs tạo 'arrow code' khó đọc. Dùng early return (guard clauses) hoặc combine: if(a && b && c). Giảm nesting, code dễ đọc hơn."
  },
  {
    question: "What's wrong with: public class Utils { public void helper() { } }",
    options: {
      A: "Class name should be lowercase",
      B: "Utility class should have static methods and private constructor",
      C: "Should extend Object explicitly",
      D: "Nothing wrong"
    },
    correctAnswer: "B",
    code: "public final class Utils {\n    private Utils() { }\n    public static void helper() { }\n}",
    explanation: "Utility class nên: final (prevent extension), private constructor (prevent instantiation), static methods only. Không cần create instance để dùng."
  },
  {
    question: "What issue does this have?\npublic void setValues(String a, String b, String c, String d, String e, String f, String g)",
    options: {
      A: "Nothing wrong",
      B: "Too many parameters, use builder pattern or parameter object",
      C: "Should use int instead",
      D: "Names are correct"
    },
    correctAnswer: "B",
    code: "public void setValues(UserData data)",
    explanation: "7 parameters quá nhiều và khó nhớ order. Dùng parameter object (UserData) hoặc builder pattern. Rule of thumb: max 3-4 parameters."
  },
  {
    question: "What's the code smell here?\nif(type.equals(\"ADMIN\")) { ... } else if(type.equals(\"USER\")) { ... }",
    options: {
      A: "Should use == for strings",
      B: "String comparisons should be replaced with enum",
      C: "Should use switch",
      D: "Nothing wrong"
    },
    correctAnswer: "B",
    code: "enum UserType { ADMIN, USER }\nif(type == UserType.ADMIN) { ... }",
    explanation: "Magic strings 'ADMIN', 'USER' dễ typo và không type-safe. Enum UserType đảm bảo chỉ valid values được dùng, compiler check."
  },
  {
    question: "What improvement can be made?\nArrayList<String> names = new ArrayList<String>();",
    options: {
      A: "Use interface type: List<String> names = new ArrayList<>();",
      B: "Use array instead",
      C: "Remove generic type",
      D: "Nothing to improve"
    },
    correctAnswer: "A",
    code: "List<String> names = new ArrayList<>();",
    explanation: "Program to interface, not implementation. Dùng List<String> thay vì ArrayList<String>. Cho phép thay đổi implementation sau này mà không change code."
  },
  {
    question: "What's wrong?\npublic int calc(int x) {\n    // TODO: implement later\n    return 0;\n}",
    options: {
      A: "TODO comments are fine",
      B: "TODO should be tracked and resolved, not left indefinitely",
      C: "Method name is fine",
      D: "Return 0 is correct"
    },
    correctAnswer: "B",
    code: null,
    explanation: "TODO comments không nên để lâu trong production code. Track trong issue system và resolve. Method name 'calc' cũng quá vague - calculateWhat?"
  },
  {
    question: "How to improve this?\nboolean isValid = (age > 0 && age < 150 && name != null && name.length() > 0 && email != null && email.contains(\"@\"));",
    options: {
      A: "Add more conditions",
      B: "Extract to separate validation methods",
      C: "Use shorter variable names",
      D: "Nothing to improve"
    },
    correctAnswer: "B",
    code: "boolean isValid = isValidAge(age) && isValidName(name) && isValidEmail(email);",
    explanation: "Complex condition khó đọc và maintain. Extract thành methods: isValidAge(), isValidName(), isValidEmail(). Code readable và reusable."
  },
  {
    question: "What principle does this violate?\nclass Rectangle { protected int width, height; }\nclass Square extends Rectangle { void setWidth(int w) { width = height = w; } }",
    options: {
      A: "Single Responsibility",
      B: "Liskov Substitution Principle",
      C: "Interface Segregation",
      D: "No violation"
    },
    correctAnswer: "B",
    code: null,
    explanation: "LSP violation: Square thay đổi behavior của setWidth. Code expect Rectangle sẽ surprise khi Square.setWidth() cũng thay đổi height. Classic LSP example."
  },
  {
    question: "What's the issue with this?\nclass OrderService {\n    private MySQLDatabase db = new MySQLDatabase();\n}",
    options: {
      A: "Nothing wrong",
      B: "Violates Dependency Inversion - should depend on interface",
      C: "Should use static",
      D: "Should be public"
    },
    correctAnswer: "B",
    code: "class OrderService {\n    private Database db; // inject via constructor\n}",
    explanation: "DIP violation: depend on concrete MySQLDatabase. Dùng interface Database, inject dependency. Cho phép switch to PostgreSQL, mock for testing."
  },
  {
    question: "How to fix this Law of Demeter violation?\norder.getCustomer().getAddress().getCity().getName()",
    options: {
      A: "Add more getters",
      B: "Create order.getCustomerCityName() method",
      C: "Use longer chain",
      D: "Nothing wrong"
    },
    correctAnswer: "B",
    code: "order.getCustomerCityName() // hides internal structure",
    explanation: "Chain calls dài violate Law of Demeter (don't talk to strangers). Tạo method wrapper để hide internal structure. Easier to change later."
  },
  {
    question: "What's wrong with this class?\nclass DataProcessor {\n    public Connection connection;\n    public String query;\n    public ResultSet results;\n}",
    options: {
      A: "Nothing wrong",
      B: "Fields should be private with getters/setters",
      C: "Should use inheritance",
      D: "Names are wrong"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Public fields break encapsulation. Fields nên private, expose qua getters/setters nếu cần. Cho phép validation, change implementation mà không break callers."
  },
  {
    question: "What refactoring helps here?\nvoid processOrder(Order o) {\n    // 200 lines of code\n}",
    options: {
      A: "Add more code",
      B: "Extract smaller methods: validateOrder(), calculateTotal(), saveOrder()",
      C: "Add comments",
      D: "Nothing needed"
    },
    correctAnswer: "B",
    code: "void processOrder(Order o) {\n    validateOrder(o);\n    calculateTotal(o);\n    saveOrder(o);\n}",
    explanation: "200 lines quá dài. Extract thành smaller methods với single responsibility. Code dễ đọc, test, và maintain. Method nên fit một màn hình."
  },
  {
    question: "What's the issue?\nif(user != null) {\n    if(user.getRole() != null) {\n        if(user.getRole().equals(\"ADMIN\")) {\n            // do admin stuff\n        }\n    }\n}",
    options: {
      A: "Nothing wrong",
      B: "Use Optional or combine null checks",
      C: "Add more null checks",
      D: "Remove all checks"
    },
    correctAnswer: "B",
    code: "Optional.ofNullable(user)\n    .map(User::getRole)\n    .filter(\"ADMIN\"::equals)\n    .ifPresent(r -> doAdminStuff());",
    explanation: "Nested null checks là code smell. Dùng Optional, hoặc early return: if(user == null || user.getRole() == null) return; More readable."
  },
  {
    question: "Which comment is useful?\nA: i++; // increment i\nB: i++; // move to next customer in queue",
    options: {
      A: "Comment A is better",
      B: "Comment B is better",
      C: "Both are good",
      D: "Neither is good"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Comment A states the obvious (what). Comment B explains why/context (moving to next customer). Good comments explain intent, not mechanics."
  },

  // ============ JAVASCRIPT CONVENTIONS (161-180) ============
  {
    question: "Which is the preferred way to declare variables in modern JavaScript?",
    options: {
      A: "var",
      B: "let and const",
      C: "No keyword needed",
      D: "global"
    },
    correctAnswer: "B",
    code: "const PI = 3.14;\nlet count = 0;",
    explanation: "ES6+ khuyến khích let và const thay vì var. const cho values không reassign, let cho variables cần reassign. var có hoisting issues và function scope."
  },
  {
    question: "What is the naming convention for React components?",
    options: {
      A: "camelCase",
      B: "PascalCase",
      C: "snake_case",
      D: "kebab-case"
    },
    correctAnswer: "B",
    code: "function UserProfile() { return <div>...</div>; }",
    explanation: "React components dùng PascalCase để phân biệt với HTML elements. JSX cần PascalCase để biết đó là component, không phải native element."
  },
  {
    question: "Which is correct for JavaScript file naming?",
    options: {
      A: "UserComponent.JS",
      B: "user-component.js",
      C: "user_component.js",
      D: "All are acceptable, but B is most common"
    },
    correctAnswer: "D",
    code: null,
    explanation: "kebab-case (user-component.js) phổ biến nhất cho JS files. Một số frameworks (React) dùng PascalCase. Quan trọng là consistency trong project."
  },
  {
    question: "What is the convention for private methods in JavaScript classes (before #)?",
    options: {
      A: "private keyword",
      B: "_underscore prefix convention",
      C: "UPPERCASE",
      D: "No way to make private"
    },
    correctAnswer: "B",
    code: "class User {\n    _validateEmail() { } // convention only, not enforced\n}",
    explanation: "Trước ES2022 #, dùng _ prefix như convention (không enforced). _method() indicates 'internal use only'. Modern JS dùng #privateMethod()."
  },
  {
    question: "Which is the correct way to export in ES6 modules?",
    options: {
      A: "module.exports = { }",
      B: "export default và export",
      C: "exports.name = value",
      D: "define([ ], function() { })"
    },
    correctAnswer: "B",
    code: "export default function main() { }\nexport const helper = () => { };",
    explanation: "ES6 modules dùng export/import. export default cho main export, named exports cho multiple exports. module.exports là CommonJS (Node.js cũ)."
  },
  {
    question: "What is the convention for event handler props in React?",
    options: {
      A: "click, submit",
      B: "onClick, onSubmit",
      C: "handleClick, handleSubmit",
      D: "Both B for props, C for handler functions"
    },
    correctAnswer: "D",
    code: "<Button onClick={handleClick} />\nconst handleClick = () => { };",
    explanation: "Props dùng 'on' prefix (onClick, onSubmit). Handler functions dùng 'handle' prefix (handleClick). Pattern: <Component onEvent={handleEvent} />."
  },
  {
    question: "Which is the preferred equality operator in JavaScript?",
    options: {
      A: "== (loose equality)",
      B: "=== (strict equality)",
      C: "Both are equally good",
      D: "= (assignment)"
    },
    correctAnswer: "B",
    code: "if (value === 'test') { } // preferred",
    explanation: "=== (strict equality) preferred vì không có type coercion. == có unexpected behaviors: '1' == 1 is true. Dùng === để tránh bugs."
  },
  {
    question: "What is the convention for async/await error handling?",
    options: {
      A: "Ignore errors",
      B: "Use try-catch blocks",
      C: "Use callbacks",
      D: "Use global error handler only"
    },
    correctAnswer: "B",
    code: "async function fetchData() {\n    try {\n        const data = await api.get();\n    } catch (error) {\n        console.error('Failed:', error);\n    }\n}",
    explanation: "async/await dùng try-catch cho error handling. Readable hơn .catch() chains. Catch block nên log error với context, không swallow silently."
  },
  {
    question: "Which is the correct way to define a constant object in JavaScript?",
    options: {
      A: "const CONFIG = {}",
      B: "const CONFIG = Object.freeze({})",
      C: "A for reference immutability, B for deep immutability",
      D: "var CONFIG = {}"
    },
    correctAnswer: "C",
    code: "const CONFIG = Object.freeze({ API_URL: 'https://...' });",
    explanation: "const ngăn reassign reference nhưng object properties vẫn mutable. Object.freeze() ngăn modify properties (shallow). Deep freeze cần recursive."
  },
  {
    question: "What is the naming convention for JavaScript test files?",
    options: {
      A: "test.js",
      B: "*.test.js or *.spec.js",
      C: "TEST_*.js",
      D: "test/*.js only"
    },
    correctAnswer: "B",
    code: "userService.test.js\nuserService.spec.js",
    explanation: "Test files thường có suffix .test.js hoặc .spec.js. Jest, Mocha auto-discover files với pattern này. Đặt cùng folder hoặc trong __tests__."
  },
  {
    question: "Which is the preferred way to handle null/undefined in JavaScript?",
    options: {
      A: "if (value != null)",
      B: "Optional chaining (?.) and nullish coalescing (??)",
      C: "if (value !== null && value !== undefined)",
      D: "All are acceptable, B is most modern"
    },
    correctAnswer: "D",
    code: "const name = user?.profile?.name ?? 'Anonymous';",
    explanation: "ES2020+ có optional chaining (?.) và nullish coalescing (??). Cleaner than nested checks. ?. returns undefined if null/undefined, ?? provides default."
  },
  {
    question: "What is the convention for environment variables in JavaScript?",
    options: {
      A: "camelCase",
      B: "SCREAMING_SNAKE_CASE",
      C: "PascalCase",
      D: "kebab-case"
    },
    correctAnswer: "B",
    code: "process.env.DATABASE_URL\nprocess.env.API_KEY",
    explanation: "Environment variables dùng SCREAMING_SNAKE_CASE by convention (từ Unix). Trong code JS access qua process.env.VARIABLE_NAME."
  },
  {
    question: "Which is the correct convention for arrow functions in JavaScript?",
    options: {
      A: "Always use function keyword",
      B: "Use arrow functions for callbacks, regular functions for methods",
      C: "Never use arrow functions",
      D: "Only use arrow functions"
    },
    correctAnswer: "B",
    code: "array.map(item => item.name); // arrow\nclass User { getName() { } } // regular method",
    explanation: "Arrow functions good for callbacks (lexical this). Regular functions/methods cho class methods và functions cần own 'this'. Arrow functions không có own 'this'."
  },
  {
    question: "What is the convention for destructuring in JavaScript?",
    options: {
      A: "Never use destructuring",
      B: "Use for cleaner access to object/array properties",
      C: "Only for arrays",
      D: "Only for objects"
    },
    correctAnswer: "B",
    code: "const { name, age } = user;\nconst [first, second] = array;",
    explanation: "Destructuring làm code cleaner. Extract properties thành variables. Default values: { name = 'Unknown' } = user. Rất phổ biến trong modern JS."
  },
  {
    question: "Which is the preferred way to concatenate strings in modern JavaScript?",
    options: {
      A: "str1 + str2",
      B: "Template literals with backticks",
      C: "str1.concat(str2)",
      D: "String.format()"
    },
    correctAnswer: "B",
    code: "const message = `Hello, ${name}! You have ${count} messages.`;",
    explanation: "Template literals (backticks) preferred cho string interpolation. Readable hơn +. Supports multi-line strings và embedded expressions."
  },
  {
    question: "What is the convention for default exports vs named exports?",
    options: {
      A: "Always use default",
      B: "Always use named",
      C: "Default for main thing, named for utilities",
      D: "It doesn't matter"
    },
    correctAnswer: "C",
    code: "export default class UserService { }\nexport const formatDate = () => { };\nexport const parseDate = () => { };",
    explanation: "Default export cho main functionality của module. Named exports cho utilities, helpers. Một số style guides prefer named-only để consistent imports."
  },
  {
    question: "Which is correct for handling promises?",
    options: {
      A: "Ignore rejections",
      B: "Always handle with .catch() or try-catch",
      C: "Use callbacks only",
      D: "Use synchronous code"
    },
    correctAnswer: "B",
    code: "promise.then(result => { }).catch(error => { });\n// or\ntry { await promise; } catch (e) { }",
    explanation: "Unhandled promise rejections gây warnings/errors. Luôn handle với .catch() hoặc try-catch. Node.js có thể crash on unhandled rejection."
  },
  {
    question: "What is the convention for JSDoc in JavaScript?",
    options: {
      A: "Not used in JavaScript",
      B: "Same format as Javadoc with type annotations",
      C: "Only for libraries",
      D: "Use TypeScript instead"
    },
    correctAnswer: "B",
    code: "/**\n * @param {string} name - User name\n * @returns {Promise<User>}\n */\nasync function getUser(name) { }",
    explanation: "JSDoc dùng để document JS code với type info. IDE dùng cho autocomplete. @param, @returns, @type. Useful even without TypeScript."
  },
  {
    question: "Which is the convention for spreading objects/arrays?",
    options: {
      A: "Use Object.assign() only",
      B: "Use spread operator (...) for immutable updates",
      C: "Mutate directly",
      D: "Use JSON.parse(JSON.stringify())"
    },
    correctAnswer: "B",
    code: "const newObj = { ...oldObj, newProp: value };\nconst newArr = [...oldArr, newItem];",
    explanation: "Spread operator tạo shallow copy. Preferred trong React/Redux cho immutable updates. Object.assign() cũng OK nhưng spread cleaner."
  },
  {
    question: "What is the convention for module organization in JavaScript?",
    options: {
      A: "Everything in one file",
      B: "One class/function per file, organize by feature or type",
      C: "Random organization",
      D: "Only use global variables"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Tổ chức theo feature (feature folders) hoặc type (services/, components/). Một class/component per file. File name matches exported name. Index files for re-exports."
  },

  // ============ ADVANCED CONVENTIONS (181-200) ============
  {
    question: "What is the convention for Git commit messages?",
    options: {
      A: "Any format is fine",
      B: "Short imperative subject line, detailed body if needed",
      C: "Only one word",
      D: "Include all code changes"
    },
    correctAnswer: "B",
    code: "feat: add user authentication\n\nImplement login/logout with JWT tokens.\nAdd password hashing with bcrypt.",
    explanation: "Conventional commits: type(scope): subject. Types: feat, fix, docs, style, refactor, test. Subject imperative mood ('add' not 'added'). Body giải thích why."
  },
  {
    question: "What is the convention for logging in production applications?",
    options: {
      A: "Use System.out.println()",
      B: "Use proper logging framework with levels (DEBUG, INFO, ERROR)",
      C: "Don't log anything",
      D: "Log everything at ERROR level"
    },
    correctAnswer: "B",
    code: "logger.debug(\"Processing user: {}\", userId);\nlogger.error(\"Failed to save\", exception);",
    explanation: "Dùng logging framework (Log4j, SLF4J, Winston). Các levels: DEBUG, INFO, WARN, ERROR. Production thường INFO+. Include context và structured data."
  },
  {
    question: "What is the convention for configuration values?",
    options: {
      A: "Hardcode in source",
      B: "Externalize to config files or environment variables",
      C: "Store in database only",
      D: "Include in comments"
    },
    correctAnswer: "B",
    code: "String dbUrl = System.getenv(\"DATABASE_URL\");\n// or from config file",
    explanation: "Externalize config: environment variables, config files (application.properties, .env). Cho phép thay đổi mà không recompile. 12-factor app principle."
  },
  {
    question: "What is the convention for API response format?",
    options: {
      A: "Return any format",
      B: "Consistent JSON structure with data, errors, metadata",
      C: "Return HTML always",
      D: "Return plain text"
    },
    correctAnswer: "B",
    code: "{\n    \"success\": true,\n    \"data\": { ... },\n    \"error\": null,\n    \"meta\": { \"page\": 1 }\n}",
    explanation: "API responses nên consistent format. Bao gồm: success flag, data, error messages, metadata (pagination). HTTP status codes cũng quan trọng."
  },
  {
    question: "What is the convention for database column naming?",
    options: {
      A: "camelCase",
      B: "snake_case",
      C: "PascalCase",
      D: "UPPERCASE"
    },
    correctAnswer: "B",
    code: "user_id, created_at, first_name",
    explanation: "SQL databases thường dùng snake_case cho columns. case-insensitive trong nhiều DBs. ORM tự động map snake_case columns -> camelCase fields."
  },
  {
    question: "What is the convention for RESTful API endpoints?",
    options: {
      A: "/getUsers, /createUser",
      B: "/users (GET, POST), /users/{id} (GET, PUT, DELETE)",
      C: "/user_management",
      D: "/api_get_all_users"
    },
    correctAnswer: "B",
    code: "GET /users\nPOST /users\nGET /users/{id}\nPUT /users/{id}\nDELETE /users/{id}",
    explanation: "RESTful: nouns cho resources (users, not getUsers), HTTP methods cho actions. Plural nouns. Hierarchical paths: /users/{id}/orders."
  },
  {
    question: "What is the convention for error codes in applications?",
    options: {
      A: "Use random numbers",
      B: "Structured error codes with categories (USER_001, AUTH_002)",
      C: "Only use text messages",
      D: "Don't use error codes"
    },
    correctAnswer: "B",
    code: "// USER_001: Invalid email format\n// AUTH_001: Token expired\n// DB_001: Connection failed",
    explanation: "Structured error codes: category prefix + number. Dễ trace, document, và localize. Clients có thể handle specific errors. Include human-readable message."
  },
  {
    question: "What is the convention for date/time handling?",
    options: {
      A: "Use String for dates",
      B: "Use proper date types, store in UTC, format for display",
      C: "Use integers (timestamps)",
      D: "Use local time everywhere"
    },
    correctAnswer: "B",
    code: "// Store: 2024-01-15T10:30:00Z (ISO 8601, UTC)\n// Display: formatted for user's timezone",
    explanation: "Store dates as proper types (LocalDateTime, Date), trong UTC. Convert to user timezone khi display. ISO 8601 format cho APIs. Tránh String manipulation."
  },
  {
    question: "What is the convention for password handling?",
    options: {
      A: "Store as plain text",
      B: "Hash with salt using bcrypt or similar, never log passwords",
      C: "Encrypt with reversible encryption",
      D: "Store in source code"
    },
    correctAnswer: "B",
    code: "String hashed = BCrypt.hashpw(password, BCrypt.gensalt());",
    explanation: "Hash passwords với bcrypt/argon2, có salt. NEVER store plain text, log passwords, hoặc dùng weak hashing (MD5, SHA1). Không thể và không cần decrypt."
  },
  {
    question: "What is the convention for code reviews?",
    options: {
      A: "Skip reviews for small changes",
      B: "All code should be reviewed, focus on readability and conventions",
      C: "Only senior developers review",
      D: "Reviews are optional"
    },
    correctAnswer: "B",
    code: null,
    explanation: "All code nên được review trước khi merge. Check: correctness, conventions, readability, test coverage. PR nên small và focused. Constructive feedback."
  },
  {
    question: "What is the convention for test naming?",
    options: {
      A: "test1, test2, test3",
      B: "Descriptive names: should/given-when-then format",
      C: "Random names",
      D: "Same as method names"
    },
    correctAnswer: "B",
    code: "@Test\nvoid shouldReturnEmptyListWhenNoUsersExist() { }\n// or\nvoid givenNoUsers_whenFindAll_thenReturnEmpty() { }",
    explanation: "Test names nên describe behavior. Formats: shouldDoXWhenY, givenX_whenY_thenZ. Khi fail, tên cho biết ngay what's broken."
  },
  {
    question: "What is the AAA pattern in testing?",
    options: {
      A: "Arrange, Act, Assert",
      B: "Add, Adjust, Apply",
      C: "Always Assert All",
      D: "Async Await Assert"
    },
    correctAnswer: "A",
    code: "@Test\nvoid testAdd() {\n    // Arrange\n    Calculator calc = new Calculator();\n    // Act\n    int result = calc.add(2, 3);\n    // Assert\n    assertEquals(5, result);\n}",
    explanation: "AAA pattern: Arrange (setup), Act (execute), Assert (verify). Clear separation của 3 phases. Makes tests easy to read and maintain."
  },
  {
    question: "What is the convention for handling null in method parameters?",
    options: {
      A: "Accept null silently",
      B: "Validate early and fail fast with clear message",
      C: "Ignore null parameters",
      D: "Return null"
    },
    correctAnswer: "B",
    code: "public void setName(String name) {\n    this.name = Objects.requireNonNull(name, \"name cannot be null\");\n}",
    explanation: "Validate parameters early, fail fast. Objects.requireNonNull() hoặc manual check. Clear error message better than NullPointerException deep in code."
  },
  {
    question: "What is the convention for thread safety documentation?",
    options: {
      A: "Don't document",
      B: "Document with @ThreadSafe, @NotThreadSafe, or Javadoc",
      C: "Assume everything is thread-safe",
      D: "Only document if thread-safe"
    },
    correctAnswer: "B",
    code: "/**\n * This class is thread-safe.\n * @ThreadSafe\n */\npublic class Counter { }",
    explanation: "Explicitly document thread-safety. Dùng annotations hoặc Javadoc. Caller cần biết có thể share giữa threads hay không. Default assume NOT thread-safe."
  },
  {
    question: "What is the convention for immutable objects?",
    options: {
      A: "All fields public",
      B: "Final class, final fields, no setters, defensive copies",
      C: "Use setters freely",
      D: "Immutability not important"
    },
    correctAnswer: "B",
    code: "public final class User {\n    private final String name;\n    public User(String name) { this.name = name; }\n    public String getName() { return name; }\n}",
    explanation: "Immutable: final class (prevent subclass), private final fields, no setters, constructor-only initialization. Defensive copies cho mutable fields. Thread-safe by default."
  },
  {
    question: "What is the convention for enum methods in Java?",
    options: {
      A: "Enums shouldn't have methods",
      B: "Enums can have fields, constructors, and methods",
      C: "Only static methods",
      D: "Only toString()"
    },
    correctAnswer: "B",
    code: "enum Status {\n    ACTIVE(\"Active\"), INACTIVE(\"Inactive\");\n    private final String display;\n    Status(String display) { this.display = display; }\n    public String getDisplay() { return display; }\n}",
    explanation: "Java enums có thể có fields, constructor (private), methods. Rich enums thay thế magic strings với behavior. Override toString() cho display."
  },
  {
    question: "What is the convention for Optional usage in Java?",
    options: {
      A: "Use for all return types",
      B: "Use for return types that may be absent, never for fields/parameters",
      C: "Never use Optional",
      D: "Use instead of null everywhere"
    },
    correctAnswer: "B",
    code: "public Optional<User> findById(int id) { }\n// Don't: Optional<String> name; // as field",
    explanation: "Optional cho return types express 'may be absent'. Không dùng cho fields, parameters, collections. isPresent() + get() là antipattern, dùng orElse(), map(), ifPresent()."
  },
  {
    question: "What is the convention for stream operations in Java?",
    options: {
      A: "Put everything on one line",
      B: "One operation per line for readability",
      C: "Avoid streams",
      D: "Always use parallel streams"
    },
    correctAnswer: "B",
    code: "users.stream()\n    .filter(u -> u.isActive())\n    .map(User::getName)\n    .sorted()\n    .collect(Collectors.toList());",
    explanation: "Mỗi stream operation một dòng. Dễ đọc và debug. Parallel streams chỉ dùng khi cần thiết và data đủ lớn. Method references khi có thể."
  },
  {
    question: "What is the convention for lambda expressions?",
    options: {
      A: "Always use block body { }",
      B: "Use expression body when possible, name parameters meaningfully",
      C: "Always use method references",
      D: "Avoid lambdas"
    },
    correctAnswer: "B",
    code: "// Good: user -> user.getName()\n// Good: User::getName\n// Avoid: u -> u.getName() // unclear 'u'\n// Avoid: x -> { return x.getName(); } // unnecessary block",
    explanation: "Prefer expression body (no braces) khi simple. Method references khi applicable. Meaningful parameter names. Block body only khi cần multiple statements."
  },
  {
    question: "What is the final best practice summary for coding conventions?",
    options: {
      A: "Conventions don't matter",
      B: "Consistency, readability, and team agreement are most important",
      C: "Follow every rule strictly",
      D: "Each developer should have their own style"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Coding conventions quan trọng vì: consistency across codebase, easier onboarding, reduce cognitive load. Team agree on conventions, enforce với linters/formatters. Conventions có thể adapt cho project."
  }
]
