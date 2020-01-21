import 'package:flutter/material.dart';
import 'package:polympic/components/carousel/carousel.dart';
import 'package:polympic/components/timeline/timeline.dart';
import 'package:polympic/components/timeline/timeline_tab.dart';
import 'package:polympic/core/utils.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/models/itenary_model.dart';

class Itinerary extends StatelessWidget {
  const Itinerary({
    Key key,
    @required data,
  })  : _data = data,
        super(key: key);

  final ItineraryModel _data;

  @override
  Widget build(BuildContext context) {
    return Timeline(children: _buildCarousels(_data.events));
  }

  List<Carousel> _buildCarousels(data) {
    List<Carousel> widgets = List();
    for (dynamic c in data) {
      widgets.add(Carousel(
        children: _buildTimelineTabs(c),
      ));
    }
    return widgets;
  }

  List<TimelineTab> _buildTimelineTabs(data) {
    List<TimelineTab> widgets = List();
    data = data.map((model) => EventModel.fromMap(model)).toList();
    for (dynamic e in data) {
      widgets.add(
        TimelineTab(
          title: e.name,
          versus: e.competitors,
          beginDate: formatTimestamp(e.starttime),
          endDate: formatTimestamp(e.endtime),
          descriptions: e.site['name'],
        ),
      );
    }
    return widgets;
  }
}
