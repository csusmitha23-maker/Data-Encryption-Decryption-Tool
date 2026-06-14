 # 🔐 Data Encryption and Decryption Tool

A simple and secure **Data Encryption and Decryption Tool** developed using **Python** and **AES Cryptography**. This project allows users to encrypt and decrypt text messages and files, ensuring confidentiality and protection of sensitive information.

---

## 📌 Project Overview

In today's digital world, data security is a major concern. This project provides a practical implementation of cryptographic techniques to secure information during storage and transmission.

The application uses the **Advanced Encryption Standard (AES)** algorithm to convert readable data (plaintext) into encrypted data (ciphertext) and vice versa.

---

## 🎯 Objectives

* Encrypt sensitive text messages.
* Decrypt encrypted messages securely.
* Protect files from unauthorized access.
* Demonstrate practical cryptography concepts.
* Provide a simple and user-friendly interface.

---

## 🛠️ Technologies Used

| Technology    | Purpose                 |
| ------------- | ----------------------- |
| Python        | Programming Language    |
| PyCryptodome  | Cryptography Library    |
| AES Algorithm | Data Encryption         |
| Base64        | Encoding Encrypted Data |
| VS Code       | Development Environment |

---

## 🔑 Features

* Text Encryption
* Text Decryption
* File Encryption
* File Decryption
* AES-Based Security
* Simple Command-Line Interface
* Fast and Secure Processing

---

## 📂 Project Structure

```text
Data-Encryption-Decryption-Tool/
│
├── encryption.py
├── file_encrypt.py
├── file_decrypt.py
├── sample.txt
├── encrypted.bin
├── decrypted.txt
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/Data-Encryption-Decryption-Tool.git
```

```bash
cd Data-Encryption-Decryption-Tool
```

### Install Dependencies

```bash
pip install pycryptodome
```

or

```bash
pip install -r requirements.txt
```

---

## 🚀 Usage

### Run Text Encryption Program

```bash
python encryption.py
```

### Menu

```text
1. Encrypt Message
2. Decrypt Message
3. Exit
```

### Example

**Input:**

```text
Hello World
```

**Encrypted Output:**

```text
2j7S8f0KjL1Nw6rYlV4dYQ==
```

**Decrypted Output:**

```text
Hello World
```

---

## 📄 File Encryption

To encrypt a file:

```bash
python file_encrypt.py
```

The encrypted data will be stored as:

```text
encrypted.bin
```

---

## 📄 File Decryption

To decrypt a file:

```bash
python file_decrypt.py
```

The original file content will be restored as:

```text
decrypted.txt
```

---

## 🏗️ System Architecture

```text
User
  │
  ▼
Input Message/File
  │
  ▼
AES Encryption
  │
  ▼
Encrypted Data
  │
  ▼
AES Decryption
  │
  ▼
Original Data
```

---

## 📊 Algorithm Used

### AES (Advanced Encryption Standard)

AES is a symmetric encryption algorithm that uses the same key for encryption and decryption.

#### Advantages

* High Security
* Fast Performance
* Widely Accepted Standard
* Suitable for Large Data Encryption

---

## 🧪 Testing

The project was tested for:

* Text Encryption Accuracy
* Text Decryption Accuracy
* File Encryption
* File Decryption
* Invalid Input Handling
* Performance Validation

---

## 📈 Future Enhancements

* GUI using Tkinter
* RSA Encryption Support
* Multi-Factor Authentication
* Cloud Storage Integration
* Digital Signature Support
* Password-Based Key Generation

---

## 🎓 Learning Outcomes

Through this project, the following concepts were learned:

* Cryptography Fundamentals
* AES Encryption
* Python Programming
* File Handling
* Cybersecurity Principles
* Secure Data Transmission

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Create a Pull Request

---

## 📚 References

1. NIST AES Standard Documentation
2. Python Cryptography Documentation
3. PyCryptodome Documentation
4. William Stallings – Cryptography and Network Security
5. OWASP Security Guidelines

---

## 👩‍💻 Author

**Susmitha C**

Internship Project – Data Encryption and Decryption Tool

---

## 📜 License

This project is developed for **educational and internship purposes**. Feel free to use and modify it for learning and academic projects.
