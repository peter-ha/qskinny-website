---
title: QskInputPanelBox
layout: docs

---




Inherits from QskBox

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskInputPanelBox/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[ProxyPanel](/docs/classes/classQskInputPanelBox/#subcontrol-proxypanel)**  |
| const QskAspect::Subcontrol | **[ProxyText](/docs/classes/classQskInputPanelBox/#subcontrol-proxytext)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[PanelHint](/docs/classes/classQskInputPanelBox/#enum-panelhint)** { InputProxy = 1 << 0, Prediction = 1 << 1} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputPanelBox](/docs/classes/classQskInputPanelBox/#function-qskinputpanelbox)**(QQuickItem * parent =nullptr) |
| | **[~QskInputPanelBox](/docs/classes/classQskInputPanelBox/#function-~qskinputpanelbox)**() override |
| void | **[attachInputItem](/docs/classes/classQskInputPanelBox/#function-attachinputitem)**(QQuickItem * item) |
| QQuickItem * | **[attachedInputItem](/docs/classes/classQskInputPanelBox/#function-attachedinputitem)**() const |
| void | **[setPanelHint](/docs/classes/classQskInputPanelBox/#function-setpanelhint)**(PanelHint hint, bool on) |
| void | **[setPanelHints](/docs/classes/classQskInputPanelBox/#function-setpanelhints)**(PanelHints hints) |
| PanelHints | **[panelHints](/docs/classes/classQskInputPanelBox/#function-panelhints)**() const |
| QQuickItem * | **[inputProxy](/docs/classes/classQskInputPanelBox/#function-inputproxy)**() const |
| QString | **[inputPrompt](/docs/classes/classQskInputPanelBox/#function-inputprompt)**() const |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/classQskInputPanelBox/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[keyPressEvent](/docs/classes/classQskInputPanelBox/#function-keypressevent)**(QKeyEvent * event) override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[panelHintsChanged](/docs/classes/classQskInputPanelBox/#signal-panelhintschanged)**() |
| void | **[inputPromptChanged](/docs/classes/classQskInputPanelBox/#signal-inputpromptchanged)**(const QString & ) |
| void | **[keySelected](/docs/classes/classQskInputPanelBox/#signal-keyselected)**(int keyCode) |
| void | **[predictiveTextSelected](/docs/classes/classQskInputPanelBox/#signal-predictivetextselected)**(int ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setInputPrompt](/docs/classes/classQskInputPanelBox/#slot-setinputprompt)**(const QString & text) |
| void | **[setPrediction](/docs/classes/classQskInputPanelBox/#slot-setprediction)**(const QStringList & prediction) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| PanelHints | **[panelHints](/docs/classes/classQskInputPanelBox/#property-panelhints)**  |
| QString | **[inputPrompt](/docs/classes/classQskInputPanelBox/#property-inputprompt)**  |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol ProxyPanel




### subcontrol ProxyText




## Public Types Documentation

### enum PanelHint

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| InputProxy | 1 << 0|   |
| Prediction | 1 << 1|   |




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

Updated on  3 February 2021 at 15:05:41 CET