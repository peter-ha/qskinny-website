---
title: QskGraphicPrivate::PathInfo
layout: docs

---




## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[PathInfo](/docs/classes/class_qsk_graphic_private_1_1_path_info/#function-pathinfo)**() |
| | **[PathInfo](/docs/classes/class_qsk_graphic_private_1_1_path_info/#function-pathinfo)**(const QRectF & pointRect, const QRectF & boundingRect, bool scalablePen) |
| QRectF | **[scaledBoundingRect](/docs/classes/class_qsk_graphic_private_1_1_path_info/#function-scaledboundingrect)**(qreal sx, qreal sy, bool scalePens) const |
| double | **[scaleFactorX](/docs/classes/class_qsk_graphic_private_1_1_path_info/#function-scalefactorx)**(const QRectF & pathRect, const QRectF & targetRect, bool scalePens) const |
| double | **[scaleFactorY](/docs/classes/class_qsk_graphic_private_1_1_path_info/#function-scalefactory)**(const QRectF & pathRect, const QRectF & targetRect, bool scalePens) const |

## Public Functions Documentation

### function PathInfo

```cpp
inline PathInfo()
```


### function PathInfo

```cpp
inline PathInfo(
    const QRectF & pointRect,
    const QRectF & boundingRect,
    bool scalablePen
)
```


### function scaledBoundingRect

```cpp
inline QRectF scaledBoundingRect(
    qreal sx,
    qreal sy,
    bool scalePens
) const
```


### function scaleFactorX

```cpp
inline double scaleFactorX(
    const QRectF & pathRect,
    const QRectF & targetRect,
    bool scalePens
) const
```


### function scaleFactorY

```cpp
inline double scaleFactorY(
    const QRectF & pathRect,
    const QRectF & targetRect,
    bool scalePens
) const
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET