import 'package:flutter/material.dart';
import 'package:polympic/blocs/basic/basic_bloc.dart';
import 'package:polympic/blocs/bloc_provider.dart';

class AppPage extends StatelessWidget {
  const AppPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final basicBloc = BlocProvider.of<BasicBloc>(context).basicBloc;

    return StreamBuilder(
        stream: basicBloc.currentValue$,
        builder: (BuildContext context, AsyncSnapshot snapshot) =>
            snapshot.hasData
                ? Center(
                    child: Text(snapshot.data.toString()),
                  )
                : Center());
  }
}
