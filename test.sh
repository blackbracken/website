#!/bin/bash
cd `dirname $0`

if [ $# != 1 ]; then
  echo "Invalid arguments; ex) sh test.sh lec01"
  exit 1
elif [ ! -e ./$1 ]; then
  echo "The given directory does not exist!"
  exit 1
fi

mkdir -p ./$1/src
mkdir -p ./$1/junit

for file_path in `\find ./$1/ -maxdepth 1 -type f -name "*.java" | grep -v "test"`; do
  file_name=$(basename $file_path .java)

  test_java_name="${file_name}test.java"
  test_shell_name="${file_name}test.sh"

  test_java_path="/home/teachers/skeleton/INjava/${test_java_name}"
  test_shell_path="/home/teachers/skeleton/INjava/${test_shell_name}"
  
  if [ ! -e $test_java_path ]; then continue; fi
  if [ ! -e $test_shell_path ]; then continue; fi
  
  rsync -r $test_java_path ./$1/junit
  rsync -r $test_shell_path ./$1

  src_path="./$1/src/${file_name}.java"
  cp -r $file_path $src_path
  sed -i '1s/^/package src;\n/' $src_path
  
  cd $1/
  sh $test_shell_name
  javac ${file_name}.java
  cd ../
done
