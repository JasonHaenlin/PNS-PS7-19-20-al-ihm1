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
      expect('true', await readStorage('prefs1'));
      expect('false', await readStorage('prefs2'));
      cleanStorage();
    });

    test('add a key in the storage', () async {
      SharedPreferences.setMockInitialValues({});
      expect(true, await writeStorage('prefs1', 'true'));
      expect(true, await writeStorage('prefs2', 'false'));
      expect('true', await readStorage('prefs1'));
      expect('false', await readStorage('prefs2'));
      expect(true, await writeStorage('prefs2', 'true'));
      expect('true', await readStorage('prefs2'));
      cleanStorage();
      expect('none', await readStorage('prefs2', nullReturnValue: 'none'));
      expect('none', await readStorage('prefs1', nullReturnValue: 'none'));
    });

    test('write and read on dynamic value', () async {
      SharedPreferences.setMockInitialValues({});
      expect(true, await writeStorage('prefs1', true));
      expect(true, await readStorage('prefs1'));
      expect(true, await writeStorage('prefs2', 1));
      expect(1, await readStorage('prefs2'));
      expect(true, await writeStorage('prefs3', 2.0));
      expect(2.0, await readStorage('prefs3'));
      expect(true, await writeStorage('prefs3', '2.0'));
      expect('2.0', await readStorage('prefs3'));
    });
  });
}
