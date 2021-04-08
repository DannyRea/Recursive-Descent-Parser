# Recursive-Descent-Parser
A top-down lexical analyzer determining whether or not a string of characters based off a specific expression and a set of characters.

Expression used: 
EXP ::= EXP + TERM | EXP - TERM | TERM
TERM ::= TERM * FACTOR | TERM / FACTOR | FACTOR
FACTOR ::= ( EXP ) | DIGIT
DIGIT ::= 0 | 1 | 2 | 3

Valid tokens:
[0,1,2,3,(,),+,-,*,/].

For usage and implementation:
http://athena.ecs.csus.edu/~read/
