---
title: QskInputPanel
layout: docs

---




Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

Inherited by QSK_QT_PRIVATE_END::Panel

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[commitKey](/docs/classes/class_qsk_input_panel/#slot-commitkey)**(int keyCode) |
| void | **[commitPredictiveText](/docs/classes/class_qsk_input_panel/#slot-commitpredictivetext)**(int index) |
| virtual void | **[setPrompt](/docs/classes/class_qsk_input_panel/#slot-setprompt)**(const QString & ) |
| virtual void | **[setPrediction](/docs/classes/class_qsk_input_panel/#slot-setprediction)**(const QStringList & ) |
| virtual void | **[setPredictionEnabled](/docs/classes/class_qsk_input_panel/#slot-setpredictionenabled)**(bool ) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[keySelected](/docs/classes/class_qsk_input_panel/#signal-keyselected)**(int keyCode) |
| void | **[predictiveTextSelected](/docs/classes/class_qsk_input_panel/#signal-predictivetextselected)**(int ) |
| void | **[inputItemDestroyed](/docs/classes/class_qsk_input_panel/#signal-inputitemdestroyed)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputPanel](/docs/classes/class_qsk_input_panel/#function-qskinputpanel)**(QQuickItem * parent =nullptr) |
| | **[~QskInputPanel](/docs/classes/class_qsk_input_panel/#function-~qskinputpanel)**() override |
| void | **[attachInputItem](/docs/classes/class_qsk_input_panel/#function-attachinputitem)**(QQuickItem * item) |
| void | **[updateInputPanel](/docs/classes/class_qsk_input_panel/#function-updateinputpanel)**(Qt::InputMethodQueries queries) |
| virtual QQuickItem * | **[inputProxy](/docs/classes/class_qsk_input_panel/#function-inputproxy)**() const |
| QQuickItem * | **[inputItem](/docs/classes/class_qsk_input_panel/#function-inputitem)**() const |
| virtual Qt::Alignment | **[alignment](/docs/classes/class_qsk_input_panel/#function-alignment)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[attachItem](/docs/classes/class_qsk_input_panel/#function-attachitem)**(QQuickItem * ) =0 |

## Public Slots Documentation

### slot commitKey

```cpp
void commitKey(
    int keyCode
)
```


### slot commitPredictiveText

```cpp
void commitPredictiveText(
    int index
)
```


### slot setPrompt

```cpp
virtual void setPrompt(
    const QString & 
)
```


### slot setPrediction

```cpp
virtual void setPrediction(
    const QStringList & 
)
```


### slot setPredictionEnabled

```cpp
virtual void setPredictionEnabled(
    bool 
)
```


## Public Signals Documentation

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


### signal inputItemDestroyed

```cpp
void inputItemDestroyed()
```


## Public Functions Documentation

### function QskInputPanel

```cpp
QskInputPanel(
    QQuickItem * parent =nullptr
)
```


### function ~QskInputPanel

```cpp
~QskInputPanel() override
```


### function attachInputItem

```cpp
void attachInputItem(
    QQuickItem * item
)
```


### function updateInputPanel

```cpp
void updateInputPanel(
    Qt::InputMethodQueries queries
)
```


### function inputProxy

```cpp
virtual QQuickItem * inputProxy() const
```


### function inputItem

```cpp
QQuickItem * inputItem() const
```


### function alignment

```cpp
virtual Qt::Alignment alignment() const
```


## Protected Functions Documentation

### function attachItem

```cpp
virtual void attachItem(
    QQuickItem * 
) =0
```


-------------------------------

Updated on 26 January 2021 at 09:44:53 CET