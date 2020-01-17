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
        DISPLAY
    |   MARK_AS place_state
    ;

place_state:
        IMPORTANT
    ;


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

/*ident_cmp:
      IDENTIFIER GT IDENTIFIER
    | IDENTIFIER LT number
    | IDENTIFIER EQ number
    | IDENTIFIER GE number
    | IDENTIFIER LE number
    | IDENTIFIER NE number
    | number LT IDENTIFIER
        | IDENTIFIER EQ number
        | IDENTIFIER GE number
        | IDENTIFIER LE number
        | IDENTIFIER NE number*/

bool_cmp:
        OR bool
    |   AND bool
    ;

number:
	IDENTIFIER
	| NUMBER
	| number PLUS number
	| number MINUS number
	| number MUL number
	| number DIV number
	;

// lexer rules :

PROGRAM:
    'program';

DISPLAY:
    'display';

MUL:
    '*';

DIV:
    '/';

PLUS:
    '+';

MINUS:
    '-';

EVENT:
    'event';

FOREACH:
    'for each';

NUMBER:
    '-'? [0-9]+ ( ',' | '.')? [0-9]*;

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

AND:
    'and';

OR:
    'or';

MARK_AS:
    'mark as';

WHEN:
    'when';

THEN:
    'then';

IMPORTANT:
    'important'
    ;

EOL:
    [\r\n]+ -> skip;

COMMENT:
    '//'~('\r'|'\n')* -> skip;

WS:
    [ \t]+ -> skip;

IDENTIFIER:
    [a-zA-Z][_a-zA-Z0-9]*;
