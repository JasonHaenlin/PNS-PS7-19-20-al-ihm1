grammar Polygram;

//@header {package polympic;}

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
    WHEN expr THEN statement;

action:
        DISPLAY
    |   MARK_AS place_state
    ;

place_state:
        IDENTIFIER;

expr:
        IDENTIFIER
    |   number_cmp
    |   expr expr_cmp
    |   str_cmp
    ;

str_cmp:
        IDENTIFIER IS IDENTIFIER
    ;


number_cmp:
      number GT number
    | number LT number
    | number EQ number
    | number GE number
    | number LE number
    | number NE number
    ;

expr_cmp:
        OR expr
    |   AND expr
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

IS :
    'is';

WHEN:
    'when';

THEN:
    'then';

EOL:
    [\r\n]+ -> skip;

COMMENT:
    '//'~('\r'|'\n')* -> skip;

WS:
    [ \t]+ -> skip;

IDENTIFIER:
    [a-zA-Z][_a-zA-Z0-9]*;

