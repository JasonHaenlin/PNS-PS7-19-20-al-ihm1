import 'package:polympic/blocs/bloc_base.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/services/service.dart';

enum CategoryEvent { fetch }

class CategoryState extends BlocBase<CategoryEvent, List<CategoryModel>> {
  CategoryState() : super(initEvent: CategoryEvent.fetch);

  @override
  Stream<List<CategoryModel>> eventToState(CategoryEvent event, [data]) async* {
    switch (event) {
      case CategoryEvent.fetch:
        yield await categoryService.getData();
        break;
      default:
    }
  }
}
