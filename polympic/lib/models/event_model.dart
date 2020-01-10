import 'package:flutter/material.dart';

class EventModel{

  final int id;
  final String name;
  final String description;
  final int starthour;
  final int endhour;
  final String place;
  bool favorite;

  EventModel(
    {
      @required this.id,
      @required this.name,
      @required this.description,
      @required this.starthour,
      @required this.endhour,
      @required this.place,
      this.favorite = false
    }
  ) : assert (id != null),
      assert (name != null),
      assert (description != null),
      assert (starthour != null),
      assert (endhour != null),
      assert (place != null);

  EventModel.fromMap(Map<String,dynamic> json) 
    : id = json["id"],
      name = json["name"],
      description = json["description"],
      starthour = json["starthour"],
      endhour = json["endhour"],
      place = json["place"];

  Map<String, dynamic> toMap() => {
        "id": id,
        "name": name,
        "description": description,
        "starthour" : starthour,
        "endhour" : endhour,
        "place" : place
      };

}