// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "EhtishamMyGreetingPlugin",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "EhtishamMyGreetingPlugin",
            targets: ["GreetingsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "GreetingsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/GreetingsPlugin"),
        .testTarget(
            name: "GreetingsPluginTests",
            dependencies: ["GreetingsPlugin"],
            path: "ios/Tests/GreetingsPluginTests")
    ]
)