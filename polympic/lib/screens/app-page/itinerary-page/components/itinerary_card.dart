import 'package:flutter/material.dart';
import 'package:polympic/core/utils.dart';
import 'package:polympic/theme/colors.dart';

class ItineraryCard extends StatelessWidget {
  const ItineraryCard({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
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
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Text(
              "itinerary.name",
              style: TextStyle(
                color: kColorPrimary,
                fontWeight: FontWeight.bold,
                fontSize: 24,
              ),
            ),
            SizedBox(height: 8.0),
            Text(
              "itinerary.description",
              style: TextStyle(color: kColorAccent, fontSize: 20),
            ),
            SizedBox(height: 8.0),
            Text(
              // "${timestampToDateString(widget.event.starthour)} - ${timestampToDateString(widget.event.endhour)}",
              "beginDate - endDate",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
            ),
          ],
        ),
      ),
    );
  }
}
