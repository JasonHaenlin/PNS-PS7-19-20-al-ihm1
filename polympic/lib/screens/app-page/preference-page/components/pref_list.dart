import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_container.dart';

class PrefList extends StatefulWidget {
  const PrefList({
    Key key,
    @required this.childrenType,
    @required this.tags,
  }) : super(key: key);

  final List<PrefType> childrenType;
  final List<String> tags;

  @override
  _PrefListState createState() => _PrefListState();
}

class _PrefListState extends State<PrefList>
    with AutomaticKeepAliveClientMixin {
  Future<Null> _handleRefresh() async {
    setState(() {});
    return;
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return RefreshIndicator(
      onRefresh: _handleRefresh,
      child: ListView.builder(
        itemCount: widget.childrenType.length,
        itemBuilder: (BuildContext context, int index) {
          return BlocProvider<CategoryBloc>(
            bloc: CategoryBloc(),
            child: PrefContainer(
              childType: widget.childrenType[index],
              tag: widget.tags[index],
            ),
          );
        },
      ),
    );
  }

  @override
  bool get wantKeepAlive => true;
}
