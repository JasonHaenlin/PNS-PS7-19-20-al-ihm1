import 'package:flutter/material.dart';
import 'package:polympic/core/utils.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/screens/app-page/itinerary-page/itinerary/itinerary.dart';
import 'package:polympic/theme/colors.dart';

class ItineraryCard extends StatelessWidget {
  const ItineraryCard({
    Key key,
    @required this.data,
  }) : super(key: key);

  final ItineraryModel data;

  @override
  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width * 0.6;

    return Container(
      decoration: BoxDecoration(
        border: Border(
          bottom: BorderSide(
            width: 0.3,
            color: Colors.grey,
          ),
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.fromLTRB(20, 10, 20, 10),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                Text(
                  data.label,
                  style: TextStyle(
                    color: kColorPrimary,
                    fontWeight: FontWeight.bold,
                    fontSize: 20,
                  ),
                ),
                SizedBox(height: 8.0),
                Container(
                  width: _width,
                  child: Text(
                    _description(data.description),
                    style: TextStyle(color: kColorAccent, fontSize: 16),
                  ),
                ),
                SizedBox(height: 8.0),
                Text(
                  "${timestampToDateString(data.beginDate)} - ${timestampToDateString(data.endDate)}",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 14,
                    color: kColorSecondaryText,
                  ),
                ),
              ],
            ),
            IconButton(
              icon: Icon(Icons.navigation),
              onPressed: () => Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) => Itinerary(data: _passEvent())),
              ),
              color: kColorAccent,
            ),
          ],
        ),
      ),
    );
  }

  _passEvent() {
    return data.events
        .map((es) => es.map((e) => EventModel.fromMap(e)).toList())
        .toList();
  }
}

String _description(List<dynamic> description) {
  String msg = "";
  for (var i = 0; i < description.length; i++) {
    msg += description[i] + " - ";
  }
  return msg;
}
