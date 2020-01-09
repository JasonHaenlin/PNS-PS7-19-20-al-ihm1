import 'package:polympic/mocks/category_model.dart';
import 'package:polympic/models/category_model.dart';

class Category {
  Future<List<CategoryModel>> getData() async {
    // await Future.delayed(const Duration(seconds: 1));
    return CATEGORY_MOCK.map((item) => CategoryModel.fromMap(item)).toList();
  }
}

Category categoryService = Category();
