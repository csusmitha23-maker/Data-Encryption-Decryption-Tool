from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
import base64


class DataEncryptionDecryptionTool:

    def __init__(self):

        self.key = get_random_bytes(16)

    def pad_text(self, text):

        while len(text) % 16 != 0:
            text += " "

        return text

    def encrypt_message(self, message):

        cipher = AES.new(self.key, AES.MODE_ECB)

        padded_message = self.pad_text(message)

        encrypted_bytes = cipher.encrypt(
            padded_message.encode()
        )

        encrypted_text = base64.b64encode(
            encrypted_bytes
        ).decode()

        return encrypted_text

    def decrypt_message(self, encrypted_text):

        cipher = AES.new(self.key, AES.MODE_ECB)

        encrypted_bytes = base64.b64decode(
            encrypted_text
        )

        decrypted_bytes = cipher.decrypt(
            encrypted_bytes
        )

        decrypted_text = decrypted_bytes.decode()

        return decrypted_text.strip()

    def encrypt_file(self, input_file, output_file):

        try:

            with open(input_file, "rb") as file:
                file_data = file.read()

            while len(file_data) % 16 != 0:
                file_data += b' '

            cipher = AES.new(self.key, AES.MODE_ECB)

            encrypted_data = cipher.encrypt(
                file_data
            )

            with open(output_file, "wb") as file:
                file.write(encrypted_data)

            print("File Encrypted Successfully")

        except Exception as error:

            print("Error:", error)

    def decrypt_file(self, encrypted_file, output_file):

        try:

            with open(encrypted_file, "rb") as file:
                encrypted_data = file.read()

            cipher = AES.new(self.key, AES.MODE_ECB)

            decrypted_data = cipher.decrypt(
                encrypted_data
            )

            with open(output_file, "wb") as file:
                file.write(decrypted_data)

            print("File Decrypted Successfully")

        except Exception as error:

            print("Error:", error)

    def display_key(self):

        print("\nEncryption Key:")
        print(self.key.hex())


def main():

    tool = DataEncryptionDecryptionTool()

    while True:

        print("\n")
        print("=" * 50)
        print(" DATA ENCRYPTION AND DECRYPTION TOOL ")
        print("=" * 50)

        print("1. Encrypt Message")
        print("2. Decrypt Message")
        print("3. Encrypt File")
        print("4. Decrypt File")
        print("5. Show Key")
        print("6. Exit")

        choice = input("Enter Choice: ")

        if choice == "1":

            message = input(
                "Enter Message To Encrypt: "
            )

            encrypted_message = tool.encrypt_message(
                message
            )

            print("\nEncrypted Message:")
            print(encrypted_message)

        elif choice == "2":

            encrypted_message = input(
                "Enter Encrypted Message: "
            )

            decrypted_message = tool.decrypt_message(
                encrypted_message
            )

            print("\nDecrypted Message:")
            print(decrypted_message)

        elif choice == "3":

            input_file = input(
                "Enter Input File Name: "
            )

            output_file = input(
                "Enter Encrypted File Name: "
            )

            tool.encrypt_file(
                input_file,
                output_file
            )

        elif choice == "4":

            encrypted_file = input(
                "Enter Encrypted File Name: "
            )

            output_file = input(
                "Enter Output File Name: "
            )

            tool.decrypt_file(
                encrypted_file,
                output_file
            )

        elif choice == "5":

            tool.display_key()

        elif choice == "6":

            print("Program Closed")
            break

        else:

            print("Invalid Choice")


if __name__ == "__main__":
    main()
