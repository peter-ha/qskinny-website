---
title: QskSkinnable
layout: docs

---


**Module:** **[Themeing](/docs/modules/group__Themeing/)**



Inherited by [QskControl](/docs/classes/classQskControl/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinnable](/docs/classes/classQskSkinnable/#function-qskskinnable)**() |
| virtual | **[~QskSkinnable](/docs/classes/classQskSkinnable/#function-~qskskinnable)**() |
| void | **[setSkinlet](/docs/classes/classQskSkinnable/#function-setskinlet)**(const [QskSkinlet](/docs/classes/classQskSkinlet/) * skinlet) |
| const [QskSkinlet](/docs/classes/classQskSkinlet/) * | **[skinlet](/docs/classes/classQskSkinnable/#function-skinlet)**() const |
| QFont | **[effectiveFont](/docs/classes/classQskSkinnable/#function-effectivefont)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| QskColorFilter | **[effectiveGraphicFilter](/docs/classes/classQskSkinnable/#function-effectivegraphicfilter)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| bool | **[setAnimationHint](/docs/classes/classQskSkinnable/#function-setanimationhint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskAnimationHint animation) |
| QskAnimationHint | **[animationHint](/docs/classes/classQskSkinnable/#function-animationhint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setSkinHint](/docs/classes/classQskSkinnable/#function-setskinhint)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QVariant & hint) |
| bool | **[resetSkinHint](/docs/classes/classQskSkinnable/#function-resetskinhint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| QskAnimationHint | **[effectiveAnimation](/docs/classes/classQskSkinnable/#function-effectiveanimation)**([QskAspect::Type](/docs/classes/classQskAspect/#enum-type) type, QskAspect::Subcontrol subControl, QskAspect::State state, QskSkinHintStatus * status =nullptr) const |
| QVariant | **[effectiveSkinHint](/docs/classes/classQskSkinnable/#function-effectiveskinhint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| virtual QskAspect::Placement | **[effectivePlacement](/docs/classes/classQskSkinnable/#function-effectiveplacement)**() const |
| QskSkinHintStatus | **[hintStatus](/docs/classes/classQskSkinnable/#function-hintstatus)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| QskAspect::State | **[skinState](/docs/classes/classQskSkinnable/#function-skinstate)**() const |
| const char * | **[skinStateAsPrintable](/docs/classes/classQskSkinnable/#function-skinstateasprintable)**() const |
| const char * | **[skinStateAsPrintable](/docs/classes/classQskSkinnable/#function-skinstateasprintable)**(QskAspect::State state) const |
| QRectF | **[subControlRect](/docs/classes/classQskSkinnable/#function-subcontrolrect)**(const QRectF & contentsRect, QskAspect::Subcontrol subControl) const |
| QRectF | **[subControlContentsRect](/docs/classes/classQskSkinnable/#function-subcontrolcontentsrect)**(const QRectF & contentsRect, QskAspect::Subcontrol subControl) const |
| QSizeF | **[outerBoxSize](/docs/classes/classQskSkinnable/#function-outerboxsize)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QSizeF & innerBoxSize) const |
| QSizeF | **[innerBoxSize](/docs/classes/classQskSkinnable/#function-innerboxsize)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QSizeF & outerBoxSize) const |
| QRectF | **[innerBox](/docs/classes/classQskSkinnable/#function-innerbox)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QRectF & outerBox) const |
| QRectF | **[outerBox](/docs/classes/classQskSkinnable/#function-outerbox)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QRectF & innerBox) const |
| QMarginsF | **[innerPadding](/docs/classes/classQskSkinnable/#function-innerpadding)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QSizeF & outerBoxSize) const |
| const [QskSkinlet](/docs/classes/classQskSkinlet/) * | **[effectiveSkinlet](/docs/classes/classQskSkinnable/#function-effectiveskinlet)**() const |
| QskSkin * | **[effectiveSkin](/docs/classes/classQskSkinnable/#function-effectiveskin)**() const |
| void | **[startTransition](/docs/classes/classQskSkinnable/#function-starttransition)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskAnimationHint animationHint, QVariant from, QVariant to) |
| virtual QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/classQskSkinnable/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const |
| [QskControl](/docs/classes/classQskControl/) * | **[controlCast](/docs/classes/classQskSkinnable/#function-controlcast)**() |
| const [QskControl](/docs/classes/classQskControl/) * | **[controlCast](/docs/classes/classQskSkinnable/#function-controlcast)**() const |
| virtual [QskControl](/docs/classes/classQskControl/) * | **[owningControl](/docs/classes/classQskSkinnable/#function-owningcontrol)**() const =0 |
| virtual const QMetaObject * | **[metaObject](/docs/classes/classQskSkinnable/#function-metaobject)**() const =0 |
| void | **[debug](/docs/classes/classQskSkinnable/#function-debug)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| void | **[debug](/docs/classes/classQskSkinnable/#function-debug)**(QskAspect::State state) const |
| void | **[debug](/docs/classes/classQskSkinnable/#function-debug)**(QDebug debug, [QskAspect](/docs/classes/classQskAspect/) aspect) const |
| void | **[debug](/docs/classes/classQskSkinnable/#function-debug)**(QDebug debug, QskAspect::State state) const |
| void | **[setSkinState](/docs/classes/classQskSkinnable/#function-setskinstate)**(QskAspect::State newState, bool animated =true) |
| void | **[setSkinStateFlag](/docs/classes/classQskSkinnable/#function-setskinstateflag)**(QskAspect::State stateFlag, bool on =true) |
| bool | **[setColor](/docs/classes/classQskSkinnable/#function-setcolor)**([QskAspect](/docs/classes/classQskAspect/) aspect, Qt::GlobalColor color) |
| bool | **[setColor](/docs/classes/classQskSkinnable/#function-setcolor)**([QskAspect](/docs/classes/classQskAspect/) aspect, QRgb rgb) |
| bool | **[setColor](/docs/classes/classQskSkinnable/#function-setcolor)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QColor & color) |
| bool | **[resetColor](/docs/classes/classQskSkinnable/#function-resetcolor)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| QColor | **[color](/docs/classes/classQskSkinnable/#function-color)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setMetric](/docs/classes/classQskSkinnable/#function-setmetric)**([QskAspect](/docs/classes/classQskAspect/) aspect, qreal metric) |
| bool | **[resetMetric](/docs/classes/classQskSkinnable/#function-resetmetric)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| qreal | **[metric](/docs/classes/classQskSkinnable/#function-metric)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setFlagHint](/docs/classes/classQskSkinnable/#function-setflaghint)**([QskAspect](/docs/classes/classQskAspect/) aspect, int flag) |
| bool | **[resetFlagHint](/docs/classes/classQskSkinnable/#function-resetflaghint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| int | **[flagHint](/docs/classes/classQskSkinnable/#function-flaghint)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| template <typename T \> <br>T | **[flagHint](/docs/classes/classQskSkinnable/#function-flaghint)**([QskAspect](/docs/classes/classQskAspect/) aspect, T defaultValue =T()) const |
| bool | **[setStrutSizeHint](/docs/classes/classQskSkinnable/#function-setstrutsizehint)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QSizeF & strut) |
| bool | **[setStrutSizeHint](/docs/classes/classQskSkinnable/#function-setstrutsizehint)**([QskAspect](/docs/classes/classQskAspect/) aspect, qreal width, qreal height) |
| bool | **[resetStrutSizeHint](/docs/classes/classQskSkinnable/#function-resetstrutsizehint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| QSizeF | **[strutSizeHint](/docs/classes/classQskSkinnable/#function-strutsizehint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setMarginHint](/docs/classes/classQskSkinnable/#function-setmarginhint)**([QskAspect](/docs/classes/classQskAspect/) aspect, qreal margins) |
| bool | **[setMarginHint](/docs/classes/classQskSkinnable/#function-setmarginhint)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QMarginsF & margins) |
| bool | **[resetMarginHint](/docs/classes/classQskSkinnable/#function-resetmarginhint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| QMarginsF | **[marginHint](/docs/classes/classQskSkinnable/#function-marginhint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setPaddingHint](/docs/classes/classQskSkinnable/#function-setpaddinghint)**([QskAspect](/docs/classes/classQskAspect/) aspect, qreal padding) |
| bool | **[setPaddingHint](/docs/classes/classQskSkinnable/#function-setpaddinghint)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QMarginsF & padding) |
| bool | **[resetPaddingHint](/docs/classes/classQskSkinnable/#function-resetpaddinghint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| QMarginsF | **[paddingHint](/docs/classes/classQskSkinnable/#function-paddinghint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setGradientHint](/docs/classes/classQskSkinnable/#function-setgradienthint)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QskGradient & gradient) |
| QskGradient | **[gradientHint](/docs/classes/classQskSkinnable/#function-gradienthint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setBoxShapeHint](/docs/classes/classQskSkinnable/#function-setboxshapehint)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QskBoxShapeMetrics & shape) |
| bool | **[resetBoxShapeHint](/docs/classes/classQskSkinnable/#function-resetboxshapehint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| QskBoxShapeMetrics | **[boxShapeHint](/docs/classes/classQskSkinnable/#function-boxshapehint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setBoxBorderMetricsHint](/docs/classes/classQskSkinnable/#function-setboxbordermetricshint)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QskBoxBorderMetrics & border) |
| bool | **[resetBoxBorderMetricsHint](/docs/classes/classQskSkinnable/#function-resetboxbordermetricshint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| QskBoxBorderMetrics | **[boxBorderMetricsHint](/docs/classes/classQskSkinnable/#function-boxbordermetricshint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setBoxBorderColorsHint](/docs/classes/classQskSkinnable/#function-setboxbordercolorshint)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QskBoxBorderColors & colors) |
| bool | **[resetBoxBorderColorsHint](/docs/classes/classQskSkinnable/#function-resetboxbordercolorshint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| QskBoxBorderColors | **[boxBorderColorsHint](/docs/classes/classQskSkinnable/#function-boxbordercolorshint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setSpacingHint](/docs/classes/classQskSkinnable/#function-setspacinghint)**([QskAspect](/docs/classes/classQskAspect/) aspect, qreal spacing) |
| bool | **[resetSpacingHint](/docs/classes/classQskSkinnable/#function-resetspacinghint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| qreal | **[spacingHint](/docs/classes/classQskSkinnable/#function-spacinghint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setAlignmentHint](/docs/classes/classQskSkinnable/#function-setalignmenthint)**([QskAspect](/docs/classes/classQskAspect/) aspect, Qt::Alignment alignment) |
| bool | **[resetAlignmentHint](/docs/classes/classQskSkinnable/#function-resetalignmenthint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| Qt::Alignment | **[alignmentHint](/docs/classes/classQskSkinnable/#function-alignmenthint)**([QskAspect](/docs/classes/classQskAspect/) aspect, Qt::Alignment defaultAlignment =Qt::Alignment()) const |
| bool | **[setFontRoleHint](/docs/classes/classQskSkinnable/#function-setfontrolehint)**([QskAspect](/docs/classes/classQskAspect/) aspect, int role) |
| bool | **[resetFontRoleHint](/docs/classes/classQskSkinnable/#function-resetfontrolehint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| int | **[fontRoleHint](/docs/classes/classQskSkinnable/#function-fontrolehint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setGraphicRoleHint](/docs/classes/classQskSkinnable/#function-setgraphicrolehint)**([QskAspect](/docs/classes/classQskAspect/) aspect, int role) |
| bool | **[resetGraphicRoleHint](/docs/classes/classQskSkinnable/#function-resetgraphicrolehint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| int | **[graphicRoleHint](/docs/classes/classQskSkinnable/#function-graphicrolehint)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskSkinHintStatus * status =nullptr) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[updateNode](/docs/classes/classQskSkinnable/#function-updatenode)**(QSGNode * parentNode) |
| virtual bool | **[isTransitionAccepted](/docs/classes/classQskSkinnable/#function-istransitionaccepted)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| QskSkinHintTable & | **[hintTable](/docs/classes/classQskSkinnable/#function-hinttable)**() |
| const QskSkinHintTable & | **[hintTable](/docs/classes/classQskSkinnable/#function-hinttable)**() const |

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

**Return**: Skinlet assigned by setSkinlet(). 

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

This method replaces the QQuickItem::updatePaintNode method as the preferred paint method to override when subclassing [QskControl](/docs/classes/classQskControl/). This allows [QskControl](/docs/classes/classQskControl/) to perform some additional steps before calling updateNode(), and provides a consistent parent node which subclasses can rely on.

Subclasses should call their Skin's updateNode() method inside this method.


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

Updated on  3 February 2021 at 15:05:45 CET