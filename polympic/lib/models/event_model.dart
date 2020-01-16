import 'package:flutter/material.dart';

class EventModel {
  final String id;
  final String name;
  final String description;
  final int starttime;
  final int endtime;
  final String placename;
  final Map<String, dynamic> site;
  final List<dynamic> competitors;
  final int distance;
  bool favorite;

  EventModel(
      {@required this.id,
      @required this.name,
      @required this.description,
      @required this.starttime,
      @required this.endtime,
      @required this.site,
      @required this.competitors,
      @required this.distance,
      this.favorite = false,
      this.placename})
      : assert(id != null),
        assert(name != null),
        assert(description != null),
        assert(starttime != null),
        assert(endtime != null),
        assert(site != null),
        assert(competitors != null),
        assert(distance != null);

  EventModel.fromMap(Map<String, dynamic> map)
      : id = map["id"],
        name = map["name"],
        description = map["description"],
        starttime = map["startTime"],
        endtime = map["endTime"],
        site = map["site"],
        placename = map["site"]["name"],
        competitors = map["versus"],
        distance = map["distance"];

  Map<String, dynamic> toMap() => {
        "id": id,
        "name": name,
        "description": description,
        "startTime": starttime,
        "endTime": endtime,
        "site": site
      };
}
