var stuff = [1, "asd", "asdasd", "asdasd", 2];
// const color: number[] = [23.45, 234, 234];
var color = [255, 0, 45];
var goodRes = [200, "OK"];
// goodRes[0] = "200";
// goodRes.push(123);
// goodRes.pop();
// goodRes.pop();
// goodRes.pop();
var responses = [[404, "Not Found"], [200, "OK"]];
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
ArrowKeys.LEFT;
