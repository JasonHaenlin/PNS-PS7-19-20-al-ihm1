import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:mockito/mockito.dart';
import 'package:polympic/mocks/itinerary_mock.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/services/itinerary_service.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:test/test.dart';

class MockClient extends Mock implements http.Client {}

main() {
  group('itinerary fetch test', () {
    test('test to fetch the data from the mocked api', () async {
      SharedPreferences.setMockInitialValues({});

      final client = MockClient();
      ItineraryService serv = new ItineraryService(client: client);

      when(client.get('https://polympic.otakedev.com/itineraries?prefs='))
          .thenAnswer((_) async =>
              http.Response(json.encode(ITINERARY_MOCK).toString(), 200));
      expect(await serv.getData(), const TypeMatcher<List<ItineraryModel>>());
    });
  });
}
