const STORAGE_KEY = "cs336WeakTopics";

const appData = {
  lectures: [
    {
      id: 1,
      title: "Lecture 1: Introduction",
      subtitle: "Programming languages, computation, abstraction, paradigms, and translation.",
      sections: [
        {
          title: "Key Topics",
          items: [
            "Programming as a notation for telling a computer what to do.",
            "Programming language as a notational system for describing computation in human-readable and machine-readable form.",
            "Machine language, assembly language, high-level language, assembler, loader, compiler, and interpreter.",
            "Computation, Turing Machine, Church's Thesis, and Turing Complete languages.",
            "Human readability, human writability, data abstraction, and control abstraction.",
            "Imperative, functional, logic, object-oriented, and parallel paradigms.",
            "Syntax, semantics, lexical structure, tokens, and error types."
          ]
        },
        {
          title: "Simple Definitions",
          items: [
            "Computation: any process a computing machine can carry out, such as calculation, data manipulation, text processing, or information storage.",
            "Turing Machine: a theoretical model of computation created by Alan Turing in 1936.",
            "Turing Complete: a language can describe any computation a Turing Machine can perform.",
            "Syntax: the structure or grammar of a program.",
            "Semantics: the meaning and result of executing a language construct.",
            "Lexical structure: the spelling-level structure of a language; the words are called tokens."
          ]
        },
        {
          title: "Important Comparisons",
          items: [
            "Machine language is binary code; assembly language uses symbols; high-level languages use notation closer to human ideas.",
            "Assembler translates assembly language into binary machine code; loader loads machine code into memory.",
            "Compiler translates the whole source program into a target program before execution; interpreter translates and executes during runtime.",
            "Data abstraction hides details of data; control abstraction hides details of execution flow."
          ]
        },
        {
          title: "Examples",
          items: [
            "High-level language examples from the slides: C, Java, and Python.",
            "Imperative examples: C, Pascal, core Ada, and FORTRAN.",
            "Functional examples: Lisp, Scheme, ML, and Haskell.",
            "Logic programming example: Prolog.",
            "OOP examples: Java, Smalltalk, and C++."
          ]
        },
        {
          title: "What to Memorize",
          highlight: true,
          items: [
            "A language is Turing Complete if it has integer variables and arithmetic, sequential execution, assignment, selection, and looping.",
            "Readability is usually more important than writability because code is read and maintained many times.",
            "Imperative = steps, functional = formulas, logic = facts and rules, OOP = objects.",
            "No translator can report a logic error."
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Lecture 2: Language Design Criteria",
      subtitle: "Efficiency, regularity, security, extensibility, and design trade-offs.",
      sections: [
        {
          title: "Key Topics",
          items: [
            "A successful language may achieve designer goals, gain widespread use, or serve as a model for other languages.",
            "Design goals changed over time: efficiency, readability, abstraction, and reusability.",
            "Efficiency includes execution efficiency, translation efficiency, and programmer efficiency.",
            "Regularity means no unusual restrictions, interactions, or surprising behavior.",
            "Regularity is divided into generality, orthogonality, and uniformity.",
            "Security includes type safety, scope and aliasing control, and error detection.",
            "Extensibility means programmers can add new features using the same mechanisms as built-in features."
          ]
        },
        {
          title: "Simple Definitions",
          items: [
            "Execution efficiency: how fast compiled code runs and how little memory it uses.",
            "Translation efficiency: how quickly and easily source code can be compiled or interpreted.",
            "Programmer efficiency: how quickly programmers can write correct, readable, maintainable code.",
            "Generality: avoiding special cases in availability or use of constructs.",
            "Orthogonality: constructs can be combined meaningfully without strange context restrictions.",
            "Uniformity: similar things look similar and behave similarly.",
            "Aliasing: two names refer to the same memory, so changing one changes the other."
          ]
        },
        {
          title: "Important Comparisons",
          items: [
            "C is used as an example of high execution efficiency; Python is used as an example of high programmer efficiency.",
            "Java uses strong static typing, while Python uses strong dynamic typing.",
            "C allows unrestricted pointers and more aliasing risk; Java removes pointer arithmetic.",
            "Haskell has strong static typing and immutable values by default, so many errors are prevented before execution."
          ]
        },
        {
          title: "Examples",
          items: [
            "Lack of generality: C cannot directly compare arrays or structures using ==.",
            "Lack of orthogonality: Java int is not an object, so List<int> is not allowed.",
            "Lack of uniformity: C++ requires a semicolon after a class definition but forbids it after a function definition.",
            "Operator overloading: Haskell is highest, Python is high, C++ is medium, and Java has none."
          ]
        },
        {
          title: "What to Memorize",
          highlight: true,
          items: [
            "The four main criteria from the case study are efficiency, regularity, security, and extensibility.",
            "An irregularity is only a design flaw if it cannot be justified by a core language goal.",
            "Security means making the right thing easy and the wrong thing impossible.",
            "Best design can make certain errors unrepresentable."
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Lecture 3: Logic Programming",
      subtitle: "Formal logic, first-order predicate logic, Horn clauses, resolution, unification, and Prolog.",
      sections: [
        {
          title: "Key Topics",
          items: [
            "Logic is the study of what follows from premises.",
            "Logic programming is declarative and based on formal logic.",
            "Logic programs use facts, rules, and queries instead of step-by-step instructions.",
            "First-order predicate calculus expresses statements that are true or false.",
            "Predicate logic parts include constants, predicates, functions, variables, connectives, quantifiers, and punctuation symbols.",
            "Horn clauses, resolution, and unification support logic programming.",
            "Prolog is a declarative logic programming language."
          ]
        },
        {
          title: "Simple Definitions",
          items: [
            "Fact: something accepted as true.",
            "Rule: a statement saying something is true if something else is true.",
            "Query: the question or goal we ask the system.",
            "Predicate: a true-or-false function, such as natural(x).",
            "Function: produces a value, such as successor(x).",
            "Universal quantifier: says a relationship is true for all things named by the variable.",
            "Existential quantifier: says a predicate is true for at least one thing."
          ]
        },
        {
          title: "Important Comparisons",
          items: [
            "Imperative programming tells the computer how to solve the problem; logic programming describes what is true.",
            "Predicate asks whether something is true; function produces a value.",
            "Facts tell what the system knows; rules tell how truths connect; queries tell what we want to know.",
            "Resolution chooses the rule; unification fills in the variables."
          ]
        },
        {
          title: "Examples",
          items: [
            "natural(0) is a fact using a predicate with one argument.",
            "successor(x) is a function because it produces a value.",
            "grandparent(X, Y) is true if X is parent of Z and Z is parent of Y.",
            "In Prolog, grandfather(X, Y) :- father(X, Z), parent(Z, Y) is a rule."
          ]
        },
        {
          title: "What to Memorize",
          highlight: true,
          items: [
            "Logic programming = facts + rules + queries.",
            "First-order predicate logic formally expresses logical statements.",
            "Horn clause head = conclusion; body = conditions.",
            "Unification asks: can I make these two expressions the same by filling in variables?"
          ]
        }
      ]
    }
  ],
  summary: [
    { term: "Programming language definition", text: "A notational system for describing computation in machine-readable and human-readable form." },
    { term: "Machine language vs assembly vs high-level language", text: "Machine language is binary. Assembly uses symbols and is machine dependent. High-level languages are closer to human and mathematical ideas." },
    { term: "Assembler and loader", text: "An assembler translates assembly language into binary machine code. A loader loads machine code into memory." },
    { term: "Computation", text: "Any process a computing machine can carry out, including calculations, data manipulation, text processing, and storage or retrieval." },
    { term: "Turing Machine", text: "A theoretical mathematical model of computation created by Alan Turing in 1936." },
    { term: "Turing Complete", text: "A language that can describe any computation performed by a Turing Machine." },
    { term: "Readability and writability", text: "Readability means code is easy to understand. Writability means code is easy to write. Readability is often more important for maintenance." },
    { term: "Data abstraction and control abstraction", text: "Data abstraction hides data representation details. Control abstraction hides execution-flow details." },
    { term: "Paradigms", text: "Imperative = steps. Functional = formulas and functions. Logic = facts and rules. OOP = objects with data and behavior." },
    { term: "Efficiency", text: "Execution efficiency, translation efficiency, and programmer efficiency may conflict with each other." },
    { term: "Regularity", text: "A language is regular when features have no surprising restrictions, interactions, or behavior." },
    { term: "Generality", text: "Avoiding special cases in the use or availability of language constructs." },
    { term: "Orthogonality", text: "Language constructs combine freely without unexpected restrictions based on context." },
    { term: "Uniformity", text: "Similar things should look similar and behave similarly." },
    { term: "Security", text: "A secure language makes it harder to write buggy or dangerous code and detects errors early." },
    { term: "Type safety", text: "Prevents operations on wrong-typed data." },
    { term: "Aliasing", text: "Two names refer to the same memory, so changing one can silently change the other." },
    { term: "Logic programming", text: "A declarative paradigm based on formal logic, using facts and rules rather than imperative instructions." },
    { term: "First-order predicate logic", text: "A way to formally express logical statements that are true or false." },
    { term: "Constants, predicates, functions, variables", text: "Constants are names or numbers. Predicates are true-or-false functions. Functions produce values. Variables stand for unspecified quantities." },
    { term: "Connectives and quantifiers", text: "Connectives include and, or, not, implication, and equivalence. Quantifiers include universal and existential." },
    { term: "Facts, rules, queries", text: "Facts are accepted truths. Rules connect truths. Queries are questions or goals asked to the system." }
  ],
  mcq: [
    q("What is a programming language according to Lecture 1?", ["A notational system for describing computation", "Only a machine's binary hardware", "A file manager for source code", "Only a debugger"], 0, "Programming languages describe computation in human-readable and machine-readable form.", "Lecture 1", "Programming language definition"),
    q("What did programmers use before the 1940s according to the lecture?", ["Hardwiring", "Python scripts", "Virtual machines", "Object-oriented classes"], 0, "Before stored programs, computers were programmed by hardwiring.", "Lecture 1", "History of programming"),
    q("What does an assembler do?", ["Translates assembly language into binary machine code", "Runs Java bytecode", "Checks only logic errors", "Stores source code in a database"], 0, "An assembler translates symbolic assembly code into machine code.", "Lecture 1", "Assembler"),
    q("What does a loader do?", ["Loads machine code into computer memory", "Writes comments automatically", "Creates logic errors", "Turns Python into C++"], 0, "The loader places machine code into memory so it can run.", "Lecture 1", "Loader"),
    q("Which feature is a limitation of assembly language?", ["It is very machine dependent", "It is too high-level", "It cannot control hardware", "It uses no symbols"], 0, "Assembly gives control but is machine dependent and low in abstraction.", "Lecture 1", "Assembly language"),
    q("Why are high-level languages needed?", ["To provide higher abstraction and clearer instructions", "To remove all computation", "To avoid translation forever", "To make every program binary"], 0, "High-level languages improve abstraction and readability.", "Lecture 1", "High-level languages"),
    q("Which is listed as a computation example?", ["Text processing", "Traffic lights", "Course grading", "Email addresses"], 0, "The lecture lists text processing as a kind of computation.", "Lecture 1", "Computation"),
    q("What is a Turing Machine?", ["A theoretical mathematical model of computation", "A Java compiler", "An object-oriented class", "A database table"], 0, "A Turing Machine is a formal model of computation.", "Lecture 1", "Turing Machine"),
    q("What does Church's Thesis say in the lecture?", ["No machine can be inherently more powerful than a Turing Machine", "Python is always faster than C", "All errors are syntax errors", "Assembly is high-level"], 0, "The lecture states that no machine is inherently more powerful than a Turing Machine.", "Lecture 1", "Church's Thesis"),
    q("Which is needed for Turing Completeness in the lecture?", ["Assignment, selection, and looping", "Only comments", "Only object inheritance", "Only HTML tags"], 0, "The lecture lists assignment, if, and while as key features.", "Lecture 1", "Turing Complete"),
    q("What is human readability?", ["Reducing the effort needed to read and understand programs", "Making code impossible to write", "Running code faster", "Removing syntax"], 0, "Readability is about making programs easier to understand.", "Lecture 1", "Readability"),
    q("Why does Lecture 1 say readability tends to be more important than writability?", ["Many people read and maintain code after it is written", "Writing code is impossible", "Compilers ignore readable code", "Only binary code matters"], 0, "Maintainers often read code many times after it is written.", "Lecture 1", "Readability vs writability"),
    q("What are the two broad categories of abstraction?", ["Data abstraction and control abstraction", "Compile abstraction and file abstraction", "Logic abstraction and syntax abstraction", "Token abstraction and error abstraction"], 0, "The lecture divides abstractions into data and control abstraction.", "Lecture 1", "Abstraction"),
    q("What does data abstraction simplify?", ["The behavior and attributes of data", "Only keyboard input", "Only jump instructions", "The lecturer contact information"], 0, "Data abstraction hides data details such as storage representation.", "Lecture 1", "Data abstraction"),
    q("What does control abstraction simplify?", ["The transfer of control or execution path", "The internal representation of integers", "The spelling of tokens", "The names of constants"], 0, "Control abstraction hides details of execution flow.", "Lecture 1", "Control abstraction"),
    q("Which paradigm is based on sequential execution and assignment?", ["Imperative", "Functional", "Logic", "Object-oriented"], 0, "Imperative languages use variables, assignment, and sequential steps.", "Lecture 1", "Imperative paradigm"),
    q("Which paradigm avoids changing variables in its pure form?", ["Functional", "Imperative", "Assembly", "Object-oriented"], 0, "Functional programming focuses on function evaluation, recursion, and no state changes.", "Lecture 1", "Functional paradigm"),
    q("Which paradigm uses facts and rules?", ["Logic", "Imperative", "Object-oriented", "Machine language"], 0, "Logic programming gives facts and rules, and the system finds answers.", "Lecture 1", "Logic paradigm"),
    q("In OOP, objects combine what?", ["Data and behavior", "Tokens and loaders", "Only loops", "Only facts"], 0, "The lecture summarizes objects as data plus behavior.", "Lecture 1", "OOP"),
    q("What are the two main parts of language definition?", ["Syntax and semantics", "Compiler and loader", "Variables and memory", "Facts and queries"], 0, "Language definition is divided into syntax and semantics.", "Lecture 1", "Language definition"),
    q("What does syntax define?", ["The structure of a program and how parts combine", "The runtime output only", "The physical memory size", "The programmer's grade"], 0, "Syntax is like grammar for programs.", "Lecture 1", "Syntax"),
    q("What does semantics describe?", ["The meaning and execution result of language constructs", "Only illegal characters", "Only spaces in source files", "The number of slides"], 0, "Semantics is about meaning and behavior.", "Lecture 1", "Semantics"),
    q("What are tokens?", ["Words in a programming language", "Runtime crashes", "Compiler settings", "Machine addresses only"], 0, "Lexical structure concerns tokens such as if, else, +, and <=.", "Lecture 1", "Lexical structure"),
    q("What is a compiler?", ["A translator that produces an equivalent program suitable for execution", "A translator that never produces target code", "A logic error detector", "A hardware switch"], 0, "A compiler translates source code into a target program.", "Lecture 1", "Compiler"),
    q("What is an interpreter?", ["A translator that executes a program directly", "A loader for assembly only", "A spelling checker for English", "A standardization body"], 0, "An interpreter translates and runs code directly during execution.", "Lecture 1", "Interpreter"),
    q("Which error can no translator report?", ["Logic error", "Syntax error", "Lexical error", "Static semantic error"], 0, "The lecture states no translator can report a logic error.", "Lecture 1", "Error types"),
    q("What is one way a language can be successful?", ["It achieves its designer goals", "It has no syntax", "It forbids abstraction", "It cannot be translated"], 0, "The lecture lists designer goals, widespread use, and model for others.", "Lecture 2", "Language success"),
    q("What did design goals evolve toward over time?", ["Efficiency, readability, abstraction, and reusability", "Only hardware switches", "Only binary spelling", "Only course attendance"], 0, "The historical overview lists these changing design goals.", "Lecture 2", "Design history"),
    q("What is execution efficiency?", ["How fast code runs and how little memory it uses", "How many comments code has", "How many queries Prolog asks", "How much text appears on slides"], 0, "Execution efficiency is about speed and memory.", "Lecture 2", "Efficiency"),
    q("What is programmer efficiency?", ["How quickly programmers write correct, readable, maintainable code", "How fast the CPU clock is", "How many pointers C allows", "How many facts Prolog stores"], 0, "Programmer efficiency focuses on the programmer's productivity.", "Lecture 2", "Programmer efficiency"),
    q("Which language is used as an example of high programmer efficiency?", ["Python", "Machine language", "Assembly language", "ENIAC"], 0, "The slides describe Python as ideal for programmer efficiency.", "Lecture 2", "Python design"),
    q("What is regularity?", ["No unusual restrictions, interactions, or surprising behavior", "Only using regular expressions", "Always using loops", "Avoiding all type systems"], 0, "Regularity means language features behave without surprises.", "Lecture 2", "Regularity"),
    q("Which three concepts make up regularity?", ["Generality, orthogonality, and uniformity", "Facts, rules, and queries", "Syntax, semantics, and tokens", "Loader, compiler, and interpreter"], 0, "The lecture divides regularity into these three ideas.", "Lecture 2", "Regularity"),
    q("What does generality mean?", ["Avoiding special cases in using constructs", "Making every construct illegal", "Using only machine code", "Running programs line by line"], 0, "Generality avoids special cases and combines related constructs.", "Lecture 2", "Generality"),
    q("What does orthogonality mean?", ["Constructs combine freely without strange restrictions", "Everything must be perpendicular on screen", "Only arrays can be compared", "Only one feature exists"], 0, "Orthogonality means constructs work together meaningfully.", "Lecture 2", "Orthogonality"),
    q("What does uniformity mean?", ["Similar things look and behave similarly", "Everything must be the same color", "Programs need no syntax", "All errors are runtime errors"], 0, "Uniformity is consistency of appearance and behavior.", "Lecture 2", "Uniformity"),
    q("Which is an example of lack of uniformity from C++?", ["Semicolon after a class definition but not after a function definition", "Everything is an object", "No pointer arithmetic", "Facts and rules"], 0, "The C++ semicolon rule is a non-uniformity example.", "Lecture 2", "Uniformity example"),
    q("When is an irregularity a design flaw?", ["When it cannot be justified by a core goal", "Whenever it improves performance", "Whenever it supports compatibility", "Only when it uses variables"], 0, "The lecture gives this as the key rule.", "Lecture 2", "Design trade-offs"),
    q("What does language security try to do?", ["Make buggy or dangerous code harder to write", "Make all code shorter", "Remove all compilers", "Make programs untyped only"], 0, "Security-focused design catches errors early and avoids dangerous code.", "Lecture 2", "Security"),
    q("What is type safety?", ["Preventing operations on wrong-typed data", "Allowing all pointer casts silently", "Removing variables", "Making syntax optional"], 0, "Type safety stops wrong-type operations.", "Lecture 2", "Type safety"),
    q("What is aliasing?", ["Two names refer to the same memory", "A syntax error in an if statement", "A Prolog fact", "A high-level language only"], 0, "Aliasing means one change may silently affect another name.", "Lecture 2", "Aliasing"),
    q("Which language has strong dynamic typing in the lecture table?", ["Python", "C", "C++", "Haskell"], 0, "Python is listed as strong and dynamic, with runtime type checks.", "Lecture 2", "Type systems"),
    q("What is extensibility?", ["Adding features using the same mechanisms as built-in ones", "Forbidding libraries", "Only using loops", "Making source unreadable"], 0, "Extensibility lets user-defined features behave like built-ins.", "Lecture 2", "Extensibility"),
    q("Which language has no operator overloading in the lecture table?", ["Java", "Python", "Haskell", "C++"], 0, "The lecture table says Java has no operator overloading.", "Lecture 2", "Operator overloading"),
    q("What is logic concerned with?", ["What follows from a set of premises", "Only what is popular", "Only CPU speed", "Only variable names"], 0, "Logic studies correct reasoning and valid conclusions.", "Lecture 3", "Logic"),
    q("What is logic programming based on?", ["Formal logic", "Hardwiring", "Pointer arithmetic", "English spelling only"], 0, "Logic programming is a declarative paradigm based on formal logic.", "Lecture 3", "Logic programming"),
    q("What does logic programming focus on?", ["Defining what the problem is", "Writing every step manually", "Using only assembly", "Avoiding queries"], 0, "Logic programming describes what is true rather than the steps.", "Lecture 3", "Declarative programming"),
    q("What are the three basic parts of a logic program?", ["Facts, rules, and queries", "Compilers, loaders, and assemblers", "Syntax, tokens, and comments", "Objects, classes, and methods"], 0, "The lecture repeatedly summarizes logic programming as facts, rules, and queries.", "Lecture 3", "Facts rules queries"),
    q("What is first-order predicate calculus used for?", ["Formally expressing true-or-false logical statements", "Compiling C++", "Loading bytecode", "Formatting CSS"], 0, "It expresses logical statements formally.", "Lecture 3", "First-order predicate logic"),
    q("What is a constant in predicate logic?", ["A number or name that cannot be broken into subparts", "A loop", "A runtime exception", "A compiler"], 0, "Constants are usually numbers or names, sometimes called atoms.", "Lecture 3", "Constants"),
    q("What is a predicate?", ["A true-or-false function", "A value-producing non-Boolean function", "A loader", "A class semicolon"], 0, "Predicates are functions that return true or false.", "Lecture 3", "Predicates"),
    q("What is a function in predicate logic?", ["A non-Boolean value-producing function", "Only a true-or-false test", "A syntax error", "A loader"], 0, "The lecture contrasts functions with predicates.", "Lecture 3", "Functions"),
    q("What do variables stand for?", ["Unspecified quantities", "Only fixed numbers", "Only object methods", "Only compiler errors"], 0, "Variables represent quantities not yet specified.", "Lecture 3", "Variables"),
    q("What does the universal quantifier mean?", ["A relationship is true for all things named by the variable", "Something exists at least once", "A variable has no scope", "A fact is always false"], 0, "Universal quantification states a rule for all values.", "Lecture 3", "Quantifiers"),
    q("What does the existential quantifier mean?", ["A predicate is true for at least one thing", "A predicate is true for everything", "A function produces no value", "A compiler has no errors"], 0, "Existential quantification means at least one value exists.", "Lecture 3", "Quantifiers"),
    q("In a Horn clause, what is the head?", ["The conclusion", "The conditions", "The punctuation", "The loader"], 0, "The lecture says b is the head and the ai statements are the body.", "Lecture 3", "Horn clauses"),
    q("What is resolution?", ["Using matching Horn clauses to infer a new clause", "Checking spelling in C", "Comparing arrays with ==", "Running bytecode"], 0, "Resolution uses one clause to replace a matching statement in another.", "Lecture 3", "Resolution"),
    q("What is unification?", ["Making expressions match by filling in variables", "Writing HTML", "Loading native code", "Removing all predicates"], 0, "Unification is pattern matching that instantiates variables.", "Lecture 3", "Unification"),
    q("What does Prolog stand for in the lecture?", ["PROgramming in LOGics", "Program Loader", "Process Logic", "Predicate Looping"], 0, "The lecture expands Prolog as PROgramming in LOGics.", "Lecture 3", "Prolog"),
    q("How does the lecture describe a Prolog program?", ["A relational database containing facts and rules", "A C++ class definition only", "A machine-code loader", "A set of HTML buttons"], 0, "The lecture says Prolog programs can be viewed as relational databases with facts and rules.", "Lecture 3", "Prolog")
  ],
  tf: [
    tf("A programming language describes computation in both machine-readable and human-readable form.", true, "This is the lecture definition.", "Lecture 1", "Programming language definition"),
    tf("Assembly language is completely machine independent.", false, "The lecture says assembly is very machine dependent.", "Lecture 1", "Assembly language"),
    tf("An assembler translates symbolic assembly code into binary machine code.", true, "That is the role of an assembler.", "Lecture 1", "Assembler"),
    tf("A loader automatically loads machine code into computer memory.", true, "The lecture gives this as the loader role.", "Lecture 1", "Loader"),
    tf("High-level languages are lower in abstraction than assembly language.", false, "High-level languages provide higher abstraction.", "Lecture 1", "High-level languages"),
    tf("Computation includes information storage and retrieval.", true, "The lecture lists storage and retrieval as computation examples.", "Lecture 1", "Computation"),
    tf("A Turing Machine is a practical high-speed modern computer.", false, "It is a theoretical model and not efficient.", "Lecture 1", "Turing Machine"),
    tf("A Turing Complete language can describe any computation performed by a Turing Machine.", true, "That is the lecture definition.", "Lecture 1", "Turing Complete"),
    tf("A language needs only comments to be Turing Complete.", false, "The lecture lists arithmetic, sequence, assignment, selection, and looping.", "Lecture 1", "Turing Complete"),
    tf("Machine readability requires unambiguous and finite translation.", true, "The lecture says translation must use an unambiguous finite algorithm.", "Lecture 1", "Machine readability"),
    tf("Human readability aims to reduce effort required to understand a complex program.", true, "That is the stated goal.", "Lecture 1", "Human readability"),
    tf("Writability is always more important than readability.", false, "The lecture says readability tends to be more important.", "Lecture 1", "Writability"),
    tf("Data abstraction hides details of data representation.", true, "Data abstraction lets programmers use data without internal storage details.", "Lecture 1", "Data abstraction"),
    tf("Control abstraction is about simplifying transfer of control.", true, "It hides execution-path details.", "Lecture 1", "Control abstraction"),
    tf("An imperative language uses variables, assignment, and sequential execution.", true, "That is how the lecture defines imperative languages.", "Lecture 1", "Imperative paradigm"),
    tf("Pure functional programming depends on changing variables with x = x + 1.", false, "The lecture says no changing variables in pure functional programming.", "Lecture 1", "Functional paradigm"),
    tf("Logic programming is sometimes called declarative programming.", true, "The lecture says properties are declared without specifying execution sequence.", "Lecture 1", "Logic paradigm"),
    tf("OOP objects are summarized as data plus behavior.", true, "The lecture uses this summary.", "Lecture 1", "OOP"),
    tf("Syntax describes the meaning of a language construct.", false, "Semantics describes meaning; syntax describes structure.", "Lecture 1", "Syntax"),
    tf("Lexical structure is similar to spelling in a natural language.", true, "The lecture compares lexical structure to spelling.", "Lecture 1", "Lexical structure"),
    tf("A compiler processes the entire source code before execution.", true, "The lecture summary calls the compiler a pre-translator.", "Lecture 1", "Compiler"),
    tf("An interpreter creates a standalone executable file every time.", false, "The lecture says no standalone executable file is created.", "Lecture 1", "Interpreter"),
    tf("No translator can report a logic error.", true, "The lecture states this directly.", "Lecture 1", "Error types"),
    tf("A language can be judged successful if it serves as a model for other languages.", true, "This is one of the success criteria.", "Lecture 2", "Language success"),
    tf("FORTRAN's original main focus was efficient execution.", true, "The lecture table gives FORTRAN this goal.", "Lecture 2", "Design history"),
    tf("COBOL was designed to be English-like for readability.", true, "The lecture identifies English-like readability as COBOL's goal.", "Lecture 2", "Design history"),
    tf("Efficiency only means that code runs fast.", false, "The lecture splits efficiency into execution, translation, and programmer efficiency.", "Lecture 2", "Efficiency"),
    tf("Static typing can support execution efficiency because types need not be checked at runtime.", true, "The lecture uses this as an example.", "Lecture 2", "Efficiency"),
    tf("Python is used as an example of programmer efficiency.", true, "The lecture says Python maximizes programmer efficiency.", "Lecture 2", "Programmer efficiency"),
    tf("Regularity means language features behave with no surprises.", true, "That is the lecture idea.", "Lecture 2", "Regularity"),
    tf("Generality means adding special cases whenever possible.", false, "Generality avoids special cases.", "Lecture 2", "Generality"),
    tf("Too much generality can be bad.", true, "The lecture states this warning.", "Lecture 2", "Generality"),
    tf("Orthogonality means constructs should behave differently in every context.", false, "Orthogonality avoids unexpected context restrictions.", "Lecture 2", "Orthogonality"),
    tf("Uniformity means similar things should look similar and behave similarly.", true, "That is the definition from the lecture.", "Lecture 2", "Uniformity"),
    tf("C++ semicolon rules are used as an example of lack of uniformity.", true, "The lecture gives class vs function semicolons as an example.", "Lecture 2", "Uniformity example"),
    tf("All irregularities are automatically bad design.", false, "They can reflect trade-offs such as performance or compatibility.", "Lecture 2", "Design trade-offs"),
    tf("Language security aims to detect errors as early as possible.", true, "The lecture says ideally at compile time and never silently.", "Lecture 2", "Security"),
    tf("Aliasing can cause one variable name to silently affect another.", true, "Changing one alias can change the shared memory.", "Lecture 2", "Aliasing"),
    tf("Python is strong and static in the type-safety table.", false, "Python is listed as strong and dynamic.", "Lecture 2", "Type systems"),
    tf("Java removes pointer arithmetic compared with C.", true, "The lecture says Java eliminates pointers as explicit constructs.", "Lecture 2", "Security"),
    tf("Extensibility means user-defined features can behave like built-in features.", true, "That is the ideal extensibility idea.", "Lecture 2", "Extensibility"),
    tf("Java has full operator overloading in the lecture table.", false, "The lecture table says Java has none.", "Lecture 2", "Operator overloading"),
    tf("Logic studies what follows from a set of premises.", true, "The lecture defines logic this way.", "Lecture 3", "Logic"),
    tf("Logic programming is an imperative paradigm.", false, "The lecture calls it declarative.", "Lecture 3", "Logic programming"),
    tf("Logic programs are built from facts and rules rather than imperative instructions.", true, "This is stated in the lecture.", "Lecture 3", "Logic programming"),
    tf("Logic programming focuses on how to solve the problem step by step.", false, "It focuses on what the problem is.", "Lecture 3", "Declarative programming"),
    tf("First-order predicate calculus expresses statements that are true or false.", true, "That is how the lecture introduces it.", "Lecture 3", "Predicate logic"),
    tf("A constant is usually a number or name.", true, "Constants are numbers or names, also called atoms.", "Lecture 3", "Constants"),
    tf("A predicate produces a non-Boolean value such as successor(x).", false, "A predicate is true or false; successor is a function.", "Lecture 3", "Predicates"),
    tf("Variables stand for unspecified quantities.", true, "That is the lecture definition.", "Lecture 3", "Variables"),
    tf("Connectives include and, or, and not.", true, "The lecture lists these Boolean-like connectives.", "Lecture 3", "Connectives"),
    tf("The existential quantifier means true for all values.", false, "That is universal; existential means at least one.", "Lecture 3", "Quantifiers"),
    tf("Facts are things accepted as true.", true, "The lecture defines facts this way.", "Lecture 3", "Facts"),
    tf("A rule says something is true if something else is true.", true, "That is the lecture definition.", "Lecture 3", "Rules"),
    tf("A query is the question or goal asked to the system.", true, "The lecture calls queries questions or goals.", "Lecture 3", "Queries"),
    tf("In a Horn clause, the body contains the conditions.", true, "The lecture says the ai statements are the body.", "Lecture 3", "Horn clauses"),
    tf("A Horn clause with no body means the head is always true.", true, "The lecture says this is an axiom or fact.", "Lecture 3", "Horn clauses"),
    tf("Unification fills in variables so expressions can match.", true, "The lecture calls unification pattern fitting.", "Lecture 3", "Unification"),
    tf("Resolution chooses the rule and unification fills in the variables.", true, "This is the lecture summary.", "Lecture 3", "Resolution and unification"),
    tf("Prolog is the most widely used language inspired by logic programming research.", true, "The lecture states this.", "Lecture 3", "Prolog")
  ],
  short: [
    sa("Define a programming language.", "A programming language is a notational system for describing computation in machine-readable and human-readable form.", "Lecture 1", "Programming language definition"),
    sa("What does an assembler do?", "An assembler translates symbolic assembly language code into binary machine code.", "Lecture 1", "Assembler"),
    sa("What does a loader do?", "A loader loads translated machine code into computer memory.", "Lecture 1", "Loader"),
    sa("Define computation using the lecture wording.", "Computation is any process that can be carried out by a computing machine.", "Lecture 1", "Computation"),
    sa("What is a Turing Machine?", "A Turing Machine is a theoretical mathematical model of computation created by Alan Turing in 1936.", "Lecture 1", "Turing Machine"),
    sa("When is a programming language Turing Complete?", "It is Turing Complete if it can describe any computation performed by a Turing Machine.", "Lecture 1", "Turing Complete"),
    sa("Name two categories of programming language abstraction.", "The two categories are data abstraction and control abstraction.", "Lecture 1", "Abstraction"),
    sa("What is the difference between syntax and semantics?", "Syntax is the structure of a program; semantics is the meaning and execution result.", "Lecture 1", "Syntax and semantics"),
    sa("What is the difference between a compiler and an interpreter?", "A compiler translates a whole source program into a target program before execution; an interpreter executes the program directly during runtime.", "Lecture 1", "Compiler vs interpreter"),
    sa("List the three types of efficiency from Lecture 2.", "Execution efficiency, translation efficiency, and programmer efficiency.", "Lecture 2", "Efficiency"),
    sa("Define regularity.", "Regularity is how well a language integrates features with no unusual restrictions, interactions, or surprising behavior.", "Lecture 2", "Regularity"),
    sa("Define generality.", "Generality means avoiding special cases in the availability or use of constructs.", "Lecture 2", "Generality"),
    sa("Define orthogonality.", "Orthogonality means language constructs can be combined meaningfully without unexpected restrictions based on context.", "Lecture 2", "Orthogonality"),
    sa("Define uniformity.", "Uniformity means similar things should look similar and behave similarly.", "Lecture 2", "Uniformity"),
    sa("What is aliasing?", "Aliasing means two names refer to the same memory, so changing one can silently change the other.", "Lecture 2", "Aliasing"),
    sa("What is type safety?", "Type safety prevents operations on wrong-typed data.", "Lecture 2", "Type safety"),
    sa("What is logic programming?", "Logic programming is a declarative paradigm based on formal logic, using facts and rules instead of imperative instructions.", "Lecture 3", "Logic programming"),
    sa("What are facts, rules, and queries?", "Facts are accepted truths, rules connect truths, and queries are questions or goals asked to the system.", "Lecture 3", "Facts rules queries"),
    sa("What is a predicate?", "A predicate is a true-or-false function that can take arguments.", "Lecture 3", "Predicate"),
    sa("What is unification?", "Unification is making expressions match by filling in variables; variables are instantiated so patterns match.", "Lecture 3", "Unification"),
    sa("What is a Horn clause head and body?", "The head is the conclusion, and the body contains the conditions that imply the head.", "Lecture 3", "Horn clauses"),
    sa("What does Prolog mean and what kind of language is it?", "Prolog means PROgramming in LOGics, and it is a logical declarative programming language.", "Lecture 3", "Prolog")
  ]
};

let currentQuiz = null;

function q(text, choices, answer, explanation, lecture, topic) {
  return { text, choices, answer, explanation, lecture, topic };
}

function tf(text, answer, explanation, lecture, topic) {
  return { text, answer, explanation, lecture, topic };
}

function sa(text, answer, lecture, topic) {
  return { text, answer, lecture, topic };
}

function getWeakTopics() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function saveWeakTopic(item) {
  const saved = getWeakTopics();
  const key = `${item.mode}|${item.question}`;
  const alreadySaved = saved.some((entry) => `${entry.mode}|${entry.question}` === key);
  if (!alreadySaved) {
    saved.push({ ...item, savedAt: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }
}

function clearWeakTopics() {
  localStorage.removeItem(STORAGE_KEY);
  renderWeakTopics();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function setApp(content) {
  document.getElementById("app").innerHTML = content;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome() {
  const template = document.getElementById("homeTemplate");
  document.getElementById("app").innerHTML = template.innerHTML;
}

function renderLecture(id) {
  const lecture = appData.lectures.find((item) => item.id === Number(id));
  const sections = lecture.sections.map((section) => `
    <article class="info-card ${section.highlight ? "highlight" : ""}">
      <h3>${section.title}</h3>
      <ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");

  setApp(`
    <section class="page-head">
      <div>
        <p class="eyebrow">Revision Page</p>
        <h1>${lecture.title}</h1>
        <p>${lecture.subtitle}</p>
      </div>
      <button class="secondary-button" type="button" data-view="home">Back Home</button>
    </section>
    <section class="section-grid">${sections}</section>
  `);
}

function startQuiz(mode) {
  const source = mode === "mcq" ? appData.mcq : mode === "tf" ? appData.tf : appData.short;
  currentQuiz = {
    mode,
    questions: shuffle(source),
    index: 0,
    score: 0,
    answered: false,
    revealed: false
  };
  renderQuestion();
}

function renderQuestion() {
  const quiz = currentQuiz;
  if (quiz.index >= quiz.questions.length) {
    renderFinalScore();
    return;
  }

  const item = quiz.questions[quiz.index];
  const modeTitle = quiz.mode === "mcq" ? "Mixed Quiz" : quiz.mode === "tf" ? "True / False Practice" : "Short Answer Practice";

  let body = "";
  if (quiz.mode === "mcq") {
    body = `
      <div class="choice-list">
        ${item.choices.map((choice, index) => `
          <button class="choice-button" type="button" data-answer="${index}">${choice}</button>
        `).join("")}
      </div>
    `;
  } else if (quiz.mode === "tf") {
    body = `
      <div class="choice-list">
        <button class="true-false-button" type="button" data-tf="true">True</button>
        <button class="true-false-button" type="button" data-tf="false">False</button>
      </div>
    `;
  } else {
    body = `
      <textarea class="short-answer" id="shortAnswerInput" placeholder="Type your answer here..."></textarea>
      <div class="actions">
        <button class="primary-button" type="button" id="revealAnswer">Reveal Model Answer</button>
      </div>
      <div id="modelAnswer"></div>
    `;
  }

  setApp(`
    <section class="quiz-card">
      <div class="quiz-meta">
        <span>${modeTitle}</span>
        <span>Question ${quiz.index + 1} of ${quiz.questions.length}</span>
        <span>Score: ${quiz.score}</span>
      </div>
      <p class="pill">${item.lecture} - ${item.topic}</p>
      <div class="question-text">${item.text}</div>
      ${body}
      <div id="feedback"></div>
      <div class="actions">
        <button class="secondary-button" type="button" data-view="home">Exit</button>
      </div>
    </section>
  `);
}

function answerMcq(selectedIndex) {
  if (currentQuiz.answered) return;
  currentQuiz.answered = true;
  const item = currentQuiz.questions[currentQuiz.index];
  const correct = selectedIndex === item.answer;
  if (correct) currentQuiz.score += 1;

  document.querySelectorAll(".choice-button").forEach((button) => {
    const buttonIndex = Number(button.dataset.answer);
    if (buttonIndex === item.answer) button.classList.add("correct");
    if (buttonIndex === selectedIndex && !correct) button.classList.add("wrong");
    button.disabled = true;
  });

  if (!correct) {
    saveWeakTopic({
      mode: "MCQ",
      question: item.text,
      correctAnswer: item.choices[item.answer],
      topic: item.topic,
      lecture: item.lecture,
      note: "Review this: memorize the definition and example for this topic."
    });
  }

  showFeedback(correct, item.explanation);
}

function answerTf(value) {
  if (currentQuiz.answered) return;
  currentQuiz.answered = true;
  const item = currentQuiz.questions[currentQuiz.index];
  const correct = value === item.answer;
  if (correct) currentQuiz.score += 1;

  document.querySelectorAll(".true-false-button").forEach((button) => {
    const buttonValue = button.dataset.tf === "true";
    if (buttonValue === item.answer) button.classList.add("correct");
    if (buttonValue === value && !correct) button.classList.add("wrong");
    button.disabled = true;
  });

  if (!correct) {
    saveWeakTopic({
      mode: "True / False",
      question: item.text,
      correctAnswer: item.answer ? "True" : "False",
      topic: item.topic,
      lecture: item.lecture,
      note: "Review this: reread the matching revision card and summary term."
    });
  }

  showFeedback(correct, item.explanation);
}

function revealShortAnswer() {
  if (currentQuiz.revealed) return;
  currentQuiz.revealed = true;
  const item = currentQuiz.questions[currentQuiz.index];
  document.getElementById("modelAnswer").innerHTML = `
    <div class="feedback">
      <strong>Model answer:</strong>
      <p>${item.answer}</p>
      <div class="actions">
        <button class="primary-button" type="button" id="markCorrect">I got it correct</button>
        <button class="secondary-button" type="button" id="markWrong">I got it wrong</button>
      </div>
    </div>
  `;
}

function markShortAnswer(correct) {
  if (currentQuiz.answered) return;
  currentQuiz.answered = true;
  const item = currentQuiz.questions[currentQuiz.index];
  if (correct) {
    currentQuiz.score += 1;
  } else {
    saveWeakTopic({
      mode: "Short Answer",
      question: item.text,
      correctAnswer: item.answer,
      topic: item.topic,
      lecture: item.lecture,
      note: "Review this: practise writing the model answer from memory."
    });
  }
  showFeedback(correct, correct ? "Marked correct by you." : "Saved to weak topics for review.");
}

function showFeedback(correct, explanation) {
  const feedback = document.getElementById("feedback");
  feedback.innerHTML = `
    <div class="feedback ${correct ? "right" : "wrong"}">
      <strong>${correct ? "Correct" : "Wrong"}</strong>
      <p>${explanation}</p>
      <button class="primary-button" type="button" id="nextQuestion">Next Question</button>
    </div>
  `;
}

function nextQuestion() {
  currentQuiz.index += 1;
  currentQuiz.answered = false;
  currentQuiz.revealed = false;
  renderQuestion();
}

function renderFinalScore() {
  const total = currentQuiz.questions.length;
  const percent = Math.round((currentQuiz.score / total) * 100);
  const grade = percent >= 90 ? "Excellent" : percent >= 70 ? "Good work" : percent >= 50 ? "Keep practising" : "Needs review";
  setApp(`
    <section class="quiz-card">
      <p class="eyebrow">Practice Complete</p>
      <h2>${grade}</h2>
      <div class="score-display">
        <span class="score-number">${currentQuiz.score}</span>
        <span class="score-total">/ ${total}</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" id="scoreBar" style="width: 0%"></div>
      </div>
      <p class="hero-text">${percent}% correct. Wrong answers were saved in Weak Topics.</p>
      <div class="actions">
        <button class="primary-button" type="button" data-mode="${currentQuiz.mode}">Try Again</button>
        <button class="secondary-button" type="button" data-view="weak">Review Weak Topics</button>
        <button class="secondary-button" type="button" data-view="home">Back Home</button>
      </div>
    </section>
  `);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const bar = document.getElementById("scoreBar");
      if (bar) bar.style.width = percent + "%";
    });
  });
}

function renderSummary() {
  const cards = appData.summary.map((item) => `
    <article class="summary-card">
      <h3>${item.term}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");

  setApp(`
    <section class="page-head">
      <div>
        <p class="eyebrow">Last-Minute Summary</p>
        <h1>Memorize These First</h1>
        <p>Short, exam-focused reminders from Weeks 1, 2, and 3.</p>
      </div>
      <button class="secondary-button" type="button" data-view="home">Back Home</button>
    </section>
    <section class="summary-grid">${cards}</section>
  `);
}

function renderWeakTopics() {
  const weak = getWeakTopics();
  if (weak.length === 0) {
    setApp(`
      <section class="page-head">
        <div>
          <p class="eyebrow">Weak Topics</p>
          <h1>No saved wrong answers yet</h1>
          <p>When you answer incorrectly, the question will appear here after refresh too.</p>
        </div>
        <button class="secondary-button" type="button" data-view="home">Back Home</button>
      </section>
      <div class="empty-state">Start a quiz to build your review list.</div>
    `);
    return;
  }

  const cards = weak.map((item) => `
    <article class="weak-card">
      <span class="pill">${item.lecture} - ${item.topic}</span>
      <h3>${item.question}</h3>
      <p><strong>Correct answer:</strong> ${item.correctAnswer}</p>
      <p>${item.note}</p>
      <p><strong>Mode:</strong> ${item.mode}</p>
    </article>
  `).join("");

  setApp(`
    <section class="page-head">
      <div>
        <p class="eyebrow">Weak Topics Tracker</p>
        <h1>Review Saved Wrong Answers</h1>
        <p>These stay saved using localStorage until you clear them.</p>
      </div>
      <div class="actions">
        <button class="secondary-button" type="button" data-view="home">Back Home</button>
        <button class="secondary-button" type="button" id="clearWeak">Clear Weak Topics</button>
      </div>
    </section>
    <section class="weak-grid">${cards}</section>
  `);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.id === "homeButton" || target.dataset.view === "home") renderHome();
  if (target.dataset.lecture) renderLecture(target.dataset.lecture);
  if (target.dataset.mode) startQuiz(target.dataset.mode);
  if (target.dataset.view === "summary") renderSummary();
  if (target.dataset.view === "weak") renderWeakTopics();
  if (target.classList.contains("choice-button")) answerMcq(Number(target.dataset.answer));
  if (target.classList.contains("true-false-button")) answerTf(target.dataset.tf === "true");
  if (target.id === "revealAnswer") revealShortAnswer();
  if (target.id === "markCorrect") markShortAnswer(true);
  if (target.id === "markWrong") markShortAnswer(false);
  if (target.id === "nextQuestion") nextQuestion();
  if (target.id === "clearWeak") clearWeakTopics();
});

renderHome();
