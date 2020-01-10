import 'package:polympic/blocs/bloc_base.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/services/category_service.dart';

enum CategoryEvent { fetch, update }

class CategoryState extends BlocBase<CategoryEvent, List<CategoryModel>> {
  CategoryState() : super(initEvent: CategoryEvent.fetch);

  @override
  Stream<List<CategoryModel>> eventToState(CategoryEvent event, [data]) async* {
    switch (event) {
      case CategoryEvent.fetch:
        yield await categoryService.getData();
        break;
      case CategoryEvent.update:
        categoryService.saveChange(data['category'], data['checked']);
        break;
      default:
    }
  }
}
