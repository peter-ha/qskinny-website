---
title: QskScaleRenderer
layout: docs

---


**Module:** **[Scenegraph](/docs/modules/group___scenegraph/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setOrientation](/docs/classes/class_qsk_scale_renderer/#function-setorientation)**(Qt::Orientation orientation) |
| void | **[setBoundaries](/docs/classes/class_qsk_scale_renderer/#function-setboundaries)**(const QskIntervalF & boundaries) |
| void | **[setTickmarks](/docs/classes/class_qsk_scale_renderer/#function-settickmarks)**(const QskScaleTickmarks & tickmarks) |
| void | **[setTickColor](/docs/classes/class_qsk_scale_renderer/#function-settickcolor)**(const QColor & color) |
| void | **[setTickWidth](/docs/classes/class_qsk_scale_renderer/#function-settickwidth)**(qreal width) |
| void | **[setFont](/docs/classes/class_qsk_scale_renderer/#function-setfont)**(const QFont & font) |
| void | **[setTextColors](/docs/classes/class_qsk_scale_renderer/#function-settextcolors)**(const QskTextColors & textColors) |
| void | **[setColorFilter](/docs/classes/class_qsk_scale_renderer/#function-setcolorfilter)**(const QskColorFilter & colorFilter) |
| QSGNode * | **[updateScaleNode](/docs/classes/class_qsk_scale_renderer/#function-updatescalenode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & tickmarksRect, const QRectF & labelsRect, QSGNode * node) |
| virtual QVariant | **[labelAt](/docs/classes/class_qsk_scale_renderer/#function-labelat)**(qreal pos) const |
| qreal | **[maxLabelWidth](/docs/classes/class_qsk_scale_renderer/#function-maxlabelwidth)**() const |
| virtual QSGNode * | **[updateTicksNode](/docs/classes/class_qsk_scale_renderer/#function-updateticksnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * , const QRectF & rect, QSGNode * node) const |
| virtual QSGNode * | **[updateLabelsNode](/docs/classes/class_qsk_scale_renderer/#function-updatelabelsnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & rect, QSGNode * node) const |

## Public Functions Documentation

### function setOrientation

```cpp
void setOrientation(
    Qt::Orientation orientation
)
```


### function setBoundaries

```cpp
void setBoundaries(
    const QskIntervalF & boundaries
)
```


### function setTickmarks

```cpp
void setTickmarks(
    const QskScaleTickmarks & tickmarks
)
```


### function setTickColor

```cpp
void setTickColor(
    const QColor & color
)
```


### function setTickWidth

```cpp
void setTickWidth(
    qreal width
)
```


### function setFont

```cpp
void setFont(
    const QFont & font
)
```


### function setTextColors

```cpp
void setTextColors(
    const QskTextColors & textColors
)
```


### function setColorFilter

```cpp
void setColorFilter(
    const QskColorFilter & colorFilter
)
```


### function updateScaleNode

```cpp
QSGNode * updateScaleNode(
    const QskSkinnable * skinnable,
    const QRectF & tickmarksRect,
    const QRectF & labelsRect,
    QSGNode * node
)
```


### function labelAt

```cpp
virtual QVariant labelAt(
    qreal pos
) const
```


### function maxLabelWidth

```cpp
qreal maxLabelWidth() const
```


### function updateTicksNode

```cpp
virtual QSGNode * updateTicksNode(
    const QskSkinnable * ,
    const QRectF & rect,
    QSGNode * node
) const
```


### function updateLabelsNode

```cpp
virtual QSGNode * updateLabelsNode(
    const QskSkinnable * skinnable,
    const QRectF & rect,
    QSGNode * node
) const
```


-------------------------------

Updated on 26 January 2021 at 09:44:53 CET