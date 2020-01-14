grammar polygram;

//@header{const produceCode = require("polygram")}

// parser rules :

program:
    FOREACH subject statement+;

subject:
        PROGRAM
    |   EVENT
    ;

statement:
        action
    |   condition
    ;

condition:
    WHEN bool THEN statement+;

action:
    DISPLAY;

bool:
	IDENTIFIER
	| number GT number
	| number LT number
	| number EQ number
	| number GE number
	| number LE number
	| number NE number
	| bool AND bool
	| bool OR bool
	| NOT bool;

number:
	IDENTIFIER
	| NUMBER
	| number '+' number
	| number '-' number
	| number '*' number
	| number '/' number;

// lexer rules :

PROGRAM:
    'program';

DISPLAY:
    'display';

EVENT:
    'event';

IDENTIFIER:
    [A-Z]+[A-Z0-9]+;

FOREACH:
    'for each';

NUMBER:
    '-'? [0-9]+ ( ',' | '.')? [0-9]*;

AND:
    'and';

OR:
    'or';

NOT:
    'not';

GT:
    '>';

LT:
    '<';

GE:
    '>=';

LE:
    '<=';

EQ:
    '=';

NE:
    '!=';

WHEN:
    'when';

THEN:
    'then';

EOL:
    [\r\n]+ -> skip;

WS:
    [ \t]+ -> skip;

COMMENT:
    '//' .*? EOL -> skip;
