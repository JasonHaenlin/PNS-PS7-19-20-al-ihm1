import 'package:flutter/material.dart';
import 'package:polympic/core/router.dart';
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
    return Scaffold(
      appBar: AppBar(
        title: const Text("Sports"),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios),
          tooltip: 'close',
          onPressed: () => navigateBackFromPage(context),
        ),
      ),
      body: ListView.builder(
        itemCount: _data.length,
        itemBuilder: (BuildContext context, int index) {
          return SportCard(data: _data[index]);
        },
      ),
    );
  }
}
