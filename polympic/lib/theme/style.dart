import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import './colors.dart';

ThemeData appTheme() {
  return ThemeData(
    //
    brightness: Brightness.light,
    primaryColorLight: kColorPrimary,
    primaryColor: kColorPrimary,
    accentColor: kColorAccent,
    hintColor: Colors.black38,
    dividerColor: kColorPrimary,
    buttonColor: kColorAccent,
    scaffoldBackgroundColor: Colors.white,
    canvasColor: Colors.white,

    appBarTheme: AppBarTheme(
      color: kColorPrimary,
      textTheme: TextTheme(
        title: TextStyle(fontSize: 20.0, color: kColorTextIcon),
        subtitle: TextStyle(fontSize: 14.0, color: kColorTextIcon),
      ),
      iconTheme: IconThemeData(color: kColorTextIcon),
    ),

    tabBarTheme: TabBarTheme(
      labelColor: Colors.white,
      // indicator: BoxDecoration(),
      indicator: BoxDecoration(
        color: kColorAccent,
        shape: BoxShape.circle,
      ),
      // labelPadding: EdgeInsets.symmetric(vertical: 5),
    ),

    sliderTheme: SliderThemeData(
      activeTickMarkColor: kColorAccent,
      disabledActiveTickMarkColor: kColorPrimary,
      disabledInactiveTickMarkColor: kColorPrimary,
      inactiveTickMarkColor: kColorPrimary,
      valueIndicatorColor: kColorPrimary,
    ),

    iconTheme: IconThemeData(color: kColorTextIcon),

    buttonTheme: ButtonThemeData(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(20.0)),
      ),
      buttonColor: kColorAccent,
      textTheme: ButtonTextTheme.primary,
    ),

    inputDecorationTheme: InputDecorationTheme(
      border: OutlineInputBorder(
        borderRadius: BorderRadius.vertical(
          top: Radius.circular(20),
          bottom: Radius.circular(20),
        ),
      ),
    ),

    textTheme: TextTheme(
      headline: TextStyle(fontSize: 38.0, color: kColorPrimaryText),
      display1: TextStyle(fontSize: 42.0, color: kColorPrimaryText),
      display2: TextStyle(fontSize: 32.0, color: kColorPrimaryText),
      display3: TextStyle(fontSize: 22.0, color: kColorPrimaryText),
      display4: TextStyle(fontSize: 18.0, color: kColorSecondaryText),
      title: TextStyle(fontSize: 36.0, color: kColorPrimaryText),
      subtitle: TextStyle(fontSize: 16.0, color: kColorSecondaryText),
      body1: TextStyle(fontSize: 14.0, color: kColorPrimaryText),
    ),
  );
}
