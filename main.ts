/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-12-07
 * @fileoverview This program prompts the user to enter four lines of text and prints them in reverse order.
 */

// Prompt user for four lines
const line1: string | null = prompt("Enter line 1:");
const line2: string | null = prompt("Enter line 2:");
const line3: string | null = prompt("Enter line 3:");
const line4: string | null = prompt("Enter line 4:");

// Display the lines in reverse order
console.log(line4 ?? "");
console.log(line3 ?? "");
console.log(line2 ?? "");
console.log(line1 ?? "");

console.log("\nDone.");
