import 'dart:convert';

import 'package:polympic/mocks/itinerary_mock.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/services/category_service.dart';
import 'package:http/http.dart' as http;

class ItineraryService {
  Future<List<ItineraryModel>> getData() async {
    final tags = await categoryService.getData();
    String params = '';
    for (var t in tags) {
      if (t.added) {
        params += t.name + ',';
      }
    }
    print("aaa?");
    final response = await http
        .get('https://polympic.otakedev.com/itineraries?prefs=' + params);
    print("aaad?");
    if (response.statusCode == 200) {
      Iterable list = json.decode(response.body);
      dynamic data =
          list.map((model) => ItineraryModel.fromMap(model)).toList();
      return data;
    } else {
      throw Exception('Failed to load post');
    }
  }
}

ItineraryService itineraryService = ItineraryService();
