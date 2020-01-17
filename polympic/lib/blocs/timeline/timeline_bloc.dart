import 'package:polympic/blocs/timeline/timeline_state.dart';

class TimelineBloc {
  TimelineState _timeline;

  TimelineBloc() : _timeline = TimelineState();

  TimelineState get timelineBloc => _timeline;
}
