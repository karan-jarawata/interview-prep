Engineering Mastery & System Design
Live Access: https://karan-jarawata.github.io/interview-prep/

This project is a comprehensive roadmap and progress tracker for mastering Backend Engineering. It has evolved from a single System Design guide into a multi-track learning hub, covering everything from Low-Level language internals to High-Level distributed architectures.

📚 Tracks Overview
The repository is divided into two distinct learning modules accessible via the main landing page.

🏗️ Track 1: System Design (LLD & HLD)
Focuses on writing clean, maintainable code and designing scalable systems.

Low-Level Design (LLD): OOP Principles, SOLID, Design Patterns (Strategy, Factory, Observer), and Machine Coding (Parking Lot, Splitwise).

High-Level Design (HLD): Distributed Systems, CAP Theorem, Load Balancers, Caching, Sharding, and Consistent Hashing.

Case Studies: Architecture breakdowns of WhatsApp, Uber, Netflix, and TinyURL.

☕ Track 2: Java & Data Engineering
Focuses on the "engine" of the backend—Language Internals, Frameworks, and Data Persistence.

Java Core (17/21): JVM Internals (Stack vs Heap), Garbage Collection (G1/ZGC), Concurrency (Virtual Threads), and Streams API.

Spring Boot Ecosystem: Dependency Injection, AOP, SecurityFilterChain, Microservices patterns, and Resiliency (Circuit Breakers).

Database Mastery: Advanced SQL (CTEs, Window Functions), ACID Properties, Indexing strategies (B-Tree vs Hash), and Transaction Isolation levels.

🚀 Project Features
Hub Architecture: Centralized landing page directing to specialized learning modules.

Progress Tracking: Automatically saves your progress for each track separately to LocalStorage.

Deep-Dive Notes: Detailed breakdowns of topics with syntax-highlighted code blocks.

Interview Ready: Content structured specifically for SDE-1, SDE-2, and Senior Engineer interviews.

📂 Repository Structure
The project is organized into modular folders to keep contexts separate:

Plaintext
/
├── index.html            # Main Landing Page (The Hub)
├── system-design/        # Module 1: LLD & HLD
│   ├── data/             # JSON data for System Design topics
│   └── index.html        # System Design App
└── java-db/              # Module 2: Java, Spring & SQL
    ├── data/             # JSON data for Java/DB topics
    └── index.html        # Java & DB App
✌️ Contribution
If you spot a wrong pattern, want to improve a definition, or add a new problem, feel free to open a PR.

How to add new content: Content is driven by JSON files located in the data folder of the specific module.

Choose the Module: Navigate to either /system-design or /java-db.

Add the Topic: Open the JSON file in the /data folder (e.g., roadmap.json or lld.json) and add your topic to the relevant group.

Add the Details: Open details.json in that same folder and add the content block using the exact topic title as the key.

"type": "text" allows HTML.

"type": "code" renders syntax-highlighted Java/SQL blocks.


Happy Grinding.

