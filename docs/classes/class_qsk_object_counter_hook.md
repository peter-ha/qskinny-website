---
title: QskObjectCounterHook
layout: docs

---




## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskObjectCounterHook](/docs/classes/class_qsk_object_counter_hook/#function-qskobjectcounterhook)**() |
| | **[~QskObjectCounterHook](/docs/classes/class_qsk_object_counter_hook/#function-~qskobjectcounterhook)**() |
| void | **[registerCounter](/docs/classes/class_qsk_object_counter_hook/#function-registercounter)**(QskObjectCounter * counter, bool on) |
| bool | **[isCounterRegistered](/docs/classes/class_qsk_object_counter_hook/#function-iscounterregistered)**(const QskObjectCounter * counter) const |
| bool | **[isActive](/docs/classes/class_qsk_object_counter_hook/#function-isactive)**() const |
| void | **[startup](/docs/classes/class_qsk_object_counter_hook/#function-startup)**() |
| void | **[addObject](/docs/classes/class_qsk_object_counter_hook/#function-addobject)**(QObject * object) |
| void | **[removeObject](/docs/classes/class_qsk_object_counter_hook/#function-removeobject)**(QObject * object) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[autoDelete](/docs/classes/class_qsk_object_counter_hook/#variable-autodelete)**  |

## Public Functions Documentation

### function QskObjectCounterHook

```cpp
inline QskObjectCounterHook()
```


### function ~QskObjectCounterHook

```cpp
inline ~QskObjectCounterHook()
```


### function registerCounter

```cpp
inline void registerCounter(
    QskObjectCounter * counter,
    bool on
)
```


### function isCounterRegistered

```cpp
inline bool isCounterRegistered(
    const QskObjectCounter * counter
) const
```


### function isActive

```cpp
inline bool isActive() const
```


### function startup

```cpp
inline void startup()
```


### function addObject

```cpp
inline void addObject(
    QObject * object
)
```


### function removeObject

```cpp
inline void removeObject(
    QObject * object
)
```


## Public Attributes Documentation

### variable autoDelete

```cpp
static bool autoDelete = false;
```


-------------------------------

Updated on 22 January 2021 at 17:05:48 CET