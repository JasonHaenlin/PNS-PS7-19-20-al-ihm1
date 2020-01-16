import 'package:polympic/blocs/starter/starter_state.dart';

class StarterBloc {
  StarterState _starter;

  StarterBloc() : _starter = StarterState();

  StarterState get starterBloc => _starter;
}
