grammar polygram;

program:
    FOREACH WS subject EOL statement;

subject:
        PROGRAM
    |   EVENT
    ;

statement:
        EOL
    |   expression EOL
    |   func_decl
    |   WHEN WS expression EOL THEN WS statement
    |   variable_prototype EOL
    |   DISP EOL
    |   statement_list
    ;

statement_list:
        statement_list statement
    |   EOL
    ;

expression:
        NUMBER
    |   variable_prototype
    |   expression  '>'  expression
    |   expression  '<'  expression
    |   expression  '='  expression
    |   expression  '>='  expression
    |   expression  '<='  expression
    |   expression  '!='  expression
    |   expression  AND  expression
    |   expression  OR  expression
    ;

func_decl:
    DEFINITION  variable_prototype  ':'  EOL statement
    ;

variable_prototype:
    IDENTIFIER;

DISP:
    'display';

DEFINITION:
    'define';

CONCERNS:
    'CONCERNS';

PROGRAM:
    'PROGRAM'
    ;

EVENT:
    'EVENT'
    ;

IDENTIFIER:
    [a-zA-Z][_a-zA-Z0-9]*
    ;

FOREACH:
    'for each';

NUMBER:
    '-'?[0-9]+( ',' | '.' )?[0-9]*;

AND:
    'and';

OR:
    'or';

WHEN:
    'when';

THEN:
    'then';

EOL:
    [\r\n]+;

WS:
        [ \t]+ -> skip
    ;

COMMENT:
    '//'.*? EOL -> skip
    ;
