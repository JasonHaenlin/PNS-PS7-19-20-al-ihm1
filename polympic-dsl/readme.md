# PS7 AL-IHM-1

##DSL project

To compile the project and run the tests :
`mvn clean package`

To compile the project and generate a valid jar, run from the root of the maven project :

`mvn clean compile assembly:single`

After modifying the grammar, you must generate ANTLR files with a visitor structure and no listener :
Download ANTLR jar file then :

`java -jar <path_to_antlr_jar_file> -no-listener -visitor Polygram.g4`

Please note that the generated ANTLR files should be in the polympic.antlr_generated package. They will not be generated in the right place by default.

A documentation of the language can be found at :
[The dedicated language](https://github.com/PNS-PS7and8/PNS-PS7-19-20-pns-ps7-19-20-al-ihm1/wiki/The-dedicated-language)
