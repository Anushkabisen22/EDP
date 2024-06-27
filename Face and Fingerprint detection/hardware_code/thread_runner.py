#!/usr/bin/python3

import subprocess

def run_script(script_path):
    subprocess.run(['python3', script_path])

def main():
    script1_path = '/home/sam_pc/EDP_F/Adafruit_CircuitPython_Fingerprint/examples/fingerprint_for_proff.py'
    script2_path = '/home/sam_pc/EDP_F/Face-Recognition-Based-Attendance-System-main/attendance_taker.py'

    # Start both scripts simultaneously using subprocesses and store references
    process1 = subprocess.Popen(['python3', script1_path])
    process2 = subprocess.Popen(['python3', script2_path])

    # Wait for processes to finish


    # Close the processes

if __name__ == "__main__":
    main()


