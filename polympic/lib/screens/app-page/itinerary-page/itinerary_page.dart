import 'package:flutter/material.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/screens/app-page/itinerary-page/components/itinerary_list.dart';
import 'package:polympic/screens/app-page/preference-page/preference_sport.dart';

class ItinerariesPage extends StatelessWidget {
  const ItinerariesPage({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Itinéraires'),
        actions: <Widget>[
          IconButton(
              iconSize: 50.0,
              icon: Icon(Icons.edit_attributes),
              onPressed: () => navigateToPage(context, PreferenceSport())),
        ],
      ),
      body: ItineraryList(data: []),
    );
  }
}
