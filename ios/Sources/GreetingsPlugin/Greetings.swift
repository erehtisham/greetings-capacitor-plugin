import Foundation

@objc public class Greetings: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
