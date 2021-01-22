---
title: QskInputPanelBox
layout: docs

---




Inherits from QskBox

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[PanelHint](/docs/classes/class_qsk_input_panel_box/#enum-panelhint)** { InputProxy = 1 << 0, Prediction = 1 << 1} |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setInputPrompt](/docs/classes/class_qsk_input_panel_box/#slot-setinputprompt)**(const QString & text) |
| void | **[setPrediction](/docs/classes/class_qsk_input_panel_box/#slot-setprediction)**(const QStringList & prediction) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[panelHintsChanged](/docs/classes/class_qsk_input_panel_box/#signal-panelhintschanged)**() |
| void | **[inputPromptChanged](/docs/classes/class_qsk_input_panel_box/#signal-inputpromptchanged)**(const QString & ) |
| void | **[keySelected](/docs/classes/class_qsk_input_panel_box/#signal-keyselected)**(int keyCode) |
| void | **[predictiveTextSelected](/docs/classes/class_qsk_input_panel_box/#signal-predictivetextselected)**(int ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputPanelBox](/docs/classes/class_qsk_input_panel_box/#function-qskinputpanelbox)**(QQuickItem * parent =nullptr) |
| | **[~QskInputPanelBox](/docs/classes/class_qsk_input_panel_box/#function-~qskinputpanelbox)**() override |
| void | **[attachInputItem](/docs/classes/class_qsk_input_panel_box/#function-attachinputitem)**(QQuickItem * item) |
| QQuickItem * | **[attachedInputItem](/docs/classes/class_qsk_input_panel_box/#function-attachedinputitem)**() const |
| void | **[setPanelHint](/docs/classes/class_qsk_input_panel_box/#function-setpanelhint)**(PanelHint hint, bool on) |
| void | **[setPanelHints](/docs/classes/class_qsk_input_panel_box/#function-setpanelhints)**(PanelHints hints) |
| PanelHints | **[panelHints](/docs/classes/class_qsk_input_panel_box/#function-panelhints)**() const |
| QQuickItem * | **[inputProxy](/docs/classes/class_qsk_input_panel_box/#function-inputproxy)**() const |
| QString | **[inputPrompt](/docs/classes/class_qsk_input_panel_box/#function-inputprompt)**() const |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/class_qsk_input_panel_box/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[keyPressEvent](/docs/classes/class_qsk_input_panel_box/#function-keypressevent)**(QKeyEvent * event) override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| PanelHints | **[panelHints](/docs/classes/class_qsk_input_panel_box/#property-panelhints)**  |
| QString | **[inputPrompt](/docs/classes/class_qsk_input_panel_box/#property-inputprompt)**  |

## Public Types Documentation

### enum PanelHint

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| InputProxy | 1 << 0|   |
| Prediction | 1 << 1|   |




## Public Slots Documentation

### slot setInputPrompt

```cpp
void setInputPrompt(
    const QString & text
)
```


### slot setPrediction

```cpp
void setPrediction(
    const QStringList & prediction
)
```


## Public Signals Documentation

### signal panelHintsChanged

```cpp
void panelHintsChanged()
```


### signal inputPromptChanged

```cpp
void inputPromptChanged(
    const QString & 
)
```


### signal keySelected

```cpp
void keySelected(
    int keyCode
)
```


### signal predictiveTextSelected

```cpp
void predictiveTextSelected(
    int 
)
```


## Public Functions Documentation

### function QskInputPanelBox

```cpp
QskInputPanelBox(
    QQuickItem * parent =nullptr
)
```


### function ~QskInputPanelBox

```cpp
~QskInputPanelBox() override
```


### function attachInputItem

```cpp
void attachInputItem(
    QQuickItem * item
)
```


### function attachedInputItem

```cpp
QQuickItem * attachedInputItem() const
```


### function setPanelHint

```cpp
void setPanelHint(
    PanelHint hint,
    bool on
)
```


### function setPanelHints

```cpp
void setPanelHints(
    PanelHints hints
)
```


### function panelHints

```cpp
PanelHints panelHints() const
```


### function inputProxy

```cpp
QQuickItem * inputProxy() const
```


### function inputPrompt

```cpp
QString inputPrompt() const
```


### function effectiveSubcontrol

```cpp
QskAspect::Subcontrol effectiveSubcontrol(
    QskAspect::Subcontrol subControl
) const override
```


## Protected Functions Documentation

### function keyPressEvent

```cpp
void keyPressEvent(
    QKeyEvent * event
) override
```


## Public Property Documentation

### property panelHints

```cpp
PanelHints panelHints;
```


### property inputPrompt

```cpp
QString inputPrompt;
```


-------------------------------

Updated on 22 January 2021 at 17:05:48 CET