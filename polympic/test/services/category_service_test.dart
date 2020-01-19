import 'dart:convert';

import 'package:mockito/mockito.dart';
import 'package:http/http.dart' as http;
import 'package:polympic/config/env_config.dart';
import 'package:polympic/mocks/category_mock.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/services/category_service.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:test/test.dart';

class MockClient extends Mock implements http.Client {}

main() {
  group('Category fetch test', () {
    test('test to fetch the data from the mocked api', () async {
      SharedPreferences.setMockInitialValues({});
      envConfig.apiBaseUrl = 'mock/';

      final client = MockClient();
      CategoryService serv = CategoryService(client: client);
      when(client.get('mock/preferences?select=sport')).thenAnswer((_) async =>
          http.Response(json.encode(CATEGORY_MOCK).toString(), 200));
      expect(serv.categories, {});
      expect(await serv.getData('sport', false),
          const TypeMatcher<List<CategoryModel>>());

      expect(
          serv.categories['sport'], const TypeMatcher<List<CategoryModel>>());
      expect(serv.categories['country'], null);
    });
  });
}
