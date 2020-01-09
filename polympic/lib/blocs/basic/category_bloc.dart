import 'package:polympic/blocs/basic/category_state.dart';

class CategoryBloc {
  CategoryState _category;

  CategoryBloc() : _category = CategoryState();

  CategoryState get categoryBloc => _category;
}
