import 'package:polympic/blocs/location/location_state.dart';

class LocationBloc {
  LocationState _location;

  LocationBloc() : _location = LocationState();

  LocationState get locationBloc => _location;
}
