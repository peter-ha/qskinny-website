---
title: QskTextLabel
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setText](/docs/classes/class_qsk_text_label/#slot-settext)**(const QString & text) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[textChanged](/docs/classes/class_qsk_text_label/#signal-textchanged)**(const QString & ) |
| void | **[textColorChanged](/docs/classes/class_qsk_text_label/#signal-textcolorchanged)**(const QColor & ) |
| void | **[textOptionsChanged](/docs/classes/class_qsk_text_label/#signal-textoptionschanged)**(const QskTextOptions & ) |
| void | **[fontRoleChanged](/docs/classes/class_qsk_text_label/#signal-fontrolechanged)**(int ) |
| void | **[alignmentChanged](/docs/classes/class_qsk_text_label/#signal-alignmentchanged)**(Qt::Alignment ) |
| void | **[panelChanged](/docs/classes/class_qsk_text_label/#signal-panelchanged)**(bool ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTextLabel](/docs/classes/class_qsk_text_label/#function-qsktextlabel)**(QQuickItem * parent =nullptr) |
| | **[QskTextLabel](/docs/classes/class_qsk_text_label/#function-qsktextlabel)**(const QString & text, QQuickItem * parent =nullptr) |
| | **[~QskTextLabel](/docs/classes/class_qsk_text_label/#function-~qsktextlabel)**() override |
| QString | **[text](/docs/classes/class_qsk_text_label/#function-text)**() const |
| void | **[setFontRole](/docs/classes/class_qsk_text_label/#function-setfontrole)**(int role) |
| void | **[resetFontRole](/docs/classes/class_qsk_text_label/#function-resetfontrole)**() |
| int | **[fontRole](/docs/classes/class_qsk_text_label/#function-fontrole)**() const |
| void | **[setTextColor](/docs/classes/class_qsk_text_label/#function-settextcolor)**(const QColor & color) |
| void | **[resetTextColor](/docs/classes/class_qsk_text_label/#function-resettextcolor)**() |
| QColor | **[textColor](/docs/classes/class_qsk_text_label/#function-textcolor)**() const |
| void | **[setTextOptions](/docs/classes/class_qsk_text_label/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_text_label/#function-textoptions)**() const |
| void | **[setTextFormat](/docs/classes/class_qsk_text_label/#function-settextformat)**(QskTextOptions::TextFormat format) |
| QskTextOptions::TextFormat | **[textFormat](/docs/classes/class_qsk_text_label/#function-textformat)**() const |
| QskTextOptions::TextFormat | **[effectiveTextFormat](/docs/classes/class_qsk_text_label/#function-effectivetextformat)**() const |
| void | **[setWrapMode](/docs/classes/class_qsk_text_label/#function-setwrapmode)**(QskTextOptions::WrapMode wrapMode) |
| QskTextOptions::WrapMode | **[wrapMode](/docs/classes/class_qsk_text_label/#function-wrapmode)**() const |
| void | **[setElideMode](/docs/classes/class_qsk_text_label/#function-setelidemode)**(Qt::TextElideMode elideMode) |
| Qt::TextElideMode | **[elideMode](/docs/classes/class_qsk_text_label/#function-elidemode)**() const |
| void | **[setAlignment](/docs/classes/class_qsk_text_label/#function-setalignment)**(Qt::Alignment alignment) |
| void | **[resetAlignment](/docs/classes/class_qsk_text_label/#function-resetalignment)**() |
| Qt::Alignment | **[alignment](/docs/classes/class_qsk_text_label/#function-alignment)**() const |
| QFont | **[font](/docs/classes/class_qsk_text_label/#function-font)**() const |
| void | **[setPanel](/docs/classes/class_qsk_text_label/#function-setpanel)**(bool on) |
| bool | **[hasPanel](/docs/classes/class_qsk_text_label/#function-haspanel)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/class_qsk_text_label/#function-changeevent)**(QEvent * event) override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/class_qsk_text_label/#property-text)**  |
| int | **[fontRole](/docs/classes/class_qsk_text_label/#property-fontrole)**  |
| QFont | **[font](/docs/classes/class_qsk_text_label/#property-font)**  |
| QColor | **[textColor](/docs/classes/class_qsk_text_label/#property-textcolor)**  |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_text_label/#property-textoptions)**  |
| Qt::Alignment | **[alignment](/docs/classes/class_qsk_text_label/#property-alignment)**  |
| bool | **[panel](/docs/classes/class_qsk_text_label/#property-panel)**  |

## Public Slots Documentation

### slot setText

```cpp
void setText(
    const QString & text
)
```


## Public Signals Documentation

### signal textChanged

```cpp
void textChanged(
    const QString & 
)
```


### signal textColorChanged

```cpp
void textColorChanged(
    const QColor & 
)
```


### signal textOptionsChanged

```cpp
void textOptionsChanged(
    const QskTextOptions & 
)
```


### signal fontRoleChanged

```cpp
void fontRoleChanged(
    int 
)
```


### signal alignmentChanged

```cpp
void alignmentChanged(
    Qt::Alignment 
)
```


### signal panelChanged

```cpp
void panelChanged(
    bool 
)
```


## Public Functions Documentation

### function QskTextLabel

```cpp
QskTextLabel(
    QQuickItem * parent =nullptr
)
```


### function QskTextLabel

```cpp
QskTextLabel(
    const QString & text,
    QQuickItem * parent =nullptr
)
```


### function ~QskTextLabel

```cpp
~QskTextLabel() override
```


### function text

```cpp
QString text() const
```


### function setFontRole

```cpp
void setFontRole(
    int role
)
```


### function resetFontRole

```cpp
void resetFontRole()
```


### function fontRole

```cpp
int fontRole() const
```


### function setTextColor

```cpp
void setTextColor(
    const QColor & color
)
```


### function resetTextColor

```cpp
void resetTextColor()
```


### function textColor

```cpp
QColor textColor() const
```


### function setTextOptions

```cpp
void setTextOptions(
    const QskTextOptions & options
)
```


### function textOptions

```cpp
QskTextOptions textOptions() const
```


### function setTextFormat

```cpp
void setTextFormat(
    QskTextOptions::TextFormat format
)
```


### function textFormat

```cpp
QskTextOptions::TextFormat textFormat() const
```


### function effectiveTextFormat

```cpp
QskTextOptions::TextFormat effectiveTextFormat() const
```


### function setWrapMode

```cpp
void setWrapMode(
    QskTextOptions::WrapMode wrapMode
)
```


### function wrapMode

```cpp
QskTextOptions::WrapMode wrapMode() const
```


### function setElideMode

```cpp
void setElideMode(
    Qt::TextElideMode elideMode
)
```


### function elideMode

```cpp
Qt::TextElideMode elideMode() const
```


### function setAlignment

```cpp
void setAlignment(
    Qt::Alignment alignment
)
```


### function resetAlignment

```cpp
void resetAlignment()
```


### function alignment

```cpp
Qt::Alignment alignment() const
```


### function font

```cpp
QFont font() const
```


### function setPanel

```cpp
void setPanel(
    bool on
)
```


### function hasPanel

```cpp
bool hasPanel() const
```


## Protected Functions Documentation

### function changeEvent

```cpp
void changeEvent(
    QEvent * event
) override
```


## Public Property Documentation

### property text

```cpp
QString text;
```


### property fontRole

```cpp
int fontRole;
```


### property font

```cpp
QFont font;
```


### property textColor

```cpp
QColor textColor;
```


### property textOptions

```cpp
QskTextOptions textOptions;
```


### property alignment

```cpp
Qt::Alignment alignment;
```


### property panel

```cpp
bool panel;
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET