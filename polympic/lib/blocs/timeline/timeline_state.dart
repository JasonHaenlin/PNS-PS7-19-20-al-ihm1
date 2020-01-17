import 'dart:async';

import 'package:polympic/blocs/bloc_base.dart';

enum TimelineEvent { done, inProgress, waiting, start, emit }
enum Status { done, inProgress, waiting }

class TimelineState extends BlocBase<TimelineEvent, Status> {
  Timer timer;

  TimelineState() : super(seed: Status.waiting);

  @override
  Stream<Status> eventToState(TimelineEvent event, [data]) async* {
    switch (event) {
      case TimelineEvent.done:
        yield Status.done;
        break;
      case TimelineEvent.inProgress:
        yield Status.inProgress;
        break;
      case TimelineEvent.waiting:
        yield Status.waiting;
        break;
      case TimelineEvent.emit:
        yield update(data['beginDate'] ?? 0, data['endDate'] ?? 0);
        break;
      case TimelineEvent.start:
        final bTime = data['beginDate'] ?? 0;
        final eTime = data['endDate'] ?? 0;
        timer.cancel();
        timer = Timer.periodic(
          Duration(seconds: 5),
          (Timer t) => eventToState(
              TimelineEvent.emit, {'beginDate': bTime, 'endDate': eTime}),
        );
        break;
      default:
    }
  }

  Status update(DateTime bDate, DateTime eDate) {
    DateTime current = DateTime(2022, 1, 5, 13, 30);
    bool beforeBegin = bDate.isBefore(current);
    bool beforeEnd = eDate.isBefore(current);
    if (beforeBegin && beforeEnd) {
      return Status.done;
    }
    if (beforeBegin) {
      return Status.inProgress;
    }
    return Status.waiting;
  }
}
