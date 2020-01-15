import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:polympic/core/storage.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/services/category_service.dart';

class EventService {
  Future<List<EventModel>> getData() async {
    final tags = categoryService.categories;
    String params = '';
    for (var t in tags) {
      if (t.added) {
        params += t.name + ',';
      }
    }
    if (params.length > 0) {
      params = '?prefs=' + params;
    }
    final response =
        await http.get('https://polympic.otakedev.com/events' + params);
    if (response.statusCode == 200) {
      Iterable list = json.decode(response.body);
      dynamic data = list.map((model) => EventModel.fromMap(model)).toList();
      for (EventModel d in data) {
        String favorite =
            await readStorage(key: d.id, nullReturnValue: 'false');
        d.favorite = favorite == 'true';
      }
      return data;
    } else {
      throw Exception('Failed to load post');
    }
  }

  void saveChange(EventModel event, String value) async {
    await writeStorage(key: event.id, value: value);
  }
}

EventService eventService = EventService();
