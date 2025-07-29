// Copyright 2024 The Flutter team. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flutter/material.dart';
import 'package:logging/logging.dart';
import 'package:provider/provider.dart';

import 'config/dependencies.dart';
import 'main.dart';

/// Development config entry point.
/// Launch with `flutter run --target lib/main_development.dart`.
/// Uses local data.
void main() {
  // Configure logging before running the app.
  Logger.root.level = Level.ALL; // This will capture all levels of logs.
  Logger.root.onRecord.listen((record) {
    // This listener prints the log record to the console.
    debugPrint('${record.level.name}: ${record.time}: ${record.loggerName}: ${record.message}');
  });

  runApp(MultiProvider(providers: providersLocal, child: const MainApp()));
}
