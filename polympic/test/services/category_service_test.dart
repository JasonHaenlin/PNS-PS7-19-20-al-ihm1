import 'package:mockito/mockito.dart';
import 'package:http/http.dart' as http;
import 'package:polympic/models/category_model.dart';
import 'package:polympic/services/category_service.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:test/test.dart';

class MockClient extends Mock implements http.Client {}

main() {
  group('Category fetch test', () {
    test('test to fetch the data from the api', () async {
      SharedPreferences.setMockInitialValues({});

      final client = MockClient();
      CategoryService serv = new CategoryService(client: client);
      when(client
              .get('https://polympic.otakedev.com/preferences?select=sport,'))
          .thenAnswer((_) async => http.Response(
              '[{"name": "Football","tag": "sport","img": "https://otakedev.com/share/preferences/sports/football.jpg"}]',
              200));

      expect(await serv.getData(['sport']),
          const TypeMatcher<List<CategoryModel>>());

      expect(serv.categories, const TypeMatcher<List<CategoryModel>>());
    });
  });
}
