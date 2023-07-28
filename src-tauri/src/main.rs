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
      let main_window = app.get_window("main").unwrap();
      // DISABLE RELOAD ======================================================================== //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.keyCode == 116) { e.preventDefault(); }});").unwrap(); // F5
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 116) { e.preventDefault(); }});").unwrap(); // CTRL + F5
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 82) { e.preventDefault(); }});").unwrap(); // CTRL + R
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 82) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + R
      // DISABLE VIEWING SOURCE ================================================================ //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 85) { e.preventDefault(); }});").unwrap(); // CTRL + U
      // DISABLE PRINT ========================================================================= //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 80) { e.preventDefault(); }});").unwrap(); // CTRL + P
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 80) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + P
      // DISABLE SCREENSHOT ==================================================================== //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 83) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + S
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 88) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + X
      // DISABLE DEVELOPER OPTIONS ============================================================= //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { e.preventDefault(); }});").unwrap(); // CTRL + SHIFT + I
      // DISABLE FIND IN PAGE ================================================================== //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 70) { e.preventDefault(); }});").unwrap(); // CTRL + F
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.keyCode == 71) { e.preventDefault(); }});").unwrap(); // CTRL + G
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.keyCode == 114) { e.preventDefault(); }});").unwrap(); // F3
      // DISABLE CARET BROWSING ================================================================ //
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.keyCode == 118) { e.preventDefault(); }});").unwrap(); // F7
      // DISABLE MIDDLE-CLICK TO OPEN LINKS IN NEW WINDOWS ===================================== //
      main_window.eval("window.addEventListener('auxclick', function(e) {if (e.button == 1) { e.preventDefault(); }});").unwrap();
      Ok(())
    })
    .plugin(tauri_plugin_single_instance::init(|app, argv, cwd| {
      println!("{}, {argv:?}, {cwd}", app.package_info().name);
      app.emit_all("single-instance", Payload { args: argv, cwd }).unwrap();
    })) // For Blocking Multiple Instances
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}