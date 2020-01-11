import 'package:flutter/material.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/theme/colors.dart';

import 'event_card.dart';

class ListEvents extends StatelessWidget {
  final List<EventModel> _data;

  const ListEvents({
    Key key,
    @required List<EventModel> data,
  })  : _data = data,
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Agenda"),
      ),
      body: ListView.builder(
        itemCount: _data.length,
        itemBuilder: (BuildContext context, int index) {
          return Column(
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 10, 20, 10),
                child: EventCard(event: _data[index]),
              ),
              Divider(thickness: 1.0, color: kColorIcon),
            ],
          );
        },
      ),
    );
  }
}
