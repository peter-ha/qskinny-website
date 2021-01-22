---
title: QskGeometryChangeEvent
layout: docs

---




Inherits from QskEvent

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGeometryChangeEvent](/docs/classes/class_qsk_geometry_change_event/#function-qskgeometrychangeevent)**(const QRectF & rect, const QRectF & oldRect) |
| const QRectF & | **[rect](/docs/classes/class_qsk_geometry_change_event/#function-rect)**() const |
| const QRectF & | **[oldRect](/docs/classes/class_qsk_geometry_change_event/#function-oldrect)**() const |
| bool | **[isResized](/docs/classes/class_qsk_geometry_change_event/#function-isresized)**() const |
| bool | **[isMoved](/docs/classes/class_qsk_geometry_change_event/#function-ismoved)**() const |
| QskGeometryChangeEvent * | **[clone](/docs/classes/class_qsk_geometry_change_event/#function-clone)**() const override |

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

Updated on 22 January 2021 at 17:05:48 CET