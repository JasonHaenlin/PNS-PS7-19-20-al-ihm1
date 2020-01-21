import 'package:flutter/material.dart';

class ItineraryModel {
  final List<dynamic> events;

  ItineraryModel({
    @required this.events,
  }) : assert(events != null);

  ItineraryModel.fromMap(Map<String, dynamic> json) : events = json['events'];

  Map<String, dynamic> toMap() => {
        "events": events,
      };
}
