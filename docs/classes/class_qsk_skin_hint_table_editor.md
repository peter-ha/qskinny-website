---
title: QskSkinHintTableEditor
layout: docs

---




## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinHintTableEditor](/docs/classes/class_qsk_skin_hint_table_editor/#function-qskskinhinttableeditor)**(QskSkinHintTable * table =nullptr) |
| void | **[setTable](/docs/classes/class_qsk_skin_hint_table_editor/#function-settable)**(QskSkinHintTable * table) |
| QskSkinHintTable * | **[table](/docs/classes/class_qsk_skin_hint_table_editor/#function-table)**() const |
| void | **[setHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-sethint)**(QskAspect aspect, const QVariant & hint) |
| const QVariant & | **[hint](/docs/classes/class_qsk_skin_hint_table_editor/#function-hint)**(QskAspect aspect) const |
| bool | **[removeHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-removehint)**(QskAspect aspect) |
| QVariant | **[takeHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-takehint)**(QskAspect aspect) |
| bool | **[hasHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-hashint)**(QskAspect aspect) const |
| template <typename T \> <br>void | **[setHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-sethint)**(QskAspect aspect, const T & hint) |
| template <typename T \> <br>T | **[hint](/docs/classes/class_qsk_skin_hint_table_editor/#function-hint)**(QskAspect aspect) const |
| void | **[setAnimation](/docs/classes/class_qsk_skin_hint_table_editor/#function-setanimation)**(QskAspect aspect, QskAnimationHint hint) |
| QskAnimationHint | **[animation](/docs/classes/class_qsk_skin_hint_table_editor/#function-animation)**(QskAspect aspect) const |
| void | **[setFlagHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-setflaghint)**(QskAspect aspect, const QVariant & hint) |
| void | **[removeFlagHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-removeflaghint)**(QskAspect aspect) |
| QVariant | **[flagHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-flaghint)**(QskAspect aspect) const |
| template <typename T \> <br>void | **[setFlagHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-setflaghint)**(QskAspect aspect, const T & hint) |
| template <typename T \> <br>T | **[flagHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-flaghint)**(QskAspect aspect) const |
| void | **[setMetricHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-setmetrichint)**(QskAspect aspect, const QVariant & hint) |
| void | **[removeMetricHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-removemetrichint)**(QskAspect aspect) |
| QVariant | **[metricHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-metrichint)**(QskAspect aspect) const |
| template <typename T \> <br>void | **[setMetricHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-setmetrichint)**(QskAspect aspect, const T & hint) |
| template <typename T \> <br>T | **[metricHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-metrichint)**(QskAspect aspect) const |
| void | **[setColorHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-setcolorhint)**(QskAspect aspect, const QVariant & hint) |
| void | **[removeColorHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-removecolorhint)**(QskAspect aspect) |
| QVariant | **[colorHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-colorhint)**(QskAspect aspect) const |
| template <typename T \> <br>void | **[setColorHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-setcolorhint)**(QskAspect aspect, const T & hint) |
| template <typename T \> <br>T | **[colorHint](/docs/classes/class_qsk_skin_hint_table_editor/#function-colorhint)**(QskAspect aspect) const |
| void | **[setFlag](/docs/classes/class_qsk_skin_hint_table_editor/#function-setflag)**(QskAspect aspect, int flag) |
| int | **[flag](/docs/classes/class_qsk_skin_hint_table_editor/#function-flag)**(QskAspect aspect) const |
| void | **[setMetric](/docs/classes/class_qsk_skin_hint_table_editor/#function-setmetric)**(QskAspect aspect, qreal metric) |
| qreal | **[metric](/docs/classes/class_qsk_skin_hint_table_editor/#function-metric)**(QskAspect aspect) const |
| void | **[setColor](/docs/classes/class_qsk_skin_hint_table_editor/#function-setcolor)**(QskAspect aspect, Qt::GlobalColor color) |
| void | **[setColor](/docs/classes/class_qsk_skin_hint_table_editor/#function-setcolor)**(QskAspect aspect, QRgb rgb) |
| void | **[setColor](/docs/classes/class_qsk_skin_hint_table_editor/#function-setcolor)**(QskAspect aspect, const QColor & color) |
| QColor | **[color](/docs/classes/class_qsk_skin_hint_table_editor/#function-color)**(QskAspect aspect) const |
| void | **[setHGradient](/docs/classes/class_qsk_skin_hint_table_editor/#function-sethgradient)**(QskAspect aspect, const QColor & color1, const QColor & color2) |
| void | **[setVGradient](/docs/classes/class_qsk_skin_hint_table_editor/#function-setvgradient)**(QskAspect aspect, const QColor & color1, const QColor & color2) |
| void | **[setGradient](/docs/classes/class_qsk_skin_hint_table_editor/#function-setgradient)**(QskAspect aspect, const QskGradient & gradient) |
| QskGradient | **[gradient](/docs/classes/class_qsk_skin_hint_table_editor/#function-gradient)**(QskAspect aspect) const |
| void | **[setStrutSize](/docs/classes/class_qsk_skin_hint_table_editor/#function-setstrutsize)**(QskAspect aspect, const QSizeF & size) |
| void | **[setStrutSize](/docs/classes/class_qsk_skin_hint_table_editor/#function-setstrutsize)**(QskAspect aspect, qreal width, qreal height) |
| void | **[removeStrutSize](/docs/classes/class_qsk_skin_hint_table_editor/#function-removestrutsize)**(QskAspect aspect) |
| QSizeF | **[strutSize](/docs/classes/class_qsk_skin_hint_table_editor/#function-strutsize)**(QskAspect aspect) const |
| void | **[setMargin](/docs/classes/class_qsk_skin_hint_table_editor/#function-setmargin)**(QskAspect aspect, const QskMargins & margins) |
| void | **[setMargin](/docs/classes/class_qsk_skin_hint_table_editor/#function-setmargin)**(QskAspect aspect, qreal left, qreal top, qreal right, qreal bottom) |
| void | **[removeMargin](/docs/classes/class_qsk_skin_hint_table_editor/#function-removemargin)**(QskAspect aspect) |
| QskMargins | **[margin](/docs/classes/class_qsk_skin_hint_table_editor/#function-margin)**(QskAspect aspect) const |
| void | **[setPadding](/docs/classes/class_qsk_skin_hint_table_editor/#function-setpadding)**(QskAspect aspect, const QskMargins & padding) |
| void | **[setPadding](/docs/classes/class_qsk_skin_hint_table_editor/#function-setpadding)**(QskAspect aspect, qreal left, qreal top, qreal right, qreal bottom) |
| void | **[removePadding](/docs/classes/class_qsk_skin_hint_table_editor/#function-removepadding)**(QskAspect aspect) |
| QskMargins | **[padding](/docs/classes/class_qsk_skin_hint_table_editor/#function-padding)**(QskAspect aspect) const |
| void | **[setSpacing](/docs/classes/class_qsk_skin_hint_table_editor/#function-setspacing)**(QskAspect aspect, qreal spacing) |
| void | **[removeSpacing](/docs/classes/class_qsk_skin_hint_table_editor/#function-removespacing)**(QskAspect aspect) |
| qreal | **[spacing](/docs/classes/class_qsk_skin_hint_table_editor/#function-spacing)**(QskAspect aspect) const |
| void | **[setAlignment](/docs/classes/class_qsk_skin_hint_table_editor/#function-setalignment)**(QskAspect aspect, Qt::Alignment alignment) |
| void | **[removeAlignment](/docs/classes/class_qsk_skin_hint_table_editor/#function-removealignment)**(QskAspect aspect) |
| Qt::Alignment | **[alignment](/docs/classes/class_qsk_skin_hint_table_editor/#function-alignment)**(QskAspect aspect) const |
| void | **[setFontRole](/docs/classes/class_qsk_skin_hint_table_editor/#function-setfontrole)**(QskAspect aspect, int fontRole) |
| void | **[removeFontRole](/docs/classes/class_qsk_skin_hint_table_editor/#function-removefontrole)**(QskAspect aspect) |
| int | **[fontRole](/docs/classes/class_qsk_skin_hint_table_editor/#function-fontrole)**(QskAspect aspect) const |
| void | **[setGraphicRole](/docs/classes/class_qsk_skin_hint_table_editor/#function-setgraphicrole)**(QskAspect aspect, int graphicRole) |
| void | **[removeGraphicRole](/docs/classes/class_qsk_skin_hint_table_editor/#function-removegraphicrole)**(QskAspect aspect) |
| int | **[graphicRole](/docs/classes/class_qsk_skin_hint_table_editor/#function-graphicrole)**(QskAspect aspect) const |
| void | **[setBoxShape](/docs/classes/class_qsk_skin_hint_table_editor/#function-setboxshape)**(QskAspect aspect, qreal radius, Qt::SizeMode sizeMode =Qt::AbsoluteSize) |
| void | **[setBoxShape](/docs/classes/class_qsk_skin_hint_table_editor/#function-setboxshape)**(QskAspect aspect, qreal topLeft, qreal topRight, qreal bottomLeft, qreal bottomRight, Qt::SizeMode sizeMode =Qt::AbsoluteSize) |
| void | **[setBoxShape](/docs/classes/class_qsk_skin_hint_table_editor/#function-setboxshape)**(QskAspect aspect, const QskBoxShapeMetrics & shape) |
| void | **[removeBoxShape](/docs/classes/class_qsk_skin_hint_table_editor/#function-removeboxshape)**(QskAspect aspect) |
| QskBoxShapeMetrics | **[boxShape](/docs/classes/class_qsk_skin_hint_table_editor/#function-boxshape)**(QskAspect aspect) const |
| void | **[setBoxBorderMetrics](/docs/classes/class_qsk_skin_hint_table_editor/#function-setboxbordermetrics)**(QskAspect aspect, qreal borderWidth, Qt::SizeMode sizeMode =Qt::AbsoluteSize) |
| void | **[setBoxBorderMetrics](/docs/classes/class_qsk_skin_hint_table_editor/#function-setboxbordermetrics)**(QskAspect aspect, qreal left, qreal top, qreal right, qreal bottom, Qt::SizeMode sizeMode =Qt::AbsoluteSize) |
| void | **[setBoxBorderMetrics](/docs/classes/class_qsk_skin_hint_table_editor/#function-setboxbordermetrics)**(QskAspect aspect, const QskBoxBorderMetrics & borderMetrics) |
| void | **[removeBoxBorderMetric](/docs/classes/class_qsk_skin_hint_table_editor/#function-removeboxbordermetric)**(QskAspect aspect) |
| QskBoxBorderMetrics | **[boxBorderMetrics](/docs/classes/class_qsk_skin_hint_table_editor/#function-boxbordermetrics)**(QskAspect aspect) const |
| void | **[setBoxBorderColors](/docs/classes/class_qsk_skin_hint_table_editor/#function-setboxbordercolors)**(QskAspect aspect, const QskBoxBorderColors & borderColors) |
| void | **[removeBoxBorderColors](/docs/classes/class_qsk_skin_hint_table_editor/#function-removeboxbordercolors)**(QskAspect aspect) |
| QskBoxBorderColors | **[boxBorderColors](/docs/classes/class_qsk_skin_hint_table_editor/#function-boxbordercolors)**(QskAspect aspect) const |

## Public Functions Documentation

### function QskSkinHintTableEditor

```cpp
QskSkinHintTableEditor(
    QskSkinHintTable * table =nullptr
)
```


### function setTable

```cpp
void setTable(
    QskSkinHintTable * table
)
```


### function table

```cpp
QskSkinHintTable * table() const
```


### function setHint

```cpp
inline void setHint(
    QskAspect aspect,
    const QVariant & hint
)
```


### function hint

```cpp
inline const QVariant & hint(
    QskAspect aspect
) const
```


### function removeHint

```cpp
inline bool removeHint(
    QskAspect aspect
)
```


### function takeHint

```cpp
inline QVariant takeHint(
    QskAspect aspect
)
```


### function hasHint

```cpp
inline bool hasHint(
    QskAspect aspect
) const
```


### function setHint

```cpp
template <typename T >
inline void setHint(
    QskAspect aspect,
    const T & hint
)
```


### function hint

```cpp
template <typename T >
inline T hint(
    QskAspect aspect
) const
```


### function setAnimation

```cpp
inline void setAnimation(
    QskAspect aspect,
    QskAnimationHint hint
)
```


### function animation

```cpp
inline QskAnimationHint animation(
    QskAspect aspect
) const
```


### function setFlagHint

```cpp
inline void setFlagHint(
    QskAspect aspect,
    const QVariant & hint
)
```


### function removeFlagHint

```cpp
inline void removeFlagHint(
    QskAspect aspect
)
```


### function flagHint

```cpp
inline QVariant flagHint(
    QskAspect aspect
) const
```


### function setFlagHint

```cpp
template <typename T >
inline void setFlagHint(
    QskAspect aspect,
    const T & hint
)
```


### function flagHint

```cpp
template <typename T >
inline T flagHint(
    QskAspect aspect
) const
```


### function setMetricHint

```cpp
inline void setMetricHint(
    QskAspect aspect,
    const QVariant & hint
)
```


### function removeMetricHint

```cpp
inline void removeMetricHint(
    QskAspect aspect
)
```


### function metricHint

```cpp
inline QVariant metricHint(
    QskAspect aspect
) const
```


### function setMetricHint

```cpp
template <typename T >
inline void setMetricHint(
    QskAspect aspect,
    const T & hint
)
```


### function metricHint

```cpp
template <typename T >
inline T metricHint(
    QskAspect aspect
) const
```


### function setColorHint

```cpp
inline void setColorHint(
    QskAspect aspect,
    const QVariant & hint
)
```


### function removeColorHint

```cpp
inline void removeColorHint(
    QskAspect aspect
)
```


### function colorHint

```cpp
inline QVariant colorHint(
    QskAspect aspect
) const
```


### function setColorHint

```cpp
template <typename T >
inline void setColorHint(
    QskAspect aspect,
    const T & hint
)
```


### function colorHint

```cpp
template <typename T >
inline T colorHint(
    QskAspect aspect
) const
```


### function setFlag

```cpp
void setFlag(
    QskAspect aspect,
    int flag
)
```


### function flag

```cpp
int flag(
    QskAspect aspect
) const
```


### function setMetric

```cpp
void setMetric(
    QskAspect aspect,
    qreal metric
)
```


### function metric

```cpp
qreal metric(
    QskAspect aspect
) const
```


### function setColor

```cpp
void setColor(
    QskAspect aspect,
    Qt::GlobalColor color
)
```


### function setColor

```cpp
void setColor(
    QskAspect aspect,
    QRgb rgb
)
```


### function setColor

```cpp
void setColor(
    QskAspect aspect,
    const QColor & color
)
```


### function color

```cpp
QColor color(
    QskAspect aspect
) const
```


### function setHGradient

```cpp
void setHGradient(
    QskAspect aspect,
    const QColor & color1,
    const QColor & color2
)
```


### function setVGradient

```cpp
void setVGradient(
    QskAspect aspect,
    const QColor & color1,
    const QColor & color2
)
```


### function setGradient

```cpp
void setGradient(
    QskAspect aspect,
    const QskGradient & gradient
)
```


### function gradient

```cpp
QskGradient gradient(
    QskAspect aspect
) const
```


### function setStrutSize

```cpp
void setStrutSize(
    QskAspect aspect,
    const QSizeF & size
)
```


### function setStrutSize

```cpp
void setStrutSize(
    QskAspect aspect,
    qreal width,
    qreal height
)
```


### function removeStrutSize

```cpp
void removeStrutSize(
    QskAspect aspect
)
```


### function strutSize

```cpp
QSizeF strutSize(
    QskAspect aspect
) const
```


### function setMargin

```cpp
void setMargin(
    QskAspect aspect,
    const QskMargins & margins
)
```


### function setMargin

```cpp
void setMargin(
    QskAspect aspect,
    qreal left,
    qreal top,
    qreal right,
    qreal bottom
)
```


### function removeMargin

```cpp
void removeMargin(
    QskAspect aspect
)
```


### function margin

```cpp
QskMargins margin(
    QskAspect aspect
) const
```


### function setPadding

```cpp
void setPadding(
    QskAspect aspect,
    const QskMargins & padding
)
```


### function setPadding

```cpp
void setPadding(
    QskAspect aspect,
    qreal left,
    qreal top,
    qreal right,
    qreal bottom
)
```


### function removePadding

```cpp
void removePadding(
    QskAspect aspect
)
```


### function padding

```cpp
QskMargins padding(
    QskAspect aspect
) const
```


### function setSpacing

```cpp
void setSpacing(
    QskAspect aspect,
    qreal spacing
)
```


### function removeSpacing

```cpp
void removeSpacing(
    QskAspect aspect
)
```


### function spacing

```cpp
qreal spacing(
    QskAspect aspect
) const
```


### function setAlignment

```cpp
void setAlignment(
    QskAspect aspect,
    Qt::Alignment alignment
)
```


### function removeAlignment

```cpp
void removeAlignment(
    QskAspect aspect
)
```


### function alignment

```cpp
Qt::Alignment alignment(
    QskAspect aspect
) const
```


### function setFontRole

```cpp
void setFontRole(
    QskAspect aspect,
    int fontRole
)
```


### function removeFontRole

```cpp
void removeFontRole(
    QskAspect aspect
)
```


### function fontRole

```cpp
int fontRole(
    QskAspect aspect
) const
```


### function setGraphicRole

```cpp
void setGraphicRole(
    QskAspect aspect,
    int graphicRole
)
```


### function removeGraphicRole

```cpp
void removeGraphicRole(
    QskAspect aspect
)
```


### function graphicRole

```cpp
int graphicRole(
    QskAspect aspect
) const
```


### function setBoxShape

```cpp
void setBoxShape(
    QskAspect aspect,
    qreal radius,
    Qt::SizeMode sizeMode =Qt::AbsoluteSize
)
```


### function setBoxShape

```cpp
void setBoxShape(
    QskAspect aspect,
    qreal topLeft,
    qreal topRight,
    qreal bottomLeft,
    qreal bottomRight,
    Qt::SizeMode sizeMode =Qt::AbsoluteSize
)
```


### function setBoxShape

```cpp
void setBoxShape(
    QskAspect aspect,
    const QskBoxShapeMetrics & shape
)
```


### function removeBoxShape

```cpp
void removeBoxShape(
    QskAspect aspect
)
```


### function boxShape

```cpp
QskBoxShapeMetrics boxShape(
    QskAspect aspect
) const
```


### function setBoxBorderMetrics

```cpp
void setBoxBorderMetrics(
    QskAspect aspect,
    qreal borderWidth,
    Qt::SizeMode sizeMode =Qt::AbsoluteSize
)
```


### function setBoxBorderMetrics

```cpp
void setBoxBorderMetrics(
    QskAspect aspect,
    qreal left,
    qreal top,
    qreal right,
    qreal bottom,
    Qt::SizeMode sizeMode =Qt::AbsoluteSize
)
```


### function setBoxBorderMetrics

```cpp
void setBoxBorderMetrics(
    QskAspect aspect,
    const QskBoxBorderMetrics & borderMetrics
)
```


### function removeBoxBorderMetric

```cpp
void removeBoxBorderMetric(
    QskAspect aspect
)
```


### function boxBorderMetrics

```cpp
QskBoxBorderMetrics boxBorderMetrics(
    QskAspect aspect
) const
```


### function setBoxBorderColors

```cpp
void setBoxBorderColors(
    QskAspect aspect,
    const QskBoxBorderColors & borderColors
)
```


### function removeBoxBorderColors

```cpp
void removeBoxBorderColors(
    QskAspect aspect
)
```


### function boxBorderColors

```cpp
QskBoxBorderColors boxBorderColors(
    QskAspect aspect
) const
```


-------------------------------

Updated on 22 January 2021 at 17:05:47 CET