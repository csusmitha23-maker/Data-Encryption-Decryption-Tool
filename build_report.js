const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  HeadingLevel, PageBreak, LevelFormat, BorderStyle
} = require('docx');
const fs = require('fs');

// Helper: justified body paragraph
function body(text) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { before: 80, after: 160 },
    children: [new TextRun({ text, font: 'Times New Roman', size: 24 })]
  });
}

// Helper: H1 heading (centered, numbered sections)
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    alignment: AlignmentType.LEFT,
    spacing: { before: 280, after: 120 },
    children: [new TextRun({ text, font: 'Arial', size: 28, bold: true })]
  });
}

// Helper: H2 heading
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    alignment: AlignmentType.LEFT,
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, font: 'Arial', size: 26, bold: true })]
  });
}

// Centered paragraph (cover page)
function centered(text, size = 24, bold = false) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 80, after: 80 },
    children: [new TextRun({ text, font: 'Times New Roman', size, bold })]
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function blank() {
  return new Paragraph({ children: [new TextRun('')] });
}

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: 'Times New Roman', size: 24 } }
    },
    paragraphStyles: [
      {
        id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 28, bold: true, font: 'Arial', color: '1F3864' },
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 0 }
      },
      {
        id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 26, bold: true, font: 'Arial', color: '2E5496' },
        paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 1 }
      },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1260, bottom: 1440, left: 1260 }
      }
    },
    children: [
      // ── COVER PAGE ──────────────────────────────────────
      blank(), blank(), blank(),
      centered('INTERNSHIP PROJECT REPORT', 36, true),
      blank(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '1F3864', space: 1 } },
        children: [new TextRun('')]
      }),
      blank(),
      centered('Project Title:', 24, true),
      centered('Data Encryption and Decryption Tool', 28, true),
      blank(), blank(),
      centered('Duration: Internship Project Submission', 24, false),
      pageBreak(),

      // ── CERTIFICATE ──────────────────────────────────────
      h1('CERTIFICATE'),
      body("This is to certify that the internship project titled 'Data Encryption and Decryption Tool' was successfully completed as part of the internship requirements."),
      pageBreak(),

      // ── ACKNOWLEDGEMENT ──────────────────────────────────
      h1('ACKNOWLEDGEMENT'),
      body('I express my sincere gratitude to my organization, mentor, faculty coordinator, and all those who supported me during the internship period.'),
      pageBreak(),

      // ── ABSTRACT ─────────────────────────────────────────
      h1('ABSTRACT'),
      body('The Data Encryption and Decryption Tool is developed to provide secure storage and transmission of information. The application uses AES and RSA cryptographic algorithms to encrypt and decrypt messages and files. The project demonstrates practical cybersecurity concepts including confidentiality, integrity, authentication, and secure communication. The system is designed with a user-friendly interface and can be used in educational, organizational, and commercial environments.'),
      pageBreak(),

      // ── 1. INTRODUCTION ──────────────────────────────────
      h1('1. INTRODUCTION'),
      body('Data security has become one of the most important concerns in the digital era. Organizations store and exchange large amounts of confidential information through networks and cloud platforms. Without proper security mechanisms, sensitive information may be exposed to unauthorized users. Encryption converts readable data into an unreadable form, while decryption restores it using authorized keys. This project provides a practical implementation of cryptographic techniques.'),

      h2('1.1 Company/Internship Overview'),
      body('During the internship, exposure was gained to cybersecurity principles, software development practices, secure coding techniques, and data protection mechanisms. The project was selected to understand how encryption technologies are applied in real-world environments.'),

      h2('1.2 Problem Statement'),
      body('Sensitive information transmitted through networks can be intercepted or modified by attackers. Traditional storage methods may not provide adequate protection. A secure system is required to encrypt and decrypt information efficiently.'),

      h2('1.3 Objectives'),
      body('To develop a secure encryption and decryption tool; implement AES and RSA algorithms; support text and file encryption; evaluate performance and security; and provide a user-friendly application.'),

      h2('1.4 Scope'),
      body('The project supports encryption and decryption of text messages and files. It can be used in educational institutions, businesses, healthcare organizations, banking systems, and cloud environments.'),
      pageBreak(),

      // ── 2. LITERATURE SURVEY ─────────────────────────────
      h1('2. LITERATURE SURVEY'),
      body('Cryptography has evolved significantly over the years. Classical cryptography relied on substitution and transposition techniques. Modern cryptography uses mathematical algorithms such as AES, DES, RSA, ECC, and SHA. AES is widely adopted because of its efficiency and strong security, while RSA is commonly used for secure key exchange and authentication.'),

      h2('2.1 AES Study'),
      body('AES is a symmetric encryption algorithm standardized by NIST. It supports key sizes of 128, 192, and 256 bits. AES provides strong protection against brute-force attacks and is commonly used in banking, government, and cloud applications.'),

      h2('2.2 RSA Study'),
      body('RSA is an asymmetric encryption algorithm based on public and private keys. It relies on the mathematical difficulty of factoring large prime numbers. RSA is widely used for digital signatures and secure communication.'),
      pageBreak(),

      // ── 3. SYSTEM ANALYSIS ───────────────────────────────
      h1('3. SYSTEM ANALYSIS'),
      body('System analysis focuses on identifying requirements and evaluating existing solutions. The proposed system addresses limitations of traditional methods by integrating modern encryption algorithms.'),

      h2('3.1 Existing System'),
      body('Data may be stored in plain text, making it vulnerable to unauthorized access. Existing solutions may be expensive, complex, or limited in functionality.'),

      h2('3.2 Proposed System'),
      body('The proposed system provides secure encryption and decryption using AES and RSA. It supports file handling, key management, and performance comparison.'),

      h2('3.3 Advantages'),
      body('Improved security, confidentiality, ease of use, portability, scalability, and support for multiple file formats.'),
      pageBreak(),

      // ── 4. FEASIBILITY STUDY ─────────────────────────────
      h1('4. FEASIBILITY STUDY'),
      body('The project is technically feasible using Python and open-source cryptography libraries. It is economically feasible due to low development cost and operationally feasible because users can easily interact with the application.'),
      pageBreak(),

      // ── 5. REQUIREMENTS SPECIFICATION ───────────────────
      h1('5. REQUIREMENTS SPECIFICATION'),
      body('Hardware: Intel i3/i5 processor, 4 GB RAM, 500 MB storage. Software: Windows/Linux/macOS, Python, VS Code, Cryptography library, Tkinter GUI framework.'),

      h2('5.1 Functional Requirements'),
      body('User input handling, encryption, decryption, file selection, key generation, result display, and storage of encrypted data.'),

      h2('5.2 Non-Functional Requirements'),
      body('Security, reliability, maintainability, performance, usability, portability, and scalability.'),
      pageBreak(),

      // ── 6. SYSTEM DESIGN ─────────────────────────────────
      h1('6. SYSTEM DESIGN'),
      body('The application consists of Input Module, Encryption Module, Decryption Module, Key Management Module, File Handling Module, and Output Module.'),

      h2('6.1 Architecture'),
      body('User → Input → Encryption Engine → Ciphertext Storage → Decryption Engine → Output.'),

      h2('6.2 Module Description'),
      body('The Input Module collects user data. The Encryption Module converts plaintext into ciphertext. The Decryption Module restores the original data. The File Module manages file operations.'),
      pageBreak(),

      // ── 7. UML DIAGRAMS ──────────────────────────────────
      h1('7. UML DIAGRAMS'),
      body('Use Case Diagram identifies interactions between the user and the system. Class Diagram represents system classes. Sequence Diagram shows message flow. Activity Diagram represents workflow. These diagrams can be inserted during final formatting.'),
      pageBreak(),

      // ── 8. METHODOLOGY ───────────────────────────────────
      h1('8. METHODOLOGY'),
      body('Requirement gathering, system design, algorithm selection, implementation, testing, validation, and documentation were performed sequentially.'),
      pageBreak(),

      // ── 9. ALGORITHMS USED ───────────────────────────────
      h1('9. ALGORITHMS USED'),
      body('AES uses symmetric encryption while RSA uses asymmetric encryption. Both algorithms contribute to secure communication and data protection.'),

      h2('9.1 AES Working'),
      body('Plaintext is divided into blocks and transformed through multiple rounds involving substitution, shifting, mixing, and key addition.'),

      h2('9.2 RSA Working'),
      body('Keys are generated using large prime numbers. Public keys encrypt data and private keys decrypt data.'),

      h2('9.3 AES vs RSA'),
      body('AES is faster and suitable for large files, whereas RSA is computationally intensive but ideal for secure key exchange.'),
      pageBreak(),

      // ── 10. IMPLEMENTATION ───────────────────────────────
      h1('10. IMPLEMENTATION'),
      body('The system was implemented using Python. Cryptographic functions were developed using standard libraries. A graphical interface allows users to select files, enter text, and perform encryption/decryption.'),

      h2('10.1 Development Environment'),
      body('Python, PyCryptodome/Cryptography library, Tkinter GUI, and Visual Studio Code.'),

      h2('10.2 Sample Workflow'),
      body('User enters text → selects AES/RSA → encryption performed → ciphertext displayed → decryption restores original message.'),
      pageBreak(),

      // ── 11. TESTING ──────────────────────────────────────
      h1('11. TESTING'),
      body('Testing ensures that all modules function correctly under different conditions.'),

      h2('11.1 Unit Testing'),
      body('Each module was tested independently.'),

      h2('11.2 Integration Testing'),
      body('Interactions between modules were validated.'),

      h2('11.3 System Testing'),
      body('The entire system was tested as a complete application.'),

      h2('11.4 Security Testing'),
      body('Unauthorized access attempts were simulated to verify protection mechanisms.'),
      pageBreak(),

      // ── 12. RESULTS AND DISCUSSION ───────────────────────
      h1('12. RESULTS AND DISCUSSION'),
      body('The system successfully encrypted and decrypted text and files. AES demonstrated superior performance for large data sizes, while RSA provided secure key exchange capabilities.'),
      pageBreak(),

      // ── 13. APPLICATIONS ─────────────────────────────────
      h1('13. APPLICATIONS'),
      body('Banking, cloud computing, healthcare, military systems, government services, e-commerce platforms, educational institutions, and enterprise security.'),
      pageBreak(),

      // ── 14. CHALLENGES FACED ─────────────────────────────
      h1('14. CHALLENGES FACED'),
      body('Understanding cryptographic concepts, key management, handling file encryption, testing security features, and optimizing performance were key challenges.'),
      pageBreak(),

      // ── 15. LEARNING OUTCOMES ────────────────────────────
      h1('15. LEARNING OUTCOMES'),
      body('Understanding encryption principles, implementing AES and RSA, software development practices, cybersecurity concepts, and testing methodologies.'),
      pageBreak(),

      // ── 16. FUTURE ENHANCEMENTS ──────────────────────────
      h1('16. FUTURE ENHANCEMENTS'),
      body('Cloud integration, mobile application support, digital signatures, biometric authentication, blockchain integration, and multi-factor authentication.'),
      pageBreak(),

      // ── 17. CONCLUSION ───────────────────────────────────
      h1('17. CONCLUSION'),
      body('The internship project successfully demonstrated the implementation of a secure Data Encryption and Decryption Tool. The project provided practical exposure to cryptography, cybersecurity, and software development. The system effectively protects sensitive information and highlights the importance of secure communication in modern computing environments.'),
      pageBreak(),

      // ── REFERENCES ───────────────────────────────────────
      h1('REFERENCES'),
      body('1. William Stallings – Cryptography and Network Security.'),
      body('2. NIST AES Standard.'),
      body('3. RSA Security Publications.'),
      body('4. Python Cryptography Documentation.'),
      body('5. Cybersecurity Journals and Research Papers.'),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/mnt/user-data/outputs/Internship_Report_Corrected.docx', buffer);
  console.log('Done!');
});
