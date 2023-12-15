from datetime import datetime, time

# # Giả sử timeEvent là một chuỗi đã được lấy từ datetime.now()
# timeEvent_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
#
# # Chuyển đổi timeEvent từ chuỗi thành đối tượng datetime
# timeEvent = datetime.strptime(timeEvent_str, "%Y-%m-%d %H:%M:%S")

# Thiết lập giờ đi làm
work_start_time = time(9, 0, 0)



timeEvent = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
timeEvent = datetime.strptime(timeEvent, "%Y-%m-%d %H:%M:%S")
# So sánh chỉ phần thời gian của timeEvent với work_start_time
isLate = timeEvent.time() > work_start_time
print(type(timeEvent.time()))
print(f"Thời điểm sự kiện: {timeEvent.time()}")
print(f"Giờ đi làm: {work_start_time}")
print(f"Đã trễ: {isLate}")