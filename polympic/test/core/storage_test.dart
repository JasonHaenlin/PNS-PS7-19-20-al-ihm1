import 'package:polympic/core/storage.dart';
import 'package:test/test.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() async {
  group('Category storage test', () {
    test('storage should contain the initial values', () async {
      Map<String, String> values = {
        'prefs1': 'true',
        'prefs2': 'false',
        'prefs3': 'true',
      };
      SharedPreferences.setMockInitialValues(values);
      expect('true', await readStorage(key: 'prefs1'));
      expect('false', await readStorage(key: 'prefs2'));
      cleanStorage();
    });

    test('add a key in the storage', () async {
      SharedPreferences.setMockInitialValues({});
      expect(true, await writeStorage(key: 'prefs1', value: 'true'));
      expect(true, await writeStorage(key: 'prefs2', value: 'false'));
      expect('true', await readStorage(key: 'prefs1'));
      expect('false', await readStorage(key: 'prefs2'));
      expect(true, await writeStorage(key: 'prefs2', value: 'true'));
      expect('true', await readStorage(key: 'prefs2'));
      cleanStorage();
      expect('none', await readStorage(key: 'prefs2', nullReturnValue: 'none'));
      expect('none', await readStorage(key: 'prefs1', nullReturnValue: 'none'));
    });
  });
}
