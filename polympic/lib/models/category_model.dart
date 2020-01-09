import 'package:flutter/material.dart';

class CategoryModel {
  final String label;
  final String tag;
  final String image;

  const CategoryModel({
    @required this.label,
    @required this.tag,
    @required this.image,
  })  : assert(label != null),
        assert(tag != null),
        assert(image != null);

  CategoryModel.fromMap(Map<String, dynamic> json)
      : label = json['label'],
        tag = json['tag'],
        image = json['image'];

  Map<String, dynamic> toMap() => {
        "label": label,
        "tag": tag,
        "image": image,
      };
}
