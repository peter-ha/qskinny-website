---
title: QskBoxBorderColors
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBoxBorderColors](/docs/classes/class_qsk_box_border_colors/#function-qskboxbordercolors)**() |
| | **[QskBoxBorderColors](/docs/classes/class_qsk_box_border_colors/#function-qskboxbordercolors)**(const QColor & left, const QColor & top, const QColor & right, const QColor & bottom) |
| | **[QskBoxBorderColors](/docs/classes/class_qsk_box_border_colors/#function-qskboxbordercolors)**(Qt::GlobalColor color) |
| | **[QskBoxBorderColors](/docs/classes/class_qsk_box_border_colors/#function-qskboxbordercolors)**(QRgb rgb) |
| | **[QskBoxBorderColors](/docs/classes/class_qsk_box_border_colors/#function-qskboxbordercolors)**(const QColor & color) |
| | **[~QskBoxBorderColors](/docs/classes/class_qsk_box_border_colors/#function-~qskboxbordercolors)**() |
| bool | **[operator==](/docs/classes/class_qsk_box_border_colors/#function-operator==)**(const QskBoxBorderColors & other) const |
| bool | **[operator!=](/docs/classes/class_qsk_box_border_colors/#function-operator!=)**(const QskBoxBorderColors & other) const |
| void | **[setAlpha](/docs/classes/class_qsk_box_border_colors/#function-setalpha)**(int alpha) |
| void | **[setColors](/docs/classes/class_qsk_box_border_colors/#function-setcolors)**(const QColor & color) |
| void | **[setColors](/docs/classes/class_qsk_box_border_colors/#function-setcolors)**(const QColor & left, const QColor & top, const QColor & right, const QColor & bottom) |
| void | **[setColor](/docs/classes/class_qsk_box_border_colors/#function-setcolor)**(Qsk::Position position, const QColor & color) |
| QColor | **[color](/docs/classes/class_qsk_box_border_colors/#function-color)**(Qsk::Position position) const |
| void | **[setColorsAt](/docs/classes/class_qsk_box_border_colors/#function-setcolorsat)**(Qt::Edges edges, const QColor & color) |
| QColor | **[colorAt](/docs/classes/class_qsk_box_border_colors/#function-colorat)**(Qt::Edge edge) const |
| QRgb | **[rgb](/docs/classes/class_qsk_box_border_colors/#function-rgb)**(Qsk::Position position) const |
| QskBoxBorderColors | **[interpolated](/docs/classes/class_qsk_box_border_colors/#function-interpolated)**(const QskBoxBorderColors & to, qreal value) const |
| uint | **[hash](/docs/classes/class_qsk_box_border_colors/#function-hash)**(uint seed =0) const |
| bool | **[isMonochrome](/docs/classes/class_qsk_box_border_colors/#function-ismonochrome)**() const |
| bool | **[isVisible](/docs/classes/class_qsk_box_border_colors/#function-isvisible)**() const |
| QVariant | **[interpolate](/docs/classes/class_qsk_box_border_colors/#function-interpolate)**(const QskBoxBorderColors & from, const QskBoxBorderColors & to, qreal ratio) |

## Public Functions Documentation

### function QskBoxBorderColors

```cpp
QskBoxBorderColors()
```


### function QskBoxBorderColors

```cpp
QskBoxBorderColors(
    const QColor & left,
    const QColor & top,
    const QColor & right,
    const QColor & bottom
)
```


### function QskBoxBorderColors

```cpp
inline QskBoxBorderColors(
    Qt::GlobalColor color
)
```


### function QskBoxBorderColors

```cpp
inline QskBoxBorderColors(
    QRgb rgb
)
```


### function QskBoxBorderColors

```cpp
QskBoxBorderColors(
    const QColor & color
)
```


### function ~QskBoxBorderColors

```cpp
~QskBoxBorderColors()
```


### function operator==

```cpp
bool operator==(
    const QskBoxBorderColors & other
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const QskBoxBorderColors & other
) const
```


### function setAlpha

```cpp
void setAlpha(
    int alpha
)
```


### function setColors

```cpp
void setColors(
    const QColor & color
)
```


### function setColors

```cpp
void setColors(
    const QColor & left,
    const QColor & top,
    const QColor & right,
    const QColor & bottom
)
```


### function setColor

```cpp
void setColor(
    Qsk::Position position,
    const QColor & color
)
```


### function color

```cpp
inline QColor color(
    Qsk::Position position
) const
```


### function setColorsAt

```cpp
void setColorsAt(
    Qt::Edges edges,
    const QColor & color
)
```


### function colorAt

```cpp
QColor colorAt(
    Qt::Edge edge
) const
```


### function rgb

```cpp
inline QRgb rgb(
    Qsk::Position position
) const
```


### function interpolated

```cpp
QskBoxBorderColors interpolated(
    const QskBoxBorderColors & to,
    qreal value
) const
```


### function hash

```cpp
uint hash(
    uint seed =0
) const
```


### function isMonochrome

```cpp
bool isMonochrome() const
```


### function isVisible

```cpp
bool isVisible() const
```


### function interpolate

```cpp
static QVariant interpolate(
    const QskBoxBorderColors & from,
    const QskBoxBorderColors & to,
    qreal ratio
)
```


-------------------------------

Updated on 23 January 2021 at 09:50:35 CET