import 'package:flutter/material.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/theme/colors.dart';

import 'event_card.dart';

List<EventModel> filteredData;

class EventList extends StatefulWidget {
  EventList({
    Key key,
    @required List<EventModel> data,
  })  : _data = data,
        super(key: key);

  final List<EventModel> _data;

  @override
  _EventListState createState() => _EventListState();
}

class _EventListState extends State<EventList> {
  List<EventModel> filteredData = List();

  @override
  void initState() {
    super.initState();
    filteredData = this.widget._data;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Agenda"),
      ),
      body: Column(
        children: <Widget>[
          // Padding(
          //   padding: const EdgeInsets.all(12.0),
          //   child: TextField(
          //     decoration: InputDecoration(
          //         contentPadding: EdgeInsets.all(10.0),
          //         prefixIcon: Icon(Icons.search),
          //         hintText: "Enter an event name"),
          //     onChanged: (filter) {
          //       setState(() {
          //         this.filteredData = this
          //             .widget
          //             ._data
          //             .where((e) =>
          //                 (e.name.toLowerCase().contains(filter.toLowerCase())))
          //             .toList();
          //       });
          //     },
          //   ),
          // ),
          Expanded(
            child: ListView.builder(
              itemCount: filteredData.length,
              itemBuilder: (BuildContext context, int index) {
                return Column(
                  children: <Widget>[
                    Padding(
                      padding: const EdgeInsets.fromLTRB(20, 10, 20, 10),
                      child: EventCard(event: this.widget._data[index]),
                    ),
                    Divider(thickness: 1.0, color: kColorIcon),
                  ],
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
