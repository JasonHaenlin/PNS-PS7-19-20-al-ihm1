import 'package:flutter/material.dart';
import 'package:polympic/components/carousel/carousel.dart';
import 'package:polympic/components/timeline/timeline.dart';
import 'package:polympic/components/timeline/timeline_tab.dart';
import 'package:polympic/core/utils.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/theme/colors.dart';

class Itinerary extends StatelessWidget {
  const Itinerary({
    Key key,
    @required data,
  })  : _data = data,
        super(key: key);

  final List<dynamic> _data;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(backgroundColor: kColorPrimary),
      body: Timeline(childrens: _buildCarousels(_data)),
    );
  }

  List<Carousel> _buildCarousels(data) {
    List<Carousel> widgets = List();
    for (dynamic c in data) {
      widgets.add(Carousel(
        childrens: _buildTimelineTabs(c),
      ));
    }
    return widgets;
  }

  List<TimelineTab> _buildTimelineTabs(data) {
    List<TimelineTab> widgets = List();
    data = List<EventModel>.from(data);
    for (dynamic e in data) {
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
                  style: TextStyle(fontSize: 15),
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
