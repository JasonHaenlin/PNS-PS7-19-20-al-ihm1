Feature: Visualisation des evenements
  Pouvoir visualiser les différents événements liés aux Jeux Olympiques en cours ou qui vont avoir lieux dans la journée. Afin de choisir vers quel événement m’orienter et de choisir mon emploi du temps.

  Scenario: Etant donné des évenements, je veux pouvoir les voir
    Given Je suis sur la page agenda
    When Les données sont chargés
    Then Il doit y avoir 2 évenements
