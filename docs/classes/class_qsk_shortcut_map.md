---
title: QskShortcutMap
layout: docs

---


**Module:** **[Framework](/docs/modules/group___framework/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setAutoRepeat](/docs/classes/class_qsk_shortcut_map/#function-setautorepeat)**(int id, bool on) |
| void | **[setEnabled](/docs/classes/class_qsk_shortcut_map/#function-setenabled)**(int id, bool on) |
| void | **[setEnabled](/docs/classes/class_qsk_shortcut_map/#function-setenabled)**(const QKeySequence & sequence, bool on) |
| void | **[removeShortcut](/docs/classes/class_qsk_shortcut_map/#function-removeshortcut)**(int id) |
| int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(const QKeySequence & sequence, bool autoRepeat, const QObject * receiver, const char * method) |
| int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(QQuickWindow * window, const QKeySequence & sequence, bool autoRepeat, const QObject * receiver, const char * method) |
| int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(QQuickItem * , const QKeySequence & , bool autoRepeat, const QObject * receiver, const char * method) |
| template <typename T ,QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr\> <br>int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(const QKeySequence & sequence, bool autoRepeat, T function) |
| template <typename T ,QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr\> <br>int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(QQuickItem * item, const QKeySequence & sequence, bool autoRepeat, T function) |
| template <typename T ,QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr\> <br>int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(QQuickWindow * window, const QKeySequence & sequence, bool autoRepeat, T function) |
| template <typename T ,QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr\> <br>int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(const QKeySequence & sequence, bool autoRepeat, const QObject * context, T function) |
| template <typename T ,QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr\> <br>int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(QQuickItem * item, const QKeySequence & sequence, bool autoRepeat, const QObject * context, T function) |
| template <typename T ,QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr\> <br>int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(QQuickWindow * window, const QKeySequence & sequence, bool autoRepeat, const QObject * context, T function) |
| template <typename T ,QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr\> <br>int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(const QKeySequence & sequence, bool autoRepeat, const typename QtPrivate::FunctionPointer< T >::Object * receiver, T function) |
| template <typename T ,QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr\> <br>int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(QQuickItem * item, const QKeySequence & sequence, bool autoRepeat, const typename QtPrivate::FunctionPointer< T >::Object * receiver, T function) |
| template <typename T ,QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr\> <br>int | **[addShortcut](/docs/classes/class_qsk_shortcut_map/#function-addshortcut)**(QQuickWindow * window, const QKeySequence & sequence, bool autoRepeat, const typename QtPrivate::FunctionPointer< T >::Object * receiver, T function) |
| bool | **[invokeCallback](/docs/classes/class_qsk_shortcut_map/#function-invokecallback)**(const QKeySequence & sequence) |
| bool | **[invokeCallback](/docs/classes/class_qsk_shortcut_map/#function-invokecallback)**(QQuickWindow * window, const QKeySequence & sequence) |
| bool | **[invokeCallback](/docs/classes/class_qsk_shortcut_map/#function-invokecallback)**(QQuickItem * item, const QKeySequence & sequence) |
| bool | **[contextMatcher](/docs/classes/class_qsk_shortcut_map/#function-contextmatcher)**(const QQuickItem * item, Qt::ShortcutContext context) |

## Public Functions Documentation

### function setAutoRepeat

```cpp
static void setAutoRepeat(
    int id,
    bool on
)
```


### function setEnabled

```cpp
static void setEnabled(
    int id,
    bool on
)
```


### function setEnabled

```cpp
static void setEnabled(
    const QKeySequence & sequence,
    bool on
)
```


### function removeShortcut

```cpp
static void removeShortcut(
    int id
)
```


### function addShortcut

```cpp
static inline int addShortcut(
    const QKeySequence & sequence,
    bool autoRepeat,
    const QObject * receiver,
    const char * method
)
```


### function addShortcut

```cpp
static inline int addShortcut(
    QQuickWindow * window,
    const QKeySequence & sequence,
    bool autoRepeat,
    const QObject * receiver,
    const char * method
)
```


### function addShortcut

```cpp
static int addShortcut(
    QQuickItem * ,
    const QKeySequence & ,
    bool autoRepeat,
    const QObject * receiver,
    const char * method
)
```


### function addShortcut

```cpp
template <typename T ,
QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr>
static inline int addShortcut(
    const QKeySequence & sequence,
    bool autoRepeat,
    T function
)
```


### function addShortcut

```cpp
template <typename T ,
QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr>
static inline int addShortcut(
    QQuickItem * item,
    const QKeySequence & sequence,
    bool autoRepeat,
    T function
)
```


### function addShortcut

```cpp
template <typename T ,
QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr>
static inline int addShortcut(
    QQuickWindow * window,
    const QKeySequence & sequence,
    bool autoRepeat,
    T function
)
```


### function addShortcut

```cpp
template <typename T ,
QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr>
static inline int addShortcut(
    const QKeySequence & sequence,
    bool autoRepeat,
    const QObject * context,
    T function
)
```


### function addShortcut

```cpp
template <typename T ,
QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr>
static inline int addShortcut(
    QQuickItem * item,
    const QKeySequence & sequence,
    bool autoRepeat,
    const QObject * context,
    T function
)
```


### function addShortcut

```cpp
template <typename T ,
QskMetaFunctionTraits::IsFunctorOrStaticFunction< T > *  =nullptr>
static inline int addShortcut(
    QQuickWindow * window,
    const QKeySequence & sequence,
    bool autoRepeat,
    const QObject * context,
    T function
)
```


### function addShortcut

```cpp
template <typename T ,
QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr>
static inline int addShortcut(
    const QKeySequence & sequence,
    bool autoRepeat,
    const typename QtPrivate::FunctionPointer< T >::Object * receiver,
    T function
)
```


### function addShortcut

```cpp
template <typename T ,
QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr>
static inline int addShortcut(
    QQuickItem * item,
    const QKeySequence & sequence,
    bool autoRepeat,
    const typename QtPrivate::FunctionPointer< T >::Object * receiver,
    T function
)
```


### function addShortcut

```cpp
template <typename T ,
QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr>
static inline int addShortcut(
    QQuickWindow * window,
    const QKeySequence & sequence,
    bool autoRepeat,
    const typename QtPrivate::FunctionPointer< T >::Object * receiver,
    T function
)
```


### function invokeCallback

```cpp
static bool invokeCallback(
    const QKeySequence & sequence
)
```


### function invokeCallback

```cpp
static bool invokeCallback(
    QQuickWindow * window,
    const QKeySequence & sequence
)
```


### function invokeCallback

```cpp
static bool invokeCallback(
    QQuickItem * item,
    const QKeySequence & sequence
)
```


### function contextMatcher

```cpp
static bool contextMatcher(
    const QQuickItem * item,
    Qt::ShortcutContext context
)
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET