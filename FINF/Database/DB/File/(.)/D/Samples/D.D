// Start of script
import std.stdio;

void main() {
    int multiplier = 10;
    int scaled(int x) { return x * multiplier; }

    foreach (i; 0 .. 10) {
        writefln("Hello, world %d! scaled = %d", i, scaled(i));
    }
}
// Sample D programming language file
/* File info
* File type: D source code (*.d)
* File version: 1 (2021, Wednesday, December 1st at 8:21 pm)
* Line count (including blank lines and compiler line): 19
*/
// End of script
