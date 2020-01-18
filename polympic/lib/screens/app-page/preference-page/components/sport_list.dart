import 'package:flutter/material.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/screens/app-page/preference-page/components/sport_card.dart';

class SportsList extends StatelessWidget {
  const SportsList({
    Key key,
    @required List<CategoryModel> data,
  })  : _data = data,
        super(key: key);

  final List<CategoryModel> _data;

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: _data.length,
      itemBuilder: (BuildContext context, int index) =>
          SportCard(data: _data[index]),
    );
  }
}
