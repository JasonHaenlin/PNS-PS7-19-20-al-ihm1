import 'package:flutter/material.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_container.dart';

class PrefList extends StatelessWidget {
  const PrefList({
    Key key,
    @required this.childrensType,
    @required this.tags,
  }) : super(key: key);

  final List<PrefType> childrensType;
  final List<String> tags;

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: childrensType.length,
      itemBuilder: (BuildContext context, int index) {
        return PrefContainer(childType: childrensType[index], tag: tags[index]);
      },
    );
  }
}
