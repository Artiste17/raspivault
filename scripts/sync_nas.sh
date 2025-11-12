#!/bin/bash
SRC="/home/artiste17/bitcoin/"
DEST="/mnt/bittiumnode/bitcoin/"
LOG="/var/log/raspivault-sync.log"

rsync -avh --delete --progress $SRC $DEST >> $LOG 2>&1
echo "$(date '+%Y-%m-%d %H:%M:%S') - Sync complete" >> $LOG
