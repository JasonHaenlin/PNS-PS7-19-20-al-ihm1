import 'package:shared_preferences/shared_preferences.dart';

Future<String> readStorage({String key, String nullReturnValue = ''}) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  return prefs.getString(key) ?? nullReturnValue;
}

Future<bool> writeStorage({key, value}) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  return prefs.setString(key, value);
}

Future<bool> cleanStorage() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  return prefs.clear();
}
