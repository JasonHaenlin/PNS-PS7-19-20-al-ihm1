import 'dart:convert';

import 'package:http/http.dart' show Client;
import 'package:polympic/core/storage.dart';
import 'package:polympic/models/category_model.dart';

class CategoryService {
  Client client;

  CategoryService({Client client}) {
    this.client = client ?? Client();
    print('stop');
  }

  List<CategoryModel> _categories = List();

  Future<List<CategoryModel>> getData([tags]) async {
    String params = _buildParams(tags);
    final response = await client
        .get('https://polympic.otakedev.com/preferences?select=' + params);
    Iterable list = json.decode(response.body);
    dynamic data = list.map((model) => CategoryModel.fromMap(model)).toList();
    if (response.statusCode == 200) {
      for (CategoryModel d in data) {
        String check = await readStorage(key: d.name, nullReturnValue: 'false');
        d.added = check == 'true';
      }
      _categories = data;
      return data;
    } else {
      throw Exception('Failed to load post');
    }
  }

  String _buildParams(tags) {
    String params = '';
    if (tags != null) {
      for (dynamic t in tags) {
        params += t + ',';
      }
    }
    return params;
  }

  void saveChange(CategoryModel category, String value) async {
    await writeStorage(key: category.name, value: value);
  }

  List<CategoryModel> get categories => _categories;
}

CategoryService categoryService = CategoryService();
