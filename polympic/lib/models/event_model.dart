import 'package:flutter/material.dart';

class EventModel {
  final String id;
  final String name;
  final String img;
  final String description;
  final int starttime;
  final int endtime;
  final String placename;
  final String status;
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
      @required this.img,
      @required this.site,
      @required this.status,
      @required this.competitors,
      @required this.distance,
      this.favorite = false,
      this.placename})
      : assert(id != null),
        assert(name != null),
        assert(description != null),
        assert(starttime != null),
        assert(endtime != null),
        assert(img != null),
        assert(site != null),
        assert(competitors != null),
        assert(status != null),
        assert(distance != null);

  EventModel.fromMap(Map<String, dynamic> map)
      : id = map["id"],
        name = map["name"],
        description = map["description"],
        starttime = map["startTime"],
        endtime = map["endTime"],
        site = map["site"],
        placename = map["site"]["name"],
        status = map["status"],
        competitors = map["versus"],
        img = map["img"],
        distance = map["distance"];

  Map<String, dynamic> toMap() => {
        "id": id,
        "name": name,
        "description": description,
        "startTime": starttime,
        "endTime": endtime,
        "img": img,
        "site": site,
        "status": status,
      };
}
