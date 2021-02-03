---
title: QskObjectCounter
layout: docs

---


**Module:** **[Core](/docs/modules/group__Core/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ObjectType](/docs/classes/classQskObjectCounter/#enum-objecttype)** { Objects, Items} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskObjectCounter](/docs/classes/classQskObjectCounter/#function-qskobjectcounter)**(bool debugAtDestruction =false) |
| | **[~QskObjectCounter](/docs/classes/classQskObjectCounter/#function-~qskobjectcounter)**() |
| void | **[setActive](/docs/classes/classQskObjectCounter/#function-setactive)**(bool on) |
| bool | **[isActive](/docs/classes/classQskObjectCounter/#function-isactive)**() const |
| void | **[reset](/docs/classes/classQskObjectCounter/#function-reset)**() |
| int | **[created](/docs/classes/classQskObjectCounter/#function-created)**(ObjectType objectType =Objects) const |
| int | **[destroyed](/docs/classes/classQskObjectCounter/#function-destroyed)**(ObjectType objectType =Objects) const |
| int | **[current](/docs/classes/classQskObjectCounter/#function-current)**(ObjectType objectType =Objects) const |
| int | **[maximum](/docs/classes/classQskObjectCounter/#function-maximum)**(ObjectType objectType =Objects) const |
| void | **[debugStatistics](/docs/classes/classQskObjectCounter/#function-debugstatistics)**(QDebug debug, ObjectType objectType =Objects) const |
| void | **[dump](/docs/classes/classQskObjectCounter/#function-dump)**() const |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[QskObjectCounterHook](/docs/classes/classQskObjectCounter/#friend-qskobjectcounterhook)**  |

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
friend class QskObjectCounterHook(
    QskObjectCounterHook 
);
```


-------------------------------

Updated on  3 February 2021 at 15:05:46 CET