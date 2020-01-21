import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:mockito/mockito.dart';
import 'package:polympic/config/env_config.dart';
import 'package:polympic/mocks/itinerary_mock.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/services/category_service.dart';
import 'package:polympic/services/itinerary_service.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:test/test.dart';

class MockClient extends Mock implements http.Client {}

main() {
  group('itinerary fetch test', () {
    test('fetch the data from the mocked api', () async {
      SharedPreferences.setMockInitialValues({});
      envConfig.apiBaseUrl = 'mock/';
      final client = MockClient();
      ItineraryService serv = ItineraryService(client: client);

      when(client.get('mock/itinerary')).thenAnswer((_) async =>
          http.Response(json.encode(ITINERARY_MOCK).toString(), 200));
      expect(await serv.getData(), const TypeMatcher<ItineraryModel>());
    });

    test('fetch with one parameter starting from the first', () async {
      SharedPreferences.setMockInitialValues({
        'Football': true,
        'Rugby': false,
        'Tennis': true,
      });
      await categoryService.fetchMockedData('sport', false);

      envConfig.apiBaseUrl = 'mock/';
      final client = MockClient();
      ItineraryService serv = ItineraryService(client: client);

      when(client.get('mock/itinerary?sport=Football,Tennis,')).thenAnswer(
          (_) async =>
              http.Response(json.encode(ITINERARY_MOCK).toString(), 200));

      expect(await serv.getData(), const TypeMatcher<ItineraryModel>());
    });
    test('fetch with two parameters starting from the first', () async {
      SharedPreferences.setMockInitialValues({
        'Football': true,
        'Rugby': false,
        'Tennis': true,
        'France': true,
        'Japon': true,
        'Italie': false,
      });
      await categoryService.fetchMockedData('sport', false);
      await categoryService.fetchMockedData('country', false);

      envConfig.apiBaseUrl = 'mock/';
      final client = MockClient();
      ItineraryService serv = ItineraryService(client: client);

      when(client.get(
              'mock/itinerary?sport=Football,Tennis,&country=France,Japon,'))
          .thenAnswer((_) async =>
              http.Response(json.encode(ITINERARY_MOCK).toString(), 200));

      expect(await serv.getData(), const TypeMatcher<ItineraryModel>());
    });
    test('fetch with three parameters, two boolean and one integer', () async {
      SharedPreferences.setMockInitialValues({
        'Football': true,
        'Rugby': false,
        'Tennis': true,
        'France': true,
        'Japon': true,
        'Italie': false,
        'Handicap mobile': 3,
      });
      await categoryService.fetchMockedData('sport', false);
      await categoryService.fetchMockedData('country', false);
      await categoryService.fetchMockedData('handicap', 1);

      envConfig.apiBaseUrl = 'mock/';
      final client = MockClient();
      ItineraryService serv = ItineraryService(client: client);

      when(client.get(
              'mock/itinerary?sport=Football,Tennis,&country=France,Japon,&handicap=Handicap mobile:3,'))
          .thenAnswer((_) async =>
              http.Response(json.encode(ITINERARY_MOCK).toString(), 200));

      expect(await serv.getData(), const TypeMatcher<ItineraryModel>());
    });
  });
}
