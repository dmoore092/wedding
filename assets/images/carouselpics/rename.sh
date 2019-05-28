#!/bin/bash

i=0
for image in *.jpg
do
	mv "$image" "${i}.jpg"
#	echo $i
	let "i+=1"
done
