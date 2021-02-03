---
title: QskObjectCounterHook
layout: docs

---




## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskObjectCounterHook](/docs/classes/classQskObjectCounterHook/#function-qskobjectcounterhook)**() |
| | **[~QskObjectCounterHook](/docs/classes/classQskObjectCounterHook/#function-~qskobjectcounterhook)**() |
| void | **[registerCounter](/docs/classes/classQskObjectCounterHook/#function-registercounter)**(QskObjectCounter * counter, bool on) |
| bool | **[isCounterRegistered](/docs/classes/classQskObjectCounterHook/#function-iscounterregistered)**(const QskObjectCounter * counter) const |
| bool | **[isActive](/docs/classes/classQskObjectCounterHook/#function-isactive)**() const |
| void | **[startup](/docs/classes/classQskObjectCounterHook/#function-startup)**() |
| void | **[addObject](/docs/classes/classQskObjectCounterHook/#function-addobject)**(QObject * object) |
| void | **[removeObject](/docs/classes/classQskObjectCounterHook/#function-removeobject)**(QObject * object) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[autoDelete](/docs/classes/classQskObjectCounterHook/#variable-autodelete)**  |

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

Updated on  3 February 2021 at 15:05:41 CET