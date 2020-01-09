import 'package:polympic/core/storage.dart';
import 'package:polympic/mocks/category_model.dart';
import 'package:polympic/models/category_model.dart';

class Category {
  Future<List<CategoryModel>> getData() async {
    dynamic data =
        CATEGORY_MOCK.map((item) => CategoryModel.fromMap(item)).toList();

    for (CategoryModel d in data) {
      String check = await readStorage(key: d.label);
      d.added = check == 'true';
    }

    return data;
  }

  void saveChange(CategoryModel category, String value) async {
    await writeStorage(key: category.label, value: value);
  }
}

Category categoryService = Category();
