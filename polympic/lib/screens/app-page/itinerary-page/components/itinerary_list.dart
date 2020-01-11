import 'package:flutter/material.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/screens/app-page/itinerary-page/components/itinerary_card.dart';
import 'package:polympic/theme/colors.dart';

class ItineraryList extends StatelessWidget {
  const ItineraryList({
    Key key,
    @required List<String> data,
  })  : _data = data,
        super(key: key);

  final List<String> _data;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView.builder(
        itemCount: 2,
        itemBuilder: (BuildContext context, int index) {
          return ItineraryCard();
        },
      ),
    );
  }
}
