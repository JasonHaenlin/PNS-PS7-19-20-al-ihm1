import 'package:polympic/blocs/bloc_base.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/services/event_service.dart';

enum EventEvent { fetch, update }

class EventState extends BlocBase<EventEvent, List<EventModel>> {
  EventState() : super(initEvent: EventEvent.fetch);

  @override
  Stream<List<EventModel>> eventToState(EventEvent event, [data]) async* {
    switch (event) {
      case EventEvent.fetch:
        yield await eventService.getData();
        break;
      case EventEvent.update:
        eventService.saveChange(data['event'], data['favorited']);
        break;
      default:
    }
  }
}
