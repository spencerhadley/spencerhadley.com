#!/usr/bin/ruby

require "cgi"

cgi = CGI.new
puts cgi.header
puts "<html>"
puts "<body>"

if (cgi.has_key?('Name')) then
  puts "Welcome, #{cgi['Name']}!"
else
  puts "<form method='post' action='test.cgi'>"
  puts "Enter your name:"
  puts "<input type='text' name='Name'>"
  puts "<input type='submit'>"
  puts "</form>"
end

puts "</body>"
puts "</html>"