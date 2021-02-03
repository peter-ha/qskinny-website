---
title: QskTextLabel
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskTextLabel/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[Text](/docs/classes/classQskTextLabel/#subcontrol-text)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTextLabel](/docs/classes/classQskTextLabel/#function-qsktextlabel)**(QQuickItem * parent =nullptr) |
| | **[QskTextLabel](/docs/classes/classQskTextLabel/#function-qsktextlabel)**(const QString & text, QQuickItem * parent =nullptr) |
| | **[~QskTextLabel](/docs/classes/classQskTextLabel/#function-~qsktextlabel)**() override |
| QString | **[text](/docs/classes/classQskTextLabel/#function-text)**() const |
| void | **[setFontRole](/docs/classes/classQskTextLabel/#function-setfontrole)**(int role) |
| void | **[resetFontRole](/docs/classes/classQskTextLabel/#function-resetfontrole)**() |
| int | **[fontRole](/docs/classes/classQskTextLabel/#function-fontrole)**() const |
| void | **[setTextColor](/docs/classes/classQskTextLabel/#function-settextcolor)**(const QColor & color) |
| void | **[resetTextColor](/docs/classes/classQskTextLabel/#function-resettextcolor)**() |
| QColor | **[textColor](/docs/classes/classQskTextLabel/#function-textcolor)**() const |
| void | **[setTextOptions](/docs/classes/classQskTextLabel/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/classQskTextLabel/#function-textoptions)**() const |
| void | **[setTextFormat](/docs/classes/classQskTextLabel/#function-settextformat)**(QskTextOptions::TextFormat format) |
| QskTextOptions::TextFormat | **[textFormat](/docs/classes/classQskTextLabel/#function-textformat)**() const |
| QskTextOptions::TextFormat | **[effectiveTextFormat](/docs/classes/classQskTextLabel/#function-effectivetextformat)**() const |
| void | **[setWrapMode](/docs/classes/classQskTextLabel/#function-setwrapmode)**(QskTextOptions::WrapMode wrapMode) |
| QskTextOptions::WrapMode | **[wrapMode](/docs/classes/classQskTextLabel/#function-wrapmode)**() const |
| void | **[setElideMode](/docs/classes/classQskTextLabel/#function-setelidemode)**(Qt::TextElideMode elideMode) |
| Qt::TextElideMode | **[elideMode](/docs/classes/classQskTextLabel/#function-elidemode)**() const |
| void | **[setAlignment](/docs/classes/classQskTextLabel/#function-setalignment)**(Qt::Alignment alignment) |
| void | **[resetAlignment](/docs/classes/classQskTextLabel/#function-resetalignment)**() |
| Qt::Alignment | **[alignment](/docs/classes/classQskTextLabel/#function-alignment)**() const |
| QFont | **[font](/docs/classes/classQskTextLabel/#function-font)**() const |
| void | **[setPanel](/docs/classes/classQskTextLabel/#function-setpanel)**(bool on) |
| bool | **[hasPanel](/docs/classes/classQskTextLabel/#function-haspanel)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/classQskTextLabel/#function-changeevent)**(QEvent * event) override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[textChanged](/docs/classes/classQskTextLabel/#signal-textchanged)**(const QString & ) |
| void | **[textColorChanged](/docs/classes/classQskTextLabel/#signal-textcolorchanged)**(const QColor & ) |
| void | **[textOptionsChanged](/docs/classes/classQskTextLabel/#signal-textoptionschanged)**(const QskTextOptions & ) |
| void | **[fontRoleChanged](/docs/classes/classQskTextLabel/#signal-fontrolechanged)**(int ) |
| void | **[alignmentChanged](/docs/classes/classQskTextLabel/#signal-alignmentchanged)**(Qt::Alignment ) |
| void | **[panelChanged](/docs/classes/classQskTextLabel/#signal-panelchanged)**(bool ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setText](/docs/classes/classQskTextLabel/#slot-settext)**(const QString & text) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/classQskTextLabel/#property-text)**  |
| int | **[fontRole](/docs/classes/classQskTextLabel/#property-fontrole)**  |
| QFont | **[font](/docs/classes/classQskTextLabel/#property-font)**  |
| QColor | **[textColor](/docs/classes/classQskTextLabel/#property-textcolor)**  |
| QskTextOptions | **[textOptions](/docs/classes/classQskTextLabel/#property-textoptions)**  |
| Qt::Alignment | **[alignment](/docs/classes/classQskTextLabel/#property-alignment)**  |
| bool | **[panel](/docs/classes/classQskTextLabel/#property-panel)**  |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol Text




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


## Public Slots Documentation

### slot setText

```cpp
void setText(
    const QString & text
)
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

Updated on  3 February 2021 at 15:05:45 CET