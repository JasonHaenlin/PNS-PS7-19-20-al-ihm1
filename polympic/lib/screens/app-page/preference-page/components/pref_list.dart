import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_container.dart';

class PrefList extends StatelessWidget {
  const PrefList({
    Key key,
    @required this.childrenType,
    @required this.tags,
  }) : super(key: key);

  final List<PrefType> childrenType;
  final List<String> tags;

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: childrenType.length,
      itemBuilder: (BuildContext context, int index) {
        return BlocProvider<CategoryBloc>(
          bloc: CategoryBloc(),
          child: PrefContainer(
            childType: childrenType[index],
            tag: tags[index],
          ),
        );
      },
    );
  }
}
