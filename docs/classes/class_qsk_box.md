---
title: QskBox
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

Inherited by [QskDialogButtonBox](/docs/classes/class_qsk_dialog_button_box/), [QskGridBox](/docs/classes/class_qsk_grid_box/), [QskIndexedLayoutBox](/docs/classes/class_qsk_indexed_layout_box/), [QskInputPanelBox](/docs/classes/class_qsk_input_panel_box/), [QskInputPredictionBar](/docs/classes/class_qsk_input_prediction_bar/), [QskTabBar](/docs/classes/class_qsk_tab_bar/), [QskVirtualKeyboard](/docs/classes/class_qsk_virtual_keyboard/)

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[panelChanged](/docs/classes/class_qsk_box/#signal-panelchanged)**(bool ) |
| void | **[paddingChanged](/docs/classes/class_qsk_box/#signal-paddingchanged)**(const QMarginsF & ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBox](/docs/classes/class_qsk_box/#function-qskbox)**(QQuickItem * parent =nullptr) |
| | **[QskBox](/docs/classes/class_qsk_box/#function-qskbox)**(bool hasPanel, QQuickItem * parent =nullptr) |
| | **[~QskBox](/docs/classes/class_qsk_box/#function-~qskbox)**() override |
| void | **[setPanel](/docs/classes/class_qsk_box/#function-setpanel)**(bool on) |
| bool | **[hasPanel](/docs/classes/class_qsk_box/#function-haspanel)**() const |
| void | **[setPadding](/docs/classes/class_qsk_box/#function-setpadding)**(qreal padding) |
| void | **[setPadding](/docs/classes/class_qsk_box/#function-setpadding)**(const QMarginsF & padding) |
| void | **[resetPadding](/docs/classes/class_qsk_box/#function-resetpadding)**() |
| QMarginsF | **[padding](/docs/classes/class_qsk_box/#function-padding)**() const |
| QRectF | **[layoutRectForSize](/docs/classes/class_qsk_box/#function-layoutrectforsize)**(const QSizeF & size) const override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[panel](/docs/classes/class_qsk_box/#property-panel)**  |
| QskMargins | **[padding](/docs/classes/class_qsk_box/#property-padding)**  |

## Public Signals Documentation

### signal panelChanged

```cpp
void panelChanged(
    bool 
)
```


### signal paddingChanged

```cpp
void paddingChanged(
    const QMarginsF & 
)
```


## Public Functions Documentation

### function QskBox

```cpp
QskBox(
    QQuickItem * parent =nullptr
)
```


### function QskBox

```cpp
QskBox(
    bool hasPanel,
    QQuickItem * parent =nullptr
)
```


### function ~QskBox

```cpp
~QskBox() override
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


### function setPadding

```cpp
void setPadding(
    qreal padding
)
```


### function setPadding

```cpp
void setPadding(
    const QMarginsF & padding
)
```


### function resetPadding

```cpp
void resetPadding()
```


### function padding

```cpp
QMarginsF padding() const
```


### function layoutRectForSize

```cpp
QRectF layoutRectForSize(
    const QSizeF & size
) const override
```


## Public Property Documentation

### property panel

```cpp
bool panel;
```


### property padding

```cpp
QskMargins padding;
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET