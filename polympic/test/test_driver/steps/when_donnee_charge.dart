import 'package:flutter_test/flutter_test.dart';
import 'package:gherkin/gherkin.dart';

class WhenDonneeCharge extends When2 {
  @override
  Future<void> executeStep(input1, input2) {
    // TODO: implement executeStep
    return null;
  }

  @override
  RegExp get pattern => RegExp(r"Les données sont chargés");
}
