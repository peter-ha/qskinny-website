---
title: QskAspect
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum std::uint8_t | **[Index](/docs/classes/class_qsk_aspect/#enum-index)** { FirstIndex =     0x00, LastIndex =      0xFF} |
| enum std::uint16_t | **[Type](/docs/classes/class_qsk_aspect/#enum-type)** { Flag =           0x0000, Metric =         0x0100, Color =          0x0200, Flag =           0x0000, Metric =         0x0100, Color =          0x0200} |
| enum std::uint16_t | **[Modifier](/docs/classes/class_qsk_aspect/#enum-modifier)** { Animator =       0x0800} |
| enum std::uint32_t | **[Edge](/docs/classes/class_qsk_aspect/#enum-edge)** { Left =           0x00001000, Top =            0x00002000, Right =          0x00004000, Bottom =         0x00008000, AllEdges =       Top | Left | Right | Bottom} |
| enum std::uint32_t | **[Corner](/docs/classes/class_qsk_aspect/#enum-corner)** { TopLeft =        0x00001000, TopRight =       0x00002000, BottomRight =    0x00004000, BottomLeft =     0x00008000, LeftCorners =    TopLeft | BottomLeft, RightCorners =   TopRight | BottomRight, TopCorners =     TopLeft | TopRight, BottomCorners =  BottomLeft | BottomRight, AllCorners =     TopLeft | TopRight | BottomLeft | BottomRight} |
| enum std::uint32_t | **[Primitive](/docs/classes/class_qsk_aspect/#enum-primitive)** { Background =     0x00000000, Margin =         0x00010000, Padding =        0x00020000, RadiusX =        0x00030000, RadiusY =        0x00040000, Border =         0x00050000, Shadow =         0x00060000, Radius =        RadiusX | RadiusY, Fundamental =    0x00080000} |
| enum std::uint32_t | **[Subcontrol](/docs/classes/class_qsk_aspect/#enum-subcontrol)** { Default =           0x00000000, FirstSubcontrol =   0x00100000, LastSubcontrol =    0xFFF00000, Control = 0, LastSubcontrol =    0xFFF00000} |
| enum std::uint64_t | **[State](/docs/classes/class_qsk_aspect/#enum-state)** { FirstSystemState =  0x0000000100000000, FirstUserState =    0x0000001000000000, LastUserState =     0x0000080000000000, LastSystemState =   0x0000800000000000, Automatic =         0x0000000000000000, NoState =           0x0000FFFF00000000, NoState =           0x0000FFFF00000000, FirstSystemState =  0x0000000100000000, FirstUserState =    0x0000001000000000, LastUserState =     0x0000080000000000, LastSystemState =   0x0000800000000000, AllUserStates =   0x0FF0, AllStates =   0xFFFF} |
| enum Aspect | **[@0](/docs/classes/class_qsk_aspect/#enum-@0)** { MarginTop =      Margin | Top, MarginLeft =     Margin | Left, MarginRight =    Margin | Right, MarginBottom =   Margin | Bottom, PaddingTop =     Padding | Top, PaddingLeft =    Padding | Left, PaddingRight =   Padding | Right, PaddingBottom =  Padding | Bottom, BorderTop =      Border | Top, BorderLeft =     Border | Left, BorderRight =    Border | Right, BorderBottom =   Border | Bottom, ShadowTop =      Shadow | Top, ShadowLeft =     Shadow | Left, ShadowRight =    Shadow | Right, ShadowBottom =   Shadow | Bottom, RadiusXTopLeft = RadiusX | TopLeft, RadiusXTopRight = RadiusX | TopRight, RadiusXBottomLeft = RadiusX | BottomLeft, RadiusXBottomRight = RadiusX | BottomRight, RadiusYTopLeft = RadiusY | TopLeft, RadiusYTopRight = RadiusY | TopRight, RadiusYBottomLeft = RadiusY | BottomLeft, RadiusYBottomRight = RadiusY | BottomRight, Size =            0x0000000000000000 | Fundamental | Metric, Position =        0x0000000000010000 | Fundamental | Metric, MinimumWidth =    0x0000000000020000 | Fundamental | Metric, MinimumHeight =   0x0000000000030000 | Fundamental | Metric, MaximumWidth =    0x0000000000040000 | Fundamental | Metric, MaximumHeight =   0x0000000000050000 | Fundamental | Metric, Spacing =         0x0000000000060000 | Fundamental | Metric, Alignment =       0x0000000000000000 | Fundamental | Flag, Style =           0x0000000000010000 | Fundamental | Flag, Decoration =      0x0000000000020000 | Fundamental | Flag, ColorRole =       0x0000000000060000 | Fundamental | Flag, FontRole =        0x0000000000070000 | Fundamental | Flag, TextColor =       0x0000000000000000 | Fundamental | Color, StyleColor =      0x0000000000010000 | Fundamental | Color, LinkColor =       0x0000000000020000 | Fundamental | Color, AllAspects =      0xFFFFFFFFFFFFFFFF} |
| enum quint8 | **[Type](/docs/classes/class_qsk_aspect/#enum-type)** { Flag =           0x0000, Metric =         0x0100, Color =          0x0200, Flag =           0x0000, Metric =         0x0100, Color =          0x0200} |
| enum quint8 | **[FlagPrimitive](/docs/classes/class_qsk_aspect/#enum-flagprimitive)** { NoFlagPrimitive, Alignment =       0x0000000000000000 | Fundamental | Flag, Direction, Style =           0x0000000000010000 | Fundamental | Flag, Decoration =      0x0000000000020000 | Fundamental | Flag, GraphicRole, FontRole =        0x0000000000070000 | Fundamental | Flag} |
| enum quint8 | **[MetricPrimitive](/docs/classes/class_qsk_aspect/#enum-metricprimitive)** { NoMetricPrimitive, StrutSize, Size =            0x0000000000000000 | Fundamental | Metric, Position =        0x0000000000010000 | Fundamental | Metric, Margin =         0x00010000, Padding =        0x00020000, Shadow =         0x00060000, Spacing =         0x0000000000060000 | Fundamental | Metric, Shape, Border =         0x00050000} |
| enum quint8 | **[ColorPrimitive](/docs/classes/class_qsk_aspect/#enum-colorprimitive)** { NoColorPrimitive, TextColor =       0x0000000000000000 | Fundamental | Color, StyleColor =      0x0000000000010000 | Fundamental | Color, LinkColor =       0x0000000000020000 | Fundamental | Color} |
| enum quint8 | **[Placement](/docs/classes/class_qsk_aspect/#enum-placement)** { NoPlacement = 0, Vertical = Qt::Vertical, Horizontal = Qt::Horizontal, Top =            0x00002000, Left =           0x00001000, Right =          0x00004000, Bottom =         0x00008000} |
| enum quint16 | **[Subcontrol](/docs/classes/class_qsk_aspect/#enum-subcontrol)** { Default =           0x00000000, FirstSubcontrol =   0x00100000, LastSubcontrol =    0xFFF00000, Control = 0, LastSubcontrol =    0xFFF00000} |
| enum quint16 | **[State](/docs/classes/class_qsk_aspect/#enum-state)** { FirstSystemState =  0x0000000100000000, FirstUserState =    0x0000001000000000, LastUserState =     0x0000080000000000, LastSystemState =   0x0000800000000000, Automatic =         0x0000000000000000, NoState =           0x0000FFFF00000000, NoState =           0x0000FFFF00000000, FirstSystemState =  0x0000000100000000, FirstUserState =    0x0000001000000000, LastUserState =     0x0000080000000000, LastSystemState =   0x0000800000000000, AllUserStates =   0x0FF0, AllStates =   0xFFFF} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskAspect](/docs/classes/class_qsk_aspect/#function-qskaspect)**() |
| constexpr | **[QskAspect](/docs/classes/class_qsk_aspect/#function-qskaspect)**(Subcontrol subControl) |
| constexpr | **[QskAspect](/docs/classes/class_qsk_aspect/#function-qskaspect)**(Type type) |
| constexpr | **[QskAspect](/docs/classes/class_qsk_aspect/#function-qskaspect)**(Placement placement) |
| constexpr | **[QskAspect](/docs/classes/class_qsk_aspect/#function-qskaspect)**(const QskAspect & ) =default |
| constexpr | **[QskAspect](/docs/classes/class_qsk_aspect/#function-qskaspect)**(QskAspect && ) =default |
| QskAspect & | **[operator=](/docs/classes/class_qsk_aspect/#function-operator=)**(const QskAspect & ) =default |
| bool | **[operator==](/docs/classes/class_qsk_aspect/#function-operator==)**(const QskAspect & other) const |
| bool | **[operator!=](/docs/classes/class_qsk_aspect/#function-operator!=)**(const QskAspect & other) const |
| bool | **[operator<](/docs/classes/class_qsk_aspect/#function-operator<)**(const QskAspect & other) const |
| constexpr QskAspect | **[operator|](/docs/classes/class_qsk_aspect/#function-operator|)**(Subcontrol subControl) const |
| constexpr QskAspect | **[operator|](/docs/classes/class_qsk_aspect/#function-operator|)**(Type type) const |
| constexpr QskAspect | **[operator|](/docs/classes/class_qsk_aspect/#function-operator|)**(FlagPrimitive primitive) const |
| constexpr QskAspect | **[operator|](/docs/classes/class_qsk_aspect/#function-operator|)**(MetricPrimitive primitive) const |
| constexpr QskAspect | **[operator|](/docs/classes/class_qsk_aspect/#function-operator|)**(ColorPrimitive primitive) const |
| constexpr QskAspect | **[operator|](/docs/classes/class_qsk_aspect/#function-operator|)**(Placement placement) const |
| constexpr QskAspect | **[operator|](/docs/classes/class_qsk_aspect/#function-operator|)**(State state) const |
| constexpr QskAspect | **[stateless](/docs/classes/class_qsk_aspect/#function-stateless)**() const |
| constexpr QskAspect | **[trunk](/docs/classes/class_qsk_aspect/#function-trunk)**() const |
| constexpr quint64 | **[value](/docs/classes/class_qsk_aspect/#function-value)**() const |
| constexpr bool | **[isAnimator](/docs/classes/class_qsk_aspect/#function-isanimator)**() const |
| void | **[setAnimator](/docs/classes/class_qsk_aspect/#function-setanimator)**(bool on) |
| constexpr Subcontrol | **[subControl](/docs/classes/class_qsk_aspect/#function-subcontrol)**() const |
| void | **[setSubControl](/docs/classes/class_qsk_aspect/#function-setsubcontrol)**(Subcontrol subControl) |
| constexpr Type | **[type](/docs/classes/class_qsk_aspect/#function-type)**() const |
| void | **[setType](/docs/classes/class_qsk_aspect/#function-settype)**(Type type) |
| constexpr bool | **[isMetric](/docs/classes/class_qsk_aspect/#function-ismetric)**() const |
| constexpr bool | **[isColor](/docs/classes/class_qsk_aspect/#function-iscolor)**() const |
| constexpr bool | **[isFlag](/docs/classes/class_qsk_aspect/#function-isflag)**() const |
| constexpr Placement | **[placement](/docs/classes/class_qsk_aspect/#function-placement)**() const |
| void | **[setPlacement](/docs/classes/class_qsk_aspect/#function-setplacement)**(Placement placement) |
| constexpr State | **[state](/docs/classes/class_qsk_aspect/#function-state)**() const |
| State | **[topState](/docs/classes/class_qsk_aspect/#function-topstate)**() const |
| void | **[setState](/docs/classes/class_qsk_aspect/#function-setstate)**(State state) |
| void | **[addState](/docs/classes/class_qsk_aspect/#function-addstate)**(State state) |
| constexpr bool | **[hasState](/docs/classes/class_qsk_aspect/#function-hasstate)**() const |
| void | **[clearState](/docs/classes/class_qsk_aspect/#function-clearstate)**(State state) |
| void | **[clearStates](/docs/classes/class_qsk_aspect/#function-clearstates)**() |
| constexpr FlagPrimitive | **[flagPrimitive](/docs/classes/class_qsk_aspect/#function-flagprimitive)**() const |
| constexpr ColorPrimitive | **[colorPrimitive](/docs/classes/class_qsk_aspect/#function-colorprimitive)**() const |
| constexpr MetricPrimitive | **[metricPrimitive](/docs/classes/class_qsk_aspect/#function-metricprimitive)**() const |
| void | **[setPrimitive](/docs/classes/class_qsk_aspect/#function-setprimitive)**(Type type, uint primitive) |
| constexpr uint | **[primitive](/docs/classes/class_qsk_aspect/#function-primitive)**() const |
| void | **[clearPrimitive](/docs/classes/class_qsk_aspect/#function-clearprimitive)**() |
| const char * | **[toPrintable](/docs/classes/class_qsk_aspect/#function-toprintable)**() const |
| State | **[registerState](/docs/classes/class_qsk_aspect/#function-registerstate)**(const QMetaObject * metaObject, State state, const char * name) |
| Subcontrol | **[nextSubcontrol](/docs/classes/class_qsk_aspect/#function-nextsubcontrol)**(const QMetaObject * metaObject, const char * name) |
| QByteArray | **[subControlName](/docs/classes/class_qsk_aspect/#function-subcontrolname)**(Subcontrol subControl) |
| QVector< QByteArray > | **[subControlNames](/docs/classes/class_qsk_aspect/#function-subcontrolnames)**(const QMetaObject * metaObject =nullptr) |
| QVector< Subcontrol > | **[subControls](/docs/classes/class_qsk_aspect/#function-subcontrols)**(const QMetaObject * metaObject) |
| quint8 | **[primitiveCount](/docs/classes/class_qsk_aspect/#function-primitivecount)**(Type type) |
| void | **[reservePrimitives](/docs/classes/class_qsk_aspect/#function-reserveprimitives)**(Type type, quint8 count) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr uint | **[typeCount](/docs/classes/class_qsk_aspect/#variable-typecount)**  |
| Bits | **[m_bits](/docs/classes/class_qsk_aspect/#variable-m_bits)**  |
| quint64 | **[m_value](/docs/classes/class_qsk_aspect/#variable-m_value)**  |

## Public Types Documentation

### enum Index

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FirstIndex |     0x00|   |
| LastIndex |      0xFF|   |




Represents a specific "subresource" ID, usually a FontRole or ColorRole. In most cases, the default (`0`) is appropriate. 


### enum Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Flag |           0x0000|   |
| Metric |         0x0100|   |
| Color |          0x0200|   |
| Flag |           0x0000|   |
| Metric |         0x0100|   |
| Color |          0x0200|   |




Represents the data type of the Aspect. The default is Flag, but more commonly this will be a Color or Metric. Colors are 32-bit ARGB values (see QRgb), and Metrics are `float` values typically corresponding to pixel distances. 


### enum Modifier

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Animator |       0x0800| Denotes that the skin hint affects the animation timing/easing.   |




Adds extra information to Type. Currently, the only modifier is Animator, which specifies that skinhint corresponds to the animation data for this Aspect. 


### enum Edge

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Left |           0x00001000|   |
| Top |            0x00002000|   |
| Right |          0x00004000|   |
| Bottom |         0x00008000|   |
| AllEdges |       Top | Left | Right | Bottom|   |




Used with certain Primitives (such as Border) to specify an edge. Zero or more Edges can be combined to denote which edge(s) the Aspect is concerned. The default value of `0` implies AllEdges. 


### enum Corner

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TopLeft |        0x00001000|   |
| TopRight |       0x00002000|   |
| BottomRight |    0x00004000|   |
| BottomLeft |     0x00008000|   |
| LeftCorners |    TopLeft | BottomLeft|   |
| RightCorners |   TopRight | BottomRight|   |
| TopCorners |     TopLeft | TopRight|   |
| BottomCorners |  BottomLeft | BottomRight|   |
| AllCorners |     TopLeft | TopRight | BottomLeft | BottomRight|   |




Used with certain Primitives (such as Radius) to specify a corner. Zero or more Corners can be combined to denote which corner(s) the Aspect is concerned. The default value of `0` implies AllCorners. 


### enum Primitive

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Background |     0x00000000| The default primitive, the background color(s)   |
| Margin |         0x00010000| The margin, according to the CSS box model.   |
| Padding |        0x00020000| The padding, according to the CSS box model.   |
| RadiusX |        0x00030000| The horizontal corner radius, according to the CSS box model.   |
| RadiusY |        0x00040000| The vertical corner radius, according to the CSS box model.   |
| Border |         0x00050000| The border thickness/color, according to the CSS box model.   |
| Shadow |         0x00060000| The shadow thickness/color, according to the CSS box model.   |
| Radius |        RadiusX | RadiusY|   |
| Fundamental |    0x00080000|   |




The fundamental building blocks of box-like UI components, based on the CSS box model. See QskSkinRenderer::updateBox for more information. 


### enum Subcontrol

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Default |           0x00000000|   |
| FirstSubcontrol |   0x00100000|   |
| LastSubcontrol |    0xFFF00000|   |
| Control | 0|   |
| LastSubcontrol |    0xFFF00000|   |




For use within the rendering of a specific [QskSkinnable](/docs/classes/class_qsk_skinnable/). While the Default value applies to any control (and can be used as a fallback), specifying a Subcontrol limits the aspect's scope to that sub-component (or _subcontrol_) of the control. For example, the Subcontrol type QskPushButton::Panel refers to the background panel of a push button. 


### enum State

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FirstSystemState |  0x0000000100000000| The first state bit reserved for framework use.   |
| FirstUserState |    0x0000001000000000| The first state bit reserved for application use.   |
| LastUserState |     0x0000080000000000| The last state bit reserved for applicaiton use.   |
| LastSystemState |   0x0000800000000000| The last state bit reserved for framework use.   |
| Automatic |         0x0000000000000000| No specified state (the default)   |
| NoState |           0x0000FFFF00000000| Empty state, explicitly specified. Useful in some types of animators.   |
| NoState |           0x0000FFFF00000000| Empty state, explicitly specified. Useful in some types of animators.   |
| FirstSystemState |  0x0000000100000000| The first state bit reserved for framework use.   |
| FirstUserState |    0x0000001000000000| The first state bit reserved for application use.   |
| LastUserState |     0x0000080000000000| The last state bit reserved for applicaiton use.   |
| LastSystemState |   0x0000800000000000| The last state bit reserved for framework use.   |
| AllUserStates |   0x0FF0|   |
| AllStates |   0xFFFF|   |




Applies to a given aspect when the control is in a given state. [QskSkinnable](/docs/classes/class_qsk_skinnable/) subclasses (typically [QskControl](/docs/classes/class_qsk_control/) subclasses) can define UI states, as denoted by any OR combination of State flags. For example, a checked QskPushButton has the QskPushButton::Checked state flag set when it is checked. 


### enum @0

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MarginTop |      Margin | Top| The top margin.   |
| MarginLeft |     Margin | Left| The left margin.   |
| MarginRight |    Margin | Right| The right margin.   |
| MarginBottom |   Margin | Bottom| The bottom margin.   |
| PaddingTop |     Padding | Top| The top padding.   |
| PaddingLeft |    Padding | Left| The left padding.   |
| PaddingRight |   Padding | Right| The right padding.   |
| PaddingBottom |  Padding | Bottom| The bottom padding.   |
| BorderTop |      Border | Top| The top border.   |
| BorderLeft |     Border | Left| The left border.   |
| BorderRight |    Border | Right| The right border.   |
| BorderBottom |   Border | Bottom| The bottom border.   |
| ShadowTop |      Shadow | Top| The top shadow.   |
| ShadowLeft |     Shadow | Left| The left shadow.   |
| ShadowRight |    Shadow | Right| The right shadow.   |
| ShadowBottom |   Shadow | Bottom| The bottom shadow.   |
| RadiusXTopLeft | RadiusX | TopLeft| The top-left horizontal radius.   |
| RadiusXTopRight | RadiusX | TopRight| The top-right horizontal radius.   |
| RadiusXBottomLeft | RadiusX | BottomLeft| The bottom-left horizontal radius.   |
| RadiusXBottomRight | RadiusX | BottomRight| The bottom-right horizontal radius.   |
| RadiusYTopLeft | RadiusY | TopLeft| The top-left vertical radius.   |
| RadiusYTopRight | RadiusY | TopRight| The top-right vertical radius.   |
| RadiusYBottomLeft | RadiusY | BottomLeft| The bottom-left vertical radius.   |
| RadiusYBottomRight | RadiusY | BottomRight| The bottom-right vertical radius.   |
| Size |            0x0000000000000000 | Fundamental | Metric| A "size" placeholder, like width or height.   |
| Position |        0x0000000000010000 | Fundamental | Metric| A "position" placeholder, like the position of a QskSlider.   |
| MinimumWidth |    0x0000000000020000 | Fundamental | Metric| A minimum width hint.   |
| MinimumHeight |   0x0000000000030000 | Fundamental | Metric| A minimum height hint.   |
| MaximumWidth |    0x0000000000040000 | Fundamental | Metric| A maximum width hint.   |
| MaximumHeight |   0x0000000000050000 | Fundamental | Metric| A maximum height hint.   |
| Spacing |         0x0000000000060000 | Fundamental | Metric| A spacing hint, such as between rows in a QskListBox.   |
| Alignment |       0x0000000000000000 | Fundamental | Flag| A flag typically used for storing text alignments (Qt::Alignment)   |
| Style |           0x0000000000010000 | Fundamental | Flag| A flag for storing text style (Qsk::Style)   |
| Decoration |      0x0000000000020000 | Fundamental | Flag| A flag for storing decoration information.   |
| ColorRole |       0x0000000000060000 | Fundamental | Flag| A flag for specifying a QRgb value at a given QskAspect::Index.   |
| FontRole |        0x0000000000070000 | Fundamental | Flag| A flag for specifying a QFont value at a given QskAspect::Index.   |
| TextColor |       0x0000000000000000 | Fundamental | Color| A placeholder for text color.   |
| StyleColor |      0x0000000000010000 | Fundamental | Color| A placeholder for text style color.   |
| LinkColor |       0x0000000000020000 | Fundamental | Color| A placeholder for text link color.   |
| AllAspects |      0xFFFFFFFFFFFFFFFF| All possible bits in Aspect (useful for e.g. QskSkinnable::markDirty).   |




These Aspects are for convenience, providing commonly combined values to limit the verbosity of combining Aspects in application code. 


### enum Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Flag |           0x0000|   |
| Metric |         0x0100|   |
| Color |          0x0200|   |
| Flag |           0x0000|   |
| Metric |         0x0100|   |
| Color |          0x0200|   |




### enum FlagPrimitive

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoFlagPrimitive | |   |
| Alignment |       0x0000000000000000 | Fundamental | Flag| A flag typically used for storing text alignments (Qt::Alignment)   |
| Direction | |   |
| Style |           0x0000000000010000 | Fundamental | Flag| A flag for storing text style (Qsk::Style)   |
| Decoration |      0x0000000000020000 | Fundamental | Flag| A flag for storing decoration information.   |
| GraphicRole | |   |
| FontRole |        0x0000000000070000 | Fundamental | Flag| A flag for specifying a QFont value at a given QskAspect::Index.   |




### enum MetricPrimitive

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoMetricPrimitive | |   |
| StrutSize | |   |
| Size |            0x0000000000000000 | Fundamental | Metric| A "size" placeholder, like width or height.   |
| Position |        0x0000000000010000 | Fundamental | Metric| A "position" placeholder, like the position of a QskSlider.   |
| Margin |         0x00010000| The margin, according to the CSS box model.   |
| Padding |        0x00020000| The padding, according to the CSS box model.   |
| Shadow |         0x00060000| The shadow thickness/color, according to the CSS box model.   |
| Spacing |         0x0000000000060000 | Fundamental | Metric| A spacing hint, such as between rows in a QskListBox.   |
| Shape | |   |
| Border |         0x00050000| The border thickness/color, according to the CSS box model.   |




### enum ColorPrimitive

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoColorPrimitive | |   |
| TextColor |       0x0000000000000000 | Fundamental | Color| A placeholder for text color.   |
| StyleColor |      0x0000000000010000 | Fundamental | Color| A placeholder for text style color.   |
| LinkColor |       0x0000000000020000 | Fundamental | Color| A placeholder for text link color.   |




### enum Placement

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoPlacement | 0|   |
| Vertical | Qt::Vertical|   |
| Horizontal | Qt::Horizontal|   |
| Top |            0x00002000|   |
| Left |           0x00001000|   |
| Right |          0x00004000|   |
| Bottom |         0x00008000|   |




### enum Subcontrol

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Default |           0x00000000|   |
| FirstSubcontrol |   0x00100000|   |
| LastSubcontrol |    0xFFF00000|   |
| Control | 0|   |
| LastSubcontrol |    0xFFF00000|   |




### enum State

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FirstSystemState |  0x0000000100000000| The first state bit reserved for framework use.   |
| FirstUserState |    0x0000001000000000| The first state bit reserved for application use.   |
| LastUserState |     0x0000080000000000| The last state bit reserved for applicaiton use.   |
| LastSystemState |   0x0000800000000000| The last state bit reserved for framework use.   |
| Automatic |         0x0000000000000000| No specified state (the default)   |
| NoState |           0x0000FFFF00000000| Empty state, explicitly specified. Useful in some types of animators.   |
| NoState |           0x0000FFFF00000000| Empty state, explicitly specified. Useful in some types of animators.   |
| FirstSystemState |  0x0000000100000000| The first state bit reserved for framework use.   |
| FirstUserState |    0x0000001000000000| The first state bit reserved for application use.   |
| LastUserState |     0x0000080000000000| The last state bit reserved for applicaiton use.   |
| LastSystemState |   0x0000800000000000| The last state bit reserved for framework use.   |
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

Updated on 23 January 2021 at 09:50:35 CET