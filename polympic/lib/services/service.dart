class Service {
  Future<int> getData() async {
    await Future.delayed(const Duration(seconds: 1));
    return 0;
  }
}

Service service = Service();
