---
title: QskBoxShapeMetrics
layout: docs

---


**Module:** **[Themeing](/docs/modules/group__Themeing/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskBoxShapeMetrics](/docs/classes/classQskBoxShapeMetrics/#function-qskboxshapemetrics)**() |
| constexpr | **[QskBoxShapeMetrics](/docs/classes/classQskBoxShapeMetrics/#function-qskboxshapemetrics)**(qreal topLeft, qreal topRight, qreal bottomLeft, qreal bottomRight, Qt::SizeMode sizeMode =Qt::AbsoluteSize) |
| constexpr | **[QskBoxShapeMetrics](/docs/classes/classQskBoxShapeMetrics/#function-qskboxshapemetrics)**(qreal radius, Qt::SizeMode sizeMode =Qt::AbsoluteSize) |
| constexpr | **[QskBoxShapeMetrics](/docs/classes/classQskBoxShapeMetrics/#function-qskboxshapemetrics)**(qreal radiusX, qreal radiusY, Qt::SizeMode sizeMode =Qt::AbsoluteSize) |
| constexpr bool | **[operator==](/docs/classes/classQskBoxShapeMetrics/#function-operator==)**(const QskBoxShapeMetrics & other) const |
| constexpr bool | **[operator!=](/docs/classes/classQskBoxShapeMetrics/#function-operator!=)**(const QskBoxShapeMetrics & other) const |
| void | **[setRadius](/docs/classes/classQskBoxShapeMetrics/#function-setradius)**(qreal radius) |
| void | **[setRadius](/docs/classes/classQskBoxShapeMetrics/#function-setradius)**(qreal radius, Qt::SizeMode sizeMode) |
| void | **[setRadius](/docs/classes/classQskBoxShapeMetrics/#function-setradius)**(Qt::Corner corner, qreal radius) |
| void | **[setRadius](/docs/classes/classQskBoxShapeMetrics/#function-setradius)**(qreal radiusX, qreal radiusY) |
| void | **[setRadius](/docs/classes/classQskBoxShapeMetrics/#function-setradius)**(const QSizeF & radius) |
| void | **[setRadius](/docs/classes/classQskBoxShapeMetrics/#function-setradius)**(Qt::Corner corner, qreal radiusX, qreal radiusY) |
| void | **[setRadius](/docs/classes/classQskBoxShapeMetrics/#function-setradius)**(Qt::Corner corner, const QSizeF & radius) |
| void | **[setRadius](/docs/classes/classQskBoxShapeMetrics/#function-setradius)**(qreal topLeft, qreal topRight, qreal bottomLeft, qreal bottomRight) |
| void | **[setRadius](/docs/classes/classQskBoxShapeMetrics/#function-setradius)**(const QSizeF & topLeft, const QSizeF & topRight, const QSizeF & bottomLeft, const QSizeF & bottomRight) |
| void | **[setRadius](/docs/classes/classQskBoxShapeMetrics/#function-setradius)**(qreal topLeftX, qreal topLeftY, qreal topRightX, qreal topRightY, qreal bottomLeftX, qreal bottomLeftY, qreal bottomRightX, qreal bottomRightY) |
| constexpr QSizeF | **[radius](/docs/classes/classQskBoxShapeMetrics/#function-radius)**(Qt::Corner corner) const |
| constexpr bool | **[isRectangle](/docs/classes/classQskBoxShapeMetrics/#function-isrectangle)**() const |
| constexpr bool | **[isRectellipse](/docs/classes/classQskBoxShapeMetrics/#function-isrectellipse)**() const |
| void | **[setSizeMode](/docs/classes/classQskBoxShapeMetrics/#function-setsizemode)**(Qt::SizeMode sizeMode) |
| constexpr Qt::SizeMode | **[sizeMode](/docs/classes/classQskBoxShapeMetrics/#function-sizemode)**() const |
| void | **[setAspectRatioMode](/docs/classes/classQskBoxShapeMetrics/#function-setaspectratiomode)**(Qt::AspectRatioMode aspectRatioMode) |
| constexpr Qt::AspectRatioMode | **[aspectRatioMode](/docs/classes/classQskBoxShapeMetrics/#function-aspectratiomode)**() const |
| QskBoxShapeMetrics | **[interpolated](/docs/classes/classQskBoxShapeMetrics/#function-interpolated)**(const QskBoxShapeMetrics & to, qreal value) const |
| QskBoxShapeMetrics | **[toAbsolute](/docs/classes/classQskBoxShapeMetrics/#function-toabsolute)**(const QSizeF & size) const |
| constexpr QskBoxShapeMetrics | **[transposed](/docs/classes/classQskBoxShapeMetrics/#function-transposed)**() const |
| uint | **[hash](/docs/classes/classQskBoxShapeMetrics/#function-hash)**(uint seed =0) const |
| QVariant | **[interpolate](/docs/classes/classQskBoxShapeMetrics/#function-interpolate)**(const QskBoxShapeMetrics & from, const QskBoxShapeMetrics & to, qreal progress) |

## Public Functions Documentation

### function QskBoxShapeMetrics

```cpp
inline constexpr QskBoxShapeMetrics()
```


### function QskBoxShapeMetrics

```cpp
inline constexpr QskBoxShapeMetrics(
    qreal topLeft,
    qreal topRight,
    qreal bottomLeft,
    qreal bottomRight,
    Qt::SizeMode sizeMode =Qt::AbsoluteSize
)
```


### function QskBoxShapeMetrics

```cpp
inline constexpr QskBoxShapeMetrics(
    qreal radius,
    Qt::SizeMode sizeMode =Qt::AbsoluteSize
)
```


### function QskBoxShapeMetrics

```cpp
inline constexpr QskBoxShapeMetrics(
    qreal radiusX,
    qreal radiusY,
    Qt::SizeMode sizeMode =Qt::AbsoluteSize
)
```


### function operator==

```cpp
inline constexpr bool operator==(
    const QskBoxShapeMetrics & other
) const
```


### function operator!=

```cpp
inline constexpr bool operator!=(
    const QskBoxShapeMetrics & other
) const
```


### function setRadius

```cpp
inline void setRadius(
    qreal radius
)
```


### function setRadius

```cpp
inline void setRadius(
    qreal radius,
    Qt::SizeMode sizeMode
)
```


### function setRadius

```cpp
inline void setRadius(
    Qt::Corner corner,
    qreal radius
)
```


### function setRadius

```cpp
inline void setRadius(
    qreal radiusX,
    qreal radiusY
)
```


### function setRadius

```cpp
inline void setRadius(
    const QSizeF & radius
)
```


### function setRadius

```cpp
void setRadius(
    Qt::Corner corner,
    qreal radiusX,
    qreal radiusY
)
```


### function setRadius

```cpp
inline void setRadius(
    Qt::Corner corner,
    const QSizeF & radius
)
```


### function setRadius

```cpp
inline void setRadius(
    qreal topLeft,
    qreal topRight,
    qreal bottomLeft,
    qreal bottomRight
)
```


### function setRadius

```cpp
inline void setRadius(
    const QSizeF & topLeft,
    const QSizeF & topRight,
    const QSizeF & bottomLeft,
    const QSizeF & bottomRight
)
```


### function setRadius

```cpp
void setRadius(
    qreal topLeftX,
    qreal topLeftY,
    qreal topRightX,
    qreal topRightY,
    qreal bottomLeftX,
    qreal bottomLeftY,
    qreal bottomRightX,
    qreal bottomRightY
)
```


### function radius

```cpp
inline constexpr QSizeF radius(
    Qt::Corner corner
) const
```


### function isRectangle

```cpp
inline constexpr bool isRectangle() const
```


### function isRectellipse

```cpp
inline constexpr bool isRectellipse() const
```


### function setSizeMode

```cpp
inline void setSizeMode(
    Qt::SizeMode sizeMode
)
```


### function sizeMode

```cpp
inline constexpr Qt::SizeMode sizeMode() const
```


### function setAspectRatioMode

```cpp
inline void setAspectRatioMode(
    Qt::AspectRatioMode aspectRatioMode
)
```


### function aspectRatioMode

```cpp
inline constexpr Qt::AspectRatioMode aspectRatioMode() const
```


### function interpolated

```cpp
QskBoxShapeMetrics interpolated(
    const QskBoxShapeMetrics & to,
    qreal value
) const
```


### function toAbsolute

```cpp
QskBoxShapeMetrics toAbsolute(
    const QSizeF & size
) const
```


### function transposed

```cpp
inline constexpr QskBoxShapeMetrics transposed() const
```


### function hash

```cpp
uint hash(
    uint seed =0
) const
```


### function interpolate

```cpp
static QVariant interpolate(
    const QskBoxShapeMetrics & from,
    const QskBoxShapeMetrics & to,
    qreal progress
)
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET