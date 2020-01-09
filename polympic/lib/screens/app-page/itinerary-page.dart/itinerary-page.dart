import 'package:flutter/material.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/screens/app-page/preference-page/preference-sport.dart';

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
              icon: Icon(Icons.edit_attributes, size: 40),
              onPressed: () => navigateToPage(context, PreferenceSport())),
        ],
      ),
    );
  }
}
