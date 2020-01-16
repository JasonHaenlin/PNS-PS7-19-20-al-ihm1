import 'package:flutter_test/flutter_test.dart';
import 'package:gherkin/gherkin.dart';

class GivenSurPageAgenda extends Given1 {
  @override
  Future<void> executeStep(input1) {
    final locator = find.byWidget(input1);
    return null;
  }

  @override
  RegExp get pattern => RegExp(r"Je suis sur la page agenda");
}
