---
title: QskShadowMetrics
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskShadowMetrics](/docs/classes/class_qsk_shadow_metrics/#function-qskshadowmetrics)**(const QPointF & offset =QPointF()) |
| constexpr | **[QskShadowMetrics](/docs/classes/class_qsk_shadow_metrics/#function-qskshadowmetrics)**(qreal spreadRadius, qreal blurRadius, const QPointF & offset =QPointF()) |
| constexpr bool | **[operator==](/docs/classes/class_qsk_shadow_metrics/#function-operator==)**(const QskShadowMetrics & other) const |
| constexpr bool | **[operator!=](/docs/classes/class_qsk_shadow_metrics/#function-operator!=)**(const QskShadowMetrics & other) const |
| void | **[setSpreadRadius](/docs/classes/class_qsk_shadow_metrics/#function-setspreadradius)**(qreal radius) |
| constexpr qreal | **[spreadRadius](/docs/classes/class_qsk_shadow_metrics/#function-spreadradius)**() const |
| void | **[setBlurRadius](/docs/classes/class_qsk_shadow_metrics/#function-setblurradius)**(qreal radius) |
| constexpr qreal | **[blurRadius](/docs/classes/class_qsk_shadow_metrics/#function-blurradius)**() const |
| constexpr qreal | **[totalRadius](/docs/classes/class_qsk_shadow_metrics/#function-totalradius)**() const |
| void | **[setOffset](/docs/classes/class_qsk_shadow_metrics/#function-setoffset)**(qreal dx, qreal dy) |
| void | **[setOffset](/docs/classes/class_qsk_shadow_metrics/#function-setoffset)**(const QPointF & offset) |
| constexpr QPointF | **[offset](/docs/classes/class_qsk_shadow_metrics/#function-offset)**() const |
| void | **[setSizeMode](/docs/classes/class_qsk_shadow_metrics/#function-setsizemode)**(Qt::SizeMode sizeMode) |
| constexpr Qt::SizeMode | **[sizeMode](/docs/classes/class_qsk_shadow_metrics/#function-sizemode)**() const |
| QskShadowMetrics | **[interpolated](/docs/classes/class_qsk_shadow_metrics/#function-interpolated)**(const QskShadowMetrics & to, qreal value) const |
| QskShadowMetrics | **[toAbsolute](/docs/classes/class_qsk_shadow_metrics/#function-toabsolute)**(const QSizeF & size) const |
| QRectF | **[shadowRect](/docs/classes/class_qsk_shadow_metrics/#function-shadowrect)**(const QRectF & sourceRect) const |
| uint | **[hash](/docs/classes/class_qsk_shadow_metrics/#function-hash)**(uint seed =0) const |
| QVariant | **[interpolate](/docs/classes/class_qsk_shadow_metrics/#function-interpolate)**(const QskShadowMetrics & from, const QskShadowMetrics & to, qreal progress) |

## Public Functions Documentation

### function QskShadowMetrics

```cpp
inline constexpr QskShadowMetrics(
    const QPointF & offset =QPointF()
)
```


### function QskShadowMetrics

```cpp
inline constexpr QskShadowMetrics(
    qreal spreadRadius,
    qreal blurRadius,
    const QPointF & offset =QPointF()
)
```


### function operator==

```cpp
inline constexpr bool operator==(
    const QskShadowMetrics & other
) const
```


### function operator!=

```cpp
inline constexpr bool operator!=(
    const QskShadowMetrics & other
) const
```


### function setSpreadRadius

```cpp
inline void setSpreadRadius(
    qreal radius
)
```


### function spreadRadius

```cpp
inline constexpr qreal spreadRadius() const
```


### function setBlurRadius

```cpp
inline void setBlurRadius(
    qreal radius
)
```


### function blurRadius

```cpp
inline constexpr qreal blurRadius() const
```


### function totalRadius

```cpp
inline constexpr qreal totalRadius() const
```


### function setOffset

```cpp
inline void setOffset(
    qreal dx,
    qreal dy
)
```


### function setOffset

```cpp
inline void setOffset(
    const QPointF & offset
)
```


### function offset

```cpp
inline constexpr QPointF offset() const
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


### function interpolated

```cpp
QskShadowMetrics interpolated(
    const QskShadowMetrics & to,
    qreal value
) const
```


### function toAbsolute

```cpp
QskShadowMetrics toAbsolute(
    const QSizeF & size
) const
```


### function shadowRect

```cpp
QRectF shadowRect(
    const QRectF & sourceRect
) const
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
    const QskShadowMetrics & from,
    const QskShadowMetrics & to,
    qreal progress
)
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET