grammar Polygram;

@header {package polympic;}

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
    | number_cmp
    | bool bool_cmp
    ;

number_cmp:
      number GT number
    | number LT number
    | number EQ number
    | number GE number
    | number LE number
    | number NE number
    ;

bool_cmp:
        OR bool
    |   AND bool
    ;

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

COMMENT:
    '//' .*? EOL -> skip;

WS:
    [ \t]+ -> skip;

IDENTIFIER:
    [a-zA-Z][_a-zA-Z0-9]*;
