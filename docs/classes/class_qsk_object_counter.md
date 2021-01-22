---
title: QskObjectCounter
layout: docs

---


**Module:** **[Core](/docs/modules/group___core/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ObjectType](/docs/classes/class_qsk_object_counter/#enum-objecttype)** { Objects, Items} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskObjectCounter](/docs/classes/class_qsk_object_counter/#function-qskobjectcounter)**(bool debugAtDestruction =false) |
| | **[~QskObjectCounter](/docs/classes/class_qsk_object_counter/#function-~qskobjectcounter)**() |
| void | **[setActive](/docs/classes/class_qsk_object_counter/#function-setactive)**(bool on) |
| bool | **[isActive](/docs/classes/class_qsk_object_counter/#function-isactive)**() const |
| void | **[reset](/docs/classes/class_qsk_object_counter/#function-reset)**() |
| int | **[created](/docs/classes/class_qsk_object_counter/#function-created)**(ObjectType objectType =Objects) const |
| int | **[destroyed](/docs/classes/class_qsk_object_counter/#function-destroyed)**(ObjectType objectType =Objects) const |
| int | **[current](/docs/classes/class_qsk_object_counter/#function-current)**(ObjectType objectType =Objects) const |
| int | **[maximum](/docs/classes/class_qsk_object_counter/#function-maximum)**(ObjectType objectType =Objects) const |
| void | **[debugStatistics](/docs/classes/class_qsk_object_counter/#function-debugstatistics)**(QDebug debug, ObjectType objectType =Objects) const |
| void | **[dump](/docs/classes/class_qsk_object_counter/#function-dump)**() const |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[QskObjectCounterHook](/docs/classes/class_qsk_object_counter/#friend-qskobjectcounterhook)**  |

## Public Types Documentation

### enum ObjectType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Objects | |   |
| Items | |   |




## Public Functions Documentation

### function QskObjectCounter

```cpp
QskObjectCounter(
    bool debugAtDestruction =false
)
```


### function ~QskObjectCounter

```cpp
~QskObjectCounter()
```


### function setActive

```cpp
void setActive(
    bool on
)
```


### function isActive

```cpp
bool isActive() const
```


### function reset

```cpp
void reset()
```


### function created

```cpp
int created(
    ObjectType objectType =Objects
) const
```


### function destroyed

```cpp
int destroyed(
    ObjectType objectType =Objects
) const
```


### function current

```cpp
int current(
    ObjectType objectType =Objects
) const
```


### function maximum

```cpp
int maximum(
    ObjectType objectType =Objects
) const
```


### function debugStatistics

```cpp
void debugStatistics(
    QDebug debug,
    ObjectType objectType =Objects
) const
```


### function dump

```cpp
void dump() const
```


## Friends

### friend QskObjectCounterHook

```cpp
friend class QskObjectCounterHook;
```


-------------------------------

Updated on 22 January 2021 at 17:05:50 CET