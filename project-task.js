/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) {
  try {
    // TODO: Add input validation here
    let nameInvalid = (typeof fileName !== "string" || fileName.trim() === "" || !fileName.endsWith('.txt') || !isNaN(Number(fileName)));
    let fileDataInvalid = (typeof fileData !== "string" || fileData.trim() === "");

    if (nameInvalid){

      throw new Error (`File name may be missing or the Data Type is not correct. Please review "${fileName}" and try again`);

    }
    if (fileDataInvalid){
      console.log("Opening resources...");
      throw new Error("File does not contain a string. Please review the file and try again");

    }

  
    // TODO: Implement simulated file processing here
    console.log("Opening resources...");
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
      
    // TODO: Add simulated file operations (reading/writing)
    console.log(`Reading from file.`);
    console.log(`Writing to file. `);
    
  } catch (err) {
    // TODO: Implement error handling
    console.error(err.message);
  } finally {                 // TODO: Implement a finally block to close resources
       console.log("Closing resources...");
  }
  
}

// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ ReferenceError: File name is missing
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt.pdf", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully
processFile("Mine.txt", "This file has text!"); // ✅ Should process successfully
processFile("Yours.txt", -102); // ❌ TypeError: File data must be a string

