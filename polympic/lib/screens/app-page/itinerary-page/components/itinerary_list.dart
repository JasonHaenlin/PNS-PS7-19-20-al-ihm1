import 'package:flutter/material.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/screens/app-page/itinerary-page/components/itinerary_card.dart';

class ItineraryList extends StatelessWidget {
  const ItineraryList({
    Key key,
    @required List<ItineraryModel> data,
  })  : _data = data,
        super(key: key);

  final List<ItineraryModel> _data;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView.builder(
        itemCount: _data.length,
        itemBuilder: (BuildContext context, int index) {
          return ItineraryCard(data: _data[index]);
        },
      ),
    );
  }
}
