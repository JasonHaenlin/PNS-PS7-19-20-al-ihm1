import 'package:polympic/blocs/basic/event-bloc/event_state.dart';

class EventBloc {
  EventState _event;

  EventBloc() : _event = EventState();

  EventState get eventBloc => _event;
}