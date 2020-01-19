import 'package:shared_preferences/shared_preferences.dart';

Future<dynamic> readStorage(String key, {String nullReturnValue = ''}) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  return prefs.get(key) ?? nullReturnValue;
}

Future<bool> writeStorage(dynamic key, dynamic value) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  if (value is bool) {
    return prefs.setBool(key, value);
  } else if (value is String) {
    return prefs.setString(key, value);
  } else if (value is int) {
    return prefs.setInt(key, value);
  } else if (value is double) {
    return prefs.setDouble(key, value);
  } else if (value is List<String>) {
    return prefs.setStringList(key, value);
  }
  return null;
}

Future<bool> cleanStorage() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  return prefs.clear();
}

Future<bool> exist(key) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  return prefs.get(key) != null;
}
