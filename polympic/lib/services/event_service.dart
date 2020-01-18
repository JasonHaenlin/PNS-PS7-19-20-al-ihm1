import 'dart:convert';

import 'package:http/http.dart' show Client;
import 'package:polympic/config/env_config.dart';
import 'package:polympic/core/storage.dart';
import 'package:polympic/mocks/event_mock.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/services/category_service.dart';

class EventService {
  Client client;

  EventService({Client client}) {
    this.client = client ?? Client();
  }
  Future<List<EventModel>> getData() async {
    if (envConfig.mocked) {
      return EVENT_MOCK.map((model) => EventModel.fromMap(model)).toList();
    }
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
    final response = await client.get(envConfig.apiBaseUrl + 'events' + params);
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
      // throw Exception('Failed to load post');
      return [];
    }
  }

  void saveChange(EventModel event, String value) async {
    await writeStorage(key: event.id, value: value);
  }
}

EventService eventService = EventService();
