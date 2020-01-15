import 'package:flutter/material.dart';
import 'package:polympic/components/timeline.dart';
import 'package:polympic/core/utils.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/theme/colors.dart';

class Itinerary extends StatelessWidget {
  const Itinerary({
    Key key,
    @required data,
  })  : _data = data,
        super(key: key);

  final List<EventModel> _data;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(backgroundColor: kColorPrimary),
      body: Timeline(childrens: _buildTimelineTabs()),
    );
  }

  List<TimelineTab> _buildTimelineTabs() {
    List<TimelineTab> widgets = List();
    for (var e in _data) {
      widgets.add(
        TimelineTab(
          title: e.name,
          versus: e.competitors,
          beginDate: formatTimestamp(e.starttime),
          endDate: formatTimestamp(e.endtime),
          dropChildrens: <Widget>[
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Container(
                child: Text(
                  e.description,
                  style: TextStyle(fontSize: 13),
                ),
              ),
            ),
          ],
        ),
      );
    }
    return widgets;
  }
}
