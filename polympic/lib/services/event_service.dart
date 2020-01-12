import 'package:polympic/core/storage.dart';
import 'package:polympic/mocks/event_mock.dart';
import 'package:polympic/models/event_model.dart';

class EventService {
  Future<List<EventModel>> getData() async {
    dynamic data = EVENT_MOCK.map((item) => EventModel.fromMap(item)).toList();

    for (EventModel d in data) {
      String favorite =
          await readStorage(key: d.id, nullReturnValue: 'false');
      d.favorite = favorite == 'true';
    }

    return data;
  }

  void saveChange(EventModel event, String value) async {
    await writeStorage(key: event.id, value: value);
  }
}

EventService eventService = EventService();
