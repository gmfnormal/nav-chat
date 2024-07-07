import Markdown from "@/common/components/Markdown";

export default function HomePage() {
  return (
    <Markdown markdownString={"在发布订阅模式中，订阅者处理异步事件通常意味着订阅者在接收到事件通知时，需要执行一些异步操作，比如发起网络请求、处理异步数据等。在JavaScript中，这通常涉及到使用回调函数、Promise、async/await等异步编程技术。\n\n下面是一个使用Promise来处理异步事件的订阅者示例：\n\n```javascript\n// 定义一个事件中心\nconst eventCenter = {\n    events: {},\n\n    subscribe: function(eventName, callback) {\n        if (!this.events[eventName]) {\n            this.events[eventName] = [];\n        }\n        this.events[eventName].push(callback);\n    },\n\n    publish: function(eventName, data) {\n        if (this.events[eventName]) {\n            this.events[eventName].forEach(callback =\u003e {\n                // 使用Promise来处理异步操作\n                callback(data).then(result =\u003e {\n                    console.log('Subscriber processed:', result);\n                }).catch(error =\u003e {\n                    console.error('Subscriber error:', error);\n                });\n            });\n        }\n    },\n\n    unsubscribe: function(eventName, callback) {\n        if (this.events[eventName]) {\n            this.events[eventName] = this.events[eventName].filter(cb =\u003e cb !== callback);\n        }\n    }\n};\n\n// 异步订阅者\nconst asyncSubscriber = function(data) {\n    return new Promise((resolve, reject) =\u003e {\n        // 模拟异步操作\n        setTimeout(() =\u003e {\n            console.log('Async subscriber received:', data);\n            // 假设处理数据后返回结果\n            resolve('Processed data: ' + JSON.stringify(data));\n        }, 1000);\n    });\n};\n\n// 订阅事件\neventCenter.subscribe('myAsyncEvent', asyncSubscriber);\n\n// 发布事件\neventCenter.publish('myAsyncEvent', { message: 'Hello World!' });\n```\n\n在这个例子中，`asyncSubscriber`函数返回一个Promise对象，它模拟了一个异步操作（例如，发起一个网络请求）。当事件中心发布事件时，它会调用所有订阅者的回调函数，并等待它们返回的Promise对象解决或拒绝。如果Promise解决，它会打印出处理后的结果；如果Promise拒绝，它会捕获并打印出错误信息。\n\n使用Promise处理异步事件的好处是订阅者可以利用Promise的链式调用和错误处理机制，使得代码更加清晰和易于维护。此外，如果订阅者需要执行多个异步操作，可以使用`Promise.all`来等待所有操作完成。\n\n如果使用`async/await`语法，订阅者可以写成如下形式：\n\n```javascript\n// 异步订阅者\nconst asyncSubscriber = async function(data) {\n    try {\n        console.log('Async subscriber received:', data);\n        // 假设处理数据后返回结果\n        return 'Processed data: ' + JSON.stringify(data);\n    } catch (error) {\n        console.error('Subscriber error:', error);\n        throw error; // 可以选择抛出错误\n    }\n};\n\n// 订阅事件\neventCenter.subscribe('myAsyncEvent', asyncSubscriber);\n\n// 发布事件\neventCenter.publish('myAsyncEvent', { message: 'Hello World!' });\n```\n\n使用`async/await`可以让异步代码看起来更像同步代码，提高了代码的可读性。在订阅者函数中，你可以使用`try...catch`来捕获和处理错误。当订阅者函数返回一个Promise时，发布者可以等待这个Promise解决或拒绝，就像处理普通Promise一样。`"} />
  );
}
