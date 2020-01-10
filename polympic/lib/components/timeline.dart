import 'dart:async';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:polympic/theme/colors.dart';

enum Status { done, inProgress, waiting }

class Timeline extends StatefulWidget {
  Timeline({
    Key key,
    @required this.childrens,
    this.addDateCompletion = false,
  }) : super(key: key);

  final List<TimelineTab> childrens;
  final bool addDateCompletion;
  final dynamic completed = <TimelineTab, Status>{};

  @override
  _TimelineState createState() => _TimelineState();
}

class _TimelineState extends State<Timeline> {
  @override
  void initState() {
    super.initState();
    for (var tab in this.widget.childrens) {
      this.widget.completed[tab] = Status.waiting;
    }
    updateDate();
    Timer.periodic(
      Duration(seconds: 3),
      (Timer t) => setState(() {
        updateDate();
      }),
    );
  }

  void updateDate() {
    DateTime current = DateTime(2020, 1, 7, 16, 00);
    for (var tab in this.widget.childrens) {
      bool beforeBegin = tab.beginDate.isBefore(current);
      bool beforeEnd = tab.endDate.isBefore(current);
      if (beforeBegin && beforeEnd) {
        this.widget.completed[tab] = Status.done;
      } else if (beforeBegin) {
        this.widget.completed[tab] = Status.inProgress;
      } else {
        this.widget.completed[tab] = Status.waiting;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView.builder(
        itemBuilder: (BuildContext context, int index) {
          return Stack(
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.only(left: 50.0),
                child: Card(
                  margin: EdgeInsets.all(20.0),
                  child: Container(
                    width: double.infinity,
                    child: this.widget.childrens[index],
                  ),
                ),
              ),
              Line(),
              Indicator(
                status: this.widget.completed[this.widget.childrens[index]],
              ),
            ],
          );
        },
        itemCount: this.widget.childrens.length,
      ),
    );
  }
}

class Indicator extends StatelessWidget {
  const Indicator({
    Key key,
    this.status = Status.waiting,
    this.colorBefore = kColorAccent,
    this.colorAfter = kColorSecondary,
  })  : assert(status != null),
        super(key: key);

  final Status status;
  final Color colorBefore;
  final Color colorAfter;

  static dynamic icons = <Status, IconData>{
    Status.done: Icons.check_circle_outline,
    Status.waiting: Icons.radio_button_unchecked,
    Status.inProgress: Icons.hourglass_empty,
  };

  static dynamic colors = <Status, Color>{
    Status.done: kColorPrimary,
    Status.waiting: kColorPrimary,
    Status.inProgress: kColorSecondary,
  };

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 30,
      left: 15.0,
      child: Container(
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: Colors.white,
        ),
        child: Container(
          margin: EdgeInsets.all(5.0),
          height: 30.0,
          width: 30.0,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: colors[status],
          ),
          child: Icon(
            icons[status],
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}

class Line extends StatelessWidget {
  const Line({
    Key key,
    this.color = kColorTextIcon,
    this.status = Status.done,
  }) : super(key: key);

  final Color color;
  final Status status;

  static dynamic colors = <Status, Color>{
    Status.done: kColorPrimary,
    Status.waiting: kColorSecondary,
    Status.inProgress: kColorValidate,
  };

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 0.0,
      bottom: 0.0,
      left: 35.0,
      child: Container(
        height: double.infinity,
        width: 2.0,
        color: colors[status],
      ),
    );
  }
}

class Tile extends StatelessWidget {
  const Tile({
    Key key,
    @required this.childrens,
  }) : super(key: key);

  final List<Widget> childrens;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      direction: Axis.vertical,
      spacing: 8.0,
      runSpacing: 4.0,
      children: this.childrens,
    );
  }
}

class TimelineTab extends StatelessWidget {
  const TimelineTab({
    Key key,
    @required this.title,
    @required this.beginDate,
    @required this.endDate,
    @required this.dropChildrens,
  }) : super(key: key);

  final String title;
  final DateTime beginDate;
  final DateTime endDate;
  final List<Widget> dropChildrens;

  @override
  Widget build(BuildContext context) {
    final date = DateFormat.Hm();
    return ExpansionTile(
      title: Tile(
        childrens: <Widget>[
          Text(
            this.title,
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: kColorPrimaryText,
            ),
          ),
          Text(
            date.format(this.beginDate) + " - " + date.format(this.endDate),
            style: TextStyle(fontWeight: FontWeight.w400),
          ),
        ],
      ),
      children: this.dropChildrens,
    );
  }
}
