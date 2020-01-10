import 'package:flutter/material.dart';
import 'package:polympic/components/timeline.dart';
import 'package:polympic/theme/colors.dart';

class Itinerary extends StatelessWidget {
  const Itinerary({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(backgroundColor: kColorPrimary),
      body: Timeline(
        childrens: <TimelineTab>[
          TimelineTab(
            title: "Match de Football",
            beginDate: DateTime(2020, 1, 7, 8, 00),
            endDate: DateTime(2020, 1, 7, 10, 00),
            dropChildrens: <Widget>[
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                  child: Text("A little Description"),
                ),
              ),
            ],
          ),
          TimelineTab(
            title: "Match de Rugby",
            beginDate: DateTime(2020, 1, 7, 11, 00),
            endDate: DateTime(2020, 1, 7, 12, 00),
            dropChildrens: <Widget>[
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                  child: Text("A little Description"),
                ),
              ),
            ],
          ),
          TimelineTab(
            title: "Match de Tennis",
            beginDate: DateTime(2020, 1, 7, 15, 00),
            endDate: DateTime(2020, 1, 7, 19, 00),
            dropChildrens: <Widget>[
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                  child: Text("A little Description"),
                ),
              ),
            ],
          ),
          TimelineTab(
            title: "Match de Tennis",
            beginDate: DateTime(2020, 1, 7, 19, 00),
            endDate: DateTime(2020, 1, 7, 20, 00),
            dropChildrens: <Widget>[
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                  child: Text("A little Description"),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
