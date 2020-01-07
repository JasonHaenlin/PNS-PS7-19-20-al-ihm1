import 'package:polympic/blocs/basic/basic_state.dart';

class BasicBloc {
  BasicState _entry;

  BasicBloc() : _entry = BasicState(null);

  BasicState get basicBloc => _entry;
}
