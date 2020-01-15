import 'dart:async';

import 'package:flutter/material.dart';
import 'package:polympic/components/timeline/indicator.dart';
import 'package:polympic/components/timeline/timeline_tab.dart';
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
  void setState(fn) {
    if (mounted) {
      super.setState(fn);
    }
  }

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
    DateTime current = DateTime(2022, 1, 5, 13, 30);
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
