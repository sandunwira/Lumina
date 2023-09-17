// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;

#[derive(Clone, serde::Serialize)]
struct Payload {
  args: Vec<String>,
  cwd: String,
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let splash_window = app.get_window("splash").unwrap();
      let main_window = app.get_window("main").unwrap();

      // DISABLE RELOAD ======================================================================== //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.keyCode == 116) { e.preventDefault(); }});").unwrap(); // F5  |  Main
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 116) { e.preventDefault(); }});").unwrap(); // CTRL + F5  |  Main
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 82) { e.preventDefault(); }});").unwrap(); // CTRL + R  |  Main
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 82) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + R  |  Main
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.keyCode == 116) { e.preventDefault(); }});").unwrap(); // F5  |  Splash
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 116) { e.preventDefault(); }});").unwrap(); // CTRL + F5   |  Splash
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 82) { e.preventDefault(); }});").unwrap(); // CTRL + R   |  Splash
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 82) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + R   |  Splash
      // DISABLE VIEWING SOURCE ================================================================ //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 85) { e.preventDefault(); }});").unwrap(); // CTRL + U  |  Main
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 85) { e.preventDefault(); }});").unwrap(); // CTRL + U  |  Splash
      // DISABLE PRINT ========================================================================= //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 80) { e.preventDefault(); }});").unwrap(); // CTRL + P  |  Main
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 80) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + P  |  Main
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 80) { e.preventDefault(); }});").unwrap(); // CTRL + P  |  Splash
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 80) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + P  |  Splash
      // DISABLE SCREENSHOT ==================================================================== //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 83) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + S  |  Main
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 88) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + X  |  Main
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 83) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + S  |  Splash
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 88) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + X  |  Splash
      // DISABLE DEVELOPER OPTIONS ============================================================= //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + I  |  Main
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + I  |  Splash
      // DISABLE FIND IN PAGE ================================================================== //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 70) { e.preventDefault(); }});").unwrap(); // CTRL + F  |  Main
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 71) { e.preventDefault(); }});").unwrap(); // CTRL + G  |  Main
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.keyCode == 114) { e.preventDefault(); }});").unwrap(); // F3  |  Main
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 70) { e.preventDefault(); }});").unwrap(); // CTRL + F  |  Splash
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 71) { e.preventDefault(); }});").unwrap(); // CTRL + G  |  Splash
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.keyCode == 114) { e.preventDefault(); }});").unwrap(); // F3  |  Splash
      // DISABLE CARET BROWSING ================================================================ //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.keyCode == 118) { e.preventDefault(); }});").unwrap(); // F7  |  Main
      splash_window.eval("window.addEventListener('keydown', function(e) {if (e.keyCode == 118) { e.preventDefault(); }});").unwrap(); // F7  |  Splash
      // DISABLE MIDDLE-CLICK TO OPEN LINKS IN NEW WINDOWS ===================================== //
      main_window.eval("window.addEventListener('auxclick', function(e) {if (e.button == 1) { e.preventDefault(); }});").unwrap(); //  |  Main

      // WE PERFORM THE INITIALIZATION CODE ON A NEW TASK SO THE APP DOESN'T FREEZE ============ //
      tauri::async_runtime::spawn(async move {
        // INITIALIZE YOUR APP HERE INSTEAD OF SLEEPING :) ===================================== //
        println!("Initializing...");
        std::thread::sleep(std::time::Duration::from_secs(5));
        println!("Done initializing.");
        // AFTER IT'S DONE, CLOSE THE SPLASHSCREEN AND DISPLAY THE MAIN WINDOW ================= //
        splash_window.close().unwrap();
        main_window.show().unwrap();
      });
      Ok(())
    })
    .plugin(tauri_plugin_single_instance::init(|app, argv, cwd| {
      println!("{}, {argv:?}, {cwd}", app.package_info().name);
      app.emit_all("single-instance", Payload { args: argv, cwd }).unwrap();
    })) // For Blocking Multiple Instances
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}