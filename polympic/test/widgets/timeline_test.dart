import 'package:flutter_test/flutter_test.dart';

main() {
  testWidgets('timeline test', (WidgetTester tester) async {
    // await tester.pumpWidget(Material(
    //   child: Timeline(
    //     childrens: [
    //       TimelineTab(
    //         dropChildrens: <Widget>[Text('ok')],
    //         beginDate: DateTime(2022, 9, 7, 10, 30),
    //         endDate: DateTime(2022, 9, 7, 12, 30),
    //         title: 'first title',
    //         versus: ['1', '2'],
    //       ),
    //       TimelineTab(
    //         dropChildrens: <Widget>[Text('ok')],
    //         beginDate: DateTime(2022, 9, 7, 13, 30),
    //         endDate: DateTime(2022, 9, 7, 17, 30),
    //         title: 'second title',
    //         versus: ['3', '4'],
    //       )
    //     ],
    //   ),
    // ));

    // final Finder toggleAllTabs = find.descendant(
    //   of: find.byType(Timeline),
    //   matching: find.byType(TimelineTab),
    // );

    // final Finder toggleAllTabs = find.byType(TimelineTab);

    // expect(toggleAllTabs, findsNWidgets(1));
  });
}
