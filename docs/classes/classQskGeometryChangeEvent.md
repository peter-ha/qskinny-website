---
title: QskGeometryChangeEvent
layout: docs

---




Inherits from QskEvent

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGeometryChangeEvent](/docs/classes/classQskGeometryChangeEvent/#function-qskgeometrychangeevent)**(const QRectF & rect, const QRectF & oldRect) |
| const QRectF & | **[rect](/docs/classes/classQskGeometryChangeEvent/#function-rect)**() const |
| const QRectF & | **[oldRect](/docs/classes/classQskGeometryChangeEvent/#function-oldrect)**() const |
| bool | **[isResized](/docs/classes/classQskGeometryChangeEvent/#function-isresized)**() const |
| bool | **[isMoved](/docs/classes/classQskGeometryChangeEvent/#function-ismoved)**() const |
| QskGeometryChangeEvent * | **[clone](/docs/classes/classQskGeometryChangeEvent/#function-clone)**() const override |

## Public Functions Documentation

### function QskGeometryChangeEvent

```cpp
QskGeometryChangeEvent(
    const QRectF & rect,
    const QRectF & oldRect
)
```


### function rect

```cpp
inline const QRectF & rect() const
```


### function oldRect

```cpp
inline const QRectF & oldRect() const
```


### function isResized

```cpp
bool isResized() const
```


### function isMoved

```cpp
bool isMoved() const
```


### function clone

```cpp
QskGeometryChangeEvent * clone() const override
```


-------------------------------

Updated on  3 February 2021 at 15:05:41 CET