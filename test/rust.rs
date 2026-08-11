//! Visual syntax-highlighting fixture.

use std::{collections::HashMap, fmt::Display};

const MAX_RETRIES: usize = 3;

#[derive(Debug, Clone, PartialEq)]
enum Status<T> {
    Idle,
    Ready(T),
}

trait Named {
    fn name(&self) -> &str;
}

#[derive(Debug)]
struct Theme<'a> {
    name: &'a str,
    colors: HashMap<&'a str, u32>,
}

impl<'a> Named for Theme<'a> {
    fn name(&self) -> &str {
        self.name
    }
}

fn describe<T: Named + Display>(value: &T) -> Result<String, &'static str> {
    let label = format!("theme: {}", value.name());
    (!label.is_empty()).then_some(label).ok_or("empty theme")
}

fn main() {
    let status: Status<&str> = Status::Ready("Kiro");
    println!("{status:?}; retries={MAX_RETRIES}");
}
