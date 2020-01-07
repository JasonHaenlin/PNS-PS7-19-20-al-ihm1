import 'package:polympic/blocs/loading/loading_state.dart';

class LoadingBloc {
  LoadingState _loading;

  LoadingBloc() : _loading = LoadingState();

  LoadingState get loadingBloc => _loading;
}
