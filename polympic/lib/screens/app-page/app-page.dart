import 'package:flutter/material.dart';
import 'package:polympic/blocs/basic/basic_bloc.dart';
import 'package:polympic/blocs/basic/basic_state.dart';
import 'package:polympic/blocs/bloc_provider.dart';

class AppPage extends StatelessWidget {
  const AppPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final authBloc = BlocProvider.of<BasicBloc>(context).basicBloc;
    authBloc.dispatch(BasicEvent.fetch);

    return StreamBuilder(
        stream: authBloc.currentValue$,
        builder: (BuildContext context, AsyncSnapshot snapshot) =>
            snapshot.hasData && snapshot.data
                ? Center(
                    child: Text(snapshot.data),
                  )
                : Center());
  }
}
