---
title: QskSkinnable
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



Inherited by [QskControl](/docs/classes/class_qsk_control/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinnable](/docs/classes/class_qsk_skinnable/#function-qskskinnable)**() |
| virtual | **[~QskSkinnable](/docs/classes/class_qsk_skinnable/#function-~qskskinnable)**() |
| void | **[setSkinlet](/docs/classes/class_qsk_skinnable/#function-setskinlet)**(const [QskSkinlet](/docs/classes/class_qsk_skinlet/) * skinlet) |
| const [QskSkinlet](/docs/classes/class_qsk_skinlet/) * | **[skinlet](/docs/classes/class_qsk_skinnable/#function-skinlet)**() const |
| QFont | **[effectiveFont](/docs/classes/class_qsk_skinnable/#function-effectivefont)**(QskAspect aspect) const |
| QskColorFilter | **[effectiveGraphicFilter](/docs/classes/class_qsk_skinnable/#function-effectivegraphicfilter)**(QskAspect aspect) const |
| bool | **[setAnimationHint](/docs/classes/class_qsk_skinnable/#function-setanimationhint)**(QskAspect aspect, QskAnimationHint animation) |
| QskAnimationHint | **[animationHint](/docs/classes/class_qsk_skinnable/#function-animationhint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setSkinHint](/docs/classes/class_qsk_skinnable/#function-setskinhint)**(QskAspect aspect, const QVariant & hint) |
| bool | **[resetSkinHint](/docs/classes/class_qsk_skinnable/#function-resetskinhint)**(QskAspect aspect) |
| QskAnimationHint | **[effectiveAnimation](/docs/classes/class_qsk_skinnable/#function-effectiveanimation)**(QskAspect::Type type, QskAspect::Subcontrol subControl, QskAspect::State state, QskSkinHintStatus * status =nullptr) const |
| QVariant | **[effectiveSkinHint](/docs/classes/class_qsk_skinnable/#function-effectiveskinhint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| virtual QskAspect::Placement | **[effectivePlacement](/docs/classes/class_qsk_skinnable/#function-effectiveplacement)**() const |
| QskSkinHintStatus | **[hintStatus](/docs/classes/class_qsk_skinnable/#function-hintstatus)**(QskAspect aspect) const |
| QskAspect::State | **[skinState](/docs/classes/class_qsk_skinnable/#function-skinstate)**() const |
| const char * | **[skinStateAsPrintable](/docs/classes/class_qsk_skinnable/#function-skinstateasprintable)**() const |
| const char * | **[skinStateAsPrintable](/docs/classes/class_qsk_skinnable/#function-skinstateasprintable)**(QskAspect::State state) const |
| QRectF | **[subControlRect](/docs/classes/class_qsk_skinnable/#function-subcontrolrect)**(const QRectF & contentsRect, QskAspect::Subcontrol subControl) const |
| QRectF | **[subControlContentsRect](/docs/classes/class_qsk_skinnable/#function-subcontrolcontentsrect)**(const QRectF & contentsRect, QskAspect::Subcontrol subControl) const |
| QSizeF | **[outerBoxSize](/docs/classes/class_qsk_skinnable/#function-outerboxsize)**(QskAspect aspect, const QSizeF & innerBoxSize) const |
| QSizeF | **[innerBoxSize](/docs/classes/class_qsk_skinnable/#function-innerboxsize)**(QskAspect aspect, const QSizeF & outerBoxSize) const |
| QRectF | **[innerBox](/docs/classes/class_qsk_skinnable/#function-innerbox)**(QskAspect aspect, const QRectF & outerBox) const |
| QRectF | **[outerBox](/docs/classes/class_qsk_skinnable/#function-outerbox)**(QskAspect aspect, const QRectF & innerBox) const |
| QMarginsF | **[innerPadding](/docs/classes/class_qsk_skinnable/#function-innerpadding)**(QskAspect aspect, const QSizeF & outerBoxSize) const |
| const [QskSkinlet](/docs/classes/class_qsk_skinlet/) * | **[effectiveSkinlet](/docs/classes/class_qsk_skinnable/#function-effectiveskinlet)**() const |
| QskSkin * | **[effectiveSkin](/docs/classes/class_qsk_skinnable/#function-effectiveskin)**() const |
| void | **[startTransition](/docs/classes/class_qsk_skinnable/#function-starttransition)**(QskAspect aspect, QskAnimationHint animationHint, QVariant from, QVariant to) |
| virtual QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/class_qsk_skinnable/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const |
| [QskControl](/docs/classes/class_qsk_control/) * | **[controlCast](/docs/classes/class_qsk_skinnable/#function-controlcast)**() |
| const [QskControl](/docs/classes/class_qsk_control/) * | **[controlCast](/docs/classes/class_qsk_skinnable/#function-controlcast)**() const |
| virtual [QskControl](/docs/classes/class_qsk_control/) * | **[owningControl](/docs/classes/class_qsk_skinnable/#function-owningcontrol)**() const =0 |
| virtual const QMetaObject * | **[metaObject](/docs/classes/class_qsk_skinnable/#function-metaobject)**() const =0 |
| void | **[debug](/docs/classes/class_qsk_skinnable/#function-debug)**(QskAspect aspect) const |
| void | **[debug](/docs/classes/class_qsk_skinnable/#function-debug)**(QskAspect::State state) const |
| void | **[debug](/docs/classes/class_qsk_skinnable/#function-debug)**(QDebug debug, QskAspect aspect) const |
| void | **[debug](/docs/classes/class_qsk_skinnable/#function-debug)**(QDebug debug, QskAspect::State state) const |
| void | **[setSkinState](/docs/classes/class_qsk_skinnable/#function-setskinstate)**(QskAspect::State newState, bool animated =true) |
| void | **[setSkinStateFlag](/docs/classes/class_qsk_skinnable/#function-setskinstateflag)**(QskAspect::State stateFlag, bool on =true) |
| bool | **[setColor](/docs/classes/class_qsk_skinnable/#function-setcolor)**(QskAspect aspect, Qt::GlobalColor color) |
| bool | **[setColor](/docs/classes/class_qsk_skinnable/#function-setcolor)**(QskAspect aspect, QRgb rgb) |
| bool | **[setColor](/docs/classes/class_qsk_skinnable/#function-setcolor)**(QskAspect aspect, const QColor & color) |
| bool | **[resetColor](/docs/classes/class_qsk_skinnable/#function-resetcolor)**(QskAspect aspect) |
| QColor | **[color](/docs/classes/class_qsk_skinnable/#function-color)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setMetric](/docs/classes/class_qsk_skinnable/#function-setmetric)**(QskAspect aspect, qreal metric) |
| bool | **[resetMetric](/docs/classes/class_qsk_skinnable/#function-resetmetric)**(QskAspect aspect) |
| qreal | **[metric](/docs/classes/class_qsk_skinnable/#function-metric)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setFlagHint](/docs/classes/class_qsk_skinnable/#function-setflaghint)**(QskAspect aspect, int flag) |
| bool | **[resetFlagHint](/docs/classes/class_qsk_skinnable/#function-resetflaghint)**(QskAspect aspect) |
| int | **[flagHint](/docs/classes/class_qsk_skinnable/#function-flaghint)**(QskAspect aspect) const |
| template <typename T \> <br>T | **[flagHint](/docs/classes/class_qsk_skinnable/#function-flaghint)**(QskAspect aspect, T defaultValue =T()) const |
| bool | **[setStrutSizeHint](/docs/classes/class_qsk_skinnable/#function-setstrutsizehint)**(QskAspect aspect, const QSizeF & strut) |
| bool | **[setStrutSizeHint](/docs/classes/class_qsk_skinnable/#function-setstrutsizehint)**(QskAspect aspect, qreal width, qreal height) |
| bool | **[resetStrutSizeHint](/docs/classes/class_qsk_skinnable/#function-resetstrutsizehint)**(QskAspect aspect) |
| QSizeF | **[strutSizeHint](/docs/classes/class_qsk_skinnable/#function-strutsizehint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setMarginHint](/docs/classes/class_qsk_skinnable/#function-setmarginhint)**(QskAspect aspect, qreal margins) |
| bool | **[setMarginHint](/docs/classes/class_qsk_skinnable/#function-setmarginhint)**(QskAspect aspect, const QMarginsF & margins) |
| bool | **[resetMarginHint](/docs/classes/class_qsk_skinnable/#function-resetmarginhint)**(QskAspect aspect) |
| QMarginsF | **[marginHint](/docs/classes/class_qsk_skinnable/#function-marginhint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setPaddingHint](/docs/classes/class_qsk_skinnable/#function-setpaddinghint)**(QskAspect aspect, qreal padding) |
| bool | **[setPaddingHint](/docs/classes/class_qsk_skinnable/#function-setpaddinghint)**(QskAspect aspect, const QMarginsF & padding) |
| bool | **[resetPaddingHint](/docs/classes/class_qsk_skinnable/#function-resetpaddinghint)**(QskAspect aspect) |
| QMarginsF | **[paddingHint](/docs/classes/class_qsk_skinnable/#function-paddinghint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setGradientHint](/docs/classes/class_qsk_skinnable/#function-setgradienthint)**(QskAspect aspect, const QskGradient & gradient) |
| QskGradient | **[gradientHint](/docs/classes/class_qsk_skinnable/#function-gradienthint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setBoxShapeHint](/docs/classes/class_qsk_skinnable/#function-setboxshapehint)**(QskAspect aspect, const QskBoxShapeMetrics & shape) |
| bool | **[resetBoxShapeHint](/docs/classes/class_qsk_skinnable/#function-resetboxshapehint)**(QskAspect aspect) |
| QskBoxShapeMetrics | **[boxShapeHint](/docs/classes/class_qsk_skinnable/#function-boxshapehint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setBoxBorderMetricsHint](/docs/classes/class_qsk_skinnable/#function-setboxbordermetricshint)**(QskAspect aspect, const QskBoxBorderMetrics & border) |
| bool | **[resetBoxBorderMetricsHint](/docs/classes/class_qsk_skinnable/#function-resetboxbordermetricshint)**(QskAspect aspect) |
| QskBoxBorderMetrics | **[boxBorderMetricsHint](/docs/classes/class_qsk_skinnable/#function-boxbordermetricshint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setBoxBorderColorsHint](/docs/classes/class_qsk_skinnable/#function-setboxbordercolorshint)**(QskAspect aspect, const QskBoxBorderColors & colors) |
| bool | **[resetBoxBorderColorsHint](/docs/classes/class_qsk_skinnable/#function-resetboxbordercolorshint)**(QskAspect aspect) |
| QskBoxBorderColors | **[boxBorderColorsHint](/docs/classes/class_qsk_skinnable/#function-boxbordercolorshint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setSpacingHint](/docs/classes/class_qsk_skinnable/#function-setspacinghint)**(QskAspect aspect, qreal spacing) |
| bool | **[resetSpacingHint](/docs/classes/class_qsk_skinnable/#function-resetspacinghint)**(QskAspect aspect) |
| qreal | **[spacingHint](/docs/classes/class_qsk_skinnable/#function-spacinghint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setAlignmentHint](/docs/classes/class_qsk_skinnable/#function-setalignmenthint)**(QskAspect aspect, Qt::Alignment alignment) |
| bool | **[resetAlignmentHint](/docs/classes/class_qsk_skinnable/#function-resetalignmenthint)**(QskAspect aspect) |
| Qt::Alignment | **[alignmentHint](/docs/classes/class_qsk_skinnable/#function-alignmenthint)**(QskAspect aspect, Qt::Alignment defaultAlignment =Qt::Alignment()) const |
| bool | **[setFontRoleHint](/docs/classes/class_qsk_skinnable/#function-setfontrolehint)**(QskAspect aspect, int role) |
| bool | **[resetFontRoleHint](/docs/classes/class_qsk_skinnable/#function-resetfontrolehint)**(QskAspect aspect) |
| int | **[fontRoleHint](/docs/classes/class_qsk_skinnable/#function-fontrolehint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setGraphicRoleHint](/docs/classes/class_qsk_skinnable/#function-setgraphicrolehint)**(QskAspect aspect, int role) |
| bool | **[resetGraphicRoleHint](/docs/classes/class_qsk_skinnable/#function-resetgraphicrolehint)**(QskAspect aspect) |
| int | **[graphicRoleHint](/docs/classes/class_qsk_skinnable/#function-graphicrolehint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[updateNode](/docs/classes/class_qsk_skinnable/#function-updatenode)**(QSGNode * parentNode) |
| virtual bool | **[isTransitionAccepted](/docs/classes/class_qsk_skinnable/#function-istransitionaccepted)**(QskAspect aspect) const |
| QskSkinHintTable & | **[hintTable](/docs/classes/class_qsk_skinnable/#function-hinttable)**() |
| const QskSkinHintTable & | **[hintTable](/docs/classes/class_qsk_skinnable/#function-hinttable)**() const |

## Public Functions Documentation

### function QskSkinnable

```cpp
QskSkinnable()
```


### function ~QskSkinnable

```cpp
virtual ~QskSkinnable()
```


### function setSkinlet

```cpp
void setSkinlet(
    const QskSkinlet * skinlet
)
```


Allows overriding the QskControl::Skin used by this control to render its contents. 


### function skinlet

```cpp
const QskSkinlet * skinlet() const
```


**See**: effectiveSkinlet() 

**Return**: Skinlet assigned by [setSkinlet()](/docs/classes/class_qsk_skinnable/#function-setskinlet). 

### function effectiveFont

```cpp
QFont effectiveFont(
    QskAspect aspect
) const
```


### function effectiveGraphicFilter

```cpp
QskColorFilter effectiveGraphicFilter(
    QskAspect aspect
) const
```


### function setAnimationHint

```cpp
bool setAnimationHint(
    QskAspect aspect,
    QskAnimationHint animation
)
```


### function animationHint

```cpp
QskAnimationHint animationHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function setSkinHint

```cpp
bool setSkinHint(
    QskAspect aspect,
    const QVariant & hint
)
```


### function resetSkinHint

```cpp
bool resetSkinHint(
    QskAspect aspect
)
```


### function effectiveAnimation

```cpp
QskAnimationHint effectiveAnimation(
    QskAspect::Type type,
    QskAspect::Subcontrol subControl,
    QskAspect::State state,
    QskSkinHintStatus * status =nullptr
) const
```


### function effectiveSkinHint

```cpp
QVariant effectiveSkinHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function effectivePlacement

```cpp
virtual QskAspect::Placement effectivePlacement() const
```


**Reimplemented by**: [QskSeparator::effectivePlacement](/docs/classes/class_qsk_separator/#function-effectiveplacement)


### function hintStatus

```cpp
QskSkinHintStatus hintStatus(
    QskAspect aspect
) const
```


### function skinState

```cpp
QskAspect::State skinState() const
```


### function skinStateAsPrintable

```cpp
const char * skinStateAsPrintable() const
```


### function skinStateAsPrintable

```cpp
const char * skinStateAsPrintable(
    QskAspect::State state
) const
```


### function subControlRect

```cpp
QRectF subControlRect(
    const QRectF & contentsRect,
    QskAspect::Subcontrol subControl
) const
```


### function subControlContentsRect

```cpp
QRectF subControlContentsRect(
    const QRectF & contentsRect,
    QskAspect::Subcontrol subControl
) const
```


### function outerBoxSize

```cpp
QSizeF outerBoxSize(
    QskAspect aspect,
    const QSizeF & innerBoxSize
) const
```


### function innerBoxSize

```cpp
QSizeF innerBoxSize(
    QskAspect aspect,
    const QSizeF & outerBoxSize
) const
```


### function innerBox

```cpp
QRectF innerBox(
    QskAspect aspect,
    const QRectF & outerBox
) const
```


### function outerBox

```cpp
QRectF outerBox(
    QskAspect aspect,
    const QRectF & innerBox
) const
```


### function innerPadding

```cpp
QMarginsF innerPadding(
    QskAspect aspect,
    const QSizeF & outerBoxSize
) const
```


### function effectiveSkinlet

```cpp
const QskSkinlet * effectiveSkinlet() const
```


### function effectiveSkin

```cpp
QskSkin * effectiveSkin() const
```


### function startTransition

```cpp
void startTransition(
    QskAspect aspect,
    QskAnimationHint animationHint,
    QVariant from,
    QVariant to
)
```


### function effectiveSubcontrol

```cpp
virtual QskAspect::Subcontrol effectiveSubcontrol(
    QskAspect::Subcontrol subControl
) const
```


### function controlCast

```cpp
QskControl * controlCast()
```


### function controlCast

```cpp
const QskControl * controlCast() const
```


### function owningControl

```cpp
virtual QskControl * owningControl() const =0
```


**Reimplemented by**: [QskControl::owningControl](/docs/classes/class_qsk_control/#function-owningcontrol)


### function metaObject

```cpp
virtual const QMetaObject * metaObject() const =0
```


### function debug

```cpp
void debug(
    QskAspect aspect
) const
```


### function debug

```cpp
void debug(
    QskAspect::State state
) const
```


### function debug

```cpp
void debug(
    QDebug debug,
    QskAspect aspect
) const
```


### function debug

```cpp
void debug(
    QDebug debug,
    QskAspect::State state
) const
```


### function setSkinState

```cpp
void setSkinState(
    QskAspect::State newState,
    bool animated =true
)
```


### function setSkinStateFlag

```cpp
void setSkinStateFlag(
    QskAspect::State stateFlag,
    bool on =true
)
```


### function setColor

```cpp
bool setColor(
    QskAspect aspect,
    Qt::GlobalColor color
)
```


### function setColor

```cpp
bool setColor(
    QskAspect aspect,
    QRgb rgb
)
```


### function setColor

```cpp
bool setColor(
    QskAspect aspect,
    const QColor & color
)
```


### function resetColor

```cpp
inline bool resetColor(
    QskAspect aspect
)
```


### function color

```cpp
QColor color(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function setMetric

```cpp
bool setMetric(
    QskAspect aspect,
    qreal metric
)
```


### function resetMetric

```cpp
inline bool resetMetric(
    QskAspect aspect
)
```


### function metric

```cpp
qreal metric(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


A convenience method equivalent to skinHint( aspect ).metric. The QskSkinHint::TypeMask is set to QskSkinHint::Metric. 


### function setFlagHint

```cpp
bool setFlagHint(
    QskAspect aspect,
    int flag
)
```


### function resetFlagHint

```cpp
inline bool resetFlagHint(
    QskAspect aspect
)
```


### function flagHint

```cpp
int flagHint(
    QskAspect aspect
) const
```


### function flagHint

```cpp
template <typename T >
inline T flagHint(
    QskAspect aspect,
    T defaultValue =T()
) const
```


### function setStrutSizeHint

```cpp
bool setStrutSizeHint(
    QskAspect aspect,
    const QSizeF & strut
)
```


### function setStrutSizeHint

```cpp
bool setStrutSizeHint(
    QskAspect aspect,
    qreal width,
    qreal height
)
```


### function resetStrutSizeHint

```cpp
bool resetStrutSizeHint(
    QskAspect aspect
)
```


### function strutSizeHint

```cpp
QSizeF strutSizeHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function setMarginHint

```cpp
bool setMarginHint(
    QskAspect aspect,
    qreal margins
)
```


### function setMarginHint

```cpp
bool setMarginHint(
    QskAspect aspect,
    const QMarginsF & margins
)
```


### function resetMarginHint

```cpp
bool resetMarginHint(
    QskAspect aspect
)
```


### function marginHint

```cpp
QMarginsF marginHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function setPaddingHint

```cpp
bool setPaddingHint(
    QskAspect aspect,
    qreal padding
)
```


### function setPaddingHint

```cpp
bool setPaddingHint(
    QskAspect aspect,
    const QMarginsF & padding
)
```


### function resetPaddingHint

```cpp
bool resetPaddingHint(
    QskAspect aspect
)
```


### function paddingHint

```cpp
QMarginsF paddingHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function setGradientHint

```cpp
bool setGradientHint(
    QskAspect aspect,
    const QskGradient & gradient
)
```


### function gradientHint

```cpp
QskGradient gradientHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function setBoxShapeHint

```cpp
bool setBoxShapeHint(
    QskAspect aspect,
    const QskBoxShapeMetrics & shape
)
```


### function resetBoxShapeHint

```cpp
bool resetBoxShapeHint(
    QskAspect aspect
)
```


### function boxShapeHint

```cpp
QskBoxShapeMetrics boxShapeHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function setBoxBorderMetricsHint

```cpp
bool setBoxBorderMetricsHint(
    QskAspect aspect,
    const QskBoxBorderMetrics & border
)
```


### function resetBoxBorderMetricsHint

```cpp
bool resetBoxBorderMetricsHint(
    QskAspect aspect
)
```


### function boxBorderMetricsHint

```cpp
QskBoxBorderMetrics boxBorderMetricsHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function setBoxBorderColorsHint

```cpp
bool setBoxBorderColorsHint(
    QskAspect aspect,
    const QskBoxBorderColors & colors
)
```


### function resetBoxBorderColorsHint

```cpp
bool resetBoxBorderColorsHint(
    QskAspect aspect
)
```


### function boxBorderColorsHint

```cpp
QskBoxBorderColors boxBorderColorsHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function setSpacingHint

```cpp
bool setSpacingHint(
    QskAspect aspect,
    qreal spacing
)
```


### function resetSpacingHint

```cpp
bool resetSpacingHint(
    QskAspect aspect
)
```


### function spacingHint

```cpp
qreal spacingHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function setAlignmentHint

```cpp
bool setAlignmentHint(
    QskAspect aspect,
    Qt::Alignment alignment
)
```


### function resetAlignmentHint

```cpp
bool resetAlignmentHint(
    QskAspect aspect
)
```


### function alignmentHint

```cpp
inline Qt::Alignment alignmentHint(
    QskAspect aspect,
    Qt::Alignment defaultAlignment =Qt::Alignment()
) const
```


### function setFontRoleHint

```cpp
bool setFontRoleHint(
    QskAspect aspect,
    int role
)
```


### function resetFontRoleHint

```cpp
bool resetFontRoleHint(
    QskAspect aspect
)
```


### function fontRoleHint

```cpp
int fontRoleHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


### function setGraphicRoleHint

```cpp
bool setGraphicRoleHint(
    QskAspect aspect,
    int role
)
```


### function resetGraphicRoleHint

```cpp
bool resetGraphicRoleHint(
    QskAspect aspect
)
```


### function graphicRoleHint

```cpp
int graphicRoleHint(
    QskAspect aspect,
    QskSkinHintStatus * status =nullptr
) const
```


## Protected Functions Documentation

### function updateNode

```cpp
virtual void updateNode(
    QSGNode * parentNode
)
```


**Parameters**: 

  * **parentNode** The parent of the nodes to be added in this method. 


**Return**: The parent node. 

This method replaces the QQuickItem::updatePaintNode method as the preferred paint method to override when subclassing [QskControl](/docs/classes/class_qsk_control/). This allows [QskControl](/docs/classes/class_qsk_control/) to perform some additional steps before calling [updateNode()](/docs/classes/class_qsk_skinnable/#function-updatenode), and provides a consistent parent node which subclasses can rely on.

Subclasses should call their Skin's [updateNode()](/docs/classes/class_qsk_skinnable/#function-updatenode) method inside this method.


### function isTransitionAccepted

```cpp
virtual bool isTransitionAccepted(
    QskAspect aspect
) const
```


### function hintTable

```cpp
QskSkinHintTable & hintTable()
```


### function hintTable

```cpp
const QskSkinHintTable & hintTable() const
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET