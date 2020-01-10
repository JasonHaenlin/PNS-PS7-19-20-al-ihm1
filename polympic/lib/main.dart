import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/blocs/event/event_bloc.dart';
import 'package:polympic/blocs/loading/loading_bloc.dart';
import 'package:polympic/screens/app-page/app_page.dart';
import 'package:polympic/theme/style.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider<EventBloc>(
      bloc: EventBloc(),
      child: BlocProvider<LoadingBloc>(
        bloc: LoadingBloc(),
        child: BlocProvider<CategoryBloc>(
          bloc: CategoryBloc(),
          child: MaterialApp(
            title: 'Polympic basic',
            theme: appTheme(),
            home: AppPage(),
          ),
        ),
      ),
    );
  }
}
