grammar polygram;

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
    WHEN bool THEN action;

action:
    DISPLAY;

bool:
        attribute
    |   num_cmp
    |   bool AND bool
    |   bool OR bool
    ;

num_cmp:
        number GT number
    |   number LT number
    |   number EQ number
    |   number GE number
    |   number LE number
    |   number NE number
    ;

number:
        attribute
    |   NUMBER
    |   number '+' number
    |   number '-' number
    |   number '*' number
    |   number '/' number
    ;

attribute:
    IDENTIFIER;

DISPLAY:
    'display';

PROGRAM:
    'program'
    ;

EVENT:
    'event'
    ;

IDENTIFIER:
    [A-Z]+[A-Z0-9]+
    ;

FOREACH:
    'for each';

NUMBER:
    '-'?[0-9]+( ',' | '.' )?[0-9]*;

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
    '//'.*? EOL -> skip;
