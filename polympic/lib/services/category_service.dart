import 'dart:convert';

import 'package:http/http.dart' show Client;
import 'package:polympic/config/env_config.dart';
import 'package:polympic/core/storage.dart';
import 'package:polympic/mocks/category_mock.dart';
import 'package:polympic/models/category_model.dart';

class CategoryService {
  Client client;

  CategoryService({Client client}) {
    this.client = client ?? Client();
  }

  Map<String, List<CategoryModel>> _categories = Map();

  Future<List<CategoryModel>> getData(tag, defaultValue) async {
    if (envConfig.mocked) {
      return await fetchMockedData(tag, defaultValue);
    }
    final response =
        await client.get(envConfig.apiBaseUrl + 'preferences?select=' + tag);
    Iterable list = json.decode(response.body);
    dynamic data = list.map((model) => CategoryModel.fromMap(model)).toList();
    if (response.statusCode == 200) {
      for (CategoryModel d in data) {
        dynamic currentState =
            await readStorage(d.name, nullReturnValue: 'nop');
        d.state = currentState != 'nop' ? currentState : defaultValue;
      }
      _categories[tag] = data;
      return data;
    } else {
      throw Exception('Failed to load post');
    }
  }

  Future<List<CategoryModel>> fetchMockedData(tag, defaultValue) async {
    dynamic data = CATEGORY_MOCK
        .map((model) => CategoryModel.fromMap(model))
        .toList()
        .where((d) => tag == d.tag)
        .toList();
    for (CategoryModel d in data) {
      dynamic currentState = await readStorage(d.name, nullReturnValue: 'nop');
      d.state = currentState != 'nop' ? currentState : defaultValue;
      _categories[d.tag] = data;
    }
    _categories[tag] = data;
    return data;
  }

  void saveChange(CategoryModel category, dynamic value) async {
    await writeStorage(category.name, value);
  }

  Map<String, List<CategoryModel>> get categories => _categories;
}

CategoryService categoryService = CategoryService();
