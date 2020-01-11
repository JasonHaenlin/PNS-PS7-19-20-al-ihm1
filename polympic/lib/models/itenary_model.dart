import 'package:flutter/material.dart';

class ItineraryModel {
  final String label;
  final String description;
  final int beginDate;
  final int endDate;
  final List<dynamic> events;

  ItineraryModel({
    @required this.label,
    @required this.description,
    @required this.beginDate,
    @required this.endDate,
    @required this.events,
  })  : assert(label != null),
        assert(description != null),
        assert(beginDate != null),
        assert(endDate != null),
        assert(events != null);

  ItineraryModel.fromMap(Map<String, dynamic> json)
      : label = json['label'],
        description = json['description'],
        beginDate = json['beginDate'],
        endDate = json['endDate'],
        events = json['events'];

  Map<String, dynamic> toMap() => {
        "label": label,
        "description": description,
        "endDate": endDate,
        "beginDate": beginDate,
        "events": events,
      };
}
