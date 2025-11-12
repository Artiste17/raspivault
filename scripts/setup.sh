#!/bin/bash
echo "🚀 RaspiVault telepítés indul..."

sudo apt update && sudo apt upgrade -y
sudo apt install docker docker-compose nfs-common -y

mkdir -p /mnt/bittiumnode/bitcoin /home/artiste17/bitcoin
bash scripts/sync_nas.sh

echo "✅ Telepítés kész. Indítás: docker-compose up -d"
