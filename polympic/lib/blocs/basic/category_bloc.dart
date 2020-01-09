import 'package:polympic/blocs/basic/category_state.dart';

class CategoryBloc {
  CategoryState _entry;

  CategoryBloc() : _entry = CategoryState();

  CategoryState get categoryBloc => _entry;
}
