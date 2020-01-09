import 'package:flutter/material.dart';
import 'package:polympic/blocs/basic/basic_bloc.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/loading/loading_bloc.dart';
import 'package:polympic/screens/app-page/preference-page/preference-sport.dart';
import 'package:polympic/theme/style.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider<LoadingBloc>(
      bloc: LoadingBloc(),
      child: BlocProvider<BasicBloc>(
        bloc: BasicBloc(),
        child: MaterialApp(
          title: 'Polympic basic',
          theme: appTheme(),
          home: PreferenceSport(),
        ),
      ),
    );
  }
}
