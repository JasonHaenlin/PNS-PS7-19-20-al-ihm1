import 'dart:convert';

import 'package:http/http.dart' show Client;
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/services/category_service.dart';

class ItineraryService {
  Client client;

  ItineraryService({Client client}) {
    this.client = client ?? Client();
  }

  Future<List<ItineraryModel>> getData() async {
    final tags = categoryService.categories;
    String params = '';
    for (var t in tags) {
      if (t.added) {
        params += t.name + ',';
      }
    }
    final response = await client
        .get('https://polympic.otakedev.com/itineraries?prefs=' + params);
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
