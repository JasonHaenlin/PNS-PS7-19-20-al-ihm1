import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:polympic/components/progress/customProgressIndicator.dart';

main() {
  testWidgets(
      'custom progress indicator test (simple test to try to understand flutter test)',
      (WidgetTester tester) async {
    await tester.pumpWidget(CustomProgressIndicator());

    final Finder toggleImage = find.byType(Image);
    final Finder circProg = find.byType(CircularProgressIndicator);

    expect(toggleImage, findsNWidgets(1));
    expect(circProg, findsNWidgets(1));
  });
}
