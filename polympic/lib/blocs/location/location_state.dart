import 'package:polympic/blocs/bloc_base.dart';

enum LocationEvent { emit }

class LocationState extends BlocBase<LocationEvent, List<double>> {
  @override
  Stream<List<double>> eventToState(LocationEvent event, [data]) {
    // TODO: implement eventToState
    throw UnimplementedError();
  }
}
