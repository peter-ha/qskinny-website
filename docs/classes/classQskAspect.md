---
title: QskAspect
summary: Lookup key for a QskSkinHintTable. 
layout: docs

---




Lookup key for a QskSkinHintTable.  [More...](#detailed-description)


`#include <QskAspect.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum quint8 | **[Type](/docs/classes/classQskAspect/#enum-type)** { Flag = 0, Metric = 1, Color = 2}<br>Represents the type of the Aspect.  |
| enum quint8 | **[FlagPrimitive](/docs/classes/classQskAspect/#enum-flagprimitive)** { NoFlagPrimitive, Alignment, Direction, Style, Decoration, GraphicRole, FontRole} |
| enum quint8 | **[MetricPrimitive](/docs/classes/classQskAspect/#enum-metricprimitive)** { NoMetricPrimitive, StrutSize, Size, Position, Margin, Padding, Shadow, Spacing, Shape, Border} |
| enum quint8 | **[ColorPrimitive](/docs/classes/classQskAspect/#enum-colorprimitive)** { NoColorPrimitive, TextColor, StyleColor, LinkColor} |
| enum quint8 | **[Placement](/docs/classes/classQskAspect/#enum-placement)** { NoPlacement = 0, Vertical = Qt::Vertical, Horizontal = Qt::Horizontal, Top = 1, Left = 2, Right = 3, Bottom = 4} |
| enum quint16 | **[Subcontrol](/docs/classes/classQskAspect/#enum-subcontrol)** { Control = 0, LastSubcontrol = ( 1 << 12 ) - 1} |
| enum quint16 | **[State](/docs/classes/classQskAspect/#enum-state)** { NoState = 0, FirstSystemState = 1 << 0, FirstUserState = 1 << 4, LastUserState = 1 << 11, LastSystemState = 1 << 15, AllUserStates =   0x0FF0, AllStates =   0xFFFF} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskAspect](/docs/classes/classQskAspect/#function-qskaspect)**() |
| constexpr | **[QskAspect](/docs/classes/classQskAspect/#function-qskaspect)**(Subcontrol subControl) |
| constexpr | **[QskAspect](/docs/classes/classQskAspect/#function-qskaspect)**([Type](/docs/classes/classQskAspect/#enum-type) type) |
| constexpr | **[QskAspect](/docs/classes/classQskAspect/#function-qskaspect)**(Placement placement) |
| constexpr | **[QskAspect](/docs/classes/classQskAspect/#function-qskaspect)**(const [QskAspect](/docs/classes/classQskAspect/) & ) =default |
| constexpr | **[QskAspect](/docs/classes/classQskAspect/#function-qskaspect)**([QskAspect](/docs/classes/classQskAspect/) && ) =default |
| [QskAspect](/docs/classes/classQskAspect/) & | **[operator=](/docs/classes/classQskAspect/#function-operator=)**(const [QskAspect](/docs/classes/classQskAspect/) & ) =default |
| bool | **[operator==](/docs/classes/classQskAspect/#function-operator==)**(const [QskAspect](/docs/classes/classQskAspect/) & other) const |
| bool | **[operator!=](/docs/classes/classQskAspect/#function-operator!=)**(const [QskAspect](/docs/classes/classQskAspect/) & other) const |
| bool | **[operator<](/docs/classes/classQskAspect/#function-operator<)**(const [QskAspect](/docs/classes/classQskAspect/) & other) const |
| constexpr [QskAspect](/docs/classes/classQskAspect/) | **[operator|](/docs/classes/classQskAspect/#function-operator|)**(Subcontrol subControl) const |
| constexpr [QskAspect](/docs/classes/classQskAspect/) | **[operator|](/docs/classes/classQskAspect/#function-operator|)**([Type](/docs/classes/classQskAspect/#enum-type) type) const |
| constexpr [QskAspect](/docs/classes/classQskAspect/) | **[operator|](/docs/classes/classQskAspect/#function-operator|)**(FlagPrimitive primitive) const |
| constexpr [QskAspect](/docs/classes/classQskAspect/) | **[operator|](/docs/classes/classQskAspect/#function-operator|)**(MetricPrimitive primitive) const |
| constexpr [QskAspect](/docs/classes/classQskAspect/) | **[operator|](/docs/classes/classQskAspect/#function-operator|)**(ColorPrimitive primitive) const |
| constexpr [QskAspect](/docs/classes/classQskAspect/) | **[operator|](/docs/classes/classQskAspect/#function-operator|)**(Placement placement) const |
| constexpr [QskAspect](/docs/classes/classQskAspect/) | **[operator|](/docs/classes/classQskAspect/#function-operator|)**(State state) const |
| constexpr [QskAspect](/docs/classes/classQskAspect/) | **[stateless](/docs/classes/classQskAspect/#function-stateless)**() const |
| constexpr [QskAspect](/docs/classes/classQskAspect/) | **[trunk](/docs/classes/classQskAspect/#function-trunk)**() const |
| constexpr quint64 | **[value](/docs/classes/classQskAspect/#function-value)**() const |
| constexpr bool | **[isAnimator](/docs/classes/classQskAspect/#function-isanimator)**() const |
| void | **[setAnimator](/docs/classes/classQskAspect/#function-setanimator)**(bool on) |
| constexpr Subcontrol | **[subControl](/docs/classes/classQskAspect/#function-subcontrol)**() const |
| void | **[setSubControl](/docs/classes/classQskAspect/#function-setsubcontrol)**(Subcontrol subControl) |
| constexpr [Type](/docs/classes/classQskAspect/#enum-type) | **[type](/docs/classes/classQskAspect/#function-type)**() const |
| void | **[setType](/docs/classes/classQskAspect/#function-settype)**([Type](/docs/classes/classQskAspect/#enum-type) type) |
| constexpr bool | **[isMetric](/docs/classes/classQskAspect/#function-ismetric)**() const |
| constexpr bool | **[isColor](/docs/classes/classQskAspect/#function-iscolor)**() const |
| constexpr bool | **[isFlag](/docs/classes/classQskAspect/#function-isflag)**() const |
| constexpr Placement | **[placement](/docs/classes/classQskAspect/#function-placement)**() const |
| void | **[setPlacement](/docs/classes/classQskAspect/#function-setplacement)**(Placement placement) |
| constexpr State | **[state](/docs/classes/classQskAspect/#function-state)**() const |
| State | **[topState](/docs/classes/classQskAspect/#function-topstate)**() const |
| void | **[setState](/docs/classes/classQskAspect/#function-setstate)**(State state) |
| void | **[addState](/docs/classes/classQskAspect/#function-addstate)**(State state) |
| constexpr bool | **[hasState](/docs/classes/classQskAspect/#function-hasstate)**() const |
| void | **[clearState](/docs/classes/classQskAspect/#function-clearstate)**(State state) |
| void | **[clearStates](/docs/classes/classQskAspect/#function-clearstates)**() |
| constexpr FlagPrimitive | **[flagPrimitive](/docs/classes/classQskAspect/#function-flagprimitive)**() const |
| constexpr ColorPrimitive | **[colorPrimitive](/docs/classes/classQskAspect/#function-colorprimitive)**() const |
| constexpr MetricPrimitive | **[metricPrimitive](/docs/classes/classQskAspect/#function-metricprimitive)**() const |
| void | **[setPrimitive](/docs/classes/classQskAspect/#function-setprimitive)**([Type](/docs/classes/classQskAspect/#enum-type) type, uint primitive) |
| constexpr uint | **[primitive](/docs/classes/classQskAspect/#function-primitive)**() const |
| void | **[clearPrimitive](/docs/classes/classQskAspect/#function-clearprimitive)**() |
| const char * | **[toPrintable](/docs/classes/classQskAspect/#function-toprintable)**() const |
| State | **[registerState](/docs/classes/classQskAspect/#function-registerstate)**(const QMetaObject * metaObject, State state, const char * name) |
| Subcontrol | **[nextSubcontrol](/docs/classes/classQskAspect/#function-nextsubcontrol)**(const QMetaObject * metaObject, const char * name) |
| QByteArray | **[subControlName](/docs/classes/classQskAspect/#function-subcontrolname)**(Subcontrol subControl) |
| QVector< QByteArray > | **[subControlNames](/docs/classes/classQskAspect/#function-subcontrolnames)**(const QMetaObject * metaObject =nullptr) |
| QVector< Subcontrol > | **[subControls](/docs/classes/classQskAspect/#function-subcontrols)**(const QMetaObject * metaObject) |
| quint8 | **[primitiveCount](/docs/classes/classQskAspect/#function-primitivecount)**([Type](/docs/classes/classQskAspect/#enum-type) type) |
| void | **[reservePrimitives](/docs/classes/classQskAspect/#function-reserveprimitives)**([Type](/docs/classes/classQskAspect/#enum-type) type, quint8 count) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr uint | **[typeCount](/docs/classes/classQskAspect/#variable-typecount)**  |
| Bits | **[m_bits](/docs/classes/classQskAspect/#variable-m_bits)**  |
| quint64 | **[m_value](/docs/classes/classQskAspect/#variable-m_value)**  |

## Detailed Description

```cpp
class QskAspect;
```

Lookup key for a QskSkinHintTable. 

**See**: QskSkinnable::effectiveSkinHint(), QskSkin::skinHint() 

Used by the [skin engine](/docs/pages/qskskinning/#page-qskskinning) to determine how a given aspect of a control is drawn. While Aspect is simply a 64-bit unsigned integer, it is composed of smaller enum bitfields which can be ORed together to describe a more specific part of the user interface.

For example, the border colors of a QskPushButton while pressed is defined by combining the State (QskAbstractButton::Pressed) with the Subcontrol (QskPushButton::Panel), the Primitive (Border), and the Type (Color) as so: 

```
auto aspect = QskPushButton::Panel | QskAbstractButton::Pressed | QskAspect::Color | QskAspect::Border
```

## Public Types Documentation

### enum Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Flag | 0|  Flags are all sort of attributes that are no metrics or colors - f.e an alignment. A reasonable subset of possible flags is offered as QskAspect::FlagPrimitive  |
| Metric | 1|  Metrics are related to geometries in most cases corresponding to pixel distances. Examples are the margin/padding. A reasonable subset of possible metrics is offered as QskAspect::MetricPrimitive.  |
| Color | 2|  Colors are all sort of color values, like fill gradients, border colors.  |



Represents the type of the Aspect. 

The type categorizes the aspect to be a metric, color or "something else".

Often primitives are related to a specific category. F.e QskAspect::Alignment will probably always be a [QskAspect::Flag](/docs/classes/classQskAspect/#enumvalue-flag), while QskAspect::Border will usually be combined with [QskAspect::Color](/docs/classes/classQskAspect/#enumvalue-color) and [QskAspect::Metric](/docs/classes/classQskAspect/#enumvalue-metric).

Smooth transitions can be set up depending on these categories. F.e when changing from daylight to darkness color schemem only values of [QskAspect::Color](/docs/classes/classQskAspect/#enumvalue-color) aspects need to be considered. But when changing the Look&Feel of the application all type of aspects need to be considered. 


### enum FlagPrimitive

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoFlagPrimitive | |   |
| Alignment | |   |
| Direction | |   |
| Style | |   |
| Decoration | |   |
| GraphicRole | |   |
| FontRole | |   |




### enum MetricPrimitive

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoMetricPrimitive | |   |
| StrutSize | |   |
| Size | |   |
| Position | |   |
| Margin | |   |
| Padding | |   |
| Shadow | |   |
| Spacing | |   |
| Shape | |   |
| Border | |   |




### enum ColorPrimitive

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoColorPrimitive | |   |
| TextColor | |   |
| StyleColor | |   |
| LinkColor | |   |




### enum Placement

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoPlacement | 0|   |
| Vertical | Qt::Vertical|   |
| Horizontal | Qt::Horizontal|   |
| Top | 1|   |
| Left | 2|   |
| Right | 3|   |
| Bottom | 4|   |




### enum Subcontrol

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Control | 0|   |
| LastSubcontrol | ( 1 << 12 ) - 1|   |




### enum State

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoState | 0|   |
| FirstSystemState | 1 << 0|   |
| FirstUserState | 1 << 4|   |
| LastUserState | 1 << 11|   |
| LastSystemState | 1 << 15|   |
| AllUserStates |   0x0FF0|   |
| AllStates |   0xFFFF|   |




## Public Functions Documentation

### function QskAspect

```cpp
inline constexpr QskAspect()
```


### function QskAspect

```cpp
inline constexpr QskAspect(
    Subcontrol subControl
)
```


### function QskAspect

```cpp
inline constexpr QskAspect(
    Type type
)
```


### function QskAspect

```cpp
inline constexpr QskAspect(
    Placement placement
)
```


### function QskAspect

```cpp
constexpr QskAspect(
    const QskAspect & 
) =default
```


### function QskAspect

```cpp
constexpr QskAspect(
    QskAspect && 
) =default
```


### function operator=

```cpp
QskAspect & operator=(
    const QskAspect & 
) =default
```


### function operator==

```cpp
inline bool operator==(
    const QskAspect & other
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const QskAspect & other
) const
```


### function operator<

```cpp
inline bool operator<(
    const QskAspect & other
) const
```


### function operator|

```cpp
inline constexpr QskAspect operator|(
    Subcontrol subControl
) const
```


### function operator|

```cpp
inline constexpr QskAspect operator|(
    Type type
) const
```


### function operator|

```cpp
inline constexpr QskAspect operator|(
    FlagPrimitive primitive
) const
```


### function operator|

```cpp
inline constexpr QskAspect operator|(
    MetricPrimitive primitive
) const
```


### function operator|

```cpp
inline constexpr QskAspect operator|(
    ColorPrimitive primitive
) const
```


### function operator|

```cpp
inline constexpr QskAspect operator|(
    Placement placement
) const
```


### function operator|

```cpp
inline constexpr QskAspect operator|(
    State state
) const
```


### function stateless

```cpp
inline constexpr QskAspect stateless() const
```


### function trunk

```cpp
inline constexpr QskAspect trunk() const
```


### function value

```cpp
inline constexpr quint64 value() const
```


### function isAnimator

```cpp
inline constexpr bool isAnimator() const
```


### function setAnimator

```cpp
inline void setAnimator(
    bool on
)
```


### function subControl

```cpp
inline constexpr Subcontrol subControl() const
```


### function setSubControl

```cpp
inline void setSubControl(
    Subcontrol subControl
)
```


### function type

```cpp
inline constexpr Type type() const
```


### function setType

```cpp
inline void setType(
    Type type
)
```


### function isMetric

```cpp
inline constexpr bool isMetric() const
```


### function isColor

```cpp
inline constexpr bool isColor() const
```


### function isFlag

```cpp
inline constexpr bool isFlag() const
```


### function placement

```cpp
inline constexpr Placement placement() const
```


### function setPlacement

```cpp
inline void setPlacement(
    Placement placement
)
```


### function state

```cpp
inline constexpr State state() const
```


### function topState

```cpp
State topState() const
```


### function setState

```cpp
inline void setState(
    State state
)
```


### function addState

```cpp
inline void addState(
    State state
)
```


### function hasState

```cpp
inline constexpr bool hasState() const
```


### function clearState

```cpp
inline void clearState(
    State state
)
```


### function clearStates

```cpp
inline void clearStates()
```


### function flagPrimitive

```cpp
inline constexpr FlagPrimitive flagPrimitive() const
```


### function colorPrimitive

```cpp
inline constexpr ColorPrimitive colorPrimitive() const
```


### function metricPrimitive

```cpp
inline constexpr MetricPrimitive metricPrimitive() const
```


### function setPrimitive

```cpp
inline void setPrimitive(
    Type type,
    uint primitive
)
```


### function primitive

```cpp
inline constexpr uint primitive() const
```


### function clearPrimitive

```cpp
inline void clearPrimitive()
```


### function toPrintable

```cpp
const char * toPrintable() const
```


### function registerState

```cpp
static State registerState(
    const QMetaObject * metaObject,
    State state,
    const char * name
)
```


### function nextSubcontrol

```cpp
static Subcontrol nextSubcontrol(
    const QMetaObject * metaObject,
    const char * name
)
```


### function subControlName

```cpp
static QByteArray subControlName(
    Subcontrol subControl
)
```


### function subControlNames

```cpp
static QVector< QByteArray > subControlNames(
    const QMetaObject * metaObject =nullptr
)
```


### function subControls

```cpp
static QVector< Subcontrol > subControls(
    const QMetaObject * metaObject
)
```


### function primitiveCount

```cpp
static quint8 primitiveCount(
    Type type
)
```


### function reservePrimitives

```cpp
static void reservePrimitives(
    Type type,
    quint8 count
)
```


## Public Attributes Documentation

### variable typeCount

```cpp
static constexpr uint typeCount = 3;
```


### variable m_bits

```cpp
Bits m_bits;
```


### variable m_value

```cpp
quint64 m_value;
```


-------------------------------

Updated on  3 February 2021 at 15:05:42 CET