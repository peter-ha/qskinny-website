---
title: QskAnimatorDriver
layout: docs

---




Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskAnimatorDriver](/docs/classes/classQskAnimatorDriver/#function-qskanimatordriver)**() |
| void | **[registerAnimator](/docs/classes/classQskAnimatorDriver/#function-registeranimator)**(QskAnimator * animator) |
| void | **[unregisterAnimator](/docs/classes/classQskAnimatorDriver/#function-unregisteranimator)**(QskAnimator * animator) |
| qint64 | **[referenceTime](/docs/classes/classQskAnimatorDriver/#function-referencetime)**() const |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[advanced](/docs/classes/classQskAnimatorDriver/#signal-advanced)**(QQuickWindow * ) |
| void | **[terminated](/docs/classes/classQskAnimatorDriver/#signal-terminated)**(QQuickWindow * ) |

## Public Functions Documentation

### function QskAnimatorDriver

```cpp
QskAnimatorDriver()
```


### function registerAnimator

```cpp
void registerAnimator(
    QskAnimator * animator
)
```


### function unregisterAnimator

```cpp
void unregisterAnimator(
    QskAnimator * animator
)
```


### function referenceTime

```cpp
inline qint64 referenceTime() const
```


## Public Signals Documentation

### signal advanced

```cpp
void advanced(
    QQuickWindow * 
)
```


### signal terminated

```cpp
void terminated(
    QQuickWindow * 
)
```


-------------------------------

Updated on  3 February 2021 at 15:05:42 CET