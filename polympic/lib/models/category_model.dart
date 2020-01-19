import 'package:flutter/material.dart';

class CategoryModel {
  final String name;
  final String tag;
  final String img;
  dynamic state;

  CategoryModel({
    @required this.name,
    @required this.tag,
    @required this.img,
    this.state,
  })  : assert(name != null),
        assert(tag != null),
        assert(img != null);

  CategoryModel.fromMap(Map<String, dynamic> json)
      : name = json['name'],
        tag = json['tag'],
        img = json['img'];

  Map<String, dynamic> toMap() => {
        "name": name,
        "tag": tag,
        "img": img,
      };
}
