grammar polygram;

program:
    FOREACH subject EOL statement* EOF;

subject:
    PROGRAM;

statement:
        EOL
    |   action
    |   WHEN expression THEN action
    ;

expression:
        ( NUMBER | IDENTIFIER) '>' ( NUMBER | IDENTIFIER )
    |   ( NUMBER | IDENTIFIER) '<' ( NUMBER | IDENTIFIER )
    |   ( NUMBER | IDENTIFIER) '=' ( NUMBER | IDENTIFIER )
    |   expression AND expression
    |   expression OR expression
    ;

action:
    'display';


CONCERNS:
    'concerns';

PROGRAM:
    'program';

IDENTIFIER:
    'score';

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
    [ \t] + -> skip;