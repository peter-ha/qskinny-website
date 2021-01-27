---
title: QskAnimatorDriver
layout: docs

---




Inherits from QObject

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[advanced](/docs/classes/class_qsk_animator_driver/#signal-advanced)**(QQuickWindow * ) |
| void | **[terminated](/docs/classes/class_qsk_animator_driver/#signal-terminated)**(QQuickWindow * ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskAnimatorDriver](/docs/classes/class_qsk_animator_driver/#function-qskanimatordriver)**() |
| void | **[registerAnimator](/docs/classes/class_qsk_animator_driver/#function-registeranimator)**(QskAnimator * animator) |
| void | **[unregisterAnimator](/docs/classes/class_qsk_animator_driver/#function-unregisteranimator)**(QskAnimator * animator) |
| qint64 | **[referenceTime](/docs/classes/class_qsk_animator_driver/#function-referencetime)**() const |

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


-------------------------------

Updated on 26 January 2021 at 09:44:53 CET