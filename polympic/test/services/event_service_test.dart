import 'dart:convert';

import 'package:mockito/mockito.dart';
import 'package:http/http.dart' as http;
import 'package:polympic/config/env_config.dart';
import 'package:polympic/mocks/event_mock.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/services/event_service.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:test/test.dart';

class MockClient extends Mock implements http.Client {}

main() {
  group('Event fetch test', () {
    test('test to fetch the data from api', () async {
      SharedPreferences.setMockInitialValues({});
      envConfig.apiBaseUrl = 'mock/';
      final client = MockClient();
      EventService eventService = new EventService(client: client);
      when(client.get('mock/events')).thenAnswer(
          (_) async => http.Response(json.encode(EVENT_MOCK).toString(), 200));
      expect(
          await eventService.getData(), const TypeMatcher<List<EventModel>>());
    });
  });
}
