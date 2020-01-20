grammar Polygram;

//@header {package polympic;}

// parser rules :

program:
        sub_program_programs
    |   sub_program_events+
    ;

sub_program_programs:
        CONCERNING PROGRAMS statement+
    ;

sub_program_events:
        CONCERNING subject_events statement+
    ;

subject_events:
    |   PREFS
    |   EVENTS
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
    |   bool_cmp
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

bool_cmp:
        IS IDENTIFIER
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

PROGRAMS:
    'itinerary steps';

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

EVENTS:
    'all events';

PREFS:
        'events matching preferences'
    |   'preferences'
    ;

CONCERNING:
    'concerning';

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

