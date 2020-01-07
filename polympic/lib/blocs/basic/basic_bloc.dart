import 'package:polympic/blocs/basic/basic_state.dart';

class BasicBloc {
  BasicState _entry;

  BasicBloc() : _entry = BasicState();

  BasicState get basicBloc => _entry;
}
