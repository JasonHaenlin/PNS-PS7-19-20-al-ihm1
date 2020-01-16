import 'package:test/test.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  group('Category storage test', () {
    Map<String, String> values = {
      'prefs1': 'true',
      'prefs2': 'false',
      'prefs3': 'true',
    };
    SharedPreferences.setMockInitialValues(values);

    test('', () {});
  });
}
