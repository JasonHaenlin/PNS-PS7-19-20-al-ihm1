import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:polympic/core/storage.dart';
import 'package:polympic/models/category_model.dart';

class CategoryService {
  Future<List<CategoryModel>> getData([tags]) async {
    String params = '';
    for (var t in tags) {
      params += t + ',';
    }
    final response = await http
        .get('https://polympic.otakedev.com/preferences?select=' + params);
    Iterable list = json.decode(response.body);
    dynamic data = list.map((model) => CategoryModel.fromMap(model)).toList();
    if (response.statusCode == 200) {
      for (CategoryModel d in data) {
        String check = await readStorage(key: d.name, nullReturnValue: 'false');
        d.added = check == 'true';
      }
      return data;
    } else {
      throw Exception('Failed to load post');
    }
  }

  void saveChange(CategoryModel category, String value) async {
    await writeStorage(key: category.name, value: value);
  }
}

CategoryService categoryService = CategoryService();
