export const questions = [
    // ===== SINGLE RESPONSIBILITY PRINCIPLE (SRP) - Questions 1-40 =====
    {
      question: "What does the Single Responsibility Principle (SRP) state?",
      options: {
        A: "A class should have only one method",
        B: "A class should have only one reason to change",
        C: "A class should only be instantiated once",
        D: "A class should inherit from only one parent"
      },
      correctAnswer: "B",
      code: null,
      explanation: "SRP nói rằng một class chỉ nên có MỘT lý do để thay đổi, tức là chỉ có một trách nhiệm duy nhất. Điều này không có nghĩa là class chỉ có một method, mà là tất cả methods trong class đều phục vụ cho cùng một mục đích/trách nhiệm. Khi requirements thay đổi, chỉ một loại thay đổi nên ảnh hưởng đến class."
    },
    {
      question: "Which class violates the Single Responsibility Principle?",
      options: {
        A: "UserValidator",
        B: "EmailSender",
        C: "UserManagerAndReportGenerator",
        D: "OrderRepository"
      },
      correctAnswer: "C",
      code: null,
      explanation: "Class 'UserManagerAndReportGenerator' rõ ràng có HAI trách nhiệm: quản lý users VÀ tạo reports. Từ 'And' trong tên class thường là dấu hiệu vi phạm SRP. Các class khác (UserValidator, EmailSender, OrderRepository) đều có tên chỉ ra một trách nhiệm cụ thể duy nhất."
    },
    {
      question: "Identify the SRP violation in this code:",
      options: {
        A: "Method name is too long",
        B: "Class has multiple responsibilities",
        C: "Missing constructor",
        D: "No violation"
      },
      correctAnswer: "B",
      code: `public class Employee {
      public void calculatePay() { }
      public void saveToDatabase() { }
      public void generateReport() { }
  }`,
      explanation: "Class Employee làm 3 việc: tính lương (business logic), lưu database (persistence), và tạo report (presentation). Đây là 3 lý do khác nhau để thay đổi: thay đổi cách tính lương, thay đổi database, thay đổi format report. Nên tách thành: Employee, EmployeeRepository, EmployeeReportGenerator."
    },
    {
      question: "How should this class be refactored to follow SRP?",
      options: {
        A: "Add more methods to the class",
        B: "Split into Order, OrderValidator, and OrderNotifier classes",
        C: "Make all methods private",
        D: "Use inheritance"
      },
      correctAnswer: "B",
      code: `public class OrderProcessor {
      public void validateOrder(Order order) { }
      public void saveOrder(Order order) { }
      public void sendConfirmationEmail(Order order) { }
      public void updateInventory(Order order) { }
  }`,
      explanation: "OrderProcessor có 4 trách nhiệm khác nhau. Theo SRP, nên tách thành: OrderValidator (validate), OrderRepository (save), EmailNotifier (send email), InventoryService (update inventory). Mỗi class có một lý do duy nhất để thay đổi và dễ test, maintain riêng biệt."
    },
    {
      question: "Which is a benefit of following SRP?",
      options: {
        A: "Classes become larger",
        B: "Fewer classes in the system",
        C: "Easier testing and maintenance",
        D: "Faster compilation"
      },
      correctAnswer: "C",
      code: null,
      explanation: "SRP mang lại nhiều lợi ích: (1) Dễ test vì mỗi class nhỏ và focused, (2) Dễ maintain vì thay đổi một feature không ảnh hưởng các phần khác, (3) Code dễ đọc và hiểu, (4) Reusability cao hơn. Đúng là sẽ có nhiều classes hơn, nhưng mỗi class đơn giản hơn."
    },
    {
      question: "What does 'reason to change' mean in SRP context?",
      options: {
        A: "A bug that needs fixing",
        B: "A stakeholder or business requirement",
        C: "A code review comment",
        D: "A performance optimization"
      },
      correctAnswer: "B",
      code: null,
      explanation: "'Reason to change' trong SRP là về stakeholders và business requirements. Ví dụ: CFO yêu cầu thay đổi cách tính lương, DBA yêu cầu thay đổi database schema, Marketing yêu cầu thay đổi format report. Mỗi stakeholder/domain là một 'lý do để thay đổi' và nên được tách riêng."
    },
    {
      question: "Which refactoring helps achieve SRP?",
      options: {
        A: "Extract Class",
        B: "Inline Method",
        C: "Add Parameter",
        D: "Rename Variable"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Extract Class là refactoring chính để đạt SRP. Khi một class có nhiều trách nhiệm, ta 'extract' các trách nhiệm khác nhau thành classes riêng. Ví dụ: từ User class, extract UserValidator, UserNotifier, UserRepository. Mỗi extracted class có single responsibility."
    },
    {
      question: "Does this class follow SRP?",
      options: {
        A: "Yes, it has related methods",
        B: "No, it mixes business logic and UI",
        C: "Yes, all methods work with User",
        D: "Cannot determine"
      },
      correctAnswer: "B",
      code: `public class UserService {
      public User findUser(Long id) { }
      public void updateUser(User user) { }
      public void displayUserDetails(User user) {
          System.out.println(user.getName());
      }
  }`,
      explanation: "Vi phạm SRP! Class mix business logic (findUser, updateUser) với presentation/UI (displayUserDetails với System.out.println). Nếu cách hiển thị thay đổi (từ console sang GUI), UserService phải thay đổi. Nên tách displayUserDetails ra UserPresenter hoặc UserView."
    },
    {
      question: "What is the relationship between SRP and cohesion?",
      options: {
        A: "SRP promotes low cohesion",
        B: "SRP promotes high cohesion",
        C: "They are unrelated",
        D: "SRP is about coupling, not cohesion"
      },
      correctAnswer: "B",
      code: null,
      explanation: "SRP và high cohesion đi cùng nhau! High cohesion nghĩa là các thành phần trong class liên quan chặt chẽ và phục vụ một mục đích chung. Class theo SRP tự nhiên có high cohesion vì tất cả methods đều liên quan đến single responsibility. Low cohesion = vi phạm SRP."
    },
    {
      question: "Identify which class follows SRP:",
      options: {
        A: "FileManager (read, write, compress, encrypt, upload)",
        B: "Logger (log, formatMessage, writeToFile, sendToServer)",
        C: "PasswordHasher (hash, verify)",
        D: "DataProcessor (validate, transform, save, notify)"
      },
      correctAnswer: "C",
      code: null,
      explanation: "PasswordHasher chỉ làm một việc: xử lý password hashing (hash và verify là hai mặt của cùng một responsibility). FileManager làm quá nhiều (IO, compression, encryption, network). Logger và DataProcessor cũng có multiple responsibilities nên vi phạm SRP."
    },
    {
      question: "What SRP violation exists in this code?",
      options: {
        A: "Logging should be in separate class",
        B: "Validation should be in separate class",
        C: "Both A and B",
        D: "No violation"
      },
      correctAnswer: "C",
      code: `public class PaymentProcessor {
      private Logger logger;
      
      public void processPayment(Payment payment) {
          if (payment.getAmount() <= 0) {
              logger.log("Invalid amount");
              return;
          }
          // process payment
          logger.log("Payment processed");
      }
  }`,
      explanation: "Có 2 violations: (1) Logging trực tiếp trong business logic - nên dùng AOP hoặc decorator pattern, (2) Validation logic nằm trong processor - nên có PaymentValidator riêng. PaymentProcessor nên chỉ focus vào việc process payment, không phải validate hay log."
    },
    {
      question: "How many responsibilities does this class have?",
      options: {
        A: "One",
        B: "Two",
        C: "Three",
        D: "Four"
      },
      correctAnswer: "C",
      code: `public class Report {
      public void generateContent() { }
      public void formatAsPDF() { }
      public void sendByEmail(String email) { }
  }`,
      explanation: "THREE responsibilities: (1) Generate content - business logic, (2) Format as PDF - presentation/format, (3) Send by email - delivery/notification. Ba lý do để thay đổi: nội dung report, format output, cách gửi. Nên tách: ReportGenerator, PDFFormatter, EmailSender."
    },
    {
      question: "Which statement about SRP is FALSE?",
      options: {
        A: "SRP leads to more classes in the system",
        B: "SRP makes each class easier to understand",
        C: "SRP means a class should have only one method",
        D: "SRP improves maintainability"
      },
      correctAnswer: "C",
      code: null,
      explanation: "FALSE: 'SRP means a class should have only one method'. SRP KHÔNG nói về số lượng methods! Một class có thể có nhiều methods miễn là tất cả đều phục vụ cùng một responsibility. Ví dụ: UserRepository có findById, findAll, save, delete - tất cả đều về data access."
    },
    {
      question: "What problem does this design cause?",
      options: {
        A: "Tight coupling between unrelated changes",
        B: "Too few classes",
        C: "Memory issues",
        D: "No problem"
      },
      correctAnswer: "A",
      code: `public class Customer {
      public void addCustomer() { }
      public void deleteCustomer() { }
      public void generateInvoice() { }
      public void calculateTax() { }
  }`,
      explanation: "Tight coupling giữa các changes không liên quan! Khi thay đổi cách tính thuế, class Customer phải thay đổi dù không liên quan đến customer management. Khi sửa bug invoice, có thể vô tình ảnh hưởng customer logic. Các responsibilities nên independent."
    },
    {
      question: "Which design pattern helps implement SRP?",
      options: {
        A: "Singleton",
        B: "Facade",
        C: "Observer",
        D: "All of the above can help"
      },
      correctAnswer: "D",
      code: null,
      explanation: "Nhiều patterns hỗ trợ SRP: (1) Facade - hides multiple subsystems, mỗi subsystem có single responsibility, (2) Observer - tách notification logic khỏi business logic, (3) Singleton - đảm bảo một responsibility được centralized. Strategy, Repository, Factory cũng giúp SRP."
    },
    {
      question: "Is this Logger class following SRP?",
      options: {
        A: "Yes, it only handles logging",
        B: "No, formatting and writing are separate concerns",
        C: "Yes, both methods relate to logging",
        D: "Cannot determine without more context"
      },
      correctAnswer: "B",
      code: `public class Logger {
      public void log(String message) {
          String formatted = formatMessage(message);
          writeToFile(formatted);
      }
      
      private String formatMessage(String msg) {
          return "[" + LocalDateTime.now() + "] " + msg;
      }
      
      private void writeToFile(String msg) {
          // write to file
      }
  }`,
      explanation: "Có thể argue cả hai cách, nhưng theo strict SRP: formatting và file writing là 2 concerns. Format có thể thay đổi (JSON, XML), destination có thể thay đổi (file, console, network). Tách thành: LogFormatter và LogWriter cho flexibility tối đa."
    },
    {
      question: "What is the main indicator of SRP violation?",
      options: {
        A: "Class has more than 100 lines",
        B: "Class uses multiple external dependencies",
        C: "Class changes for multiple unrelated reasons",
        D: "Class has both public and private methods"
      },
      correctAnswer: "C",
      code: null,
      explanation: "Indicator chính: class thay đổi vì NHIỀU lý do không liên quan. Ví dụ: thay đổi business rules, thay đổi database, thay đổi UI format - nếu cả 3 đều require sửa cùng một class, đó là SRP violation. Lines of code và dependencies là secondary indicators."
    },
    {
      question: "How does SRP relate to testing?",
      options: {
        A: "SRP makes testing harder",
        B: "SRP has no impact on testing",
        C: "SRP makes unit testing easier",
        D: "SRP eliminates the need for testing"
      },
      correctAnswer: "C",
      code: null,
      explanation: "SRP makes testing MUCH easier! (1) Smaller, focused classes = fewer test cases per class, (2) Single responsibility = clear what to test, (3) Less dependencies to mock, (4) Tests more isolated và independent. Class với multiple responsibilities requires complex test setup."
    },
    {
      question: "Which approach better follows SRP?",
      options: {
        A: "One large class handling all order operations",
        B: "Multiple small classes each handling one aspect",
        C: "One class with many helper methods",
        D: "Using inheritance to share responsibilities"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Multiple small classes, mỗi class một aspect, là SRP approach đúng. Ví dụ: OrderValidator, OrderPricer, OrderRepository, OrderNotifier thay vì một OrderManager lớn. Mỗi class có thể evolve độc lập mà không ảnh hưởng classes khác."
    },
    {
      question: "What does 'high cohesion' mean in SRP context?",
      options: {
        A: "Methods call each other frequently",
        B: "All methods contribute to single purpose",
        C: "Class has many methods",
        D: "Class uses few external dependencies"
      },
      correctAnswer: "B",
      code: null,
      explanation: "High cohesion = tất cả methods trong class cùng contribute vào một purpose chung. Ví dụ: UserRepository với findById, findAll, save, delete - tất cả về data access cho User. Nếu methods không liên quan (calculateTax trong UserRepository), đó là low cohesion."
    },
    {
      question: "Find the SRP violation:",
      options: {
        A: "Email validation mixed with sending",
        B: "Constructor has parameters",
        C: "Method is public",
        D: "No violation"
      },
      correctAnswer: "A",
      code: `public class EmailService {
      public boolean sendEmail(String to, String subject, String body) {
          if (!to.contains("@")) {
              return false; // validation
          }
          // send email logic
          return true;
      }
  }`,
      explanation: "Validation logic nằm trong EmailService vi phạm SRP! EmailService nên chỉ lo việc gửi email. Validation nên ở EmailValidator riêng. Nếu validation rules thay đổi (regex phức tạp hơn), EmailService không nên bị ảnh hưởng."
    },
    {
      question: "Why is God Class an anti-pattern?",
      options: {
        A: "It's too small",
        B: "It violates SRP by doing too much",
        C: "It uses too much inheritance",
        D: "It doesn't use interfaces"
      },
      correctAnswer: "B",
      code: null,
      explanation: "God Class (class làm tất cả mọi thứ) là extreme violation của SRP. Nó có hàng chục responsibilities, khó maintain, khó test, mọi developer đều phải sửa nó. Giống như một căn phòng chứa tất cả đồ trong nhà - không thể organize, tìm kiếm hay dọn dẹp."
    },
    {
      question: "What is the correct refactoring?",
      options: {
        A: "Add more methods to handle other shapes",
        B: "Create separate classes for each shape calculation",
        C: "Make the method static",
        D: "Use inheritance only"
      },
      correctAnswer: "B",
      code: `public class GeometryCalculator {
      public double area(Object shape) {
          if (shape instanceof Circle) {
              return Math.PI * ((Circle)shape).radius * ((Circle)shape).radius;
          } else if (shape instanceof Rectangle) {
              return ((Rectangle)shape).width * ((Rectangle)shape).height;
          }
          return 0;
      }
  }`,
      explanation: "Mỗi shape nên tự tính area của mình! Circle.area(), Rectangle.area(). GeometryCalculator vi phạm SRP vì phải thay đổi mỗi khi thêm shape mới. Polymorphism giải quyết: Shape interface với abstract area(), mỗi shape implement riêng."
    },
    {
      question: "Which responsibility should be extracted?",
      options: {
        A: "User creation logic",
        B: "Password hashing should be separate service",
        C: "Both A and B",
        D: "Nothing needs extraction"
      },
      correctAnswer: "B",
      code: `public class UserService {
      public User createUser(String username, String password) {
          String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
          User user = new User(username, hashedPassword);
          return userRepository.save(user);
      }
  }`,
      explanation: "Password hashing nên tách thành PasswordService hoặc PasswordHasher! Nếu sau này đổi từ BCrypt sang Argon2, UserService không nên phải thay đổi. UserService lo việc user, PasswordHasher lo việc hash. Separation of concerns."
    },
    {
      question: "Is this configuration class following SRP?",
      options: {
        A: "Yes, it only handles configuration",
        B: "No, it has multiple config concerns",
        C: "It depends on how it's used",
        D: "Yes, reading and getting are one responsibility"
      },
      correctAnswer: "A",
      code: `public class DatabaseConfig {
      private String url;
      private String username;
      private String password;
      
      public void loadFromFile(String path) { }
      public String getUrl() { return url; }
      public String getUsername() { return username; }
  }`,
      explanation: "Class này THEO SRP! Nó chỉ làm một việc: manage database configuration. Load và get đều phục vụ mục đích này. Nếu nó thêm connectToDatabase() thì mới vi phạm vì đó là database operation, không phải configuration."
    },
    {
      question: "What's the consequence of violating SRP?",
      options: {
        A: "Higher risk of bugs when making changes",
        B: "Code compiles faster",
        C: "Easier to understand",
        D: "Better performance"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Vi phạm SRP dẫn đến: (1) Higher risk of bugs - sửa một feature có thể break feature khác, (2) Merge conflicts - nhiều developers sửa cùng class, (3) Khó test, (4) Khó reuse - muốn dùng một phần phải lấy cả class. Technical debt accumulates over time."
    },
    {
      question: "Which module structure follows SRP?",
      options: {
        A: "com.app.utils (all utility classes)",
        B: "com.app.user, com.app.order, com.app.payment",
        C: "com.app.everything",
        D: "com.app.helpers"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Package by feature (user, order, payment) follows SRP ở module level. Mỗi package có một business domain responsibility. 'utils' và 'helpers' packages thường là anti-pattern vì chứa unrelated classes, giống God Class nhưng ở package level."
    },
    {
      question: "How many actors/stakeholders should a class serve?",
      options: {
        A: "As many as needed",
        B: "Only one",
        C: "Maximum three",
        D: "Zero"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Theo Robert C. Martin, một class nên chỉ serve ONE actor/stakeholder. Actor ở đây là nhóm người có thể yêu cầu thay đổi. Ví dụ: CFO (finance), COO (operations), CTO (tech). Mỗi actor = một reason to change = nên tách class riêng."
    },
    {
      question: "Is Controller handling too many responsibilities?",
      options: {
        A: "Yes, it mixes request handling with business logic",
        B: "No, controllers can do everything",
        C: "Yes, it should also handle database access",
        D: "No, this is proper MVC pattern"
      },
      correctAnswer: "A",
      code: `@RestController
  public class UserController {
      public User createUser(CreateUserRequest request) {
          // Validate request
          if (request.getEmail() == null) throw new BadRequestException();
          // Hash password
          String hash = BCrypt.hashpw(request.getPassword(), BCrypt.gensalt());
          // Create user
          User user = new User(request.getEmail(), hash);
          // Save to database
          return jdbcTemplate.save(user);
      }
  }`,
      explanation: "Controller vi phạm SRP nghiêm trọng! Nó làm: (1) Validation - nên ở Validator, (2) Password hashing - nên ở PasswordService, (3) Business logic - nên ở UserService, (4) Database access - nên ở UserRepository. Controller chỉ nên delegate và handle HTTP."
    },
    {
      question: "What is Separation of Concerns?",
      options: {
        A: "Same as SRP at architecture level",
        B: "Separating frontend and backend",
        C: "Dividing program into distinct sections by concern",
        D: "Using microservices"
      },
      correctAnswer: "C",
      code: null,
      explanation: "Separation of Concerns (SoC) là nguyên tắc chia chương trình thành các sections riêng biệt, mỗi section xử lý một 'concern' (một aspect của functionality). SRP là application của SoC ở class level. MVC, layered architecture, microservices đều apply SoC."
    },
    {
      question: "Which class has better SRP compliance?",
      options: {
        A: "Class A with 10 related methods",
        B: "Class B with 5 unrelated methods",
        C: "Class C with 20 related methods",
        D: "Both A and C are equally good"
      },
      correctAnswer: "D",
      code: null,
      explanation: "Số lượng methods KHÔNG quan trọng, mà là chúng có RELATED không! Class A (10 methods) và Class C (20 methods) đều tốt nếu methods related đến single responsibility. Class B với 5 unrelated methods vi phạm SRP dù ít methods hơn."
    },
    {
      question: "What does this refactoring achieve?",
      options: {
        A: "Violates SRP",
        B: "Follows SRP by separating persistence",
        C: "Makes code slower",
        D: "Creates circular dependency"
      },
      correctAnswer: "B",
      code: `// Before
  class User {
      void save() { /* database code */ }
  }
  
  // After
  class User {
      // just data and behavior
  }
  
  class UserRepository {
      void save(User user) { /* database code */ }
  }`,
      explanation: "Refactoring này FOLLOW SRP bằng cách tách persistence logic ra khỏi domain entity. User class chỉ chứa business data và behavior, UserRepository chịu trách nhiệm database operations. Thay đổi database không ảnh hưởng User class."
    },
    {
      question: "Why should logging be a separate concern?",
      options: {
        A: "Logging is not important",
        B: "Logging changes independently from business logic",
        C: "Logging makes code slower",
        D: "Logging uses too much memory"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Logging là cross-cutting concern và thay đổi INDEPENDENTLY từ business logic. Có thể cần thay đổi log format, log level, log destination mà không muốn sửa business code. Dùng AOP, decorators, hoặc logging framework để tách logging ra."
    },
    {
      question: "Is this Repository following SRP?",
      options: {
        A: "Yes, it handles data access only",
        B: "No, it has too many methods",
        C: "No, CRUD operations are different responsibilities",
        D: "Cannot determine"
      },
      correctAnswer: "A",
      code: `public class ProductRepository {
      public Product findById(Long id) { }
      public List<Product> findAll() { }
      public Product save(Product product) { }
      public void delete(Long id) { }
      public List<Product> findByCategory(String category) { }
  }`,
      explanation: "Repository này THEO SRP! Tất cả methods đều phục vụ MỘT responsibility: data access cho Product entity. CRUD là các operations của data access, không phải separate responsibilities. Repository pattern is a good SRP example."
    },
    {
      question: "What violation exists here?",
      options: {
        A: "Business logic in entity",
        B: "Too many fields",
        C: "Missing getters",
        D: "No violation"
      },
      correctAnswer: "D",
      code: `public class Order {
      private List<OrderItem> items;
      private OrderStatus status;
      
      public BigDecimal calculateTotal() {
          return items.stream()
              .map(OrderItem::getSubtotal)
              .reduce(BigDecimal.ZERO, BigDecimal::add);
      }
      
      public boolean canBeCancelled() {
          return status == OrderStatus.PENDING;
      }
  }`,
      explanation: "KHÔNG vi phạm! Domain entity CÓ THỂ chứa business logic liên quan đến chính nó. calculateTotal() và canBeCancelled() là behaviors của Order. Đây là Rich Domain Model - khác với Anemic Domain Model (chỉ có getters/setters). SRP ở đây là: Order's own behavior."
    },
    {
      question: "What is 'Axis of Change' in SRP?",
      options: {
        A: "A type of UML diagram",
        B: "The direction in which requirements change",
        C: "A refactoring technique",
        D: "A design pattern"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Axis of Change là hướng mà requirements thay đổi. Ví dụ: UI thay đổi theo axis khác với business rules. Database thay đổi theo axis khác với validation. Mỗi axis = một reason to change = nên có class riêng. Identify axes để apply SRP correctly."
    },
    {
      question: "Which is a valid reason to have multiple methods in one class?",
      options: {
        A: "They are all public",
        B: "They serve the same single responsibility",
        C: "They have similar parameter types",
        D: "They are all void methods"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Multiple methods OK khi chúng serve CÙNG responsibility. StringUtils có isEmpty, trim, capitalize, toLowerCase - tất cả về string manipulation. Visibility (public/private), return types, parameter types không quyết định SRP compliance."
    },
    {
      question: "Find the responsibility that should be extracted:",
      options: {
        A: "Email template generation",
        B: "Getting recipient email",
        C: "Both should stay together",
        D: "Neither needs extraction"
      },
      correctAnswer: "A",
      code: `public class NotificationService {
      public void sendWelcomeEmail(User user) {
          String subject = "Welcome!";
          String body = "<html><body><h1>Welcome " + user.getName() + "</h1>" +
                       "<p>Thanks for joining...</p></body></html>";
          emailClient.send(user.getEmail(), subject, body);
      }
  }`,
      explanation: "Template generation (building HTML) nên extract ra EmailTemplateService hoặc dùng template engine (Thymeleaf, Freemarker). Nếu format email thay đổi, NotificationService không nên sửa. NotificationService chỉ orchestrate notification, không build content."
    },
    {
      question: "What does Uncle Bob say about SRP and Functions?",
      options: {
        A: "Functions should do one thing only",
        B: "Functions can do multiple things",
        C: "SRP doesn't apply to functions",
        D: "Functions should have multiple return statements"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Robert C. Martin (Uncle Bob) trong Clean Code: 'Functions should do one thing. They should do it well. They should do it only.' SRP apply ở cả class và function level. Một function nên có one level of abstraction và làm exactly one thing."
    },
  
    // ===== OPEN/CLOSED PRINCIPLE (OCP) - Questions 41-80 =====
    {
      question: "What does the Open/Closed Principle state?",
      options: {
        A: "Classes should be open for modification",
        B: "Classes should be closed for extension",
        C: "Open for extension, closed for modification",
        D: "Open for reading, closed for writing"
      },
      correctAnswer: "C",
      code: null,
      explanation: "OCP: Software entities nên OPEN for extension (có thể thêm behavior mới) nhưng CLOSED for modification (không cần sửa existing code). Achieve bằng abstraction, interfaces, inheritance. Khi thêm feature mới, ta ADD code, không MODIFY code cũ."
    },
    {
      question: "Which code violates OCP?",
      options: {
        A: "Using interface for abstraction",
        B: "Using switch on type to determine behavior",
        C: "Using polymorphism",
        D: "Using strategy pattern"
      },
      correctAnswer: "B",
      code: `public double calculateArea(Shape shape) {
      if (shape.type.equals("circle")) {
          return Math.PI * shape.radius * shape.radius;
      } else if (shape.type.equals("rectangle")) {
          return shape.width * shape.height;
      }
      // Need to modify when adding new shapes!
      return 0;
  }`,
      explanation: "Switch/if-else trên type vi phạm OCP vì phải MODIFY method mỗi khi thêm shape mới. Đúng: Shape interface với abstract area(), mỗi shape (Circle, Rectangle) implement riêng. Thêm Triangle = add new class, không sửa existing code."
    },
    {
      question: "How does this code follow OCP?",
      options: {
        A: "It doesn't - needs modification for new shapes",
        B: "It uses interface - new shapes extend without modifying",
        C: "It has abstract method",
        D: "It uses final keyword"
      },
      correctAnswer: "B",
      code: `interface Shape {
      double area();
  }
  
  class Circle implements Shape {
      public double area() { return Math.PI * r * r; }
  }
  
  class Rectangle implements Shape {
      public double area() { return w * h; }
  }
  
  // Adding new shape - no modification to existing code
  class Triangle implements Shape {
      public double area() { return 0.5 * base * height; }
  }`,
      explanation: "THEO OCP! Để thêm shape mới (Triangle), ta chỉ ADD new class implementing Shape interface. Không cần MODIFY Circle, Rectangle, hay bất kỳ code nào sử dụng Shape. Interface tạo ra abstraction point cho extension."
    },
    {
      question: "What design pattern helps achieve OCP?",
      options: {
        A: "Singleton",
        B: "Strategy",
        C: "Builder",
        D: "Prototype"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Strategy Pattern là ví dụ điển hình của OCP. Define family of algorithms (strategies), encapsulate mỗi algorithm trong class riêng, cho phép thay đổi algorithm tại runtime. Thêm strategy mới = add new class, không sửa existing code."
    },
    {
      question: "Identify the OCP violation:",
      options: {
        A: "Missing default case",
        B: "Must modify code when adding new payment type",
        C: "Using enum",
        D: "No violation"
      },
      correctAnswer: "B",
      code: `public class PaymentProcessor {
      public void process(PaymentType type, double amount) {
          switch (type) {
              case CREDIT_CARD:
                  processCreditCard(amount);
                  break;
              case PAYPAL:
                  processPayPal(amount);
                  break;
              case BITCOIN:
                  processBitcoin(amount);
                  break;
          }
      }
  }`,
      explanation: "Vi phạm OCP! Khi thêm payment type mới (Apple Pay), phải MODIFY PaymentProcessor. Đúng: PaymentStrategy interface với process(amount), mỗi payment type là một implementation. PaymentProcessor nhận strategy, delegate việc process."
    },
    {
      question: "Which approach follows OCP for adding new features?",
      options: {
        A: "Modify existing class to add feature",
        B: "Create new class that extends or implements abstraction",
        C: "Copy and paste existing code",
        D: "Add flag parameters to existing methods"
      },
      correctAnswer: "B",
      code: null,
      explanation: "OCP approach: tạo NEW class extending/implementing abstraction. Không modify existing code (option A), không copy-paste (violates DRY), không thêm flag parameters (makes code complex). Extend through abstraction = OCP compliance."
    },
    {
      question: "What makes this discount system violate OCP?",
      options: {
        A: "Too many discount types",
        B: "Need to modify class when adding new discount",
        C: "Using percentages",
        D: "Method is too long"
      },
      correctAnswer: "B",
      code: `public class DiscountCalculator {
      public double calculate(String customerType, double amount) {
          if (customerType.equals("REGULAR")) {
              return amount * 0.1;
          } else if (customerType.equals("PREMIUM")) {
              return amount * 0.2;
          } else if (customerType.equals("VIP")) {
              return amount * 0.3;
          }
          return 0;
      }
  }`,
      explanation: "Mỗi khi thêm customer type mới (PLATINUM), phải MODIFY DiscountCalculator. OCP solution: DiscountStrategy interface, mỗi customer type có DiscountStrategy implementation riêng (RegularDiscount, PremiumDiscount, VIPDiscount)."
    },
    {
      question: "How does Decorator pattern support OCP?",
      options: {
        A: "It doesn't support OCP",
        B: "Allows adding behavior without modifying original class",
        C: "It modifies the original class",
        D: "It removes functionality"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Decorator pattern = OCP in action! Thêm behavior mới bằng cách WRAP object trong decorator, không modify original class. Ví dụ: BufferedInputStream wraps FileInputStream thêm buffering mà không sửa FileInputStream. Stack decorators cho multiple behaviors."
    },
    {
      question: "Which is the correct OCP refactoring?",
      options: {
        A: "Keep using if-else but add comments",
        B: "Extract interface and use polymorphism",
        C: "Make the method longer",
        D: "Add more parameters"
      },
      correctAnswer: "B",
      code: `// Before: violates OCP
  public String format(String type, Object data) {
      if (type.equals("JSON")) return toJson(data);
      if (type.equals("XML")) return toXml(data);
      return data.toString();
  }
  
  // After: follows OCP
  interface Formatter { String format(Object data); }
  class JsonFormatter implements Formatter { ... }
  class XmlFormatter implements Formatter { ... }`,
      explanation: "Extract interface + polymorphism = OCP solution chuẩn. Formatter interface define contract, mỗi format type implement riêng. Thêm YamlFormatter chỉ cần add new class. Client code dùng Formatter interface, không biết implementation cụ thể."
    },
    {
      question: "What is 'Closed for Modification' in OCP?",
      options: {
        A: "Cannot change the code at all",
        B: "Source code shouldn't change when adding features",
        C: "Cannot add new methods",
        D: "Cannot use private methods"
      },
      correctAnswer: "B",
      code: null,
      explanation: "'Closed for modification' nghĩa là khi thêm NEW features/behaviors, EXISTING source code không cần thay đổi. Đây không phải là cấm mọi changes (bug fixes vẫn OK), mà là về extending functionality mà không touching working code."
    },
    {
      question: "Which code structure supports OCP?",
      options: {
        A: "Concrete class dependencies",
        B: "Abstract dependencies (interfaces)",
        C: "Static methods everywhere",
        D: "Global variables"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Depend on ABSTRACTIONS (interfaces/abstract classes), not concretions. Đây là key để OCP. Khi depend on interface, có thể swap implementations mà không modify dependent code. Concrete dependencies = tight coupling = OCP violation."
    },
    {
      question: "Find the OCP problem:",
      options: {
        A: "Logger class is final",
        B: "Adding new log destination requires modifying Logger",
        C: "Method names are wrong",
        D: "No problem"
      },
      correctAnswer: "B",
      code: `public class Logger {
      public void log(String message, String destination) {
          if (destination.equals("FILE")) {
              writeToFile(message);
          } else if (destination.equals("CONSOLE")) {
              System.out.println(message);
          } else if (destination.equals("DATABASE")) {
              saveToDatabase(message);
          }
      }
  }`,
      explanation: "Vi phạm OCP! Thêm destination mới (CLOUD, EMAIL) phải modify Logger. OCP solution: LogDestination interface với write(message), mỗi destination (FileDestination, ConsoleDestination) implement riêng. Logger chỉ delegate tới LogDestination."
    },
    {
      question: "What's the relationship between OCP and inheritance?",
      options: {
        A: "OCP forbids inheritance",
        B: "Inheritance is one way to achieve OCP",
        C: "They are unrelated",
        D: "OCP requires multiple inheritance"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Inheritance là MỘT CÁCH để achieve OCP. Extend base class để add behavior mà không modify base. Tuy nhiên, composition + interfaces thường preferred hơn inheritance. Template Method pattern dùng inheritance cho OCP."
    },
    {
      question: "How does this violate OCP?",
      options: {
        A: "Report class must know all export types",
        B: "Too many methods",
        C: "Missing constructor",
        D: "It follows OCP"
      },
      correctAnswer: "A",
      code: `public class Report {
      public void generatePDF() { }
      public void generateExcel() { }
      public void generateWord() { }
      public void generateHTML() { }
      // Adding new format requires adding new method
  }`,
      explanation: "Report class phải MODIFY mỗi khi thêm format mới. OCP solution: ReportExporter interface với export(Report) method. PDFExporter, ExcelExporter, etc. implement interface. Report class doesn't know about export formats."
    },
    {
      question: "Which SOLID principle does OCP depend on?",
      options: {
        A: "Single Responsibility",
        B: "Dependency Inversion",
        C: "Interface Segregation",
        D: "All of the above support OCP"
      },
      correctAnswer: "D",
      code: null,
      explanation: "Tất cả SOLID principles hỗ trợ lẫn nhau! SRP giúp classes focused → easier to extend. DIP khiến depend on abstractions → enables extension. ISP keeps interfaces small → easier to implement new variants. Liskov ensures substitutability."
    },
    {
      question: "What does 'plugin architecture' relate to OCP?",
      options: {
        A: "Nothing",
        B: "Plugins extend functionality without modifying core",
        C: "Plugins require modifying core code",
        D: "Plugins violate OCP"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Plugin architecture là ví dụ hoàn hảo của OCP! Core application định nghĩa extension points (interfaces), plugins implement các interfaces này. Thêm plugin = thêm functionality mà KHÔNG modify core. Eclipse, IntelliJ, VS Code đều dùng pattern này."
    },
    {
      question: "Is this factory method OCP compliant?",
      options: {
        A: "Yes, factories always follow OCP",
        B: "No, adding new product requires modifying factory",
        C: "Yes, it uses switch correctly",
        D: "Cannot determine"
      },
      correctAnswer: "B",
      code: `public class ShapeFactory {
      public Shape create(String type) {
          switch (type) {
              case "circle": return new Circle();
              case "rectangle": return new Rectangle();
              default: throw new IllegalArgumentException();
          }
      }
  }`,
      explanation: "Factory này vi phạm OCP! Thêm Triangle phải modify factory. OCP-compliant alternatives: (1) Registry pattern - register shapes dynamically, (2) Abstract Factory - swap factory implementations, (3) Reflection-based factory. Factory method có thể compliant nếu designed đúng."
    },
    {
      question: "What is the benefit of OCP?",
      options: {
        A: "Faster code execution",
        B: "Reduced risk when adding new features",
        C: "Smaller code size",
        D: "Easier to delete code"
      },
      correctAnswer: "B",
      code: null,
      explanation: "OCP benefit chính: REDUCED RISK khi thêm features. Không modify existing tested code = không break existing functionality. Also: parallel development possible (team add new classes independently), better testability, clear extension points."
    },
    {
      question: "Which modification breaks OCP?",
      options: {
        A: "Adding new class implementing interface",
        B: "Modifying existing class to handle new case",
        C: "Creating new subclass",
        D: "Adding new interface"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Modifying existing class để handle new case = OCP violation. Options A, C, D đều là EXTENSION (adding new code), không modification. OCP allows adding new classes/interfaces, but existing code should remain untouched."
    },
    {
      question: "How does Template Method pattern support OCP?",
      options: {
        A: "It doesn't support OCP",
        B: "Base class is open for extension via subclasses",
        C: "It modifies the template",
        D: "It uses global variables"
      },
      correctAnswer: "B",
      code: `abstract class DataProcessor {
      public final void process() {
          readData();
          processData();
          writeData();
      }
      protected abstract void readData();
      protected abstract void processData();
      protected abstract void writeData();
  }`,
      explanation: "Template Method = OCP! Base class defines algorithm skeleton (template), subclasses override abstract methods để customize behavior. Add new processor = create new subclass, không modify base. Algorithm structure closed, steps open for extension."
    },
    {
      question: "What makes interfaces key to OCP?",
      options: {
        A: "Interfaces are faster",
        B: "Interfaces define contracts that can have multiple implementations",
        C: "Interfaces use less memory",
        D: "Interfaces are simpler"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Interfaces là KEY cho OCP vì chúng define CONTRACTS mà có thể có MULTIPLE implementations. Depend on interface → có thể add new implementation mà không modify dependent code. Interface = extension point = OCP enabler."
    },
    {
      question: "Is this event system OCP compliant?",
      options: {
        A: "Yes, new handlers can be added without modification",
        B: "No, EventSystem must know all handlers",
        C: "Yes, it uses lists correctly",
        D: "No, it uses interface incorrectly"
      },
      correctAnswer: "A",
      code: `interface EventHandler { void handle(Event e); }
  
  class EventSystem {
      private List<EventHandler> handlers = new ArrayList<>();
      
      public void addHandler(EventHandler h) { handlers.add(h); }
      
      public void dispatch(Event e) {
          handlers.forEach(h -> h.handle(e));
      }
  }`,
      explanation: "THEO OCP! EventSystem không biết về specific handlers. Thêm handler mới = tạo class implementing EventHandler và add vào system. EventSystem code không bao giờ thay đổi. Observer pattern variation này rất OCP compliant."
    },
    {
      question: "What's wrong with this approach to extensibility?",
      options: {
        A: "Using enums is always wrong",
        B: "Each new type requires modifying multiple places",
        C: "Switch is efficient so it's fine",
        D: "Nothing wrong"
      },
      correctAnswer: "B",
      code: `enum NotificationType { EMAIL, SMS, PUSH }
  
  class NotificationService {
      void send(NotificationType type, String msg) {
          switch (type) {
              case EMAIL: sendEmail(msg); break;
              case SMS: sendSMS(msg); break;
              case PUSH: sendPush(msg); break;
          }
      }
  }`,
      explanation: "Thêm notification type mới phải sửa NHIỀU CHỖ: enum, switch, add new method. Shotgun surgery! OCP approach: NotificationChannel interface, EmailChannel, SMSChannel, PushChannel implementations. Add new channel = add new class only."
    },
    {
      question: "Which is a correct application of OCP?",
      options: {
        A: "Hardcoding all possible cases",
        B: "Using configuration to add new behaviors",
        C: "Creating one massive class",
        D: "Avoiding all abstraction"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Configuration + plugin/strategy loading = OCP application. Define interface, load implementations from config/classpath. Add new behavior = add new class + update config, không sửa source code. Spring's bean configuration là ví dụ."
    },
    {
      question: "How does this validator design violate OCP?",
      options: {
        A: "It uses multiple validators",
        B: "Adding new validation requires modifying UserValidator",
        C: "It returns boolean",
        D: "It doesn't violate OCP"
      },
      correctAnswer: "D",
      code: `interface ValidationRule { boolean validate(User user); }
  
  class UserValidator {
      private List<ValidationRule> rules;
      
      public boolean validate(User user) {
          return rules.stream().allMatch(r -> r.validate(user));
      }
      
      public void addRule(ValidationRule rule) {
          rules.add(rule);
      }
  }`,
      explanation: "KHÔNG vi phạm OCP! UserValidator không biết specific rules. Thêm validation rule mới = tạo class implementing ValidationRule, add vào validator. UserValidator code không thay đổi. Đây là composition + strategy pattern cho OCP."
    },
    {
      question: "What does 'extension point' mean in OCP?",
      options: {
        A: "A bug in the code",
        B: "Place where new behavior can be added without modification",
        C: "A file extension",
        D: "A type of inheritance"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Extension point = nơi có thể ADD behavior mới WITHOUT modifying existing code. Interfaces, abstract methods, hooks, callbacks đều là extension points. Good OCP design = clear, well-documented extension points cho anticipated variations."
    },
    {
      question: "Which statement about OCP is TRUE?",
      options: {
        A: "OCP means never changing any code",
        B: "OCP applies only to classes",
        C: "OCP requires anticipating future changes",
        D: "OCP makes code slower"
      },
      correctAnswer: "C",
      code: null,
      explanation: "OCP requires ANTICIPATING likely changes và design extension points cho chúng. Không thể predict mọi thứ, nên focus vào high-probability variations. OCP apply ở nhiều levels: classes, modules, systems. Bug fixes vẫn modify code - OCP về extending features."
    },
    {
      question: "Find the extension point in this code:",
      options: {
        A: "The Comparator parameter",
        B: "The list itself",
        C: "The sort method",
        D: "There is no extension point"
      },
      correctAnswer: "A",
      code: `public class Sorter {
      public <T> void sort(List<T> list, Comparator<T> comparator) {
          Collections.sort(list, comparator);
      }
  }`,
      explanation: "Comparator parameter là extension point! Sorter không biết cách compare, delegate cho Comparator. Thêm sorting strategy mới = pass different Comparator implementation. Sorter code never changes. Strategy pattern = OCP."
    },
    {
      question: "Why is 'new' keyword sometimes problematic for OCP?",
      options: {
        A: "new is slow",
        B: "Directly creating objects creates tight coupling",
        C: "new uses too much memory",
        D: "new is deprecated"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Direct 'new ConcreteClass()' = tight coupling, khó swap implementations. Để follow OCP, dùng: Factory pattern, Dependency Injection, Service Locator. Inject dependencies thay vì create trực tiếp. Depend on abstraction, not concrete classes."
    },
    {
      question: "How does Spring Framework support OCP?",
      options: {
        A: "It doesn't support OCP",
        B: "Through Dependency Injection and configuration",
        C: "Through annotations only",
        D: "Through XML only"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Spring supports OCP qua Dependency Injection! Inject interface implementations, swap bằng configuration không sửa code. Add new implementation = create class + configure bean. AOP cũng support OCP bằng cách add behavior without modifying code."
    },
    {
      question: "What is 'Protected Variation' pattern?",
      options: {
        A: "Using protected keyword",
        B: "Identifying variation points and encapsulating them",
        C: "Protecting code from hackers",
        D: "Using private methods"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Protected Variation (từ GRASP patterns) = identify points of predicted variation và create stable interface quanh chúng. Related to OCP: protect system from variations by encapsulating them behind abstractions. Interface shields client from implementation changes."
    },
    {
      question: "Which refactoring violates OCP?",
      options: {
        A: "Extract Interface",
        B: "Replace Conditional with Polymorphism",
        C: "Adding else-if for new case",
        D: "Introduce Parameter Object"
      },
      correctAnswer: "C",
      code: null,
      explanation: "Adding else-if cho new case = MODIFYING existing code = OCP violation. Các refactoring khác SUPPORT OCP: Extract Interface creates abstraction, Replace Conditional with Polymorphism enables extension, Parameter Object encapsulates variation."
    },
    {
      question: "Is composition better than inheritance for OCP?",
      options: {
        A: "No, inheritance is always better",
        B: "Yes, composition is more flexible",
        C: "They are equal for OCP",
        D: "Neither supports OCP"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Composition thường BETTER cho OCP! (1) More flexible - change behavior at runtime, (2) Avoid fragile base class problem, (3) Can compose multiple behaviors. Inheritance is 'is-a' relationship, composition is 'has-a'. Prefer composition over inheritance."
    },
    {
      question: "What makes this design OCP-compliant?",
      options: {
        A: "Using abstract class",
        B: "Using interface for dependency",
        C: "Using concrete class",
        D: "Using static method"
      },
      correctAnswer: "B",
      code: `public class OrderService {
      private final PaymentGateway paymentGateway;
      
      public OrderService(PaymentGateway gateway) {
          this.paymentGateway = gateway;
      }
      
      public void processOrder(Order order) {
          paymentGateway.charge(order.getTotal());
      }
  }`,
      explanation: "Depend on PaymentGateway INTERFACE, không phải concrete class! Có thể inject StripeGateway, PayPalGateway, etc. mà không sửa OrderService. Thêm payment gateway mới = add new implementation, không modify existing code. DIP + OCP."
    },
    {
      question: "How does null object pattern relate to OCP?",
      options: {
        A: "It violates OCP",
        B: "It provides default behavior without modifying code",
        C: "It has no relation to OCP",
        D: "It requires modifying existing code"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Null Object pattern supports OCP! Thay vì null checks scattered everywhere (sẽ phải modify khi behavior thay đổi), provide NullObject implementation với default behavior. Client code unchanged - just uses interface. Extend behavior by providing different implementations."
    },
    {
      question: "What's the trade-off of strict OCP compliance?",
      options: {
        A: "No trade-offs",
        B: "More abstractions = more complexity",
        C: "Faster code",
        D: "Less code"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Trade-off: More abstractions = more complexity, more files, more indirection. Over-engineering risk nếu apply OCP everywhere. Balance: apply OCP cho likely variations, YAGNI cho unlikely ones. Don't create extension points cho mọi thứ - chỉ khi có real need."
    },
  
    // ===== LISKOV SUBSTITUTION PRINCIPLE (LSP) - Questions 81-120 =====
    {
      question: "What does Liskov Substitution Principle state?",
      options: {
        A: "Subclasses can add new methods",
        B: "Objects of superclass should be replaceable with subclass objects",
        C: "Subclasses should have more methods than superclass",
        D: "Inheritance should be avoided"
      },
      correctAnswer: "B",
      code: null,
      explanation: "LSP: Objects của superclass phải có thể REPLACE bằng objects của subclass mà không làm thay đổi correctness của program. Nếu code works với Parent, phải work với Child. Subclass phải honor contract của parent, không surprise clients."
    },
    {
      question: "Which violates LSP?",
      options: {
        A: "Square extending Rectangle",
        B: "Dog extending Animal",
        C: "Car extending Vehicle",
        D: "ArrayList extending AbstractList"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Classic LSP violation: Square extends Rectangle. Rectangle có setWidth/setHeight độc lập, nhưng Square phải set cả hai cùng lúc. Code expecting Rectangle behavior sẽ break với Square: rect.setWidth(5); rect.setHeight(10); assert rect.area() == 50; // fails for Square!"
    },
    {
      question: "Find the LSP violation:",
      options: {
        A: "Penguin overrides fly()",
        B: "Penguin extends Bird is wrong because penguins can't fly",
        C: "fly() should be abstract",
        D: "No violation"
      },
      correctAnswer: "B",
      code: `class Bird {
      public void fly() {
          System.out.println("Flying...");
      }
  }
  
  class Penguin extends Bird {
      @Override
      public void fly() {
          throw new UnsupportedOperationException("Penguins can't fly!");
      }
  }`,
      explanation: "LSP violation! Code expecting Bird.fly() sẽ break với Penguin (exception). Penguin không thể substitute cho Bird. Solution: tách Bird thành FlyingBird và NonFlyingBird, hoặc dùng interface CanFly cho birds có thể bay."
    },
    {
      question: "What is 'behavioral subtyping' in LSP?",
      options: {
        A: "Subclass can have different behavior",
        B: "Subclass must behave consistently with superclass contract",
        C: "Subclass must have same methods",
        D: "Subclass should not override methods"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Behavioral subtyping = subclass phải BEHAVE CONSISTENTLY với superclass contract. Không chỉ về method signatures (syntactic), mà về semantics: preconditions, postconditions, invariants phải được maintained. Subclass có thể DO MORE, nhưng không được DO LESS."
    },
    {
      question: "Which statement about LSP is correct?",
      options: {
        A: "Subclass can strengthen preconditions",
        B: "Subclass can weaken postconditions",
        C: "Subclass can weaken preconditions",
        D: "Subclass can break invariants"
      },
      correctAnswer: "C",
      code: null,
      explanation: "LSP rules: (1) Preconditions CANNOT be strengthened - subclass phải accept everything parent accepts, (2) Postconditions CANNOT be weakened - subclass phải deliver at least what parent promises, (3) Invariants MUST be preserved. Subclass có thể accept MORE (weaken pre) và deliver MORE (strengthen post)."
    },
    {
      question: "Is this a valid LSP-compliant inheritance?",
      options: {
        A: "Yes, Ostrich is a Bird",
        B: "No, Ostrich violates fly() contract",
        C: "Yes, returning 0 is valid",
        D: "No, Bird should be abstract"
      },
      correctAnswer: "A",
      code: `interface Bird {
      void eat();
      void move();
  }
  
  class Ostrich implements Bird {
      public void eat() { System.out.println("Eating"); }
      public void move() { System.out.println("Running"); }
  }`,
      explanation: "THEO LSP! Interface Bird chỉ require eat() và move(), không có fly(). Ostrich fulfill contract hoàn toàn. Đây là cách design đúng: không assume tất cả birds fly. Interface chỉ define common behavior tất cả implementations phải có."
    },
    {
      question: "What does 'substitutability' mean in LSP?",
      options: {
        A: "Can replace superclass with subclass",
        B: "Can replace subclass with superclass",
        C: "Can replace any class with any other",
        D: "Can replace interface with class"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Substitutability = có thể REPLACE superclass (hoặc interface) bằng subclass (hoặc implementation) mà không break correctness. Wherever Parent is used, Child can be used instead. Client code không cần biết concrete type."
    },
    {
      question: "Find the LSP problem:",
      options: {
        A: "Subclass adds new method",
        B: "Subclass changes return type behavior unexpectedly",
        C: "Using @Override",
        D: "No problem"
      },
      correctAnswer: "B",
      code: `class Account {
      public int withdraw(int amount) {
          balance -= amount;
          return amount;
      }
  }
  
  class FixedDepositAccount extends Account {
      @Override
      public int withdraw(int amount) {
          if (hasMatured()) {
              return super.withdraw(amount);
          }
          return 0; // Can't withdraw before maturity
      }
  }`,
      explanation: "LSP violation! Parent's withdraw() always succeeds, nhưng child's withdraw() có thể fail (return 0). Client expecting Account.withdraw() behavior sẽ confused với FixedDepositAccount. Contract đã thay đổi bất ngờ."
    },
    {
      question: "How to fix Square/Rectangle LSP violation?",
      options: {
        A: "Make Rectangle extend Square",
        B: "Make both extend a common Shape interface",
        C: "Remove inheritance completely",
        D: "Both B and C are valid approaches"
      },
      correctAnswer: "D",
      code: null,
      explanation: "Có thể fix bằng: (1) Remove inheritance, Square và Rectangle là independent classes, (2) Cả hai implement Shape interface với area() method. Điểm chính: inheritance nên model 'IS-A' relationship một cách BEHAVIORAL, không chỉ structural."
    },
    {
      question: "Which is a LSP-compliant design?",
      options: {
        A: "All exceptions in subclass that parent doesn't throw",
        B: "Subclass throws fewer or same exceptions as parent",
        C: "Subclass always throws exception",
        D: "Subclass catches all exceptions"
      },
      correctAnswer: "B",
      code: null,
      explanation: "LSP rule cho exceptions: subclass method CAN'T throw MORE checked exceptions than parent. Có thể throw FEWER hoặc SAME. Throwing unexpected exception = violating contract = client catch blocks won't handle. This is enforced by Java compiler."
    },
    {
      question: "What is the relationship between LSP and polymorphism?",
      options: {
        A: "They are unrelated",
        B: "LSP ensures polymorphism works correctly",
        C: "Polymorphism replaces LSP",
        D: "LSP prevents polymorphism"
      },
      correctAnswer: "B",
      code: null,
      explanation: "LSP ENSURES polymorphism works correctly! Polymorphism cho phép use subclass via parent reference. LSP guarantees subclass sẽ behave appropriately - no surprises. Without LSP, polymorphism becomes dangerous vì subclass có thể break expectations."
    },
    {
      question: "Is this valid LSP usage?",
      options: {
        A: "Yes, using parent type for parameter",
        B: "No, should use concrete type",
        C: "Yes, but risky",
        D: "Cannot determine"
      },
      correctAnswer: "A",
      code: `public void processPayment(Payment payment) {
      payment.validate();
      payment.execute();
  }
  
  // Can be called with any Payment subtype
  processPayment(new CreditCardPayment());
  processPayment(new PayPalPayment());
  processPayment(new BankTransferPayment());`,
      explanation: "ĐÚNG LSP! Method nhận Payment (parent type), có thể pass bất kỳ subtype nào. LSP guarantees tất cả subtypes sẽ work correctly với validate() và execute(). Đây là polymorphism at its best, enabled by LSP."
    },
    {
      question: "What does 'contract' mean in LSP context?",
      options: {
        A: "Legal agreement",
        B: "Method signatures only",
        C: "Expected behavior including pre/post conditions",
        D: "Documentation"
      },
      correctAnswer: "C",
      code: null,
      explanation: "Contract = expected behavior bao gồm: (1) Preconditions - what must be true before calling, (2) Postconditions - what will be true after calling, (3) Invariants - what always stays true. Subclass MUST honor this contract. Design by Contract (DbC) formalizes this."
    },
    {
      question: "Find the LSP violation in this hierarchy:",
      options: {
        A: "Duck class",
        B: "ElectricDuck violates swim() contract",
        C: "No violation",
        D: "Interface is wrong"
      },
      correctAnswer: "B",
      code: `interface Duck {
      void quack();
      void swim();
  }
  
  class RealDuck implements Duck {
      public void quack() { System.out.println("Quack!"); }
      public void swim() { System.out.println("Swimming..."); }
  }
  
  class ElectricDuck implements Duck {
      public void quack() { System.out.println("Electronic quack"); }
      public void swim() {
          if (!isBatteryOn()) throw new RuntimeException("Battery off!");
          System.out.println("Swimming...");
      }
  }`,
      explanation: "ElectricDuck vi phạm LSP! swim() có thể throw exception unexpected. RealDuck.swim() always works, ElectricDuck.swim() might fail. Client code không expect exception từ swim(). Precondition strengthened (need battery on)."
    },
    {
      question: "What is 'covariant return type' in LSP?",
      options: {
        A: "Return type can be more specific in subclass",
        B: "Return type must be exactly same",
        C: "Return type can be more general in subclass",
        D: "Return type is not related to LSP"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Covariant return type = subclass method có thể return MORE SPECIFIC type. Ví dụ: Parent.clone() returns Object, Child.clone() returns Child. Đây LSP compliant vì Child IS-A Object - client expecting Object vẫn OK với Child."
    },
    {
      question: "Which violates LSP?",
      options: {
        A: "Overriding method to do nothing",
        B: "Overriding method with more efficient implementation",
        C: "Overriding method to add logging",
        D: "B and C are fine"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Override method làm NOTHING vi phạm LSP! Client expects behavior, gets nothing. B (more efficient) OK vì same result, faster. C (add logging) OK vì same behavior plus extra (postcondition strengthened). A violates postcondition."
    },
    {
      question: "Is 'instanceof' check a sign of LSP violation?",
      options: {
        A: "No, always fine",
        B: "Yes, often indicates type-specific behavior",
        C: "Only in switch statements",
        D: "Only with interfaces"
      },
      correctAnswer: "B",
      code: null,
      explanation: "instanceof checks OFTEN signal LSP violation! Nếu phải check type để decide behavior, polymorphism không hoạt động đúng. Code should work với parent type regardless of actual subtype. Type checks = missing abstraction hoặc wrong inheritance."
    },
    {
      question: "What is contravariance in LSP?",
      options: {
        A: "Parameter types can be more general in subclass",
        B: "Parameter types must be more specific",
        C: "Return types can be more general",
        D: "No parameters allowed"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Contravariance = subclass method CAN accept MORE GENERAL parameter types. Ví dụ: Parent.process(Dog), Child.process(Animal). LSP compliant vì Dog IS-A Animal - anything passed to Parent works với Child. Java doesn't support this directly (overloading instead)."
    },
    {
      question: "Find the correct LSP statement:",
      options: {
        A: "Subclass can ignore parent's interface",
        B: "Subclass should extend parent's capabilities, not reduce them",
        C: "Subclass must have same implementation",
        D: "Subclass can change method purposes"
      },
      correctAnswer: "B",
      code: null,
      explanation: "LSP: Subclass should EXTEND capabilities, NOT REDUCE. Có thể làm MORE (stronger postconditions), accept MORE (weaker preconditions). KHÔNG được làm LESS hoặc accept LESS. Subclass adds value, doesn't remove."
    },
    {
      question: "How does LSP relate to unit testing?",
      options: {
        A: "LSP makes testing harder",
        B: "Tests for parent should pass for subclass",
        C: "Each subclass needs completely different tests",
        D: "LSP and testing are unrelated"
      },
      correctAnswer: "B",
      code: null,
      explanation: "LSP testing rule: Tests written cho parent class SHOULD PASS khi run với subclass! Nếu parent tests fail cho subclass, đó là LSP violation. Subclass có thể có thêm tests cho added functionality, nhưng inherited behavior phải preserved."
    },
    {
      question: "Which inheritance is LSP-compliant?",
      options: {
        A: "ImmutableList extends ArrayList (removes add())",
        B: "LinkedList extends AbstractList (same contract)",
        C: "EmptyList extends ArrayList (throws on all methods)",
        D: "None of the above"
      },
      correctAnswer: "B",
      code: null,
      explanation: "LinkedList extends AbstractList với SAME contract = LSP compliant. ImmutableList removing add() = violation (postcondition broken). EmptyList throwing everywhere = violation. Key: subclass must honor parent's contract completely."
    },
    {
      question: "What is the 'History Constraint' in LSP?",
      options: {
        A: "Objects must keep history",
        B: "Subclass can't have new methods",
        C: "Subclass shouldn't allow state changes parent didn't allow",
        D: "All methods must be inherited"
      },
      correctAnswer: "C",
      code: null,
      explanation: "History Constraint: subclass CANNOT allow state changes that parent didn't allow. Ví dụ: nếu parent is immutable, subclass must be immutable. Nếu subclass cho phép mutation, code relying on immutability sẽ break."
    },
    {
      question: "Is this proper LSP inheritance?",
      options: {
        A: "Yes, Cat is an Animal",
        B: "No, makeSound() behavior differs too much",
        C: "Yes, overriding is allowed",
        D: "No, void methods can't be overridden"
      },
      correctAnswer: "A",
      code: `class Animal {
      public void makeSound() {
          System.out.println("Some sound");
      }
  }
  
  class Cat extends Animal {
      @Override
      public void makeSound() {
          System.out.println("Meow");
      }
  }`,
      explanation: "THEO LSP! Contract của makeSound() là 'produce some sound' - Cat fulfill contract bằng 'Meow'. Subclass có thể có DIFFERENT implementation miễn là honor contract. Different behavior trong acceptable range = OK."
    },
    {
      question: "What does 'Design by Contract' have to do with LSP?",
      options: {
        A: "Nothing",
        B: "DbC formalizes the contracts that LSP requires",
        C: "They conflict with each other",
        D: "DbC replaces LSP"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Design by Contract (Bertrand Meyer) FORMALIZES contracts mà LSP requires. DbC explicitly specifies: preconditions, postconditions, invariants. LSP = subclass must obey parent's contract. DbC makes contracts explicit và verifiable."
    },
    {
      question: "Find the LSP issue:",
      options: {
        A: "Using negative numbers",
        B: "Subclass strengthens precondition",
        C: "Method is void",
        D: "No issue"
      },
      correctAnswer: "B",
      code: `class Calculator {
      public void divide(int a, int b) {
          System.out.println(a / b);
      }
  }
  
  class SafeCalculator extends Calculator {
      @Override
      public void divide(int a, int b) {
          if (b < 0) throw new IllegalArgumentException("b must be positive");
          super.divide(a, b);
      }
  }`,
      explanation: "LSP violation: Precondition STRENGTHENED! Parent accepts any b (except 0), subclass only accepts positive b. Client using Calculator với b = -5 works, với SafeCalculator fails. Subclass CANNOT be stricter about inputs."
    },
    {
      question: "What is Rectangle/Square example teaching us?",
      options: {
        A: "Never use inheritance",
        B: "IS-A relationship must be behavioral, not just structural",
        C: "Squares don't exist",
        D: "Rectangles are wrong"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Lesson: 'IS-A' trong OOP phải là BEHAVIORAL IS-A, không chỉ mathematical/structural. Mathematically Square IS-A Rectangle, nhưng BEHAVIORALLY Square CANNOT substitute Rectangle (independent width/height). Inheritance requires behavioral compatibility."
    },
    {
      question: "How to detect LSP violation?",
      options: {
        A: "Code doesn't compile",
        B: "Runtime exceptions when using subclass where parent expected",
        C: "Code runs too slow",
        D: "Cannot detect"
      },
      correctAnswer: "B",
      code: null,
      explanation: "LSP violations often manifest as: (1) Unexpected exceptions at runtime, (2) Wrong behavior/results, (3) instanceof checks in client code, (4) Parent tests failing for subclass. Compiler catches syntax, not behavioral violations. Code review và testing essential."
    },
    {
      question: "Is throwing UnsupportedOperationException LSP-compliant?",
      options: {
        A: "Yes, always allowed",
        B: "No, violates expected behavior",
        C: "Only in abstract classes",
        D: "Depends on parent's contract"
      },
      correctAnswer: "D",
      code: null,
      explanation: "DEPENDS on parent's contract! Nếu parent documents 'may throw UnsupportedOperationException' (như Collections.unmodifiableList), subclass throwing it is compliant. Nếu parent guarantees method works, throwing = violation. Contract matters!"
    },
    {
      question: "What's the correct way to handle incompatible subtypes?",
      options: {
        A: "Force inheritance anyway",
        B: "Use composition instead of inheritance",
        C: "Ignore LSP",
        D: "Add many if-else checks"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Nếu subtypes không compatible về behavior, DON'T USE INHERITANCE. Dùng composition thay thế. Ví dụ: thay vì Stack extends Vector (Java's mistake), Stack CONTAINS/HAS-A list internally. Composition = more flexible, no LSP issues."
    },
    {
      question: "Which is a sign that inheritance might violate LSP?",
      options: {
        A: "Subclass overrides many methods to throw exceptions",
        B: "Subclass adds new methods",
        C: "Subclass has fewer fields",
        D: "Subclass is in different package"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Red flag: Subclass OVERRIDES methods to THROW EXCEPTIONS hoặc DO NOTHING. Đây là signs của 'refused bequest' - subclass không thực sự IS-A parent. Nếu phải 'deactivate' inherited methods, inheritance relationship is wrong."
    },
    {
      question: "What does LSP say about method semantics?",
      options: {
        A: "Semantics can completely change",
        B: "Semantics must be preserved or strengthened",
        C: "Semantics don't matter",
        D: "Only syntax matters"
      },
      correctAnswer: "B",
      code: null,
      explanation: "LSP yêu cầu method semantics (meaning, purpose) phải được PRESERVED hoặc STRENGTHENED. Subclass có thể làm MORE (stronger postcondition), nhưng không thay đổi fundamental meaning. Ví dụ: sort() method phải sort, không thể override để shuffle."
    },
    {
      question: "How does LSP affect API design?",
      options: {
        A: "No effect on API design",
        B: "Forces careful consideration of inheritance hierarchies",
        C: "Makes APIs simpler",
        D: "Eliminates need for documentation"
      },
      correctAnswer: "B",
      code: null,
      explanation: "LSP forces careful API design! Phải ensure subclasses CAN actually substitute parents. Design inheritance relationships dựa trên BEHAVIOR, không chỉ code reuse. Consider: có thể mọi client dùng parent OK với subclass không? If no, redesign hierarchy."
    },
    {
      question: "What's the ultimate goal of LSP?",
      options: {
        A: "More inheritance",
        B: "Enable safe use of polymorphism",
        C: "Reduce code size",
        D: "Faster execution"
      },
      correctAnswer: "B",
      code: null,
      explanation: "LSP goal: Enable SAFE use of polymorphism! Client code có thể work với abstractions (interfaces, base classes) mà KHÔNG CẦN biết concrete types. Trust rằng bất kỳ implementation nào cũng behave correctly. Đây là foundation của extensible, maintainable OOP systems."
    },

    // ===== INTERFACE SEGREGATION PRINCIPLE (ISP) - Questions 121-160 =====
    {
      question: "What does Interface Segregation Principle state?",
      options: {
        A: "Interfaces should have many methods",
        B: "Clients shouldn't depend on methods they don't use",
        C: "One interface for everything",
        D: "No interfaces should be used"
      },
      correctAnswer: "B",
      code: null,
      explanation: "ISP: Clients KHÔNG NÊN bị force implement methods they don't use. Thay vì fat interface với nhiều methods, tạo nhiều small, focused interfaces. Client chỉ depend on methods actually needed. Prevents unnecessary coupling và recompilation."
    },
    {
      question: "Which violates ISP?",
      options: {
        A: "Interface with 2 related methods",
        B: "Fat interface forcing implementation of unused methods",
        C: "Multiple small interfaces",
        D: "Role-based interfaces"
      },
      correctAnswer: "B",
      code: `interface Worker {
    void work();
    void eat();
    void sleep();
    void getPaid();
    void attendMeeting();
}

class Robot implements Worker {
    public void work() { /* OK */ }
    public void eat() { throw new UnsupportedOperationException(); }
    public void sleep() { throw new UnsupportedOperationException(); }
    public void getPaid() { throw new UnsupportedOperationException(); }
    public void attendMeeting() { /* OK */ }
}`,
      explanation: "ISP violation! Robot bị force implement eat(), sleep(), getPaid() dù không cần. Fat interface Worker có too many responsibilities. Nên tách: Workable, Eatable, Sleepable, Payable, MeetingAttendee interfaces. Robot chỉ implement Workable và MeetingAttendee."
    },
    {
      question: "How should this be refactored following ISP?",
      options: {
        A: "Keep one large interface",
        B: "Split into smaller role-based interfaces",
        C: "Remove all methods",
        D: "Make all methods optional"
      },
      correctAnswer: "B",
      code: `interface Machine {
    void print();
    void scan();
    void fax();
    void staple();
}

// Simple printer must implement all!
class SimplePrinter implements Machine {
    public void print() { /* OK */ }
    public void scan() { throw new UnsupportedOperationException(); }
    public void fax() { throw new UnsupportedOperationException(); }
    public void staple() { throw new UnsupportedOperationException(); }
}`,
      explanation: "Tách thành: Printable, Scannable, Faxable, Stapleable interfaces. SimplePrinter chỉ implement Printable. MultiFunctionPrinter implement tất cả. Client code depend on interface cần (Printable), không phải fat Machine interface. Flexibility tăng, coupling giảm."
    },
    {
      question: "What is a 'fat interface'?",
      options: {
        A: "Interface with detailed documentation",
        B: "Interface with too many methods serving different clients",
        C: "Interface with generic types",
        D: "Interface with default methods"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Fat interface = interface có QU११ NHIỀU methods phục vụ DIFFERENT clients/purposes. Clients bị force depend on methods không cần. Ví dụ: một interface có cả CRUD + reporting + notifications. ISP solution: split into smaller, client-specific interfaces."
    },
    {
      question: "What benefit does ISP provide?",
      options: {
        A: "Faster code",
        B: "Reduced coupling and easier maintenance",
        C: "Fewer files",
        D: "Simpler inheritance"
      },
      correctAnswer: "B",
      code: null,
      explanation: "ISP benefits: (1) Reduced coupling - clients chỉ depend on what cần, (2) Easier maintenance - thay đổi interface chỉ affect relevant clients, (3) Better flexibility - implement only needed behaviors, (4) Clearer contracts. Many small interfaces > one fat interface."
    },
    {
      question: "Which design follows ISP?",
      options: {
        A: "God interface with all possible methods",
        B: "Role interfaces based on client needs",
        C: "One interface per class",
        D: "No interfaces at all"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Role interfaces (role-based interfaces) FOLLOW ISP! Mỗi interface represent một role/capability. Ví dụ: Readable, Writable, Closeable thay vì FileOperation với all methods. Client depend on roles needed. Class có thể implement multiple role interfaces."
    },
    {
      question: "Find the ISP compliance:",
      options: {
        A: "Too many interfaces",
        B: "Perfect ISP - separate concerns",
        C: "Should be one interface",
        D: "Missing methods"
      },
      correctAnswer: "B",
      code: `interface Readable {
    String read();
}

interface Writable {
    void write(String data);
}

interface Closeable {
    void close();
}

class File implements Readable, Writable, Closeable {
    // Implement all three
}

class ReadOnlyFile implements Readable, Closeable {
    // Only implement what's needed
}`,
      explanation: "HOÀN HẢO theo ISP! Interfaces nhỏ và focused. File implement cả 3, ReadOnlyFile chỉ 2. Client cần read chỉ depend on Readable. Segregated interfaces cho maximum flexibility. Đây là ISP ideal implementation."
    },
    {
      question: "What is 'interface pollution'?",
      options: {
        A: "Too many interfaces",
        B: "Forcing clients to implement unused methods",
        C: "Interfaces with bad names",
        D: "Missing interfaces"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Interface pollution = khi clients bị FORCED implement methods they don't need/use. Dẫn đến: (1) Empty implementations, (2) UnsupportedOperationException, (3) Tight coupling với unused code. ISP prevents pollution bằng cách tách interfaces."
    },
    {
      question: "How does ISP relate to SRP?",
      options: {
        A: "They are opposite",
        B: "ISP is SRP applied to interfaces",
        C: "They are unrelated",
        D: "ISP replaces SRP"
      },
      correctAnswer: "B",
      code: null,
      explanation: "ISP là SRP applied to INTERFACES! Như SRP nói class should have one reason to change, ISP nói interface should serve one client type/role. Both về cohesion và focused responsibility. SRP = class level, ISP = interface level."
    },
    {
      question: "Which is a valid ISP refactoring?",
      options: {
        A: "Combine all interfaces into one",
        B: "Split large interface into smaller, focused ones",
        C: "Remove all interfaces",
        D: "Make interface methods optional"
      },
      correctAnswer: "B",
      code: null,
      explanation: "ISP refactoring: SPLIT large interface thành smaller, focused interfaces. Ví dụ: UserService → UserReader, UserWriter, UserDeleter. Client cần read chỉ depend UserReader. Extract Interface refactoring tool support this."
    },
    {
      question: "What problem does this code have?",
      options: {
        A: "Bird interface is too fat",
        B: "Penguin can't fly",
        C: "Both A and B - ISP and LSP violation",
        D: "No problem"
      },
      correctAnswer: "C",
      code: `interface Bird {
    void fly();
    void eat();
    void swim();
}

class Penguin implements Bird {
    public void fly() { throw new UnsupportedOperationException(); }
    public void eat() { /* OK */ }
    public void swim() { /* OK */ }
}`,
      explanation: "Cả ISP VÀ LSP violation! ISP: Penguin forced implement fly() unused. LSP: throwing exception breaks substitutability. Solution: tách Bird → Eatable, Swimmable, Flyable. Penguin implement Eatable + Swimmable, không Flyable."
    },
    {
      question: "Which statement about ISP is TRUE?",
      options: {
        A: "More interfaces is always better",
        B: "Interfaces should be client-specific",
        C: "All classes should implement all interfaces",
        D: "ISP only applies to abstract classes"
      },
      correctAnswer: "B",
      code: null,
      explanation: "ISP: Interfaces nên CLIENT-SPECIFIC! Design interfaces dựa trên CLIENT NEEDS, không phải provider capabilities. Không phải more is always better (có thể over-engineer), mà về matching interface với actual usage. ISP apply cho interfaces và abstract classes."
    },
    {
      question: "How does ISP improve testability?",
      options: {
        A: "Smaller interfaces easier to mock",
        B: "ISP makes testing unnecessary",
        C: "ISP slows down tests",
        D: "No impact on testing"
      },
      correctAnswer: "A",
      code: null,
      explanation: "ISP improves testability! Smaller, focused interfaces DỄ mock hơn. Test chỉ cần mock methods actually used. Với fat interface, phải mock many unused methods. Mock setup simpler, tests clearer. ISP = better test isolation."
    },
    {
      question: "What is the 'Interface Segregation' in ISP?",
      options: {
        A: "Interfaces in separate files",
        B: "Separating interface into smaller, cohesive ones",
        C: "Private interfaces",
        D: "Interface inheritance"
      },
      correctAnswer: "B",
      code: null,
      explanation: "'Segregation' = TÁCH interface lớn thành smaller, cohesive interfaces. Mỗi segregated interface serve một specific client/role. Không phải về file organization, mà về logical separation of concerns. Cohesive methods grouped together."
    },
    {
      question: "Find the ISP issue:",
      options: {
        A: "Repository has too many methods for different concerns",
        B: "Methods are well organized",
        C: "Should be one method only",
        D: "No issue"
      },
      correctAnswer: "A",
      code: `interface Repository {
    // CRUD
    User save(User user);
    User findById(Long id);
    void delete(Long id);
    
    // Analytics
    long countUsers();
    List<User> getUsersByAge(int age);
    
    // Reporting
    Report generateUserReport();
    byte[] exportToExcel();
}`,
      explanation: "ISP violation! Repository mix 3 concerns: CRUD, Analytics, Reporting. Client chỉ cần CRUD phải depend on analytics/reporting methods. Tách: UserRepository (CRUD), UserAnalytics, UserReporting. Each client depend on what it needs."
    },
    {
      question: "Which is an example of ISP in Java standard library?",
      options: {
        A: "java.io.Closeable",
        B: "java.lang.Object",
        C: "Large monolithic interface",
        D: "None"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Closeable là perfect ISP example! Chỉ một method: close(). Bất kỳ resource nào cần closing implement it. Không force thêm methods không liên quan. Java IO package có nhiều small interfaces: Readable, Writable, Flushable - all follow ISP."
    },
    {
      question: "What does 'client' mean in ISP context?",
      options: {
        A: "End user of application",
        B: "Code that uses/depends on the interface",
        C: "Customer of the company",
        D: "Front-end application"
      },
      correctAnswer: "B",
      code: null,
      explanation: "'Client' trong ISP = code that USES/DEPENDS ON interface. Có thể là class, module, component. ISP design interfaces dựa trên client needs: what methods does this client actually call? Don't force clients depend on methods they don't use."
    },
    {
      question: "How to identify ISP violation?",
      options: {
        A: "Interface has more than 10 methods",
        B: "Implementations throw UnsupportedOperationException",
        C: "Interface uses generics",
        D: "Interface has default methods"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Red flags: (1) Implementations throw UnsupportedOperationException, (2) Empty method implementations, (3) Comments like 'Not applicable', (4) Client code depends on interface but uses few methods. Đây là signs interface too fat, cần segregate."
    },
    {
      question: "Which design pattern supports ISP?",
      options: {
        A: "Adapter",
        B: "Singleton",
        C: "Prototype",
        D: "Memento"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Adapter pattern supports ISP! Adapter có thể adapt fat interface thành smaller, client-specific interface. Client depend on small interface, adapter translates to fat interface. Tuy nhiên, better solution là redesign fat interface theo ISP từ đầu."
    },
    {
      question: "Is this ISP compliant?",
      options: {
        A: "Yes, single method interface",
        B: "No, too simple",
        C: "Yes, focused and cohesive",
        D: "Cannot determine"
      },
      correctAnswer: "C",
      code: `interface PaymentProcessor {
    PaymentResult process(Payment payment);
}

interface PaymentValidator {
    ValidationResult validate(Payment payment);
}

interface PaymentLogger {
    void log(PaymentEvent event);
}`,
      explanation: "HOÀN HẢO theo ISP! Ba interfaces nhỏ, mỗi cái một responsibility. Client processing payments depend on PaymentProcessor only. Validator và Logger separated. Easy to implement, test, và maintain. Đây là ISP best practice."
    },
    {
      question: "What is wrong with marker interfaces from ISP perspective?",
      options: {
        A: "They violate ISP",
        B: "They are fine for ISP",
        C: "They have too many methods",
        D: "They should have implementations"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Marker interfaces (empty interfaces như Serializable) FINE với ISP! Không force implement methods vì không có methods. Chúng mark capability/characteristic. Tuy nhiên, modern practice prefer annotations (like @Serializable) over marker interfaces."
    },
    {
      question: "How does ISP affect recompilation?",
      options: {
        A: "No effect",
        B: "Changes to unused methods don't require client recompilation",
        C: "Always requires full recompilation",
        D: "ISP slows compilation"
      },
      correctAnswer: "B",
      code: null,
      explanation: "ISP benefit: Khi change interface method mà client KHÔNG dùng, client code KHÔNG CẦN recompile (với proper dependency management). Fat interface: mọi change force recompile all clients. Small interfaces = isolated changes."
    },
    {
      question: "Which violates ISP?",
      options: {
        A: "Authentication interface with login, logout",
        B: "CRUD interface with create, read, update, delete, generateReport, sendEmail, calculateTax",
        C: "Comparable with one compareTo method",
        D: "Runnable with one run method"
      },
      correctAnswer: "B",
      code: null,
      explanation: "CRUD interface vi phạm ISP! Mix persistence (CRUD) với reporting, notification, calculation - unrelated concerns. Client chỉ cần CRUD phải depend on 7 methods. Tách thành: CrudOperations, ReportGenerator, EmailSender, TaxCalculator."
    },
    {
      question: "What is 'role interface' pattern?",
      options: {
        A: "Interface for user roles",
        B: "Interface representing a specific role/capability",
        C: "Interface with role field",
        D: "Interface inheritance"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Role Interface = interface representing specific ROLE/CAPABILITY. Ví dụ: Comparable (can compare), Iterable (can iterate), Closeable (can close). Object có thể play multiple roles = implement multiple interfaces. ISP encourages role interfaces."
    },
    {
      question: "How many methods should an interface have ideally?",
      options: {
        A: "Exactly one",
        B: "As many as needed for single purpose",
        C: "Minimum 10",
        D: "Maximum 100"
      },
      correctAnswer: "B",
      code: null,
      explanation: "ISP KHÔNG nói 'one method per interface'! Nói: methods nên COHESIVE và serve SINGLE PURPOSE. List interface có add, remove, get, size - OK vì all về list operations. Key: don't mix unrelated concerns. Quality over quantity."
    },
    {
      question: "What's the relationship between ISP and dependency management?",
      options: {
        A: "No relationship",
        B: "ISP reduces unnecessary dependencies",
        C: "ISP increases dependencies",
        D: "ISP only about inheritance"
      },
      correctAnswer: "B",
      code: null,
      explanation: "ISP REDUCES unnecessary dependencies! Client chỉ depend on small interface needed, không phải fat interface với unused methods. Fewer dependencies = less coupling, easier changes, better modularity. Dependency graph cleaner với ISP."
    },
    {
      question: "Find the ISP-compliant design:",
      options: {
        A: "One interface with all animal behaviors",
        B: "Separate interfaces for each capability",
        C: "No interfaces",
        D: "Abstract class with all methods"
      },
      correctAnswer: "B",
      code: `interface Swimmable {
    void swim();
}

interface Flyable {
    void fly();
}

interface Walkable {
    void walk();
}

class Duck implements Swimmable, Flyable, Walkable { }
class Fish implements Swimmable { }
class Bird implements Flyable, Walkable { }`,
      explanation: "PERFECT ISP! Capabilities separated into cohesive interfaces. Animals implement chỉ capabilities they have. Fish không forced implement fly/walk. Duck có thể implement all three. Flexible và extensible design."
    },
    {
      question: "What is the danger of not following ISP?",
      options: {
        A: "Code runs slower",
        B: "Clients forced to depend on unused functionality",
        C: "More memory usage",
        D: "Compilation errors"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Danger: Clients FORCED depend on unused functionality → (1) Unnecessary coupling, (2) Changes in unused methods affect client, (3) Must implement/mock unused methods, (4) Harder testing, (5) Reduced flexibility. Technical debt accumulates."
    },
    {
      question: "Which refactoring helps achieve ISP?",
      options: {
        A: "Extract Interface",
        B: "Inline Method",
        C: "Pull Up Method",
        D: "Add Parameter"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Extract Interface refactoring helps ISP! Extract smaller interface từ fat interface hoặc class. Client depend on extracted interface với only methods needed. Ví dụ: extract Readable từ FileOperations. IDE tools support this refactoring."
    },
    {
      question: "How does ISP apply to microservices?",
      options: {
        A: "Doesn't apply to microservices",
        B: "Service APIs should be focused on specific clients",
        C: "All services need same API",
        D: "ISP only for monoliths"
      },
      correctAnswer: "B",
      code: null,
      explanation: "ISP applies to microservices! Service APIs nên FOCUSED on specific client needs. Đừng create 'god service' với mọi functionality. Better: nhiều small, focused services. Each service = role interface at system level. API Gateway có thể aggregate nếu cần."
    },
    {
      question: "What's the relationship between ISP and cohesion?",
      options: {
        A: "ISP reduces cohesion",
        B: "ISP promotes high cohesion in interfaces",
        C: "They are opposite",
        D: "No relationship"
      },
      correctAnswer: "B",
      code: null,
      explanation: "ISP promotes HIGH COHESION! Methods trong interface nên highly related và serve cùng purpose. Low cohesion interface = mix unrelated methods = ISP violation. High cohesion interface = focused, single responsibility = ISP compliant."
    },
    {
      question: "Is default method in Java 8+ interfaces related to ISP?",
      options: {
        A: "Default methods violate ISP",
        B: "Default methods can help ISP by providing optional behavior",
        C: "No relation",
        D: "Default methods replace ISP"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Default methods CAN HELP ISP! Có thể add convenience methods without forcing all implementations override. Nhưng CAUTION: don't abuse để create fat interface. Default methods nên cho truly optional/convenience functionality, không phải core contract."
    },
    {
      question: "Which is better aligned with ISP?",
      options: {
        A: "java.util.Collection (many methods)",
        B: "java.lang.Runnable (one method)",
        C: "Both can be ISP-compliant depending on cohesion",
        D: "Neither follows ISP"
      },
      correctAnswer: "C",
      code: null,
      explanation: "BOTH có thể ISP-compliant! Runnable có 1 method cho single purpose - good. Collection có many methods nhưng ALL về collection operations - cohesive - also good. ISP không về số lượng, mà về COHESION và not forcing unused methods."
    },
    {
      question: "How to apply ISP to existing fat interface?",
      options: {
        A: "Delete the interface",
        B: "Extract smaller interfaces, keep fat one for backward compatibility",
        C: "Force all clients to change immediately",
        D: "Ignore ISP"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Migration strategy: (1) Extract smaller, focused interfaces, (2) Keep fat interface implementing all small ones for backward compatibility, (3) Deprecate fat interface, (4) Gradually migrate clients to small interfaces, (5) Eventually remove fat interface. Avoid breaking changes."
    },
    {
      question: "What does ISP say about optional methods?",
      options: {
        A: "Optional methods are fine",
        B: "Optional methods violate ISP",
        C: "All methods must be optional",
        D: "ISP doesn't address this"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Optional methods (có thể skip implement) VIOLATE ISP spirit! Nếu method optional, maybe it shouldn't be in interface. Tách vào separate interface. Exception: Java 8+ default methods với reasonable default behavior khác với 'optional' (can skip)."
    },
    {
      question: "What's the final goal of ISP?",
      options: {
        A: "Maximum number of interfaces",
        B: "Minimum coupling between clients and interfaces",
        C: "No interfaces at all",
        D: "Complex inheritance hierarchies"
      },
      correctAnswer: "B",
      code: null,
      explanation: "ISP goal: MINIMUM COUPLING between clients and interfaces! Client chỉ couple với exactly what it needs. Changes in unused parts don't affect client. System more modular, flexible, maintainable. Balance: enough segregation to reduce coupling, không quá nhiều interfaces gây complexity."
    },

    // ===== DEPENDENCY INVERSION PRINCIPLE (DIP) - Questions 161-200 =====
    {
      question: "What does Dependency Inversion Principle state?",
      options: {
        A: "High-level modules should depend on low-level modules",
        B: "Both should depend on abstractions",
        C: "Dependencies should be circular",
        D: "No dependencies allowed"
      },
      correctAnswer: "B",
      code: null,
      explanation: "DIP: (1) High-level modules KHÔNG NÊN depend on low-level modules. Both should depend on ABSTRACTIONS, (2) Abstractions không nên depend on details. Details should depend on abstractions. Đảo ngược traditional dependency flow: instead of high→low, both→abstraction."
    },
    {
      question: "Which violates DIP?",
      options: {
        A: "Depending on interface",
        B: "Depending on concrete class directly",
        C: "Using dependency injection",
        D: "Abstract dependencies"
      },
      correctAnswer: "B",
      code: `public class OrderService {
    private MySQLDatabase database = new MySQLDatabase();
    
    public void saveOrder(Order order) {
        database.save(order);
    }
}`,
      explanation: "DIP violation! OrderService (high-level business logic) depend TRỰC TIẾP on MySQLDatabase (low-level detail). Không thể swap database. DIP solution: depend on Database interface, inject implementation. OrderService không biết MySQL hay PostgreSQL."
    },
    {
      question: "What is 'abstraction' in DIP context?",
      options: {
        A: "Abstract art",
        B: "Interface or abstract class defining contract",
        C: "Concrete implementation",
        D: "Private methods"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Abstraction trong DIP = INTERFACE hoặc ABSTRACT CLASS defining CONTRACT. Không phải concrete implementation. Abstraction stable hơn implementation. High-level depend on abstraction = flexible, testable. Implementation details hidden behind abstraction."
    },
    {
      question: "How does this follow DIP?",
      options: {
        A: "It doesn't",
        B: "Depends on interface, implementation injected",
        C: "Uses concrete class",
        D: "No dependencies"
      },
      correctAnswer: "B",
      code: `interface PaymentGateway {
    void charge(double amount);
}

public class OrderService {
    private final PaymentGateway gateway;
    
    public OrderService(PaymentGateway gateway) {
        this.gateway = gateway; // Injected!
    }
    
    public void checkout(Order order) {
        gateway.charge(order.getTotal());
    }
}

// Inject concrete implementation
OrderService service = new OrderService(new StripeGateway());`,
      explanation: "PERFECT DIP! OrderService depend on PaymentGateway ABSTRACTION, không phải concrete Stripe/PayPal. Implementation INJECTED via constructor. Có thể swap gateway without touching OrderService. Abstraction stable, details pluggable."
    },
    {
      question: "What is Dependency Injection?",
      options: {
        A: "Creating objects with new",
        B: "Providing dependencies from outside",
        C: "Circular dependencies",
        D: "Removing all dependencies"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Dependency Injection = technique to achieve DIP! Dependencies được PROVIDED FROM OUTSIDE (injected) thay vì class tự create. 3 types: Constructor Injection, Setter Injection, Interface Injection. DI frameworks (Spring, Guice) automate this. Separation of construction and use."
    },
    {
      question: "Which DI type is generally preferred?",
      options: {
        A: "Field injection",
        B: "Constructor injection",
        C: "Setter injection",
        D: "Method injection"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Constructor Injection PREFERRED vì: (1) Dependencies immutable (final), (2) Cannot create object without deps = always valid state, (3) Easy testing (just pass mocks), (4) Clear dependencies. Setter injection cho optional deps. Field injection (avoid) = hard to test."
    },
    {
      question: "What's the relationship between DIP and OCP?",
      options: {
        A: "They conflict",
        B: "DIP enables OCP",
        C: "They are same",
        D: "No relationship"
      },
      correctAnswer: "B",
      code: null,
      explanation: "DIP ENABLES OCP! Khi depend on abstractions (DIP), có thể add new implementations without modifying existing code (OCP). Ví dụ: code depends on PaymentGateway interface, add AmazonPayGateway = new class, no modification. DIP = foundation cho OCP."
    },
    {
      question: "Find the DIP violation:",
      options: {
        A: "Using 'new' keyword",
        B: "Direct instantiation of concrete class",
        C: "Not using interface",
        D: "All of the above indicate possible violation"
      },
      correctAnswer: "D",
      code: `public class ReportGenerator {
    public void generate() {
        PDFExporter exporter = new PDFExporter(); // Tight coupling!
        exporter.export(data);
    }
}`,
      explanation: "Multiple DIP violations: (1) 'new PDFExporter()' = tạo concrete dependency, (2) Depend on PDFExporter directly, không qua abstraction. Cannot inject ExcelExporter. Fix: depend on Exporter interface, inject implementation."
    },
    {
      question: "What is an IoC container?",
      options: {
        A: "Storage container",
        B: "Framework managing object creation and dependencies",
        C: "Database",
        D: "Web server"
      },
      correctAnswer: "B",
      code: null,
      explanation: "IoC (Inversion of Control) Container = framework MANAGING object lifecycle và dependencies. Container creates objects, injects dependencies, manages scope. Ví dụ: Spring Container, Google Guice. Application code declares dependencies, container wires them up. Automates DIP."
    },
    {
      question: "Which statement about DIP is TRUE?",
      options: {
        A: "Low-level modules should define interfaces",
        B: "High-level modules should define abstractions",
        C: "No abstractions needed",
        D: "All classes must be abstract"
      },
      correctAnswer: "B",
      code: null,
      explanation: "HIGH-LEVEL modules DEFINE abstractions (interfaces) theo THEIR needs. Low-level modules IMPLEMENT abstractions. Đây là 'inversion': traditional flow low-level defines interface, high-level uses. DIP: high-level OWNS abstraction, low-level conforms."
    },
    {
      question: "What does 'depend on abstractions' mean?",
      options: {
        A: "Use abstract keyword",
        B: "Reference interfaces/abstract classes, not concrete classes",
        C: "No concrete classes allowed",
        D: "Everything must be interface"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Depend on abstractions = declare dependencies using INTERFACE/ABSTRACT CLASS types, not concrete. Ví dụ: 'List<String> list' not 'ArrayList<String>'. Code works với abstraction, runtime provides concrete. Enables flexibility, testability, extensibility."
    },
    {
      question: "How does DIP improve testability?",
      options: {
        A: "Makes testing unnecessary",
        B: "Easy to inject mock/stub implementations",
        C: "Tests run faster",
        D: "No impact"
      },
      correctAnswer: "B",
      code: null,
      explanation: "DIP dramatically improves testability! Dependencies là abstractions → easy inject MOCKS/STUBS for testing. Don't need real database/API. Unit tests isolated và fast. Without DIP (concrete dependencies), testing requires real implementations hoặc complex setup."
    },
    {
      question: "What is the 'Hollywood Principle'?",
      options: {
        A: "Code for movies",
        B: "Don't call us, we'll call you - related to IoC",
        C: "Always use factories",
        D: "No principle by this name"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Hollywood Principle: 'Don't call us, we'll call you' = Inversion of Control! Application code KHÔNG call framework/container để get dependencies. Container CALLS application code và INJECTS dependencies. Control inverted: container in charge, not application."
    },
    {
      question: "Which pattern helps implement DIP?",
      options: {
        A: "Factory Pattern",
        B: "Singleton",
        C: "Prototype",
        D: "Flyweight"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Factory Pattern helps DIP! Factory creates objects, client depends on Factory interface. Concrete factories create concrete objects. Client code không directly instantiate concrete classes. Abstract Factory especially good for DIP - returns abstractions."
    },
    {
      question: "Find the DIP-compliant code:",
      options: {
        A: "Creating objects with new",
        B: "Dependency injected via constructor",
        C: "Using static methods",
        D: "Global variables"
      },
      correctAnswer: "B",
      code: `interface Logger {
    void log(String message);
}

public class UserService {
    private final Logger logger;
    
    public UserService(Logger logger) {
        this.logger = logger; // DIP compliant!
    }
    
    public void createUser(User user) {
        logger.log("Creating user: " + user);
    }
}`,
      explanation: "ĐÚNG DIP! UserService depend on Logger INTERFACE. Implementation injected qua constructor. Có thể inject ConsoleLogger, FileLogger, RemoteLogger without changing UserService. Testable: inject MockLogger. Abstraction stable, details variable."
    },
    {
      question: "What is 'Stable Abstractions Principle'?",
      options: {
        A: "Abstractions should rarely change",
        B: "Abstractions always change",
        C: "No abstractions",
        D: "Concrete classes are stable"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Stable Abstractions Principle: Abstractions (interfaces) should be STABLE - rarely change. Details (implementations) can change frequently. Depend on stable abstractions = less ripple effects. Related to DIP: depend on stable things (abstractions) not volatile things (concrete classes)."
    },
    {
      question: "Which violates DIP?",
      options: {
        A: "High-level module depends on low-level module directly",
        B: "Both depend on abstraction",
        C: "Using dependency injection",
        D: "Interface-based design"
      },
      correctAnswer: "A",
      code: `// HIGH-LEVEL
public class OrderProcessor {
    public void process(Order order) {
        // DEPENDS ON LOW-LEVEL DIRECTLY
        FileLogger logger = new FileLogger();
        MySQLRepository repo = new MySQLRepository();
        
        logger.log("Processing order");
        repo.save(order);
    }
}`,
      explanation: "Classic DIP violation! High-level OrderProcessor depend trực tiếp on low-level FileLogger và MySQLRepository. Fix: tạo Logger và Repository interfaces, OrderProcessor depend on abstractions, inject implementations. Separate layers không directly coupled."
    },
    {
      question: "What does 'inversion' in DIP refer to?",
      options: {
        A: "Reversing method order",
        B: "Inverting traditional dependency flow direction",
        C: "Upside-down code",
        D: "Opposite logic"
      },
      correctAnswer: "B",
      code: null,
      explanation: "'Inversion' = đảo ngược dependency direction! Traditional: High-level → Low-level. DIP: High-level → Abstraction ← Low-level. High-level OWNS abstraction, low-level IMPLEMENTS. Dependency flow inverted. Cũng là Inversion of Control - control of dependencies inverted to container."
    },
    {
      question: "How many layers of abstraction are ideal?",
      options: {
        A: "Always maximum",
        B: "As many as needed for flexibility vs simplicity",
        C: "Zero abstractions",
        D: "Exactly three"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Balance needed! Too many abstractions = over-engineering, complexity. Too few = tight coupling. Add abstraction khi: (1) Multiple implementations exist/expected, (2) Need testability, (3) Want flexibility. YAGNI: don't create abstraction speculatively. Pragmatic DIP."
    },
    {
      question: "What is Service Locator pattern's relationship to DIP?",
      options: {
        A: "Alternative to DI for achieving DIP",
        B: "Same as DI",
        C: "Violates DIP",
        D: "Unrelated"
      },
      correctAnswer: "A",
      code: null,
      explanation: "Service Locator = ALTERNATIVE to DI for achieving DIP. Class asks locator for dependency instead of creating it. Still depend on abstraction. However, DI PREFERRED over Service Locator vì: (1) Dependencies explicit, (2) No hidden dependency on locator, (3) Better testability."
    },
    {
      question: "Find the DIP principle application:",
      options: {
        A: "Layers depend downward",
        B: "All layers depend on shared abstractions",
        C: "No layers",
        D: "Circular dependencies"
      },
      correctAnswer: "B",
      code: `// Shared abstraction layer
interface Repository { }
interface Service { }

// Business layer depends on abstractions
class OrderService implements Service {
    private Repository repo; // abstraction
}

// Infrastructure layer implements abstractions
class MySQLRepository implements Repository { }

// Dependency: Business → Abstractions ← Infrastructure`,
      explanation: "PERFECT DIP architecture! Business layer (high-level) depend on Abstraction layer. Infrastructure layer (low-level) implement abstractions. NO direct dependency business→infrastructure. Clean Architecture, Hexagonal Architecture follow this. Dependencies point inward toward abstractions."
    },
    {
      question: "What's wrong with static methods from DIP perspective?",
      options: {
        A: "Nothing wrong",
        B: "Hard to mock, creates tight coupling",
        C: "Too fast",
        D: "Use too much memory"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Static methods problematic cho DIP: (1) Cannot mock easily (no polymorphism), (2) Direct class coupling, (3) Cannot inject different implementation. Ví dụ: `FileUtils.writeFile()` = coupled to FileUtils. Better: inject FileWriter interface. Stateless utility methods OK, stateful statics = problem."
    },
    {
      question: "Which is a DIP benefit?",
      options: {
        A: "Faster execution",
        B: "Parallel development of modules",
        C: "Less code",
        D: "Simpler code"
      },
      correctAnswer: "B",
      code: null,
      explanation: "DIP enables PARALLEL development! Team A develop high-level modules với interfaces defined. Team B implement low-level modules satisfying interfaces. INDEPENDENT work possible. Also: easier testing (mock), more flexible (swap implementations), better maintainability."
    },
    {
      question: "What is 'Plugin Architecture'?",
      options: {
        A: "Electrical plugins",
        B: "Core defines interfaces, plugins implement them",
        C: "No architecture",
        D: "Monolithic design"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Plugin Architecture = perfect DIP example! CORE define plugin interfaces (abstractions). PLUGINS implement interfaces. Core doesn't know concrete plugins. Add new plugin = add implementation, no core modification. IDE plugins (IntelliJ, Eclipse), browser extensions follow this."
    },
    {
      question: "How does DIP relate to hexagonal architecture?",
      options: {
        A: "No relation",
        B: "Hexagonal architecture applies DIP at system level",
        C: "They conflict",
        D: "Same thing"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Hexagonal (Ports & Adapters) = DIP at ARCHITECTURE level! Business logic (core) defines PORTS (interfaces). Infrastructure provides ADAPTERS (implementations). Core depend on ports (abstractions), adapters depend on ports. Inversion: core owns abstractions, infrastructure conforms."
    },
    {
      question: "What is the role of interfaces in DIP?",
      options: {
        A: "Make code slower",
        B: "Provide abstraction layer for dependency inversion",
        C: "Optional decoration",
        D: "Increase complexity unnecessarily"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Interfaces are ESSENTIAL for DIP! They provide ABSTRACTION layer. High và low-level modules depend on interfaces. Interfaces shield high-level from low-level changes. Enable polymorphism, testability, flexibility. Without interfaces, no abstraction = no DIP."
    },
    {
      question: "Find the problem:",
      options: {
        A: "Singleton pattern",
        B: "Global state violates DIP",
        C: "Method is public",
        D: "No problem"
      },
      correctAnswer: "B",
      code: `public class DatabaseConnection {
    private static DatabaseConnection instance;
    
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }
}

// Clients call directly
DatabaseConnection.getInstance().query(...);`,
      explanation: "Singleton with static access violates DIP! Clients tightly coupled to DatabaseConnection class. Hard to mock, test, swap. Better: use DI framework manage singleton scope, inject via interface: 'DatabaseConnection conn' injected. Static access = global coupling."
    },
    {
      question: "What is constructor injection best practice?",
      options: {
        A: "Inject all dependencies via constructor",
        B: "No constructors",
        C: "Empty constructor",
        D: "Many constructors"
      },
      correctAnswer: "A",
      code: `public class OrderService {
    private final PaymentGateway paymentGateway;
    private final InventoryService inventoryService;
    private final EmailService emailService;
    
    public OrderService(PaymentGateway pg, 
                       InventoryService is,
                       EmailService es) {
        this.paymentGateway = pg;
        this.inventoryService = is;
        this.emailService = es;
    }
}`,
      explanation: "Constructor injection best practice! All dependencies injected, stored in FINAL fields. Object always in valid state. Cannot create without dependencies. Clear what's needed. Easy testing: new OrderService(mockPG, mockIS, mockES). Dependencies explicit và immutable."
    },
    {
      question: "What's the difference between DIP and DI?",
      options: {
        A: "They are same",
        B: "DIP is principle, DI is technique to achieve it",
        C: "DI is principle, DIP is technique",
        D: "They are opposite"
      },
      correctAnswer: "B",
      code: null,
      explanation: "DIP (Dependency Inversion Principle) = DESIGN PRINCIPLE about depending on abstractions. DI (Dependency Injection) = IMPLEMENTATION TECHNIQUE to achieve DIP. DIP = what/why, DI = how. Có thể achieve DIP without DI (factories), nhưng DI là easiest way."
    },
    {
      question: "Which indicates tight coupling?",
      options: {
        A: "Depending on interface",
        B: "'new ConcreteClass()' scattered everywhere",
        C: "Dependency injection",
        D: "Abstract classes"
      },
      correctAnswer: "B",
      code: null,
      explanation: "'new ConcreteClass()' scattered = TIGHT COUPLING red flag! Every instantiation point coupled to concrete class. Change class = hunt down all 'new'. DIP solution: centralize object creation (factories, DI container), depend on abstractions. 'new' OK for value objects, DTOs."
    },
    {
      question: "How does DIP affect package dependencies?",
      options: {
        A: "No effect",
        B: "Allows inverting package dependency direction",
        C: "Creates circular dependencies",
        D: "Eliminates all dependencies"
      },
      correctAnswer: "B",
      code: null,
      explanation: "DIP inverts PACKAGE dependencies! Thường business package depend on infrastructure. DIP: tạo abstraction trong business package, infrastructure depend on business abstractions. Dependency direction inverted. Clean Architecture: inner layers define interfaces, outer layers implement."
    },
    {
      question: "What is 'Dependency Injection Container'?",
      options: {
        A: "Physical container",
        B: "Framework managing DI automatically",
        C: "Database",
        D: "File system"
      },
      correctAnswer: "B",
      code: null,
      explanation: "DI Container (IoC Container) = framework AUTO-MANAGING dependencies! Configure dependencies (XML, annotations, code), container resolves và injects. Ví dụ: Spring ApplicationContext, Google Guice Injector. Handles object lifecycle, scopes, circular dependencies. Eliminates manual wiring."
    },
    {
      question: "Find the DIP violation:",
      options: {
        A: "Using abstract class",
        B: "Client code knows concrete implementation class",
        C: "Using interface",
        D: "Dependency injection"
      },
      correctAnswer: "B",
      code: `public class ReportController {
    private EmailService emailService;
    
    public ReportController() {
        // KNOWS concrete implementation!
        this.emailService = new SmtpEmailService("smtp.gmail.com");
    }
}`,
      explanation: "DIP violation! Controller biết và tạo concrete SmtpEmailService. Coupled to implementation details (SMTP, Gmail). Fix: inject EmailService interface, configuration external. Controller KHÔNG NÊN know 'SmtpEmailService' class exists."
    },
    {
      question: "What is 'Poor Man's DI'?",
      options: {
        A: "No DI at all",
        B: "Manual DI without framework",
        C: "Broken DI",
        D: "Free DI tool"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Poor Man's DI = MANUAL dependency injection WITHOUT framework! Tự wire dependencies trong main() hoặc composition root. `OrderService service = new OrderService(new MySQLRepo(), new SmtpEmail());` Valid approach cho small apps. Frameworks (Spring) cho large apps."
    },
    {
      question: "Which design follows DIP?",
      options: {
        A: "Business logic imports infrastructure",
        B: "Infrastructure imports business abstractions",
        C: "Everything imports everything",
        D: "No imports"
      },
      correctAnswer: "B",
      code: `// Business layer (core)
package com.app.domain;
public interface UserRepository { }

// Infrastructure layer
package com.app.infrastructure;
import com.app.domain.UserRepository; // Infrastructure imports domain!

public class MySQLUserRepository implements UserRepository { }`,
      explanation: "ĐÚNG DIP! Infrastructure layer IMPORTS abstractions từ domain layer. Dependency arrow: Infrastructure → Domain. Traditional (wrong): Domain → Infrastructure. Inversion achieved: low-level infrastructure depend on high-level domain abstractions."
    },
    {
      question: "What is the 'Composition Root'?",
      options: {
        A: "Tree data structure",
        B: "Single location where object graph is constructed",
        C: "Mathematical term",
        D: "File system root"
      },
      correctAnswer: "B",
      code: null,
      explanation: "Composition Root = SINGLE LOCATION nơi construct toàn bộ object graph (wire dependencies). Thường là main() method hoặc DI container configuration. Application code KHÔNG tạo objects, chỉ declare dependencies. Centralized composition = easier management, clear entry point."
    },
    {
      question: "How does DIP enable testing?",
      options: {
        A: "Makes tests unnecessary",
        B: "Allows injecting test doubles (mocks, stubs)",
        C: "Tests run in parallel",
        D: "No relation to testing"
      },
      correctAnswer: "B",
      code: `// Production
OrderService service = new OrderService(new StripeGateway());

// Testing
PaymentGateway mockGateway = mock(PaymentGateway.class);
OrderService service = new OrderService(mockGateway);
// Can verify interactions, control behavior`,
      explanation: "DIP makes testing EASY! Dependencies are abstractions → inject MOCKS/STUBS in tests. Không cần real PaymentGateway (network calls). Unit tests isolated, fast, deterministic. Without DIP (concrete dependencies), testing painful hoặc impossible."
    },
    {
      question: "What's the ultimate benefit of DIP?",
      options: {
        A: "Faster code",
        B: "Decoupling modules for flexibility and maintainability",
        C: "Less code",
        D: "Simpler algorithms"
      },
      correctAnswer: "B",
      code: null,
      explanation: "DIP ultimate benefit: DECOUPLING! High-level business logic independent of low-level details. Có thể change database, UI, frameworks without touching business rules. Flexible: swap implementations easily. Maintainable: changes localized. Testable: inject test doubles. Foundation của clean architecture."
    }
  ];
