---
title: QskScaleRenderer
layout: docs

---


**Module:** **[Scenegraph](/docs/modules/group__Scenegraph/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setOrientation](/docs/classes/classQskScaleRenderer/#function-setorientation)**(Qt::Orientation orientation) |
| void | **[setBoundaries](/docs/classes/classQskScaleRenderer/#function-setboundaries)**(const QskIntervalF & boundaries) |
| void | **[setTickmarks](/docs/classes/classQskScaleRenderer/#function-settickmarks)**(const QskScaleTickmarks & tickmarks) |
| void | **[setTickColor](/docs/classes/classQskScaleRenderer/#function-settickcolor)**(const QColor & color) |
| void | **[setTickWidth](/docs/classes/classQskScaleRenderer/#function-settickwidth)**(qreal width) |
| void | **[setFont](/docs/classes/classQskScaleRenderer/#function-setfont)**(const QFont & font) |
| void | **[setTextColors](/docs/classes/classQskScaleRenderer/#function-settextcolors)**(const QskTextColors & textColors) |
| void | **[setColorFilter](/docs/classes/classQskScaleRenderer/#function-setcolorfilter)**(const QskColorFilter & colorFilter) |
| QSGNode * | **[updateScaleNode](/docs/classes/classQskScaleRenderer/#function-updatescalenode)**(const QskSkinnable * skinnable, const QRectF & tickmarksRect, const QRectF & labelsRect, QSGNode * node) |
| virtual QVariant | **[labelAt](/docs/classes/classQskScaleRenderer/#function-labelat)**(qreal pos) const |
| QSizeF | **[boundingLabelSize](/docs/classes/classQskScaleRenderer/#function-boundinglabelsize)**() const |
| virtual QSGNode * | **[updateTicksNode](/docs/classes/classQskScaleRenderer/#function-updateticksnode)**(const QskSkinnable * , const QRectF & rect, QSGNode * node) const |
| virtual QSGNode * | **[updateLabelsNode](/docs/classes/classQskScaleRenderer/#function-updatelabelsnode)**(const QskSkinnable * skinnable, const QRectF & rect, QSGNode * node) const |

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


### function boundingLabelSize

```cpp
QSizeF boundingLabelSize() const
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

Updated on  3 February 2021 at 15:05:42 CET