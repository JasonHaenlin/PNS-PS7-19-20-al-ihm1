import 'package:flutter/material.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/screens/app-page/agenda-page/components/event_list.dart';



class EventPage extends StatelessWidget {

  final List<EventModel> _data;

  EventPage({
    Key key,
    @required List<EventModel> data,
  })  : _data = data,
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return EventList(
      data:_data,
    );
  }
}