---
title: QskBoxBorderMetrics
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskBoxBorderMetrics](/docs/classes/class_qsk_box_border_metrics/#function-qskboxbordermetrics)**() |
| constexpr | **[QskBoxBorderMetrics](/docs/classes/class_qsk_box_border_metrics/#function-qskboxbordermetrics)**(qreal width, Qt::SizeMode sizeMode =Qt::AbsoluteSize) |
| constexpr | **[QskBoxBorderMetrics](/docs/classes/class_qsk_box_border_metrics/#function-qskboxbordermetrics)**(qreal left, qreal top, qreal right, qreal bottom, Qt::SizeMode sizeMode =Qt::AbsoluteSize) |
| constexpr | **[QskBoxBorderMetrics](/docs/classes/class_qsk_box_border_metrics/#function-qskboxbordermetrics)**(const QskMargins & widths, Qt::SizeMode sizeMode =Qt::AbsoluteSize) |
| constexpr | **[QskBoxBorderMetrics](/docs/classes/class_qsk_box_border_metrics/#function-qskboxbordermetrics)**(const QMarginsF & widths, Qt::SizeMode sizeMode =Qt::AbsoluteSize) |
| constexpr bool | **[operator==](/docs/classes/class_qsk_box_border_metrics/#function-operator==)**(const QskBoxBorderMetrics & other) const |
| constexpr bool | **[operator!=](/docs/classes/class_qsk_box_border_metrics/#function-operator!=)**(const QskBoxBorderMetrics & other) const |
| constexpr bool | **[isNull](/docs/classes/class_qsk_box_border_metrics/#function-isnull)**() const |
| void | **[setWidthAt](/docs/classes/class_qsk_box_border_metrics/#function-setwidthat)**(Qt::Edges edges, qreal width) |
| qreal | **[widthAt](/docs/classes/class_qsk_box_border_metrics/#function-widthat)**(Qt::Edge edge) const |
| void | **[setWidths](/docs/classes/class_qsk_box_border_metrics/#function-setwidths)**(const QskMargins & widths) |
| constexpr const QskMargins & | **[widths](/docs/classes/class_qsk_box_border_metrics/#function-widths)**() const |
| void | **[setSizeMode](/docs/classes/class_qsk_box_border_metrics/#function-setsizemode)**(Qt::SizeMode sizeMode) |
| constexpr Qt::SizeMode | **[sizeMode](/docs/classes/class_qsk_box_border_metrics/#function-sizemode)**() const |
| QskBoxBorderMetrics | **[interpolated](/docs/classes/class_qsk_box_border_metrics/#function-interpolated)**(const QskBoxBorderMetrics & to, qreal value) const |
| QskBoxBorderMetrics | **[toAbsolute](/docs/classes/class_qsk_box_border_metrics/#function-toabsolute)**(const QSizeF & size) const |
| uint | **[hash](/docs/classes/class_qsk_box_border_metrics/#function-hash)**(uint seed =0) const |
| QVariant | **[interpolate](/docs/classes/class_qsk_box_border_metrics/#function-interpolate)**(const QskBoxBorderMetrics & from, const QskBoxBorderMetrics & to, qreal progress) |

## Public Functions Documentation

### function QskBoxBorderMetrics

```cpp
inline constexpr QskBoxBorderMetrics()
```


### function QskBoxBorderMetrics

```cpp
inline constexpr QskBoxBorderMetrics(
    qreal width,
    Qt::SizeMode sizeMode =Qt::AbsoluteSize
)
```


### function QskBoxBorderMetrics

```cpp
inline constexpr QskBoxBorderMetrics(
    qreal left,
    qreal top,
    qreal right,
    qreal bottom,
    Qt::SizeMode sizeMode =Qt::AbsoluteSize
)
```


### function QskBoxBorderMetrics

```cpp
inline constexpr QskBoxBorderMetrics(
    const QskMargins & widths,
    Qt::SizeMode sizeMode =Qt::AbsoluteSize
)
```


### function QskBoxBorderMetrics

```cpp
inline constexpr QskBoxBorderMetrics(
    const QMarginsF & widths,
    Qt::SizeMode sizeMode =Qt::AbsoluteSize
)
```


### function operator==

```cpp
inline constexpr bool operator==(
    const QskBoxBorderMetrics & other
) const
```


### function operator!=

```cpp
inline constexpr bool operator!=(
    const QskBoxBorderMetrics & other
) const
```


### function isNull

```cpp
inline constexpr bool isNull() const
```


### function setWidthAt

```cpp
void setWidthAt(
    Qt::Edges edges,
    qreal width
)
```


### function widthAt

```cpp
inline qreal widthAt(
    Qt::Edge edge
) const
```


### function setWidths

```cpp
void setWidths(
    const QskMargins & widths
)
```


### function widths

```cpp
inline constexpr const QskMargins & widths() const
```


### function setSizeMode

```cpp
void setSizeMode(
    Qt::SizeMode sizeMode
)
```


### function sizeMode

```cpp
inline constexpr Qt::SizeMode sizeMode() const
```


### function interpolated

```cpp
QskBoxBorderMetrics interpolated(
    const QskBoxBorderMetrics & to,
    qreal value
) const
```


### function toAbsolute

```cpp
QskBoxBorderMetrics toAbsolute(
    const QSizeF & size
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
    const QskBoxBorderMetrics & from,
    const QskBoxBorderMetrics & to,
    qreal progress
)
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET